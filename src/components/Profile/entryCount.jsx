import React from "react";
import Form from "./../Forms/form";

class EntryCount extends Form {
  state = {};
  render() {
    const { entries, face, apparel, food, general, colorEntries } = this.props;
    return (
      <div className="right">
        {this.renderField(entries, "Total Recognition", "right-box")}
        {this.renderField(face, "Face Recognition", "right-box")}
        {this.renderField(food, "Food Recognition", "right-box")}
        {this.renderField(apparel, "Apparel Recognition", "right-box")}
        {this.renderField(general, "General Recognition", "right-box")}
        {this.renderField(colorEntries, "Color Recognition", "right-box")}
      </div>
    );
  }
}

export default EntryCount;
