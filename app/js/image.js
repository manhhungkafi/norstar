var wrapper = document.querySelector('.wrapper-image-box-style2');

var box = document.querySelectorAll('.image-box-style2');


box.forEach(function(button){
	console.log(button);
	button.addEventListener('mouseover', function() {
		console.log("123123");
        this.classList.add("mystyle");
        console.log(this.className);
    })
})