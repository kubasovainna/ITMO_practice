let result = '';
const values = [10, 20, 30]
const URLs = ['https://kodaktor.ru/api/m/',
 'https://kodaktor.ru/api/MS2/',
 'https://kodaktor.ru/api/MS3/'
]
document
    .querySelector('button')
    .addEventListener('click',
        async ({ target: t }) => {
         const headers = { "Content-Type": "application/json" };
         t.textContent = 'Ожидается...';
         let result=[];
         let path='';
         let resultFromServer;
         // здесь напишите код, последовательно отправляющий запросы
         // согласно спецификации kodaktor.ru/async_tasks
         for(i=0; i<URLs.length; i++){
          if (result.length > 0) {
           path = `/${result[result.length-1]}`;
          } else{
           path='';
          }
          resultFromServer =  await fetch(URLs[i]+values[i] + path, {headers}).then(x =>x.json());
          result.push(resultFromServer.result)
         }
         t.textContent = `Результат: ${result}`;
        }
    );
