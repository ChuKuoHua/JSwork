// 指定 dom元素
const body = document.body;
const addBtn = document.getElementById('btn-add');
const listCount = document.getElementById("listCount");
const delAll = document.getElementById('delete-all');
const addList = document.getElementById('add-list');
const todoList = document.getElementById('todoList');
let data = JSON.parse(localStorage.getItem('mylist')) || [];

//初始化頁面
window.onload = updateData(data);

// 新增資料
function addData(e){
    let addValue = addList.value;
    //點擊 Enter 鍵或按鈕新增一筆資料
    if(e.keyCode === 13 || e.target.value === 'send'){
        
        if(addValue.trim() !== ''){
            let todoData = {
                id: Math.floor(Date.now()),
                content: addValue,
                completed:false,
            };
            data.push(todoData);
        }
        updateData(data);
        localStorage.setItem('mylist',JSON.stringify(data));

        //清空input資料
        addList.value ="";
    }
}

// 更新資料
function updateData(data){
    let str ='';
    data.forEach((item,key) => {
        str +=`
            <li class="list-item">
                <div class="inputBox">
                    <input class="check${key}" type="checkbox" ${item.completed ? "checked" : ""}
                    data-action="complete" data-id="${item.id}">
                    <label class="checklabel" for="check${key}" data-action="complete" data-id="${item.id}">
                    <span></span>
                    ${item.content}
                    </label>
                </div>
                <button class="btn-del fas fa-trash" data-index="${key}"></button>
            </li>`;
    })
    todoList.innerHTML = str;
    listCount.textContent = data.length;
    // DOM元素
    const delBtns = document.querySelectorAll('.btn-del');

    delBtns.forEach( btn =>{
        btn.addEventListener('click',delData);
    })
}

function checkData(e) {
    if (e.target.dataset.action === "complete") {
		data.forEach((item) => {
			if (e.target.dataset.id == item.id) {
                item.completed = item.completed ? false : true;
            // console.log(item);            
            }
        })
    }
    updateData(data);
}

//刪除資料
function delData(e){
    let indexStr = e.target.dataset.index;
    data.splice(indexStr,1);
    localStorage.setItem('mylist',JSON.stringify(data));
    updateData(data);
}

//刪除全部資料
function delAllData() {
    localStorage.removeItem('mylist');
    data = [];
    updateData(data);
}

// 監聽與更新 
body.addEventListener("keydown",addData);
addBtn.addEventListener('click',addData,true);
delAll.addEventListener('click',delAllData);
todoList.addEventListener('click',checkData)