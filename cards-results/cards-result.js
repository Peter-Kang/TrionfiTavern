function createCard(cardSrc, isFlipped = false) {
  if (cardSrc != null) {
    const card = document.createElement("img");
    const style = "width:18%;padding:5px;min-width: 250px;";
    if (isFlipped) {
      style.concat("transform: scaleY(-1);");
    }
    card.setAttribute("src", cardSrc ? cardSrc : "cardBack.png");
    card.style = style;
    return card;
  } else {
    return null;
  }
}
