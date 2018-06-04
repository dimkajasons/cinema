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
        return `${date.getHours()}:${date.getMinutes()}`
    }
}
console.log(dateAction.dateTransform(date))

function displayDay () {
    for (let i = 0; i < 7; i++) {
        let currentDate = new Date;
        currentDate.setDate(currentDate.getDate() + i);
        console.log(dateAction.dateTransform(currentDate));
    }
}
displayDay();
var obj = {
    "title": "Forrest Gump",
    "timeTable": [
        {
            "2018, 7, 4": [
                "2018-06-05T17:00:00Z",
                "2018-06-05T18:30:00Z"
            ]
        },
        {
            "2018, 7, 5": [
                "2018, 7, 5, 15, 30",
                "2018, 7, 5, 18, 30"
            ]
        }
    ],
    "duration": 150,
    "hall": 2,
    "img_src": "img/forrest.jpg"
};
console.log(obj);
function displaySessions () {
    let currentDate = new Date;
    for (let i = 0; i < obj.timeTable.length; i++){
        for(let key in obj.timeTable[i]) {
            let filmDate = new Date(key)
            if (currentDate.getDate() === filmDate.getDate()) {
                for (let k = 0; k < obj.timeTable[i][key].length; k++) {
                    let time = new Date(obj.timeTable[i][key][k]);
                    let qw = new Date(time);

                }
                //console.log(dateAction.timeTransform(time));
            }
        }
    }
}
displaySessions()