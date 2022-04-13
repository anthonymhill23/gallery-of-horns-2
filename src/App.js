import React, { Component } from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import data from './provided.json'
import SelectedBeast from './modal.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      selectedBeast: {},
      favorite: 0,
      search: "",
      hornSelected: ""
    }
  }

  openModal = (selectedBeast, favorite) => {
    this.setState({ showModal: true, selectedBeast: selectedBeast, favorite: favorite })
  }

  closeModal = _ => {
    this.setState({ showModal: false })
  }

  onchange = (event) => {
    const searching = event.target.value.toLowerCase();
    this.setState({ search: searching });
  }

  onchangetwo = (event) => {
    this.setState({ hornSelected: event.target.value });
  }

  render() {
    return (
      <div>
        <Header onchange={this.onchange} onchangetwo={this.onchangetwo} />
        <Main data={data} modalTrue={this.openModal} searchData={this.state.search} hornSelected={this.state.hornSelected} />
        <Footer />
        <SelectedBeast showModal={this.state.showModal} closeModal={this.closeModal} selectedBeast={this.state.selectedBeast} favorite={this.state.favorite} />
      </div>
    )
  }
}