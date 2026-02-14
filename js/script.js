document.addEventListener("DOMContentLoaded", () => {

    /* ================= SECTION NAV OBSERVER ================= */
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                navLinks.forEach(link => link.classList.remove("active"));

                const activeLink = document.querySelector(
                    `a[href="#${entry.target.id}"]`
                );

                if (activeLink) activeLink.classList.add("active");

                sections.forEach(sec => sec.classList.remove("active"));
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.6 });

    sections.forEach(section => sectionObserver.observe(section));





    /* ================= SECTION SHOW ANIMATION ================= */
    const animatedSections = document.querySelectorAll(
        ".about, .work, .skills, .contact"
    );

    const animationObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting);
        });
    }, { threshold: 0.25 });

    animatedSections.forEach(sec => animationObserver.observe(sec));







    /* ================= RESUME MODAL ================= */
    window.openResume = function () {
        const modal = document.getElementById("resumeModal");
        if (modal) modal.style.display = "flex";
    };

    window.closeResume = function () {
        const modal = document.getElementById("resumeModal");
        if (modal) modal.style.display = "none";
    };






    /* ================= PROJECT CARD CLICK ================= */
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("click", () => {

            if (card.classList.contains("active")) {
                card.classList.remove("active");
                return;
            }

            projectCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
        });
    });





    /* ================= 3D CUBE SYSTEM ================= */
    const cubeGrid = document.querySelector(".cube-grid");
    const scene = document.querySelector(".cube-scene");

    if (cubeGrid && scene) {

        cubeGrid.innerHTML = "";

        const rows = 5;
        const cols = 6;
        const spacing = 70;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {

                const cube = document.createElement("div");
                cube.classList.add("cube");

                cube.style.left = col * spacing + "px";
                cube.style.top = row * spacing + "px";
                cube.style.animationDelay = (row + col) * 0.3 + "s";

                cube.innerHTML = `
                    <div class="face front"></div>
                    <div class="face back"></div>
                    <div class="face right"></div>
                    <div class="face left"></div>
                    <div class="face top"></div>
                    <div class="face bottom"></div>
                `;

                cubeGrid.appendChild(cube);
            }
        }

        cubeGrid.style.transition = "transform 0.3s ease";

        scene.addEventListener("mousemove", (e) => {

            const rect = scene.getBoundingClientRect();

            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (mouseY - centerY) / 20;
            const rotateY = (mouseX - centerX) / 20;

            cubeGrid.style.transform =
                `rotateX(${60 - rotateX}deg) rotateZ(45deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        scene.addEventListener("mouseleave", () => {
            cubeGrid.style.transform =
                "rotateX(60deg) rotateZ(45deg) rotateY(0deg) scale(1)";
        });
    }






    /* ================= MOBILE TOUCH TILT (FIXED) ================= */
    if (window.innerWidth <= 768) {

        const cards = document.querySelectorAll(".project-card, .skill");

        cards.forEach(card => {

            card.style.transition = "transform 0.3s ease";

            card.addEventListener("touchmove", (e) => {

                if (!e.touches[0]) return;

                const rect = card.getBoundingClientRect();
                const x = e.touches[0].clientX - rect.left;
                const y = e.touches[0].clientY - rect.top;

                const rotateY = (x / rect.width - 0.5) * 8;
                const rotateX = (0.5 - y / rect.height) * 8;

                card.style.transform =
                    `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

            }, { passive: true });

            card.addEventListener("touchend", () => {
                card.style.transform =
                    "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
            });

        });
    }

});