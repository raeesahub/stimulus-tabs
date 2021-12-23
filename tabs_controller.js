import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "tab", "tabContent" ]

  connect() {
    this.displayContent()
  }

  switch() {
    this.toggleActiveClass()
    this.displayContent()
  }

  toggleActiveClass() {
    this.tabTargets.forEach(tab => {
      tab.classList.toggle('active', tab === event.currentTarget)
    })
  }

  displayContent() {
    this.tabTargets.forEach((tab, index) => {
      const content = this.tabContentTargets[index]
      if (!tab.classList.contains('active')) {
        content.hidden = true
      } else {
        content.hidden = false
      }
    })
  }
}
