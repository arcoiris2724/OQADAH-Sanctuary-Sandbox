#!/bin/bash

# 🌐 Begin OQADAH Production Deployment
echo "🔄 Starting Netlify deploy at $(date +"%Y-%m-%d %H:%M:%S")..."

# Add all changes
git add .

# Commit with timestamp
git commit -m "🌐 Auto-deploy: $(date +"%Y-%m-%d %H:%M:%S")"

# Push to GitHub (optional, remove if not needed)
git push origin main

# Deploy to Netlify production
netlify deploy --prod --dir=.

# ✨ Completion Message
echo "✅ Deployment complete! Live at https://oqadah.com"
