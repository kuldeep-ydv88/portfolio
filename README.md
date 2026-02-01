# Kuldeep Yadav - Portfolio

A professional portfolio website built with Next.js App Router, featuring a modern and responsive design.

## 🚀 Live Demo

 - [View Portfolio](https://kuldeep-ydv88.github.io/portfolio/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn

## 🛠️ Getting Started

1. Clone Repository
```bash
git clone https://github.com/kuldeep-ydv88/portfolio.git
cd portfolio
```

2. Install Dependencies
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚢 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch. The GitHub Actions workflow will:
1. Build the Next.js application
2. Export it as static files
3. Deploy to GitHub Pages

### Manual Deployment

You can also manually trigger a deployment:
1. Go to the "Actions" tab in your GitHub repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### First-Time Setup

To enable GitHub Pages for your repository:
1. Go to your repository Settings
2. Navigate to "Pages" in the sidebar
3. Under "Build and deployment":
   - Source: Select "GitHub Actions"
4. The site will be available at: `https://kuldeep-ydv88.github.io/portfolio/`

## 🔧 Configuration

The project is configured with the following settings for GitHub Pages:

- **basePath**: `/portfolio` - Ensures all routes work correctly under the repository path
- **assetPrefix**: `/portfolio/` - Ensures all assets load from the correct path
- **output**: `export` - Enables static export for GitHub Pages hosting
- **images.unoptimized**: `true` - Required for static export

## 📝 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

 - Design and Code is Copyright &copy; <a href="https://prebuiltui.com/?utm_source=eliana" target="_blank">PrebuiltUI</a>
 - Licensed cover under [MIT]
 - Distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a>

