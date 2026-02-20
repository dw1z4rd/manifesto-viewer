# Manifesto Viewer

A basic SvelteKit project to display "The Uncertainty Obligation" manifesto in HTML format.

## What's Included

- **SvelteKit 5** with Vite
- **Marked** library for markdown parsing
- Clean, readable typography and styling
- Responsive design for mobile and desktop
- Support for images embedded in the markdown

## Project Structure

```
manifesto-viewer/
├── src/
│   ├── routes/
│   │   ├── +page.svelte          # Main page component with styling
│   │   └── +page.server.ts       # Server-side markdown loader
│   └── app.html                  # HTML template
├── static/
│   └── media/                    # Images from the manifesto
├── uncertainty-obligation-final-with-img.md  # The manifesto document
├── package.json
├── svelte.config.js
└── vite.config.ts
```

## Running the Project

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to the URL shown (usually http://localhost:5173/)

## Building for Production

```bash
npm run build
npm run preview
```

## Features

- **Markdown rendering**: Converts the markdown file to HTML on the server
- **Styled typography**: Clean, academic-style formatting for headings, paragraphs, blockquotes, and lists
- **Image support**: Displays images referenced in the markdown
- **Responsive**: Adapts to different screen sizes
- **Simple**: Minimal dependencies, easy to understand and modify

## Customization

To display a different markdown file:
1. Place your markdown file in the project root
2. Update the filename in `src/routes/+page.server.ts`
3. If your markdown references images, place them in the `static/` folder
