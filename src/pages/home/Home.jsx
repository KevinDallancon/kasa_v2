import img from '../../assets/MaskGroup.png'
import Banner from '../../components/Banner/Banner'
import Gallery from '../../components/Gallery/Gallery'

function Home() {
  return (
    <main className="flex">
      <Banner
        img={img}
        txt="Chez vous, partout et ailleurs"
        overlayOpacity={0.7}
      />
      <Gallery />
    </main>
  )
}

export default Home
