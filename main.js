const form = document.getElementById('messageForm');
const messagesContainer = document.getElementById('messagesContainer');

const messages = JSON.parse(localStorage.getItem('messages')) || [];

function renderMessages() {
  messagesContainer.innerHTML = '';
  messages.forEach(msg => {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `
      <div class="username">${msg.username}</div>
      <div class="body">${msg.body}</div>
    `;
    messagesContainer.appendChild(div);
  });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const body = document.getElementById('messageBody').value.trim();

  if (username && body) {
    const newMessage = { username, body };
    messages.push(newMessage);
    localStorage.setItem('messages', JSON.stringify(messages));
    renderMessages();
    form.reset();
  }
});

renderMessages();
