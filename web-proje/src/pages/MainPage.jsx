import React from 'react'
import myImage from '../assets/image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

function main() {
  const sliderImages = [myImage, myImage, myImage]
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <h1>G231210058</h1>
          <ul className="nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">My City</a>
            </li>
            <li>
              <a href="#">Heritage</a>
            </li>
            <li>
              <a href="#">Hobbies</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="mainpage-main">
        <div className="container">
          <div className="about-box">
            <img src={myImage} alt="benim resmim" className="my-image" />
            <div className="content-wrapper">
              <div>
                <h2 className="text-primary text-lg text-bold">
                  Merhaba, Ben Ömer
                </h2>
                <div className="under-line bg-primary"></div>
              </div>
              <p className="text-weight-med">
                Sakarya Üniversitesi Bilgisayar Mühendisliği bölümü 1. sınıf
                öğrencisiyim. 20 yaşındayım. Ankara doğumluyum. Son 2 seneye
                kadar Sivas'ta yaşıyordum.
              </p>
              <a href="#" className="button bg-primary text-bold">
                <FontAwesomeIcon icon={faFile} />
                Özgeçmişim
              </a>
            </div>
          </div>
        </div>
      </main>
      <section className="mainpage-hobbies">
        <div className="container">
          <h2 className="text-lg text-bold text-primary">Hobilerim</h2>
          <div className="under-line bg-primary"></div>
          <div className="hobby-boxes">
            <div className="hobby-box hobby-box-1 text-bold text-lg">
              Müzik Dinlemek
            </div>
            <div className="hobby-box hobby-box-2 text-bold text-lg">
              Keman Çalmak
            </div>
            <div className="hobby-box hobby-box-3 text-bold text-lg">
              Satranç Oynamak
            </div>
            <div className="hobby-box hobby-box-4 text-bold text-lg">
              Yemek Yapmak
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default main
