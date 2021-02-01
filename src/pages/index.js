import React from "react"
import Header from '../components/header'
import Feature from '../components/feature'
import Gallery from '../components/gallery'
import Footer from '../components/footer'

const IndexPage = () => {
  return (
    <div className="text-text bg-bggray">
    <Header />
    <Feature />
    <main>
    <div className="flex flex-col pt-4 mx-2">
      <div className="mb-8 shadow-md rounded-md pb-4 pt-2 px-4 mb-4 mx-4 text-center bg-white">
        <h3 className="font-semibold text-xl mb-2">Delicious</h3>
        <p className="mb-2">
        Poetically, we started baking sourdough in 2016 for the beauty of its 3 ingredients: Flour, Water and Salt. Practically, we bake sourdough for its incomparable and irresistible taste.
        </p>
      </div>
      <div className="mb-8 shadow-md rounded-md pb-4 pt-2 px-4 mb-4 mx-4 text-center bg-white">
        <h3 className="font-semibold text-xl mb-2">Organic</h3>
        <p className="mb-2">
        We use our own natural leaven cultivated in West Hollywood and make our breads with 100% Organic King Arthur's Flour unless otherwise specified.
        </p>
      </div>
      <div className="mb-8 shadow-md rounded-md pb-4 pt-2 px-4 mb-4 mx-4 text-center bg-white">
        <h3 className="font-semibold text-xl mb-2">Artisan</h3>
        <p className="mb-2">
        Each loaf is made to order. It doesn't get any more "small batch" than this. Each loaf is carefully processed and baked to crisp perfection!
        </p>
      </div>
    </div>
    <Gallery />
    </main>
    <Footer />
    </div>
    
  )
}

export default IndexPage
