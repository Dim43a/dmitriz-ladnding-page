import HoverVideoPlayer from "react-hover-video-player";

export const Workflow = (props) => {
    return (
        <div id='workflow'>
            <h2>Work Flow</h2>
            <div className="about-us-container">
                <div className='container'>
                    <div className='row'>
                        {' '}
                        <div className="workflow-container">

                            <ol>
                                {props.data ?
                                    props.data.map((d, i) => (
                                        <div className='col-md-6 col-md-4'>
                                            <div className="test">
                                                <li></li>
                                                <div className="flow-text">
                                                    <h3>{props.data[i].text}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    )) : "Loading..."}
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
