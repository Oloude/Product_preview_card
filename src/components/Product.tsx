 import cartIcon from '../assets/icon-cart.svg'

function Product() {
  return (
    <section className='flex flex-col gap-5 px-6 pb-8 lg:justify-center lg:basis-1/2 lg:pb-0 lg:gap-6'>
        <h3 className='text-sm tracking-widest text-DGBlue font-medium uppercase '>Perfume </h3>
        <h1 className='text-3xl font-Fraunces text-VDBlue font-bold'>Gabrielle Essence Eau De Parfum</h1>
        <p className=' text-base text-DGBlue font-medium'> A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL. </p>
        <div className='flex gap-5 items-center'>
            <p className='text-4xl font-bold text-darkCyan font-Fraunces'>$149.99 </p>
            <p className='line-through text-sm font-medium text-DGBlue'>$169.99 </p>
        </div>
        <button className='rounded-md py-3 flex gap-3 items-center justify-center text-sm font-medium text-white bg-darkCyan hover:bg-teal-900'>
            <img src={cartIcon} alt="cartIcon" />
            <span>Add to Cart</span>
        </button>
    </section>
  )
}

export default Product