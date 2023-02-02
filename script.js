// Variables to store the search filters
let searchTerm = '';
let numberOfRecords = 0;
let startYear = 0;
let endYear = 0;


// variables to store the button elements
const searchBtn = $('#search');
const clearBtn = $('#clear');



searchBtn.on('click', function(event) {
    event.preventDefault();
    searchTerm = $('#search-term').val().trim();
    numberOfRecords = $('#number-of-records').val();
    startYear = $('#start-year').val();
    endYear = $('#end-year').val();
    console.log(searchTerm + " " +numberOfRecords + " " + startYear + " " + endYear );
})

function displayResult() {
    const apiKey = 'Ubhvi6SvcQk5MxrBumxqize2halNNVel';

    
    let apiURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchTerm + '&'
}
