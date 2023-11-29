'use strict';
/*
    Title: Модульность - домашнее задание
    Description: 
        Создайте 3 файла:
        -   user.js - содержит класс User, который в конструктор принимает
        Task и метод do(), который вызывает у Task метод run().
        -   task.js - содержит класс Task с методом run(), который выводит
        в консоль заданной в constructor сообщение.
        -   index.js - создаёт Task, а затем User с этим Task и вызывает у
        User метод do().
*/

import { Task } from './modules/task.js';
import { User } from './modules/user.js';

const task = new Task('Привет пользователь!');
const user = new User(task);
user.do();
