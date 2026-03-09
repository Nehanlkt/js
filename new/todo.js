const todolist = [{
    name:'dinner',
    duedate:'2026-4-22'
 },{
 name: 'wash clothes',
duedate:'2026-4-24'}];
updatelist();
function updatelist() {
    let todohtml = '';
    for (let i = 0; i < todolist.length; i++) {
        const todoobj = todolist[i];
        const name=todoobj.name;
        const duedate=todoobj.duedate;
        const html = `
        <div>${name}</div>
        <div> ${duedate}</div>
        <button onclick="
        todolist.splice(${i},1);
        updatelist();
        " class="dltbtn">
        delete
        </button> 
        `;
        todohtml += html;

    }
    // console.log(todohtml);

    document.querySelector('.jslist').innerHTML = todohtml;
}

function addtodo() {
    const ipelem = document.querySelector('.jsip');
    const name = ipelem.value;
    const dateip=document.querySelector('.datejs');
    const duedate=dateip.value;
    todolist.push({
        name:name,
    duedate:duedate});
    // console.log(todolist);
    ipelem.value = " ";
    updatelist();



}
