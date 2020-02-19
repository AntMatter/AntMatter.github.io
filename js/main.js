var slideIndex = 1;
	showDivs(slideIndex);

	function plusDivs(n) {
	  showDivs(slideIndex += n);
	}
	
	document.onkeydown = checkKey;
	function checkKey(e) {
		e = e || window.event;
		if(e.keyCode == '37'){
		//left
		plusDivs(-1);
		}
		else if(e.keyCode == '39')
		{
		//right
		plusDivs(1);
		}
	}

	function showDivs(n) {
	  var i;
	  var x = document.getElementsByClassName("slides");
	  if (n > x.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = x.length}
	  for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	  }
	  x[slideIndex-1].style.display = "grid";  
	  setTimeout(showDivs(n+1), 2000);
	}
	

