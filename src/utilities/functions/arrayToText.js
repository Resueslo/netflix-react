export const generarString = array => {
    let cadena = "";

    if(array.length) {
        array.forEach((element, index) => {
            cadena += `${element.name}${index === array.length-1 ? '' : ', '}`;
        });
    }
    return cadena;
}