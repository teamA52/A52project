const txtElement = ['telah mengunjungi','di Website Roti Om Jono'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function berjalan(){

	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.kata-berjalan').textContent = words;

	if(words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}

	setTimeout(berjalan, 500);

})();
