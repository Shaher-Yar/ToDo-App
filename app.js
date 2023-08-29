new Vue({
    el: '#app',
    data: {
      newTask: '',
      tasks: []
    },
    methods: {
      addTask() {
        if (this.newTask.trim() === '') return;
        this.tasks.push({ text: this.newTask, completed: false });
        this.newTask = '';
      },
      editTask(index) {
        const newText = prompt('Edit task:', this.tasks[index].text);
        if (newText !== null && newText.trim() !== '') {
          this.tasks[index].text = newText;
        }
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      }
    }
  });
  