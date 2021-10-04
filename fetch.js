const entry = document.getElementById("country");
const codeSentence = document.getElementById("statement");

//fetch function
function getCountries() {
    fetch("http://127.0.0.1:3000/countries")
        .then((data) => {
            return data.json();
        })
        .then((json) => {
            json.countries.forEach((item) => {
                addCountry(item.name, item.code);
            })
        })
        .catch((error) => {
            text.innerHTML = `Hello, failed to fetch data...`;
            console.log(error);
        });
}
//Add country to Option
function addCountry(name, code) {
    var option = document.createElement("option");
    option.text = name;
    option.value = code;
    entry.appendChild(option);
}

//Display Results of the country Code
function displayCode() {
    codeSentence.innerText = `You have selected: ${entry.options[entry.selectedIndex].text}, where the ${entry.options[entry.selectedIndex].value} will be the "code" of the country.`
}
getCountries()

