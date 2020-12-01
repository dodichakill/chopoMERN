import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";

import landingPageJson from "json/landingPage.json";
export default class landingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPageJson.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPageJson.mostPicked}
        />
        <Categories data={landingPageJson.categories} />
        <Testimony data={landingPageJson.testimonial} />
      </>
    );
  }
}
