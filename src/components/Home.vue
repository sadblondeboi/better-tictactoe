<template>
    <div class="wrapper">
        <h2>Better tictactoe with vue and vuex.</h2>
        <form v-on:submit.prevent action="submit"  @submit="startGame">
            <div class="insideform">
                    <h3 class="item">Player 1 name:</h3>
                    <h3 class="item">Player 2 name:</h3>
                    <input class="item" v-model="player2" type="text">
                    <input class="item" v-model="player1" type="text">
            </div>
            <br>
            <button type="submit">Play</button>      
        </form>
    </div>
</template>

<script>
export default {
    name: "Home",
    data () {
        return {
            player1: "",
            player2: "",
        }
    },
    computed: {
        getActivePlayer() {
            return this.$store.getters.getActivePlayer;
        }
    },
    methods: {
        addPlayer (playerName) {
            this.$store.commit('addPlayer', playerName)
        },
        setActivePlayer (playerId) {
            this.$store.commit('setActivePlayer', playerId)
        },

        startGame () {
            this.addPlayer(this.player1);
            this.addPlayer(this.player2);
            this.setActivePlayer(1);
            this.$router.push('/Game');
        },
    }
}
</script>

<style>

.wrapper {
    max-width: 700px;
    text-align: center;
}

.insideform {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 36px 36px;
    grid-gap: 5px;
    padding: 10px;
    font-size: 16px;   
    text-align: center;
} 

.item {
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    background-color: #2c3e50;
    border: none;
    color: white;
    text-decoration: none;
    font-size: 16px;
    padding: 10px 32px;
    border-radius: 4px;
}
</style>