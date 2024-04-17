
// function setBackgroundColorById(id, color) {
//     document.getElementById(id).style.backgroundColor = color;
// }

const setBackgroundColorById1 = id, color => document.getElementById(id).style.backgroundColor
console.log(setBackgroundColorById1)


// document.getElementById("button").addEventListener("click", function () {
//     setBackgroundColorById("paragraph", "blue");
// });

const document.getElementById("button").addEventListener("click", () => {
    setBackgroundColorById("paragraph", "blue");
});


// document.getElementById("alert").addEventListener("click", function () {
//     alert(document.getElementById("popup-input").value);
// });

const document.getElementById("alert").addEventListener("click", () => {
    alert(document.getElementById("popup-input").value);
});



// document.getElementById("hover-this").addEventListener("mouseover", function () {
//     setBackgroundColorById("body", "red");
// });

const document.getElementById("hover-this").addEventListener("mouseover", () => {
    setBackgroundColorById("body", "red");
});


// document.getElementById("hover-this").addEventListener("mouseout", function () {
//     setBackgroundColorById("body", "white");
// });

const document.getElementById("hover-this").addEventListener("mouseout", () => {
    setBackgroundColorById("body", "white");
});


// document.getElementById("set-color").addEventListener("click", function () {
//     const colorInputValue = document.getElementById("color-input").value;
//     setBackgroundColorById("paragraph", colorInputValue);
// });

const document.getElementById("set-color").addEventListener("click", () => {
    colorInputValue = document.getElementById("color-input").value;
    setBackgroundColorById("paragraph", colorInputValue);
});


//     function mouseOverFunction(el) {
//         el.style.backgroundColor = "black";
//     }
// })();

const mouseOverFunction = el => el.style.backgroundColor = "black";