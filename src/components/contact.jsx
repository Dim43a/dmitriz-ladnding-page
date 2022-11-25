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
        <div>
            <div id='contact'>
                <div className='container'>
                    <div className='col-md-8'>
                        <div className='row'>
                            <div className='section-title'>
                                <h2>Fill the form and get 30% discount</h2>
                                <p>
                                    Please fill out the form below to send us an email and we will
                                    get back to you as soon as possible.
                                </p>
                            </div>
                            <form name='sentMessage' onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input
                                                type='text'
                                                id='from'
                                                name='from'
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
                                                className='form-control'
                                                placeholder='Size m³'
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className='help-block text-danger'></p>
                                        </div>
                                    </div>
                                    {/*<div className='col-md-6'>*/}
                                    {/*  <div className='form-group'>*/}
                                    {/*    <input*/}
                                    {/*      type='text'*/}
                                    {/*      id='name'*/}
                                    {/*      name='name'*/}
                                    {/*      className='form-control'*/}
                                    {/*      placeholder='Name'*/}
                                    {/*      required*/}
                                    {/*      onChange={handleChange}*/}
                                    {/*    />*/}
                                    {/*    <p className='help-block text-danger'></p>*/}
                                    {/*  </div>*/}
                                    {/*</div>*/}
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input
                                                type='email'
                                                id='email'
                                                name='email'
                                                className='form-control'
                                                placeholder='Email'
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className='help-block text-danger'></p>
                                        </div>
                                    </div>
                                    {/*<div className='col-md-6'>*/}
                                    {/*  <div className='form-group'>*/}
                                    {/*    <input*/}
                                    {/*        type='date'*/}
                                    {/*        id='date'*/}
                                    {/*        name='date'*/}
                                    {/*        className='form-control'*/}
                                    {/*        placeholder='Date'*/}
                                    {/*        required*/}
                                    {/*        onChange={handleChange}*/}
                                    {/*    />*/}
                                    {/*    <p className='help-block text-danger'></p>*/}
                                    {/*  </div>*/}
                                    {/*</div>*/}
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input
                                                type='tel'
                                                id='tel'
                                                name='tel'
                                                className='form-control'
                                                placeholder='Telephone'
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className='help-block text-danger'></p>
                                        </div>
                                    </div>
                                    {/*<div className='col-md-6'>*/}
                                    {/*  <div className='form-group'>*/}
                                    {/*    <select id="service" name="service" className='form-control'>*/}
                                    {/*      <option value="" disabled selected>Pick a service</option>*/}
                                    {/*      <option value="moving">Moving</option>*/}
                                    {/*      <option value="garbage">Garbage removal</option>*/}
                                    {/*      <option value="furniture">Furniture delivery</option>*/}
                                    {/*      <option value="fragile">Fragile delivery</option>*/}
                                    {/*      <option value="huge">Heavy load</option>*/}
                                    {/*      <option value="other">Other</option>*/}
                                    {/*    </select>*/}
                                    {/*  </div>*/}
                                    {/*</div>*/}
                                </div>
                                <div className='form-group'>
                  <textarea
                      name='message'
                      id='message'
                      className='form-control'
                      rows='4'
                      placeholder='Describe your cargo or service'
                      required
                      onChange={handleChange}
                  ></textarea>
                                    <p className='help-block text-danger'></p>
                                </div>
                                <div id='success'></div>
                                <button type='submit' className='btn btn-custom btn-lg'>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='col-md-3 col-md-offset-1 contact-info'>
                        <div className='contact-item'>
                            <h3>Contact Info</h3>
                            <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                                {props.data ? props.data.address : 'loading'}
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                                {props.data ? props.data.phone : 'loading'}
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                                {props.data ? props.data.email : 'loading'}
                            </p>
                        </div>
                    </div>
                    {/*<div className='col-md-12'>*/}
                    {/*  <div className='row'>*/}
                    {/*    <div className='social'>*/}
                    {/*      <ul>*/}
                    {/*        <li>*/}
                    {/*          <a href={props.data ? props.data.facebook : '/'}>*/}
                    {/*            <i className='fa fa-facebook'></i>*/}
                    {/*          </a>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*          <a href={props.data ? props.data.twitter : '/'}>*/}
                    {/*            <i className='fa fa-twitter'></i>*/}
                    {/*          </a>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*          <a href={props.data ? props.data.youtube : '/'}>*/}
                    {/*            <i className='fa fa-youtube'></i>*/}
                    {/*          </a>*/}
                    {/*        </li>*/}
                    {/*      </ul>*/}
                    {/*    </div>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                </div>
            </div>
            {/*<div id='footer'>*/}
            {/*  <div className='container text-center'>*/}
            {/*    <p>*/}
            {/*      &copy; 2020 Issaaf Kattan React Land Page Template. Design by{' '}*/}
            {/*      <a href='http://www.templatewire.com' rel='nofollow'>*/}
            {/*        TemplateWire*/}
            {/*      </a>*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*</div>*/}
        </div>
    )
}
