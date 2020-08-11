import React from "react";
import { MDBAnimation } from "mdbreact";

const ProductAtas2 = () => {
  return (
      <>
        <figure className="figure col-md-2">
        <MDBAnimation type="bounce" infinite>         
        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg" className="figure-img img-fluid z-depth-1"
            alt="" style={{ width: "400px" }} />
        </MDBAnimation>
        <figcaption className="figure-caption text-right">
            A caption for the above image.
        </figcaption>
        </figure>

        <figure className="figure col-md-2">
        <MDBAnimation type="bounce" infinite>     
        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg" className="figure-img img-fluid z-depth-1"
            alt="" style={{ width: "400px" }} />
        </MDBAnimation>
        <figcaption className="figure-caption text-right">
            A caption for the above image.
        </figcaption>
        </figure>

        <figure className="figure col-md-2">
        <MDBAnimation type="bounce" infinite>         
        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg" className="figure-img img-fluid z-depth-1"
            alt="" style={{ width: "400px" }} />
        </MDBAnimation>
        <figcaption className="figure-caption text-right">
            A caption for the above image.
        </figcaption>
        </figure>
      </>
  );
}

export default ProductAtas2;