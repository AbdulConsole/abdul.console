document.addEventListener('DOMContentLoaded', function () {
    const dogImage = document.getElementById('dogImage');
    const newDogBtn = document.getElementById('newDogBtn');
    const breedDisplay = document.getElementById('breedDisplay');
    const spinner = document.getElementById('spinner');

    // Function to extract the breed name from the image URL
    function extractBreedName(url) {
        const breedPath = url.split('/breeds/')[1];
        const breedName = breedPath.split('/')[0];
        return breedName; // Return breed name in its original format
    }

    // Async function to fetch a random dog image
    async function fetchRandomDogImage() {
        // Display the spinner and hide the image while loading
        spinner.style.display = 'block';
        dogImage.style.display = 'none';
        breedDisplay.textContent = '';

        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            const imageUrl = data.message;

            

            // Wait for the image to fully load before hiding the spinner
            dogImage.src = imageUrl;
            dogImage.onload = () => {
                spinner.style.display = 'none'; // Hide spinner once image loads
                dogImage.style.display = 'block'; // Show the image after it's loaded
                
                // Extract and display the breed name
                const breedName = extractBreedName(imageUrl);
                breedDisplay.textContent = `Breed: ${breedName}`;
            
            };
        } catch (error) {
            console.error('Error fetching dog info:', error);
            breedDisplay.textContent = 'Error loading image';
            spinner.style.display = 'none';
        }
    }

    // Load a random dog image on page load
    fetchRandomDogImage();

    // Fetch a new dog image when the button is clicked
    newDogBtn.addEventListener('click', fetchRandomDogImage);
});