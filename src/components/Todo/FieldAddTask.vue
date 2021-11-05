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
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      newTaskTitle: '',
    };
  },
  methods: {
    ...mapMutations(['addTask']),
    // this.$store.commit('addtask', this.newtasktitlte)
    addNewTask() {
      this.addTask(this.newTaskTitle);
      this.newTaskTitle = '';
    },
  },
};
</script>

<style></style>
