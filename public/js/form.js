const selectElement = document.querySelector("#image-select")
const emptyDiv = document.querySelector("#empty-div")

if (selectElement) {
    selectElement.addEventListener("change", (event) => {
        if (event.target.value != 'Choose...') {
            emptyDiv.innerHTML = `<p>Image preview - </p> <img class="prev-img" src="/images/${event.target.value}.jpg" alt="image">`
        } else {
            emptyDiv.innerHTML = ""
        }
        
    });
}

