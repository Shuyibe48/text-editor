document.getElementById('bold-btn').addEventListener('click', function(){
    const textArea = getElement('text-area')
    textArea.classList.add("font-bold")
})
document.getElementById('italic-btn').addEventListener('click', function(){
    const textArea = getElement('text-area')
    textArea.classList.add("italic")
})
document.getElementById('underline-btn').addEventListener('click', function(){
    const textArea = getElement('text-area')
    textArea.classList.add("underline")
})