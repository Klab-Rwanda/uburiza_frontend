import os
import re

src_dir = 'c:/Users/theni/OneDrive/Desktop/Front-end Uburiza Learn/src'
files_changed = 0

for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.jsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Replace hover:text-emerald-400 through 950 with hover:text-gray-700
            new_content = re.sub(r'hover:text-emerald-[4-9]\d{0,2}', 'hover:text-gray-700', content)
            
            # Replace text-emerald-400 through 950 with text-black
            new_content = re.sub(r'text-emerald-[4-9]\d{0,2}', 'text-black', new_content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                files_changed += 1

print(f"Changed text colors in {files_changed} files.")
