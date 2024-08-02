
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { init } from "next/dist/compiled/webpack/webpack";
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export const Particle = () => {

  
  // particles
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
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
                value: ["#ffffff"]
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
            size: {
                value: 1,
                random: true,
            },
            move: {
                enable: true,
                speed: 0.2,
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
        retina_detect: true,
        background: {
            color: "#000",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
        }
    }),
    [],
  );
  
  

  if (init) {
    return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
  }

  return <></>;
};

