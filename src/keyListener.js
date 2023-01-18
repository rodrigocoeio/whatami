import store from "$/store";

const listenKeyBoardEvents = function (e) {
  if (store.game.started) {
    // Open Guess Where box on space
    /* if (e.keyCode == 32) {
      if(!$("#guessWhere").is(":focus")) {
        return $("#guessWhere").trigger("focus");
      }
    } */

    // On Enter
    /* if (e.keyCode == 13) {
      if (store.game.guessed) {
        return store.startGame();
      }

      if (store.game.missed) {
        return store.tryAgain();
      }
    } */
  }
};

window.addEventListener("keydown", listenKeyBoardEvents);
