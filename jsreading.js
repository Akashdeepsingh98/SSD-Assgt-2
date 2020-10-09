var listitems = document.getElementsByTagName("button");
var i;
for (i = 0; i < listitems.length; i++) {
    listitems[i].addEventListener("click", function () {
        var collapsible = this.nextElementSibling;
        if (collapsible.style.display === "block") {
            collapsible.style.display = "none";
        }
        else {
            collapsible.style.display = "block";
        }
    });
}