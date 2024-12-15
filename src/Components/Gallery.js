//importing Images
import image1 from "../assets/cheetah.jpg"
import image2 from "../assets/cat_image.jpg"
import image3 from "../assets/dog_image.jpg"
import image4 from "../assets/elephant.jpg"
import image5 from "../assets/falls.jpg"
import image6 from "../assets/nature_image.jpeg"
import image7 from "../assets/purple.jpg"
import image8 from "../assets/rose.jpeg"
import image9 from "../assets/tea.jpg"
import image10 from "../assets/tiger.jpeg"


function Gallery()
{
    return(
        <div className="image_container">
            <div className="gallery">
                <img src={image1} alt="No such image found" />
                <p style={{textAlign:"center",fontSize:"20px"}}>Acinonyx jubatus.</p>
            </div>
            <div className="gallery">
                <img src={image2} alt="No such image found" />
                <p style={{textAlign:"center",fontSize:"20px"}}>Felis catus.</p>
            </div>
            <div className="gallery">
                <img src={image3} alt="No such image found" />
                <p style={{textAlign:"center",fontSize:"20px"}}>Canis lupus familiaris.</p>
            </div>
            <div className="gallery">
                <img src={image4} alt="No such image found" />
                <p style={{textAlign:"center",fontSize:"20px"}}>Loxodonta africana.</p>
            </div>
            <div className="gallery">
                <img src={image5} alt="No such image found" />
                <p style={{textAlign:"center",fontSize:"20px"}}>Mistwood Falls.</p>
            </div>
            <div className="gallery">
                <img src={image6} alt="No such image found" />
                <p style={{textAlign:"center",fontSize:"20px"}}>Golden Meadows.</p>
            </div>
            <div className="gallery">
                <img src={image7} alt="No such image found" />
                <p style={{textAlign:"center",fontSize:"20px"}}>Jasminum nudiflorum.</p>
            </div>
            <div className="gallery">
                <img src={image8} alt="No such image found" />
                <p style={{textAlign:"center",fontSize:"20px"}}>Rosa damascena.</p>
            </div>
            <div className="gallery">
                <img src={image9} alt="No such image found" />
                <p style={{textAlign:"center",fontSize:"20px"}}>Whispers of Rain.</p>
            </div>
            <div className="gallery">
                <img src={image10} alt="No such image found" />
                <p style={{textAlign:"center",fontSize:"20px"}}> Leopard.</p>
            </div>
        </div>
    )
}

export default Gallery