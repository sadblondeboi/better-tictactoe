<template>
    <div>
    <h1>tutaj bedzie sie klikac na pola i wygrywac lub przegrywac he </h1>

    <div class="board">
        <GameTile class="tile" v-for="(tile, i) in tiles" :key="i" :tileData="tile"/>
        
    </div>

    <button @click='goHome'>go home</button>
    </div>
</template>

<script>


import GameTile from './GameTile';
import TileData from '../../TileData.js';

export default {
    created: function () {
        for(let i = 0; i < 9; i++) {
            this.tiles.push(new TileData(false));
        }
    },

    data(){
        return{
            tiles: []
        }
    },
    methods: {
        goHome() {
            this.$router.push('/');
        }
    },
    components: {
        GameTile
    }
    
}
</script>

<style>

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