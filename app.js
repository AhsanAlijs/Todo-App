const input = document.querySelector("input");
const ol = document.querySelector("ol");
let todoarry = [];
function display() {
    if (input.value == '') {
        alert('Enter the Correct Task');
    } else {
        todoarry.push(input.value);
        input.value = '';
        ol.innerHTML = '';
        for (let i = 0; i < todoarry.length; i++) {
            const list = todoarry[i];
            ol.innerHTML += `<li>${list} <button  onclick="deletetext(${i})" >Delete Text</button>
            <button onclick="edittext(${i})">Edit Text</button>
            </li> `;
        
        }
    }
}

function render() {
    ol.innerHTML = ''
    for (let i = 0; i < todoarry.length; i++) {
        const list = todoarry[i];
        ol.innerHTML += `<li>${list}
        <button  onclick="deletetext(${i})" >Delete Text</button>
        <button onclick="edittext(${i})">Edit Text</button> 
        </li>`;
    }
}
function edittext(index) {
    const textChange = prompt('Text Chnage', todoarry[index]);
    if (textChange !== null) {
        todoarry[index] = textChange;
        render();
    }
}
function deletetext(index) {
    todoarry.splice(index, 1);
    render()
}






