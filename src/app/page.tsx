import LandingDescription from "@/components/LandingDescription";
import Header from "@/components/LandingHeader";
import SkillLogo from "@/components/SkillLogo";
import { SKILLS_TOP, SKILLS_BOTTOM } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="relative w-100 overflow-x-hidden max-w-[80%] my-10 md:my-[5rem]">
        <Header title="Palette of Proficiencies" />
        <LandingDescription content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <SkillLogo skills={SKILLS_TOP} isForward={true} />
        <SkillLogo skills={SKILLS_BOTTOM} isForward={false} />
      </section>
      <section className="relative w-100 overflow-x-hidden max-w-[80%] my-10 md:my-[5rem]">
        <Header title="Unveiling My Passions" />
        <LandingDescription content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </section>
      <section className="relative w-full overflow-x-hidden max-w-[80%] my-10 md:my-[5rem]">
        <Header title="Drawn from Giants and Hidden Gems" />
      </section>
    </main>
  );
}
