import HoverVideoPlayer from "react-hover-video-player";

export const Call = () => {
    return (
        <nav id='call' className='call-bar  navbar-fixed-bottom'>
            <div className="video-container">
                <HoverVideoPlayer videoSrc={"images/feature-card-gifs/call.mp4"}/>
            </div>
        </nav>
    )
};
