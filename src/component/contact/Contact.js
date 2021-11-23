import React from 'react'
import './Contact.css'
import '../../MediaQuary.css'

export const Contact = () => {
    return (
        <main>
            <div className='container'>
                <div className='mainBody'>
                    <div className='headerBody'>
                        <h1>GET IN <span>TOUCH</span> </h1>
                    </div>
                    <div className='secondSectionContact'>
                        <div className='leftSecContact'>
                            <h1> DON'T BE SHY!</h1>
                            <p>
                                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                            <div className='address'>
                                <div className='icon'>
                                    <i class="fa fa-map "></i>
                                </div>
                                <div>
                                    <h3>ADDRESS POINT</h3>
                                    <p>
                                        D-401, Raj Shailee-2, Mota Varachha, Surat
                                    </p>
                                </div>
                            </div>
                            <div className='address'>
                                <div className='icon'>
                                    <i class="fa fa-envelope-open position-absolute"></i>
                                </div>
                                <div>
                                    <h3>MAIL ME</h3>
                                    <p>maheshmaniya1997@gmail.com</p>
                                </div>
                            </div>
                            <div className='address'>
                                <div className='icon'>
                                    <i class="fa fa-phone-square position-absolute"></i>
                                </div>
                                <div>
                                    <h3>CALL ME</h3>
                                    <p>7202994077</p>
                                </div>
                            </div>
                        </div>
                        <div className='rightSecContact'>
                            <div className='firstLine'>
                                <input placeholder='Enter Your Name' />
                                <input placeholder='Enter Your Email' />
                            </div>
                            <div className='secondLine'>
                                <input placeholder='what is your subject?' />
                            </div>
                            <div className='thirdLine'>
                                <textarea />
                            </div>
                        </div>
                    </div>
                    <div className='lastDiv'>
                        <ul>
                            <li><a href='https://www.linkedin.com/in/mahesh-maniya-70a38a135/' target="_blank" > <i class="fa fa-linkedin" /></a></li>
                            <li><a href="https://www.facebook.com/" target="_blank" ><i class="fa fa-facebook"></i></a></li>
                            <li><a href="https://www.facebook.com/" target="_blank" ><i class="fa fa-twitter"></i></a></li>
                        </ul>
                        <div className='btnDiv'>
                            <button>Send Me
                                <span><i className="fas fa-arrow-right"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
