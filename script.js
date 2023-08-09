let btn = document.querySelector("#menuBtn");
let btn2 = document.querySelector("#menuBtn2");

let menuList = document.querySelector(".menu");

// for both function working in this event

// see the navbar list
btn.addEventListener("click", function () {
  menuList.classList.toggle("dikha");
});

btn2.addEventListener("click", function () {
  menuList.classList.toggle("dikha");
});

// menu button
function toggle() {
  if (menuList.classList.contains("dikha")) {
    btn.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAGZJREFUSEvtlrENACAMw8pnnMZpfAYTC1W3CDOEA2JhUpUW0GkQNwx+Zt6qj+ohdp7yKtVLDE6c78DiC+c4t/o46WLX8877rlzYOGGqxU/scYryB4KVCwNja9GtlhvwWpQrrQIx1Rt3TwofeC3yFwAAAABJRU5ErkJggg==";
  } else {
    btn.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAGZJREFUSEvtlrENACAMw8pnnMZpfAYTC1W3CDOEA2JhUpUW0GkQNwx+Zt6qj+ohdp7yKtVLDE6c78DiC+c4t/o46WLX8877rlzYOGGqxU/scYryB4KVCwNja9GtlhvwWpQrrQIx1Rt3TwofeC3yFwAAAABJRU5ErkJggg==";
  }
}

btn.addEventListener("click", function () {
  btn.style.display = "none";
  btn2.style.display = "block";
});

btn2.addEventListener("click", function () {
  btn.style.display = "block";
  btn2.style.display = "none";
});

// this is for generate the numbers

// let text = 0;
// var aa = setInterval(myfunction, 100);
// function myfunction() {
//   // d.insertAdjacentText("beforeend", text++);
//   let a = document.querySelector(".h1");
//   a.innerHTML = text++;

//   if (text == 500) {
//     clearInterval(aa);
//   }
// }

// -------------------- scroll hover

// pricing
// link:price

let part = document.querySelector(".pricing");
let priceBtn = document.querySelector(".priceBtn");

part.addEventListener("mouseover", function () {
  priceBtn.style.color = "#407bff";
  priceBtn.style.color = "#407bff";
});

part.addEventListener("mouseout", function () {
  priceBtn.style.color = "black";
  priceBtn.style.opacity = ".5";
});

// -----------------increase the count

// member h1
// team  h1

