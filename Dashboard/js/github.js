// script.js

const username = "AkshatKumarSinha9327";
const userUrl = `https://api.github.com/users/${username}`;
const reposUrl = `https://api.github.com/users/${username}/repos`;

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function createUserCard(user) {
    const card = document.createElement("div");
    card.classList.add("user-card");
    card.innerHTML = `
        <img src="${user.avatar_url}" alt="Profile Picture" class="avatar">
        <h2>${user.name || username}</h2>
        <p>${user.bio || "No bio provided"}</p>
        <a href="${user.html_url}" target="_blank">View Profile</a>
    `;
    return card;
}

function createRepoCard(repo) {
    const card = document.createElement("div");
    card.classList.add("repo-card");
    card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description provided"}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
    `;
    return card;
}

async function renderUser() {
    const profileCard = document.getElementById("profile-card");
    const user = await fetchData(userUrl);
    if (user) {
        const card = createUserCard(user);
        profileCard.appendChild(card);
    }
}

async function renderRepos() {
    const reposContainer = document.getElementById("repos-container");
    const repos = await fetchData(reposUrl);
    if (repos) {
        repos.forEach(repo => {
            const card = createRepoCard(repo);
            reposContainer.appendChild(card);
        });
    }
}

  renderUser();
  renderRepos();
