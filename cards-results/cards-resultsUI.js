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

function createText(name,text){
  const textDisplay = document.createElement("details");
  const textTitle = document.createElement("summary");
  const expandText = document.createElement("p");
  //Style
  textTitle.style = "color: white"
  //Fill
  textTitle.textContent = name;
  expandText.textContent = text;
  //Attach
  textDisplay.appendChild(textTitle);
  textDisplay.appendChild(expandText);
  return textDisplay;
}

function createCardDescription(cardElement, text){
  const cardDescription = document.createElement("div");
  cardDescription.append( cardElement );
  cardDescription.append( text );
  cardDescription.style = "display:inline-block; width:18%;padding:5px;min-width: 150px;"
  return cardDescription;
}

function addCard(mat, deckToUse, card) {
  const isFlipped = card.includes("-");
  const index = Math.abs(Number(card));
  const cardElement = createCard(deckToUse[index], isFlipped); 
  const text = createText(cardSrcMeaning[index][0], isFlipped ? cardSrcMeaning[index][2] : cardSrcMeaning[index][1]);
  const cardDisplayWithDescription = createCardDescription(cardElement, text);
  mat.appendChild(cardDisplayWithDescription);
}

function reset(cardResult) {
  cardResult.setAttribute("current-cards", "");
}
