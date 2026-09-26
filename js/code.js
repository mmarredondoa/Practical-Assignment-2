const cardsContainer = document.getElementById("cards-container");
const loadBtn = document.getElementById("load-btn");
const themeBtn = document.getElementById("theme-btn");

const loadWorks = async () => {
  try {
    const response = await fetch("data.json");
    const works = await response.json();
    renderCards(works);
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
};

function renderCards(works) {
  cardsContainer.innerHTML = "";

  works.forEach((work) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = work.title;

    const description = document.createElement("p");
    description.textContent = work.description;

    const details = document.createElement("p");
    details.classList.add("details");
    details.textContent = work.details;

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(details);

    cardsContainer.appendChild(card);
  });
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

loadBtn.addEventListener("click", loadWorks);
themeBtn.addEventListener("click", toggleTheme);