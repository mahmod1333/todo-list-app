const form = document.querySelector('#form');
const input = document.querySelector('#input');
const list = document.querySelector('.list');
const data = JSON.parse(localStorage.getItem('Todo')) || []; 
function showtask(data) {
    data.forEach((item)=>{
        const li = document.createElement('li');
        li.innerHTML = item.text;
        if(item.done){
            li.classList.add('done');
        }
        list.appendChild(li);
        li.addEventListener('click', (e)=>{
            e.target.classList.toggle('done');
            updateSL();
        });
        li.addEventListener('contextmenu', (e)=>{
            e.target.remove();
            updateSL();
        });
    }
    );

}
showtask(data);
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(input.value === ''){
        alert('Please enter a task');
    }else{

        const li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        li.addEventListener('click', (e)=>{
            e.target.classList.toggle('done');
            updateSL();
        });
        li.addEventListener('contextmenu', (e)=>{
            e.target.remove();
            updateSL();
        });
    }

        updateSL();
     

       
        input.value = '';
    }
 

);

function updateSL() {
const items = list.querySelectorAll('li');
const Todo = [];
items.forEach((item)=>{
    Todo.push({
        text: item.innerHTML,
        done: item.classList.contains('done')

    });

    localStorage.setItem('Todo', JSON.stringify(Todo));
    
}
);}
