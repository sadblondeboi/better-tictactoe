import Vuex from 'vuex';
import Vue from 'vue';

// Load Vuex
Vue.use(Vuex);

// Create store
export const store = new Vuex.Store({
     state: {
        players: [

        ],
    },
    getters: {
        getActivePlayer: state => {
            const activePlayer = state.players.find(element => element.active);
            return activePlayer;
        }
    },
    mutations: {
        addPlayer (state, name) {
            const id = state.players.length + 1;
            const player = {id: id, name: name, active: false}
            state.players.push(player)
        },
        setActivePlayer (state, playerId) {
            const player = state.players.find(element => element.id == playerId);
            player.active = true;
        },
        changeActivePlayer (state) {
            const activePlayer = state.players.find(element => element.active);
            const unactivePlayer = state.players.find(element => !element.active);

            activePlayer.active = false;
            unactivePlayer.active - true;
        }
    }   
})