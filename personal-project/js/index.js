// my green sock animations
const burger = document.querySelector(".burger-logo");
TweenMax.from(burger, 0.7, {
  y: -150,
  opacity: 0,
  ease: Back.easeOut
});

let toggle = true;
const tags = document.querySelectorAll(".nav-items a");

burger.addEventListener("click", () => {
  console.log("clicked");

  //   TweenMax.set(tags, 1, {visibility: })
  if (toggle) {
    TweenMax.staggerTo(
      tags,
      1,
      {
        visibility: "visible",
        opacity: 1,
        ease: Back.easeOut
      },
      0.5
    );
    toggle = false;
  } else {
    TweenMax.staggerTo(
      tags,
      0.7,
      {
        opacity: 0,
        // visibility: "hidden",
        ease: Back.easeIn
      },
      0.5
    );
    TweenMax.to(tags, 0.1, {
      visibility: "hidden",
      delay: 2
    });
    toggle = true;
  }
});
