import React from "react";
import ReactDOM from "react-dom";
import DetailApp from 'detail/Detail';
import HeaderApp from 'header/HeaderCustom';
const Home = () => <div>
  <h1 style={{backgroundColor: 'CornflowerBlue'}}>Home</h1>
  HOME here With Other Modules below:
  <br />
  <DetailApp colorName="Coral"/>
  <br />
  <HeaderApp/>
  <br />
</div>;

export default Home