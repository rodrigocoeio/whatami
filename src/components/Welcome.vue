<template>
  <main>
    <div class="WelcomeWrapper">
      <img src="/images/whatami.png" class="Logo" width="300">
      <h1>What Am I?</h1>

      <select class="SelectSorting" v-model="cardSorting">
        <option value="alpha">Alphabetical Sorting</option>
        <option value="shuffle">Shuffle Cards</option>
      </select>

      <category-select :categories="categories"></category-select>

      <button class="StartGame" @click="startGame">Start Game</button>
    </div>
  </main>
</template>
  
<script>
import store from "$/store.js";
import CategorySelect from "./CategorySelect.vue";

export default {
  async beforeMount() {
    await store.loadCategories();
  },

  data() {
    return {
      cardSorting: store.game.cardSorting
    }
  },

  computed: {
    categories() {
      return store.categories;
    }
  },

  watch: {
    cardSorting(value) {
      store.game.cardSorting = value;
    }
  },

  methods: {
    startGame() {
      return store.startGame();
    }
  },

  components: {
    CategorySelect
  }
}
</script>
  
<style scoped>
main {
  height: 100%;
  display: flex;
  place-content: center;
  justify-items: center;
  align-items: center;
}

.Logo {
  border: 2px solid black;
  border-radius: 30px;
  box-shadow: 3px 3px gray;
}

h1 {
  text-shadow: gray 2px 1px 1px;
  margin-top: 0px;
  margin-bottom: 15px;
  font-size: 48px;
  font-weight: bold;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: black;
}

select {
  display: block;
  padding: 20px;
  border-radius: 15px;
  font-size: 24px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 0 auto;
  margin-bottom: 15px;
  cursor: pointer;
  border: 3px solid black;
}

select:hover {
  background-color: chartreuse;
  text-shadow: white 3px 0 10px;
  box-shadow: 3px 3px gray;
}

.CardSortingSelect {
  float: left;
  max-width: 200px;
  margin-right: 15px;
}

.DifficultySelect {
  float: right;
  max-width: 200px;
}

.StartGame {
  display: block;
  padding: 20px;
  border: 3px solid black;
  border-radius: 15px;
  font-size: 24px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  margin: 0 auto;
  cursor: pointer;
}

.StartGame:hover {
  background-color: chartreuse;
  text-shadow: gray 3px 0 10px;
  box-shadow: 3px 3px gray;
}

.PleaseSelect {
  border: 3px solid red !important;
  box-sizing: border-box;
}
</style>