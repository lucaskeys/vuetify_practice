<template>
  <div class="home pa-5">
    <!-- @click:append is a Vuetify event -->
    <!-- :append - binding events via vuetify -->
    <v-text-field
      @click:append="addTask"
      @keyup.enter="addTask"
      v-model="newTaskTitle"
      clearable
      hide-details
      class="pa-3"
      outlined
      label="Add Task"
      append-icon="mdi-plus"
    ></v-text-field>
    <!-- only display tasks if list is not 0 -->
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

      <div v-for="task in getTasks" :key="task.id">
        <v-list-item @click="markComplete(task.id)" :class="{ 'blue lighten-5': task.complete }">
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.complete" color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title :class="{ 'text-decoration-line-through': task.complete }">{{ task.title }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                icon
                @click.stop="
                  {
                    deleteTask(task.id);
                  }
                "
              >
                <v-icon color="lighten-1 primary">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
    <div class="no-tasks pa-3" v-else>
      <v-icon size="100" color="primary">mdi-check</v-icon>
      <div class="text-h6 primary--text">No Tasks</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      newTaskTitle: '',
    };
  },
  computed: {
    ...mapGetters(['getTasks']),
  },
  methods: {
    markComplete(id) {
      let task = this.tasks.filter((task) => {
        return task.id === id;
      });
      task[0].complete = !task[0].complete;
    },

    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== id;
      });
    },
    addTask() {
      let newTask = {
        id: Date.now(),
        title: this.newTaskTitle,
        complete: false,
      };
      if (!this.newTaskTitle) {
        console.log('please enter a task name');
      } else {
        this.tasks.push(newTask);
        this.newTaskTitle = '';
      }
    },
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
