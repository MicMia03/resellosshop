let prodContainer = document.querySelectorAll(".product-container");


prodContainer.forEach((cont) => {
    cont.onmouseleave = () => {
        cont.scrollTo(0, 0);
    }
})
