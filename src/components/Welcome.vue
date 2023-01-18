<template>
  <main>
    <img src="images/whatami.png" class="Logo">

    <br><br>

    <category-select :categories="categories"></category-select>

    <button class="btn btn-primary" @click="startGame">Start Game</button>

  </main>
</template>
  
<script>
import store from "$/store.js";
import CategorySelect from "./CategorySelect.vue";

export default {
  data() {
    return {

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
  padding: 15px;
}

.Logo {
  max-width: 500px;
}

select {
    max-width: 200px;
    margin: auto;
    margin-bottom: 15px;
}
</style>