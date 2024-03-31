function createCard(cardSrc) {
  if (cardSrc != null) {
    const card = document.createElement("img");
    const style = "width:18%";
    card.setAttribute("src", cardSrc ? cardSrc : "cardBack.png");
    card.style = style;
    return card;
  } else {
    return null;
  }
}
