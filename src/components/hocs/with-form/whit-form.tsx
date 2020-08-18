import * as React from "react";
import {connect} from "react-redux";
import {Subtract} from "utility-types";

import {Operation as DataOperation} from "../../../reducer/data/data-reducer";

 interface InjectingProps  {
    uploadReviews: ()=>{},
    offerId: number
 }
interface State {
  rating: number | null,
  review: string | null,
  isActiveSubmit: boolean
}


const withForm = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;
  class withFormReviews extends React.PureComponent <T,State>{
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

    onChange(evt, value:any) {
      console.log(value);
      let target = evt.target.name;
      if(target=`review`){
        this.setState({review: value});
      }
      else {
        this.setState({rating: value});
      }
      console.log(target);
      this.activateForm();
      console.log(this.state)
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

  return connect(mapStateToProps, mapDispatchToProps)(withFormReviews);
};

export default withForm;
