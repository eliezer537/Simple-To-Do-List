const formElement = document.querySelector('.content form');
const inputContent = document.querySelector('.input-content');
const buttonAddElement = document.querySelector('.content form button');

const createElement = event => {
	event && event.preventDefault();
	const inputContentClone = inputContent.cloneNode(true);
	formElement.appendChild(inputContentClone);
	inputContentClone.querySelector('input[type="text"]').focus();
	inputContent.remove();
};

createElement();

const showToast = () => {
	
};

buttonAddElement.addEventListener('click', event => {
	const inputElementArray = [...document.querySelectorAll('.input-content input[type="text"]')];
	const hasValue = inputElementArray.reduce((acc, current) => current.value !== '', false);
	hasValue && createElement(event);
	//hasValue ? createElement() : chamar um toast dizendo que é necessário inserir alguma coisa.
});

const removeDivElementFromDOM = trashImage => trashImage.parentElement.remove();

const handleItemDeletion = event => {
	removeDivElementFromDOM(event);
	const imgElementNodeList = document.querySelectorAll('.input-content img');
	imgElementNodeList.length < 1 && createElement();
};
