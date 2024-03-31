function createCard(cardSrc, isFlipped) {
  if (cardSrc != null) {
    const card = document.createElement("img");
    let style = "width:18%;padding:5px;min-width: 150px;";
    if (isFlipped) {
      style = style.concat("transform: rotate(180deg)");
    }
    card.setAttribute("src", cardSrc ? cardSrc : "cardBack.png");
    card.style = style;
    return card;
  } else {
    return null;
  }
}
