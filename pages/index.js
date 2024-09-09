import Header from "@/components/Header";
import HeroCarousel from "@/components/Cara";
import HorizontalScroller from "@/components/HorScroll";
import ProfessionMilestones from "@/components/ProfMilestones";
import SkillsMarquee from "@/components/SkillsMarquee";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div
    className="bg-black min-h-screen"
    >
      <Header />
      <HeroCarousel />
      <HorizontalScroller />
      {/* <SkillsMarquee /> */}
      <ProfessionMilestones />
      <ContactForm />
    </div>
  );
}
