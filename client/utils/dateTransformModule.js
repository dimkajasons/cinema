export var dateAction = {
    dateTransform: function (date) {
        let days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        let months = ['January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October',
            'November', 'December'];
        return `${date.getDate()} ${months[date.getMonth()]}, ${days[date.getDay()]}`;
    },
    timeTransform: function (date) {
        let localDate = new Date(date);
        let hours = (localDate.getHours() === 0) ? '00' : localDate.getHours();
        let minutes = (localDate.getMinutes() === 0) ? '00' : localDate.getMinutes();
        return `${hours}:${minutes}`;
    }
}