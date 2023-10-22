import process from '../../img/distillingprocess.jpg'
import drink2 from '../../img/drinker2.jpg'
import drink3 from '../../img/drinker3.jpg'
import drink4 from '../../img/drinker4.jpg'
import havana1 from '../../img/havanaimage1 (1).jpg'
import havana2 from '../../img/havanaimage2.jpg'

const OurProcess = () => {
    return (
        <div id='process' className=' py-10 bg-base-200 '>
            <div>
                <h1 className="text-center text-4xl lg:text-5xl my-10 font-bold capitalize">Santa clara distillery, our process</h1>

                <img className='mx-auto shadow-lg' src={process} alt="" srcset="" />
            </div>


            <div className="card-body lg:px-20 bg-base-100 shadow-lg  lg:lg:mx-20 rounded-lg my-5">
                <h2 className="card-title text-4xl" >Milling Grain</h2>
                <p className='text-justify text-2xl'>We begin by selecting the best grain that we can find and mill it on site.</p>

            </div>
            <div className="card-body lg:px-20 bg-base-100 shadow-lg   lg:mx-20 rounded-lg my-5">
                <h2 className="card-title text-4xl">Mashing</h2>
                <p className='text-justify text-2xl'>The milled grain is added to water in our mash tanks. We use two mash tanks
                    in series, one to liquify and the other for saccharification. It is then crash cooled to get
                    ready for fermentation.</p>

            </div>
            <div className="card-body lg:px-20 bg-base-100 shadow-lg lg:mx-20 rounded-lg my-5">
                <h2 className="card-title text-4xl">Fermenting</h2>
                <p className='text-justify text-2xl'>The mash is added to the fermentation tank along with the yeast. The yeast
                    converts the sugars we created into alcohol. After 3-5 days, the yeast has consumed all
                    the sugars in fermentation and this ‘distillers beer’ is around 10% alcohol.</p>

            </div>
            <div className="card-body lg:px-20 bg-base-100 shadow-lg lg:mx-20 rounded-lg my-5">
                <h2 className="card-title text-4xl">Distilling</h2>
                <p className='text-justify text-2xl'>Inside the still, the mash is heated to the point where the alcohol turns to
                    vapor. The vapor is carried through the columns to the condenser, where it is turned back
                    into a liquid. The more times this is done, the higher the alcohol percentage will be.</p>

            </div>

            <div className="card-body lg:px-20 bg-base-100 shadow-lg lg:mx-20 rounded-lg my-5 ">
                <h2 className="card-title text-4xl">Maturation</h2>
                <p className='text-justify text-2xl'>We mature the whiskys in our non-temperature controlled rick house, the
                    barrels are able to breathe and the wood interacts with the spirit to add flavor, color, and
                    texture.</p>

            </div>

            {/*==== 5 card element ==== */}
            {/* <div className='my-20 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                <div className="card lg:w-96 bg-base-100 shadow-xl  hover:scale-105 duration-500">
                    <figure><img className='pt-10' src={drink2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Milling Grain</h2>
                        <p className='text-justify'>We begin by selecting the best grain that we can find and mill it on site.</p>

                    </div>
                </div>
                <div className="card lg:w-96 bg-base-100 shadow-xl hover:scale-105 duration-500">
                    <figure><img className='pt-10' src={drink3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mashing</h2>
                        <p className='text-justify'>The milled grain is added to water in our mash tanks. We use two mash tanks
                            in series, one to liquify and the other for saccharification. It is then crash cooled to get
                            ready for fermentation.</p>

                    </div>
                </div>
                <div className="card lg:w-96 bg-base-100 shadow-xl hover:scale-105 duration-500">
                    <figure><img className='pt-10' src={drink4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Fermenting</h2>
                        <p className='text-justify'>The mash is added to the fermentation tank along with the yeast. The yeast
                            converts the sugars we created into alcohol. After 3-5 days, the yeast has consumed all
                            the sugars in fermentation and this ‘distillers beer’ is around 10% alcohol.</p>

                    </div>
                </div>
                <div className="card lg:w-96 bg-base-100 shadow-xl hover:scale-105 duration-500">
                    <figure><img className='pt-10' src={havana1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Distilling</h2>
                        <p className='text-justify'>Inside the still, the mash is heated to the point where the alcohol turns to
                            vapor. The vapor is carried through the columns to the condenser, where it is turned back
                            into a liquid. The more times this is done, the higher the alcohol percentage will be.</p>

                    </div>
                </div>
                <div className="card lg:w-96 bg-base-100 shadow-xl hover:scale-105 duration-500">
                    <figure><img className='pt-10' src={havana2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Maturation</h2>
                        <p className='text-justify'>We mature the whiskys in our non-temperature controlled rick house, the
                            barrels are able to breathe and the wood interacts with the spirit to add flavor, color, and
                            texture.</p>

                    </div>
                </div>




            </div> */}

        </div >
    );
};

export default OurProcess;