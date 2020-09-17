export function showNotifications(setter) {
    setter(true)
    setTimeout(() => {
        setter(false)
    }, 2000)
}


export function checkWin(correct, wrong, word) {
    let status = 'win'

    //Check for win

    word.split('').forEach(letter => {
        if (!correct.includes(letter)) {
            status = ''
        }
    })

    //Looping through each letter in the 

    if (wrong.length === 6) {
        status = 'lose'
    }

    return status
}

export function toTitleCase(str) {
    let ns = ''
    let firstLetter = str.charAt(0).toUpperCase();
    ns += firstLetter + str.slice(1)
    return ns
}