const todolist = ['dinner', 'wash clothes'];
updatelist();
function updatelist() {
    let todohtml = '';
    for (let i = 0; i < todolist.length; i++) {
        const todo = todolist[i];
        const html = `<p>${todo}</p>`
        todohtml += html;

    }
    console.log(todohtml);

    document.querySelector('.jslist').innerHTML = todohtml;
}

function addtodo() {
    const ipelem = document.querySelector('.jsip');
    const name = ipelem.value;
    todolist.push(name);
    console.log(todolist);
    ipelem.value = " ";
    updatelist();



}
