import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["source"]

  connect() {
    if (document.queryCommandSupported("copy")) {
      this.element.classList.add("clipboard--supported")
    }
  }

  get pin() {
    return this.sourceTarget.value
  }

  copy(event) {
    event.preventDefault()
    this.sourceTarget.select()
    document.execCommand("copy")
  }
}
