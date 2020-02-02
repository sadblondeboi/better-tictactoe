<template>
    
    <div @click="captureTile">
        <h3>{{this.tileData.takenBy}}</h3>
    </div>

</template>

<script>
import TileData from '../../TileData';

export default {
    name: "GameTile",
    props: {
        tileData: {
            type: TileData,
            required: true
        }
    },
    computed: {
        getActivePlayer() {
            return this.$store.getters.getActivePlayer;
        }
    },
    methods: {
        changeActivePlayer () {
            this.$store.commit('changeActivePlayer')
        },
        setActivePlayer (playerId) {
            this.$store.commit('setActivePlayer', playerId)
        },

        captureTile() {
            var turn = true;
            while(turn){
                if(this.tileData.takenBy == "nic"){
                    this.tileData.takenBy = this.getActivePlayer.name;
                    this.$emit('tile-captured')
                    turn = false;
                } else {
                    console.log('zajete przez ' + this.getActivePlayer.name);
                    break;
                }
            }
        }
    },
}
</script>