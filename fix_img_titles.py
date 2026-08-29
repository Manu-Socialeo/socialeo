import os
import re
import glob

def process_html_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False

    def add_title(match):
        nonlocal modified
        tag = match.group(0)
        if 'title=' in tag:
            return tag
        alt_match = re.search(r'alt=(["\'])(.*?)\1', tag)
        if alt_match:
            alt_text = alt_match.group(2)
            quote = alt_match.group(1)
            modified = True
            # Insert title attribute right after alt
            return tag[:alt_match.end()] + f' title={quote}{alt_text}{quote}' + tag[alt_match.end():]
        return tag

    new_content = re.sub(r'<img\b[^>]*>', add_title, content)

    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated: {filepath}")

# Process all html files in root, services/, and blogs/
html_files = glob.glob('*.html') + glob.glob('services/*.html') + glob.glob('blogs/*.html')
print(f"Checking {len(html_files)} HTML files for missing img titles...")
for file in html_files:
    process_html_file(file)

print("Finished updating image title attributes!")
