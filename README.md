#Learn Lingo Web App

Welcome to Learn lingo web App. The project is deployed on GH-pages. Backend is based on [Firebase](https://firebase.google.com/docs/reference). Feel free to download the project for the reference, run `npm install` and `npm start` to have this project up and running on your machine.

## The technical task for the project is below:

Створити застосунок для компанії, що пропонує скористатися послугами викладачів з вивчення мов онлайн. Застосунок складається з 3х сторінок:
• сторінка “Home” з переліком переваг компанії та кнопкою, що закликає розпочати роботу з застосунком. Стилізацію реалізувати з використанням прикладів, наведених у макеті з різною варіацією палітри, або за допомогою прототипу (що зробить “проєкт” більш унікальним).
• сторінка “Teachers”, що містить перелік викладачів, які користувач може фільтрувати за мовою викладання, за рівнем знань учнів, з якими працює викладач та ціною за годину заняття.
• приватна сторінка “Favorites” з викладачами, які були додані користувачем в “обрані”

Технічне завдання 
1. За допомогою firebase_DB додати до застосунку можливість авторизації (реєстрація, логінізація, отримання даних про поточного користувача, логаут).
2. Форму для реєстрації/авторизації та мінімальну валідацію її полів потрібно реалізувати за допомогою formik & yup.  Всі поля є обовʼязковими до заповнення. Модальне вікно з формою повинно закриватись по кліку на кнопку у вигляді “хрестика”, по кліку на backdrop  або натисканню на клавішу Esc.
3. В Realtime Database (by firebase) створіть колекцію викладачів з наступними полями: name, surname, languages, levels, rating, reviews, price_per_hour, lessons_done, avatar_url, lesson_info, conditions, experience (див. скріншот нижче)


Для наповнення колекції можна використовувати teachers.json 

4. Відповідно до макету реалізувати картку з описом характеристик викладача. 
5. На сторінці “Teachers” має рендеритися 4 картки, а їх решту можна завантажити по кліку на кнопку Load more, після якого має виконатись запит до бази даних для відображення нової порції карток.
6. У разі кліку по кнопці у вигляді “серця”:
    НЕавторизованим користувачем - має зʼявлятись модальне вікно або пуш-повідомлення про те, що даний функціонал доступний лише для авторизованих користувачів
         Авторизованим користувачем - картка має додаватися до списку обраних (за допомогою localStorage або за допомогою роботи з колекцією users - by firebase),  а колір кнопки - “серця” змінюватися.
7. При оновленні сторінки авторизованим користувачем має фіксуватись кінцевий результат дій користувача. Тобто, якщо додати картку з інформацією про викладача в обрані та оновити сторінку - то кнопка все одно залишається в стані “обраної” із відповідним кольором.
8. У разі повторного кліку по кнопці у вигляді “серця” картка повинна бути видалена зі списку обраних,  а колір кнопки змінитись до початкового стану. 
9. У разі кліку по кнопці  Read more картка має розкриватись з більш детальною інформацією про викладача та відгуками від його учнів.
10. У разі кліку по кнопці Book trial lesson має відкриватись модальне вікно з формою для бронювання пробного заняття. Форму та мінімальну валідацію її полів потрібно реалізувати за допомогою formik & yup. Всі поля обовʼязкові до заповнення.
11. Модальне вікно повинно закриватись по кліку на кнопку у вигляді “хрестика”, по кліку на backdrop  або натисканню на клавішу Esc. 
12. Для авторизованого користувача доступна приватна сторінка “Favorites”, при переході на яку користувач має можливість переглянути усі картки викладачів, які були додані ним в “обрані”.  За стилізацією сторінка має бути аналогічною сторінці  “Teachers”.

Завдання із зірочкою* 
Створи маршрутизацію, використовуючи React Router. 
Додай фільтрацію: за мовою викладання; за рівнем знань учнів, з якими працює викладач; за ціною за годину заняття.


Критерії виконання 
● Верстка від 320рх до 1440рх гумова, семантична та валідна. 
● Немає помилок в консолі браузера. 
● Робота виконана на нативному JS з використанням бандлеру (Vite, Parcel або ін.) або на React. 
●  Авторизація користувача та робота з колекцією реалізовані за допомогою firebase 
● Інтерактивність працює відповідно до технічного завдання. 
● Код відформатований та без коментарів. 
● В репозиторії має бути README.md з описом проєкту: про що цей проєкт, основні технології, макет, ТЗ.
● Проєкт задеплоєний на github pages,  netlify.com або інший сторонній хостінг

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
