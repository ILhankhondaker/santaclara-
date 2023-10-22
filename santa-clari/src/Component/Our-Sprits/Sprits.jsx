import './Sprits.css'
// import sc from "../../img/sc.jpg"
import sc1 from "../../img/sc1.png"
import boltol1 from "../../img/btl (1).png"
import boltol2 from "../../img/btl (2).png"
const Sprits = () => {
    return (
        <div id='spritss' className=' px-10 lg:px-20   py-20 font-medium bgclr text-white' >

            <h1 className='text-2xl text-justify '> <span className='font-black text-2xl'> Santa clara Whisky</span>  – Aged for a minimum 3 years in White French Oak Barrels. Created from a mash bill
                of 50% corn, 40% sugar cane, 50% and 10% rye, this whisky is fantastic for sipping. Santa clara has notes
                of maple and dried fruit on the nose carry over into a palate filled with caramel and a pleasant robust
                oakiness. Finishing off with a slight hint of pepper and baking spices..

                <img className='h-64 lg:h-screen' src={sc1} alt="" srcset="" />
                <img className=' lg:h-screen mx-auto' src={boltol1} alt="" srcset="" />
                <img className=' lg:h-screen mx-auto' src={boltol2} alt="" srcset="" />
                “Without a doubt this is a moment of growth for the brand's portfolio, and in this
                sense we promote a product with an identity and tradition that make it unique. This is
                how we intend to reach more audiences who are looking for that unique flavor in the
                cradle of whisky in Cuba. For santa clara whisky, the work with Diageo is aimed at
                making visible and making known to the world the peculiarities and quality of Cuban
                whisky. We are very satisfied with the path we have created”
                <br />
                Upcoming (Apple pie)</h1>
        </div >
    );
};

export default Sprits;