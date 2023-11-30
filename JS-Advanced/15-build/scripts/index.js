'use strict';
/*
    Title: Работа с NPM - домашнее задание
    Description: 
        Сделайте сборку для упражнения из предыдущего ДЗ (User и Task)
        через rollup, при этом оформив команду в package.json - npm run build
        для запуска rollup и npm start для запуска live-server.

        Все необходмые dev зависимости для работы должны быть установлены.
*/

import { Task } from './modules/task.js';
import { User } from './modules/user.js';

const task = new Task('Привет пользователь!');
const user = new User(task);
user.do();
