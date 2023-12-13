import { createStore } from "vuex";

const store = createStore({
    state: {
        user: {
            data: { name: "Daniel" },
            token: 13213,
        },
    },
    getters: {},
    actions: {},
    mutations: {},
    modules: {},
});

export default store;
