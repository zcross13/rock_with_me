import "../styles/gallery.css"
import image1 from "../assets/gallery/image1.jpeg"
import image2 from "../assets/gallery/image2.jpeg"
import image3 from "../assets/gallery/image3.jpeg"
import image4 from "../assets/gallery/image4.jpeg"
import image5 from "../assets/gallery/image5.jpeg"
import image6 from "../assets/gallery/image6.jpeg"
import image7 from "../assets/gallery/image7.jpeg"
import image8 from "../assets/gallery/image8.jpeg"
import image9 from "../assets/gallery/image9.jpeg"
import image10 from "../assets/gallery/image10.jpeg"
import image11 from "../assets/gallery/image11.png"
import image12 from "../assets/gallery/image12.jpeg"
import image13 from "../assets/gallery/image13.jpeg"
import image14 from "../assets/gallery/image14.jpeg"
import image15  from "../assets/gallery/image15.jpeg"



const Gallery = () => {

    const images = [
        { id: 1, src: image1 , alt: "Image 1" },
        { id: 2, src: image2 , alt: "Image 2" },
        { id: 3, src:  image3 , alt: "Image 3" },
        { id: 4, src:  image4 , alt: "Image 4" },
        { id: 5, src:  image5 , alt: "Image 5" },
        { id: 6, src:  image6, alt: "Image 6" },
        { id: 7, src:  image7 , alt: "Image 7" },
        { id: 8, src:  image8 , alt: "Image 8" },
        { id: 9, src: image9, alt: "Image 9" },
        { id: 10, src: image10, alt: "Image 10" },
        { id: 11, src: image11, alt: "Image 11" },
        { id: 12, src: image12, alt: "Image12" },
        { id: 13, src: image13, alt: "Image13" },
        { id: 14, src: image14, alt: "Image14" },
        { id: 15, src: image15, alt: "Image15" },
    ];

    return (
        <div className="gallery-container">
            <h1 className="gallery-title">Gallery</h1>
            <div className="gallery">
                {
                    images.map(image => (
                        <div key={image.id} className="gallery-item">
                            <img src={image.src} alt={image.alt}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Gallery 