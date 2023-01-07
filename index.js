function initSlider() {
  let slider_photos = document.querySelector(".slider_photos");
  let arrowLeft = document.querySelector(".arrowLeft");
  let arrowRight = document.querySelector(".arrowRight");
  let dot1 = document.querySelector(".dot1");
  let dot2 = document.querySelector(".dot2");
  let dot3 = document.querySelector(".dot3");
  let city = document.querySelector(".city");
  let area = document.querySelector(".area");
  let time = document.querySelector(".time");
  let rostov1Link = document.querySelector(".rostov1Link");
  let rostov2Link = document.querySelector(".rostov2Link");
  let sochiLink = document.querySelector(".sochiLink");
  let mobileLeft = document.querySelector(".mobile_left");
  let mobileRight = document.querySelector(".mobile_right");
  let mobilePhotos = document.querySelector(".mobile_arrows");

  dot1.addEventListener("click", firstActive);
  dot2.addEventListener("click", secondActive);
  dot3.addEventListener("click", thirdActive);

  rostov1Link.addEventListener("click", firstActive);
  sochiLink.addEventListener("click", secondActive);
  rostov2Link.addEventListener("click", thirdActive);

  arrowLeft.addEventListener("click", slideLeft);
  arrowRight.addEventListener("click", slideRight);

  mobileLeft.addEventListener("click", slideLeft);
  mobileRight.addEventListener("click", slideRight);

  function slideLeft() {
    if (dot1.classList.contains("active")) {
      thirdActive();
    } else if (dot2.classList.contains("active")) {
      firstActive();
    } else {
      secondActive();
    }
  }

  function slideRight() {
    if (dot1.classList.contains("active")) {
      secondActive();
    } else if (dot2.classList.contains("active")) {
      thirdActive();
    } else {
      firstActive();
    }
  }

  function firstActive() {
    city.innerHTML = "Rostov-on-Don<br/>LCD admiral";
    area.innerText = "81 m2";
    time.innerText = "3.5 months";

    if (dot1.classList.contains("unactive")) {
      dot1.classList.add("active");
      dot1.classList.remove("unactive");
    }
    if (dot2.classList.contains("active")) {
      dot2.classList.remove("active");
      dot2.classList.add("unactive");
    }
    if (dot3.classList.contains("active")) {
      dot3.classList.remove("active");
      dot3.classList.add("unactive");
    }
    if (rostov1Link.classList.contains("yellow")) {
    } else {
      rostov1Link.classList.add("yellow");
      rostov1Link.classList.add("underline");
    }

    if (sochiLink.classList.contains("yellow")) {
      sochiLink.classList.remove("yellow");
      sochiLink.classList.remove("underline");
    }
    if (rostov2Link.classList.contains("yellow")) {
      rostov2Link.classList.remove("yellow");
      rostov2Link.classList.remove("underline");
    }
    slider_photos.style.backgroundImage = "url('img/image 2.1.jpg')";
    mobilePhotos.style.backgroundImage = "url('img/image 2.1.jpg')";
  }

  function secondActive() {
    city.innerHTML = "Sochi<br/>Thieves";
    area.innerText = "105 m2";
    time.innerText = "4 months";

    dot1.classList.remove("active");
    dot1.classList.add("unactive");
    dot2.classList.add("active");
    dot2.classList.remove("unactive");
    dot3.classList.add("unactive");
    dot3.classList.remove("active");
    rostov1Link.classList.remove("yellow");
    rostov1Link.classList.remove("underline");
    sochiLink.classList.add("yellow");
    sochiLink.classList.add("underline");
    rostov2Link.classList.remove("yellow");
    rostov2Link.classList.remove("underline");
    slider_photos.style.backgroundImage = "url('img/image 2.2.jpg')";
    mobilePhotos.style.backgroundImage = "url('img/image 2.2.jpg')";
  }

  function thirdActive() {
    city.innerHTML = "Rostov-on-Don<br/>Patriotic";
    area.innerText = "93 m2";
    time.innerText = "3 months";

    dot1.classList.remove("active");
    dot1.classList.add("unactive");
    dot2.classList.remove("active");
    dot2.classList.add("unactive");
    dot3.classList.remove("unactive");
    dot3.classList.add("active");
    rostov1Link.classList.remove("yellow");
    rostov1Link.classList.remove("underline");
    sochiLink.classList.remove("yellow");
    sochiLink.classList.remove("underline");
    rostov2Link.classList.add("yellow");
    rostov2Link.classList.add("underline");
    slider_photos.style.backgroundImage = "url('img/image 2.3.jpg')";
    mobilePhotos.style.backgroundImage = "url('img/image 2.3.jpg')";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  initSlider();
});
