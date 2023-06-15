var menuBtn = document.getElementById('menu-btn');
var sideBtn = document.getElementById('sidenav');

sideBtn.style.right = '-250px';
menuBtn.onclick = function(){
    if(sideBtn.style.right == '-250px'){
        
        sideBtn.style.right = '0px';
    }
    else{
        sideBtn.style.right = '-250px';}
}

	var scroll = new SmoothScroll('a[href*="#"]' ,{
        speed:1000,
        speedAsDuration:true
    });
