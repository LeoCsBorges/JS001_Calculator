//variables
    let display = document.getElementById('display')
    let saveResult = ''

    
function displayAdd(value) {
    if (display.innerHTML.length >= 20) {
        window.alert('Máximo de caracteres alcançado!')

    } else if (display.innerHTML == '0') {
        display.innerHTML = ''
        display.innerHTML += value

    } else {
        display.innerHTML += value
    }
}

function memoryClear() {
    display.innerHTML = '0'
    saveResult = ''
}

function solve(){
    let equation = display.innerHTML
    let result = math.evaluate(equation)
    display.innerHTML = result
}

function memorySave() {
    if (saveResult == '') {
        saveResult = display.innerHTML
        display.innerHTML = '0'

    } else {
        display.innerHTML = saveResult
    }
} 

document.addEventListener('keydown', function(event){
    console.log(event.name, event.key, event.code)
    var allowedKeys = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '+',
        '-',
        '/',
        '*',
    ]

    if (allowedKeys.includes(event.key)) {
        return displayAdd(event.key)
    }

    if (['Enter', '='].includes(event.key)) {
        return solve()
    }

    if (event.code.startsWith('Numpad')) {
        const number = event.code.replace('Numpad', '')
        return displayAdd(number)
    }

})
