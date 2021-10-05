const entry = document.getElementById("country")
const codeSentence = document.getElementById("statement")
const loader = document.getElementById("spinner")

//fetch function
function getCountries() {
    showSpinner(true);
    fetch("http://127.0.0.1:3000/countries")
        .then((data) => {
            return data.json();
        })
        .then((json) => {
            showSpinner(false)
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
    entry.appendChild(option,0);
}
//spinner to show/hide
function showSpinner(isLoading) {
    if (isLoading == true) {
        loader.style.visibility = "visible";
    } else {
        loader.style.visibility = "hidden";
    }
}

//Display Results of the country Code
function displayCode() {
    codeSentence.innerText = `You have selected: ${entry.options[entry.selectedIndex].text}, where the ${entry.options[entry.selectedIndex].value} will be the "code" of the country.`
}
getCountries()

