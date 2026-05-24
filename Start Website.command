#!/bin/bash
cd "$(dirname "$0")"

# Kill any previous instance on port 3001
lsof -ti :3001 | xargs kill -9 2>/dev/null
sleep 0.5

echo "Starting Universal Recruiting website..."

# Load email credentials from .env if it exists
if [ -f ".env" ]; then
  export $(grep -v '^#' .env | xargs)
fi

node server.js &
SERVER_PID=$!

# Wait for server to be ready then open browser
sleep 1.5
open http://localhost:3001

echo "Server running at http://localhost:3001 (PID $SERVER_PID)"
echo "Press Ctrl+C to stop."
wait $SERVER_PID
