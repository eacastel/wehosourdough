import * as React from "react"
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
    <div className="flex flex-col mx-6">
            <div className="mb-8 shadow-md rounded-md pb-4 pt-2 px-4 mb-4 mx-4 text-center bg-white">
              <p className="font-semibold text-xl">Philosophy</p>
              <p className="">
              Poetically, we started baking sourdough in 2016 for the beauty of its 3 ingredients: Flour, Water and Salt. Practically, we bake sourdough for its incomparable and irresistible umami taste.
              </p>
            </div>
          
            <div className="mb-8 shadow-md rounded-md pb-4 pt-2 px-4 mb-4 mx-4 text-center bg-white">
              <p className="font-semibold text-xl">Organic</p>
              <p className="mt-4">
              We use our own natural leaven cultivated in West Hollywood and make our breads with 100% Organic King Arthur's Flour unless otherwise specified.
              </p>
          </div>
            <div className="mb-8 shadow-md rounded-md pb-4 pt-2 px-4 mb-4 text-center bg-white">
              <p className="font-semibold text-xl">Artisan</p>
              <p className="mt-4">
              We only produce 6 loaves at a time and bake twice a week. It doesn't get any more "small batch" than this. Each loaf is carefully processed and baked to crisp perfection!
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
