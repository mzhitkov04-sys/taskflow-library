onst Task = require('./src/task.js');


function runTests() {
    console.log('🚀 Запуск тестов для класса Task...\n');

    let passed = 0;
    let total = 4;

    // Тест 1: Добавление первой метки
    console.log('1. Тест: добавление первой метки');
    const task1 = new Task('Задача 1', 'Описание');
    const result1 = task1.addLabel('bug');

    if (result1 === true && task1.labels.length === 1 && task1.labels[0] === 'bug') {
        console.log('✅ Прошёл');
        passed++;
    } else {
        console.log('❌ Не прошёл');
    }

    // Тест 2: Запрет на дублирование метки
    console.log('2. Тест: запрет на дублирование метки');
    const task2 = new Task('Задача 2', 'Описание');
    task2.addLabel('feature');
    const result2 = task2.addLabel('feature');

    if (result2 === false && task2.labels.length === 1) {
        console.log('✅ Прошёл');
        passed++;
    } else {
        console.log('❌ Не прошёл');
    }

    // Тест 3: Лимит в 5 меток
    console.log('3. Тест: лимит в 5 меток');
    const task3 = new Task('Задача 3', 'Описание');

    for (let i = 1; i <= 5; i++) {
        task3.addLabel(`label${i}`);
    }

    const result3 = task3.addLabel('sixth');
    if (result3 === false && task3.labels.length === 5) {
        console.log('✅ Прошёл');
        passed++;
    } else {
        console.log('❌ Не прошёл');
    }

    // Тест 4: Пустая метка
    console.log('4. Тест: пустая метка');

    const task4 = new Task('Задача 4', 'Описание');
    const result4 = task4.addLabel('');

    if (result4 === false && task4.labels.length === 0) {
        console.log('✅ Прошёл');
        passed++;
    } else {
        console.log('❌ Не прошёл');
    }

    // Итог
    console.log(`\n📊 Результаты: ${passed} из ${total} тестов пройдено`);
    if (passed === total) {
        console.log('🎉 Все тесты пройдены успешно!');
    } else {
        console.log('⚠️  Некоторые тесты не пройдены!');
    }
}

// Mock test for priority feature
describe('Task Priority', () => {
    test('should set valid priority', () => {
        const task = new Task('Test', 'Description');
        expect(task.setPriority('high')).toBe(true);
        expect(task.priority).toBe('high');
    });
});
