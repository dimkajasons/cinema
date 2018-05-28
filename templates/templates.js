let templates = {
    movieHTML: 'Title: <%= title %> Year: <%= year %>',
    //
    movieListHTML: `Movie List <% for(let i = 0; i < children.length; i++) { %>
                                    <%= children[0]['year'] %> 
                                <% } %>`
}

