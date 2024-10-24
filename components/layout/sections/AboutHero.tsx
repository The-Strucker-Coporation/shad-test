"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export const AboutHero = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="items-center justify space-y-8">

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Our History
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`Hummingbird Musikk Limited is a private company incorporated under the Companies Act, 2015. We specialize in music production, with a focus on nurturing young talent in technology, the arts, and cultural heritage.`}
          </p>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`By leveraging the latest opportunities in the entertainment industry—ranging from digital satellite music services to online platforms—we aim to connect talent with the rapidly growing middle market in the music industry and various consumer venues.`}
          </p>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`Our core mission is to foster musical growth through the creation of high-quality learning materials and instrumental instruction. Currently, we are establishing a state-of-the-art creative center at Konza Technopolis to further support the development and exposure of emerging talent.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              <Link href="/catalog" className="flex items-center" target="_self">
                Explore Catalog
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link href="/about-us" target="_self">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
