// script.js
document.getElementById('generateBtn').addEventListener('click', function() {
const prompt = document.getElementById('inputPrompt').value;
document.getElementById('result').innerHTML = `<img src="https://via.placeholder.com/500x300?text=${prompt}" alt="Generated Image" class="img-fluid">`;
});