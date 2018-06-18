var date = new Date;
var dateAction = {
    dateTransform: function (date) {
        let days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        let months = ['January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October',
            'November', 'December'];
        return `${date.getDate()} ${months[date.getMonth()]}, ${days[date.getDay()]}`;
    },
    timeTransform: function(date) {
        let hours = (date.getHours() === 0) ? '00' : date.getHours();
        let minutes = (date.getMinutes() === 0) ? '00' : date.getMinutes();
        return `${hours}:${minutes}`;
    }
}
var obj = {
    "title": "Forrest Gump",
    "timeTable": [
        "June 13, 2018 20:00:00",
        "June 9, 2018 21:30:00",
        "June 10, 2018 21:30:00",
        "June 9, 2018 21:40:00",
        "June 11, 2018 21:30:00"
    ],
    "duration": 150,
    "hall": 2,
    "img_src": "img/forrest.jpg"
};

function displayDay () {
    for (let i = 0; i < 7; i++) {
        let currentDate = new Date;
        currentDate.setDate(currentDate.getDate() + i);

    }
}
displayDay();

function displaySessions () {
    let currentDate = new Date();
    for (let i = 0; i < obj.timeTable.length; i++){
        let filmDate = new Date(obj.timeTable[i])
        if (filmDate.getDate() === currentDate.getDate()) {
        }
    }
}
displaySessions()