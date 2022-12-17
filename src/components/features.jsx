import HoverVideoPlayer from "react-hover-video-player";

export const Features = (props) => {
    return (
        <div id='features' className='text-center'>
            <div className='container'>
                <div className='section-title'>
                    <h2>Features</h2>
                </div>
                <div className='row'>
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.title}-${i}`} className='col-md-4'>
                                <div className="feature-card">
                                    {' '}
                                    <div className="abs">

                                    <HoverVideoPlayer
                                        videoSrc={d.gif}
                                        muted={true}
                                        volume={0}
                                        />
                                    </div>
                                    <div className="feature-card-text">
                                        <h3 className="feature-header">{d.title}</h3>
                                        <p className="wrapped-text">{d.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                        : 'Loading...'}
                </div>
            </div>
        </div>
    )
}
