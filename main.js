document.addEventListener('DOMContentLoaded', function() {
    const endpoint = `https://api.github.com/users/DGzzzzz`;
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username')
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repositorios');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link-profile')

    fetch(endpoint)
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(json) {
            nameElement.innerHTML = json.name;
            usernameElement.innerHTML = json.login;
            avatarElement.src = json.avatar_url;
            reposElement.innerHTML = json.public_repos;
            followersElement.innerHTML = json.followers;
            followingElement.innerHTML = json.following;
            linkElement.href = json.html_url;
        })
})