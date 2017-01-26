window.addEventListener('keydown', function(e){
	playSound(e.keyCode);
});

function playSound(keyId){
	const audio = document.querySelector(`audio[data-key="${keyId}"]`);
	const key = document.querySelector(`.key[data-key="${keyId}"]`);
		if(!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');	
}

function removeTransition(e){
	if(e.propertyName !== 'background-color')
	return;
	this.classList.remove('playing');
}

	const piano = document.querySelectorAll('.key');
	piano.forEach(key => key.addEventListener('transitionend', removeTransition));

	const keyDivs = document.getElementsByClassName("key");

	const playSoundFromClick = function(e) { 
	const keyId = this.getAttribute("data-key");
	playSound(keyId);
};

	for (var i = 0; i < keyDivs.length; i++) {
	keyDivs[i].addEventListener('click', playSoundFromClick);
	}