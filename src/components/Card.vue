<template>
    <div class="CardBox">
        <button class="btn btn-success" v-for="tip, index in card.tips" @click="playTip(tip)">
            Tip {{ index + 1 }}
            <img src="/images/audio.png" height="36">
        </button>
        <hr>
        <img src="/images/whatami-cover.png" @click="openCard" v-if="!opened">

        <div class="Card" v-if="opened">
            <h1>{{ card.name }}</h1>
            <img :src="cardImage">
        </div>
    </div>
</template>

<script>
import store from "$/store.js";

export default {
    data() {
        return {
            opened: false
        }
    },

    computed: {
        card() {
            return store.card;
        },

        cardImage() {
            return "/cards/" + store.currentCategory.name + "/" + this.card.image;
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
            this.opened = true;

            if (store.game.audio) {
                store.game.audio.pause();
                store.game.audio = false;
            }

            const audioFile = "/cards/" + store.currentCategory.name + "/" + this.card.audio;

            store.game.audio = playAudio(audioFile);
            store.game.audio.onended = function () {
                store.game.audio = false;
            };
        }
    }
}
</script>