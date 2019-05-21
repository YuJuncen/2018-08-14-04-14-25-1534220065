function fromEntries(entries) {
    let result = {};
    for (let [k, v] of entries) {
        result[k] = v;
    }
    return result;
}

function arrayToLineMapping(items) {
    return fromEntries(items.map((item, idx) => [idx, item]));
}

const line1 = arrayToLineMapping("._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.".split(/\s+/));
const line2 = arrayToLineMapping("|.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|".split(/\s+/));
const line3 = arrayToLineMapping("|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|".split(/\s+/));

function toLEDString(n) {
    const stringNumber = String(n);
    const chars = Array.from(stringNumber);
    return [line1, line2, line3].map(line => 
        chars.map(c => line[c]).join(' ')
    ).join('\n'); 
}

module.exports = n => toLEDString(n) + '\n'