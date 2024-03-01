let engine = document.getElementById("engine");
let device = document.getElementById("device");
const cards = document.querySelectorAll(".card");

engine.addEventListener('change', CardSelector);
device.addEventListener('change', CardSelector);

function CardSelector() {

    const selectedEngine = engine.value;
    const selectedDevice = device.value;

    for (let i = 0; i < cards.length; i++) {
        const cardTags = cards[i].getAttribute('data-tags');

        console.log(selectedEngine);
        console.log(selectedDevice);
        console.log(cardTags);

        if (cardTags.includes(selectedEngine) && cardTags.includes(selectedDevice)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}