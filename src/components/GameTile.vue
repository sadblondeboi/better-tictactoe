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
            if(this.tileData.takenBy == null){
                this.tileData.takenBy = this.getActivePlayer.name;
                this.changeActivePlayer();
            } else {
                console.log('zajete przez ' + this.getActivePlayer.name)
                this.changeActivePlayer();
            }
            
        }
    },
}
</script>