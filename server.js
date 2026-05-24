const express    = require("express");
const multer     = require("multer");
const path       = require("path");
const fs         = require("fs");
const os         = require("os");
const nodemailer = require("nodemailer");

const app  = express();
const PORT = 3001;

// ── Email configuration ──────────────────────────────
// Uses Gmail with an App Password (not your regular Gmail password).
// Generate one at: https://myaccount.google.com/apppasswords
// Then set these two environment variables before starting the server:
//   export EMAIL_USER=your-gmail@gmail.com
//   export EMAIL_PASS=your-16-char-app-password
const EMAIL_USER = process.env.EMAIL_USER || "";
const EMAIL_PASS = process.env.EMAIL_PASS || "";
const EMAIL_TO   = "hunter@universalrecruiting.com";

let transporter = null;
if (EMAIL_USER && EMAIL_PASS) {
  transporter = nodemailer.createTransport({
    host: "mail.networksolutions.com",
    port: 25,
    secure: false,
    ignoreTLS: true,
    auth: { user: EMAIL_USER, pass: EMAIL_PASS },
  });
  console.log(`✉  Email notifications → ${EMAIL_TO}`);
} else {
  console.log("⚠  EMAIL_USER / EMAIL_PASS not set — email notifications disabled.");
}

async function sendNotification({ name, email, phone, role, linkedin, message, filename }) {
  if (!transporter) return;
  try {
    await transporter.sendMail({
      from: `"Universal Recruiting Website" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      subject: `New Resume: ${name} — ${role}`,
      text: [
        `Name:     ${name}`,
        `Email:    ${email}`,
        `Phone:    ${phone || "—"}`,
        `Role:     ${role}`,
        `LinkedIn: ${linkedin || "—"}`,
        `Message:  ${message || "—"}`,
        `File:     ${filename}`,
      ].join("\n"),
    });
    console.log(`✉  Notification sent for ${name}`);
  } catch (err) {
    console.error("Email error:", err.message);
  }
}

// Resumes land here on the Desktop
const BASE_DIR = path.join(os.homedir(), "Desktop", "Universal Recruiting Resumes");

// Sanitize a role name into a safe folder name
function roleFolder(role) {
  return (role || "Other")
    .replace(/[\/\\:*?"<>|]/g, "-")
    .replace(/\s*-\s*/g, " - ")
    .trim();
}

// Multer: hold the file in memory, we'll write it ourselves
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
  fileFilter: (_req, file, cb) => {
    const ok = [".pdf", ".doc", ".docx"].includes(
      path.extname(file.originalname).toLowerCase()
    );
    cb(null, ok);
  },
});

// CORS — allows the form to POST from any origin (safe for a public site)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

// Serve all HTML / CSS / image files
app.use(express.static(__dirname));

// ── Resume submission endpoint ───────────────────────
app.post("/submit-resume", (req, res) => {
  upload.single("attachment")(req, res, (uploadErr) => {
    if (uploadErr) {
      console.error("Upload error:", uploadErr.message);
      return res.status(400).json({ success: false, message: uploadErr.message });
    }

    try {
      const { name, email, phone, role, linkedin, message } = req.body;

      if (!name || !email || !role) {
        return res.status(400).json({ success: false, message: "Missing required fields." });
      }

      if (!req.file) {
        return res.status(400).json({ success: false, message: "Please attach a PDF, DOC, or DOCX resume." });
      }

      // Create role folder on Desktop
      const folder  = roleFolder(role);
      const roleDir = path.join(BASE_DIR, folder);
      fs.mkdirSync(roleDir, { recursive: true });

      // Save the resume file
      const ext      = path.extname(req.file.originalname).toLowerCase();
      const date     = new Date().toISOString().slice(0, 10);
      const safeName = name.replace(/[\/\\:*?"<>|]/g, "-");
      const filename = `${safeName} - ${date}${ext}`;
      fs.writeFileSync(path.join(roleDir, filename), req.file.buffer);

      console.log(`✓ Resume received: ${name} → ${folder}/${filename}`);
      sendNotification({ name, email, phone, role, linkedin, message, filename });
      res.json({ success: true });

    } catch (err) {
      console.error("Submission error:", err.message);
      res.status(500).json({ success: false, message: "Server error. Please try again." });
    }
  });
});

// 404 catch-all
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, () => {
  console.log(`\nUniversal Recruiting Website running at: http://localhost:${PORT}`);
  console.log(`Resumes will be saved to: ${BASE_DIR}\n`);
});
