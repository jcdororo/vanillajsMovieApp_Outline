import { Component } from './core/heropy.js'

export default class App extends Component {
  constructor() {
    super({
      tagName: 'h1'
    })
  }
  render() {
    this.el.textContent = 'Hello, world!'
  }
}