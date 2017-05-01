import 'todomvc-app-css/index.css'

import Vue from  'vue'

new Vue({
  el: '.todoapp',
  data: {
    msg: 'hello world',
    title: 'todosmvc',
    newTodo: '',
    todos: [{
      content: 'vue',
      completed: false
      },
      {
        content: 'vues',
        completed: false
      }
    ]
  },
  methods:{
    addTodo(){
      this.todos.push({
        content:this.newTodo,
        completed: false
      })
      this.newTodo = ''
    },
    removeTodo(index){
      this.todos.splice(index,1)
    }
  }
})


