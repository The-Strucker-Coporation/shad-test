import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

export const GeneralCatalog = () => {
  const bookList = [
    // Creative Arts Books
    {
      imageUrl: "https://i.pravatar.cc/250?img=58",
      title: "Creative Arts Learner’s Book - Grade 6",
      description: "A comprehensive course book aligned with the Competency-Based Curriculum, featuring engaging activities that promote practical learning.",
      link: "/books/learners/creative-arts/grade-6",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Creative Arts and Sports Learner’s Book - Grade 9",
      description: "This learner-centered book incorporates essential core competencies, Pertinent and Contemporary Issues (PCIs), as well as key values, skills, and attitudes through interactive activities.",
      link: "/books/learners/creative-arts-and-sports/grade-9",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Creative Activities Learner’s Book - Grade 2",
      description: "Features a variety of activities with simple, clear instructions designed to encourage self-study.",
      link: "/books/learners/creative-activities/grade-2",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Creative Arts Learner’s Book - Grade 5",
      description: "An all-encompassing course book adhering to the Competency-Based Curriculum; enabling learners to appreciate and apply the knowledge they acquire in their daily lives.",
      link: "/books/learners/creative-arts/grade-5",
    },
    // Workbooks
    {
      imageUrl: "https://i.pravatar.cc/250?img=55",
      title: "Music Workbook 1",
      description: "Covers the fundamentals of music theory, complete with exercises aimed at enhancing note-reading and rhythm skills.",
      link: "/books/workbooks/music-workbook-1",
    },
    {
      imageUrl: "https://i.pravatar.cc/250?img=54",
      title: "Music Workbook 2",
      description: "Builds upon Workbook 1 with advanced rhythm exercises and melodic exploration.",
      link: "/books/workbooks/music-workbook-2",
    },
    {
      imageUrl: "https://i.pravatar.cc/250?img=53",
      title: "Music Workbook 3",
      description: "Enhances understanding of musical notation and harmony to improve sight-reading skills.",
      link: "/books/workbooks/music-workbook-3",
    },
    {
      imageUrl: "https://i.pravatar.cc/250?img=52",
      title: "Music Workbook 4",
      description: "Challenges students with complex music theory concepts, including intervals and chord progressions.",
      link: "/books/workbooks/music-workbook-4",
    },
    {
      imageUrl: "https://i.pravatar.cc/250?img=51",
      title: "Music Workbook 5",
      description: "Focuses on advanced harmony and composition techniques, fostering creative expression.",
      link: "/books/workbooks/music-workbook-5",
    },
    {
      imageUrl: "https://i.pravatar.cc/250?img=50",
      title: "Music Workbook 6",
      description: "Completes the series with exercises focusing on counterpoint and advanced chord structures.",
      link: "/books/workbooks/music-workbook-6",
    },
  ];

  return (
    <section id="catalog" className="container lg:w-[90%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary mb-2 tracking-wider">Catalog</h2>
        <h2 className="text-3xl md:text-4xl font-bold">Explore Our Collection</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {bookList.map(({ imageUrl, title, description, link }, index) => (
          <Card key={index} className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg">
            <CardHeader className="p-0">
              <div className="h-full overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={title}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                />
              </div>
              <CardTitle className="py-6 pb-4 px-6">{title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-6 text-muted-foreground">
              {description}
            </CardContent>
            <CardFooter className="mt-auto">
              <Link href={link} className="hover:opacity-80 transition-all">
                View Details
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
