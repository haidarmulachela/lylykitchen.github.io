// Import fungsi yang akan diuji
const kurangToCart = require('../js/kurangToCart');

// Contoh pengujian
test('Mengurangkan jumlah dengan benar', () => {
    // Persiapkan kondisi awal jika diperlukan


    let jumlahh=2
    let item="kue"
    let harga= 2000

    kurangToCart(jumlahh,item,harga)
    expect(jumlahh).toBe(1)
});

// Tambahkan pengujian lain jika diperlukan
