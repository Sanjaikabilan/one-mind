import Header from "@/components/landing-page/header";
import SectionTemplate from "@/components/landing-page/section-template";
import React from "react";

const BlogPage = () => {
  return (
    <main>
      <Header />
      <section>
        <div
          className=" overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col
        gap-4 md:justify-center md:items-center "
        >
            <SectionTemplate pill="✨ Blog" title="I&apos;mma go crazy here " ></SectionTemplate>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
