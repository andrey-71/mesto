# Место

Проектная работа 9 спринта 4 курса факультета ["Веб-разработчик"](https://practicum.yandex.ru/web/?utm_source=yandex&utm_medium=cpc&utm_campaign=Yan_Sch_RF_Webr_Razrab_Des_Intro_460&utm_content=sty_search:s_none:cid_56600998:gid_4359516496:pid_23387311960:aid_9838725511:crid_0:rid_:p_1:pty_premium:mty_syn:mkw_:dty_desktop:cgcid_0:rn_Москва:rid_213&utm_term=разработка%20web&yclid=4769457341696616776) образовательной платформы [Яндекс.Практикум](https://practicum.yandex.ru/).


## Описание проекта:
Одностраничный веб-сайт, позволяющий пользователям обмениваться фотографиями.

**[Проект на GitHub Pages](https://andrey-71.github.io/mesto/)**

## Функционал:
* Получение/отправка данных с сервера;
* Адаптивный дизайн на разрешениях ширины экрана от `320px`;
* Ссылки и интерактивные элементы имеют состояние наведения `:hover`;
* Редактирование информации пользователя;
* Добавление и удаление карточек;
* Просмотр фотографии карточек в отдельном окне;
* "Лайк" на карточках;
* Валидация вводимых пользователем данных с выводом ошибки под соответствующим полем ввода;
* Закрытие попапа при нажатие на Esc или клике вне попапа.



## Технологии:

### 1. HTML
* Верстка по макету Figma;
* Семантическая верстка;
* Добавление контента через HTML-шаблон `<template>`;
* Оптимизация изображений `.jpg`, `svg`-графики.

### 2. CSS
* БЭМ, Nested БЭМ;
* Flexbox;
* GridLayout;
* Media queries;
* Применяется normalize.css для обнуления стилей браузера;

### 3. Java Script
* Работа с DOM-элементами;
* Визуализация контента на странице путём клонирования шаблона `<template>` и загрузки данных из массива;
* Обработчики событий `click`, `submit`, `mousedown`, `keyup`;
* Валидация совместно со встроенной браузерной валидацией;
* Объектно-ориентированный код
* ES6-классы, наследование;
* JS-модули.

### 4. Webpack
* Сборка и минимизация файлов `.html`, `.css`, `.js`;
* Сборка шрифтов (`.woff`, `.woff2`, `.eot`, `.ttf`);
* Сборка картинок (`.png`, `.svg`, `.jpg`, `.gif`);
* Траспиляция синтаксиса ES6 в поддерживаемый браузерами формат с помощью Babel;
* Настройка окружения для разработки.


## Инструкция по локальной установке:
* Клонировать репозиторий:

    ```
    git clone https://github.com/andrey-71/mesto.git
    ```
* На компьютере должен быть установлен [Node.js](https://nodejs.org/en/download/):
* Для полноценной работы с проектом и корректной сборки необходимо установить следующие пакеты:
  ```
  npm i webpack --save-dev
  npm i webpack-cli --save-dev
  npm i webpack-dev-server --save-dev
  npm i @babel/core --save-dev
  npm i @babel/preset-env --save-dev
  npm i core-js --save
  npm i babel-loader --save-dev
  npm i html-webpack-plugin --save-dev
  npm i clean-webpack-plugin --save-dev
  npm i css-loader --save-dev
  npm i mini-css-extract-plugin --save-dev
  npm i postcss-loader --save-dev
  npm i autoprefixer --save-dev
  npm i cssnano --save-dev
  ```
* Запуск проекта на локальном сервере
  ```
  npm run dev
  ```
* Сборка проекта
  ```
  npm run build
  ```

## Планы по доработке проекта:
* Перенос проекта на React;


## Требования к проекту:
* [Чеклист](https://code.s3.yandex.net/web-developer/checklists/new-program/checklist-9/index.html)


