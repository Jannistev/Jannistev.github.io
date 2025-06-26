let engine = document.getElementById("engine");
let device = document.getElementById("device");
const cards = document.querySelectorAll(".card");

engine.addEventListener('change', ShowCards);
device.addEventListener('change', ShowCards);

ShowCards();

function ShowCards() {

const selectedEngine = engine.value;
const selectedDevice = device.value;
const projectContainer = document.getElementById("ProjectsContainer")

projectContainer.innerHTML = "";

for (let i = 0; i < data.length; i++) {

    if (!data[i].tags.includes(selectedEngine) || !data[i].tags.includes(selectedDevice))
        continue;
    
    const projectCard = document.createElement("div");
    projectCard.className = "col-12 col-lg-4";

    let carouselItems = [];

    for (let j = 0; j < data[i].images.length; j++) {
        let img = data[i].images[j];
        let active = "";
        
        if (j === 0) {
            active = "active";
        }

        carouselItems += `
        <div class="carousel-item ${active}">
            <img src="${img}" class="d-block img-fluid" alt="${data[i].title}_Img${j + 1}" style="height: 340px; width:100%;">
        </div>
    `;
    }

    projectCard.innerHTML = `
    <div class="card mt-5 border-secondary" style="width: 100%; padding: 5px; min-height: 520px;" data-tags="${data[i].tags}">
        <div id="${data[i].carouselId}" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
            <div class="carousel-inner">
               ${carouselItems}
            </div>
        </div>
        <div class="card-body text-center">
            <h5 class="card-title"><b>${data[i].title}</b></h5>
            <p class="card-text">${data[i].description}</p>
            <a href="${data[i].link}" class="btn btn-primary" target="_blank">Lees meer</a>
        </div>
    </div>
`;

projectContainer.appendChild(projectCard);
}
}
