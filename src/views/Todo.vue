<template>
  <div>
    <div>Completed: ({{ completedTodo }})</div>
    <div>Incompleted: ({{ incompletedTodo }})</div>
    <ul>
      <li v-for="(todo, index) in todoList" :key="index">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.description }}</span> - {{ todo.createdAt | formatDate }}
        {{ todo.done }}
      </li>
    </ul>
    <div>
      <div>
        <p>
          <input ref="input-field" @keyup.enter="addTodo" type="text" v-model="todoItem" />
        </p>
        <button @click="addTodo">Add TODO</button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import todoMixin from "../mixins/TodoMixin";

export default {
  name: "TODO",
  mixins: [todoMixin],
  data() {
    return {
      todoItem: "",
      todoList: [
        {
          description: "Go to the GYM",
          done: false,
          createdAt: new Date("2019/04/11 12:23:11")
        },
        {
          description: "Go to work",
          done: true,
          createdAt: new Date("2015/04/14 01:40:09")
        },
        {
          description: "Eat some food",
          done: false,
          createdAt: new Date("2019/05/26 15:44:12")
        }
      ]
    };
  },
  watch: {
    todoItem() {
      this.hello();
    }
  },
  computed: {
    completedTodo() {
      return this.todoList.filter(todo => todo.done).length;
    },
    incompletedTodo() {
      return this.todoList.filter(todo => !todo.done).length;
    }
  },
  filters: {
    formatDate(date) {
      return moment(date).format("DD/MM/YYYY HH:mm:ss a");
    }
  },
  methods: {
    addTodo() {
      if (!this.todoItem.length) {
        return;
      }

      this.todoList.push({
        description: this.todoItem,
        done: false,
        createdAt: new Date()
      });

      this.todoItem = "";
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}

.done {
  text-decoration: line-through;
}
</style>
