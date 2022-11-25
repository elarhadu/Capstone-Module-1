/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable quotes */
// HAMBURGER MENU INTERACTION
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector("header");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  header.classList.toggle("full-screen");
  body.classList.toggle("no-scroll");
});

document.querySelectorAll(".nav-link").forEach((n) => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  header.classList.remove("full-screen");
  body.classList.remove("no-scroll");
}));

// CREATING 'FEATURED PRESENTERS DYNAMICALLY'

const presenters = [
  {
    id: 1,
    image: "images/Chris-Attoh.jpg",
    presenterName: "Chris Attoh",
    career: "Television presenter and Producer",
    about:
      "Chris Attoh is a Ghanaian actor, film director, on-air personality,television presenter and Producer. He is best known as Kwame Mensah in Nigerian soap opera Tinsel.",
  },

  {
    id: 2,
    image: "images/jim iyke.jpg",
    presenterName: "Jim Iyke",
    career: "Actor",
    about:
      "James Ikechukwu Esomugha, popularly known as Jim Iyke, is a Nigerian actor and one of the stars of the movie Last Flight to Abuja.",
  },

  {
    id: 3,
    image: "images/nana-ama.jpg",
    presenterName: "Nana Ama McBrown",
    career: "Ghanaian actress, TV presenter and a music writer",
    about:
      "Felicity Ama Agyemang, popularly known as Nana Ama McBrown, is a Ghanaian actress, TV presenter and a music writer. She is currently the host of television cooking show McBrown Kitchen.",
  },

  {
    id: 4,
    image: "images/Majid_Michael.jpg",
    presenterName: "Majid Michel",
    career: "Actor/Model",
    about:
      "Majid Michel is a Ghanaian actor, model, television personality, evangelist and a humanitarian.",
  },

  {
    id: 5,
    image: "images/Pete-edochie.jpg",
    presenterName: "Pete Edochie",
    career: "Actor",
    about:
      "Chief Pete Edochie is a Nigerian actor. Edochie is considered one of Africa’s most talented actors, being honored with an Industry Merit Award by Africa Magic and Lifetime Achievement by Africa Film Academy. ",
  },

  {
    id: 6,
    image: "images/Sarkodie.jpg",
    presenterName: "Sarkodie",
    career: "Rapper",
    about:
      "Sarkodie is a Ghanaian rapper, songwriter, and entrepreneur. He was announced the first winner of BET Best International Flow artist at the 2019 BET Hip Hop Awards.",
  },
];

// const featuredPresenters = document.querySelector(".featured-presenters");
presenters.forEach((presenter) => {
  document.querySelector(".presenterSection").innerHTML += `

<div class= 'presenters'>
            <div class='presenter-image'>
            <img src='images/check background.png' alt='bgimg' class='bgImg'/>
                <img src='${presenter.image}' class='bgPresent' alt='Presenter's image' />
            </div>
            <div class='presenter-details'>
              <p>${presenter.presenterName}</p>
              <p class='career'><em>${presenter.career}.</em></p>
              <div class='underline-1'></div>
              <p>${presenter.about}</p>
          </div>
          </div>
  `;
});

const loadMore = document.querySelector("#more");
let currentItem = 2;

loadMore.onclick = () => {
  const btn = [
    ...document.querySelectorAll(
      ".featured-presenters .presenter-container .presenters"
    ),
  ];
  for (let i = currentItem; i < currentItem + 2; i++) {
    btn[i].style.display = "flex";
  }
  currentItem += 2;
  if (currentItem >= btn.length) {
    loadMore.style.display = "none";
  }
};
