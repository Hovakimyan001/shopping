import React from 'react'

export default function Contact() {
    return (
        <div className="form-cont">
            <div className='form'>
                <h2>Registration</h2>
                <div className="name-label">
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Surname' />
                </div>
                <input type="text" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Confirm Password' />
                <a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ullam, quos alias facere deleniti.</a>
                <div className='gender'>
                    <label htmlFor="">Male<input type="radio" name='gender'  className='gender-block'/></label>
                    <label htmlFor="">Female<input type="radio" name='gender' className='gender-block' /></label>
                </div>
                <div className="agree">
                    <input type="checkbox" />
                    <p>I agree for this license</p>
                </div>
                <button>SIGN</button>
            </div>
        </div>
    )
}
