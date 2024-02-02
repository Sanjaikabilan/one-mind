import SectionTemplate from "@/components/landing-page/section-template";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

const ProjectPage = () => {
  return (
    <section>
      <div
        className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col
        gap-4 md:justify-center md:items-center"
      >
        <SectionTemplate
          title="Works of mine"
          pill="✨ Projects"
        ></SectionTemplate>
        <div className=" mt-5 max-w-[950px] md:pl-5 md:pr-5">
          <Card className=" dark:border-brand-jasmine border-brand-eirie md:w-[750px] mb-5 lg:w-[950px]">
            <CardHeader>Project 1</CardHeader>
            <CardContent>
              <div className=" grid grid-flow-col grid-cols-3 gap-2 rounded-lg">
                <div className=" col-span-1 dark:text-brand-jasmine text-sunglow-600 font-semibold">
                  <h4>Garage Kct</h4>
                </div>
                <div className=" col-span-1 dark:text-brand-jasmine text-sunglow-600 font-semibold">
                  <h4>Development</h4>
                </div>
                <div className=" dark:text-brand-jasmine text-sunglow-600 font-semibold justify-end items-end flex">
                  <h4>Link</h4>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className=" dark:border-brand-jasmine border-brand-eirie md:w-[750px] mb-5 lg:w-[950px]">
            <CardHeader>Project 1</CardHeader>
            <CardContent>
              <div className=" grid grid-flow-col grid-cols-3 gap-2 rounded-lg">
                <div className=" col-span-1 dark:text-brand-jasmine text-sunglow-600 font-semibold">
                  <h4>Garage Kct</h4>
                </div>
                <div className=" col-span-1 dark:text-brand-jasmine text-sunglow-600 font-semibold">
                  <h4>Django, Jquery</h4>
                </div>
                <div className=" dark:text-brand-jasmine text-sunglow-600 font-semibold justify-end items-end flex">
                  <h4>Link</h4>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className=" dark:border-brand-jasmine border-brand-eirie md:w-[750px] mb-5 lg:w-[950px]">
            <CardHeader>Project 1</CardHeader>
            <CardContent>
              <div className=" grid grid-flow-col grid-cols-3 gap-2 rounded-lg">
                <div className=" col-span-1 dark:text-brand-jasmine text-sunglow-600 font-semibold">
                  <h4>Garage Kct</h4>
                </div>
                <div className=" col-span-1 dark:text-brand-jasmine text-sunglow-600 font-semibold">
                  <h4>Django, Jquery</h4>
                </div>
                <div className=" dark:text-brand-jasmine text-sunglow-600 font-semibold justify-end items-end flex">
                  <h4>Link</h4>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
