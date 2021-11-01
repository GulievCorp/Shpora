const delay = (ms) => {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
};

const url = 'https://jsonplaceholder.typicode.com/users';

// function fetchUsers() {
//  return  delay(2000)
//     .then(() => {
//       return fetch(url);
//     })
//     .then((response) => response.json());
// }

// fetchUsers().then(data => {
//     console.log(data);
// }).catch(e => console.log(e));

// Все тоде самое но с async await

const fethcAsyncTodos = async () => {
  // Задержка

  // все это оборачивается в промисы благодаря Babel
  // все это возвращает нам промис
  try {
    await delay(2000); //await обрабатывает промис, значит дождись
    const responce = await fetch(url);
    const data = await responce.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('accses');
  }
};

fethcAsyncTodos();
