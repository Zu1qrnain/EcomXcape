import re

with open('/Users/apple/Desktop/EcomXcape/src.html', 'r') as f:
    content = f.read()

# remove the style tag block to make it shorter
content = re.sub(r'<style>.*?</style>', '', content, flags=re.DOTALL)
# remove the base64 images to avoid truncation
content = re.sub(r'data:image/[^"]+', 'PLACEHOLDER', content)

with open('/Users/apple/Desktop/EcomXcape/body.html', 'w') as f:
    f.write(content)
