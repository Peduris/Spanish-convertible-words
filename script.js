// Spanish Convertible Words - Main Script

document.addEventListener('DOMContentLoaded', () => {
    const wordInput = document.getElementById('wordInput');
    const convertBtn = document.getElementById('convertBtn');
    const results = document.getElementById('results');

    // Handle convert button click
    convertBtn.addEventListener('click', () => {
        const word = wordInput.value.trim();
        if (word) {
            convertWord(word);
        }
    });

    // Handle Enter key press
    wordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const word = wordInput.value.trim();
            if (word) {
                convertWord(word);
            }
        }
    });

    function convertWord(word) {
        // Placeholder for conversion logic
        results.innerHTML = `
            <div class="result-item">
                <h3>Word: ${word}</h3>
                <p>Conversion functionality coming soon...</p>
            </div>
        `;
    }
});

