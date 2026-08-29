import glob
import re

html_files = glob.glob('*.html') + glob.glob('services/*.html') + glob.glob('blogs/*.html')
count = 0

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove news.google.com/swg script tag
    new_content = re.sub(r'\s*<script async src="https://news\.google\.com/swg/js/v1/publisher\.js"></script>', '', content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        count += 1
        print(f"Removed swg script from: {filepath}")

print(f"Total files cleaned: {count}")
