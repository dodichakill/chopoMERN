import React, { Component } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import landingPageJson from "json/landingPage.json";
export default class landingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero data={landingPageJson.hero} />
      </>
    );
  }
}
