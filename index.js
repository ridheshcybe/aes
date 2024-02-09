const pwdhtm = document.getElementById("pwd");
const typehtm = document.getElementById("type");
const inputhtm = document.getElementById("in");
const outhtm = document.getElementById("out");

async function digestMessage(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hash = await crypto.subtle.digest("SHA-256", data);
    return hash;
  }

async function run(ev) {
    const pwd = await digestMessage(pwdhtm.innerText);
    const input = inputhtm.innerText;
    const type = typehtm.value == "enc" ? "encrypt" : "decrypt";

    outhtm.innerHTML = Module.ccall(type,"number", ["string","number","string"], input,input.length,pwd,crypto.randomUUID())
}