import React from "react";
//import format from "date-fns/format";

//import Jumbotron from "./components/jumbotron";
//var React = require('react')
export default class HomePreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));
   return <div>
            <img src='{ getAsset(entry.getIn(["data", "image"]))}' />
            </div>
   }
}