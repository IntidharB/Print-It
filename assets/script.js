const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
	
]

// Récupérer les éléments du DOM
const leftArrow = document.getElementsByClassName('arrow_left')[0];
const rightArrow = document.getElementsByClassName('arrow_right')[0];
// Récupérer le conteneur des bullet points 
const dotsContainer = document.querySelector('.dots');
// Ajouter les bullet points
slides.forEach((slide, index) => {
  const dot = document.createElement('div'); // Créer un nouvel élément div pour représenter un B.P
  dot.classList.add('dot');
  if (index === 0) {
    dot.classList.add('dot_selected');
  }
  dotsContainer.appendChild(dot);
});

// Initialisation de l'index de la diapositive courante à 0
let slideIndex = 0;
// Ajout d'un écouteur d'événements sur la flèche droite
rightArrow.addEventListener('click', () => {
  console.log('Clic sur la flèche droite');
  slideIndex++;
  if (slideIndex >= slides.length) {
    // Si on est à la dernière diapositive, afficher la première diapositive
    slideIndex = 0;   
  }
  // Mise à jour de l'affichage
  updateSlider();
});

// Ajout d'un écouteur d'événements sur la flèche gauche
leftArrow.addEventListener('click', () => {
console.log('Clic sur la flèche gauche');
  slideIndex--;
  if (slideIndex < 0) {
    // Si on est à la première diapositive, afficher la dernière diapositive
    slideIndex = slides.length - 1;

  }
  // Mise à jour de l'affichage
  updateSlider();
});


// Fonction de mise à jour de l'affichage
function updateSlider() {
	// Récupération de l'image et de la ligne de texte de la diapositive courante
	const bannerImg = document.querySelector('.banner-img');
	const tagLine = document.querySelector('#banner p');
	// Récupération de tous les points
	const dots = document.querySelectorAll('.dot');
      
	// Mise à jour de l'image et de la ligne de texte de la diapositive courante
	bannerImg.src =`./assets/images/slideshow/${slides[slideIndex].image}`; // Appel de la fonction pour obtenir l'URL de l'image
	tagLine.innerHTML = slides[slideIndex].tagLine; // Appel de la fonction pour obtenir la ligne de texte
      
	// Mise à jour de la sélection des points
	dots.forEach((dot, index) => {
	  // Ajoute la classe 'dot_selected' si l'index correspond à la diapositive courante, sinon la supprime
	  dot.classList.toggle('dot_selected', index === slideIndex);
	});
      }