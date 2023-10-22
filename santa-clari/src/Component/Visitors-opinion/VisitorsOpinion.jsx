import drink2 from '../../img/drinker2.jpg'
import drink3 from '../../img/drinker3.jpg'
import drink4 from '../../img/drinker4.jpg'
import havana1 from '../../img/havanaimage1 (1).jpg'
import havana2 from '../../img/havanaimage2.jpg'
import contact from '../../img/contact.jpg'
const VisitorsOpinion = () => {
    return (
        <div id='tester-opinion' className='my-20'>


            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:ml-20'>
                        <img src={drink2} className="max-w-sm my-5 rounded-lg shadow-2xl" />
                        <img src={drink3} className="max-w-sm my-5 rounded-lg shadow-2xl" />
                        <img src={drink4} className="max-w-sm my-5 rounded-lg shadow-2xl" />
                        <img src={havana1} className="max-w-sm my-5 rounded-lg shadow-2xl" />
                        <img src={havana2} className="max-w-sm my-5 rounded-lg shadow-2xl" />
                        <img src={contact} className="max-w-sm my-5 rounded-lg shadow-2xl" />

                    </div>


                    <div>
                        <h1 className=" text-5xl font-bold">Visitors & Testers Opinion</h1>

                        <p className='text-xl my-5 font-medium text-justify'>Only one whisky today, but you see, it’s THE Cuban whisky, which, I
                            believe, they stopped making quite a while ago. If you ask any Cuban
                            friends, that’s neither a pity nor a shame. According to the Herald Scotland,
                            ‘Fidel Castro reportedly sent &#39;’spies&#39;’ to Scotland 40 years ago to learn how
                            to make whisky&#39;. Sounds fishy if you ask me. Anyway, I spotted an old
                            bottle at the Saratoga in La Habana, and while all waitresses were seemingly
                            admiring my bravery, I ordered a glass of it. I was feeling like a hero of the
                            revolucion, you see. But what does it taste like? Let’s see…</p>
                        <p className='lg:px-10 text-xl text-justify'>According to the label, this baby iwas made at
                            Ronera Santa Cruz. That’s the place where the Havana
                            Club blanco and oro rums are made. Colour: gold.
                            Nose: rounded and smooth and, to tell you the truth,
                            rather closer to some light rum such as Havana Club
                            3yo indeed. Now there is some kind of marzipan,
                            perhaps a little cheap ‘supermarket’ milk chocolate,
                            and, perhaps, hints of flat Guinness. Which may go to
                            show that some cereals have been used at some point.
                            No foul notes so far, I have to say. Mouth: it’s a
                            curious thing, this, but as almost always, when it’s
                            curious and unusual, it’s fun to taste. What shall we
                            say? Perhaps ‘American coffee’, but that’s a little
                            strange since Obama will only show up in La Havana
                            next month. The same feeling of Guinness, or rather
                            that Belgian dish that can be fantastic when it’s made
                            properly, carbonnade flamande. Certainly some brown
                            beer, or rather a sauce made thereof, then, I’m afraid,
                            some bitter caramel and, well, some regular caramel.
                            But it’s not repulsively awful, not at all. Even the
                            body’s acceptable. Finish: nah, things go pear-shaped
                            now, it gets bitter, too dry, and too drying. Many
                            things burnt. Comments: I’m so happy I could try this
                            Cuban rarity! And defy all the barmaids and barmen
                            who kept pestering me, wondering why I didn’t
                            choose Johnnie Red or Chivas instead. Apologies,
                            amigos!</p>

                        <h1 className="text-2xl font-bold mt-5 capitalize">Carlos Rafael Soto Castellón, First Vice President of Santa clara distillery, affirmed:</h1>
                        <p className='lg:px-10 text-xl text-justify'>“Without a doubt this is a moment of growth for the brand&#39;s portfolio, and in this sense we
                            promote a product with an identity and tradition that make it unique. This is how we intend to

                            reach more audiences who are looking for that unique flavor in the cradle of light whisky in
                            Cuba. For Cuban whisky, the work with Diageo is aimed at making visible and making known to
                            the world the peculiarities and quality of Cuban whisky. We are very satisfied with the path we
                            have created”. </p>

                        <h1 className="text-3xl font-bold mt-5 capitalize">Luca Cesarano, General Director of Santa clara distillery, noted:</h1>

                        <p className='lg:px-10 text-xl text-justify'>the &quot;Santa clara whisky&quot;, the first new product developed by the joint venture. We want to
                            extend our great recognition to the Cuban Rum Masters for having created this jewel. I am
                            convinced that it will be among the most appreciated products by demanding Cuban consumers,
                            lovers of good whisky. &quot;</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisitorsOpinion;