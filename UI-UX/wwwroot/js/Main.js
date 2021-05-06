window.addEventListener("load", function () {
    var navigations = document.getElementById("Navigations");
    window.addEventListener("scroll", function () {
        setNavgationFixed(navigations);
    });
});
function setNavgationFixed(navigations) {
    navigations.style.position = "fixed";
    navigations.style.opacity = 0.8;
    navigations.style.width = "100%";
    if (pageYOffset == 0) {
        navigations.style.position = null;
        navigations.style.opacity = null;
    }
}
//# sourceMappingURL=Main.js.map