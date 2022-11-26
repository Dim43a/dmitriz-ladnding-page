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
                                    <i className={d.icon}></i>
                                    <div className="feature-card-text">
                                        <h3>{d.title}</h3>
                                        <p>{d.text}</p>
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
