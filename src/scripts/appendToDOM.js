const appendToDom = (what, where) => {
    document.querySelector(`${where}`).innerHTML += what
}

export default appendToDom