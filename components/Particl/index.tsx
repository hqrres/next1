import Link from "next/link";

// particles
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.


export const Particl = () => {

  // particles
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
      await console.log(container);
  }, []);

  return (
    <>
        <Particles
            id="tsparticles"
            // init={particlesInit}
            // loaded={particlesLoaded}
            options={{
                background: {
                    color: "#000",
                    image: "",
                    position: "50% 50%",
                    repeat: "no-repeat",
                    size: "cover"
                },
                fpsLimit: 60,
                particles: {
                    number: {
                    value: 1000,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                    },
                    color: {
                    value: ["#ffffff", "#fff", "#fff", "#fff"]
                    },
                    shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#ffffff"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: "https://cdn.matteobruni.it/images/particles/github.svg",
                        width: 100,
                        height: 100
                    }
                    },
                    opacity: {
                    value: 1,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 3,
                        opacity_min: 0.1,
                        sync: false
                    }
                    },
                    size: {
                    value: 1,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 20,
                        size_min: 0.1,
                        sync: false
                    }
                    },
                    line_linked: {
                    enable: false,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                    },
                    move: {
                    enable: true,
                    speed: 0.5,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    },
                    warp: true
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                    onhover: {
                        enable: false,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                    },
                    modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                        opacity: 1
                        }
                    },
                    absorbers: {
                        color: "#ff0000",
                        size: {
                        value: 10,
                        limit: 50,
                        random: {
                            enable: true,
                            minimumValue: 5
                        }
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 0.8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                    }
                },
                retina_detect: true,
                absorbers: {
                    orbits: true,
                    destroy: false,
                    size: {
                    value: 5,
                    limit: 50,
                    random: false,
                    density: 15
                    },
                    position: {
                    x: 50,
                    y: 50
                    }
                },
                detectRetina: true,
            }}
        />
    </>
  );
};



export { Particles };

