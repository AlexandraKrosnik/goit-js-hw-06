let categoriesEl = document.querySelector("#categories");
let itemEl = document.querySelectorAll(".item");
let categoriesChildren = countChildrenElement(categoriesEl);

console.log("Number of categories: ", categoriesChildren);

itemEl.forEach(item => categoryElements(item));


function countChildrenElement(el)
{
    return el.childElementCount;
}

function categoryElements(item)
{
    let category = item.querySelector("h2");
    console.log("Category: ", category.textContent);
    let elements = item.querySelector("ul");
    console.log("Elements: ", countChildrenElement(elements));
}