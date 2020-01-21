<template>
    <div class="wrapper">
        <h1>grid ty kurwo jebana</h1>
        <form action="submit">
            <div class="insideform">
                player1: 
                <input type="text"><br><br>
                player2:
                <input type="text"><br><br>
            </div>
            to na razie jedynie przerzuca na nastepna strone, poza tym niczego nie robi bo ni mo backendu <br><br>
            <input @click='goPlay' type="submit" value="aaaaaaaa">
            
        </form>
    </div>
</template>

<script>
export default {
    name: "Home",
    methods: {
        goPlay() {
            this.$router.push('/Game');
        }
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