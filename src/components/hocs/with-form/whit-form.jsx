import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Operation as DataOperation} from "../../../reducer/data/data-reducer.js";

const withForm = (Component) => {
  class withFormReviews extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: null,
        review: ``,
        isActiveSubmit: false
      };

      this.onSubmitForm = this.onSubmitForm.bind(this);
      this.onChange = this.onChange.bind(this);
    }

    onSubmitForm() {
      const {uploadReviews, offerId} = this.props;
      const {rating, review} = this.state;
      uploadReviews(rating, review, offerId);
      this.clearState();
    }

    onChange(evt, value) {
      const target = evt.target.name;
      this.setState({[target]: value});
      this.activateForm();
    }

    activateForm() {
      if (this.state.review.length > 49) {
        this.setState((state) =>({isActiveSubmit: !!(state.review && state.rating)}));
      } else {
        this.setState(() =>({isActiveSubmit: false}));
      }
    }

    clearState() {
      this.setState(
          {
            rating: null,
            review: ``,
            isActiveSubmit: false
          }
      );
    }

    render() {
      return (
        <Component
          {...this.props}
          onSubmitForm={this.onSubmitForm}
          isActiveSubmit={this.state.isActiveSubmit}
          onChange={this.onChange}
          rating={this.state.rating}
        />
      );
    }
  }

  const mapStateToProps = () => ({});

  const mapDispatchToProps = (dispatch) => (
    {
      uploadReviews(rating, review, offerId) {

        dispatch(DataOperation.uploadReviews(rating, review, offerId));
      }
    });

  withFormReviews.propTypes = {
    uploadReviews: PropTypes.func,
    offerId: PropTypes.number
  };

  return connect(mapStateToProps, mapDispatchToProps)(withFormReviews);
};

export default withForm;
