import React from "react";
import ReactStars from "react-rating-stars-component";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <div
          className="bg"
          style={{ background: `url(${props.background})` }}
        ></div>
        <div className="card-header-bottom">
          <div className="tags-wrapper">
            <div className="tags">{props.tags}</div>
          </div>
          <div className="ranking">#{props.ranking}</div>
        </div>
        <div className="rating">
          <p className="rating-title">
            <span>{props.rating}</span> / 5
          </p>
          <p className="rating-remark">{props.ratingRemark}</p>
        </div>
      </div>
      <div className="card-body">
        <div className="main">
          <div className="info">
            <div className="top">
              <span className="title">{props.title}</span>
              <span className="rating-star">
                <ReactStars
                  edit={false}
                  count={5}
                  value={props.star}
                  size={16}
                  activeColor="#44444"
                />
              </span>
            </div>
            <div className="nearest-place">{props.nearestPlace}</div>
            <div className="bottom">
              <span className="percent">93% Match</span>{" "}
              <span>{props.famous}</span>
            </div>
          </div>
          <div className="price">
            <div className="top">
              <span className="original-fees">₹{props.originalFees}</span>
              <span className="discount">{props.discount}</span>
            </div>
            <div className="middle">
              <p className="discounted-fees">₹{props.fees}</p>
              <p className="fees-cycle">{props.cycle}</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="login">
            <span className="offertext">{props.offerText}</span>
          </div>
          <div className="wifi">{props.ameneties}</div>
        </div>
      </div>

      {props.promoted && <div className="promoted">PROMOTED</div>}
    </div>
  );
}

// "college_name": "Hansraj College Delhi University - 1",
// "promoted": true,
// "discount": 20,
// "original_fees": 6000,
// "discounted_fees": 5200,
// "fees_cycle": "Per Semester (3months)",
// "image": "college.png",
// "ranking": "7 in 260 colleges in north campus",
// "tags": ["best colleges in 2018", "2kms away"],
// "amenties": ["Fee cancellation", "Free Wifi"],
// "rating": 4,
// "rating_remarks": "Very Good",
// "famous_nearest_places": "2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk",
// "nearest_place": ["Near Vishwavidyalya Metro Station", "2 Kms away from bus stand"],
// "offertext": "Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "
