<template>
  <v-list v-if="getTasks.length" flat class="pt-0">
    <!-- <div v-for="task in tasks" :key="task.id">
        <v-list-item @click="task.complete = !task.complete">
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ task.title }}</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div> -->
    <div>
      <task v-for="task in getTasks" :key="task.id" :task="task" />

      <v-divider></v-divider>
    </div>
  </v-list>
</template>

<script>
import Task from './Task.vue';
export default {
  props: ['getTasks'],
  components: { Task },
};
</script>

<style></style>
