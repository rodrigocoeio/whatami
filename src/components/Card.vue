<template>
    <div class="CardBox">
        <div class="CardTips">
            <button :class="['TipButton', 'btn', tipsPlayed[tip] ? 'Played' : '']" v-for="tip, index in card.tips"
                @click="playTip(tip)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    className="bi bi-speaker-fill" viewBox="0 0 16 16">
                    <path d="M9 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-2.5 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" />
                    <path
                        d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" />
                </svg>
                <span>Tip {{ index + 1 }}</span>
            </button>
        </div>

        <img src="/images/whatami.png" class="CardCover" @click="openCard" v-if="!opened">

        <div class="Card" v-if="opened" @click="playCard">
            <h1>I'm {{ card.name }}</h1>
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
            return "/cards/" + this.card.parent + "/" + this.card.image;
        },

        tipsPlayed() {
            return store.game.tipsPlayed;
        },

        opened() {
            return store.game.opened;
        }
    },

    methods: {
        playTip(tip) {
            return store.playTip(tip);
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
    width: fit-content;
    margin: auto;
    height: calc(100% - 70px);
    cursor: pointer;
    border: 3px dashed black;
    border-radius: 30px;
    box-sizing: border-box;
    overflow: hidden;
}

.Card h1 {
    position: relative;
    text-shadow: gray 3px 1px 1px;
    -webkit-text-stroke: 1px white;
    background-color: white;
    margin-top: 0px;
    font-size: 36px;
    font-weight: bold;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: black;
    border-bottom: 3px dashed black;
    z-index: 10;
}

.CardCover {
    cursor: pointer;
    border: 3px dashed black;
    border-radius: 30px;
    box-sizing: border-box;
    overflow: hidden;
}

.CardImage {
    position: relative;
    object-fit: contain;
    height: calc(100% - 40px);
    margin: auto;
    margin-top: -25px;
    overflow: hidden;
    z-index: 2;
}

.CardTips {
    margin-bottom: 15px;
}

.TipButton {
    margin-right: 5px;
}

.TipButton {
    padding: 8px;
    font-size: 14px;
    border-radius: 15px;
    cursor: pointer;
    margin-left: 15px;
}

.TipButton.Played {
    opacity: 0.4;
}

.TipButton:hover {
    background-color: chartreuse;
    text-shadow: white 3px 0 10px;
    box-shadow: 3px 3px gray;
}

.TipButton svg,
.TipButton span {
    vertical-align: middle;
}
</style>