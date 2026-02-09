#!/bin/bash

# 🚀 Deploy Dashboard to Vercel
# This script handles the complete deployment process

echo "🎯 Dashboard Deployment to Vercel"
echo "=================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Run this script from the unified-dashboard directory."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo "✅ Build successful!"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📥 Installing Vercel CLI..."
    npm install -g vercel
fi

echo "🚀 Deploying to Vercel..."
vercel --prod

echo ""
echo "🎉 Deployment complete!"
echo "🔗 Your dashboard should now be live on Vercel"
echo ""
echo "📋 Next steps:"
echo "1. Set up environment variables in Vercel dashboard if needed"
echo "2. Configure custom domain if desired"  
echo "3. Connect servers through the dashboard UI"
echo ""
echo "🤝 Ready for collaborative work with BOBB! 🚀"