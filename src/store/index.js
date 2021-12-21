import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: "buy a car", checked: false },
      { id: 2, text: "play game", checked: false },
    ],
  },
  mutations: {
    ADD_TODO(state, value) {
      state.todos.push({
        id: Math.random(),
        text: value,
        checked: false,
      }); 
    },
    TOGGLE_TODO(state, {id, checked}) {
      console.log(id, checked);
      const index = state.todos.findIndex((todo) => {
        return todo.id === id;
      });
      state.todos[index].checked = checked;
    },
    DELETE_TODO(state, todoId) {
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
  },
  actions: {
    addTodo({ commit }, value) {
          setTimeout(function() {
            commit('ADD_TODO', value);

          }, 2000)
    },
    toggleTodo({ commit }, {id, checked}) {
        setTimeout(function() {
          commit('TOGGLE_TODO', {id, checked});

        }, 2000)
    },
    deleteTodo({ commit }, todoID) {
        setTimeout(function() {
          commit('DELETE_TODO', todoID);

        }, 2000)
    },
  },
  getters: {
    numberOfCompletedTodo(state) {
        return state.todos.filter(todo => todo.checked).length;
    }
  },
});
