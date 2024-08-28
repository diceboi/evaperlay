import Aboutme from "@/components/aboutme";
import Coachingreferences from "@/components/coachingReferences";
import Hero from "@/components/hero";
import Linkedin from "@/components/linkedin";
import MainCTA from "@/components/MainCTA";
import Maincta2 from "@/components/MainCTA2";
import Socialcred from "@/components/socialcred";
import Contactus from "@/components/ui/contactus";
import Whattoexpect from "@/components/whattoexpect";
import Whyus from "@/components/whyus";

export default function Home() {
  return (
    <>
    <Hero />
    <Aboutme />
    <MainCTA />
    <Whyus />
    <Maincta2 />
    <Whattoexpect />
    <Linkedin />
    <Coachingreferences />
    <Contactus />
    </>
  );
}
