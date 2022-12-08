import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/all";

export const GalleryS = () => {
    return (
        <div id='portfolio'>
            <div className="carousel-wrapper">
                <h2>Gallery</h2>
                <div className="row">
                    <div className='section-title'>
                    </div>
                    <div className="col-md-12">
                        <Carousel
                            renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                            hasPrev && (
                                <button onClick={clickHandler} className="prev-button-arrow">
                                    <AiFillCaretLeft/>
                                </button>
                            )
                        }
                                  renderArrowNext={(clickHandler, hasNext, labelNext) =>
                                      hasNext && (
                                          <button onClick={clickHandler} className="next-button-arrow">
                                              <AiFillCaretRight/>
                                          </button>
                                      )
                                  }
                            // renderThumbs={() => null}
                                  showStatus={false}
                                  infiniteLoop={true}
                                  swipeable={true}
                        >
                            <div className="carousel-image">
                                <img
                                    src="https://media-be.chewy.com/wp-content/uploads/2021/05/27140116/Pug_FeaturedImage.jpg"/>
                            </div>
                            <div>
                                <img
                                    src="https://media-be.chewy.com/wp-content/uploads/2021/05/27140116/Pug_FeaturedImage.jpg"/>

                            </div>
                            <div>
                                <img
                                    src="https://media-be.chewy.com/wp-content/uploads/2021/05/27140116/Pug_FeaturedImage.jpg"/>
                            </div>
                            <div>
                                <img
                                    src="https://media-be.chewy.com/wp-content/uploads/2021/05/27140116/Pug_FeaturedImage.jpg"/>
                            </div>
                            <div>
                                <img
                                    src="https://media-be.chewy.com/wp-content/uploads/2021/05/27140116/Pug_FeaturedImage.jpg"/>
                            </div>
                            <div>
                                <img
                                    src="https://media-be.chewy.com/wp-content/uploads/2021/05/27140116/Pug_FeaturedImage.jpg"/>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}
