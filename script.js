let mykey = config.MY_KEY;
const btn = document.querySelector("#btn");
const section = document.querySelector("section");
const body = document.querySelector("body");



const searchMovies = function () {
  fetch(
    "https://www.omdbapi.com/?apikey=" +
      mykey +
      "&s=" +
      document.querySelector("#input-search").value
  )
    .then((item) => item.json())
    .then((movies) => {section.innerHTML = ""
      movies.Search.forEach((element) => {
       
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h2");
        title.innerText = element.Title;

        const img = document.createElement("img");
        img.src = element.Poster;
        img.width = 100;

        const year = document.createElement("p");
        year.innerText = element.Year;

        const containerTitleYear = document.createElement("div");
        containerTitleYear.classList.add("container-title-year");

        const buttonRead = document.createElement("button");
        buttonRead.innerText = "Voir +";
        buttonRead.classList.add("button-read");
        buttonRead.setAttribute("id", element.imdbID);

        section.appendChild(card);
        card.appendChild(img);
        card.appendChild(containerTitleYear);
        containerTitleYear.appendChild(title);
        containerTitleYear.appendChild(year);
        containerTitleYear.appendChild(buttonRead);


// const modal
        const paraModal = document.querySelector(".para-modal");
        const titleModal = document.querySelector(".title-modal");
        const imgModal = document.querySelector(".img-modal");
        const modalFunction = function () {
          fetch(
            "https://www.omdbapi.com/?i=" + buttonRead.id + "&apikey=" + mykey
          )
            .then((item) => item.json())
            .then((movie) => {
              (paraModal.innerText = movie.Plot),
                (titleModal.innerText = movie.Title),
                (imgModal.src = movie.Poster);
            });

          modal.style.display = "block";

          console.log(buttonRead.id);
        };

        buttonRead.addEventListener("click", modalFunction);
      })}
    );
};

// Le modal
const modal = document.getElementById("myModal");
// la croix pour fermer
const span = document.getElementsByClassName("close")[0];
// au clic change display en none
span.onclick = function () {
  modal.style.display = "none";
};
// si tu clic n'mporte ou ferme le modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

btn.addEventListener("click", searchMovies);


