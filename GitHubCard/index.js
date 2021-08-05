import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['vannguyen141290', 'MMostella', 'christina-yun', 'TraNequaFauntleroy', 'Raj-04'];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const entryPoint = document.querySelector('.cards');

function cardMaker(name, login, location, avatar_url, url, followers, following, bio) {
  //create elements
  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const _name = document.createElement('h3');
  const userName = document.createElement('p');
  const _location = document.createElement('p');
  const profile = document.createElement('p');
  const pageLink = document.createElement('a');
  const _followers = document.createElement('p');
  const _following = document.createElement('p');
  const _bio = document.createElement('p');

  //locate elements
  card.appendChild(userImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(_name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(_location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(_followers);
  cardInfo.appendChild(_following);
  cardInfo.appendChild(_bio);
  profile.appendChild(pageLink);

  //add className
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  _name.classList.add('name');
  userName.classList.add('username');

  //add attribute
  userImg.src = avatar_url;
  _name.textContent = name;
  userName.textContent = login;
  _location.textContent = `Location: ${location}`;
  profile.textContent = `Profile: ${url}`;
  pageLink.href = url;
  pageLink.textContent = url;
  _followers.textContent = `Followers: ${followers}`;
  _following.textContent = `Following: ${following}`;
  _bio.textContent = bio;

  return card;
};

followersArray.forEach(username => {
  axios.get(`https://api.github.com/users/${username}`)
    .then((res) => {
      const name = res.data.name;
      const login = res.data.login;
      const location = res.data.location;
      const avatar_url = res.data.avatar_url;
      const url = res.data.url;
      const followers = res.data.followers;
      const following = res.data.following;
      const bio = res.data.bio;
      
      entryPoint.appendChild(cardMaker(name, login, location, avatar_url, url, followers, following, bio));
      
    })
    .catch(err => {
      console.error(err);
    })
  
})



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
