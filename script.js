/* =====================================
   ASTRONOVA
   JAVASCRIPT
===================================== */


/* =====================================
   PLANET INFORMATION
===================================== */

const planets = {

    Mercury: {

        title: "Mercury",

        description:
            "Mercury is the smallest planet in our Solar System and the closest planet to the Sun. It has a rocky surface and experiences very large temperature changes between day and night."

    },


    Venus: {

        title: "Venus",

        description:
            "Venus is the second planet from the Sun. It has a thick atmosphere and is the hottest planet in the Solar System."

    },


    Earth: {

        title: "Earth",

        description:
            "Earth is the third planet from the Sun. It has liquid water, a protective atmosphere and is currently the only known planet to support life."

    },


    Mars: {

        title: "Mars",

        description:
            "Mars is known as the Red Planet because of iron minerals in its soil. Scientists study Mars to understand its history and whether it could once have supported life."

    },


    Jupiter: {

        title: "Jupiter",

        description:
            "Jupiter is the largest planet in the Solar System. It is a gas giant with a powerful magnetic field and a famous storm called the Great Red Spot."

    },


    Saturn: {

        title: "Saturn",

        description:
            "Saturn is a gas giant famous for its spectacular ring system. The rings are made mostly of ice and rocky particles."

    },


    Uranus: {

        title: "Uranus",

        description:
            "Uranus is an ice giant with a blue-green appearance caused by methane in its atmosphere. Its rotation is strongly tilted compared with most planets."

    },


    Neptune: {

        title: "Neptune",

        description:
            "Neptune is the eighth planet from the Sun. It is a cold blue ice giant with some of the fastest winds in the Solar System."

    }

};


/* =====================================
   SHOW PLANET INFORMATION
===================================== */

function showPlanet(planetName) {

    const planet =
        planets[planetName];


    if (!planet) {

        return;

    }


    alert(

        planet.title +
        "\n\n" +
        planet.description

    );

}


/* =====================================
   SPACE MISSION INFORMATION
===================================== */

const missions = {

    "Apollo 11":

        "Apollo 11 was the first crewed mission to land humans on the Moon.",


    "James Webb":

        "The James Webb Space Telescope is designed to observe distant objects and help scientists study stars, galaxies and the early universe.",


    "Voyager":

        "The Voyager spacecraft have travelled far beyond the outer planets and continue sending scientific information toward interstellar space."

};


/* =====================================
   SHOW MISSION
===================================== */

function showMission(missionName) {

    const mission =
        missions[missionName];


    if (!mission) {

        return;

    }


    alert(

        missionName +
        "\n\n" +
        mission

    );

}


/* =====================================
   CONTACT FORM
===================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formMessage =
    document.getElementById(
        "formMessage"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document
                .getElementById("name")
                .value
                .trim();


            const email =
                document
                .getElementById("email")
                .value
                .trim();


            const message =
                document
                .getElementById("message")
                .value
                .trim();


            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {

                formMessage.textContent =
                    "Please fill in all fields.";

                return;

            }


            formMessage.textContent =

                "Thank you, " +
                name +
                "! Your message has been received.";


            contactForm.reset();

        }
    );

}


/* =====================================
   NAVIGATION ACTIVE EFFECT
===================================== */

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


navLinks.forEach(
    function(link) {

        link.addEventListener(
            "click",
            function() {

                navLinks.forEach(
                    function(item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add(
                    "active"
                );

            }
        );

    }
);


/* =====================================
   SCROLL ANIMATION
===================================== */

const sections =
    document.querySelectorAll(
        ".section"
    );


const observer =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";


                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


sections.forEach(
    function(section) {

        section.style.opacity =
            "0";


        section.style.transform =
            "translateY(30px)";


        section.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";


        observer.observe(section);

    }
);