(function () {
  'use strict';

  var ROLES = {
    'vp-sales': {
      tag: 'Leadership',
      title: 'VP / Director of Sales',
      location: 'National',
      level: 'Executive',
      overview: 'We place senior sales leaders with organizations that are serious about scaling high-performance revenue teams. These roles demand proven track records in enterprise SaaS environments and the ability to lead through ambiguity while delivering consistent results.',
      responsibilities: [
        'Build, lead, and scale a quota-carrying sales team across multiple regions or verticals',
        'Own the full revenue target and annual forecasting process',
        'Develop go-to-market strategy, territory planning, and sales playbooks',
        'Recruit, coach, and retain top-performing Account Executives and Sales Managers',
        'Collaborate cross-functionally with Marketing, Product, and Customer Success',
        'Report directly to the CEO or CRO on pipeline health and business performance',
      ],
      requirements: [
        '8+ years of enterprise B2B sales experience',
        '3+ years in a sales leadership role managing teams of 5 or more',
        'Proven track record of consistent quota attainment and year-over-year team growth',
        'Deep familiarity with SaaS sales cycles and enterprise deal structures',
        'Strong analytical skills — comfortable with CRM data, forecasting, and revenue operations',
        'Experience in HCM, WFM, ERP, or related enterprise software is a strong plus',
      ],
      openings: [
        { title: 'Regional Sales Director, Benefits', location: 'National', file: 'job-descriptions/regional-sales-director-benefits.docx', download: 'Regional Sales Director Benefits.docx' },
        { title: 'VP of Estimating', location: 'New York City', file: 'job-descriptions/vp-estimating-nyc.docx', download: 'VP Estimating NYC.docx' },
      ],
    },
    'sales-management': {
      tag: 'Management',
      title: 'Sales Management',
      location: 'National',
      level: 'Mid-Senior',
      overview: 'We place player-coaches and frontline sales managers who can drive revenue — not just oversee it. These roles sit between the AE team and senior leadership, requiring both selling credibility and the ability to develop reps into top performers.',
      responsibilities: [
        'Manage a team of 4–8 Account Executives with shared quota responsibility',
        'Run weekly pipeline reviews, forecasting calls, and one-on-one coaching sessions',
        'Step into strategic deals to support reps through complex sales cycles',
        'Build and iterate on sales playbooks, call frameworks, and objection-handling guides',
        'Partner with Sales Enablement and Marketing on territory planning and campaigns',
        'Identify hiring needs and participate in AE recruiting and onboarding',
      ],
      requirements: [
        '5+ years of B2B sales experience with a consistent track record of quota attainment',
        '2+ years managing a team of direct sales reports',
        'Experience selling SaaS solutions in a competitive enterprise environment',
        'Strong CRM fluency (Salesforce preferred) and pipeline management skills',
        'Excellent coaching, communication, and conflict-resolution skills',
        'Background in HR tech, workforce management, or related verticals a plus',
      ],
      openings: [
        { title: 'Chief of Staff', location: 'National', file: 'job-descriptions/chief-of-staff.docx', download: 'Chief of Staff.docx' },
      ],
    },
    'account-executives': {
      tag: 'Sales',
      title: 'Account Executives',
      location: 'National',
      level: 'Mid-Level',
      overview: 'We place proven closers into complex, SaaS-driven sales environments where performance is expected and rewarded. These are full-cycle roles — from prospecting through close — with the tools, support, and territory to succeed.',
      responsibilities: [
        'Own a defined territory or vertical with full-cycle sales responsibility',
        'Prospect, qualify, and advance opportunities from first contact to close',
        'Conduct discovery calls, product demos, and executive-level presentations',
        'Manage a pipeline of 30–50 active opportunities with accurate CRM hygiene',
        'Collaborate with Solutions Engineers and Implementation on complex enterprise deals',
        'Consistently meet or exceed quarterly and annual quota targets',
      ],
      requirements: [
        '3+ years of B2B SaaS sales experience in a closing role',
        'Demonstrated quota attainment — 100%+ in at least two of the last three years',
        'Experience managing complex, multi-stakeholder sales cycles of 60–180+ days',
        'Strong discovery and consultative selling skills',
        'Proficiency with Salesforce or a comparable CRM platform',
        'Experience in HCM, payroll, ERP, or workforce management software is a strong plus',
      ],
      openings: [
        { title: 'Enterprise FinTech Sales Executive', location: 'National', file: 'job-descriptions/enterprise-fintech-sales-executive.docx', download: 'Enterprise FinTech Sales Executive.docx' },
        { title: 'HCM & Payroll Sales Rep', location: 'Upstate, NY', file: 'job-descriptions/hcm-payroll-sales-rep-upstate-ny.docx', download: 'HCM Payroll Sales Rep Upstate NY.docx' },
        { title: 'HCM Regional Sales Rep', location: 'West Coast', file: 'job-descriptions/hcm-regional-sales-rep-west-coast.docx', download: 'HCM Regional Sales Rep West Coast.docx' },
        { title: 'PEO Sales Consultant', location: 'Dallas, TX', file: 'job-descriptions/peo-sales-consultant-dallas.docx', download: 'PEO Sales Consultant Dallas.docx' },
        { title: 'PEO Sales Consultant', location: 'West Coast', file: 'job-descriptions/peo-sales-consultant-west.docx', download: 'PEO Sales Consultant West.docx' },
        { title: 'Financial Advisor', location: 'National', file: 'job-descriptions/financial-advisor.docx', download: 'Financial Advisor.docx' },
      ],
    },
    'technical-sales': {
      tag: 'Pre-Sales',
      title: 'Technical Sales / Presales',
      location: 'National',
      level: 'Mid-Senior',
      overview: 'We place solutions engineers and presales specialists who can own the technical side of the conversation — demonstrating platform value, navigating complex requirements, and building the confidence that closes enterprise deals.',
      responsibilities: [
        'Partner with Account Executives to support complex enterprise sales cycles',
        'Lead product demonstrations tailored to prospect-specific use cases and workflows',
        'Conduct technical discovery to understand customer environments and integration needs',
        'Respond to RFPs, RFIs, and security questionnaires',
        'Own proof-of-concept engagements and manage technical evaluations',
        'Serve as a bridge between Sales and Product — surfacing market feedback and feature gaps',
      ],
      requirements: [
        '2+ years in a presales, solutions engineering, or sales engineering role',
        'Hands-on experience with enterprise SaaS platforms — demos, configuration, or implementation',
        'Strong technical foundation: APIs, integrations, data structures, or light scripting',
        'Excellent communication skills — able to translate complexity for non-technical audiences',
        'Experience with HCM, WFM, ERP, or payroll platforms strongly preferred',
        "Bachelor's degree in Computer Science, Engineering, or a related field preferred",
      ],
      openings: [
        { title: 'HVAC Sales Engineer', location: 'Florida', file: 'job-descriptions/hvac-sales-engineer-florida.docx', download: 'HVAC Sales Engineer Florida.docx' },
        { title: 'UKG Pro WFM Solutions Consultant', location: 'National', file: 'job-descriptions/ukg-pro-wfm-solutions-consultant.docx', download: 'UKG Pro WFM Solutions Consultant.docx' },
      ],
    },
    'entry-level-sales': {
      tag: 'Entry Level',
      title: 'Entry Level Sales Associates',
      location: 'National',
      level: 'Entry Level',
      overview: 'We place emerging sales professionals with the right instincts into high-growth environments where careers are built fast. These roles are ideal for motivated individuals who are hungry to learn, eager to compete, and ready to develop into top performers.',
      responsibilities: [
        'Prospect and qualify inbound and outbound leads through calls, emails, and LinkedIn outreach',
        'Support Account Executives with pipeline management and account research',
        'Conduct initial discovery calls to assess prospect fit and pass qualified opportunities',
        'Maintain accurate CRM records and daily activity logging',
        'Participate in structured sales training and onboarding programs',
        'Learn and apply proven sales methodologies under the guidance of experienced reps',
      ],
      requirements: [
        "Bachelor's degree or equivalent experience — no specific major required",
        'Strong verbal and written communication skills',
        'Genuine curiosity, competitiveness, and a drive to build a career in sales',
        'Comfortable in a high-activity, metric-driven work environment',
        'Prior internship or experience in sales, customer service, or business development is a plus — but not required',
        'Interest in enterprise technology or B2B SaaS is a bonus',
      ],
      openings: [],
    },
    'implementation-engineers': {
      tag: 'Technical',
      title: 'Implementation & Software Engineers',
      location: 'National',
      level: 'All Levels',
      overview: 'We place implementation specialists and software engineers across leading enterprise platforms — candidates who can hit the ground running, earn client trust quickly, and deliver complex deployments on time and within scope.',
      responsibilities: [
        'Lead end-to-end implementation of enterprise software solutions for client organizations',
        'Configure systems, map data, and manage integrations across platforms and environments',
        'Conduct client-facing discovery, user training, and go-live support',
        'Manage project timelines, deliverables, and ongoing stakeholder communication',
        'Troubleshoot technical issues and escalate through appropriate channels',
        'Document configurations, workflows, and best practices for future reference',
      ],
      requirements: [
        '2+ years of hands-on implementation or software engineering experience',
        'Familiarity with HCM, WFM, ERP, payroll, or related enterprise platforms (e.g., UKG, Ceridian, Workday, SAP, ADP)',
        'Strong project management and client communication skills',
        'Ability to manage multiple concurrent implementations without losing attention to detail',
        'Technical proficiency with APIs, SQL, or scripting languages is a strong plus',
        'PMP certification or relevant platform certifications are a bonus',
      ],
      openings: [
        { title: 'Embedded Firmware Engineer', location: 'National', file: 'job-descriptions/embedded-firmware-engineer.docx', download: 'Embedded Firmware Engineer.docx' },
      ],
    },
  };

  // Badge open-position counts onto cards that have openings
  document.querySelectorAll('.role-card[data-role]').forEach(function (card) {
    var role = ROLES[card.getAttribute('data-role')];
    if (role && role.openings && role.openings.length > 0) {
      var badge = document.createElement('span');
      badge.className = 'role-openings-badge';
      badge.textContent = role.openings.length === 1
        ? '1 Open Position'
        : role.openings.length + ' Open Positions';
      card.appendChild(badge);
    }
  });

  var ROLE_TO_OPTION = {
    'vp-sales':                 'VP / Director of Sales',
    'sales-management':         'Sales Management',
    'account-executives':       'Account Executive',
    'technical-sales':          'Sales Engineer / Presales',
    'entry-level-sales':        'Entry Level Sales',
    'implementation-engineers': 'Implementation Specialist',
  };

  var backdrop    = document.getElementById('role-modal-backdrop');
  var modalBody   = document.getElementById('role-modal-body');
  var modal       = document.getElementById('role-modal');
  var closeBtn    = document.getElementById('role-modal-close');
  var submitBtn   = document.getElementById('role-submit-btn');

  function buildOpenings(openings) {
    if (!openings || openings.length === 0) return '';
    var rows = openings.map(function (o) {
      return '<a class="modal-opening-item" href="' + o.file + '" download="' + o.download + '">' +
               '<div class="modal-opening-info">' +
                 '<span class="modal-opening-title">' + o.title + '</span>' +
                 '<span class="modal-opening-loc">' + o.location + '</span>' +
               '</div>' +
               '<span class="modal-opening-dl">&#8595;&nbsp;Download JD</span>' +
             '</a>';
    }).join('');
    return '<div class="role-modal-section role-modal-openings">' +
             '<h4>Current Openings</h4>' +
             '<div class="modal-openings-list">' + rows + '</div>' +
           '</div>';
  }

  function openModal(roleKey) {
    var role = ROLES[roleKey];
    if (!role) return;

    modalBody.innerHTML =
      '<span class="role-tag">' + role.tag + '</span>' +
      '<h2 id="role-modal-title">' + role.title + '</h2>' +
      '<div class="role-modal-meta"><span>' + role.location + '</span><span>&middot;</span><span>' + role.level + '</span></div>' +
      '<p class="role-modal-overview">' + role.overview + '</p>' +
      buildOpenings(role.openings) +
      '<div class="role-modal-section">' +
        '<h4>Responsibilities</h4>' +
        '<ul>' + role.responsibilities.map(function (r) { return '<li>' + r + '</li>'; }).join('') + '</ul>' +
      '</div>' +
      '<div class="role-modal-section">' +
        '<h4>Requirements</h4>' +
        '<ul>' + role.requirements.map(function (r) { return '<li>' + r + '</li>'; }).join('') + '</ul>' +
      '</div>';

    if (submitBtn && ROLE_TO_OPTION[roleKey]) {
      submitBtn.href = 'submit.html?role=' + encodeURIComponent(ROLE_TO_OPTION[roleKey]);
    }

    modal.scrollTop = 0;
    backdrop.classList.add('is-open');
    backdrop.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    backdrop.classList.remove('is-open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.role-card[data-role]').forEach(function (card) {
    card.addEventListener('click', function () {
      openModal(card.getAttribute('data-role'));
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card.getAttribute('data-role'));
      }
    });
  });

  closeBtn.addEventListener('click', closeModal);

  backdrop.addEventListener('click', function (e) {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && backdrop.classList.contains('is-open')) closeModal();
  });

})();
