let citiesData = {};

async function convertTimeZone() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'e56f431759cd4e83bbef3ba7b6220c01';
    const apiUrl = `https://api.ipgeolocation.io/timezone?apiKey=${apiKey}&location=${city}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.timezone) {
            const cityData = {
                timezone: data.timezone,
                dateTime: new Date().toLocaleString('en-US', {
                    timeZone: data.timezone,
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                }),
                hourMinute: new Date().toLocaleString('en-US', {
                    timeZone: data.timezone,
                    hour: 'numeric',
                    minute: 'numeric',
                }),
                timeZoneAbbr: new Date().toLocaleTimeString('en-US', { timeZoneName: 'short', timeZone: data.timezone }).split(' ')[2]
            };

            citiesData[city] = cityData;
            displayCities();
        } else {
            alert('Time Zone information not found. Please enter a valid US-based town/city.');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('An error occurred. Please try again later.');
    }
}

function displayCities() {
    const timeZoneResults = document.getElementById('timeZoneResults');
    timeZoneResults.innerHTML = '';

    for (const [city, data] of Object.entries(citiesData)) {
        const resultElement = document.createElement('div');
        resultElement.classList.add('city-info');
        resultElement.innerHTML = `
            <div class="city-header">
                <strong class="city-name">
                    <img class="usa-flag" src="https://m.media-amazon.com/images/I/71EMRA2+PJL._AC_SX300_SY300_.jpg"/>${city}
                </strong>
                <span class="close-btn" onclick="deleteCity('${city}')">&times;</span>
            </div>
            <p>${data.timeZoneAbbr}</p>
            <p>Date: ${getDateTimeSelects(city)}</p>
            <p>Time: ${getTimeSelects(city)}</p>
            <p class="current-time">${data.dateTime} <span class="time">${data.hourMinute}</span></p>
        `;
        timeZoneResults.appendChild(resultElement);
    }
}
function deleteCity(city) {
    // Remove the city from the citiesData object
    delete citiesData[city];
    
    // Update the display
    displayCities();
}


function generateYearOptions(currentYear, minYear = 1900, maxYear = 2100) {
        let yearOptions = '';
        for (let year = minYear; year <= maxYear; year++) {
            yearOptions += `<option value="${year}" ${year === currentYear ? 'selected' : ''}>${year}</option>`;
        }
        return yearOptions;
    }

    function getDateTimeSelects(city) {
        const date = new Date(citiesData[city].dateTime);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return `
            <select id="${city}-month" onchange="updateCityDateTime('${city}')">
                ${generateMonthOptions(month)}
            </select>
            <select id="${city}-day" onchange="updateCityDateTime('${city}')">
                ${generateDayOptions(day)}
            </select>
            <select id="${city}-year" onchange="updateCityDateTime('${city}')">
                ${generateYearOptions(year)}
            </select>
        `;
    }


function getTimeSelects(city) {
    const time = citiesData[city].hourMinute.split(':');
    const hour = parseInt(time[0]);
    const minute = parseInt(time[1]);
    return `
        <select id="${city}-hour" onchange="updateCityDateTime('${city}')">
            ${generateHourOptions(hour)}
        </select>
        :
        <select id="${city}-minute" onchange="updateCityDateTime('${city}')">
            ${generateMinuteOptions(minute)}
        </select>
    `;
}

function generateMonthOptions(selectedMonth) {
    let options = '';
    for (let i = 1; i <= 12; i++) {
        options += `<option value="${i}" ${i === selectedMonth ? 'selected' : ''}>${String(i).padStart(2, '0')}</option>`;
    }
    return options;
}

function generateDayOptions(selectedDay) {
    let options = '';
    for (let i = 1; i <= 31; i++) {
        options += `<option value="${i}" ${i === selectedDay ? 'selected' : ''}>${String(i).padStart(2, '0')}</option>`;
    }
    return options;
}

function generateHourOptions(selectedHour) {
    let options = '';
    for (let i = 0; i < 24; i++) {
        options += `<option value="${i}" ${i === selectedHour ? 'selected' : ''}>${String(i).padStart(2, '0')}</option>`;
    }
    return options;
}

function generateMinuteOptions(selectedMinute) {
    let options = '';
    for (let i = 0; i < 60; i++) {
        options += `<option value="${i}" ${i === selectedMinute ? 'selected' : ''}>${String(i).padStart(2, '0')}</option>`;
    }
    return options;
}

function updateCityDateTime(city) {
    const month = document.getElementById(`${city}-month`).value;
    const day = document.getElementById(`${city}-day`).value;
    const year = document.getElementById(`${city}-year`).value;
    const hour = document.getElementById(`${city}-hour`).value;
    const minute = document.getElementById(`${city}-minute`).value;

    const originalMinute = new Date(citiesData[city].dateTime).getMinutes();

    const newDateTime = new Date(year, month - 1, day, hour, minute);

    citiesData[city].dateTime = newDateTime.toLocaleString('en-US', {
        timeZone: citiesData[city].timezone,
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });

    citiesData[city].hourMinute = newDateTime.toLocaleString('en-US', {
        timeZone: citiesData[city].timezone,
        hour: 'numeric',
        minute: 'numeric',
    });

    // Update other cities
    for (const [otherCity, _] of Object.entries(citiesData)) {
        if (otherCity !== city) {
            const offset = getOffset(city, otherCity);
            const updatedDateTime = new Date(newDateTime.getTime() + offset * 60 * 1000);

            
            updatedDateTime.setMinutes(originalMinute);

            citiesData[otherCity].dateTime = updatedDateTime.toLocaleString('en-US', {
                timeZone: citiesData[otherCity].timezone,
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
            });

            citiesData[otherCity].hourMinute = updatedDateTime.toLocaleString('en-US', {
                timeZone: citiesData[otherCity].timezone,
                hour: 'numeric',
                minute: 'numeric',
            });
        }
    }

    displayCities();
}



function getOffset(city1, city2) {
    const timezone1 = citiesData[city1].timezone;
    const timezone2 = citiesData[city2].timezone;
    const date = new Date();
    const offset1 = date.getTimezoneOffset() / 60;
    const offset2 = (new Date(date.toLocaleString('en-US', { timeZone: timezone1 })).getTimezoneOffset() - new Date(date.toLocaleString('en-US', { timeZone: timezone2 })).getTimezoneOffset()) / 60;
    return offset1 + offset2;
}

// Display current time on page load
displayCities();
