function getUser() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.onload = function () {
        console.log(xhr.responseText);
        let posts = JSON.parse(xhr.responseText);

        let content='';

        posts.forEach(element => {
            content = content + "<div class='post'><label class='id'>" + element.id + "</label><p class='title'>" + element.title +"</p></div>";
        });

        document.getElementById("posts").innerHTML = content; 
     
    };
    xhr.send();
}