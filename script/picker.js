document.getElementById('number-picker').addEventListener('click', function(){
    const textArea = getElement('text-area')
    const numberPicker = getElement('number-picker')
    const numberPickerValue = numberPicker.value

    textArea.style.fontSize = numberPickerValue + 'px'
})


document.getElementById('color-picker').addEventListener('click', function(){
    const textArea = getElement('text-area')
    const colorPicker = getElement('color-picker')
    const colorPickerValue = colorPicker.value

    textArea.style.color = colorPickerValue
})

