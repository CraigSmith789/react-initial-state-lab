// your ImageSlider code here!
import React from 'react';
class ImageSlider extends React.Component {

  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }
  render(){
   const CURRENT_SLIDE = this.state.currentSlideIndex;
    return <div>
      <h3>I am on slide {CURRENT_SLIDE}</h3>
    </div>
  }


}
export default ImageSlider;
