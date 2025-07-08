let display = document.querySelector('.display')

function appendValue(text){
    if(display.innerText === '0' || display.innerText === 'Error' || display.innerText === 'Infinity'){
        display.innerText = text
        return;
    }

    display.innerText = `${display.innerText}${text}`
    // console.log(text, typeof text)
}

function clearDisplay(){
    display.innerText = '0'
}

function calculate(){
    try{
        display.innerText = eval(display.innerText)  // eval string to number converter
    } catch (error){
        display.innerText = 'Error'
    }
}