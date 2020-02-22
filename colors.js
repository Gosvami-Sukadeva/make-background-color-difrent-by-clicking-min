// const divOrange = document.querySelector('.orange')
// const divGreen = document.querySelector('.green')
// const divBlue = document.querySelector('.blue')
// const divYellow = document.querySelector('.yellow')
// const divRed = document.querySelector('.red')

const items = document.querySelectorAll('div');
items.forEach(function (item) {
    item.addEventListener('click', changeColor)
})

function changeColor() {
    // console.log(this);
    // console.log(this.className);
    // const selectedColor = this.className;
    document.body.className = this.className;
}

// divOrange.addEventListener('click', changeColor);
// divGreen.addEventListener('click', changeColor);
// divBlue.addEventListener('click', changeColor);
// divYellow.addEventListener('click', changeColor);
// divRed.addEventListener('click', changeColor);

// divOrange.addEventListener('click', function () {
//     document.body.className = "orange";
// });
// divGreen.addEventListener('click', function () {
//     document.body.className = "green";
// });
// divBlue.addEventListener('click', function () {
//     document.body.className = "blue";
// });
// divYellow.addEventListener('click', function () {
//     document.body.className = "yellow";
// });
// divRed.addEventListener('click', function () {
//     document.body.className = "red";
// });