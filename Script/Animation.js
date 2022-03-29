Restaurant = document.getElementById("Restaurant")
gsap.from(Restaurant, {
    opacity: 0,
    duration: 1,
    y:-50
})


MenuItem = document.getElementsByClassName("MenuItem")
gsap.from(MenuItem, {
  opacity: 0,
    duration: 1,
    y:-50,
    stagger: 0.2,
    delay: 0.1,
    ease: Power2.easeOut
})

gsap.from(Restaurant, {
  scrollTrigger: "body", // start the animation when ".box" enters the viewport (once)
  y: 0
});