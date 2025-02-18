document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll("button");
    let expression = "";

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.getAttribute("data-value");

            if (value === "AC") {
                expression = "";
                display.value = "";
            } else if (value === "DEL") {
                expression = expression.slice(0, -1);
                display.value = expression;
            } else if (value === "=") {
                try {
                    expression = eval(expression).toString();
                    display.value = expression;
                } catch (error) {
                    display.value = "Error";
                    expression = "";
                }
            } else if (value === "( )") {
                if (expression.includes("(") && !expression.includes(")")) {
                    expression += ")";
                } else {
                    expression += "(";
                }
                display.value = expression;
            } else {
                expression += value;
                display.value = expression;
            }
        });
    });
});
