<template>
    <div class="wrapper">
    <h1>Lorem ipsum dolor sit amet consectetur.</h1>
    
    <div class="board">
        <GameTile  v-on:tile-captured="winChecker" class="tile" v-for="(tile, i) in tiles" :key="i" :tileData="tile"/> 
    </div>

    <button @click='goHome'>go home</button>
    </div>
</template>

<script>
import GameTile from './GameTile.vue';
import TileData from '../../TileData.js';

export default {
    created: function () {
        for(let i = 0; i < 9; i++) {
            this.tiles.push(new TileData("nic", i));
        }
    },
    components: {
      GameTile
    } ,
    data(){
        return{
            tiles: [],
            winConditions: [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]
            ]
        }
    },
    computed: {
        getActivePlayer() {
            return this.$store.getters.getActivePlayer;
        }
    },
    methods: {
        goHome() {
            this.$router.push('/');
        },
        test () {
            console.log('eh')
        },
        changeActivePlayer (payload) {
            this.$store.commit('changeActivePlayer', payload)
        },

        winChecker(payload) {

            for(let i = 0; i < this.winConditions.length; i++) {
                let win = 0;
                for(let z = 0; z < this.winConditions[i].length; z++) {
                    if(this.tiles[this.winConditions[i][z]].takenBy == this.getActivePlayer.name)
                        win++;
                        if(win == 3){
                            alert('wygrywa ' + this.getActivePlayer.name);
                            return true;
                    }
                }
            }
            this.changeActivePlayer(payload);
        },
    },
}

</script>

<style>

.wrapper {
    max-width: 700px;
    text-align: center;
}

.board {
  padding: 10px;
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-gap: 2px;
}

.board .tile {
  text-align: center;
  padding: 25%;
  border: 1px black solid;
}

.board .tile:hover{
  background: #ddd;
}

</style>