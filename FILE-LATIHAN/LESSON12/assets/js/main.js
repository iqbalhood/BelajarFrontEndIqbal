
var makanan = [
    {
        gambar: "assets/img/makanan/nasgor.png",
        nama_makanan: "Nasi Goreng",
        harga: "15000",
    },
    {
        gambar: "assets/img/makanan/ayam.png",
        nama_makanan: "Ayam Goreng",
        harga: "22000",
    }
];



var minuman = [
    {
        gambar: "assets/img/minuman/jus_wortel.png",
        nama_minuman: "Jus Wortel",
        harga: "8000",
    },
    {
        gambar: "assets/img/minuman/jus_apel.png",
        nama_minuman: "Jus Apel",
        harga: "5000",
    }
];

var daftar_pesanan = [];




function ubah_rupiah(nilai) {

    var format_rupiah = accounting.formatMoney(nilai, "Rp ", 2, ".", ",");

    return format_rupiah;

}
var item = "";
var quantity = 0;
var harga = 0;
var total = 0;
$("#add_to_cart").hide();

function pesanMakanan(z) {
    $("#add_to_cart").show();
    $("#nama").text(makanan[z].nama_makanan);
    $("#harga").text("@" + ubah_rupiah(makanan[z].harga));
    item = makanan[z].nama_makanan;
    harga = parseInt(makanan[z].harga);
    quantity = 1;
    var total_harga = quantity * harga;
    total = total_harga;
    $("#quantity").text(quantity);
    $("#total_harga").text(ubah_rupiah(total_harga));

}

function pesanMinuman(z) {
    $("#add_to_cart").show();
    $("#nama").text(minuman[z].nama_minuman);
    $("#harga").text("@" + ubah_rupiah(minuman[z].harga));
    item  = minuman[z].nama_minuman;
    harga = parseInt(minuman[z].harga);
    quantity = 1;
    var total_harga = quantity * harga;
    total = total_harga;
    $("#quantity").text(quantity);
    $("#total_harga").text(ubah_rupiah(total_harga));
}

function pesan() {
        var pesanan = {
            item : item, 
            quantity : quantity, 
            harga : harga, 
            total: total
        }

        daftar_pesanan.push(pesanan);
        //console.log(daftar_pesanan);

        for(var b = 0; b<daftar_pesanan.length; b++){

            $("#list-pesanan").append("ITEM = "+daftar_pesanan[b].item+" quantity = "+daftar_pesanan[b].quantity);


        }




}




function bertambah() {
    quantity++;
    var total_harga = quantity * harga;
    total = total_harga;
    $("#quantity").text(quantity);
    $("#total_harga").text(ubah_rupiah(total_harga));

}

function berkurang() {
    if (quantity > 1) {
        quantity--;
        var total_harga = quantity * harga;
        total = total_harga;
        $("#quantity").text(quantity);
        $("#total_harga").text(ubah_rupiah(total_harga));
    }
}

function tampilkan_makanan() {
    for (var i = 0; i < makanan.length; i++) {
        $("#daftar-makanan").append("<tr  ><td><img src='" + makanan[i].gambar + "' style='margin:3px;' height='30' width='30'/></td><td>" + makanan[i].nama_makanan + "</td> <td> " +
            ubah_rupiah(makanan[i].harga) + "</td> <td><i class='fas fa-cart-plus' onclick='pesanMakanan(" + i + ")'></i></td> </tr>");
    }
}

function tampilkan_minuman() {
    for (var i = 0; i < minuman.length; i++) {
        $("#daftar-minuman").append("<tr  ><td><img src='" + minuman[i].gambar + "' style='margin:3px;' height='30' width='30'/></td><td>" + minuman[i].nama_minuman + "</td> <td> " +
            ubah_rupiah(minuman[i].harga) + "</td> <td><i class='fas fa-cart-plus' onclick='pesanMinuman(" + i + ")'></i></td> </tr>");
    }
}

tampilkan_makanan();
tampilkan_minuman();


