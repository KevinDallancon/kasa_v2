import React from 'react'

function Banner({ img, txt, overlayOpacity }) {
  return (
    <section className="banner">
      <img src={img} alt="banner" />
      <div className="banner-overlay" style={{ opacity: overlayOpacity }}></div>
      <p>{txt}</p>
    </section>
  )
}

export default Banner
