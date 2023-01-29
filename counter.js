let count = 0;

const countValue = document.querySelector("#countValue");
const btns = document.querySelectorAll(".btn");
// console.log(countValue);

btns.forEach(function (item) {
item.addEventListener("click", function (e) {
const styles = e.currentTarget.classList;
console.log(styles);
if  (styles.contains("decrease")) {
    count--;
} else if (styles.contains("increase")) {
    count++;
} else {
    count = 0;
}
countValue.innerHTML = count;
if (count > 0){
    countValue.style.color ="purple";
}else if (count < 0){
    countValue.style.color="red";
}else if (count === 0) {
    countValue.style.color ="black";
}
});
});






