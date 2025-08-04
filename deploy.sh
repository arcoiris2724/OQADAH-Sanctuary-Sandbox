#!/bin/bash

# Step into the working directory
cd /d/OQADAH_Site

# Stage all changes
git add .

# Commit with timestamp
git commit -m "Auto-deploy: $(date +"%Y-%m-%d %H:%M:%S")"

# Deploy to Netlify (production)
netlify deploy --prod --dir=.
