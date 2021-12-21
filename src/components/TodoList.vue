<template>
    <div>
        <Todo
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            @toggle-checkbox="toggleCheckbox"
            @click-delete="deleteTodo"
        />
    </div>
</template>

<script>
import Todo from '@/components/Todo.vue';
export default {
    components: {
        Todo
    },
    computed: {
        todos() {
            return this.$store.state.todos;
        }
    },
    methods: {
        toggleCheckbox({id, checked}) {
            this.$emit('toggle-checkbox', {id, checked});
        },
        deleteTodo(id) {
            this.$emit('click-delete', id);
        }
    }
}
</script>

<style>

</style>