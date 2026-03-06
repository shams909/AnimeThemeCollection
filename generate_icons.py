import os

os.makedirs('icons', exist_ok=True)

svgs = {
    'scroll.svg': '''<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
<path d="M250 150h524v724H250z" stroke="black" stroke-width="40" fill="none"/>
<circle cx="250" cy="200" r="50" fill="black"/>
<circle cx="774" cy="200" r="50" fill="black"/>
<circle cx="250" cy="824" r="50" fill="black"/>
<circle cx="774" cy="824" r="50" fill="black"/>
<path d="M350 400h324M350 550h324M350 700h324" stroke="black" stroke-width="40"/>
</svg>''',
    'sharingan.svg': '''<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
<circle cx="512" cy="512" r="400" stroke="black" stroke-width="50" fill="none"/>
<circle cx="512" cy="512" r="100" fill="black"/>
<circle cx="512" cy="212" r="50" fill="black"/>
<circle cx="252" cy="662" r="50" fill="black"/>
<circle cx="772" cy="662" r="50" fill="black"/>
<path d="M512 212q-100 -50 -100 -120" stroke="black" stroke-width="40" fill="none"/>
<path d="M252 662q-120 50 -150 150" stroke="black" stroke-width="40" fill="none"/>
<path d="M772 662q120 50 150 150" stroke="black" stroke-width="40" fill="none"/>
</svg>''',
    'kunai.svg': '''<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
<path d="M512 50L300 400h170v350a40 40 0 0 0 84 0V400h170z" fill="black"/>
<circle cx="512" cy="850" r="80" stroke="black" stroke-width="50" fill="none"/>
</svg>''',
    'pokeball.svg': '''<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
<circle cx="512" cy="512" r="400" stroke="black" stroke-width="60" fill="none"/>
<path d="M112 512h800" stroke="black" stroke-width="60"/>
<circle cx="512" cy="512" r="150" stroke="black" stroke-width="60" fill="white"/>
<circle cx="512" cy="512" r="75" fill="black"/>
</svg>''',
    'seal.svg': '''<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
<circle cx="512" cy="512" r="400" stroke="black" stroke-width="60" fill="none"/>
<polygon points="512,112 858,712 165,712" stroke="black" stroke-width="60" fill="none"/>
<polygon points="512,912 165,312 858,312" stroke="black" stroke-width="60" fill="none"/>
<circle cx="512" cy="512" r="200" stroke="black" stroke-width="40" fill="none"/>
</svg>'''
}

for name, content in svgs.items():
    with open(f'icons/{name}', 'w') as f:
        f.write(content)

print("SVGs created successfully!")
