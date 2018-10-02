class Grid {
    constructor(options) {
        this.gridArray = []
        this.numberOfRows = options.numberOfRows || 6
        this.numberOfColumns = options.numberOfColumns || 6
        this.gridContainer = document.getElementById("main")
        this.elementId = options.elementId
        this.newRows()
    }

    newRows() {
        for (let rowIndex = 0; rowIndex < this.numberOfRows; rowIndex++) {
            this.rowIndex = rowIndex
            this.rowArray = []
            this.gridArray.push(this.rowArray)
            this.rowElement = document.createElement("div")
            this.rowElement.classList.add("newDiv")
            this.gridContainer.appendChild(this.rowElement)
            for (let columnIndex = 0; columnIndex < this.numberOfColumns; columnIndex++) {
                const cell = new Cell(rowIndex, columnIndex, this.rowElement)
                // if (rowIndex === 0) {
                //     Addcategory(columnIndex, cell)
                // }
                if (rowIndex > 0) {
                    Addvalue(rowIndex, cell)
                }
                // if (rowIndex > 0) {
                // addEventHandler("click", Displayquestion())
                // }
                this.rowArray.push(cell)
            }
        }
    }
}

class Cell {
    constructor(rowIndex, columnIndex, rowParent) {
        this.rowIndex = rowIndex
        this.columnIndex = columnIndex
        this.rowParent = rowParent
        this.createCell()
    }
    createCell() {
        this.cell = document.createElement("span")
        this.rowParent.appendChild(this.cell)
    }
}

const grid = new Grid({
    numberOfRows: 6,
    numberOfColumns: 6,
    parentContainerId: "main",
})

function Addvalue(rowIndex, cell) {
    const value = rowIndex * 100
    cell.cell.innerHTML = "$" + value
}

function Addscore() {
    let score = 0
}

function Inputanswer() {
    let answerBox = document.createElement("INPUT")
    document.getElementById("answer")
    answerBox.setAttribute("type", "text")
    answerBox.setAttribute("value", "What/Who/When/Where is")
    answer.appendChild(answerBox)
}
