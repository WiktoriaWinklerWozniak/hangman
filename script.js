document.addEventListener("DOMContentLoaded", function() {

	const lettersBox = document.querySelector('.letters-box');
	const categoryName = document.querySelector('.category-name');
	const keyboardBox = document.querySelector('.keyboard-box');
	const usedLetters = document.querySelector('.used-letters span');
	const chancesLeft = document.querySelector('.chances-left');
	const btnGet = document.querySelector('.get-word');
	const btnAgain = document.querySelector('.try-again');

	const alpha = 'abcdefghijklmnopqrstuvwxyz';
	const al = alpha.split('');
	const data = [['Forrest Gump', 'Comedy'], []]
	const text = "Forrest Gump";
	const textLetters = text.toLowerCase().split('');
	const category = "Comedy";
	const userDone = [' '];
	let chances = 5;

	btnGet.addEventListener('click', startGame);


	function startGame() {

		btnGet.classList.add('hide');

		for(let i=0; i<textLetters.length; i++) {
			const letter = document.createElement('div');
			letter.classList.add('letter');
			const lett = document.createElement('div');
			lett.innerHTML = textLetters[i];
			lett.classList.add('hidden');

			if(lett.innerHTML ==' '){
				letter.classList.add('empty');
			}

			letter.appendChild(lett);
			lettersBox.appendChild(letter);
		}

		categoryName.innerHTML = category;
		chancesLeft.innerHTML = chances;
		showLetters();
	}

	function showLetters() {

		for(let i=0;i<al.length;i++) {
			const letter = document.createElement('button');
			letter.classList.add('letter');
			letter.innerHTML = al[i];
			keyboardBox.appendChild(letter);
			letter.addEventListener('click', chooseLetter);
		}
	}

	function chooseLetter() {

		this.classList.add('hidden');
		const choosen = this.innerHTML;

		if (usedLetters.innerHTML === '') {
			usedLetters.innerHTML+=choosen;
		}
		else {
			usedLetters.innerHTML+=', '+choosen;
		}

		if(textLetters.includes(choosen)){
			for(let i =0; i<textLetters.length; i++) {
				if(textLetters[i] === choosen) {
					lettersBox.children[i].querySelector('div').classList.remove('hidden');
					userDone.push(choosen);
				}
			}

			if(userDone.length === textLetters.length) {
				keyboardBox.innerHTML = '<div><h1>WINNER!</h1></div>';
			}

		}
		else {
			chances-=1;
			chancesLeft.innerHTML = chances;
			if(chances === 0){
				keyboardBox.innerHTML = '<div><h1>Looser!</h1></div>';
			}
		}
	}
});


