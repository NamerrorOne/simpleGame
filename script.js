'use strict';
//Button 	Answer

let count = localStorage.getItem('Streak');
let number = Math.floor(Math.random()*20)
let tryingsLimit = 4
let tryings = 0


document.querySelector('.button').addEventListener('click', function() {
	if(tryings < tryingsLimit) { 
	let input = document.querySelector('.answer').value;
	document.querySelector('.interactive').innerText = input 
	document.querySelector('.answer').value =''	
		if(input == number) {
			count++;
			localStorage.setItem('Streak',count)
			document.querySelector('.interactive').innerText = `Поздравляю! Вы угадали число. Побед в приложении: ${localStorage.getItem('Streak')}. Перезагрузите браузер, чтобы начать новую игру.`;
			document.querySelector('.button').innerHTML = ''
			tryings = 100;
			document.querySelector('.button').classList.add('button__none')

		} else if(input != number) {
			document.querySelector('.interactive').innerText = `Не угадали. Попыток осталось: ${tryingsLimit - tryings}`
			document.querySelector('.answer').value =''
			tryings ++ ;
			console.log(tryings)
		}
	} else {
		document.querySelector('.interactive').innerText =`Вы потратили все попытки и не угадали число! Загаданное мною число было ${number}. Перезапустите браузер и попробуйте еще раз!`
	}
})
console.log(number)




// 	let number = Math.floor(Math.random()*50)
// 	for(let i=1; i<=6;i++) {
// 		let ans = prompt('Введите число')
// 		if(ans == number) {
// 			alert('Поздравляю! Это оно')
// 		}  else if(ans!= number) {
// 			alert(`Нет, не оно.Осталось попыток: ${6 - i}`)
// 		}
// 	}
// 	alert(`Вы потратили все попытки.Число было: ${number} Перезагрузите браузер,чтобы начать заново.`)
// }

// random()


