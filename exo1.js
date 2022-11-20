// Exercice 1
// Créations des classes personnage et trajet

class character {
    constructor(name, life) {
        this.name = name;
        this.life = life;
    }
}

class traject {
    constructor(redLight, change) {
        this.redLight = redLight;
        this.change = change;
    }
}


// Création d'une table avec les musiques jouer sur la radio
const musicArray = ["Anissa - WEJDENE", "No Blata - OBOY", "PSG - NISKA", "Maître Simonard - NISKA", "Binks to Binks #2 - NINHO"];



// Attribution des valeurs pour la const John, son nom et ses points de vie en appelant la classe créée plutôt
const John = new character("John", 10);



// Même chose que la const John, 
const Taxi = new traject(30, 0)



// Création d'une variable let pour faire la musique de facon aléatoire. On appel la variable musicArray, et on lui dit de jouer random la musique ainsi que lui fournir
// le nombre d'argument qui ont été passés à la fonction
let music = musicArray[Math.floor(Math.random() * musicArray.length)];



// Création de la boucle WHILE, on lui dit de boucle l'algorithme tant que la vie de john est strictement supérieur à 0 
while (John.life > 0) {
    music = musicArray[Math.floor(Math.random() * musicArray.length)];

    Taxi.redLight -= 1; // Tout simplement on lui enlève une valeur de 1 si le taxi passe un feu rouge


    if (music == "Anissa - WEJDENE") {
        console.log(music);
        John.life -= 1; // On lui enlève un point de vie si de WEJDENE est joué
        Taxi.change += 1;   // On lui fait changer de taxi en rajoutant un +1 à sa valeur
        console.log(John.name + " John lost 1hp, he changes taxi.");
        
    } 
    if (John.life == 0){ // Si la vie de John est égal à 0
        console.log(John.name + " is dead.");
        break;
    } 
    if (Taxi.redLight == 0){ // Si on a passé les 30 feux rouges et donc la valeur est égal à 0. John est bien arrivé
        console.log(John.name + " arrived.");
        break;

    } else {
        console.log(music);
        console.log(John.name + " continue his traject.");
    }
}