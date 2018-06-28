//var date = new Date;
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
        "June 24, 2018 20:00:00",
        "June 22, 2018 21:30:00",
        "June 22, 2018 21:00:00",
        "June 23, 2018 21:40:00",
        "June 20, 2018 21:30:00"
    ],
    "duration": 150,
    "hall": 2,
    "img_src": "img/forrest.jpg"
};

function displayDay () {
    obj.timeTable.sort(function (a, b) {
        return new Date(a) - new Date(b)
    })
    for (let i = 0; i < 7; i++) {
        let currentDate = new Date;
        currentDate.setDate(currentDate.getDate() + i);
        //console.log(currentDate)
        function displaySessions() {
            var newArr = obj.timeTable.filter(function(el) {
                var filmDate = new Date(el);
                return filmDate.getDate() === currentDate.getDate();
            });
            newArr.sort(function (a, b) {
                return new Date(a) - new Date(b);
            })
            //console.log(newArr)
            // for (let i = 0; i < obj.timeTable.length; i++) {
            //     let filmDate = new Date(obj.timeTable[i])
            //     if (filmDate.getDate() === currentDate.getDate()) {
            //     }
            // }
        };
        displaySessions();
    }
}
displayDay();

// function displaySessions () {
//     let currentDate = new Date();
//     for (let i = 0; i < obj.timeTable.length; i++){
//         let filmDate = new Date(obj.timeTable[i])
//         if (filmDate.getDate() === currentDate.getDate()) {
//         }
//     }
// }
// displaySessions()