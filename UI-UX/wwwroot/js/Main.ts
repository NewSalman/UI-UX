window.addEventListener("load", () => {
    let navigations = document.getElementById("Navigations");
    
    window.addEventListener("scroll", () => {
        setNavgationFixed(navigations);
    })

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
