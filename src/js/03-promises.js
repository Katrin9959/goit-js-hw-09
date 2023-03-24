

// Import library
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Get form element
const formRef = document.querySelector('.form');

// Set event listener submit on form
formRef.addEventListener('submit', onSubmitForm);

// Submit form
function onSubmitForm(e) {
  e.preventDefault();

  let delay = Number(formRef.delay.value);

  for (let i = 1; i <= formRef.amount.value; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += Number(formRef.step.value);
  }
}

// Create promise
function createPromise(position, delay) {
  const obj = { position, delay };
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(obj);
      } else {
        // Reject
        reject(obj);
      }
    }, delay);
  });
}









// const API_KEY = '7391ec9459644ca0a76cb25df2a23597'
// const BASE_URL = 'https://newsapi.org/v2'
// const main = document.querySelector('.main')
// const list = document.querySelector('ul')
// const btnGet = document.createElement('button')
// btnGet.textContent = 'Get news'
// main.prepend(btnGet)
//   btnGet.addEventListener('click',() => {
//   getNewsByCountry(select.value)
//   })
// const countries = ['us', 'us', 'pl']
// const select = document.createElement('select')
// const options = countries.reduce((acc,el)=> 
//   acc + '<option value=${el}> s{el}</option>',''
// )

// fetch('${BASE_URL}/top-headlines??country = us&apiKey=${API_KEY}').then((response) => response.json()).then((news) => createNewsList(news.articles)).catch((error) => console.log(error))


// const createElLi =({author, content, description, url,urlToImage,title}) => 
// <li>

//   <p>${author || 'Anonymous'}</p>
//   <img srs=${urlToImage}  width='300'>
// <a href=${url} > Go to current news
// </a>
// ${content ? '<p>${content}</p>' : ''}
// <p>${description}</p>
//   </li>

//   const createNewsList = (array)=>
//    list.innerHTML = ''
//     list.insertAdjacentHTML("afterbegin", array.reduce((acc,element) => acc + createElLi(element),'')
//     )



// const BASE_URL = ''
// const getUsers = () =>{
//   return fetch('${BASE_URL}/users').then((response) =>response.json())
// }
// const getUserBtn = document.createElement('button')
// getUsersBtn.textContent =  "Get all users"
// main.append(getUsersBtn)

// getUsersBtn.addEventListener('click', handleClick)
// function handleClick() {
//   getUsers().then((users) => console.log(users))

// }

// function createUserInfo({name, email, phone}){
//   return
//   <li>
// <h3>${name}</h3>
// <p>${email}</p>
// <p>${phone}</p>
//   </li>
// }
// function createUserToList(users){
// const template = users.map((user) => createUserInfo(user)).join('')
// addUserToList(template)
// }