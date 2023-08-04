document.getElementById("shareButton").addEventListener("click", function () {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a file to share.");
    return;
  }

  const fileURL = URL.createObjectURL(file);
  const fileLinkInput = document.getElementById("fileLink");
  fileLinkInput.value = fileURL;
  document.querySelector(".link").style.display = "block";
});

document.getElementById("copyButton").addEventListener("click", function () {
  const fileLinkInput = document.getElementById("fileLink");
  fileLinkInput.select();
  document.execCommand("copy");
  alert("Link copied to clipboard!");
});
