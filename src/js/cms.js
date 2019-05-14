import React from "react";
import CMS from "netlify-cms";

import HomePreview from "./cms-preview-templates/home.js";
import PostPreview from "./cms-preview-templates/post";
import ContactPreview from "./cms-preview-templates/contact";
import GetStartedPreview from "./cms-preview-templates/get-started";
import RecentWorkPreview from "./cms-preview-templates/recent-work";
import WhyCloudHostedPreview from "./cms-preview-templates/why-cloud-hosted";


// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return <input
      style={{height: "80px"}}
      type="color"
      value={this.props.value}
      onInput={(e) => this.props.onChange(e.target.value)}
    />;
  }
}


CMS.registerPreviewStyle("/css/styles.css");
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerPreviewTemplate("get-started", GetStartedPreview);
CMS.registerPreviewTemplate("recent-work", RecentWorkPreview);
CMS.registerPreviewTemplate("why-cloud-hosted", WhyCloudHostedPreview);
CMS.registerWidget("color", ColorControl);
