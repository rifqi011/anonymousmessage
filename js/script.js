particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#F72798",
        },
        shape: {
            type: "circle",
            stroke: {
                width: 5,
                color: "#000000",
            },
        },
        opacity: {
            value: 0.8,
            random: true,
            anim: {
                enable: true,
                speed: .5,
                opacity_min: 0,
                sync: false,
            },
        },
        size: {
            value: 15,
            random: true,
            anim: {
                enable: true,
                speed: 5,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: true,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false,
                mode: "repulse",
            },
            onclick: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4,
            },
        },
    },
    retina_detect: true,
});
