// HAMBURGER MENU INTERACTION
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// CREATING "FEATURED PRESENTERS DYNAMICALLY"

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
      "James Ikechukwu Esomugha, popularly known as Jim Iyke listen, is a Nigerian actor and one of the stars of the movie Last Flight to Abuja alongside Omotola Jalade Ekeinde and Hakeem Kae-Kazim.",
  },

  {
    id: 3,
    image: "images/nana-ama.jpg",
    presenterName: "Nana Ama McBrown",
    career: "Ghanaian actress, TV presenter and a music writer",
    about:
      "Felicity Ama Agyemang, popularly known as Nana Ama McBrown, is a Ghanaian actress, TV presenter and a music writer. She rose to prominence for her role in television series Tentacles. She is currently the host of television cooking show McBrown Kitchen and entertainment talk show United Showbiz on UTV.",
  },

  {
    id: 4,
    image: "images/Majid_Michael.jpg",
    presenterName: "Majid Michel",
    career:
      "Actor, Model, Television Personality, Evangelist and a Humanitarian",
    about:
      "Majid Michel is a Ghanaian actor, model, television personality, evangelist and a humanitarian. He received nominations for Best Actor in a Leading Role at the Africa Movie Academy Awards in 2009, 2010, 2011, 2012, 2014 and 2017. He eventually won the award in 2012 after three previous consecutive nominations",
  },

  {
    id: 5,
    image: "images/Pete-edochie.jpg",
    presenterName: "Pete Edochie",
    career: "Actor",
    about:
      "Chief Pete Edochie is a Nigerian actor. Edochie is considered one of Africa’s most talented actors, being honored with an Industry Merit Award by Africa Magic and Lifetime Achievement by Africa Film Academy. Although a seasoned administrator and broadcaster, he came into prominence in the 1980s when he played the lead role of Okonkwo in a Nigerian Television Authority adaptation of Chinua Achebe’s all-time best selling novel, Things Fall Apart. ",
  },

  {
    id: 6,
    image: "images/Sarkodie.jpg",
    presenterName: "Sarkodie",
    career: "Rapper",
    about:
      "Michael Owusu Addo known professionally as Sarkodie, is a Ghanaian rapper, songwriter, and entrepreneur. His contributions to the Ghanaian music industry have earned him numerous accolades, including the Vodafone Ghana Music Award for Artiste of the Decade. He was announced the first winner of BET's Best International Flow artist at the 2019 BET Hip Hop Awards. He is also considered one of the major proponents of the Azonto genre and dance and one of the most successful African rappers of all time.",
  },
];

const featuredPresenters = document.querySelector(".featured-presenters");

presenters.forEach((presenter, index) => {
  document.querySelector(".featured-presenters").insertAdjacentHTML(
    "afterbegin",
    `
  <div class="presenterSection">
  <ul class="featured-presenters-list">
          <li>
            <div class="presenter-image">
              <div class="bg">
                <img src="images/check background.png" alt="" />
              </div>
              <div class="image-p">
                <img src="${presenter.image}" alt="Presenter's image" />
              </div>
            </div>
            <div>
              <p>${presenter.presenterName}</p>
              <p class="career"><em>${presenter.career}.</em></p>
              <div class="underline-1"></div>
              <p>${presenter.about}</p>
            </div>
          </li>
          </ul>
          </div>
  `
  );
});
