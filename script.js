
const inputLt = document.getElementById('inputLt');
const selectItem = document.getElementById('selectItem');
const contListLt = document.getElementById('contListLt');
const store_item = JSON.parse(localStorage.getItem("YOUR-DATA")) || [];
const store_op = JSON.parse(localStorage.getItem("DATA-0P")) || [];

displayList();
        displayOption();

function saveToMemory() {
  localStorage.setItem("YOUR-DATA",JSON.stringify(store_item));
  localStorage.setItem("DATA-0P",JSON.stringify(store_op));
}
//event on contListLantai
contListLt.addEventListener("click",function functionName(e) {
    const index = e.target.dataset.index;
  if (e.target.classList.contains("btnDelete")) {
    btnDeleteList(index);
    //console.log('delete');
  }
} );

selectItem.addEventListener("click",function functionName(u){
   const index = u.target.dataset.index;
  if (u.target.classList.contains("option1")) {
    displayListOp(index);
  }
  
});


//display on the web
function displayList() {
contListLt.innerHTML = "";
  store_item.forEach((obj,index)=>{
    const li = document.createElement("li");
    
    li.innerHTML =
    ` no ${index+1} = ${obj}
    <button class = "btnDelete" data-index = "${index}" >delete</button>
    `;
    
    contListLt.appendChild(li);
  });
  //console.log(selectItem);
}

function displayListOp(no) {
 alert(123);
}

function displayOption() {
  selectItem.innerHTML = "";
  store_item.forEach((obj,index)=>{
    const option = document.createElement("option");
    option.setAttribute("data-index",index);
    option.setAttribute("class","option1");
    
    option.value = `${obj}` ;
   option.innerHTML = 
   `${obj}`;
   selectItem.appendChild(option);
  });
  //console.log(selectItem);
}

function addOption() {
  const textLt = inputLt.value.trim();
  if (textLt != "" & selectItem.value != ""){
      store_item.push(textLt);
      store_op.push(textLt);
      saveToMemory(); //save
      displayOption();
      displayList();
      inputLt.value = "";
   //   console.log(store_op);
      //console.log(store_item);
    }
    if (textLt != "" & selectItem.value == "") {
      store_item.push(textLt);
            store_op.push(textLt);
            
      saveToMemory(); //save
      displayOption();
      displayList();
      inputLt.value = "";
    }
    if (textLt == "" & selectItem.value == "") {
      alert("enter your item");
    }
    if (textLt == "" & selectItem.value != "") {
      //store_op.push(textLt);
     console.log(option.innerHTML);
      //saveToMemory();
      //displayOption();
      
    }
}


function btnDeleteList(index) {
  store_item.splice(+index,1);
  store_op.splice(+index,1);
    saveToMemory(); // save
    displayList(); // tampilkan
    displayOption();
  //console.log(index);
}