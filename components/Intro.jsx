import Image from 'next/image';
import profilePic from '../public/img/danie.jpg'
function Intro() {
  return (
    <div id="intro" className="flex flex-col justify-center items-center xl:h-screen">
      <div id="dp-circle" className="mt-10 rounded-full bg-gray-50 h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 xl:h-60 xl:w-60 overflow-hidden" >
        <Image
          src={profilePic}
          alt="Danie"
          className="h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 xl:h-60 xl:w-60 object-cover object-center rounded-full inset-0"
        />
      </div>
      <h1 className="text-gray-100 text-center font-extrabold mt-5 text-4xl md:text-5xl lg:text-6xl">Welcome!</h1>
      <p className="mt-4 w-2/3 sm:w-1/2 text-center text-gray-100 md:text-xl lg:text-2xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
    </div>
  )
}

export default Intro