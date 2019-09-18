import React from "react";
import Form from "./../Forms/form";
import { countersLabels, classRightАlignment } from "./profileConstants";

class EntryCount extends Form {
  state = {};
  render() {
    const { entries, face, apparel, food, general, colorEntries } = this.props;
    return (
      <div className="right">
        {this.renderField(entries, countersLabels.total, classRightАlignment)}
        {this.renderField(face, countersLabels.face, classRightАlignment)}
        {this.renderField(food, countersLabels.food, classRightАlignment)}
        {this.renderField(apparel, countersLabels.apparel, classRightАlignment)}
        {this.renderField(general, countersLabels.general, classRightАlignment)}
        {this.renderField(colorEntries, countersLabels.color, classRightАlignment)}
      </div>
    );
  }
}

export default EntryCount;
