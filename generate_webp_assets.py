import os, glob
from PIL import Image

jpg_files = glob.glob('assets/*.jpg')

for f in jpg_files:
    webp_path = os.path.splitext(f)[0] + '.webp'
    img = Image.open(f)
    if img.mode in ('RGBA', 'P'):
        img = img.convert('RGB')
    
    # If about-studio, scale nicely
    if 'about' in os.path.basename(f).lower() and img.width > 800:
        ratio = 800 / img.width
        new_height = int(img.height * ratio)
        img_resized = img.resize((800, new_height), Image.Resampling.LANCZOS)
        img_resized.save(webp_path, 'WEBP', quality=80)
    elif 'hero' in os.path.basename(f).lower():
        img.save(webp_path, 'WEBP', quality=78)
    else:
        img.save(webp_path, 'WEBP', quality=80)
    
    jpg_size = os.path.getsize(f) / 1024
    webp_size = os.path.getsize(webp_path) / 1024
    print(f"{os.path.basename(f)} ({jpg_size:.1f} KB) -> {os.path.basename(webp_path)} ({webp_size:.1f} KB)")

print("All WebP assets generated successfully!")
