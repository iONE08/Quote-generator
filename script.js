const quote = document.querySelector(".quote");
const author = document.querySelector(".author-name");

const newQuoteBtn = document.querySelector(".new-quote");
const speechBtn = document.querySelector(".speech");
const copyBtn = document.querySelector(".copy");

const quoteUrl = "https://quotes-genereator-cheap.p.rapidapi.com/randomquotev11";
const quoteOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "964941c9b2msh94d168d6d16b6d8p158637jsn3421dbef2b18",
    "x-rapidapi-host": "quotes-genereator-cheap.p.rapidapi.com",
  },
};

function generateQuote() {
  fetch(quoteUrl, quoteOptions)
    .then((response) => response.json())
    .then((item) => {
      quote.innerText = item.data[0].quote;
      author.innerText = item.data[0].author;
    })
    .catch((error) => {
      console.error("Error fetching the quote: ", error);
    });
}
newQuoteBtn.addEventListener("click", generateQuote);


function copyQuote() {
  navigator.clipboard.writeText(`${quote.innerText}.. by ${author.innerText}.`);
}
copyBtn.addEventListener("click", copyQuote);


function speechQuote() {
  responsiveVoice.speak(`${quote.innerText} by ${author.innerText}.`);
}
speechBtn.addEventListener("click", speechQuote);