import React from 'react'
import './Portfolio.css'
import '../../MediaQuary.css'

export const Portfolio = () => {
    return (
        <main>
            <div className='container'>
                <div className='mainBody'>
                    <div className='headerPortfolio'>
                        <h1>MY <span>PORTFOLIO</span> </h1>
                    </div>
                    <div className='SecondSecPort'>
                        <div className='firstSecPort'>
                            <div className='cardPort'>
                                <img src="Image/mycroft.png" alt="Portfolio Item" />
                                <figcaption>
                                    <span className='titlePort'><i className='fa fa-file-text-o' />Project Name :- MYCROFT </span>
                                    <span><i className='fa fa-external-link' />Preview :- <a href='https://mycroft.co/' target='_blank'>  https://mycroft.co/ </a> </span>
                                    <span><i className='fa fa-user-o pr-2' />Client : PB </span>
                                    <span><i className="fa fa-code pr-2" />Language :- ReactJs </span>

                                </figcaption>
                            </div>
                            <div className='cardPort'>
                                <img src="Image/lotrapi.png" alt="Portfolio Item" />
                                <figcaption>
                                    <span className='titlePort'><i className='fa fa-file-text-o' />Project Name :- LOTRAPI </span>
                                    <span><i className='fa fa-external-link' />Preview :- <a href='http://lotrapi.com//' target='_blank'>  http://lotrapi.com// </a> </span>
                                    <span><i className='fa fa-user-o pr-2' />Client : JUSTIN </span>
                                    <span><i className="fa fa-code pr-2" />Language :- ReactJs, NodeJS </span>
                                </figcaption>
                            </div>
                            <div className='cardPort'>
                                <img src="Image/gigzio.png" alt="Portfolio Item" />
                                <figcaption>
                                    <span className='titlePort'><i className='fa fa-file-text-o' />Project Name :- GIDZIO </span>
                                    <span><i className='fa fa-external-link' />Preview :- <a href='https://www.gigzio.com/' target='_blank'>  https://www.gigzio.com/ </a> </span>
                                    <span><i className='fa fa-user-o pr-2' />Client : LATIN </span>
                                    <span><i className="fa fa-code pr-2" />Language :- ReactJs, NodeJS </span>
                                </figcaption>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

