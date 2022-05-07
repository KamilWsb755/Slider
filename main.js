const articles = [
    {
        title:'Pierwszy tekst',
        image: 'https://cdn.pixabay.com/photo/2020/02/25/09/57/road-4878453_960_720.jpg',
    },
    {
        title:'Drugi Tekst',
        image: 'https://cdn.pixabay.com/photo/2022/04/20/06/28/flowers-7144467_960_720.jpg',
    },
    {
        title:'Tytuł Trzeci',
        image: 'https://cdn.pixabay.com/photo/2021/05/12/10/09/common-blue-6247877_960_720.jpg',
    }
]

const img = document.querySelector('img');
const h1 = document.querySelector('h1');

let active = 0;

img.src = articles[active].image;
h1.textContent = articles[active].title;

const changeSlide = ()=>{
    active++;

    if(active === articles.length){
        active = 0;
    }

    img.src = articles[active].image;
    h1.textContent = articles[active].title;

}

setInterval(changeSlide,2000);



// const div = document.querySelector('div');
// const divTest = document.querySelector('.test');
// const spans = [...document.querySelectorAll('span')];



// articles.forEach(article=>{
//     const section = document.createElement('section'); // <section>

//     section.innerHTML = `
//     <h2>${article.title}</h2>
//     <p>${article.text}</p>
//     `

//     div.appendChild(section);
// })


// divTest.addEventListener('click',()=>{
//     divTest.classList.toggle('active') // add, remove, toggle
// })

// let index = 0;

// const intervalIndex = setInterval(()=>{
//     if(index >= articles.length){
//         index = 0;
//         return clearInterval(intervalIndex)
//     }
//     divTest.textContent = articles[index].title;
//     index++;
// },1000)

// const changeDot = ()=>{
//     const activeDot = spans.findIndex(span => span.classList.contains('active'));
// }

// changeDot();