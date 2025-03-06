
document.addEventListener("DOMContentLoaded", async () => {
    let btn = document.querySelector("#btn");

    function delay(ms, value) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(value), ms);
        });
    }

    btn.addEventListener("click", async () => {
        let input = document.querySelector("#ip").value;
        let output = document.getElementById("output");

        input = parseFloat(input);
        if (isNaN(input)) {
            output.innerText = "Please enter a valid number";
            return;
        }

        input = await delay(2000, input);
        output.innerText = "Result: " + input;

        let num = await delay(2000, input * 2);
        output.innerText = "Result: " + num;

        let subtract = await delay(1000, num - 3);
        output.innerText = "Result: " + subtract;

        let divide = await delay(1000, subtract / 2);
        output.innerText = "Result: " + divide;

        let finalRes = await delay(1000, divide + 10);
        output.innerText = "Final Result: " + finalRes;
    });
});

