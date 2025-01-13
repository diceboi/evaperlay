import Aboutme from "@/components/aboutme";
import Coachingreferences from "@/components/coachingReferences";
import Hero from "@/components/hero";
import Ctaone from "@/components/Ctaone";
import Linkedin from "@/components/linkedin";
import Ctatwo from "@/components/Ctatwo";
import Contactus from "@/components/ui/contactus";
import Whattoexpect from "@/components/whattoexpect";
import Whyus from "@/components/whyus";
import CalendlyModal from "@/components/calendlyModal";

export default function Home() {
  return (
    <>
    <Hero />
    <Aboutme />
    <Ctaone />
    <Whyus />
    <Ctatwo />
    <Whattoexpect />
    <Coachingreferences />
    <Linkedin />
    
    <Contactus />
    </>
  );
}
