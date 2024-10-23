import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { BookModal } from "./BookModal";


export const WorkBooksCatalog = () => {
  const workbooks = [
    {
      imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Music Workbook 1",
      description: "Covers music theory fundamentals with exercises to enhance note-reading and rhythm skills.",
      link: "/books/workbooks/music-workbook-1",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Music Workbook 2",
      description: "Expands on Book 1 with advanced rhythm exercises and melodic exploration.",
      link: "/books/workbooks/music-workbook-2",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1587801816496-2b5f169761f3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Music Workbook 3",
      description: "Deepens understanding of musical notation and harmony for improved sight-reading.",
      link: "/books/workbooks/music-workbook-3",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1594326105695-15f3d67e29d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Music Workbook 4",
      description: "Challenges students with complex music theory concepts, including intervals and chord progressions.",
      link: "/books/workbooks/music-workbook-4",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1594326105695-15f3d67e29d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Music Workbook 5",
      description: "Focuses on advanced harmony and composition techniques for creative expression.",
      link: "/books/workbooks/music-workbook-5",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1594326105695-15f3d67e29d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Music Workbook 6",
      description: "Completes the series with exercises on counterpoint and advanced chord structures.",
      link: "/books/workbooks/music-workbook-6",
    },
  ];

  return (
    <section id="workbooks-catalog" className="container lg:w-[90%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Workbooks</h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold">Explore Our Workbooks Collection</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {workbooks.map(({ imageUrl, title, description, link }, index) => (
          <Card key={index} className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg">
            <CardHeader className="p-0 gap-0">
              <div className="h-full overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={title}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                />
              </div>
              <CardTitle className="py-6 pb-4 px-6">{title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-6 text-muted-foreground">
              {description}
            </CardContent>
            <CardFooter className="mt-auto items-center justify-center">
            
              <BookModal/>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
