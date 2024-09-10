const date = new Date(Date.now())
const numberOfDayInMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

const calendarTitleField = document.getElementById("calendarTitle")
calendarTitleField.innerHTML = date

const calendar = document.getElementById("calendar")

printCalendar(numberOfDayInMonth, date.getDate())

function printCalendar(numberOfDayInMonth, dayOfMonth)
{
    for (let day = 1; day <= numberOfDayInMonth; day++) {
        var li = document.createElement('li')
        calendar.appendChild(li)
        
        li.innerHTML = day

        if (day <= dayOfMonth) {
            li.classList.add('clickable')
            
            if (day == date.getDate()) {
                li.classList.add('currentDay')
            }
            
            li.addEventListener("click", function(event) {printInfo(day)})
        } else {
            li.classList.add('unclickable')
        }
    }
}

function printInfo(day)
{
    const infoTextField = document.getElementById('infoText')

    infoTextField.innerHTML = `Le bouton que vous avez cliquez correspond au jour ${day}`
}