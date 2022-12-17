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
                                    <HoverVideoPlayer
                                        style={{backgroundColor: 'white'}}
                                        videoSrc={d.gif}
                                        pausedOverlay={
                                            <div className="loading-overlay">
                                                <div className="loading-spinner"/>
                                            </div>
                                        }
                                        preload="auto"
                                        muted={true}
                                        typeof="video/mp4"
                                        volume={0}
                                        loop={true}
                                    />
                                    <div className="feature-card-text">
                                        <h3 className="feature-header">{d.title}</h3>
                                        <h4 className="wrapped-text">{d.text}</h4>
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
