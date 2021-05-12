window.addEventListener("load", () => {
    let navigations = document.getElementById("Navigations");

    window.addEventListener("scroll", () => {
        setNavgationFixed(navigations);
    })

});

function setNavgationFixed(navigations) {
    

    if (pageYOffset == 0) {

        navigations.classList.remove("MyNavigations-fixed");

        return;
    }


    navigations.classList.add("MyNavigations-fixed");
}
