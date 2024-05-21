let menu = document.querySelector(".ri-menu-3-line");
let back = document.querySelector(".ri-arrow-left-line");
const tmline = gsap.timeline();
tmline.to(".sidebar", {
  x: -360,
  duration: 0.8,
  ease: "power3.out",
});
tmline.from("ul li", {
  x: -100,
  opacity: 0,
  duration: 0.6,
  stagger: 1,
});
tmline.from(".ri-arrow-left-line", {
  y: -100,
  opacity: 0,
  duration: 1,
});

tmline.pause();
menu.addEventListener("click", () => {
  tmline.play();
});
back.addEventListener("click", () => {
  //   gsap.to(".sidebar", {
  //     x: 100,
  //     duration: 1,
  //   });
  tmline.reverse();
});
