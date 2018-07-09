// var dateAction = {
//     dateTransform: function (date) {
//         let days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
//         let months = ['January', 'February', 'March', 'April', 'May',
//             'June', 'July', 'August', 'September', 'October',
//             'November', 'December'];
//         return `${date.getDate()} ${months[date.getMonth()]}, ${days[date.getDay()]}`;
//     },
//     timeTransform: function (date) {
//         let localDate = new Date(date);
//         let hours = (localDate.getHours() === 0) ? '00' : localDate.getHours();
//         let minutes = (localDate.getMinutes() === 0) ? '00' : localDate.getMinutes();
//         return `${hours}:${minutes}`;
//     }
// }

export var templates = {
    movieHTML: 
                `<div class="movie">
                    <span class="movie-images">
                        <div class="image-wrapper">
                            <div class="film-sessions"></div>
                        </div>
                        <div class="small-images">
                            
                        </div>
                    </span>
                    <span class="movie-description">
                        <h1>Title: <%= title %></h1>
                        <button class="delete-film-button" type="button">X</button>
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
                                        <div class="day" data-day="<%=currentDate %>"> <%= dateAction.dateTransform(currentDate) %> </div>

                                        <% (function displaySessions () { %>
                                            
                                            <% let newArr = timeTable.filter(function(el){%>
                                                <% let filmDate = new Date(el); %>
                                                <% return filmDate.getDate() === currentDate.getDate(); %>
                                            <% }); %>        
                                            <% newArr.sort(function (a, b) { %>            
                                                <% return new Date(a) - new Date(b); %>            
                                            <% }) %>                    
                                            <% newArr.forEach(function (el) { %>                
                                                <button class="session-time" type="button" data-time="<%=el %>"> <%= dateAction.timeTransform(el) %> </buuton>            
                                            <% }) %>
                                        <% })() %>
                                        </div>
                                    <% } %>
                                <% })(); %>
                            </div>
                        </div>
                    </div>`
}
