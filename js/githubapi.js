/**
 * Created by Dominic on 29-Oct-16.
 */
$(document).ready(function() {
    $.ajax({url: "https://api.github.com/users/domheal/repos", success: function(result){
        $.each(result, function(index, project){

            if (project.name.toString() == 'DomHeal.github.io'){
                return
            }
            d = document.createElement('div');
            $(d).addClass("col-md-4 portfolio-item");

            projectname = document.createElement('a');
            $(projectname).html(project.name)
                .attr('href', project.html_url);

            projectimage = document.createElement('img');
            $(projectimage).attr('href', project.html_url)
                .addClass("img-responsive")
                .attr('src', "images/" + project.name + ".png")
                .attr('onerror', "this.src='images/ShowImage.png'")
                .attr('data-toggle', "tooltip");

            description = document.createElement('p');
            $(description).html(project.description);

            language = document.createElement('img');
            $(language).addClass('project-icons')
                .attr('data-toggle', 'tooltip')
                .attr('src', 'images/' + project.language + '.png');

            fork = document.createElement('img');
            $(fork).addClass('project-icons')
                .attr('src', 'images/fork.png')
                .attr('data-toggle' , 'tooltip')
                .attr('title', "Forks");

            forkcnt = document.createElement('a');
            $(forkcnt).attr('data-toggle' , 'tooltip')
                .attr('title', "Forks")
                .html(project.forks_count)

            star = document.createElement('img');
            $(star).addClass('project-icons')
                .attr('src', 'images/star.png')
                .attr('data-toggle' , 'tooltip')
                .attr('title', "Stars");

            starcnt = document.createElement('a');
            $(starcnt).attr('data-toggle' , 'tooltip')
                .attr('title', "Stars")
                .html(project.stargazers_count);

            $(d).append(projectname, projectimage, description, language, forkcnt, fork, starcnt, star);

            $("#projectlink").append(d);

        })
    }});
});