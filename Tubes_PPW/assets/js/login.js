// Fungsi untuk pindah ke halaman Search menggunakan jQuery
function Search() {
    const username = $('#username').val();
    const password = $('#password').val();

    if (username === "" || password === "") {
        alert("Username dan Password tidak boleh kosong!");
    } else {
        const userData = {
            username: username,
            password: password
        };
        localStorage.setItem('user', JSON.stringify(userData));

        window.location.href = 'HalamanUtama.html';
    }
}


