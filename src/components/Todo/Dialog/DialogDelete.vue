<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="headline">Delete Task</v-card-title>
      <v-card-text>Are you sure?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')">No</v-btn>
        <v-btn @click="deleteTask(task.id)" color="red darken-1" text>Yes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ['task'],

  methods: {
    ...mapActions(['deleteTask']),
  },
};
</script>

<style></style>
