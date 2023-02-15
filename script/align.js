document.getElementById('text-left-btn').addEventListener('click', function(){
    const textArea = getElement('text-area')
    textArea.classList.add("text-left")
    textArea.classList.remove("text-center")
    textArea.classList.remove("text-right")
})
document.getElementById('text-center-btn').addEventListener('click', function(){
    const textArea = getElement('text-area')
    textArea.classList.add("text-center")
    textArea.classList.remove("text-left")
    textArea.classList.remove("text-right")
})
document.getElementById('text-right-btn').addEventListener('click', function(){
    const textArea = getElement('text-area')
    textArea.classList.add("text-right")
    textArea.classList.remove("text-left")
    textArea.classList.remove("text-center")
})