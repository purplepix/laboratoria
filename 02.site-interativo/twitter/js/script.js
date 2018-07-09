window.onload = tweet();

function tweet() {
  var button = document.getElementsByTagName('button')[0];
  var txtArea = document.getElementsByTagName('textarea')[0];
  var message = txtArea.value;

  window.onload = (button.disabled = true);

  txtArea.addEventListener('input', countCharacters);
  button.addEventListener('click', addMessageToFeed);
}

function countCharacters() {
  var button = document.getElementsByTagName('button')[0];
  var message = document.getElementsByTagName('textarea')[0].value;
  var leftCharacters = 140 - message.length;
  var counter = document.getElementById('counter');
  counter.innerHTML = leftCharacters;

  if (message.length > 0 && message.trim() !== '' && message.length <= 140) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

function addMessageToFeed() {
  var txtArea = document.getElementsByTagName('textarea')[0];
  var message = txtArea.value;

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

  var tweetBox = document.createElement('div');
  tweetBox.className = 'tweet';

  tweetBox.appendChild(tweetMessage);
  tweetBox.insertBefore(username, tweetMessage);
  tweetBox.insertBefore(name, username);
  tweetBox.insertBefore(avatar, name);

  var feedDiv = document.getElementsByClassName('feed')[0];
  feedDiv.insertBefore(tweetBox, feedDiv.firstChild);

  event.preventDefault();
  txtArea.value = '';
  document.getElementById('counter').innerHTML = 140;
  counter.removeAttribute('class');
  document.getElementsByTagName('button')[0].disabled = true;
  txtArea.style.height = '50px';
}
