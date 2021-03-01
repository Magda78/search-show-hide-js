const button = document.getElementById('button');
const input = document.getElementById('input');

const buttonHandler = (e) => {
	if ((input.style.display === 'none')) {
		input.style.display = 'flex';
	} else {
		input.style.display = 'none';
	}

	e.preventDefault();
};

button.addEventListener('click', buttonHandler);
