function GetRandomCardNotOnList(cardResult, deckToUse) {
  //get current-cards into a array
  let cardsPicked = new Set(
    cardResult
      .getAttribute("current-cards")
      .trimStart()
      .split(" ")
      .map((x) => Math.abs(x))
  );
  //pick random index not on current-cards
  if (cardsPicked.size < deckToUse.length) {
    let unpickedCards = deckToUse
      .map((card, index) => index.toString())
      .filter((index) => {
        return !cardsPicked.has(Number(index));
      });
    const random_index = Math.floor(Math.random() * unpickedCards.length);
    //check if it is a flipped card
    const isFlipped = Math.floor(Math.random() * 100) < 35;
    const current = cardResult.getAttribute("current-cards");
    const just_picked_value = isFlipped
      ? "-" + unpickedCards[random_index].toString()
      : unpickedCards[random_index];
    cardResult.setAttribute(
      "current-cards",
      current + " " + just_picked_value.toString()
    );
  }
}

function addRandomCard(cardResult, deckToUse) {
  GetRandomCardNotOnList(cardResult, cardSrcDefault);
}
