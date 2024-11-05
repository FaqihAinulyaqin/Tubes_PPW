// Fungsi untuk pindah ke halaman Search menggunakan jQuery
function Search() {
    const username = $('#username').val();
    const password = $('#password').val();

    if (username === "" || password === "") {
        alert("Username dan Password tidak boleh kosong!");
    } else {
        // Pindah ke halaman Search.html
        window.location.href = 'HalamanUtama.html';
    }
}
