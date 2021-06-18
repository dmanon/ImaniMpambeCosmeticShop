let cart = document.querySelectorAll('.Clearcart');
for (let i = 0; i < cart.length; i++) {
	cart[i].addEventListener('click', ()=>{
		
		localStorage.clear();
		refresh();


	})
		
}
function refresh() {    
    setTimeout(function () {
        location.reload()
    }, 100);
}

