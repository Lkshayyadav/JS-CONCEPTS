let a= document.querySelectorAll("ul li:nth-child(2n)")
a.forEach(function(element) {
    element.classList.add("highlight")
});