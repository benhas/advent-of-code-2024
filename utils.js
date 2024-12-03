const fs = require('fs');

function readFileAndPopulateLists(filePath) {
    const firstList = [];
    const secondList = [];

    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n');

    lines.forEach(line => {
        if (line.trim()) {
            const [firstNum, secondNum] = line.split('   ').map(Number);
            firstList.push(firstNum);
            secondList.push(secondNum);
        }
    });

    return { firstList, secondList };
}

module.exports = { readFileAndPopulateLists };