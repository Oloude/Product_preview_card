 import heroMobileImage from '../assets/image-product-mobile.jpg'
 import heroDesktopImage from '../assets/image-product-desktop.jpg'

function Image() {
  return (
    <div className='lg:basis-1/2'>
        <picture>
            <source media="(min-width:1024px )" srcSet={heroDesktopImage} />
            <img src={heroMobileImage} alt="" className='block rounded-t-md object-fit h-60  w-full lg:h-full lg:rounded-tl-md lg:rounded-bl-md lg:rounded-tr-none'/>
        </picture>
    </div>
  )
}

export default Image