const inputValue = document.getElementById("user-input");
// console.log(inputValue);
const number = document.querySelectorAll(".numbers").forEach(function (item) {
    // console.log(document.querySelectorAll(".numbers"));
    // console.log(item);

    item.addEventListener("click", function (e) {
        if (inputValue.innerText === "0") {
            inputValue.innerText = "";
        }
        // console.log(e);

        inputValue.innerText += e.target.innerHTML;
    });
});
console.log(number);


