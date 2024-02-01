// components/BentoGrid.tsx
import React from 'react';
import Image from 'next/image';
import { PROJECTS } from '@/lib/data/constants';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BentoGrid: React.FC = () => {
  return (
    <main>
      <div className="overflow-hidden px-4 sm:px-6 mt-10 gap-4 md:justify-center md:items-center md:max-w-[900px] md:mx-auto">
        <div className="grid auto-rows-auto md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4">
          {PROJECTS.map(({ image, p_name, Aspect_ratio }, i) => (
            <div
              key={i}
              className={`rounded-lg border-2 border-slate-400/10 bg-brand-jasmine dark:bg-brand-sunglow p-4  ${
                i === 3 || i === 6 ? 'md:col-span-2' : ''
              }`}
            >
              <Card className="">
                <CardHeader>
                  <CardTitle className="" >{p_name}</CardTitle>
                  <CardDescription className="dark:text-brand-jasmine/80" >Category</CardDescription>
                </CardHeader>
                <CardContent className='flex justify-center items-center'>
                  <div className={`relative w-full h-0 ${Aspect_ratio === 'vertical' ? 'pb-[150%]' : 'pb-[75%]'}`}>
                    <Image
                      className="rounded-lg object-cover absolute top-0 left-0 w-full h-full"
                      src={image}
                      alt="Project Name"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <p>Stack : Html, Css, JavaScript, Django </p>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BentoGrid;
