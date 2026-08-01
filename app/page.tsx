import {
  AboutSection,
  CapabilitiesSection,
  HeroSection,
  ProofSection,
  SalesPagesSection,
  SiteFooter,
  SystemsSection,
} from "@/app/_components/portfolio-sections";
import { ScrollReveal } from "@/app/_components/scroll-reveal";
import { SITE_URL } from "@/app/_data/site";

const scrollRevealBootstrap = `
  (() => {
    const root = document.documentElement;
    root.classList.add("scroll-reveal-ready");

    window.setTimeout(() => {
      if (!root.classList.contains("scroll-reveal-mounted")) {
        root.classList.remove("scroll-reveal-ready");
      }
    }, 6000);
  })();
`;

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jhonatan Henrique",
    jobTitle: "Desenvolvedor full-stack",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ji-Paraná",
      addressRegion: "Rondônia",
      addressCountry: "BR",
    },
    email: "mailto:jhonatanhrcomercial@gmail.com",
    sameAs: ["https://www.instagram.com/jh.rique/"],
    ...(SITE_URL ? { url: SITE_URL } : {}),
    knowsAbout: [
      "Desenvolvimento de sistemas web",
      "Criação de landing pages",
      "Inteligência artificial",
    ],
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script dangerouslySetInnerHTML={{ __html: scrollRevealBootstrap }} />
      <ScrollReveal />
      <main id="conteudo">
        <HeroSection />
        <SystemsSection />
        <SalesPagesSection />
        <CapabilitiesSection />
        <AboutSection />
        <ProofSection />
      </main>
      <SiteFooter />
    </>
  );
}
