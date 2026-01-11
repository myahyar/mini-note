

const inputText = document.getElementById('inputText');
const idAddNote = document.getElementById('idAddNote');
const contUl = document.getElementById('contUl');

const store_note = JSON.parse(localStorage.getItem("DATA-NOTE")) || [];

displayList();

function saveToMemory() {
  localStorage.setItem("DATA-NOTE",JSON.stringify(store_note));
  
}


function addNote() {
  const textNote = inputText.value.trim();
  if (textNote != "") {
    store_note.push({
      text:textNote,
      status:false,
    });
  }
  saveToMemory();
  displayList();
  inputText.value = "";
  inputText.focus();
}

function displayList() {
  contUl.innerHTML= "";
  // UPDATE FOOTER: Menampilkan jumlah catatan terbaru
  const noteCount = document.getElementById('noteCount');
  if (noteCount) {
    noteCount.innerText = store_note.length;
  }
  store_note.forEach((obj,index)=>{
    const li = document.createElement("li");
    const status = obj.status ? "active" : "";
    li.innerHTML=
    `<span>
      <span class="status ${status}" data-index="${index}"></span>
      <span class="text-note ${status}">${obj.text}</span>
    </span>
    <span>
      <span class="button-edit" data-index="${index}">edit</span>
      <button class="button-delete" data-index="${index}">delete</button>
    </span>
    `;
    contUl.appendChild(li);
  });
}

contUl.addEventListener("click",function(e) {
  const index = +e.target.dataset.index;
  if (e.target.classList.contains("button-delete")) {
    btnDelete(index);
  }
  if (e.target.classList.contains("button-edit")) {
    btnEdit(index);
  }
  if (e.target.classList.contains("status")) {
    btnStatus(index);
  }
} );

function btnDelete(no) {
  const yakin = confirm("yakin mau dihapus");
  if (yakin) {
    store_note.splice(no,1);
    saveToMemory();
    displayList();
    
  }
}

function btnEdit(index) {
 const lastText = store_note[index].text;
 const newText = prompt("mau di ganti ?",lastText);
 if (newText != null && newText.trim() != "") {
  store_note[index].text = newText.trim();
  saveToMemory();
  displayList();
 }
}

function btnStatus(p) {
  store_note[p].status = !store_note[p].status;
  saveToMemory();
  displayList();
}