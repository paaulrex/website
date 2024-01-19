const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "/oldagram/img/avatar-vangogh.jpg",
        post: "/oldagram/img/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "/oldagram/img/avatar-courbet.jpg",
        post: "/oldagram/img/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "/oldagram/img/avatar-ducreux.jpg",
        post: "/oldagram/img/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.querySelector('main')
mainHTML = ""

for (let i = 0; i < posts.length; i++) {
    mainHTML += `
        <article class="posts">
            <section>
                <img class="avatar-pic" src="${posts[i].avatar}">
                <div>
                    <p class="strong-text">${posts[i].name}</p>
                    <p class="sub-text">${posts[i].location}</p>
                </div>
            </section>
            <img class="pic-post" src="${posts[i].post}">
            <div class="interact-icons">
                <img src="/oldagram/img/icon-heart.png">
                <img src="/oldagram/img/icon-comment.png">
                <img src="/oldagram/img/icon-dm.png">
            </div>
            <div class="post-info">
                <p class="strong-text">${posts[i].likes} likes</p>
                <div>
                    <p class="strong-text">${posts[i].username} <span class="sub-text caption">${posts[i].comment}</span></p>
                </div>
            </div>  
        </article>

    `
}

main.innerHTML = mainHTML