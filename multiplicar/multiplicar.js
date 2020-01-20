const fs = require('fs');
const colors = require('colors');



let mostrarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`No es un numero`);
            return;
        }

        let data = `========== tabla de ${base} ========== \n`.green;

        for (let i = 1; i <= limite; i++)
            data += `${base} * ${i} = ${base * i} \n`;
        resolve(data);
    });
}




let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`No es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++)
            data += `${base} * ${i} = ${base * i} \n`;

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`.green);
        });
    });
}

module.exports = {
    crearArchivo,
    mostrarTabla
}