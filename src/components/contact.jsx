import {useState} from 'react'
import emailjs from 'emailjs-com'

const initialState = {
    name: '',
    email: '',
    message: '',
}
export const Contact = (props) => {
    const [{name, email, message}, setState] = useState(initialState)

    const handleChange = (e) => {
        const {name, value} = e.target
        setState((prevState) => ({...prevState, [name]: value}))
    }
    const clearState = () => setState({...initialState})

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, message)
        emailjs
            .sendForm(
                'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
            )
            .then(
                (result) => {
                    console.log(result.text)
                    clearState()
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }
    return (
            <div id='contact'>
                <h2>Fill the form and get 30% discount</h2>
                <div className="contact-container">
                    <div className='container'>
                        <div className='col-md-12'>
                            <div className='row'>
                                <div className="form-container">
                                    <form name='sentMessage' onSubmit={handleSubmit}>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='form-group'>
                                                    <input
                                                        type='text'
                                                        id='from'
                                                        name='from'
                                                        aria-label='text'
                                                        className='form-control'
                                                        placeholder='From:'
                                                        required
                                                        onChange={handleChange}
                                                    />
                                                    <p className='help-block text-danger'></p>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='form-group'>
                                                    <input
                                                        type='text'
                                                        id='to'
                                                        name='to'
                                                        aria-label='to'
                                                        className='form-control'
                                                        placeholder='To:'
                                                        required
                                                        onChange={handleChange}
                                                    />
                                                    <p className='help-block text-danger'></p>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='form-group'>
                                                    <input
                                                        type='text'
                                                        id='weight'
                                                        name='weight'
                                                        aria-label='weight'
                                                        className='form-control'
                                                        placeholder='Weight'
                                                        onChange={handleChange}
                                                    />
                                                    <p className='help-block text-danger'></p>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='form-group'>
                                                    <input
                                                        type='text'
                                                        id='size'
                                                        name='size'
                                                        aria-label='size'
                                                        className='form-control'
                                                        placeholder='Size m³'
                                                        required
                                                        onChange={handleChange}
                                                    />
                                                    <p className='help-block text-danger'></p>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='form-group'>
                                                    <input
                                                        type='email'
                                                        id='email'
                                                        name='email'
                                                        aria-label='email'
                                                        className='form-control'
                                                        placeholder='Email'
                                                        required
                                                        onChange={handleChange}
                                                    />
                                                    <p className='help-block text-danger'></p>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='form-group'>
                                                    <input
                                                        type='tel'
                                                        id='tel'
                                                        name='tel'
                                                        aria-label='tel'
                                                        className='form-control'
                                                        placeholder='Telephone'
                                                        required
                                                        onChange={handleChange}
                                                    />
                                                    <p className='help-block text-danger'></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='form-group'>
                                          <textarea
                                              name='message'
                                              id='message'
                                              className='form-control'
                                              rows='4'
                                              aria-label='message'
                                              placeholder='Describe your cargo or service'
                                              required
                                              onChange={handleChange}
                                          ></textarea>
                                            <p className='help-block text-danger'></p>
                                        </div>
                                        <div id='success'></div>
                                        <button type='submit' className='btn btn-custom btn-lg'>
                                            Get Offer
                                        </button>
                                    </form>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='social'>
                            <ul>
                                <li>
                                    <p className="blja">
                                            <span>
                                              <i className='fa fa-map-marker'></i>
                                            </span>
                                        {props.data ? props.data.address : 'loading'}
                                    </p>
                                </li>
                                <li>
                                    <p className="blja">
                                            <span>
                                              <i className='fa fa-phone'></i>
                                            </span>{' '}
                                        {props.data ? props.data.phone : 'loading'}
                                    </p>
                                </li>
                                <li>
                                    <p className="blja">
                                            <span>
                                              <i className='fa fa-envelope-o'></i>
                                            </span>{' '}
                                        <a href="mailto:max.veo.pro@gmail.com">{props.data ? props.data.email : 'loading'}</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    )
}
