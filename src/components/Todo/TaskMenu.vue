<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleClick(index)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <!-- :task is the name of the prop being passed into dialog delete and its equal to the task that is being passed down via props from the task list -->
    <dialog-delete
      :task="task"
      v-if="dialogs.delete"
      @close="dialogs.delete = false"
    />
  </div>
</template>

<script>
import DialogDelete from '@/components/Todo/Dialog/DialogDelete';
export default {
  component: {
    DialogDelete,
  },
  data: () => ({
    dialogs: {
      delete: false,
    },
    items: [
      {
        title: 'Edit',
        icon: 'mdi-pencil',
        click() {
          console.log('click edit');
        },
      },
      {
        title: 'Due Date',
        icon: 'mdi-calendar',
        click() {
          console.log('click due date');
        },
      },
      {
        title: 'Delete',
        icon: 'mdi-delete',
        click() {
          console.log('click delete');
        },
      },
    ],
  }),

  methods: {
    handleClick(index) {
      this.items[index].click();
    },
  },
};
</script>

<style></style>
