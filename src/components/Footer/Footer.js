import React from "react";
import Tostada from "../../pages/Tostada";
import Popover from "../../components/popover/Popover"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


function Footer() {
  return (
    <MDBFooter  className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
           <Tostada />
          </MDBCol>
          <MDBCol md="6" >
              <a href="#top">To the top!</a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
    
   
   
  );
}

export default Footer;
