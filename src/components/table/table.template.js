const CODES = {
    'A': 65,
    'Z': 90
}

function toCell() {
    return `
      <div class="cell selected" contenteditable></div>
    `
}

function toColumn() {
    return `
        <div class="column">
            A
        </div>
    `
}

function createRow(index, content) {
    return `
        <div class="row">
            <div class="row-info">${index ? index : ''}</div>
            <div class="row-data">${content}</div>
        </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function creareTable(rowCount = 15) {
    const rews = []
    const colsCount = CODES.Z - CODES.A + 1

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map (toColumn)
        .join('')

    rows.push(createRow(null, cols))

    for (let i=0; i < rowCount; i++) {
        const cell = new Array(colsCount)
            .fill('')
            .map(toCell)
            .join('')
        rows.push(createRow(i + 1, cell))
    }

    return rews.join('') 
}
