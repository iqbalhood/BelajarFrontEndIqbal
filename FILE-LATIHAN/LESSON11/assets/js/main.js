
var makanan = [
    {
        nama_makanan: "nasi goreng telur",
        harga: "15000",
    },
    {
        nama_makanan: "nasi goreng kampung",
        harga: "22000",
    }
];



var minuman = [
    {
        nama_minuman: "Jus Wortel",
        harga: "8000",
    },
    {
        nama_minuman: "Teh Manis Dingin",
        harga: "5000",
    }
];




function ubah_rupiah(nilai) {

    var format_rupiah = accounting.formatMoney(nilai, "Rp ", 2, ".", ",");

    return format_rupiah;

}

var quantity = 0;
var harga = 0;
$("#add_to_cart").hide();

function pesanMakanan(z) {
    $("#add_to_cart").show();
    $("#nama").text(makanan[z].nama_makanan);
    $("#harga").text(ubah_rupiah(makanan[z].harga));
    harga = parseInt(makanan[z].harga);
    quantity = 1;
    var total_harga = quantity * harga;
    $("#quantity").text(quantity);
    $("#total_harga").text(ubah_rupiah(total_harga));
}

function bertambah() {
    quantity++;
    var total_harga = quantity * harga;
    $("#quantity").text(quantity);
    $("#total_harga").text(total_harga);

}

function berkurang() {
    if (quantity > 1) {
        quantity--;
        var total_harga = quantity * harga;
        $("#quantity").text(quantity);
        $("#total_harga").text(total_harga);
    }
}

function tampilkan_makanan() {
    for (var i = 0; i < makanan.length; i++) {
        $("#daftar-makanan").append("<div>" + makanan[i].nama_makanan + " " +
            ubah_rupiah(makanan[i].harga) + " <i class='fas fa-cart-plus' onclick='pesanMakanan(" + i + ")'></i> </div>");
    }
}

function tampilkan_minuman() {
    for (var i = 0; i < minuman.length; i++) {
        $("#daftar-minuman").append("<div>" + minuman[i].nama_minuman + " " +
            ubah_rupiah(minuman[i].harga) + " <i class='fas fa-cart-plus'></i> </div>");
    }
}

tampilkan_makanan();
tampilkan_minuman();


