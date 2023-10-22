import React from 'react';
import logo from '../../img/logo1.png'
import './About.css'
const About = () => {
    return (
        <div>

            {/* bg === */}
            <div className="bg-fixed bg-no-repeat bg-center bg-cover bg h-screen">
                <h1>ok</h1>
                <img className='lg:max-w-xl mx-auto  mt-20   ' src={logo} alt="" srcset="" />
                <hr className='mt-10 lg:max-w-xl mx-auto ' />

            </div>
            <div id='about' className='lg:px-20 px-10 py-10 bgimg bg-no-repeat bg-center bg-cover '>



                <p className='text-justify my-5 text-xl mt-10'>Its mission is to produce, market and export whisky and other spirits of different types with the
                    highest quality standards to meet the demands of customers, combining high performance of
                    human resources, adequate respect for the environment and technology, with the tradition of the
                    best Cuban whisky.</p>


                <p className='text-justify text-xl'> <span className='font-black text-2xl'>Vision:</span>  to have a portfolio of products for export and domestic foreign exchange market,
                    competitive and diversified according to customer requirements. High level of professionalism,
                    knowledge and motivation of cadres and workers in general that allow them to continuously
                    improve their performance. Having certified entities, a comprehensive management system that
                    ensures: comparison with international standards, the safety of production, safety and health of
                    workers, the exercise of responsible environmental management, the timely introduction of the
                    achievements of science and technical and process automation, taking as its premise a high
                    industrial culture as producers of the best Cuban whisky.</p>
                <p className='text-justify my-5 text-xl'>It has directed the diversification of its core business, the production and marketing of whisky
                    and other spirits, strengthening its product portfolio with high quality whisky.</p>

                <p className='text-justify my-5 text-xl'>The heart of the <span className='font-black text-2xl'>Santa clara distillery</span>  is an all copper fire powered square still and the key to
                    making our spirits so special. With the Santa clara still, we capture the rich tradition of craft – a
                    process through and through proven to produce a superior, smoother product. A process that’s
                    been in the family nearly 100 years since way back in the 1930s.</p>

            </div>
        </div>

    );
};

export default About;