import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const {image, title, subtitle, text} = this.props;
    return <div>
<section id="fp-hero" class="hero is-medium" style={{backgroundImage: image && `url(${image});background-size: cover; background-position: center center;`}}>
  <div class="hero-body">
     <div class="container has-text-centered">
   <h2 class="is-size-1">{ title }</h2>
   <h3 class="is-size-2">{ subtitle }</h3>
   <h4 class="is-size-3">{ text }</h4>
     </div>
   </div>
 </section>
</div>;
  }
}
