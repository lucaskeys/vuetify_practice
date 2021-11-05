<template>
  <div class="home pa-5">
    <!-- @click:append is a Vuetify event -->
    <!-- :append - binding events via vuetify -->
    <field-add-task></field-add-task>
    <!-- only display tasks if list is not 0 -->
    <task-list :getTasks="getTasks" v-if="getTasks"></task-list>

    <div class="no-tasks pa-3" v-else>
      <v-icon size="100" color="primary">mdi-check</v-icon>
      <div class="text-h6 primary--text">No Tasks</div>
    </div>
  </div>
</template>

<script>
import FieldAddTask from '@/components/Todo/FieldAddTask.vue';
import TaskList from '@/components/Todo/TaskList.vue';
import { mapGetters } from 'vuex';

export default {
  components: { FieldAddTask, TaskList },

  computed: {
    ...mapGetters(['getTasks']),
  },
};
</script>

<style lang="sass">
.no-tasks
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  opacity: .5
</style>
