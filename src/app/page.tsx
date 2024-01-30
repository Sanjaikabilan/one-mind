import TitleSection from "@/components/landing-page/title-section";
import Image from "next/image";
import DevBro from "@/../public/Developer-bro.png"
import Header from "@/components/landing-page/header";

export default function Home() {
  return (
    <main>
      <Header/>
      <section>
        <div 
        className=" overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col
        gap-4 md:justify-center md:items-center">
          <TitleSection pill="✨ Here We Go !" title=" (Your Name)." subheading=""></TitleSection>
        </div>
      </section>
    </main>
  );
}
