import Vuex from 'vuex';
import Vue from 'vue';

// Load Vuex
Vue.use(Vuex);

// Create store
export const store = new Vuex.Store({
     state: {
        players: [
            {id: 1, name: "mklowicz", online: false},
            {id: 2, name: "morales", online: false},
            {id: 3, name: "essa", online: true},
            {id: 4, name: "mario", online: false}
        ],
        playerInput: [
            {id: 1, input: null},
            {id: 2, input: null}
        ]
    },
    getters: {
    
    },
    mutations: {
        addPlayer (state, name) {
            const id = state.players.length + 1;
            const player = {id: id, name: name, online: false}
            state.players.push(player)
        },
         updateInput (state, payload) {
             state.userInput = payload;
        }
    }   
})