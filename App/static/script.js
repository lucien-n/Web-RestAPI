function togglePasswordVisibility() {
    var pass = document.getElementById("password");
    if (pass != null)
    if (pass.type == "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}

function closeFlashMesage() {
    var flash_msg = document.getElementById("flash_msg_div");
    flash_msg.remove();
}

function copyToClipboard() {
    let token = document.getElementById("token");
    if (token != null)
    token.select();
    document.execCommand("copy");
}