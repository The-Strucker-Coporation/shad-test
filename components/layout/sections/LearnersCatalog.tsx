import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

export const LearnersCatalog = () => {
  const learnersBooks = [
    {
      imageUrl: "https://i.pravatar.cc/250?img=58",
      title: "Creative Arts Learner’s Book - Grade 6",
      description: "A course book aligned with the Competency-Based Curriculum, featuring engaging activities for practical learning.",
      link: "/books/learners/creative-arts/grade-6",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Creative Arts and Sports Learner’s Book - Grade 9",
      description: "The learner-centered activities in this book mainstream the required core competencies, Pertinent and Contemporary Issues (PCIs), values, skills, and attitudes.",
      link: "/books/learners/creative-arts-and-sports/grade-9",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Creative Activities Learner’s Book - Grade 2",
      description: "Contains varied activities with simple and clear instructions that are easy to follow to encourage self-study. Relevant illustrations that learners can easily relate to, and adequate review questions to enhance learners' understanding.",
      link: "/books/learners/creative-activities/grade-2",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Creative Arts Learner’s Book - Grade 5",
      description: "A comprehensive course book that adheres to the Competency-Based Curriculum; enables the learner to appreciate and apply the knowledge acquired in day-to-day life.",
      link: "/books/learners/creative-arts/grade-5",
    },
  ];

  return (
    <section id="learners-catalog" className="container lg:w-[90%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Learner's Books</h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold">Explore Our Learner's Books Collection</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {learnersBooks.map(({ imageUrl, title, description, link }, index) => (
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
