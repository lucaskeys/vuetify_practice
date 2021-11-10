<template>
  <v-text-field
    @click:append="addNewTask"
    @keyup.enter="addNewTask"
    v-model="newTaskTitle"
    clearable
    hide-details
    class="pa-3"
    outlined
    label="Add Task"
    append-icon="mdi-plus"
  ></v-text-field>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      newTaskTitle: '',
    };
  },
  methods: {
    ...mapActions({
      newTask: 'addTask',
    }),
    // this.$store.commit('addtask', this.newtasktitlte)
    addNewTask() {
      this.newTask(this.newTaskTitle);
      this.newTaskTitle = '';
    },
  },
};
</script>

<style></style>
