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
};
