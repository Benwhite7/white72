var jugador = "Tijera" ;
var computadora = "Tijera";

    switch (jugador , computadora ) {
        case "Tijera" , "Papel" :
            console.log ("Jugador gana");
            break;
        case "Piedra" , "Tijera" :
            console.log ("Jugador gana");
            break;
        case "Papel" , "Piedra" :
            console.log ("Jugador gana");
            break;
        case "Tijera" , "Tijera" :
            console.log ("Empate");
            break;
        case "Piedra" , "Piedra" :
            console.log ("Empate");
            break;
        case "Papel" , "Papel" :
            console.log ("Empate");
            break;    
        case "Tijera" , "Piedra" :
            console.log ("Computadora gana");
            break;
        case "Piedra" , "Papel" :
            console.log ("Jugador gana");
            break;
        case "Papel" , "Tijera" :
            console.log ("Jugador gana");
            break;
    }