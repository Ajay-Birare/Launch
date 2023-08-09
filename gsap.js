var tl = gsap.timeline();

tl.from("#main nav .left ,#main nav .left ,#main nav .right,#menuBtn", {
  y: -100,
  stagger: 0.5,
  duration: 0.8,
  opacity: 0,
});

tl.from("#promote .div1", {
  x: -100,
  opacity: 0,
  duration: 0.5,
});

tl.from("#promote .div2", {
  scale: 0,
  duration: 0.8,
});

tl.to("#menuBtn2", {
  delay: 1,
  scale: 1.3,
  color: "white",
  // y: -10,
  duration: 0.8,
  repeat: -1,
  yoyo: true,
});
// gsap.from("#selling .div1", {
//   scale: 0,
//   duration: 1,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: "#selling .div1",
//     // scroller: "body",
//     x: 1000,
//     start: "40%",
//     end: "60%",
//     markers: false,
//   },
// });

gsap.from("#main #selling .div1,#main #selling .div2", {
  y: 500,
  duration: 0.5,
  stagger: 0.3,

  opacity: 0,
  scrollTrigger: {
    trigger: "#main #selling ",

    // markers: true,
    start: "top 60%",
    end: "top 20%",
    // scrub: true,
  },
});

// -------------------------
gsap.from(".points .content", {
  y: 100,
  duration: 1,
  stagger: 0.3,
  opacity: 0,
  display: "none",
  scrollTrigger: {
    trigger: ".points .content",
    start: "top 60%",
    end: "top 30%",
    // scrub: true,
    // markers: true,
  },
});

// point img 1
// ----------------
// gsap.from(".points .img", {
//   // x: -500,
//   duration: 1,
//   stagger: 0.3,
//   opacity: 0,
//   // display: "none",
//   scrollTrigger: {
//     trigger: ".points .img",
//     start: "top 60%",
//     end: "top 30%",
//     // scrub: true,
//     markers: true,
//   },
// });

gsap.from(".points2 .content2", {
  // y: 100,
  scale: 0,
  // display: "none",
  stagger: 0.5,
  duration: 1,
  scrollTrigger: {
    trigger: ".points2 .content2",
    start: "top 80%",
    end: "top 30%",
    // markers: true,
    // scrub: true,
  },
});

// gsap.from(".content .priceType", {
//   x: 1000,
//   display: "none",
//   stagger: 0.5,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".content .priceType",
//     start: "top 60%",
//     end: "top 30%",
//     markers: true,
//     // scrub: true,
//   },
// });

// Check if the viewport width is greater than 360 pixels
if (window.innerWidth > 360) {
  gsap.from(".content .priceType", {
    scale: 0,
    stagger: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: ".content .priceType",
      start: "top 70%",
      end: "top 40%",
      // markers: true,
      // scrub: true,
    },
  });
}

gsap.from(".advantages .element", {
  scale: 0,
  scale: 0,
  stagger: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".advantages .element",
    start: "top 70%",
    end: "top 40%",
    // markers: true,
    scrub: true,
  },
});

gsap.from(".aboutUs .count", {
  opacity: 0, // Example animation property, you can modify this
  scrollTrigger: {
    trigger: ".aboutUs .count",
    start: "top 90%",
    end: "top 80%",
    x: 500,
    scale: 0,
    duration: 2,
    // markers: true,
    scrub: true,
  },
  onComplete: function () {
    let member = document.querySelector("#member");
    let team = document.querySelector("#team");

    var a = 0;

    let clr = setInterval(function () {
      member.innerHTML = a++ + "M";
      if (a == 55) {
        clearInterval(clr);
      }
    }, 100);

    var b = 0;

    let clr2 = setInterval(function () {
      team.innerHTML = b++;
      if (b == 15) {
        clearInterval(clr2);
      }
    }, 400);
  },
});
