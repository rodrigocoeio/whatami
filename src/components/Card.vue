<template>
    <div class="CardBox">
        <button class="btn btn-success" v-for="tip, index in card.tips" @click="playTip(tip)">
            Tip {{ index + 1 }}
            <img src="/images/audio.png" height="36">
        </button>
        <hr>
        <img src="/images/whatami-cover.png" class="CardCover" @click="openCard" v-if="!opened">

        <div class="Card" v-if="opened" @click="playCard">
            <h1>{{ card.name }}</h1>
            <img :src="cardImage" class="CardImage">
        </div>
    </div>
</template>

<script>
import store from "$/store.js";

export default {
    computed: {
        card() {
            return store.card;
        },

        cardImage() {
            return "/cards/" + store.currentCategory.name + "/" + this.card.image;
        },
        
        opened() {
            return store.game.opened;
        }
    },

    methods: {
        playTip(tip) {
            if (store.game.audio) {
                store.game.audio.pause();
                store.game.audio = false;
            }

            const audioFile = "/cards/" + store.currentCategory.name + "/" + tip;

            store.game.audio = playAudio(audioFile);
            store.game.audio.onended = function () {
                store.game.audio = false;
            };
        },

        openCard() {
            return store.openCard();
        },

        playCard() {
            return store.playCard();
        }
    }
}
</script>

<style scoped>
.CardBox {
    height: calc(100% - 100px);
}
.Card {
    height: calc(100% - 150px);
    cursor: pointer;
}
.CardCover {
    cursor: pointer;
}
.CardImage {
    object-fit: contain;
    height: 100%;
    margin: auto;
    overflow: hidden;
}
</style>