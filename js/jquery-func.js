

	
function _init_slider(carousel) {
	$('#slider-nav a').bind('click', function() {
		var index = $(this).parent().find('a').index(this);
		carousel.scroll( index + 1);
		return false;
	});
};

function _active_slide(carousel, item, idx, state) {
	var index = idx-1;
	$('#slider-nav a').removeClass('active');
	$('#slider-nav a').eq(index).addClass('active');
};

function _init_more_products(carousel) {
	$('.more-nav .next').bind('click', function() {
		carousel.next();
		return false;
	});
	
	$('.more-nav .prev').bind('click', function() {
		carousel.prev();
		return false;
	});
};

$(document).ready(function() {
	$("#slider-holder ul").jcarousel({
		scroll: 1,
		auto: 6,
		wrap: 'both',
		initCallback: _init_slider,
		itemFirstInCallback: _active_slide,
		buttonNextHTML: null,
		buttonPrevHTML: null
	});
	
	$(".more-products-holder ul").jcarousel({
		scroll: 2,
		auto: 5,
		wrap: 'both',
		initCallback: _init_more_products,
		buttonNextHTML: null,
		buttonPrevHTML: null
	});
});
// JavaScript
// Penanganan keranjang
let cartItems = [];
let cartTotal = 0.00;
let akun = [{user:'admin',pass:'123'}];

function addToCart(id, itemName, price) {
	const jumlahElement = document.getElementById(`jumlah${id}`);
            let jumlah = parseInt(jumlahElement.textContent);
            jumlah++;
            jumlahElement.textContent = jumlah
    cartItems.push({ name: itemName, price: price });
    cartTotal += price;
	updateCartView();
    // Update tampilan keranjang
}

function kurangToCart(id, itemName, price) {
	const jumlahElement = document.getElementById(`jumlah${id}`);
            let jumlah = parseInt(jumlahElement.textContent);
			if (jumlah!=0){
            jumlah--;
			jumlahElement.textContent = jumlah;
    const indexToRemove=cartItems.findIndex(item=> id === id);
	if(indexToRemove !== -1){
		cartItems.splice(indexToRemove,1);
	}
    cartTotal -= price;
		}
			else{
		}
		updateCartView();
            
}
module.exports = kurangToCart


function updateCartView() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    // Bersihkan tampilan keranjang
	cartItemsElement.innerHTML = '';

    // Tampilkan item keranjang yang baru
    for (const item of cartItems) {
        const itemElement = document.createElement('li');
        itemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(itemElement);
    }

    // Tampilkan total harga
    cartTotalElement.textContent = cartTotal.toFixed(2);
}
  
function register(){
		const registerForm = document.getElementById('registerForm');

		registerForm.addEventListener('submit', function (e) {
			e.preventDefault();

			let akun = [{user:'admin',pass:'123'}];
			const username = document.getElementById('username').value;
			const password = document.getElementById('password').value;
			const cek= akun.some(akun => akun.user === username);
        // Simpan data pendaftaran, biasanya dengan mengirimnya ke server.
		if(cek){
			alert("Username telah digunakan");
		}
		else{
			akun.push({user: username, pass: password});
			alert('Registrasi berhasil! Silakan login.');
			window.location.href = 'login.html'; // Redirect ke halaman login
		}
    ;
});
}

function login(username,password){
	
	  
		const loginForm = document.getElementById('loginForm');

		loginForm.addEventListener('submit', function (e) {
			e.preventDefault();
			
			let akun = [{username:'admin',password:'123'}];
			username = document.getElementById('username').value;
			password = document.getElementById('password').value;
			const loginSukses = akun.some(akun => akun.username === username && akun.password === password);

			// Verifikasi login, biasanya dengan mengirim permintaan ke server.
			
			if (loginSukses) {
				alert('Login berhasil!');
		 // Redirect ke halaman dashboard setelah login berhasil
			}
			else {
				alert('Login gagal! Periksa kembali username dan password Anda.');
			}
		;
	});
}

function searchFilter(){
const search = document.getElementById('search');
const listKue = document.getElementById('listKue');

search.addEventListener('input', function () {
    const searchText = search.value.toLowerCase(); // Ambil teks pencarian dan ubah menjadi huruf kecil

    // Lakukan pencarian dan tampilkan hasil
    searchItems(searchText);
});
}

function searchItems(searchText) {
    const items = document.querySelectorAll(".listKue li"); // Ambil semua elemen dengan kelas 'namakue'

    // Iterasi melalui semua item dalam daftar
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemName = item.querySelector(".namakue").textContent.toLowerCase(); // Ambil teks item dan ubah menjadi huruf kecil

        // Periksa apakah teks pencarian cocok dengan item
        if (itemName.indexOf(searchText)>-1) {
            item.style.display = ''; // Tampilkan item yang cocok (lihat elemen induknya)
        } else {
            item.style.display = 'none'; // Sembunyikan item yang tidak cocok (lihat elemen induknya)
        }
    }
}
