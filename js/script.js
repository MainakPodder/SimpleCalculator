const inputValue = document.getElementById("user-input");
// console.log(inputValue);
const calculate = document
    .querySelectorAll(".operations")
    .forEach(function (item) {
        item.addEventListener("click", function (e) {
            // console.log(e.target.innerHTML);
            let lastValue = inputValue.innerText.charAt(inputValue.innerText.length - 1);
            if (!isNaN(lastValue) && e.target.innerHTML === "=") { // 99/ -> press "=" | 99/9 -> press "="
                console.log(inputValue.innerText);
                inputValue.innerText = eval(inputValue.innerText);
            } else if (e.target.innerHTML === "AC") {
                inputValue.innerText = 0;
            } else if (e.target.innerHTML === "DEL") { //Mainak
                inputValue.innerText = inputValue.innerText.substring(0, inputValue.innerText.length - 1);
                if (inputValue.innerText.length === 0) {
                    inputValue.innerText = 0;
                }
            } else {
                // 8/////////
                if (!isNaN(lastValue)) {
                    inputValue.innerText = inputValue.innerText + e.target.innerHTML;
                }
            }

        });
    });
// console.log(document.querySelectorAll(".numbers"));

const number = document.querySelectorAll(".numbers").forEach(function (item) {
    // console.log(document.querySelectorAll(".numbers"));
    console.log(item);

    item.addEventListener("click", function (e) {
        if (inputValue.innerText === "0") {
            inputValue.innerText = "";
        }
        // console.log(e);
        inputValue.innerText += e.target.innerHTML;
    });
});
// console.log(number);


