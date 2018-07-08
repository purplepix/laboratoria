

var button = document.getElementsByTagName('button')[0];
button.addEventListener('click', addMessageToFeed);

function addMessageToFeed() {
  var txtArea = document.getElementsByTagName('textarea')[0];
  var message = txtArea.value;

  var tweetBox = document.createElement('div');
  tweetBox.className = 'tweet';

  var tweetMessage = document.createElement('p');
  tweetMessage.className = 'message';
  tweetMessage.textContent = message;

  var name = document.createElement('span');
  name.setAttribute('class', 'name-feed');
  name.textContent = 'Marcia Silva';
  var username = document.createElement('span');
  username.setAttribute('class', 'username-feed');
  username.textContent = '@MarciaSiIva';

  var avatar = document.createElement('img');
  avatar.setAttribute('class', 'avatar-feed');
  avatar.setAttribute('src', 'assets/images/avatar-marcia.jpeg');

  tweetBox.appendChild(tweetMessage);
  tweetBox.insertBefore(username, tweetMessage);
  tweetBox.insertBefore(name, username);
  tweetBox.insertBefore(avatar, name);

  var feedDiv = document.getElementsByClassName('feed')[0];
  feedDiv.insertBefore(tweetBox, feedDiv.firstChild);

  event.preventDefault();
  txtArea.value = '';
}
