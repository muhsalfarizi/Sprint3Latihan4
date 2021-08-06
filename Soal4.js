
function login (email, password){
    email = `Selamat datang!`;
    password = `Tuan`;
    function goHome(){
        console.log(email);
        function backLogin() {
            console.log(password);
        }
        backLogin(prompt('Masukan Password anda!'))
    }
    goHome(prompt('Masukan Email anda!'))
}
login()
