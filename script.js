window.addEventListener("scroll", function () {

    let sections = document.querySelectorAll("section");


    sections.forEach(function(section) {

        let position = section.getBoundingClientRect().top;

        let screenHeight = window.innerHeight;


        if (position < screenHeight - 100) {

            section.classList.add("show");

        }

    });

});