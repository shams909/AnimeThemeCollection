const fs = require('fs');
const file = 'themes/gojo-sunset-orange-color-theme.json';

// Replacing reddish oranges with pure/golden oranges
const map = {
    // Reddish browns -> Neutral warm darks
    '#140A05': '#161311',
    '#0F0703': '#120F0D',
    '#191008': '#191512',
    '#1F120A': '#241D18',
    '#7C2D12': '#5D4037', // Deep borders
    '#7C2D1280': '#5D403780',
    '#9A341280': '#6D4C4180',
    '#C2410C80': '#8D6E6380',
    
    // Main accents
    '#F97316': '#FF9800', // Orange 500 -> Material Orange 500
    '#EA580C': '#F57C00', // Orange 600 -> Material Orange 700
    '#F9731640': '#FF980040',
    '#F9731630': '#FF980030',
    
    // Highlights
    '#FDBA74': '#FFB74D', // Find match
    '#FDBA7460': '#FFB74D60',
    '#FDBA7440': '#FFB74D40',
    '#FB923C': '#FFA726',
    
    // Syntax
    '#EF4444': '#FF7043', // Pure red -> Deep orange/coral
    '#F87171': '#FF8A65',
    '#FCD34D': '#FFCA28', // Yellower strings
    '#FDE68A': '#FFE082'
};

let content = fs.readFileSync(file, 'utf8');
for (const [oldHex, newHex] of Object.entries(map)) {
    content = content.replace(new RegExp(oldHex, 'gi'), newHex);
}
fs.writeFileSync(file, content);
console.log('Orange theme tuned successfully.');
