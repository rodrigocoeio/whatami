export default {
  startGame() {
    this.game.started = true;
    this.game.cardIndex = 0;
  },

  quitGame() {
    this.game.started = false;
  },

  selectCategory(category) {
    category.cards = shuffleArray(category.cards);
    this.game.category = category;
  },

  nextCard() {
    if (this.game.cardIndex + 1 < this.cardsNumber) {
      console.log("Next Card");

      this.game.cardIndex++;
      this.game.opened = false;
    }
  },

  previousCard() {
    if (this.game.cardIndex > 0) {
      console.log("Previous Card");

      this.game.cardIndex--;
      this.game.opened = false;
    }
  },
};
