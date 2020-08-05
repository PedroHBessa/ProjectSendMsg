const sendBtn = document.querySelector('#sendBtn');
const deleteBtn = document.querySelector('#deleteBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');
const listOut = document.querySelector('#listOut');
let list = [];

sendBtn.addEventListener('click', sendMsg);
deleteBtn.addEventListener('click', deleteList);

function sendMsg(){
	
	let content = messageIn.value;

	list.push(content);
	
	messageOut.innerHTML = content;

	listOut.innerHTML = list;

	messageIn.value = "";
}

function deleteList(){
	list = [];
	messageIn.value = "";
	listOut.innerHTML = "";
}