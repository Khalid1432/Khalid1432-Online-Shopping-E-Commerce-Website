import Category from "../components/Category"
import HeroSection from "../components/HeroSection"
import Layout from "../components/Layout"
import Track from "../components/Track"
import BestSellingProducts from "../components/BestSellingProducts"
import Testimonial from "../components/Testimonial"

const HomePage = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <Category />
        <BestSellingProducts />
        <Track/>
        <Testimonial />
      </Layout>
    </div>
  )
}

export default HomePage
