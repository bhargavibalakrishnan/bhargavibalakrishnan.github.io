// Reference of the paragraph tag
const content = document.getElementById("content");

// Reference of the copy button
const copyBtn = document.getElementById("copy");

// Copy button's onclick handler
copyBtn.onclick = copyToClipboard;

// Method responsible for copying the content
function copyToClipboard() {
    navigator.clipboard
        .writeText(content.innerText)
        .then(() => alert("Copied to clipboard"))
        .catch((e) => alert(e.message));
}

document.addEventListener("contextmenu", function(event) {
  event.preventDefault();
});

function copy(){
    var Url = document.getElementById("box");
    Url.value = window.location.href;
    Url.focus();
    Url.select();
    document.getElementById("custom-tooltip").style.display = "inline";
    document.execCommand("copy");
    setTimeout( function() {
        document.getElementById("custom-tooltip").style.display = "none";
    }, 1000);

};
