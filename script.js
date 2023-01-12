var addToWishlistButton = document.getElementById("item-submit")
var minorItemList = document.getElementById("minor-item-list")
var itemInput = document.getElementById("item-input")

addToWishlistButton.disabled = true;

itemInput.addEventListener("keyup", e => {
    if (e.target.value == "") {
        addToWishlistButton.disabled = true;
    } else {
        addToWishlistButton.disabled = false;
    }
})

function addWishlistItem() {
    var itemDuplicate = document.querySelector(".minor-item").cloneNode(true)
    itemDuplicate.classList.add("minor-item-show")
    itemDuplicate.querySelector(".minor-item-name").innerHTML = itemInput.value
    minorItemList.appendChild(itemDuplicate)

    // Reset input
    itemInput.value = ""
    addToWishlistButton.disabled = true;
}

function removeWishlistItem(item) {
    item.parentNode.parentNode.remove()
}

function checkBoxChange(checkbox) {
    var item = checkbox.parentNode.parentNode
    // var itemHeader = item.querySelector(".item-name")

    item.classList.toggle("item-checked")

    // if (checkbox.checked == true) {
    //     itemHeader.style.textDecoration = "line-through"
    //     item.classList.add("item-checked")

    // } else {
    //     itemHeader.style.textDecoration = "none"
    //     item.classList.remove("item-checked")
    // }
}