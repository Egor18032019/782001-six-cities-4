import React from "react";
import PropTypes from "prop-types";
import {Months} from "../../const.js";

const Reviews = ({review}) => {

  const {user, rating, comment, date} = review;
  const ratingStars = `${rating * 20}%`;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatar_url} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ratingStars}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{Months[new Date(date).getMonth()]} {new Date(date).getFullYear()}</time>
      </div>
    </li>
  );
};

Reviews.propTypes = {
  review: PropTypes.object
};

export default Reviews;
