
import React from "react";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

// reactstrap components
import { Card, Container, Row } from "reactstrap";

// core components
import Header from "components/Headers/Header.jsx";
// mapTypeId={google.maps.MapTypeId.ROADMAP}
const MapWrapper = withScriptjs(
 
);

class Maps extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
      
      
      </>
    );
  }
}

export default Maps;
