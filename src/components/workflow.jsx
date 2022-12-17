
export const Workflow = (props) => {
    return (
        <div id='workflow'>
            <h2>How to get service ?</h2>
            <div className="workflow-container">
                <div className='container'>
                    <div className='row'>
                        {' '}
                            <ol>
                                {props.data ?
                                    props.data.map((d, i) => (
                                        <div className='col-md-6 col-md-4'>
                                            <div className="workflow-item">
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
    )
}
