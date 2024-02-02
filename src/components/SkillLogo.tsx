import Image from "next/image";
import React from "react";

type Client = {
  alt: string;
  src: string;
};

type SkillLogoProps = {
  skills: Array<Client>; // Update the type of skills array
  isForward: boolean;
};

const SkillLogo: React.FC<SkillLogoProps> = ({ skills, isForward }) => {
  let animateClassName = ""; // Declare animateClassName variable

  if (isForward) {
    animateClassName = "animate-slide"; // Assign value inside if statement
  } else {
    animateClassName = "animate-slide-reverse"; // Assign value inside else statement
  }
  return (
    <div
      className="
        overflow-hidden
        flex
        mt-10
        after:content['']
        after:dark:from-brand-dark
        after:to-transparent
        after:from-background
        after:bg-gradient-to-l
        after:right-0
        after:top-0
        after:bottom-0
        after:w-2
        lg:after:w-20
        after:z-10
        after:absolute

        before:content['']
        before:dark:from-brand-dark
        before:to-transparent
        before:from-background
        before:bg-gradient-to-r
        before:left-0
        before:top-0
        before:bottom-0
        before:w-2
        lg:before:w-20
        before:z-10
        before:absolute"
    >
      {[...Array(4)].map((arr) => (
        <div
          key={arr}
          className={"flex flex-nowrap " + animateClassName} // Use animateClassName variable
        >
          {skills.map((client: Client) => (
            <div
              key={client.alt.toString() + animateClassName}
              className="relative md:w-[100px] w-[50px] md:m-10 mx-4 my-2 md:my-2 shrink-0 flex items-center"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={100}
                className="
                      object-contain
                      max-w-none
                      w-[50px]
                      md:w-[100px]
                    "
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkillLogo;
