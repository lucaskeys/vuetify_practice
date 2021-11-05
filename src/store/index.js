import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    snackbar: {
      show: false,
      text: '',
    },
    tasks: [
      { id: 1, title: 'Wake up', complete: false },
      { id: 2, title: 'Work', complete: false },
      { id: 3, title: 'Golf', complete: false },
    ],
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    markComplete(state, id) {
      let task = state.tasks.filter((task) => {
        return task.id === id;
      });
      task[0].complete = !task[0].complete;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => {
        return task.id !== id;
      });
    },
    showSnackbar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar = {
          show: true,
          text,
        };
      }, timeout);
    },
    hideSnackbar(state) {
      state.snackbar.show = false;
    },
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        complete: false,
      };
      if (!newTaskTitle) {
        console.log('must add a task title');
        return;
      } else {
        commit('addTask', newTask);
        commit('showSnackbar', 'Task Added');
      }
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id);
      commit('showSnackbar', 'Task Deleted');
    },
  },
  getters: {
    getTasks: (state) => {
      return state.tasks;
    },
  },
  // modules - break Vux store into seprate modules
  modules: {},
});
