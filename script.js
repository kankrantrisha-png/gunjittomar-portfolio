/* =====================================
   GUNJIT TOMAR PORTFOLIO
   JavaScript
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       NAVIGATION
    ================================= */

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        link.addEventListener("click", function () {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    /* ================================
       SCROLL REVEAL
    ================================= */

    const revealElements = document.querySelectorAll(
        ".hero-content, .hero-photo, .about-section, .work-section, .skills-section, .contact-section, .work-card, .skill-row"
    );

    const revealObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* ================================
       ACTIVE NAVIGATION ON SCROLL
    ================================= */

    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    });


    /* ================================
       IMAGE LOAD CHECK
    ================================= */

    const images = document.querySelectorAll("img");

    images.forEach(image => {

        image.addEventListener("error", () => {

            console.log(
                "Image not found:",
                image.getAttribute("src")
            );

        });

    });


    /* ================================
       YEAR
    ================================= */

    const yearElement = document.querySelector("footer span");

    if (yearElement) {

        const currentYear = new Date().getFullYear();

        yearElement.textContent =
            "© " + currentYear + " — Built with curiosity.";

    }


    /* ================================
       MOUSE MOVEMENT EFFECT
    ================================= */

    const heroPhoto = document.querySelector(".hero-photo");

    if (heroPhoto && window.innerWidth > 850) {

        heroPhoto.addEventListener("mousemove", (event) => {

            const rect = heroPhoto.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) / rect.width - 0.5;

            const y =
                (event.clientY - rect.top) / rect.height - 0.5;


            heroPhoto.style.transform =
                `perspective(900px)
                 rotateY(${x * 3}deg)
                 rotateX(${y * -3}deg)`;

        });


        heroPhoto.addEventListener("mouseleave", () => {

            heroPhoto.style.transform =
                "perspective(900px) rotateY(0deg) rotateX(0deg)";

        });

    }


    /* ================================
       BUTTON RIPPLE
    ================================= */

    const buttons = document.querySelectorAll(
        ".primary-button, .contact-button, .nav-button"
    );

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            this.style.transform = "scale(0.97)";

            setTimeout(() => {

                this.style.transform = "";

            }, 120);

        });

    });

});