// my green sock animations
const burger = document.querySelector(".burger-logo");
TweenMax.from(burger, 0.7, {
  y: -150,
  opacity: 0,
  ease: Back.easeOut
});

let toggle = true;
const tags = document.querySelectorAll(".nav-items a");

// makes the navigtation items appear and disappear
burger.addEventListener("click", () => {
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

// animate the button
// it gets bigger on hover and back to normal on leaving it
const btn = document.querySelector(".custom-btn");

btn.addEventListener("mouseover", () => {
  TweenMax.to(btn, 0.5, {
    scale: 1.2,
    backgroundColor: "#FF4500",
    color: "#fff",
    ease: Bounce.easeOut
  });
});

btn.addEventListener("mouseout", () => {
  TweenMax.to(btn, 0.5, {
    scale: 1,
    color: "#FF4500",
    backgroundColor: "#fff",
    ease: Back.easeIn
  });
});

// animate the icons in my Features section, they rotate now
const icons = document.querySelectorAll(".icon");

let rotate = 45;

icons.forEach(icon => {
  icon.addEventListener("mouseover", () => {
    TweenMax.to(icon, 0.5, {
      rotation: rotate + 360
    });
  });
});
