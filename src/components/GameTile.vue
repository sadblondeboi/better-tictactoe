<template>
    <div @click="CaptureTile()">
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
            if(this.TileData.takenBy){
                this.TileData.takenBy = true;
            }
        }
    }
}
</script>