import Image from "./components/Image";
import Product from "./components/Product";

export default function App() {
  return (
    <main className="font-Montserrat min-h-screen p-6 flex justify-center items-center bg-cream">
      <section className="flex flex-col gap-5 max-w-2xl rounded-xl bg-white lg:flex-row">
      <Image/>
      <Product/>
      </section>
      
    </main>
  )
}