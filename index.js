
//get random images from unsplash api
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=storm")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
    )`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

//fetch 3 cryptocurrencies data

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.querySelector(".crypto-top").innerHTML = `
        <div class="crypto__name">
            <img src=${data.image.small} />
            <span>${data.name}</span>
        </div>
        `
        document.querySelector(".crypto .crypto-top").innerHTML += `
        <div class="crypto__data">
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        </div>
        `
    })
    .catch(err => console.error(err))

    fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.querySelector(".crypto-bit").innerHTML = `
        <div class="crypto__name">
            <img src=${data.image.small} />
            <span>${data.name}</span>
        </div>
        `
        document.querySelector(".crypto .crypto-bit").innerHTML += `
        <div class="crypto__data">
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        </div>
        `
    })
    .catch(err => console.error(err))

    fetch("https://api.coingecko.com/api/v3/coins/cardano")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.querySelector(".crypto-eth").innerHTML = `
        <div class="crypto__name">
            <img src=${data.image.small} />
            <span>${data.name}</span>
        </div>
        `
        document.querySelector(".crypto .crypto-eth").innerHTML += `
        <div class="crypto__data">
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        </div>
        `
    })
    .catch(err => console.error(err))



// =====================
//   clock and date
//=========================

function getCurrentTime() {
    const d = new Date()
    document.querySelector(".time h1").textContent = d.toLocaleTimeString("en-us", {
        timeStyle: "short",
        hour12: true
    })
    document.querySelector(".time p").textContent = d.toDateString("en-us")
}

setInterval(getCurrentTime, 1000)

//--------------
// weather
//-----------------

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            
            document.querySelector(".weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}º</p>
                <p class="weather-city">${data.name}</p>
            `
            console.log(data)
        })
        .catch(err => console.error(err))
});