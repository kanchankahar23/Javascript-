let key = "384306b3c1f86a61ef266986f8dfec4f";
let city = document.querySelector("#city");
let getWeather = document.querySelector("#getWeather");
let result = document.querySelector("#result");
let errorMsg = document.querySelector("#error");

getWeather.addEventListener("click", function () {
    let cityName = city.value.trim();

    // 1. Check if input is empty
    if (cityName === "") {
        errorMsg.classList.remove("hidden");
        result.classList.add("hidden");
        return;
    }

    // 2. Build API
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
    console.log(api);

    // 3. Fetch weather
    fetch(api)
        .then((rawdata) => rawdata.json())
        .then((Data) => {
            console.log(Data);

            if (Data.cod === "404") {
                // invalid city
                errorMsg.textContent = "City not found!";
                errorMsg.classList.remove("hidden");
                result.classList.add("hidden");
            } else {
                // valid response
                errorMsg.classList.add("hidden");
                result.classList.remove("hidden");

                document.querySelector("#cityName").textContent = Data.name;
                document.querySelector("#temperature").textContent = Data.main.temp + "°C";
                document.querySelector("#condition").textContent = Data.weather[0].main;
            }
        })
        .catch((err) => {
            console.error("Error:", err);
            errorMsg.textContent = "Something went wrong!";
            errorMsg.classList.remove("hidden");
            result.classList.add("hidden");
        });

    // clear input
    city.value = "";
});
