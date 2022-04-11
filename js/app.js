const btn = document.querySelector(".btn");
const aboutParallex = document.getElementById("about");
const aboutParallexImg = document.getElementById("about-img");
const portImg1 = document.getElementById("port-img1");
const portImg2 = document.getElementById("port-img2");
const portImg3 = document.getElementById("port-img3");
const portImg4 = document.getElementById("port-img4");
const portImg5 = document.getElementById("port-img5");
const block1 = document.getElementById("block-1");
const block2 = document.getElementById("block-2");
const block3 = document.getElementById("block-3");
const block4 = document.getElementById("block-4");
const block5 = document.getElementById("block-5");
const blocks = [block1, block2, block3, block4, block5];
const innerWidthMed = 840;
const innerWidthsmallest = 550;
const mediumCheck = window.innerWidth <= innerWidthMed;

// /////////////////////////////////////////NAVIGATION

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

// /////////////////////////////////////////ABOUT SECTION PARALLAX
const obsCallBack0 = (entries) => {
  const [entry] = entries;
  if (entry.isIntersecting && entry.intersectionRatio > 0) {
    if (entry.boundingClientRect.y < 0) return;
    aboutParallexImg.style.transform = "translateY(200px)";
    let scroll1 = window.scrollY;
    window.addEventListener("scroll", function () {
      let value =
        200 + (window.scrollY - scroll1) * `${mediumCheck ? -0.5 : -0.35}`;
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

// /////////////////////////////////////////When the user scrolls the page, execute myFunction
window.onscroll = () => {
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

// /////////////////////////////////////////Read more
const btnColl = document.querySelectorAll(".read-more");
btnColl.forEach(btn => {

  btn.addEventListener("click", function () {
    const content = this.previousElementSibling;
    const dots = content.previousElementSibling.lastElementChild;
    console.log(dots);
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      btn.innerHTML = "read more &darr;";
      dots.style.display = "inline";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      btn.innerHTML = "read less &uarr;";
      dots.style.display = "none";
    }
  });
})





// /////////////////////////////////////////PORTFOLIO IMAGES PARALLAX

const obsCallBack = (entries) => {
  const [entry] = entries;
  if (entry.isIntersecting && entry.intersectionRatio > 0) {
    if (entry.boundingClientRect.y < 0) return;
    const portImg = entry.target.firstElementChild;
    portImg.style.transform = `translateY(${mediumCheck ? 90 : 200}px)`;
    let scroll1 = window.scrollY;
    window.addEventListener("scroll", function () {
      let value =
        (mediumCheck ? 90 : 200) +
        (window.scrollY - scroll1) * (mediumCheck ? -0.1 : -0.35);
      portImg.style.transform = `translateY(${value}px)`;
    });
  }
}

const options = {
  root: null,
  threshold: 0,
  rootMargin: "100px",
};


blocks.forEach((block) => {
  const observer = new IntersectionObserver(obsCallBack, options);
  observer.observe(block);
})