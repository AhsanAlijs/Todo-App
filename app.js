// const input = document.querySelector("input");
// const ol = document.querySelector("ol");
// let todoarry = [];
// function display() {
//     if (input.value == '') {
//         alert('Enter the Correct Task');
//     } else {
//         todoarry.push(input.value);
//         input.value = '';
//         ol.innerHTML = '';
//         for (let i = 0; i < todoarry.length; i++) {
//             const list = todoarry[i];
//             ol.innerHTML += `<li>${list} <button  onclick="deletetext(${i})" >Delete Text</button>
//             <button onclick="edittext(${i})">Edit Text</button>
//             </li> `;
        
//         }
//     }
// }

// function render() {
//     ol.innerHTML = ''
//     for (let i = 0; i < todoarry.length; i++) {
//         const list = todoarry[i];
//         ol.innerHTML += `<li>${list}
//         <button  onclick="deletetext(${i})" >Delete Text</button>
//         <button onclick="edittext(${i})">Edit Text</button> 
//         </li>`;
//     }
// }
// function edittext(index) {
//     const textChange = prompt('Text Chnage', todoarry[index]);
//     if (textChange !== null) {
//         todoarry[index] = textChange;
//         render();
//     }
// }
// function deletetext(index) {
//     todoarry.splice(index, 1);
//     render()
// }




const inputData = document.getElementById("todoInput");
const disadd = document.getElementById("todo");
const todoarry = [];
function add(e){
    e.preventDefault();
    // console.log(inputData.value);
    switch (inputData.value) {
        case '':
            alert('Enter todo')
            
            break;
    
        default:
            todoarry.push(inputData.value);

    disadd.innerHTML = ''

    inputData.value = ''
    for(let i = 0; i<todoarry.length;i++){
        const todilist = todoarry[i]
        // console.log(todilist)
        const laterFirst = todoarry[i].slice(0 , 1).toUpperCase();
        const laterSecond = todoarry[i].slice(1).toLowerCase();
        // console.log(laterFirst+laterSecond);
        disadd.innerHTML += `<li>${laterFirst+laterSecond}
        <button onclick="edittext(${i})" class="edit">Edit Text</button>
        <button onclick="deletetext(${i})" class="del">Delete Text</button>
        </li>`

    }
    }
    

}

function render(){
    disadd.innerHTML=''
    for(let i = 0; i<todoarry.length;i++){
        const todilist = todoarry[i]
        // console.log(todilist)
        const laterFirst = todoarry[i].slice(0 , 1).toUpperCase();
        const laterSecond = todoarry[i].slice(1).toLowerCase();
        // console.log(laterFirst+laterSecond);
        disadd.innerHTML += `<li>${laterFirst+laterSecond}
        <button onclick="edittext(${i})" class="edit">Edit Text</button>
        <button onclick="deletetext(${i})" class="del">Delete Text</button>
        </li>`

    }
}

function edittext(index){
    const textEdit=prompt('Edit Here',todoarry[index]);
    if(textEdit!== null){
        todoarry[index]=textEdit;
        render();
    }

}

function deletetext(index){
    todoarry.splice(index, 1);
    render()
}






