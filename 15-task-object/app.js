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
    addTask: function (data) {
        countAdd++;
        let message = `${countAdd}. Ошибка входящих параметров`;
        if (!data) {
            return message;
        }
        const lastId = this.tasks.sort((a, b) => a.id - b.id).at(-1)?.id ?? 0;
        data.id = lastId + 1;
        this.tasks.push(data);
        message = `${countAdd}. Задача с id: ${data.id} успешно добавлена`;

        return message;
    },
    removeTaskById: function (id) {
        countRemove++;
        let message = 'Ошибка входящих параметров';
        if (!id) {
            return message;
        }
        const isExitsts = this.tasks.some((task) => task.id == id);
        if (!isExitsts) {
            message = `${countRemove}. Задача c ${id} не найдена`;
            return message;
        }
        this.tasks = this.tasks.filter((task) => task.id !== id);
        message = `${countRemove}. Задача с ${id} успешно удалена`;
        return message;
    },
    updateTaskById: function (id, data) {
        countUpdate++;
        let message = `${countUpdate}. Ошибка входящих параметров`;
        if (!id) {
            return message;
        }
        const index = this.tasks.findIndex((task) => task.id == id);
        message = `Задача c id: ${id}`;
        if (index === -1) {
            message = `${countUpdate}. ${message} не найдена`;
            return message;
        }

        const messageArray = [];
        for (const [key, value] of Object.entries(data)) {
            if (value) {
                messageArray.push(`${key} = ${value}`);
            }
        }

        this.tasks[index] = { ...this.tasks[index], ...data };
        message = `${countUpdate}. ${message} обновлена, ${messageArray.join(
            ', '
        )}`;
        return message;
    },
    sortTasksByPriority: function (descSort = false) {
        return this.tasks.sort((task1, task2) =>
            descSort
                ? task2.priority - task1.priority
                : task1.priority - task2.priority
        );
    },
    sortTasksById: function (descSort = false) {
        return [...this.tasks].sort((task1, task2) =>
            descSort ? task2.id - task1.id : task1.id - task2.id
        );
    },
};

function getRandom(start, end = 10) {
    return Math.round(Math.random() * (end - start) + start);
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
    const title = 'Пробный текст #' + getRandom(...rndTitle);
    const priority = getRandom(...rndPriority);
    const res = toDoList.addTask({ title, priority });
    console.log(res);
}

templateMessage('ОБНОВЛЕНИЕ', randomUpdateCount);

for (let i = 0; i < randomUpdateCount; i++) {
    const id = getRandom(...rndId);
    const title = getRandom(...rndTitle);
    const priority = getRandom(...rndPriority);
    const body = {
        title:
            title % getRandom(1, 5) === 0
                ? 'Обновлённый текст #' + title
                : null,
        priority: priority % getRandom(1, 5) === 1 ? priority : null,
    };
    switch (priority) {
        case 4:
        case 5:
        case 6:
            body.step = getRandom(1, 10);
            break;
        case 7:
        case 8:
            body.random = getRandom(1, 500);
            break;
        case 9:
            body.lowPriority = true;
            break;
        default:
            break;
    }
    const res = toDoList.updateTaskById(id, body);
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
let sortDirection = getRandom(0, 1);
console.log(...toDoList.sortTasksById(sortDirection));

console.log('-----------------SORTED BY PRIORITY-------------------');
sortDirection = getRandom(0, 1);
console.log(...toDoList.sortTasksByPriority(sortDirection));
