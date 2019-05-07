const cards = document.querySelectorAll('.cartaUnica');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));