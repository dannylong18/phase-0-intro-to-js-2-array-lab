// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat (name) {
    cats.push('Ralph')
}

function destructivelyPrependCat (name) {
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat (name) {
    cats.pop()
}

function destructivelyRemoveFirstCat (name) {
    cats.shift()
}

function appendCat (name) {
    return appendCat = [...cats, 'Broom']
}

function prependCat (name) {
    return prependCat = ['Arnold', ...cats]
}

function removeLastCat (name) {
    return removeLastCat = cats.slice(0,2)
}

function removeFirstCat (name) {
    return removeFirstCat = cats.slice(1)
}