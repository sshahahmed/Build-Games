let boxes = document.querySelectorAll(".box");
let msgContainer =document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resetGameBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enabledBtn();
    msgContainer.classList.add("hide");
}
const disabledBtn = () => {
    for(box of boxes) {
        box.disabled = true;
    }
};
const enabledBtn = () => {
    for(box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) { //Player O
            box.innerText = "O";
            box.style.color = "#0b8a98";
            turnO = false;
        } else { //Player X
            box.innerText = "X";
            box.style.color = "#2ea512";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulation Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBtn();
}

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes [pattern [0]].innerText;
        let pos2Val = boxes [pattern [1]].innerText;
        let pos3Val = boxes [pattern [2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "" ) {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            };
        };
    };
};

newGameBtn.addEventListener("click", resetGame);
resetGameBtn.addEventListener("click", resetGame);

