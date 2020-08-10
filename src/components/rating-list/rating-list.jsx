import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {ratingList} from "../../const.js";

const RatingList = ({rating, onChange}) => {
  return (
    <div className="reviews__rating-form form__rating">
      {ratingList.map((elem) => {
        return (
          <Fragment key={elem.value}>
            <input className="form__rating-input visually-hidden" name="rating" value={elem.value} id={`${elem.value}-stars`} type="radio" checked= {rating === String(elem.value)}
              onChange={(evt) => {
                onChange(evt, evt.target.value);
              }} />
            <label htmlFor={`${elem.value}-stars`} className="reviews__rating-label form__rating-label" title={elem.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        );
      })}
    </div>
  );
};

RatingList.propTypes = {
  rating: PropTypes.string,
  onChange: PropTypes.func
};

export default RatingList;
