<template>
    <div class="wrapper">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <form v-on:submit.prevent action="submit"  @submit="startGame">
            <div class="insideform">
                player1: 
                <input :value="player1" type="text"><br><br>
                player2:
                <input :value="player2" type="text"><br><br>
            </div>
            <button type="submit">submit</button>      
        </form>
    </div>
</template>

<script>
export default {
    name: "Home",
    data () {
        return {
            player1: this.$store.state.playerInput[0].input,
            player2: this.$store.state.playerInput[1].input,
        }
    },
    methods: {
         addPlayer (playerName) {
            this.$store.commit('addPlayer', playerName)
        },
        updateInput (playerName) {
             this.$store.commit('updateInput', playerName)
         },
        test () {
          this.playerName = this.userInput;
        },
        startGame () {
            this.addPlayer(this.player1);
            this.addPlayer(this.player2);
            // this.$router.push('/Game');
        },
    }
    

}
</script>

<style scoped>

.wrapper {
    width: 800px;
    text-align: center;
}

.insideform {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    grid-auto-rows: 30px;
    grid-auto-columns: 30px;
}    

</style>