alert("Selamat Datamg di Tiket \nUmur Minimal Masuk 13 Tahun")

const umur = prompt ("Masukkan Umur Anda")

if (umur >= 13) {
   const studio = prompt("Silahkan Masuk \nMasukkan studio\nA : Studio A\nB : Studio B\nC : Studio C")

   if (studio == "A","a" || studio == "B","b" || studio == "C","c") {
        const film = prompt("Pilih Film \n 1 : Anime \n 2 : Film \n 3 : Kartun")
        let namaFilm
        if (film == "1") {
            namaFilm = "Anime"
        }else if (film == "2") {
            namaFilm = "Film"
        }else if (film == "3") {
            namaFilm = "Kartun"
        }
        
        if (film == "1" || film == "2" || film == "3") {
            const nama = prompt("Masukkan Nama")
            alert(`Berikut Tiket Anda \n Nama : ${nama} \n Umur : ${umur} \n Studio : ${studio} \n Film : ${namaFilm}`)
        } else {
            alert("Pengen Mati Kapan Lu?")
        }
    } else { 
        alert("Harap Masukkan Studio")
    }
} else { 
    alert("Anak Dibawah Umur Dilarang Masuk")
}