window.addEventListener("load", function () {
    var navigations = document.getElementById("Navigations");
    window.addEventListener("scroll", function () {
        setNavgationFixed(navigations);
    });
});
function setNavgationFixed(navigations) {
    if (pageYOffset == 0) {
        navigations.classList.remove("MyNavigations-fixed");
        return;
    }
    navigations.classList.add("MyNavigations-fixed");
}
//# sourceMappingURL=Main.js.map