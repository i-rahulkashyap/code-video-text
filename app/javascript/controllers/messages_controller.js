import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["form", "input", "messages"]

  connect() {
    this.scrollToBottom()
  }

  scrollToBottom() {
    this.messagesTarget.scrollTop = this.messagesTarget.scrollHeight
  }

  submit(event) {
    event.preventDefault()
    const form = event.target

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        "Accept": "text/vnd.turbo-stream.html",
        "X-Requested-With": "XMLHttpRequest"
      },
      credentials: 'same-origin'
    }).then(response => {
      if (response.ok) {
        this.inputTarget.value = ''
        this.scrollToBottom()
      }
    })
  }
}