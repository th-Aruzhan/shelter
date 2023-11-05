import data from "../data.json" assert { type: "json" };

const imgPetOne = document.querySelector(".pets-katrine");
const namePetOne = document.querySelector(".name-Katrine");
const imgPetTwo = document.querySelector(".pets-jennifer");
const namePetTwo = document.querySelector(".name-Jennifer");
const imgPetThree = document.querySelector(".pets-woody");
const namePetThree = document.querySelector(".name-Woody");

let index = 0;

function displayPets() {
  imgPetOne.src = data[index].img;
  namePetOne.textContent = data[index].name;

  imgPetTwo.src = data[index + 1].img;
  namePetTwo.textContent = data[index + 1].name;   

  imgPetThree.src = data[index + 2].img;
  namePetThree.textContent = data[index + 2].name;
}

/////////////////////// Right

const arrowRight = document.querySelector(".arrow-right");
arrowRight.addEventListener("click", showNextPets);

function showNextPets() {
  index++;
  displayPets();
}

///////////////////////// Left

const arrowLeft = document.querySelector(".arrow-left");
arrowLeft.addEventListener("click", showBackPets);


function displayBackPets() {
  imgPetOne.src = data[index].img;
  namePetOne.textContent = data[index].name;

  imgPetTwo.src = data[index - 1].img;
  namePetTwo.textContent = data[index - 1].name;

  imgPetThree.src = data[index - 2].img;
  namePetThree.textContent = data[index - 2].name;
}


function showBackPets(){
  index--;
  displayBackPets()
}



//////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const learnMoreButtons = document.querySelectorAll(".open-box");
  const popup = document.getElementById("popup");
  const popupImage = document.querySelector(".poput__img");
  const popupText = document.querySelector(".poput-container-text");
})




function updatePopupContent(pet) {
  popupImage.src = pet.img;
  popupText.innerHTML = `
    <button class="poput-close" onclick="popup.style.display = 'none'">&times;</button>
    <h5 class="poput-container-text-name">${pet.name}</h5>
    <h6 class="oput-container-text-type-breed">${pet.type} - ${pet.breed}</h6>
    <p class="poput-container-text-description">${pet.description}</p>
    <ul class="popup__container__text__ul">
      <li><span class="popup__span-bold">Age:</span> <span class="popup__pet-age char">${pet.age}</span></li>
      <li><span class="popup__span-bold">Inoculations:</span> <span class="popup__pet-inoculations char">${pet.inoculations.join(", ")}</span></li>
      <li><span class="popup__span-bold">Diseases:</span> <span class="popup__pet-diseases char">${pet.diseases.join(", ")}</span></li>
      <li><span class="popup__span-bold">Parasites:</span> <span class="popup__pet-parasites char">${pet.parasites.join(", ")}</span></li>
    </ul>
  `;
}

function processData(data) {
  let pets = data;
  for (let i = 0; i < learnMoreButtons.length; i++) {
    (function (index) {
      learnMoreButtons[index].addEventListener("click", function () {
        popup.style.display = "flex";
        updatePopupContent(pets[index]);
      });
    })(i);
  }
}

loadJSON(processData);

