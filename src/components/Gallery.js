import React, { useState } from "react";

const Gallery = () => {
  const img1 =
    "https://image.cnbcfm.com/api/v1/image/106429544-1583520556948gemera_exterior_5_high.jpg?v=1583520680&w=1600&h=900";

  const img2 =
    "https://images.livemint.com/img/2021/05/30/1600x900/2021-05-25T153718Z_1400945490_RC23NN98S6VM_RTRMADP_3_VOLKSWAGEN-LAMBORGHINI_1622351297870_1622351416573.JPG";
  const img3 =
    "https://www.thesupercarblog.com/wp-content/uploads/2020/07/Lamborghini-Sian-Roadster-4.jpg";
  const img4 =
    "https://assets.whichcar.com.au/image/upload/s--YXxVlLGH--/ar_1.9047619047619047,c_fill,f_auto,q_auto:good/c_scale,w_1200/v1/archive/whichcar/2020/02/28/-1/Rare-supercars-Amelia-Island-auction.jpg";

  const [mainImg, setMainImg] = useState(img3);

  return (
    <div className="container">
      <img className="img-fluid" src={mainImg} alt="" />

      <div className="row mt-5">
        <div className="col-md-3">
          <img
            className="img-fluid"
            src={img1}
            alt=""
            onMouseEnter={() => {
              setMainImg(img1);
            }}
          />
        </div>
        <div className="col-md-3">
          <img
            className="img-fluid"
            src={img2}
            alt=""
            onMouseEnter={() => {
              setMainImg(img2);
            }}
          />
        </div>
        <div className="col-md-3">
          <img
            className="img-fluid"
            src={img3}
            alt=""
            onMouseEnter={() => {
              setMainImg(img3);
            }}
          />
        </div>
        <div className="col-md-3">
          <img
            className="img-fluid"
            src={img4}
            alt=""
            onMouseEnter={() => {
              setMainImg(img4);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
