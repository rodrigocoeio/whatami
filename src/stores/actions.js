export default {
  startGame() {
    if (
      !this.currentCategory ||
      !this.currentCategory.cards ||
      this.currentCategory.cards.length === 0
    ) {
      this.game.pleaseSelectCategory = true;
      return false;
    }

    this.game.started = true;
    this.game.opened = false;
    this.game.cardIndex = 0;
    this.game.tipsPlayed = {};
    this.game.category.cards = this.shuffleCards(this.game.category.cards);

    playAudio("/audios/whatami.mp3");
  },

  quitGame() {
    this.game.started = false;
  },

  async loadCategories() {
    try {
      const categoriesJson = await fetch("/cards/categories.json");
      this.categories = await categoriesJson.json();
    } catch (e) {
      //console.error('Failed loading categories.json!');
    }
  },

  selectCategory(category) {
    if (category && category.cards) {
      category.cards = this.shuffleCards(category.cards);

      this.game.category = category;
      this.game.pleaseSelectCategory = false;
    }
  },

  shuffleCards(cards) {
    switch (this.game.cardSorting) {
      case "alpha":
        cards = sortByKey(cards, "name", "asc");
        break;

      case "shuffle":
        cards = shuffleArray(cards);
        break;
    }

    return cards;
  },

  nextCard() {
    if (this.game.cardIndex + 1 < this.cardsNumber) {
      console.log("Next Card");

      this.game.cardIndex++;
      this.game.opened = false;
      this.game.tipsPlayed = {};

      playAudio("/audios/whatami.mp3");
    }
  },

  previousCard() {
    if (this.game.cardIndex > 0) {
      console.log("Previous Card");

      this.game.cardIndex--;
      this.game.opened = false;
      this.game.tipsPlayed = {};

      playAudio("/audios/whatami.mp3");
    }
  },

  playTip(tip) {
    if (this.game.audio) {
      this.game.audio.pause();
      this.game.audio = false;
    }

    if (!this.card.tips.includes(tip)) return false;

    const store = this;
    const audioFile = "/cards/" + this.card.parent + "/" + tip;

    this.game.audio = playAudio(audioFile);
    this.game.audio.onended = function () {
      store.game.audio = false;
      store.game.tipsPlayed[tip] = true;
    };
  },

  playNextTip() {
    const card = this.card;
    const store = this;

    if (card) {
      card.tips.every((tip) => {
        if (!this.game.tipsPlayed[tip]) {
          store.playTip(tip);
          return false;
        }

        return true;
      });
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

    if (!this.card.audio) return false;

    const store = this;
    const audioFile = "/cards/" + this.card.parent + "/" + this.card.audio;

    this.game.audio = playAudio(audioFile);
    this.game.audio.onended = function () {
      store.game.audio = false;
    };
  },
};
