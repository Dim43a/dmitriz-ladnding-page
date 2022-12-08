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
                                        videoSrc={d.img}
                                        loadingOverlay={
                                            <div className="loading-overlay">
                                                <div className="loading-spinner" />
                                            </div>
                                        }
                                    />
                                    <div className="feature-card-text">
                                        <h3 className="blja2">{d.title}</h3>
                                        <p className="blja">{d.text}</p>
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
