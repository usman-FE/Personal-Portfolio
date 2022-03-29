const btn = document.querySelector(".btn");
const aboutParallex = document.getElementById("about");
const aboutParallexImg = document.getElementById("about-img");
const portImg1 = document.getElementById("port-img1");
const portImg2 = document.getElementById("port-img2");
const portImg3 = document.getElementById("port-img3");
const block1 = document.getElementById("block-1");
const block2 = document.getElementById("block-2");
const block3 = document.getElementById("block-3");
const blocks = [block1, block2, block3];
const portImg = [portImg1, portImg2, portImg3];
const innerWidthMed = 840;

// NAVIGATION

btn.addEventListener("click", function (e) {
  if (e.target.classList.contains("header__nav")) return;

  document
    .querySelector(".header__navigation--background")
    .classList.toggle("active-bg");
  document.querySelector(".header__nav").classList.toggle("active-nav");
  document
    .querySelector(".header__nav-list")
    .classList.toggle("active-nav-list");
  document
    .querySelector(".header__navigation--icon")
    .classList.toggle("icon-toggle");
});

// ABOUT SECTION PARALLAX
const obsCallBack0 = (entries) => {
  const [entry] = entries;
  if (entry.isIntersecting && entry.intersectionRatio > 0) {
    if (entry.boundingClientRect.y < 0) return;
    aboutParallexImg.style.transform = "translateY(200px)";
    let scroll1 = window.scrollY;
    window.addEventListener("scroll", function () {
      let value =
        200 +
        (window.scrollY - scroll1) *
          `${window.innerWidth <= innerWidthMed ? -0.5 : -0.35}`;
      aboutParallexImg.style.transform = `translateY(${value}px)`;
    });
  }
};

const options0 = {
  root: null,
  threshold: 0,
  rootMargin: "50px",
};

const observer0 = new IntersectionObserver(obsCallBack0, options0);
observer0.observe(aboutParallex);

// window.addEventListener('scroll', function () {
//   let offset = window.scrollY;
//   aboutParallex.style.transform = 'translateY(' + (offset * -0.37) + 'px)';
// })

// 1
const obsCallBack1 = (entries) => {
  const [entry] = entries;
  if (entry.isIntersecting && entry.intersectionRatio > 0) {
    if (entry.boundingClientRect.y < 0) return;
    portImg1.style.transform = "translateY(200px)";
    let scroll1 = window.scrollY;
    window.addEventListener("scroll", function () {
      let value = 200 + (window.scrollY - scroll1) * -0.35;
      portImg1.style.transform = `translateY(${value}px)`;
    });
  }
};

const options1 = {
  root: null,
  threshold: 0,
  rootMargin: "70px",
};

const observer1 = new IntersectionObserver(obsCallBack1, options1);
observer1.observe(block1);

// 2
const obsCallBack2 = (entries) => {
  const [entry] = entries;
  if (entry.isIntersecting && entry.intersectionRatio > 0) {
    if (entry.boundingClientRect.y < 0) return;
    portImg2.style.transform = "translateY(200px)";
    let scroll1 = window.scrollY;
    window.addEventListener("scroll", function () {
      let value = 200 + (window.scrollY - scroll1) * -0.35;
      portImg2.style.transform = `translateY(${value}px)`;
    });
  }
};

const options2 = {
  root: null,
  threshold: 0,
  rootMargin: "70px",
};

const observer2 = new IntersectionObserver(obsCallBack2, options2);
observer2.observe(block2);

// 3
const obsCallBack3 = (entries) => {
  const [entry] = entries;
  if (entry.isIntersecting && entry.intersectionRatio > 0) {
    if (entry.boundingClientRect.y < 0) return;
    portImg3.style.transform = "translateY(200px)";
    let scroll1 = window.scrollY;
    window.addEventListener("scroll", function () {
      let value = 200 + (window.scrollY - scroll1) * -0.35;
      portImg3.style.transform = `translateY(${value}px)`;
    });
  }
};

const options3 = {
  root: null,
  threshold: 0,
  rootMargin: "70px",
};

const observer3 = new IntersectionObserver(obsCallBack3, options3);
observer3.observe(block3);

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
