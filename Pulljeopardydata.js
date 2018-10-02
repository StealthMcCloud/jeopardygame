const hydrate = (res => res.json())

async function Addcategory(columnIndex, cell) {
    const categories = [fetch("http://jservice.io/api/category?id=309").then(hydrate),
    fetch("http://jservice.io/api/category?id=306").then(hydrate),
    fetch("http://jservice.io/api/category?id=136").then(hydrate),
    fetch("http://jservice.io/api/category?id=680").then(hydrate),
    fetch("http://jservice.io/api/category?id=21").then(hydrate),
    fetch("http://jservice.io/api/category?id=2537").then(hydrate)
    ]
    Promise.all(categories).then(newCategories => cell.cell.innerHTML = newCategories[columnIndex].title)
}

function Addvalue(rowIndex, cell) {
    const value = rowIndex * 100
    cell.cell.innerHTML = "$" + value
}