import TitleSection from "@/components/landing-page/title-section";
import { SKILLS_TOP, SKILLS_BOTTOM } from "@/lib/data/constants";
import Image from "next/image";
import Prof from "@/../public/Developer-bro.png";
import Header from "@/components/landing-page/header";
import SectionTemplate from "@/components/landing-page/section-template";
import InfiniteScroll from "@/components/ui/infinite-scroll";
import Logo from "@/../public/atom_logo.svg";
import { y_n } from "@/lib/data/constants";

//export metadata
export const metadata = {
  title: "Welcome",
  description: `About ${y_n}`,
  date: `${new Date().toLocaleDateString()}`,
  type: "website",
  image: { Logo },
  url: `https://www.${y_n}.com`,
  keywords: ["web", "development", "javascript", "react"],
};

function transformString(input: string): string {
  // Your transformation logic here
  return input.charAt(0).toUpperCase() + input.slice(1);
}

const your_name = transformString(y_n);

export default function Home() {
  return (
    <main>
      <Header />
      <section className=" pb-11">
        <div
          className=" overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col
        gap-4 md:justify-center md:items-center"
        >
          <TitleSection
            pill="✨ Here We Go !"
            title={your_name}
            subheading=""
          ></TitleSection>
          <div className="md:mt-[25px] justify-center sm:w-full flex md:justify-center items-center mt-[25px] relative sm:ml-0 ml-[0px] ">
            <Image
              className=" h-[350px] w-[350px] sm:h-450px sm:w-[450px] md:h-[450px] md:w-[450px] "
              src={Prof}
              alt="Application Banner"
            />
            <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
          </div>
          <p
            className="dark:text-neutral-300 sm:max-w-[850px]
              md:text-center"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
      <hr className=" w-48 h-1 mx-auto my-4 bg-brand-sunglow dark:bg-brand-sunglow border-0 rounded md:my-10"></hr>
      <section className="pb-11">
        <div
          id="about"
          className=" overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col
        gap-4 md:justify-center md:items-center"
        >
          <SectionTemplate title="So, Basically" pill="✨ About me" />
          <p
            className="dark:text-neutral-300 sm:max-w-[850px] mt-5
              md:text-center"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
      <hr className=" w-48 h-1 mx-auto my-4 bg-brand-sunglow dark:bg-brand-sunglow border-0 rounded md:my-10"></hr>
      <section>
        <div
          className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col
        gap-4 md:justify-center md:items-center relative"
        >
          <SectionTemplate
            title="Pallete of Proficiencies"
            pill="✨ Crafting Success"
          ></SectionTemplate>
          <p
            className="dark:text-neutral-300 sm:max-w-[850px] mt-5
              md:text-center"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="">
            <InfiniteScroll skills={SKILLS_TOP} isForward={false} />
            <InfiniteScroll skills={SKILLS_BOTTOM} isForward={true} />
          </div>
        </div>
      </section>
      <section className=" pb-11" >
        <div
          className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col
        gap-4 md:justify-center md:items-center relative"
        >
          <SectionTemplate pill="✨ Influences" title="The people that Inspired us in our Journey" ></SectionTemplate>
          <p
            className="dark:text-neutral-300 sm:max-w-[850px] mt-5
              md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
        </div>
      </section>
    </main>
  );
}
