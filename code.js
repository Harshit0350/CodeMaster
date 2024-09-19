// Function to run the user's code and display the output
function run() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;

    let output = document.getElementById("output");

    // Create a full document with HTML, CSS, and JavaScript
    let fullCode = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}<\/script>
        </body>
        </html>
    `;

    // Insert the code into the iframe
    output.srcdoc = fullCode;
}

// Function to handle auto-indentation
function autoIndent(textArea) {
    let caretPosition = textArea.selectionStart;
    let text = textArea.value;
    let beforeCaret = text.substring(0, caretPosition);
    let afterCaret = text.substring(caretPosition);

    if (beforeCaret.endsWith('\n')) {
        let indent = beforeCaret.match(/(\s*)$/)[0]; // Find the indentation of the previous line
        textArea.value = beforeCaret + indent + afterCaret;
        textArea.selectionStart = textArea.selectionEnd = caretPosition + indent.length;
    }
}

// Attach events to HTML, CSS, and JS textareas
document.getElementById('html-code').addEventListener('keyup', function () {
    run();
    autoIndent(this);
});
document.getElementById('css-code').addEventListener('keyup', function () {
    run();
    autoIndent(this);
});
document.getElementById('js-code').addEventListener('keyup', function () {
    run();
    autoIndent(this);
});

// Initial call to run the code on page load
window.onload = function () {
    run();
};
