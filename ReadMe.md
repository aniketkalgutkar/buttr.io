## Prereq
- Node Version: 20+

## Getting Started

First, run the development server:

```bash
npm i
npm run dev
```

# Blog content
 - The content for the blog goes in the `content` folder
 - The assets for the blog like images goes in the public/content_assets folder

# Direct Build And Deploy to GitHub
```
npm run gh-build-deploy
```
# Alter hacks to deploy anything to buttr.io
## Deploy simple HTML,CSS, JS
Update the index.html in gh-pages branch

## To Deploy a next build:
Copy all content from the /out folder and copy it to buttr.io's gh-pages branch. The index.html is on the gh-pages branch will be picked as the root page