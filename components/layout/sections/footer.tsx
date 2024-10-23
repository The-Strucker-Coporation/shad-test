import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />

              <h3 className="text-2xl">Hummingbird Musikk</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Connect with us on Our Socials</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Facebook
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Twitter
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Tiktok
              </Link>
            </div>
          </div>


          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Need Help? Reach out through</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Feedback
              </Link>
            </div>
          </div>

        </div>

        <Separator className="my-6" />
        <section className="text-center">
          <p className="text-primary">&copy;2024</p>
          <h3 className="">
           Built and Maintained by
            <Link
              target="_blank"
              href="https://github.com/The-Strucker-Coporation"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
             Strucker Inc.&copy;
            </Link>
          </h3>
        </section>

      
        <section className="text-center">
          <h3 className="">
           Powered By
            <Link
              target="_blank"
              href="https://github.com/The-Strucker-Coporation"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
             Resleen Tech Native.&copy;
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
