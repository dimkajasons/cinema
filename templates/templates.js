var dateAction = {
    dateTransform: function (date) {
        let days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        let months = ['January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October',
            'November', 'December'];
        return `${date.getDate()} ${months[date.getMonth()]}, ${days[date.getDay()]}`;
    },
    timeTransform: function (date) {
        let hours = (date.getHours() === 0) ? '00' : date.getHours();
        let minutes = (date.getMinutes() === 0) ? '00' : date.getMinutes();
        return `${hours}:${minutes}`;
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
                        <button class="delete-film-button">X</button>
                        <p class="duration">Duration: <%= duration %></p>
                        <p class="genre">genre:</p>
                        <p class="description">This template allows you to create poll with
                        many questions and answers. You can quickly and easily customize poll using
                        different types of question like a text value, image, multiply answers and
                            others, setup access and privacy settings etc.</p>
                    </span> 
                </div>`,
                // `Title: <%= title %> Year: <%= year %>`,
    sessionHTML: `<div class="session">
                    <span>
                        <img src= <%= img %> alt="">
                            </span>
                        <div class="movie-description">
                            <h1>Title: <%= title %></h1>
                            <p class="genre">genre</p>
                            <div class="timetable">
                                <% (function displayDay () { %>
                                    <% for(let i = 0; i < 7; i++) { %>
                                        <div class="daily-timetable">
                                        <% let currentDate = new Date; %>
                                        <% currentDate.setDate(currentDate.getDate() + i); %>
                                        <div class="day"> <%= dateAction.dateTransform(currentDate) %> </div>

                                        <% (function displaySessions () { %>
                                            
                                            <% for(let i = 0; i < timeTable.length; i++) {%>
                                                
                                                    <% let filmDate = new Date(timeTable[i]) %>
                                                    <% if (currentDate.getDate() === filmDate.getDate()) { %>
                                                        
                                                            <% let time = new Date(filmDate[i]); %>
                                                            <span class="session-time"> <%= dateAction.timeTransform(time) %> </span>
                                                        
                                                    <% } %>
                                                
                                            <% } %>
                                        <% })() %>
                                        </div>
                                    <% } %>
                                <% })(); %>
                            </div>
                        </div>
                    </div>`
}