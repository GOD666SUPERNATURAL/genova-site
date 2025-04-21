
document.getElementById('chat-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const input = this.value.trim();
    if (!input) return;
    const messages = document.getElementById('chat-messages');
    const userMsg = document.createElement('div');
    userMsg.className = 'msg user';
    userMsg.innerText = input;
    messages.appendChild(userMsg);
    this.value = '';

    const botMsg = document.createElement('div');
    botMsg.className = 'msg bot';
    botMsg.innerText = 'Ответ появится здесь (подключим позже 🤖)';
    messages.appendChild(botMsg);
    messages.scrollTop = messages.scrollHeight;
  }
});
