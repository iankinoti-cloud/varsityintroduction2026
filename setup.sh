#!/bin/bash
# setup.sh - Seamless setup for project protection system

# Make kinoti.sh executable
chmod +x kinoti.sh 2>/dev/null

# Lock main project files
chmod u-w index.html index.js style.css styles.css 2>/dev/null

# Regenerate hash for kinoti.sh
sha256sum kinoti.sh | awk '{print $1}' > kinoti.sh.hash

# User instructions
clear
cat <<EOF
========================================
  Project Protection Setup Complete!
========================================
- All main files are locked (read-only).
- kinoti.sh is ready to unlock the project.

To unlock and edit files, run:
  ./kinoti.sh

If you need help, contact the official developer.
========================================
EOF
