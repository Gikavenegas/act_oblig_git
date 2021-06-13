//Se solicita si el usuario es mayor de edad para poder continuar
var edadUsuario = parseInt(prompt('Ingrese su edad:'))

//Si es mayor puede ingresar los datos de 3 usuarios más, en caso contrario no podrá
if(edadUsuario>=18){
    alert('Usted es mayor de edad y puede ingresar otros usuarios')

    //Array donde se almacenarán las edades ingresadas
    var edades = []

    //Inicio del bucle donde se solicita ingresar los 3 usuarios adicionales
    for(var i=1; i<4; i++){
        edad = prompt('Ingrese la edad del usuario ' + i)

        //Si el valor ingresado no es un número se le pedirá al usuario volver a ingresar el dato
        while(isNaN(edad)){
            alert('Ingrese un número válido')
            edad = prompt('Ingrese la edad del usuario ' + i)
        }
        
        //Si cumple con la condición de ser un número se cambiará a número entero, se añadirá al array de las edades y guardará el índice del dato con valor máximo en la variable edadMayor
        edades.push(parseInt(edad))
        var edadMayor = edades.indexOf(Math.max(...edades))    
    } 

    //Finalmente se indica el usuario con mayor edad sumándole un 1 al índice para que nos arroje el número del usuario que corresponde al intento "i"
    alert( 'El usuario con mayor edad es el número ' + (edadMayor + 1))  

} else{

    alert('Usted es menor de edad y no puede ingresar otros usuarios')
}


