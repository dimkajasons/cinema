var dateAction = {
    dateTransform: function (date) {
        let days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        let months = ['January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October',
            'November', 'December'];
        return `${date.getDate()} ${months[date.getMonth()]}, ${days[date.getDay()]}`;
    },
    timeTransform: function (date) {
        return `${date.getHours()}:${date.getMinutes()}`
    }
}
let templates = {
    movieHTML: 
                `<div class="movie">
                    <span>
                        <img src= <%= img %> alt="">
                    </span>
                    <span class="movie-description">
                        <h1>Title: <%= title %></h1>
                        <p class="duration">Duration: <%= duration %></p>
                        <p class="genre">genre:</p>
                        <p class="description">This template allows you to create poll with
                        many questions and answers. You can quickly and easily customize poll using
                        different types of question like a text value, image, multiply answers and
                            others, setup access and privacy settings etc.</p>
                    </span> 
                </div>`,
                // `Title: <%= title %> Year: <%= year %>`,
    movieListHTML:              `<div class="movie-list"> <% for(let i = 0; i < children.length; i++) { %>
                                    <%= children[0]['year'] %>
                                <% } %>`,
    sessionHTML: `<div class="movie">
                    <span>
                        <img src="img/forrest.jpg" alt="">
                            </span>
                        <span class="movie-description">
                            <h1>Title: <%= title %></h1>
                            <p class="genre">genre</p>
                            <div class="timetable">
                                <% (function displayDay () { %>
                                    <% for(let i = 0; i < 7; i++) { %>
                                        <div class="daily-timetable">
                                        <% let currentDate = new Date; %>
                                        <% currentDate.setDate(currentDate.getDate() + i); %>
                                        <p> <%= dateAction.dateTransform(currentDate) %> </p>

                                        <% (function displaySessions () { %>
                                            <% let currentDate = new Date %>
                                            <% for(let i = 0; i < timeTable.length; i++) {%>
                                                <% for(let key in timeTable[i]) { %>
                                                    <% let filmDate = new Date(key) %>
                                                    <% if (currentDate.getDate() === filmDate.getDate()) { %>
                                                        <% for (let k = 0; k < timeTable[i][key].length; k++) { %>
                                                            <% let time = new Date(timeTable[i][key][k]); %>
                                                            <span class="session-time"> <%= dateAction.timeTransform(time) %> </span>
                                                        <% } %> <br>
                                                    <% } %>
                                                <% } %>
                                            <% } %>
                                        <% })() %>
                                        </div>
                                    <% } %>
                                <% })(); %>
                                <div class="daily-timetable">
                                    <p>5 June, Sa</p>
                                    <span class="session-time">16.50</span>
                                    <span class="session-time">20.50</span>
                                </div>
                                <div class="daily-timetable">
                                    <p>6 June, Sa</p>
                                    <span class="session-time">16.50</span>
                                    <span class="session-time">17.50</span>
                                    <span class="session-time">19.00</span>
                                </div>
                                <div class="daily-timetable">
                                    <p>7 June, Sa</p>
                                    <span class="session-time">16.50</span>
                                </div>
                                <div class="daily-timetable">
                                    <p>5 June, Sa</p>
                                    <span class="session-time">16.50</span>
                                </div>
                                <div class="daily-timetable">
                                    <p>5 June, Sa</p>
                                    <span class="session-time">16.50</span>
                                </div>
                            </div>
                        </span>
                    </div>`
}