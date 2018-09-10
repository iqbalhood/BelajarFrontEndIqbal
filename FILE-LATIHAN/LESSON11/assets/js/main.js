
var makanan = [
    {
        nama_makanan: "nasi goreng telur", 
        harga : "15000",
    },
    {
        nama_makanan: "nasi goreng kampung", 
        harga : "22000",
    }
];



var minuman = [
    {
        nama_minuman: "Jus Wortel", 
        harga : "8000",
    },
    {
        nama_minuman: "Teh Manis Dingin", 
        harga : "5000",
    }
];

function ubah_rupiah(nilai){

  var format_rupiah =   accounting.formatMoney(nilai,"Rp ", 2, ".", ",");

  return format_rupiah;

}

function tampilkan_makanan(){
    for(var i= 0 ; i < makanan.length; i++){
        $("#daftar-makanan").append("<div>"+makanan[i].nama_makanan+" "+
        ubah_rupiah(makanan[i].harga)+" </div>");
    }
}

function tampilkan_minuman(){
    for(var i= 0 ; i < minuman.length; i++){
        $("#daftar-minuman").append("<div>"+minuman[i].nama_minuman+" "+
        ubah_rupiah(minuman[i].harga)+" </div>");
    }
}





tampilkan_makanan();
tampilkan_minuman();


