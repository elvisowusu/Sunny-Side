import mobileCone from '../assets/mobile/image-gallery-cone.jpg'
import mobileMilkBottles from '../assets/mobile/image-gallery-milkbottles.jpg'
import mobileOrange from '../assets/mobile/image-gallery-orange.jpg'
import mobileSugarCubes from '../assets/mobile/image-gallery-sugar-cubes.jpg'


function Gallery() {
    const Gallery = [mobileMilkBottles,mobileOrange,mobileCone,mobileSugarCubes]
    return (
        <div className="grid grid-cols-2">
            {
                Gallery.map((gallery,key)=><img key={key} src={gallery}/>)
            }
        </div>
    );
}

export default Gallery;