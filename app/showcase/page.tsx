import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";

const Showcase = () => {
    return (
        <div
            className="
        overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]"
        >
            <ShowcaseNavbar />
            <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
                <div className="flex items-center justify-center relative">
                    <WordFadeIn
                        className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center   z-20  "
                        words="Marketing Services That Helps Your Business Grow"
                    />
                </div>
                <p className="md:text-center text-xl md:text-2xl my-6   md:w-4/5 mx-auto text-gray-500">
                    Have a look at some of our recent works.
                </p>
                <div className="grid h-max justify-items-center">
                    <h1 className="md:text-center text-4xl md:text-3xl my-6  text-bold md:w-4/5 mx-auto text-gray-800">In Progress </h1>
                    {/* <LetsMakeThingsHappenSection /> */}
                </div>

            </section>

        </div>
    );
};

export default Showcase;