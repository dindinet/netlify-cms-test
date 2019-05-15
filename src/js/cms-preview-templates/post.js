import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
    render() {
      const {entry, widgetFor, getAsset} = this.props;
      let image = getAsset(entry.getIn(["data", "image"]));
     return <div>
       <section id="fp-hero" class="hero is-medium" style={{
      backgroundImage: image && `url(${image})`
    }}>
    <div class="hero-body">
    <div class="container has-text-centered">
     <h2 class="is-size-1">{entry.getIn(["data", "title"])}</h2>
     </div>
     <p>{ format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY") }</p>
        <p>Read in x minutes</p>
     </div>
   </section> 
  
  <div id="fp-content">{ widgetFor("body") }</div>    
  </div>
     }
  }