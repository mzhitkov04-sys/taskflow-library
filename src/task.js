// Task management module
class Task {
    constructor(title, description) {
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.status = 'todo';
        this.createdAt = new Date();
    }

    updateStatus(status) {
        const validStatuses = ['todo', 'in-progress', 'done'];
        if (validStatuses.includes(status)) {
            this.status = status;
        }
    }
}

module.exports = Task;
