# 📚 Learning Hub - Open Source Learning Platform Template

A modern, lightweight learning platform built with Next.js for creating YouTube-based courses with markdown notes. Perfect for educators, content creators, or communities wanting to share structured learning content.

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-cyan)

## ✨ Features

- **YouTube Integration** - Embed unlisted YouTube videos for each topic
- **Flexible Notes System** - Support for inline markdown, local files, or external links
- **Zero Backend** - Entirely static, JSON-based content management
- **Fast Search** - Client-side search across subjects and topics
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Easy Deployment** - Deploy to Netlify, Vercel, or GitHub Pages in minutes
- **Customizable** - Simple theming and structure modifications

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git installed
- A code editor (VS Code recommended)

### Setup

1. **Use this template**
   ```bash
   git clone https://github.com/aj-abhinai/learning-platform.git
   cd learning-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:3000`

That's it! You should see the platform with sample content.

## 📁 Project Structure

```
learning-platform/
├── public/
│   ├── data/
│   │   └── learningHub.json    # Your content goes here
│   └── notes/                   # Local markdown files
│       └── algebra-basics.md
├── src/
│   ├── app/                     # Next.js app router
│   ├── components/              # Reusable components
│   └── lib/                     # Types and utilities
├── package.json
└── README.md
```

## 📝 Adding Your Content

### Content Structure

Edit `public/data/learningHub.json`:

```json
{
  "subjects": [
    {
      "id": "your-subject",
      "name": "Subject Name",
      "description": "Brief description",
      "thumbnail": "https://images.unsplash.com/...",
      "topics": [
        {
          "id": "topic-1",
          "title": "Topic Title",
          "videoUrl": "https://www.youtube.com/embed/VIDEO_ID",
          "notes": "## Inline markdown notes here",
          "notesFile": "/notes/topic-1.md",
          "externalNotesUrl": "https://external-resource.com",
          "duration": "15:30"
        }
      ]
    }
  ]
}
```

### Three Ways to Add Notes

1. **Inline Notes**: Add markdown directly in JSON using `"notes"` field
2. **Local Files**: Create `.md` files in `public/notes/` and reference with `"notesFile"`
3. **External Links**: Link to external resources with `"externalNotesUrl"`

### Getting YouTube Embed URLs

1. Upload video to YouTube (can be unlisted)
2. Copy the video ID from the URL
3. Format as: `https://www.youtube.com/embed/VIDEO_ID`

## 🎨 Customization

### Changing Site Title
Edit `src/components/Header.tsx` - replace "Learning Hub" with your title

### Changing Colors
The platform uses Tailwind CSS. Main gradient colors are in:
- `src/components/Header.tsx` - Navigation bar gradient
- `src/components/SubjectCard.tsx` - Card gradient fallback

### Adding Thumbnails
Use any image URL. Free options:
- Unsplash: `https://images.unsplash.com/photo-ID?w=800&h=450`
- Upload to imgur.com and use direct link
- GitHub repository for images

## 🚢 Deployment

### Deploy to Netlify (Recommended)

1. Push your code to GitHub
2. Connect to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Deploy!

### Deploy to Vercel

1. Push to GitHub
2. Import to Vercel
3. Framework preset: Next.js
4. Deploy!

### Deploy to GitHub Pages

1. Add to `package.json`:
   ```json
   "scripts": {
     "export": "next build && next export"
   }
   ```
2. Run `npm run export`
3. Push `out` folder to `gh-pages` branch

## 🛠️ Configuration

### Environment Setup
No environment variables needed! Everything runs client-side.

### Static Export
The project is configured for static export by default (`next.config.ts`):
```javascript
output: 'export'
```

## 📚 Sample Content

The template includes three sample subjects:
- **Mathematics** - Algebra, Calculus, Geometry
- **Programming** - Python, JavaScript basics
- **Science** - Physics, Chemistry fundamentals

Replace these with your own content in `learningHub.json`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🔧 Troubleshooting

<details>
<summary>Videos not loading?</summary>

- Ensure you're using the embed URL format: `https://www.youtube.com/embed/VIDEO_ID`
- Check if the video is set to public or unlisted (not private)
</details>

<details>
<summary>Notes not showing?</summary>

- For local files: Ensure the file exists in `public/notes/` folder
- Check the JSON uses `"notesFile"` (not `"notes"`) for local files
- Verify the path starts with `/` like `/notes/filename.md`
</details>

<details>
<summary>Images not displaying?</summary>

- Use external image hosting (Unsplash, imgur)
- Check if the URL is direct image link (ends with .jpg, .png)
</details>

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Sample video content from YouTube
- Mathematics image by [Antoine Dautry](https://unsplash.com/@antoine1003?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/mathematics-computation-05A-kdOH6Hw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

## 💬 Support

If you have questions or need help:
- Open an [issue](https://github.com/aj-abhinai/learning-platform/issues)
- Check out [other projects](https://inverted-dodo.github.io/) by the creator

## ⭐ Show Your Support

If this project helped you, please give it a star! It helps others discover the template.

## 🌟 Showcase

Using this template for your platform? Add it here!
- Your Platform Name - Brief description ([link](#))
- Community Learning Hub - Math tutorials for students ([example](#))

---

<div align="center">
Made with ❤️ for educators and learners everywhere

<sub>Created by <a href="https://inverted-dodo.github.io/">inverted-dodo</a> • Passionate about open education</sub>
</div>