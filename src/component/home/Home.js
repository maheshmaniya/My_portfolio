import React, { useState } from 'react'
import './Home.css'
import '../../MediaQuary.css'

export const Home = () => {
    const [model, setModel] = useState(false)
    return (
        <main >
            <div className='container'>
                <div className='home'>
                    <div className='content'>
                        <div className='leftSection'>
                            <h1>I,M MAHESH MANIYA </h1>
                            <div className='subTitle'>
                                <h2>MERN Stack developer</h2>
                                <h2>At DIgnizant Technology.</h2>
                            </div>
                            <div className='introduction'>
                                <p>I’m a Front-End Developer located in India. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                                </p>
                            </div>
                            <div className='squre'>
                                <img src='Image/shape4.png' />
                            </div>
                            <div className='btnDiv'>
                                <button onClick={() => setModel(true)}>More about Me
                                    <span><i className="fas fa-arrow-right"></i></span>
                                </button>
                                {/* <button className="button-icon fa fa-arrow-right"></button> */}
                            </div>
                        </div>
                        <div className='rightSection'>
                            <div className='rectangle'>
                                <img src='Image/shape1.png' />
                            </div>
                            <div className='circle'>
                                <img src='Image/shape2.png' />
                            </div>
                            <div className='personalImg'>
                                <img src='Image/download.jpeg' />
                            </div>
                        </div>
                    </div>
                </div>

                {model && <div className="modal">
                    <div className="modalContaint">
                        <div className="modalHeader">
                            <div className='closeBtn'>
                                <button onClick={() => {
                                    setModel(false)
                                    console.log("wsfswfw");
                                }}><i className="fas fa-times" />
                                </button>
                                <div className='title'>
                                    <h1>ABOUT <span>ME</span></h1>
                                </div>
                            </div>
                        </div>
                        <div className="modalBody">
                            <div className='sectionMain'>
                                <div className='leftSec'>
                                    <div>
                                        <h1>PERSONAL INFO</h1>
                                    </div>
                                    <div className='contentData'>
                                        <div>
                                            <ul>
                                                <li>First Name : <span
                                                > Mahesh</span></li>
                                                <li>Age : <span
                                                > 23</span></li>
                                                <li>Freelance : <span
                                                > Available</span></li>
                                                <li>Phone : <span
                                                > +917202994077</span></li>
                                                <li>Skype : <span
                                                > mahesh.maniya</span></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li>Last Name : <span
                                                > Maniya</span></li>
                                                <li>Nationality : <span
                                                > Indian</span></li>
                                                <li>Address : <span
                                                > Surat</span></li>
                                                <li>Email : <span
                                                > Maheshmaniya@gmail.com</span></li>
                                                <li>Languages : <span
                                                > English, Hindi</span></li>
                                            </ul>

                                        </div>

                                    </div>
                                </div>
                                <div className='rightSec'>
                                    <div className='firstDiv'>
                                        <div className='contentDiv'>
                                            <h3>4+</h3>
                                            <div className='data'>
                                                <p>YEARS OF EXPERIENCE</p>
                                            </div>
                                        </div>
                                        <div className='contentDiv'>
                                            <h3>4+</h3>
                                            <div className='data'>
                                                <p>COMPLATED PROJECT</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='secondDiv'>
                                        <div className='contentDiv'>
                                            <h3>4+</h3>
                                            <div className='data'>
                                                <p>HAPPY <br /> CLIENT</p>
                                            </div>
                                        </div>
                                        <div className='contentDiv'>
                                            <h3>4+</h3>
                                            <div className='data'>
                                                <p>AWARDS <br /> WON</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='secondSection'>
                                <div className='secondTitle'>
                                    <h1>MY Skills</h1>
                                </div>
                                <div className='skill'>
                                    <div className="card">
                                        <div className="box">
                                            <div className="percent">
                                                <svg>
                                                    <circle cx="70" cy="70" r="70"></circle>
                                                    <circle className='Html' cx="70" cy="70" r="70"></circle>
                                                </svg>
                                                <div className="number">
                                                    <h2>70<span>%</span></h2>
                                                </div>
                                            </div>
                                            <h2 className="text">Html</h2>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="box">
                                            <div className="percent">
                                                <svg>
                                                    <circle cx="70" cy="70" r="70"></circle>
                                                    <circle className='JavaScript' cx="70" cy="70" r="70"></circle>
                                                </svg>
                                                <div className="number">
                                                    <h2>70<span>%</span></h2>
                                                </div>
                                            </div>
                                            <h2 className="text">JavaScript</h2>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="box">
                                            <div className="percent">
                                                <svg>
                                                    <circle cx="70" cy="70" r="70"></circle>
                                                    <circle className='Css' cx="70" cy="70" r="70"></circle>
                                                </svg>
                                                <div className="number">
                                                    <h2>60<span>%</span></h2>
                                                </div>
                                            </div>
                                            <h2 className="text">Css</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='skill'>
                                    <div className="card">
                                        <div className="box">
                                            <div className="percent">
                                                <svg>
                                                    <circle cx="70" cy="70" r="70"></circle>
                                                    <circle className='ReactJs' cx="70" cy="70" r="70"></circle>
                                                </svg>
                                                <div className="number">
                                                    <h2>70<span>%</span></h2>
                                                </div>
                                            </div>
                                            <h2 className="text">ReactJs</h2>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="box">
                                            <div className="percent">
                                                <svg>
                                                    <circle cx="70" cy="70" r="70"></circle>
                                                    <circle className='Node' cx="70" cy="70" r="70"></circle>
                                                </svg>
                                                <div className="number">
                                                    <h2>65<span>%</span></h2>
                                                </div>
                                            </div>
                                            <h2 className="text">Node</h2>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="box">
                                            <div className="percent">
                                                <svg>
                                                    <circle cx="70" cy="70" r="70"></circle>
                                                    <circle className='MongoDB' cx="70" cy="70" r="70"></circle>
                                                </svg>
                                                <div className="number">
                                                    <h2>60<span>%</span></h2>
                                                </div>
                                            </div>
                                            <h2 className="text">MongoDB</h2>
                                        </div>
                                    </div>
                                    {/* <div className="card">
                                    <div className="box">
                                        <div className="percent">
                                            <svg>
                                                <circle cx="70" cy="70" r="70"></circle>
                                                <circle className='Html' cx="70" cy="70" r="70"></circle>
                                            </svg>
                                            <div className="number">
                                                <h2>90<span>%</span></h2>
                                            </div>
                                        </div>
                                        <h2 className="text">Html</h2>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="box">
                                        <div className="percent">
                                            <svg>
                                                <circle cx="70" cy="70" r="70"></circle>
                                                <circle className='Html' cx="70" cy="70" r="70"></circle>
                                            </svg>
                                            <div className="number">
                                                <h2>90<span>%</span></h2>
                                            </div>
                                        </div>
                                        <h2 className="text">Html</h2>
                                    </div>
                                </div> */}
                                </div>

                            </div>
                            <div className='EducationDiv'>
                                <div className='educationTitle'>
                                    <h1>
                                        Education & Experience
                                    </h1>
                                </div>
                                <div className='educationFirst'>
                                    <div className='EduLeft'>
                                        <div className='eduTitle'>
                                            <i class="fa fa-briefcase"></i>
                                            <span>2021 - paresent</span>
                                        </div>
                                        <div className='eduDetails'>
                                            <h3> MERN Stack</h3>
                                            <p>Dignizant Technology(Surat)</p>
                                        </div>
                                    </div>
                                    <div className='EduLeft'>
                                        <div className='eduTitle'>
                                            <i class="fa fa-briefcase"></i>
                                            <span>2015 - 2019</span>
                                        </div>
                                        <div className='eduDetails'>
                                            <h3> Engineering(Information Technology) - GTU </h3>
                                            <p>G.E.C</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='educationFirst'>
                                    <div className='EduLeft'>
                                        <div className='eduTitle'>
                                            <i class="fa fa-briefcase"></i>
                                            <span>2020 - 2021</span>
                                        </div>
                                        <div className='eduDetails'>
                                            <h3> Freelancer</h3>
                                            {/* <p>)</p> */}
                                        </div>
                                    </div>
                                    <div className='EduLeft'>
                                        <div className='eduTitle'>
                                            <i class="fa fa-briefcase"></i>
                                            <span>2013 - 2015</span>
                                        </div>
                                        <div className='eduDetails'>
                                            <h3> HSC - GHSEB</h3>
                                            <p>Shree K.C.Kothari Vidhyabhavan(Sadhana)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='educationFirst'>
                                    <div className='EduLeft'>
                                        <div className='eduTitle'>
                                            <i class="fa fa-briefcase"></i>
                                            <span>2019(MAY - DECEMBER)</span>
                                        </div>
                                        <div className='eduDetails'>
                                            <h3>Trainee</h3>
                                            <p>Top solution(Ahemdabad)</p>
                                        </div>
                                    </div>
                                    <div className='EduLeft'>
                                        <div className='eduTitle'>
                                            <i class="fa fa-briefcase"></i>
                                            <span>2012</span>
                                        </div>
                                        <div className='eduDetails'>
                                            <h3> SSC - GSEB</h3>
                                            <p>Shree K.C.Kothari Vidhyabhavan(Sadhana)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modalFooter">

                        </div>
                    </div>
                </div >}
            </div>
        </main >
    )
}
