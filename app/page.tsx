import {
  AboutSection,
  CapabilitiesSection,
  HeroSection,
  ProofSection,
  SalesPagesSection,
  SiteFooter,
  SystemsSection,
} from "@/app/_components/portfolio-sections";
import { SITE_URL } from "@/app/_data/site";

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
