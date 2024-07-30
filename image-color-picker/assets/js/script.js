document.querySelector('.right').addEventListener(
  'click', () => {
        window.location.href = './../catalog.html';
  }
);


document.getElementById('custom-upload-button').addEventListener('click', function() {
  document.getElementById('upload').click();
});

document.getElementById('upload').addEventListener('change', function() {
  var file = this.files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
    var image = new Image();
    image.src = e.target.result;
    image.onload = function() {
      displayImage(this.src);
    };
  };

  reader.readAsDataURL(file);
  
    // during image load
    document.querySelector('.what-we-do').style.display = 'none';
    document.querySelector('#custom-upload-button').style.display = 'none';
    document.querySelector('.upload-icon').addEventListener('click', function() {
        location.reload(); });

});

document.querySelectorAll('.samples img').forEach(function(sampleImg) {
  sampleImg.addEventListener('click', function() {
    var image = new Image();
    image.src = this.src;
    image.onload = function() {
      displayImage(this.src);
    }; 
  });
});

document.getElementById('image-container').addEventListener('click', function(e) {
  var img = document.getElementById('uploaded-image');
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  var x = e.offsetX * (img.naturalWidth / img.width);
  var y = e.offsetY * (img.naturalHeight / img.height);

  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);

  var pixelData = context.getImageData(x, y, 1, 1).data;
  var hexColor = rgbToHex(pixelData[0], pixelData[1], pixelData[2]);

  var colorDisplay = document.getElementById('color-display');
  colorDisplay.textContent = '#' + hexColor;
  colorDisplay.style.backgroundColor = '#' + hexColor;
  colorDisplay.style.display = 'block';


  
  
  
  // Copy color to clipboard
  navigator.clipboard.writeText('#' + hexColor).then(function() {
    showAlert('Copied');
  }, function() {
    showAlert('Failed to copy');
  });
});

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function showAlert(message) {
  var alertBox = document.getElementById('flash-alert');
  alertBox.textContent = message;
  alertBox.style.display = 'block';
  setTimeout(function() {
    alertBox.style.display = 'none';
  }, 2000);
}

function displayImage(src) {
  var uploadedImage = document.getElementById('uploaded-image');
  var imageContainer = document.getElementById('image-container');
  var sampleImagesSection = document.querySelector('.sample-images');
  var addImageIcon = document.getElementById('add-image-icon');

  uploadedImage.src = src;
  uploadedImage.style.display = 'block'; // Show the image when a valid src is set

  // Ensure the image container adjusts to the screen size
  var maxWidth = imageContainer.clientWidth;
  uploadedImage.style.maxWidth = '100%';
  uploadedImage.style.height = 'auto';
  imageContainer.style.maxWidth = maxWidth + 'px';

  // Hide sample images section
  sampleImagesSection.style.display = 'none';

  // Show the add image icon
  addImageIcon.style.display = 'block';

  // Handle click event on add image icon to reset the view
  addImageIcon.addEventListener('click', function() {
    uploadedImage.style.display = 'none';
    sampleImagesSection.style.display = 'block';
    addImageIcon.style.display = 'none';
    document.getElementById('upload').value = ''; // Reset the file input
    document.getElementById('color-display').style.display = 'none'; // Hide color display
  });
}