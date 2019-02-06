// my green sock animations
const burger = document.querySelector(".burger-logo");
TweenMax.from(burger, 0.7, {
  y: -150,
  opacity: 0,
  ease: Back.easeOut,
  delay: 1
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
        height: "100%",
        opacity: 1,
        padding: "5%",
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
        padding: 0,
        ease: Back.easeIn
      },
      0.5
    );
    TweenMax.to(tags, 0.00001, {
      visibility: "hidden",
      height: 0,
      padding: 0,
      delay: 2.5
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

// console.log(icons);

icons.forEach(icon => {
  // console.log(icon);
  icon.addEventListener("mouseover", () => {
    TweenMax.to(icon, 0.5, {
      rotation: 405
    });
  });
  icon.addEventListener("mouseout", () => {
    TweenMax.to(icon, 0.5, {
      rotation: 45,
      delay: 1.2
    });
  });
});

// make everything appear on load
window.addEventListener("load", () => {
  TweenMax.from("body", 1, {
    opacity: 0,
    delay: 0.2
  });
});
