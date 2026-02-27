const fs = require('fs');
const map = {
    // Infinity Dark
    '#090A0F': '#111218',
    '#0D0E15': '#15161D',
    '#11121A': '#181922',
    '#E2E8F0': '#CBD5E1',
    '#FFFFFF': '#F1F5F9',
    '#A855F7': '#9333EA',
    '#34D399': '#10B981',
    '#EF4444': '#F87171',
    '#3B82F6': '#60A5FA',
    // Six Eyes
    '#080F1A': '#0F1622',
    '#0B1120': '#121828',
    '#0F172A': '#161D2E',
    '#000000': '#111827',
    '#06B6D4': '#0891B2',
    '#38BDF8': '#0EA5E9',
    '#22D3EE': '#06B6D4',
    // Red Reversal
    '#140A0A': '#1A1010',
    '#120909': '#181010',
    '#1E1111': '#221515',
    '#F8FAFC': '#E2E8F0',
    // Limitless Light
    '#F1F5F9': '#E2E8F0',
    '#0F172A': '#1E293B',
    '#6366F1': '#4F46E5',
    '#10B981': '#059669'
};

const files = [
    'themes/gojo-infinity-color-theme.json',
    'themes/gojo-six-eyes-color-theme.json',
    'themes/gojo-red-reversal-color-theme.json',
    'themes/gojo-limitless-light-color-theme.json'
];

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    for (const [oldHex, newHex] of Object.entries(map)) {
        content = content.replace(new RegExp(oldHex, 'gi'), newHex);
    }
    fs.writeFileSync(file, content);
}
console.log('Themes softened successfully.');
