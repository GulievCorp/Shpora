console.log('Request data...'); // как будто делаем запрос на сервер

setTimeout(() => {
  console.log('Preparing data...');
  const backendData = {
    server: 'aws',
    port: '2000',
    status: 'working',
  };
  setTimeout(() => {
    backendData.modified = true;
    console.log('Data Recived', backendData);
  }, 2000); //  Такой подход плох вложенностью, потому что будет много коллбэков внутри
}, 2000);

// Делаем тоже самое с помощью промисов
// Промис это класс, который принимает коллбэк функцию, а функция
// принимает два параметра resolve  и reject, которые тоже являются
// функциями
const p = new Promise((resolve, reject) => {
  // Тут мы напишем асинхронный код
  setTimeout(() => {
    console.log('Сервер готовит данные');
    const backendData = {
      server: 'aws',
      port: 2000,
      status: 'working',
    };
    resolve(backendData); // Говорим промису что он заверщил своё выполнение успешно.
    // Для того что бы у нас был доступ к backenddata в методе then ниже мы передаем её
    // в resolve
  }, 2000);
  //   Нужно сделать еще одну операцию как будто бы отправить на клиент
  // обратно эти данные.
  // Для этого и используются функции resolve, reject
  // Resolve - вызывается тогда когда асинхронная операция законченна
  // и выполненна успешно
});
// Then значит когда выполниться
p.then((data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true;
      resolve(data);
    }, 2000);
  });
})
  .catch((err) => console.log('errr', err)) // выводит ошибку
  .then((clientData) => {
    console.log('data received', clientData);
    clientData.fromPromise = true;
    return clientData;
  })
  .then((data) => {
    console.log('modified', data);
  })
  .finally(() => console.log('finallut')); // будет вызван в любом случае

//   №№№№№ пример

const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));

sleep(10000).then(() => console.log('10 sec'));

Promise.all([sleep(2000), sleep(3000)]).then(() => {
  // ждет когда все промисы выполняться
  console.log('все промисы выполнились ');
});

Promise.race([sleep(2000), slepp(1000)]).then(() => {
  console.log('Race Promisses'); // возвращает самый первый промис
});
