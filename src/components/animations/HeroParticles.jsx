import React, { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const HeroParticles = () => {
    const [init, setInit] = useState(false);

    // Initializing the particles engine
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // Configuration for the tech startup look
    const options = useMemo(() => ({
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse", // Partikel menjauh saat cursor mendekat
                },
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 120,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: ["#00f2ff", "#0077ff", "#bc00ff"], // Cyan, Neon Blue, Purple
            },
            links: {
                color: "#00f2ff",
                distance: 150,
                enable: true,
                opacity: 0.2, // Garis koneksi tipis dan transparan
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: true,
                speed: 1.5, // Pergerakan halus
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800, // Kepadatan sedang hingga tinggi
                },
                value: 120,
            },
            opacity: {
                value: { min: 0.3, max: 0.7 },
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1,
                },
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
            shadow: {
                enable: true,
                color: "#00f2ff",
                blur: 5, // Efek glow ringan
            }
        },
        detectRetina: true,
        fullScreen: {
            enable: false, // Digunakan sebagai background inline
        },
        background: {
            color: "transparent",
        }
    }), []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={options}
            className="absolute inset-0 z-0 pointer-events-none opacity-80"
        />
    );
};

export default HeroParticles;
