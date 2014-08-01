// 31 - Programming the Video Player
function doFirst(){
	barSize=600;
	myMovie=document.getElementById('myMovie');
	playButton=document.getElementById('playButton');
	bar=document.getElementById('defaultBar');
	progressBar=document.getElementById('progressBar');

	playButton.addEventListener('click',playOrPause,false);
	bar.addEventListener('click',clickedBar,false);
}

// 32 - Playing and Pausing the Movie

function playOrPause(){
	if(!myMovie.paused && !myMovie.ended){
		myMovie.pause();
		playButton.innerHTML='Play';
		window.clearInterval(updateBar);
	}
	else{
		myMovie.play();
		playButton.innerHTML='Pause';
		updateBar=setInterval(update, 500);
	}
}