<template>
  <div>
    <v-list-item
      @click="markComplete(task.id)"
      :class="{ 'blue lighten-5': task.complete }"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox
            :input-value="task.complete"
            color="primary"
          ></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{
              'text-decoration-line-through': task.complete,
            }"
            >{{ task.title }}</v-list-item-title
          >
        </v-list-item-content>

        <v-list-item-action>
          <task-menu />
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import TaskMenu from '@/components/Todo/TaskMenu.vue';
export default {
  props: ['task'],
  components: {
    TaskMenu,
  },
  methods: {
    ...mapMutations(['addTask', 'markComplete']),
  },
};
</script>

<style></style>
