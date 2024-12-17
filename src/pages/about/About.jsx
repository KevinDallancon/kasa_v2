import img from '../../assets/montagne.png'
import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import Data from '../../data/dataAbout.json'

function About() {
  const dataAbout = Data

  return (
    <main className="aboutStyle">
      <Banner img={img} txt="" overlayOpacity={0.3} />
      <section>
        {dataAbout.map((data) => {
          return (
            <div key={data.id}>
              <Collapse title={data.title} content={data.content} />
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default About
