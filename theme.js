let themes = document.querySelector(".themes")
let selection = document.querySelector("#selection")

Array.from(themes.children).forEach(them => {

    them.addEventListener("click" , e=>{

        let color = e.target.dataset.color
        document.body.className = color
        selection.textContent = color

    })
})