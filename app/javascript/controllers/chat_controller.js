import consumer from "./consumer"

consumer.subscriptions.create("ChatChannel", {
  connected() {
    console.log("Connected to ChatChannel")
  },

  disconnected() {
    console.log("Disconnected from ChatChannel")
  },

  received(data) {
    console.log("Received data:", data)
    const messagesContainer = document.querySelector("#messages")
    if (messagesContainer) {
      messagesContainer.insertAdjacentHTML('beforeend', data.html)
      messagesContainer.scrollTop = messagesContainer.scrollHeight
    } else {
      console.error("Messages container not found")
    }
  }
})