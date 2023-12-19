import mobileCone from '../assets/mobile/image-gallery-cone.jpg'
import mobileMilkBottles from '../assets/mobile/image-gallery-milkbottles.jpg'
import mobileOrange from '../assets/mobile/image-gallery-orange.jpg'
import mobileSugarCubes from '../assets/mobile/image-gallery-sugar-cubes.jpg'
import desktopCone from '../assets/desktop/image-gallery-cone.jpg'
import desktopMilkBottles from '../assets/desktop/image-gallery-milkbottles.jpg'
import desktopOrange from '../assets/desktop/image-gallery-orange.jpg'
import desktopSugarCubes from '../assets/desktop/image-gallery-sugarcubes.jpg'

function Gallery() {
    const mobileGallery = [mobileMilkBottles,mobileOrange,mobileCone,mobileSugarCubes]
    const desktopGallery = [desktopMilkBottles,desktopOrange,desktopCone,desktopSugarCubes]
    

    return (
        <div className="grid grid-cols-2">
            {
                mobileGallery.map((gallery,key)=><img key={key} src={gallery}/>)
            }
        </div>
    );
}

export default Gallery;