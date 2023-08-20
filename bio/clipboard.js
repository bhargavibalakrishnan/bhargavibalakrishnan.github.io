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
