import { Component } from "../core/heropy";
import messageStore from '../store/message'

export default class TextField extends Component {
  render() {
    this.el.innerHTML = /* html */ `
      <input value="${messageStore.state.message}" />
    `
    const inpuEl = this.el.querySelector('input')
    inpuEl.addEventListener('input', () => {
      messageStore.state.message = inpuEl.value
    })
  }
}