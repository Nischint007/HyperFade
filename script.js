const lenis = new Lenis({
  duration: 1.5,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  smoothTouch: true,
  touchMultiplier: 0.25
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

window.addEventListener("load", () => {
  document.fonts.ready.then(() => {
    const tl = gsap.timeline();
    const split = new SplitText("#heading1", { type: "chars" });
    const split2 = new SplitText("#heading2", { type: "chars" });
    const split3 = new SplitText("#left-footer", { type: "chars" });
    const split4 = new SplitText("#middle-footer", { type: "lines" });
    const split5 = new SplitText("#right-footer", { type: "chars" });
    const counter = { value: 0 }
    const loader = document.querySelector("#loader-counter")
    tl.to(counter, {
      value: 100,
      duration: 2,
      ease: "scale.inOut",
      onUpdate: () => {
        loader.innerText = `${Math.floor(counter.value)}`;
      }
    }, "anim");
    tl.to("#loader", {
      y: "-100%",
      duration: 1.8,
      ease: "power3.out"
    }, "anim+=2.2");
    tl.to(loader, {
      autoAlpha: 0,
      duration: 1,
      ease: "power2.out"
    }, "anim+=2");
    tl.to("#loader", {
      autoAlpha: 0,
      duration: 1,
      ease: "power2.out"
    }, "anim+=3");
    tl.from(split.chars, {
      autoAlpha: 0,
      y: 100,
      stagger: {
        amount: 0.5,
        from: "start"
      },
      duration: 1,
      ease: "power3.out"
    }, "anim+=3.2");
    tl.from(split2.chars, {
      autoAlpha: 0,
      y: 120,
      stagger: {
        amount: 0.5,
      },
      duration: 1,
      ease: "power3.out"
    }, "anim+=3.4");
    tl.from("#page1-img", {
      autoAlpha: 0,
      y: "50%",
      scale: 0.8,
      duration: 1,
      ease: "sine.out"
    }, "anim+=4.2");
    tl.from(split3.chars, {
      y: 80,
      autoAlpha: 0,
      stagger: {
        amount: 0.5,
        from: "random",
        ease: "power4.out",
        duration: 1
      },
    }, "anim+=4.6");
    tl.from(split4.lines, {
      y: 40,
      autoAlpha: 0,
      stagger: {
        amount: 0.5,
        from: "random",
        ease: "power4.out",
        duration: 1
      },
    }, "anim+=4.9");
    tl.from(split5.chars, {
      y: 80,
      autoAlpha: 0,
      stagger: {
        amount: 0.5,
        from: "random",
        ease: "power4.out",
        duration: 1
      },
    }, "anim+=5.1");

    const split6 = new SplitText("#page2-heading-1", { type: "chars" });
    const split7 = new SplitText("#page2-heading-2", { type: "words" });
    const split8 = new SplitText("#page2-heading-4", { type: "words" });

    gsap.from(split6.chars, {
      autoAlpha: 0,
      y: 120,
      duration: 1.2,
      ease: "back.out",
      stagger: {
        amount: 0.6,
      },
      scrollTrigger: {
        trigger: "#page2-heading-1",
        scroller: "body",
        start: "top 100%",
        end: "top 40%",
        scrub: 5,
        once: true
      }
    });
    gsap.from(split7.words, {
      autoAlpha: 0,
      y: 120,
      duration: 1.2,
      ease: "back.out",
      stagger: {
        amount: 0.6,
      },
      scrollTrigger: {
        trigger: "#page2-heading-2",
        scroller: "body",
        start: "top 100%",
        end: "top 60%",
        scrub: 5,
        once: true
      }
    });
    gsap.from(split8.words, {
      autoAlpha: 0,
      y: 120,
      duration: 1.2,
      ease: "back.out",
      stagger: {
        amount: 0.6,
      },
      scrollTrigger: {
        trigger: "#page2-heading-4",
        scroller: "body",
        start: "top 120%",
        end: "top 70%",
        scrub: 5,
        once: true
      }
    });
    gsap.from("#page2-heading-5", {
      width: "0%",
      autoAlpha: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#page2-heading-5",
        scroller: "body",
        start: "top 100%",
        end: "top 60%",
        scrub: 3,
        once: true
      }
    });

    const split9 = new SplitText("#page2-heading-3", { type: "chars" });
    gsap.from(split9.chars, {
      autoAlpha: 0,
      y: 80,
      duration: 1.2,
      ease: "power3.out",
      stagger: {
        amount: 1,
        each: 0.3
      },
      scrollTrigger: {
        trigger: "#page2-heading-3",
        scroller: "body",
        start: "top 100%",
        end: "bottom 40%",
        scrub: 3,
        once: true
      }
    });
    const split10 = new SplitText("#page4-heading-1", { type: "chars" });
    const split11 = new SplitText("#page4-heading-2", { type: "words" });
    const split12 = new SplitText("#page4-heading-3", { type: "words" });
    const split13 = new SplitText("#page4-heading-4", { type: "words" });
    const split14 = new SplitText("#page3-heading-1", { type: "chars" });

    gsap.from(split10.chars, {
      autoAlpha: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
      stagger: {
        amount: 1,
        each: 0.5,
      },
      scrollTrigger: {
        trigger: "#page4-heading-1",
        scroller: "body",
        start: "top 90%",
        end: "top 50%",
        scrub: 3,
        once: true
      }
    });
    gsap.from(split11.words, {
      autoAlpha: 0,
      y: 100,
      duration: 1,
      ease: "sine.out",
      stagger: {
        amount: 1,
        each: 0.5,
      },
      scrollTrigger: {
        trigger: "#page4-heading-2",
        scroller: "body",
        start: "top 90%",
        end: "top 40%",
        scrub: 3,
        once: true
      }
    });
    gsap.from(split12.words, {
      autoAlpha: 0,
      y: 100,
      duration: 1,
      ease: "sine.out",
      stagger: {
        amount: 1,
        each: 0.5,
      },
      scrollTrigger: {
        trigger: "#page4-heading-3",
        scroller: "body",
        start: "top 90%",
        end: "top 40%",
        scrub: 3,
        once: true
      }
    });
    gsap.from(split13.words, {
      autoAlpha: 0,
      y: 100,
      duration: 1,
      ease: "sine.out",
      stagger: {
        amount: 1,
        each: 0.5,
      },
      scrollTrigger: {
        trigger: "#page4-heading-4",
        scroller: "body",
        start: "top 90%",
        end: "top 40%",
        scrub: 3,
        once: true
      }
    });
    gsap.from(split14.chars, {
      autoAlpha: 0,
      y: 100,
      duration: 1.2,
      ease: "sine.out",
      stagger: {
        amount: 1,
        each: 0.6,
      },
      scrollTrigger: {
        trigger: "#page3-heading-1",
        scroller: "body",
        start: "top 90%",
        end: "top 40%",
        scrub: 3,
        once: true
      }
    });

  });
});

const projectContainer = document.getElementById("project-1-container");
const cursor = document.getElementById("cursor");

projectContainer.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    width: "310px",
    height: "380px",
    rotate: "360deg",
    borderRadius: "10%",
    backgroundColor: "transparent",
    duration: 0.6,
    ease: "slow(0.85, 0.85, false)",
    mixBlendMode: "normal"
  });
  cursor.innerHTML = `<img src="Hover_Img-1.jpg" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit; border: inherit";/>`;

  gsap.to(projectContainer, {
    filter: "blur(4px)",
    duration: 0.6,
    ease: "expo.out"
  });
});

projectContainer.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    width: "25px",
    height: "25px",
    rotate: "0deg",
    borderRadius: "50%",
    backgroundColor: "red",
    duration: 0.6,
    ease: "expo.out",
    mixBlendMode: "difference"
  });
  cursor.innerHTML = "";

  gsap.to(projectContainer, {
    filter: "blur(0px)",
    duration: 0.6,
    ease: "expo.out"
  });
});

const projectContainer2 = document.getElementById("project-2-container");

projectContainer2.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    width: "310px",
    height: "380px",
    rotate: "360deg",
    borderRadius: "10%",
    backgroundColor: "transparent",
    duration: 0.6,
    ease: "slow(0.85, 0.85, false)",
    mixBlendMode: "normal"
  });
  cursor.innerHTML = `<img src="Hover_Img-2.jpg" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit"/>`;
  gsap.to(projectContainer2, {
    filter: "blur(4px)",
    duration: 0.6,
    ease: "expo.out"
  });
});

projectContainer2.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    width: "25px",
    height: "25px",
    rotate: "0deg",
    borderRadius: "50%",
    backgroundColor: "red",
    duration: 0.5,
    ease: "expo.out",
    mixBlendMode: "difference"
  });
  cursor.innerHTML = "";

  gsap.to(projectContainer2, {
    filter: "blur(0px)",
    duration: 0.6,
    ease: "expo.out"
  });
});

const projectContainer3 = document.getElementById("project-3-container");

projectContainer3.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    width: "310px",
    height: "380px",
    borderRadius: "10%",
    backgroundColor: "transparent",
    rotate: "360deg",
    duration: 0.6,
    ease: "slow(0.85, 0.85, false)",
    mixBlendMode: "normal"
  });
  cursor.innerHTML = `<img src="Hover_Img-3.jpg" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit"/>`;

  gsap.to(projectContainer3, {
    filter: "blur(4px)",
    duration: 0.6,
    ease: "expo.out"
  });
});

projectContainer3.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    backgroundColor: "red",
    rotate: "0deg",
    mixBlendMode: "difference",
    duration: 0.6,
    ease: "expo.out",
  });
  cursor.innerHTML = "";

  gsap.to(projectContainer3, {
    filter: "blur(0px)",
    duration: 0.6,
    ease: "expo.out"
  });
});

const projectContainer4 = document.getElementById("project-4-container");

projectContainer4.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    width: "310px",
    height: "380px",
    borderRadius: "10%",
    backgroundColor: "transparent",
    rotate: "360deg",
    mixBlendMode: "normal",
    duration: 0.6,
    ease: "slow(0.85, 0.85, false)",
  });
  cursor.innerHTML = `<img src="Hover_Img-4.jpg" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit"/>`;

  gsap.to(projectContainer4, {
    filter: "blur(4px)",
    duration: 0.6,
    ease: "expo.out"
  });
});

projectContainer4.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    rotate: "0deg",
    backgroundColor: "red",
    mixBlendMode: "difference",
    duration: 0.6,
    ease: "expo.out",
  });
  cursor.innerHTML = "";

  gsap.to(projectContainer4, {
    filter: "blur(0px)",
    duration: 0.6,
    ease: "expo.out"
  });
});

const navbar = document.querySelectorAll("#overlay-nav a");

navbar.forEach(link => {
  const originalText = link.textContent;

  link.addEventListener("mouseenter", () => {
    gsap.to(link, {
      duration: 1,
      scrambleText: {
        text: originalText,
        chars: "XO",
        revealDelay: 0.5,
        speed: 0.5,
      },
      ease: "power2.out"
    })
  });
  link.addEventListener("mouseleave", () => {
    link.textContent = originalText;
  });
});

const tl2 = gsap.timeline({ paused: true });

tl2.to("#right-nav", {
  autoAlpha: 0,
  duration: 0.8,
  ease: "power3.out"
}, "start");

tl2.from("#overlay", {
  y: "100%",
  autoAlpha: 0,
  duration: 1.1,
  ease: "sine.out"
}, "start+=0.4");

tl2.from("#overlay-img", {
  y: "100%",
  autoAlpha: 0,
  duration: 1,
  ease: "sine.out"
}, "start+=0.1");

tl2.from("#overlay-nav a", {
  x: 80,
  autoAlpha: 0,
  duration: 0.7,
  stagger: {
    amount: 0.18,
    from: "random"
  },
  ease: "sine.out"
}, "start+=1");
tl2.from("#nav-logo", {
  autoAlpha: 0,
  duration: 1,
  ease: "power3.out"
}, "start+=0.8");
tl2.from("#overlay-links a", {
  y: 60,
  autoAlpha: 0,
  duration: 0.6,
  stagger: 0.25,
  ease: "power3.out"
}, "start+=1.1");

const openBtn = document.querySelector("#right-nav");
const closeBtn = document.querySelector("#overlay-close");

openBtn.addEventListener("click", () => {
  tl2.play();
});

closeBtn.addEventListener("click", () => {
  tl2.reverse();
});

ScrollTrigger.create({          //Page3 Pin Section
  trigger: "#page3-container",
  start: "top top",
  end: "+=200%",
  pin: true,
  scrub: true,
});

let cursorVisibility = false;   //Cursor Code

document.addEventListener("mousemove", (e) => {
  if (!cursorVisibility) {
    gsap.set("#cursor", {
      x: e.clientX,
      y: e.clientY,
      autoAlpha: 1,
      ease: "power1.out",
      duration: 1
    });
    cursorVisibility = true;
  }
});
document.addEventListener("mousemove", (e) => {
  gsap.to("#cursor", {
    x: e.clientX,
    y: e.clientY,
    ease: "power1.out",
    duration: 1
  })
});
