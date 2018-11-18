import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["slide"]

  get slides() {
    return this.slideTargets
  }

  get activeSlide() {
    return this.slides.find(slide => slide.classList.contains('slide--current'))
  }

  get index() {
    return parseInt(this.data.get('index')) || 0
  }

  set index(value) {
    this.data.set('index', value)
  }

  initialize() {
    this.showSlide()
  }

  onFirstSlide() {
    return this.index === 0
  }

  onLastSlide() {
    return this.index === this.slides.length - 1
  }

  next() {
    this.index = this.onLastSlide() ? 0 : this.index + 1
    this.showSlide()
  }

  previous() {
    this.index = this.onFirstSlide() ? this.slides.length - 1 : this.index - 1
    this.showSlide()
  }

  showSlide() {
    this.slides.forEach((slide, i) => slide.classList.toggle('slide--current', this.index === i))
  }
}
