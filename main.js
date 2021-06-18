let carts = document.querySelectorAll('.add-cart');

// products array
let products = [
	{
		name:"Makeup Palette",
		tag:"Makeup Palette",
		price:1000,
		inCart:0
	},
	{
		name:"Pressed powder",
		tag:"Pressed powder",
		price:1500,
		inCart:0
	},
	{
		name:"Eye-shadow palettes",
		tag:"Eye-shadow palettes",
		price:1000,
		inCart:0
	},
	{
		name:"Ordinary beauty Products",
		tag:"Ordinary beauty Products",
		price:2500,
		inCart:0
	}
	,
	{
		name:"assorted-brand-makeup-products",
		tag:"assorted-brand-makeup-products",
		price:5000,
		inCart:0
	}
	,
	{
		name:"liquid-makeup-and-eye-shadow-palettes",
		tag:"liquid-makeup-and-eye-shadow-palettes",
		price:3000,
		inCart:0
	}
	,
	{
		name:"Venus Cleansing Foam",
		tag:"Venus Cleansing Foam",
		price:2500,
		inCart:0
	}
	,
	{
		name:"red-lipstick",
		tag:"red-lipstick",
		price:2500,
		inCart:0
	}
	,
	{
		name:"venus proffesional makeup",
		tag:"venus proffesional makeup",
		price:1000,
		inCart:0
	}
	,
	{
		name:"venus eye pencils",
		tag:"venus eye pencils",
		price:1500,
		inCart:0
	}
	,
	{
		name:"venus assorted lipsticks",
		tag:"venus assorted lipsticks",
		price:5000,
		inCart:0
	}
	,
	{
		name:"blue glitter nail polish",
		tag:"blue glitter nail polish",
		price:1500,
		inCart:0
	}
	,
	{
		name:"imani aromatic blur",
		tag:"imani aromatic blur",
		price:1500,
		inCart:0
	}
	,
	{
		name:"venus liquid lipstick",
		tag:"venus liquid lipstick",
		price:1000,
		inCart:0
	}
	,
	{
		name:"Airtificial nails",
		tag:"Airtificial nails",
		price:3000,
		inCart:0
	}
	
]

for (let i = 0; i < carts.length; i++) {
	carts[i].addEventListener('click', ()=>{
		
		cartNumbers(products[i]);
		totalcost(products[i]);  
	})
	
}

function onloadCartNumbers(){
	let productNumbers=localStorage.getItem('cartNumbers');
	if (productNumbers) {
		document.querySelector('.cart span').textContent=productNumbers;
	}
}

function cartNumbers(product){
	let productNumbers=localStorage.getItem('cartNumbers');
	
	productNumbers= parseInt(productNumbers);
	if (productNumbers) {
		localStorage.setItem('cartNumbers',productNumbers+1);
		document.querySelector('.cart span').textContent=productNumbers+1;
	}else{
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.cart span').textContent=1;
	}
	setItems(product);
}

function setItems(product){

	let cartItems=localStorage.getItem('prodctsInCart');
	cartItems = JSON.parse(cartItems);
	if(cartItems != null){
		if (cartItems[product.tag] == undefined) {
			cartItems = {
			...cartItems,
			[product.tag]:product
						}
		}
	cartItems[product.tag].inCart += 1;
	}	
	else{
		product.inCart = 1;
		cartItems = {
		[product.tag]:product
		}
	}
localStorage.setItem("prodctsInCart",JSON.stringify(cartItems));
}
function totalcost(product){
// console.log("the product price is", product.price);
let cartcost=localStorage.getItem('totalcost');
console.log(cartcost);

if (cartcost != null){
	cartcost=parseInt(cartcost);
	localStorage.setItem("totalcost",cartcost+product.price);
}
else{
localStorage.setItem("totalcost",product.price);

	}

}
function displayCart(){
	let cartcost=localStorage.getItem('totalcost');
	let cartItems = localStorage.getItem("prodctsInCart");
	cartItems = JSON.parse(cartItems);
	let productContainer= document.querySelector(".products");
	if(cartItems && productContainer){
		productContainer.innerHTML = '';
		Object.values(cartItems).map(item => {
			productContainer.innerHTML +=`

			

				<div class="col-sm-2 offset-1 ">
					<img class="productImg" src="./IMAGES/${item.tag}.jpg">
					<br><span>${item.name}</span>
				</div>
				<div class="col-sm-2 offset-1">Ksh${item.price}</div>
				<div class="col-sm-2 offset-1">${item.inCart}</div>
				<div class="col-sm-2 offset-1">${item.inCart*item.price}.00</div>
			
`
			;
		});
		productContainer.innerHTML +=`
			<div class="basketTotalContainer">
			<h4 class="basketTotalTitle">Basket Total </h4>
			<h4 class="basketTotal">Ksh ${cartcost}.00 </h4>
			</div>
		`





	}
}
displayCart();
onloadCartNumbers();









