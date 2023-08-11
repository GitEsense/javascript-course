//  Домашнее задание
/*
    Написать объект ToDoList, который хранит в себе задачи 
        {'title': 'Помыть посуду', id: 1, priority: 1} и имеет методы:
        -   Добавить задачу
        -   Удалить задачу по id
        -   Обновить имя или приоритет по id
        -   Отсортировать задачи по приоритету
*/
let countAdd = 0;
let countUpdate = 0;
let countRemove = 0;

const toDoList = {
    tasks: [],
    addTask: function (id, title, priority) {
        countAdd++;
        let message = `${countAdd}. Ошибка входящих параметров`;
        const isValidBody = id || title || priority;
        if (!isValidBody) {
            return message;
        }
        const index = this.isExists({ id, title });

        if (index !== -1) {
            message = `${countAdd}. Такая задача уже существует с id: ${id}`;
            return message;
        }
        this.tasks = [...this.tasks, { id, title, priority }];
        message = `${countAdd}. Задача с id: ${id} успешно добавлена`;

        return message;
    },
    removeTaskById: function (id) {
        countRemove++;
        let message = 'Ошибка входящих параметров';
        if (!id) {
            return message;
        }
        const index = this.isExists({ id });
        if (index < 0) {
            message = `${countRemove}. Задача c ${id} не найдена`;
            return message;
        }
        this.tasks = [...this.tasks.filter((task) => task.id !== id)];
        message = `${countRemove}. Задача с ${id} успешно удалена`;
        return message;
    },
    updateTaskById: function (id, body) {
        countUpdate++;
        let message = `${countUpdate}. Ошибка входящих параметров`;

        const { title, priority } = body;
        if (!id || !(title || priority)) {
            return message;
        }

        const index = this.isExists({ id });

        message = `Задача c id: ${id}`;
        if (index === -1) {
            message = `${countUpdate}. ${message} не найдена`;
            return message;
        }
        if (title && priority) {
            message = `${message} обновлена, title = ${title}, priority = ${priority}`;
        } else if (title) {
            message = `${message} обновлена, title = ${title}`;
        } else {
            message = `${message} обновлена, priority = ${priority}`;
        }

        title ? (this.tasks[index].title = title) : '';
        priority ? (this.tasks[index].priority = priority) : '';

        message = `${countUpdate}. ${message}`;
        return message;
    },
    sortTasksByPriority: function () {
        return [...this.tasks].sort(
            (task1, task2) => task1.priority - task2.priority
        );
    },
    sortTasksById: function () {
        return [...this.tasks].sort((task1, task2) => task1.id - task2.id);
    },
    isExists: function (pattern) {
        let index;
        for (const [key, value] of Object.entries(pattern)) {
            index = this.tasks.findIndex((task) => task[key] == value);
            if (index !== -1) {
                break;
            }
        }
        return index;
    },
};

function getRandom(start, end = 10) {
    return Math.floor(Math.random() * (end - start) + start);
}
function templateMessage(text, count) {
    const countLine = 50;
    const leftRigthLine = (countLine - text.length) / 2;
    const minusLine = `${count ?? ''}-РАЗ(-А)`.length + 2;
    console.log('-'.repeat(countLine));
    console.log(
        `${'-'.repeat(leftRigthLine)}${text}--${
            count
                ? `${count}-РАЗ(-А)` + '-'.repeat(leftRigthLine - minusLine)
                : '-'.repeat(leftRigthLine)
        }`
    );
    console.log('-'.repeat(countLine));
}

const randomAddCount = getRandom(5, 25);
const randomUpdateCount = getRandom(5, 25);
const randomRemoveCount = getRandom(5, 25);
const rndId = [1, 50];
const rndTitle = [1, 25];
const rndPriority = [1, 10];
templateMessage('ДОБАВЛЕНИЕ', randomAddCount);
for (let i = 0; i < randomAddCount; i++) {
    const id = getRandom(...rndId);
    const title = 'Пробный текст #' + getRandom(...rndTitle);
    const priority = getRandom(...rndPriority);
    const res = toDoList.addTask(id, title, priority);
    console.log(res);
}

templateMessage('ОБНОВЛЕНИЕ', randomUpdateCount);

for (let i = 0; i < randomUpdateCount; i++) {
    const id = getRandom(...rndId);
    const title = getRandom(...rndTitle);
    const priority = getRandom(...rndPriority);
    const res = toDoList.updateTaskById(id, {
        title:
            title > title % getRandom(1, 5)
                ? 'Обновлённый текст #' + title
                : undefined,
        priority: priority > priority % getRandom(1, 5) ? priority : undefined,
    });
    console.log(res);
}

templateMessage('УДАЛЕНИЕ', randomRemoveCount);

for (let i = 0; i < randomRemoveCount; i++) {
    const id = getRandom(...rndId);
    const res = toDoList.removeTaskById(id);
    console.log(res);
}

templateMessage('END');
console.log({ countAdd, countRemove, countUpdate });
console.log('-----------------ORIGINAL-------------------');
console.log(...toDoList.tasks);

console.log('-----------------SORTED BY ID-------------------');
console.log(...toDoList.sortTasksById());

console.log('-----------------SORTED BY PRIORITY-------------------');
console.log(...toDoList.sortTasksByPriority());
