import React from "react";

const Detail = ({colorName}) => <div style={{
  backgroundColor: colorName || 'white',
}}>Detail here : color is {colorName}</div>;

export default Detail;
