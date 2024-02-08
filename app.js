// -------------------- CONSTANTES -------------------- //


// -- pour la barre de recherche -- //

// Récupère tous les articles normaux
const allCards = document.querySelectorAll(".card");


// -- pour l'affichage complet des articles les plus lus -- //

// Récupère le carousel
const carousel = document.querySelector(".carousel-inner");

// Récupère tous les boutons "Lire la suite" des articles les plus-lus
const allReadMorePopular = document.querySelectorAll(".readMore-popular");

// Récupère tous les textes "text-hide" des articles les plus-lus
const allTextHide = document.querySelectorAll(".text-hide");


// -- pour l'affichage des modales -- //

// Récupère tous les boutons "Lire la suite" des articles normaux
const allReadMore = document.querySelectorAll(".readMore");

// Récupère toutes les modales
const allModals = document.querySelectorAll(".modal");

// Récupère tous les boutons "exit" des modales
const allExit = document.querySelectorAll(".exit-article");


// -- pour le compteur de vues -- //

// Récupère tous les p contenant "Nombre de vu:"
const allNumberViews = document.querySelectorAll(".numberViews");


// -- pour l'affichage du formulaire -- //

// Récupère tous les boutons déroulant du formulaire
const allButtonShow = document.querySelectorAll(".showForm");

// Récupère tous les formulaires
const allForm = document.querySelectorAll(".form-horizontal");


// ---------------Tableaux------------------

// -- compteur de vues -- //
const arrayNumberViews = Array.from(allNumberViews);

// -- affichage articles les plus lus -- //
const arrayTextHide = Array.from(allTextHide);

const arrayReadMorePopular = Array.from(allReadMorePopular);

// -- affichage du formulaire -- //
const arrayButtonShow = Array.from(allButtonShow);

const arrayForm = Array.from(allForm);

// -- affichage des modales -- //
const arrayReadMore = Array.from(allReadMore);

const arrayModals = Array.from(allModals);

const arrayExit = Array.from(allExit);



// -------------------- FONCTIONS -------------------- //

// ----- Barre de recherche ------ //

function search_article() {

  let input = document.getElementById('searchbar').value

  input = input.toLowerCase();

  allCards.forEach(function(card) {

    if (!card.innerHTML.toLowerCase().includes(input)) {
      card.style.display="none";
    }

    else{
      card.style.display="flex";
    }
  })
}

// ----- Affichage "Lire la suite" articles plus lus & Nombre de vue ------ //

allReadMorePopular.forEach(function(readMorePopular) {

  let counter = 10
  let counterBtn = 0

  readMorePopular.addEventListener("click", () =>{

    counterBtn++
    i = arrayReadMorePopular.indexOf(readMorePopular)

    if(counterBtn===1){
      counter++
      arrayNumberViews[i].textContent = `Nombre de vu : ${(counter)}`
      arrayTextHide[i].style.display = "block";
      carousel.style.margin = "0 0 10% 0";
      arrayReadMorePopular[i].textContent = `Fermer l'article`
    }

    else if(counterBtn===2){
      arrayTextHide[i].style.display = "none";
      carousel.style.margin = "0 0 0 0";
      arrayReadMorePopular[i].textContent = `Lire la suite .....`
      counterBtn = 0;
    }
  })
})


// ----- Affichage modale & Nombre de vue ------ //

allReadMore.forEach(function(readMore) {

  let counter = 0

  readMore.addEventListener("click", () =>{

    counter++

    i = arrayReadMore.indexOf(readMore)
    i=i+3
    arrayNumberViews[i].textContent = `Nombre de vu : ${(counter)}`

    i = arrayReadMore.indexOf(readMore)
    arrayModals[i].style.display = "block";

    arrayExit[i].addEventListener("click", () =>{
      arrayModals[i].style.display = "none";
    })
    
  })
})

// ----- Affichage du formulaire ------ //

allButtonShow.forEach(function(buttonShow) {

  let counterBtnShow =  0;

  i =  arrayButtonShow.indexOf(buttonShow);

  buttonShow.addEventListener('click', () =>{
    counterBtnShow ++;

    if (counterBtnShow===1){
      arrayForm[i].style.display = "flex";
      arrayButtonShow[i].textContent = `Fermer` 
    }

    else if(counterBtnShow===2){
      arrayForm[i].style.display = "none";
      arrayButtonShow[i].textContent = `Cliquez-ici`
      counterBtnShow = 0
    }
  })
})