document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Life is what happens when you're busy making other plans. – John Lennon",
        "The purpose of our lives is to be happy. – Dalai Lama",
        "Get busy living or get busy dying. – Stephen King",
        "You have within you right now, everything you need to deal with whatever the world can throw at you. – Brian Tracy"
    ];

    const quoteElement = document.getElementById('quote');
    const newQuoteButton = document.getElementById('new-quote');

    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    }

    newQuoteButton.addEventListener('click', displayRandomQuote);

    // Display a random quote on initial load
    displayRandomQuote();
});
