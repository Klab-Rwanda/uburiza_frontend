import os
import re

dir_path = r"c:\Users\theni\OneDrive\Desktop\Front-end Uburiza Learn\src"

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove all dark mode classes
    content = re.sub(r'\s+dark:[a-zA-Z0-9\-:]+', '', content)
    
    # Replace black with emerald
    content = re.sub(r'text-black\b', 'text-emerald-950', content)
    content = re.sub(r'bg-black\b', 'bg-emerald-950', content)
    content = re.sub(r'bg-black/(\d+)', r'bg-emerald-950/\1', content)
    
    # Replace grays with emeralds to enforce "only green and white"
    content = re.sub(r'text-gray-(\d+)', r'text-emerald-\1', content)
    content = re.sub(r'bg-gray-(\d+)', r'bg-emerald-\1', content)
    content = re.sub(r'border-gray-(\d+)', r'border-emerald-\1', content)
    content = re.sub(r'ring-gray-(\d+)', r'ring-emerald-\1', content)
    content = re.sub(r'shadow-gray-(\d+)', r'shadow-emerald-\1', content)
    content = re.sub(r'divide-gray-(\d+)', r'divide-emerald-\1', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

for root, dirs, files in os.walk(dir_path):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.js') or file.endswith('.css'):
            file_path = os.path.join(root, file)
            process_file(file_path)

print("Replacement complete.")
