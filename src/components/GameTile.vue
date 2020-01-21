<template>
    <div @click="CaptureTile()">
        <h3>{{this.tileData.isOccupied}}</h3>
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
            console.log(this.tileData.isOccupied);
        },
        CaptureTile () {
            if(!this.tileData.isOccupied) {
                this.tileData.isOccupied = true;
            }
        }
    }
}
</script>