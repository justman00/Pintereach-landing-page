class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.left = this.carousel.querySelector(".left-button");
    this.right = this.carousel.querySelector(".right-button");

    this.imgs = Array.from(this.carousel.querySelectorAll("img"));
    console.log(this.imgs);
    this.currIndex = this.imgs.indexOf(this.carousel.querySelector(".current"));

    // makes it run forever
    setInterval(() => {
      this.imgs[this.currIndex].classList.remove("current");
      let nextIndex = this.currIndex + 1;
      console.log(nextIndex);
      if (nextIndex > this.imgs.length - 1) {
        this.imgs[0].classList.add("current");
        this.currIndex = 0;
      } else {
        this.imgs[nextIndex].classList.add("current");
        this.currIndex = nextIndex;
      }
    }, 3000);

    this.left.addEventListener("click", e => {
      e.stopPropagation();
      this.imgs[this.currIndex].classList.remove("current");
      let nextIndex = this.currIndex - 1;
      console.log("next i " + nextIndex);
      // last index of an array
      let lastIndex = this.imgs.length - 1;
      console.log("last i " + lastIndex);
      if (nextIndex < 0) {
        this.imgs[lastIndex].classList.add("current");
        this.currIndex = lastIndex;
      } else {
        this.imgs[nextIndex].classList.add("current");
        this.currIndex = nextIndex;
      }
    });

    this.right.addEventListener("click", e => {
      e.stopPropagation();
      this.imgs[this.currIndex].classList.remove("current");
      let nextIndex = this.currIndex + 1;
      console.log(nextIndex);
      if (nextIndex > this.imgs.length - 1) {
        this.imgs[0].classList.add("current");
        this.currIndex = 0;
      } else {
        this.imgs[nextIndex].classList.add("current");
        this.currIndex = nextIndex;
      }
    });
  }
}

let carousel = new Carousel(document.querySelector(".carousel"));
