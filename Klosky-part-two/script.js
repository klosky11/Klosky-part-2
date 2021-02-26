// Variables

var yourPet = {
    yourPetName: prompt ("What is your pets name?"),
    happiness: 0,
    energy: 0
}

//Functions

function petYourPet () {
    yourPet.happiness += 1;
}

function feedYourPet () {
    yourPet.energy += 2;
}

function walkYourPet () {
    if (yourPet.energy < 1){
        yourPet.energy = 0;
        alert("Not enough energy to enjoy a walk!");
    } else {
        yourPet.happiness += 2;
        yourPet.energy -= 1;
    }
}

//Functions actions

function actions () {
    var action = prompt("Do you want to pet, feed, or walk " + yourPet.yourPetName + "?");
    if (action == "pet") {
        petYourPet ()
    } else if (action == "feed") {
        feedYourPet()
    } else if (action == "walk") {
        walkYourPet()
    }
    console.log (yourPet.yourPetName + " has " + yourPet.happiness + " happiness " + "and " + yourPet.energy + " energy ");
}

//Loop 6 times

function actionLoop() {
    for (i=0; i<6; i++) {actions ()}
}

actionLoop()