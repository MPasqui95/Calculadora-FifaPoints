function sumar (A, B){
            return A + B
        }
    

function restar (A, B){
           return A - B
       }

function multiplicar(A, B){
            if (A === 0 || B === 0){
                return 0
            }else return A * B
        }

function dividir (A, B){
           if (B === 0){
               return "No se puede divi... CHIROLA PARAAA LPM!"
           }else return A / B
       }

    module.exports = {sumar, restar, multiplicar, dividir}