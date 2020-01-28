<template>
    <div @click="onClicked">
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
    methods: {
        Test () {
            console.log(this.tileData.takenBy);
        },
        // jak bedzie vuex to sie naprawi bo duzo jebania
        captureTile() {
            if(this.TileData.takenBy == null){
                this.TileData.takenBy = this.getActivePlayer;
            } else {
                console.log('zajete przez ' + this.getActivePlayer)
            }
        },
        onClicked () {
             this.$emit('tile-clicked', this.tileData.tileNumber)
        }
    },
    computed: {
        getActivePlayer() {
            return this.$store.getters.getActivePlayer;
        }
    }
}
</script>