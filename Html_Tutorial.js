function runCode() {
  const code = document.getElementById("htmlCode").value;
  const iframe = document.getElementById("output");
  iframe.srcdoc = code;
}