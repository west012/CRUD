console.log('Hello World');
const url = 'http://localhost:3000/library';

let container = document.querySelector('.container');
let create = document.querySelector('.create');
let update = document.querySelector('.update');
let del = document.querySelector('.delete');

let titleCreate = document.querySelector('.titleCreate');
let authorCreate = document.querySelector('.authorCreate');
let setPublish = document.querySelector('.setPublish');
let titleUpdate = document.querySelector('.titleUpdate');
let authorUpdate = document.querySelector('.authorUpdate');
let idUpdate = document.querySelector('.idUpdate');

const deleteId = document.querySelector('.deleteId');

function addBook(event){
    event.preventDefault();
    let title = {
        cover: titleCreate.value,
        published: setPublish.value
    }
    console.log(title.cover);
    fetch(`${url}`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(title)
    })
    .then(res => res.json())
    .then((res) => res.forEach(element =>{
        let row = document.createElement('h1');
        row.textContent = `${element.cover} ${element.published}`
        peopleContainer.prepend(row)
    }))
    .catch(e => console.log(e))
    updatePage();
}

function updateBook(){
    event.preventDefault();
    let title = {
        cover: titleCreate.value,
        published: setPublish.value
    }
    fetch(`${url}/${idUpdate.value}`, {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        }, body: JSON.stringify(title)
    })
    .catch(e => console.log(e))
    updatePage();
    location.reload();

    console.log(title,idUpdate.value);
}

function removeLast(event){
    event.preventDefault();
    fetch(`${url}/${deleteId.value}`, {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .catch(e => console.log(e));
    updatePage();
    location.reload();
}

function updatePage(){
    container.innerHTML = ' ';
    fetch(url)
    .then(res => res.json())
    .then(res =>{
        for(let i = 0; i <res.length; i++){
            const element = res[i];
            console.log(element);

            let book = document.createElement('h1');
            book.innerHTML = `${element.title} ${element.author}`

            container.prepend(book);
        }
    })
}
updatePage();

create.addEventListener('click', addBook);
update.addEventListener('click', updateBook);
del.addEventListener('click', removeLast);