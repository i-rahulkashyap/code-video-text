import consumer from "./consumer"

consumer.subscriptions.create("ChatChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    const messages = document.getElementById('messages')
    messages.insertAdjacentHTML('beforeend', data.message)
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const messageForm = document.getElementById('new_message')
  messageForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const messageInput = document.getElementById('message_content')
    const message = messageInput.value
    messageInput.value = ''
    fetch('/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      },
      body: JSON.stringify({ message: { content: message } })
    })
  })
})