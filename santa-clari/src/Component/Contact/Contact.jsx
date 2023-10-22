import contact from '../../img/contact.jpg'

const Contact = () => {
    return (
        <div id='contact' className='  '>

            <div className="max-w-md mx-auto bg-base-200   rounded-xl shadow-lg overflow-hidden md:max-w-2xl my-20">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        {/* <img   src="/img/building.jpg" alt="Modern building architecture"> */}


                        {/* <img className="h-48 w-full object-cover md:h-full md:w-48" src={contact} alt="" srcset="" /> */}

                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-xl text-indigo-500 font-black">Contact us</div>
                        <a className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Our Contact info</a>

                        <li> <span className='font-bold'>Operating Hours:</span>  Monday to Friday 9am to 5pm</li>
                        <li> <span className='font-bold'>Address:</span>  246 st. between 5ft Ave and el mar Barlovento complex, Jaimanitas, Havana, Cuba</li>
                        <li> <span className='font-bold'>Telephone:</span>  (537) 204-93782 / (537) 204-94193</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;