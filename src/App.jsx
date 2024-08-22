import BannerSection from "./components/BannerSection"
import BlogSection from "./components/BlogSection"
import Category from "./components/Category"
import FeatureBread from "./components/FeatureBread"
import FeatureFrutes from "./components/FeatureFrutes"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


export const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Category />
      <FeatureFrutes />
      <FeatureBread />
      <BannerSection />
      <BlogSection />
      <Footer />
    </main>
  )
}
export default App