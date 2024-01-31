import TitleSection from "@/components/landing-page/title-section";
import Image from "next/image";
import Prof from "@/../public/Developer-bro.png"
import Header from "@/components/landing-page/header";

export default function Home() {
  return (
    <main>
      <Header/>
      <section>
        <div 
        className=" overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col
        gap-4 md:justify-center md:items-center">
          <TitleSection pill="✨ Here We Go !" title="Sanjaikabilan." subheading=""></TitleSection>
            <div className=' md:mt-[25px] justify-center sm:w-full flex md:justify-center items-center mt-[25px] relative sm:ml-0 ml-[0px] '>
              <Image className=" h-[350px] w-[350px] sm:h-450px sm:w-[450px] md:h-[450px] md:w-[450px] " src={Prof} alt='Application Banner' />
              <div className='bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10' >
              </div>
            </div>
            <p>
              
            </p>

        </div>
      </section>
    </main>
  );
}
