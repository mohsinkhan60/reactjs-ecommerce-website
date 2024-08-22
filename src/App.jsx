import Category from "./components/Category"
import FeatureBread from "./components/FeatureBread"
import FeatureFrutes from "./components/FeatureFrutes"
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
    </main>
  )
}
export default App