import React from "react";
import Button from "../Forms/button";
import "./ImageLinkForm.css";

const ImageLinkForm = ({
  title,
  onInputChange,
  onUploadFileHandler,
  onPictureSubmit,
  errors,
  loading
}) => {
  return (
    <div>
      <p className="f3">{title}</p>
      {errors && (
        <div className="br2 pa1 ma1 red" style={{ fontSize: "x-large" }}>
          {errors}
        </div>
      )}
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            placeholder="Put image url"
            onChange={onInputChange}
          />
          <input
            type="file"
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onChange={onUploadFileHandler}
          />
          <Button
            value="Detect"
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            action={onPictureSubmit}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;


// uploadFileHandler

// import React, { Component } from "react";
// import Button from "../Forms/button";
// import "./ImageLinkForm.css";

// class ImageLinkForm extends Component {
//   state = { image: "" };

//   toBase64 = file =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = error => reject(error);
//     });

//   uploadFileHandler =( event, callback )=> {
//     this.toBase64(event.target.files[0])
//       .then(result => this.setState({image: result.substring(23)}))
//       .catch(err => console.log(err));
//   };
//   render() {
//     console.log(this.state)
//     return (
//       <div>
//         <p className="f3">{this.props.title}</p>
//         {this.props.errors && (
//           <div className="br2 pa1 ma1 red" style={{ fontSize: "x-large" }}>
//             {this.props.errors}
//           </div>
//         )}
//         <div className="center">
//           <div className="center form pa4 br3 shadow-5">
//             <input
//               className="f4 pa2 w-70 center"
//               type="text"
//               placeholder="Put image url"
//               // onChange={this.props.onInputChange}
//             />
//             <input
//               type="file"
//               className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
//               onChange={this.uploadFileHandler}
//             />
//             <Button
//               value="Detect"
//               className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
//               action={this.props.onPictureSubmit}
//               loading={this.props.loading}
//             />
//           </div>
//         </div>
//         <img src={"data:image/jpeg;base64," + this.state.image} alt="" />
//       </div>
//     );
//   }
// }

// export default ImageLinkForm;
