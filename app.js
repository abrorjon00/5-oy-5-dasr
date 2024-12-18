const input = document.querySelector("#input");
const button = document.querySelector("#button");
const wrapper = document.querySelector("#wrapper");

button.addEventListener("click", function () {
  const username = input.value.trim(); 

  fetch(`https://api.github.com/users/${username}`, {
     method: "GET" 
    })
  .then((response) => {
      if (!response.ok) {
          throw new Error("Foydalanuvchi topilmadi!");
        }
        return response.json(); 
    })
        .then((data) => {
      wrapper.innerHTML = `
       <div class="profile">
    <img src="${data.avatar_url}" alt="Profil Rasm" width="100">
    <h2>${data.name}</h2>
    <p>${data.login}</p>
    <p>${data.bio}</p>
    <p>${data.company}</p>
    <p>${data.location}</p>
    <p>${data.followers}</p>
    <p> ${data.following}</p>
    <p>${data.public_repos}</p>
  </div>
      `;
    })
    .catch((error) => {
      wrapper.innerHTML = `<p class="error">${error.message}</p>`;
    });
});
