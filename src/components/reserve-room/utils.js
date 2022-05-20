function setCalendarStyle() {
    document.getElementsByTagName('input')[0].style.height = '30px'
    document.getElementsByTagName('input')[0].style.width = '200px'
    document.getElementsByTagName('input')[0].style.borderRadius = '0'
    document.getElementsByTagName('input')[0].style.borderWidth = '1px'
    document.getElementsByTagName('input')[0].style.borderRightWidth = '0px'
    document.getElementsByTagName('input')[0].style.borderColor = 'black'
    document.getElementsByTagName('input')[0].style.textAlign = 'center'
}

function prepend(value, array) {
    let newArray = array.slice();
    newArray.unshift(value);
    return newArray;
}

export {setCalendarStyle, prepend}