/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;*/

const eleGrid = document.querySelector('.grid');
function storeForm(){

	let diff = document.querySelector('.difficolta').value;
	console.log(diff);

    if (diff == 'EASY' ){

        for (let i = 0; i < 100; i++) {

			const eleCell = document.createElement('div');
			eleCell.classList.add('cell', 'ten');
			eleGrid.append(eleCell);
			eleCell.innerHTML += `<div class="sq">${i}</div>`;
		
			eleCell.addEventListener('click', function () {
				this.classList.toggle('active')
				console.log(i);
			});
		}

		}else if (diff == 'NORMAL'){

			for (let i = 0; i < 81; i++) {

				const eleCell = document.createElement('div');
				eleCell.classList.add('cell', 'nine');
				eleGrid.append(eleCell);
				eleCell.innerHTML += `<div class="sq">${i}</div>`;

				eleCell.addEventListener('click', function () {
					this.classList.toggle('active')
					console.log(i);
				});
			}
			}else {
					
				for (let i = 0; i < 49; i++) {

					const eleCell = document.createElement('div');
					eleCell.classList.add('cell', 'seven');
					eleGrid.append(eleCell);
					eleCell.innerHTML += `<div class="sq">${i}</div>`;

					eleCell.addEventListener('click', function () {
						this.classList.toggle('active')
						console.log(i);
					});
				}
			}
     
}
