function kanyaQuote() {
	fetch('https://api.kanye.rest/')
		.then((response) => response.json())
		.then((data) => displayQuotes(data));
}

const displayQuotes = (quote) => {
	const quoteElement = document.getElementById('quote');
	quoteElement.innerHTML = quote.quote;
};
