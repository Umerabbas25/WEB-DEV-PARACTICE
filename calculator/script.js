let Ans = document.getElementById("answer");
let input = document.getElementById("in");
let Clear = document.getElementById("clear");
let Equal = document.getElementById("equal");


document.querySelectorAll('.values button').forEach(button => {
    button.addEventListener('click', () => {

        input.value += button.innerText
    })
})


document.querySelectorAll('.ope button').forEach(button => {
    button.addEventListener('click', () => {
        input.value += button.innerText
    })
})


Clear.addEventListener("click", () => {
    input.value = ''
}
)

Equal.addEventListener("click", () => {
    try {
        input.value = eval(input.value)
        Ans.innerHTML = input.value
    }
    catch (err) {
        Ans.innerHTML = "Error"
    }

}
)