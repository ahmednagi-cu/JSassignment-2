const quotes = [
    {
        text: "It's not what happens to you, but how you react to it that matters.",
        author: "Epictetus"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "You only live once, but if you do it right, once is enough..",
        author: "Mae West"
    },
    {
        text: "Be the change that you wish to see in the world",
        author: "Mahatma Gandhi"
    }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote-text').textContent = `"${quote.text}"`;
    document.getElementById('quote-author').textContent = `-- ${quote.author}`;
}