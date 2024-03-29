import React from "react";

interface SectionTemplate {
  title: string;
  subheading?: string;
  pill: string;
}

const SectionTemplate: React.FC<SectionTemplate> = ({
  title,
  subheading,
  pill,
}) => {
  return (
    <React.Fragment>
      <section
        className="flex
        flex-col
        gap-4
        justify-center
        items-start
        md:items-center
      "
      >
        <article
          className="rounded-full
          p-[1px]
          text-sm
          bg-gradient-to-r
          from-brand-sunglow
          to-brand-jasmine
        "
        >
          <div
            className="rounded-full 
            px-3
            py-1
            bg-white
            dark:bg-black"
          >
            {pill}
          </div>
        </article>
        {subheading ? (
          <>
            <h2
              className="text-left
              text-3xl
              sm:text-5xl
              sm:max-w-[750px]
              md:text-center
              font-semibold
            "
            >
              {title}
            </h2>
            <p
              className="dark:text-washed-purple-700 sm:max-w-[450px]
              md:text-center
            "
            >
              {subheading}
            </p>
          </>
        ) : (
          <>
            <div className="justify-center flex flex-col">
              <h1
                className="text-left 
                      text-4xl
                      sm:text-6xl
                      sm:max-w-[850px]
                      md:text-center
                      font-semibold mt-[27px] "
              >
                <span className="text-black dark:text-neutral-300">{title}</span>
              </h1>
            </div>
          </>
        )}
      </section>
    </React.Fragment>
  );
};

export default SectionTemplate;
