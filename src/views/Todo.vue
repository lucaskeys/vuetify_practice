<template>
  <div class="home pa-5">
    <!-- @click:append is a Vuetify event -->
    <!-- :append - binding events via vuetify -->
    <field-add-task></field-add-task>
    <!-- only display tasks if list is not 0 -->
    <task-list v-if="$store.state.tasks.length"></task-list>
    <no-tasks v-else></no-tasks>
  </div>
</template>

<script>
import FieldAddTask from '@/components/Todo/FieldAddTask.vue';
import TaskList from '@/components/Todo/TaskList.vue';
import NoTasks from '../components/Todo/NoTasks.vue';

export default {
  components: { FieldAddTask, TaskList, NoTasks },

  // computed: {
  //   ...mapGetters(['getTasks']),
  // },
};
</script>

<style lang="sass"></style>
