const eyes = document.querySelectorAll('.pupil');

document.onmousemove = function() {
	let x = event.clientX * 100 / window.innerWidth + '%';
	let y = event.clientY * 100 / window.innerHeight + '%';

	eyes.forEach((eye) => {
		eye.style.left = x;
		eye.style.top = y;
		eye.style.transform = "translate(-'+x+', -'+y+')";
	});
};
