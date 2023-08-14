//  Домашнее задание
/*
    Написать объект ToDoList, который хранит в себе задачи 
        {'name': 'Помыть посуду', id: 1, order: 1} и имеет методы:
        -   Добавить задачу
        -   Удалить задачу по id
        -   Обновить имя или приоритет по id
        -   Отсортировать задачи по приоритету
*/
let countAdd = 0; //  Количество пройденных итераций добавления
let countUpdate = 0; //  Количество пройденных итераций обновления
let countRemove = 0; //  Количество пройденных итераций удаления

//  Функция добавления методов в объект
function addActionToObject(obj, functions) {
    for (const key of Object.keys(functions)) {
        obj[key] = functions[key].bind(obj);
    }
}
//  Методы объекта
const objectFunctions = {
    //  Добавление задачи, где data = объект данных
    addTask(data) {
        countAdd++;
        let message = `${countAdd}. Ошибка входящих параметров`;
        if (!data) {
            return message;
        }
        const lastId = [...this.sortTasksById()].at(-1)?.id ?? 0;
        data.id = lastId + 1;
        this.tasks = [...this.tasks, { ...data }];
        message = `${countAdd}. Задача с id: ${data.id} успешно добавлена`;

        return message;
    },
    //  Удаление задачи по ID
    removeTaskById(id) {
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
        this.tasks = [...this.tasks.filter((task) => task.id !== id)];
        message = `${countRemove}. Задача с ${id} успешно удалена`;
        return message;
    },
    //  Обновление задачи по ID, где data = объект новых данных
    updateTaskById(id, data) {
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
    //  Сортировка задач по ID, descSort по умолчанию false (сортировка по возрастанию)
    sortTasksById(descSort = false) {
        return [...this.tasks].sort((task1, task2) =>
            descSort ? task2.id - task1.id : task1.id - task2.id
        );
    },
};

const toDoList = {
    tasks: [],
};
addActionToObject(toDoList, objectFunctions); //  Добавляем методы объекту toDoList

const newTask = {
    tasks: [],
};
addActionToObject(newTask, objectFunctions); //  Добавляем методы объекту newTask

//  Функция генерации случайных чисел
function getRandom(start, end = 10) {
    return Math.round(Math.random() * (end - start) + start);
}

//  Функция создания шаблона сообщения - разделителя
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

//  Генерация тестовых данных
const randomAddCount = getRandom(5, 10); //  Количество добавлений тасков
const randomUpdateCount = getRandom(2, 4); //  Количество обновлений тасков
const randomRemoveCount = getRandom(2, 4); //  Количество удалений тасков
//  Диапазон генерации числа из рандома, где rndId[0] - start, rndId[1] - end
const rndId = [1, 10];
//  Диапазон генерации числа из рандома, где rndname[0] - start, rndname[1] - end
const rndname = [1, 10];
//  Диапазон генерации числа из рандома, где rndorder[0] - start, rndorder[1] - end
const rndorder = [1, 10];

//  Вызов функции создания сообщения - разделителя
templateMessage('ДОБАВЛЕНИЕ', randomAddCount);

//  Цикл генерации данных для добавления тасков, где randomAddCount - количество итераций
for (let i = 0; i < randomAddCount; i++) {
    const name = 'Пробный текст #' + getRandom(...rndname);
    const description = 'Пробное описание #' + getRandom(...rndname);
    const order = getRandom(...rndorder);
    const body = {};
    if (i % 3 === 0) {
        body.title = name;
        body.priority = order;
    } else {
        body.name = name;
        body.description = description;
        body.order = order;
    }

    const res = i % 3 === 0 ? toDoList.addTask(body) : newTask.addTask(body);
    console.log(i % 3 === 0 ? 'newTask' : 'oldTask', res);
}

//  Вызов функции создания сообщения - разделителя
templateMessage('ОБНОВЛЕНИЕ', randomUpdateCount);

//  Цикл генерации данных для обновления тасков, где randomUpdateCount - количество итераций
for (let i = 0; i < randomUpdateCount; i++) {
    const id = getRandom(...rndId);
    const name = getRandom(...rndname);
    const order = getRandom(...rndorder);
    const description = getRandom(...[1, 25]);
    const bodyName =
        name % getRandom(1, 5) === 0 ? 'Обновлённый текст #' + name : null;
    const bodyDescription =
        description % getRandom(1, 5) === 0
            ? 'Обновлённое описание #' + description
            : null;
    const bodyOrder = order % getRandom(1, 5) === 1 ? order : null;
    const body = {};
    if (i % 3 === 0) {
        body.title = bodyName;
        body.priority = bodyOrder;
    } else {
        body.name = bodyName;
        body.description = bodyDescription;
        body.order = bodyOrder;
    }
    if (order >= 4 && order <= 6) {
        body.step = getRandom(1, 10);
    } else if (order >= 7 && order <= 8) {
        body.random = getRandom(1, 500);
    } else if (order === 9) {
        body.loworder = true;
    }
    const res =
        i % 3 === 0
            ? toDoList.updateTaskById(id, body)
            : newTask.updateTaskById(id, body);
    console.log(i % 3 === 0 ? 'newTask' : 'oldTask', res);
}

//  Вызов функции создания сообщения - разделителя
templateMessage('УДАЛЕНИЕ', randomRemoveCount);

//  Цикл генерации данных для удаления тасков, где randomRemoveCount - количество итераций
for (let i = 0; i < randomRemoveCount; i++) {
    const id = getRandom(...rndId);
    const res =
        i % 3 === 0 ? toDoList.removeTaskById(id) : newTask.removeTaskById(id);
    console.log(i % 3 === 0 ? 'newTask' : 'oldTask', res);
}
//  Вызов функции создания сообщения - разделителя
templateMessage('END');
console.log({ countAdd, countRemove, countUpdate });
console.log('-----------------ORIGINAL - TODO-------------------');
console.log([...toDoList.tasks]);
console.log('-----------------ORIGINAL - NEWTASK-------------------');
console.log([...newTask.tasks]);

const isDescending = getRandom(0, 1); //  Сортировать по возрастанию или убыванию
console.log(
    `-----------------SORTED BY ID - TODO ${
        isDescending ? '(DESC)' : ''
    }-------------------`
);
console.log([...toDoList.sortTasksById(isDescending)]);
console.log(
    `-----------------SORTED BY ID - NEWTASK ${
        isDescending ? '(DESC)' : ''
    }-------------------`
);
console.log([...newTask.sortTasksById(isDescending)]);
