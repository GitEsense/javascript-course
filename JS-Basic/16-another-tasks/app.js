//  Домашнее задание
/*
    Возьмите объект из предыдущего домашнего задания и последовательно
    примените все методы его на новый объект:
    
    const newTask {
        tasks:[{
            id: 1,
            name: 'тест',
            description: 'описание',
            order: 0
        }]
    }
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

const toDoList = {
    tasks: [],
    //  Методы объекта
    //  Добавление задачи, где data = объект данных
    addTask(data) {
        countAdd++;
        let message = `${countAdd}. Ошибка входящих параметров`;
        if (!data) {
            return message;
        }
        const lastId = this.tasks.sort((a, b) => a.id - b.id).at(-1)?.id ?? 0;
        data.id = lastId + 1;
        this.tasks.push({ ...data });
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
            message = `${countRemove}. Задача с id: ${id} - не найдена`;
            return message;
        }
        this.tasks = this.tasks.filter((task) => task.id !== id);
        message = `${countRemove}. Задача с id: ${id} - успешно удалена`;
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
        message = `Задача с id: ${id} -`;
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

const newTask = {
    tasks: [],
};

newTask.addTask = toDoList.addTask;
newTask.removeTaskById = toDoList.removeTaskById;
newTask.updateTaskById = toDoList.updateTaskById;
newTask.sortTasksById = toDoList.sortTasksById;

const newTaskAddTask = toDoList.addTask.bind(newTask);
const newTaskRemoveTaskById = toDoList.removeTaskById.bind(newTask);
const newTaskUpdateTaskById = toDoList.updateTaskById.bind(newTask);
const newTaskSortTasksById = toDoList.sortTasksById.bind(newTask);

let data = {
    name: 'Новая для теста',
    description: 'Тестовое описание',
    order: 10,
};

console.log(newTask.addTask(data));
console.log(newTaskAddTask(data));
console.log(toDoList.addTask.apply(newTask, [data]));
console.log(toDoList.addTask.call(newTask, data));

console.log(newTask.removeTaskById(getRandom(1, 10)));
console.log(newTaskRemoveTaskById(getRandom(1, 10)));
console.log(toDoList.removeTaskById.apply(newTask, [getRandom(1, 10)]));
console.log(toDoList.removeTaskById.call(newTask, getRandom(1, 10)));

data = {
    name: 'Обновление для теста',
    description: 'Тестовое описание обновленное',
    order: 10,
};

console.log(newTask.updateTaskById(getRandom(1, 10), data));
console.log(newTaskUpdateTaskById(getRandom(1, 10), data));
console.log(toDoList.updateTaskById.apply(newTask, [getRandom(1, 10), data]));
console.log(toDoList.updateTaskById.call(newTask, getRandom(1, 10), data));

console.log(newTask);
//  Функция генерации случайных чисел
function getRandom(start, end = 10) {
    return Math.round(Math.random() * (end - start) + start);
}
