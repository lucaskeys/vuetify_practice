import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, title: 'Wake up', complete: false },
      { id: 2, title: 'Work', complete: false },
      { id: 3, title: 'Golf', complete: false },
    ],
  },
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        complete: false,
      };
      if (!newTaskTitle) {
        return;
      } else {
        state.tasks.push(newTask);
      }
    },
  },
  actions: {},
  getters: {
    getTasks: (state) => {
      return state.tasks;
    },
  },
  // modules - break Vux store into seprate modules
  modules: {},
});
