import React, { Component } from "react";
import { MDBNavItem, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,  MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from "mdbreact";
import './navbar.css';
// import {Link} from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (

    <>
        <div>
            <div className="row">
              <div className="col-md-12">
                  <ul className="list">
                    <div className="row justify-content-center">
                      <div className="col-1">
                        <a>Garansi 1 tahun </a>
                      </div>
                      <div className="col-1">
                        <a>Gratis Ongkir</a>
                        </div>
                        <div className="col-1">
                        <a>Produk Original</a>
                        </div>
                    </div>
                  </ul>
              </div>
            </div>
        </div>
    
        <div>
          
        </div>
    
    
    <div className="container mt-3">
    <MDBCarousel
        activeItem={3}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://s-ecom.ottenstatic.com/original/5dbb5c0061e8b137415664.jpg"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://s-ecom.ottenstatic.com/original/5da965ef55618257866048.jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://s-ecom.ottenstatic.com/original/5d95ad6d42b04995068293.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>

    </div>

    </>
    );
  }
}

export default NavbarPage;