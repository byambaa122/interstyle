const state = () => ({
    sidebar: false,
    loading: false
})

const getters = {
    sidebar: state => state.sidebar,
    loading: state => state.loading
}

const actions = {
    //
}

const mutations = {
    toggleSidebar(state) {
        state.sidebar = !state.sidebar
    },
    loading(state) {
        state.loading = true
    },
    done(state) {
        state.loading = false
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
