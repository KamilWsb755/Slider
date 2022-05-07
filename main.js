// const articles = [
//     {
//         title:'Tytuł pierwszy',
//         text: 'Treść artykułu sialalalala',
//     },
//     {
//         title:'Tytuł Drugi',
//         text: 'Treść artykułu sialalalala',
//     },
//     {
//         title:'Tytuł Trzeci',
//         text: 'Treść artykułu sialalalala',
//     }
// ]


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