import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["source"]

  connect() {
    this.load()
    if (this.data.has('refreshInterval')) {
      this.startRefreshing()
    }
  }

  disconnect() {
    this.stopRefreshing()
  }

  get url() {
    return this.data.get('url')
  }

  get refreshInterval() {
    return this.data.get('refreshInterval')
  }

  load() {
    fetch(this.url)
      .then(response => response.text())
      .then(html => this.element.innerHTML = html)
  }

  startRefreshing() {
    this.refreshTimer = setInterval(() => { this.load() }, this.refreshInterval)
  }

  stopRefreshing() {
    if (this.refreshTimer) clearInterval(this.refreshTimer)
  }
}
