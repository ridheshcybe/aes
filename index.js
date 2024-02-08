const pwdhtm = document.getElementById("pwd");
const typehtm = document.getElementById("type");
const inputhtm = document.getElementById("in");
const outhtm = document.getElementById("out");
function run(ev) {
    const pwd = pwdhtm.innerText;
    const input = inputhtm.innerText;
    const type = typehtm.value == "enc" ? "encrypt" : "decrypt";
outhtm.innerHTML = Module.ccall(type,"number", ["string","string"], pwd,input)
}