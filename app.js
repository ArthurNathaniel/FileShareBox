document.getElementById('shareButton').addEventListener('click', function() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  
  if (!file) {
    alert('Please select a file to share.');
    return;
  }

  const downloadLink = document.getElementById('downloadLink');
  const fileURL = URL.createObjectURL(file);
  downloadLink.href = fileURL;
  downloadLink.download = file.name;
  downloadLink.style.display = 'inline-block';
  alert('File shared successfully!');
});
