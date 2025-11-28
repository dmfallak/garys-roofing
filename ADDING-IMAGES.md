# How to Add Your Own Images

## Quick Guide

### 1. Add Images to Public Folder

Copy your project photos to:
```
public/images/projects/
```

**Recommended naming:**
- `project-1-before.jpg` and `project-1-after.jpg`
- `project-2-before.jpg` and `project-2-after.jpg`
- etc.

### 2. Update Projects Data

Edit `data/projects.ts` and change the image URLs:

**Before (using Unsplash):**
```typescript
beforeImage: "https://images.unsplash.com/photo-1632823469964-9751d4733ca9?w=800",
afterImage: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800",
```

**After (using local images):**
```typescript
beforeImage: "/images/projects/project-1-before.jpg",
afterImage: "/images/projects/project-1-after.jpg",
```

### 3. Full Example

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Residential Roof Replacement",
    description: "Complete asphalt shingle roof replacement on a two-story home in Cambridge.",
    category: "Residential",
    location: "Cambridge, ON",
    year: "2024",
    beforeImage: "/images/projects/cambridge-residential-before.jpg",
    afterImage: "/images/projects/cambridge-residential-after.jpg",
  },
  // ... more projects
];
```

## Image Best Practices

### Size & Format
- **Recommended size**: 1200-1600px wide
- **Format**: JPG for photos, PNG for graphics
- **File size**: Keep under 500KB each (compress if needed)

### Compression Tools
- **Online**: TinyPNG.com, Squoosh.app
- **Mac**: ImageOptim
- **Command line**: `convert input.jpg -quality 85 -resize 1600x output.jpg`

### Aspect Ratio
- Use consistent aspect ratio (e.g., 4:3 or 16:9)
- Next.js will handle optimization automatically

## Adding Other Images

### Logo
Replace the placeholder in:
```
public/images/logo.svg
```
Or create:
```
public/images/logo.png
```

Then update in:
- `components/layout/Header.tsx`
- `components/layout/Footer.tsx`

### Hero Background
Add a hero image:
```
public/images/hero-bg.jpg
```

Then update `components/home/Hero.tsx`:
```tsx
<div className="relative bg-gradient-to-br from-primary to-primary-dark py-24"
     style={{backgroundImage: 'url(/images/hero-bg.jpg)'}}>
  {/* existing content */}
</div>
```

### Service Images
Add service-specific images:
```
public/images/services/
  ├── roof-installation.jpg
  ├── roof-repair.jpg
  └── inspection.jpg
```

## Quick Commands

### Copy images from another folder:
```bash
cp /path/to/your/photos/* public/images/projects/
```

### Optimize images (if you have ImageMagick):
```bash
cd public/images/projects/
for img in *.jpg; do
  convert "$img" -quality 85 -resize 1600x "optimized-$img"
done
```

### Check image sizes:
```bash
ls -lh public/images/projects/
```

## After Adding Images

1. Test locally: `npm run dev`
2. Check gallery page: http://localhost:3000/gallery
3. Verify images load correctly
4. Commit changes:
   ```bash
   git add public/images/ data/projects.ts
   git commit -m "Add real project photos"
   git push
   ```
5. AWS Amplify will auto-deploy the changes!

## Troubleshooting

**Images not showing?**
- Check file paths are correct (start with `/images/`)
- Verify files exist in `public/images/projects/`
- Check browser console for 404 errors
- Clear browser cache

**Images too large?**
- Compress them using tools above
- Next.js will optimize them automatically
- Consider using WebP format for better compression

**Wrong aspect ratio?**
- Crop images to consistent size before uploading
- Use 4:3 or 16:9 aspect ratio
- Or adjust the gallery CSS to handle varying sizes
