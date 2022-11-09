// findSports function

// if age is less than 7, recommend board games. if age is between 7 and 12, recoomend football. if age is between
// 12 and 18 recommend, baseball. if age is 18 and between 40 recommend WWE wrestling. if age is 40+ recommend PS games

function findSports() {
  let personName = document.querySelector("#name").value;
  let age = document.querySelector(".age").value;
  // grabbing the span element for Name....
  let nameToEdit = document.querySelector(".editName");
  let sportsToEdit = document.querySelector(".editSports");
  let infoEdit = document.querySelector(".infoDisplay");
  let sportsPic = document.querySelector(".sportsImage");

  if (personName) {
    nameToEdit.textContent = personName;
  } else {
    nameToEdit.textContent = "user";
  }

  if (age < 7) {
    sportsPic.src = "wizardingchess.jpg";
    sportsToEdit.textContent = "Wizard Chess";
    console.log("You should play Wizard Chess");
  } else if (age == 7 || age < 12) {
    sportsPic.src = "pixiespotting.webp";
    sportsToEdit.textContent = "Pixie Spotting";
    console.log("You should play Pixie Spotting");
  } else if (age == 12 || age <= 18) {
    // change image src to baseball.jpg sportsPic
    sportsToEdit.textContent = "Quidich";
    sportsPic.src = "quiditch.jpg";
    console.log("You should play Quiditch");
  } else if (age == 18 || age < 40) {
    sportsPic.src = "duelling.webp";
    sportsToEdit.textContent = "Duel";
    console.log("You should do Duelling");
  } else if (age > 40) {
    sportsPic.src = "butterbeer.jpg";
    sportsToEdit.textContent = "Butter Beer";
    console.log("You shouldn't play any games rather drink butter beer");
  }
  //editing visibility
  infoEdit.style.display = "block";
}
