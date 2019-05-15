import React from "react";
//import format from "date-fns/format";

//import Jumbotron from "./components/jumbotron";
//var React = require('react')
export default class WhyCloudHostedPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));
   return <div>
     <section id="fp-hero" class="hero is-medium" style={{
    backgroundImage: image && `url(${image})`
  }}>
  <div class="hero-body">
  <div class="container has-text-centered">
   <h2 class="is-size-1">{entry.getIn(["data", "heading"])}</h2>
   </div>
   </div>
 </section> 

<div id="fp-content">{ widgetFor("body") }</div>    
</div>
   }
}