const jsonify = (res => res.json())

async function Addcategory(columnIndex, cell) {
    const categories = [fetch("http://jservice.io/api/category?id=309").then(jsonify),
    fetch("http://jservice.io/api/category?id=306").then(jsonify),
    fetch("http://jservice.io/api/category?id=136").then(jsonify),
    fetch("http://jservice.io/api/category?id=680").then(jsonify),
    fetch("http://jservice.io/api/category?id=21").then(jsonify),
    fetch("http://jservice.io/api/category?id=2537").then(jsonify)
    ]
    Promise.all(categories).then(newCategories => cell.cell.innerHTML = newCategories[columnIndex].title)
}

async function Addvalue() {
    const values = [fetch("http://jservice.io/api/category?id=309").then(jsonify),
    fetch("http://jservice.io/api/category?id=306").then(jsonify),
    fetch("http://jservice.io/api/category?id=136").then(jsonify),
    fetch("http://jservice.io/api/category?id=680").then(jsonify),
    fetch("http://jservice.io/api/category?id=21").then(jsonify),
    fetch("http://jservice.io/api/category?id=2537").then(jsonify)
    ]
    Promise.all(categories).then(newCategories => cell.cell.innerHTML = newCategories[columnIndex].value)
}