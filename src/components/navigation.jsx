import {useEffect, useState} from "react";

export const Navigation = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
            <div className='container'>
                <div className='navbar-header'>
                    <button
                        type='button'
                        className='navbar-toggle collapsed'
                        data-toggle='collapse'
                        data-target='#bs-example-navbar-collapse-1'
                    >
                        {' '}
                        <span className='sr-only'>Toggle navigation</span>{' '}
                        <span className='icon-bar'></span>{' '}
                        <span className='icon-bar'></span>{' '}
                        <span className='icon-bar'></span>{' '}
                        <span className='icon-bar'></span>{' '}
                    </button>
                    <a className='navbar-brand page-scroll' href='#page-top'>
                        veo.pro
                    </a>{' '}
                </div>

                <div
                    className='collapse navbar-collapse'
                    id='bs-example-navbar-collapse-1'
                >
                    <ul className='nav navbar-nav navbar-right'>
                        <li>
                            <a href='#features' className='page-scroll'>
                                Features
                            </a>
                        </li>
                        <li>
                            <a href='#about' className='page-scroll'>
                                About
                            </a>
                        </li>
                        <li>
                            <a href='#workflow' className='page-scroll'>
                                Workflow
                            </a>
                        </li>
                        <li>
                            <a href='#contact' className='action-button'>
                                Get offer
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
