const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="completion-toggle"></span>
            ${taskText}
            <button class="delete-btn">Sil</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
});

taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('completion-toggle')) {
        e.target.classList.toggle('completed'); // Tamamlanan sınıfı değiştir
    } else if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove(); // Sil düğmesine tıklandığında görevi sil
    }
});
