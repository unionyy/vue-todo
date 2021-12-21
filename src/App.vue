<template>
  <div id="app" class="container">
    <h1>Todo App</h1>
    <CompletedTodo />
    <AddTodo />
    <hr>
    <TodoList />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import CompletedTodo from '@/components/CompletedTodo.vue';
export default {
  components: {
    TodoList,
    AddTodo,
    CompletedTodo
  },
  data() {
    return {
      // todos: [
      //   { id: 1, text: 'buy a car', checked: false},
      //   { id: 2, text: 'play game', checked: false}
      // ],
    }
  },
  methods: {
    // addTodo(value) {
    //   this.todos.push({
    //     id: Math.random(),
    //     text: value,
    //     checked: false
    //   });
    // },
    // toggleCheckbox({id, checked}) {
    //   console.log(id, checked);
    //   const index = this.todos.findIndex(todo => {
    //     return todo.id === id;
    //   });
    //   console.log(index, this.todos[index].checked);

    // },
    // deleteTodo(id) {
    // //   const index = this.todos.findIndex(todo => {
    // //     return todo.id ===id;
    // //   });
    // //   this.todos.splice(index, 1);
    // console.log(id, '!');

    //   this.todos = this.todos.filter(todo => todo.id !== id);

    // }
  },
  watch: {
    // todos: {
    //   handler: (oldValue, newValue, t) => {
    //     console.log(oldValue, newValue);
    //     console.log(t);
    //   },
    //   deep: true
    // }
  }
}
</script>
