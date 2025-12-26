// Task management module
class Task {
    constructor(title, description) {
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.status = 'todo';
        this.createdAt = new Date();
	this.labels = [];
	this.priority = 'medium';
    }

    setPriority(priority) {
    	const validPriorities = ['low', 'medium', 'high', 'urgent'];
        if (validPriorities.includes(priority)) {
       	    this.priority = priority;
            return true;
        }
        return false;
    }

    updateStatus(status) {
        const validStatuses = ['todo', 'in-progress', 'done'];
        if (validStatuses.includes(status)) {
            this.status = status;
        }
    }
    addLabel(label) {
        // Проверяем, что метка не пустая, её ещё нет в списке И количество меток меньше 5
        if (label && !this.labels.includes(label) && this.labels.length < 5) {
            this.labels.push(label);
            return true; // Успешное добавление
        }
        return false; // Добавление не удалось (либо метка пустая, либо уже есть, либо лимит достигнут)
    }
}

module.exports = Task;
