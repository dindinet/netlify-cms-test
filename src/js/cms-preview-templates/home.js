import React from "react";
//import format from "date-fns/format";

//import Jumbotron from "./components/jumbotron";
//var React = require('react')
export default class HomePreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));
   return <div>
     <section id="fp-hero" class="hero is-medium" style={{
    backgroundImage: image && `url(${image})`
  }}>
  <div class="hero-body">
  <div class="container has-text-centered">
   <h2 class="is-size-1">{entry.getIn(["data", "blurb", "heading"])}</h2>
   <h3 class="is-size-2">{entry.getIn(["data", "blurb",  "subheading"])}</h3>
   <h4 class="is-size-3">{entry.getIn(["data", "blurb",  "text"])}</h4>
   </div>
   </div>
 </section> 
 <section id="fp-reasons">
    <div class="container">
  <div class="columns">
      {{ range .Params.reasons }}
    {(entry.getIn(["data","reasons"]) || []).map((reason, index) => <div className="column" key={index}>
       <h3 class="is-size-3 is-uppercase">{reason.get("heading")}</h3>
        <h4 class="is-size-4 is-lowercase">{reason.get("subheading")}</h4>
        <ul>
       {(entry.getIn(["reason","benefits"]) || []).map((benefit, index) =>
            <li key={index}>{benefit.get("benefit")}</li>)}
        </ul>
    </div>)}
     
  </div>
    </div>
</section>     
</div>
   }
}