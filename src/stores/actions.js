export default {
  startGame() {
    this.game.started = true;
    this.game.cardIndex = 0;

    playAudio("/audios/whatami.mp3");
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

      playAudio("/audios/whatami.mp3");
    }
  },

  previousCard() {
    if (this.game.cardIndex > 0) {
      console.log("Previous Card");

      this.game.cardIndex--;
      this.game.opened = false;

      playAudio("/audios/whatami.mp3");
    }
  },

  openCard() {
    this.game.opened = true;

    this.playCard();
  },

  playCard() {
    if (this.game.audio) {
      this.game.audio.pause();
      this.game.audio = false;
    }

    if(!this.card.audio)
      return false;

    const store = this;
    const audioFile =
      "/cards/" + this.currentCategory.name + "/" + this.card.audio;

    this.game.audio = playAudio(audioFile);
    this.game.audio.onended = function () {
      store.game.audio = false;
    };
  },
};
