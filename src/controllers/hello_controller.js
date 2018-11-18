import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["name"]

  get name() {
    return this.nameTarget.value
  }

  greet() {
    console.log(`Whatup ${this.name}!`)
  }
}
