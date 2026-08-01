import Image from "next/image";
import {
  faqs,
  landingPages,
  navItems,
  systems,
  WHATSAPP_URL,
} from "@/app/_data/portfolio";
import {
  ArrowRight,
  ArrowUpRight,
  PillLink,
  ProjectMedia,
  SectionEyebrow,
} from "./portfolio-ui";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#inicio" aria-label="Jhonatan — início">
        JHONATAN
      </a>
      <nav aria-label="Navegação principal">
        <ul className="site-nav">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function HeroSection() {
  return (
    <section className="hero-section" id="inicio" aria-labelledby="hero-title">
      <div className="page-shell hero-shell">
        <SiteHeader />

        <div className="hero-ruler hero-ruler--top" aria-hidden="true">
          <span />
        </div>
        <div className="hero-vertical hero-vertical--left" aria-hidden="true">
          <span>↑</span>
          <span>↓</span>
        </div>
        <div className="hero-vertical hero-vertical--right" aria-hidden="true">
          <span>↑</span>
          <span>↓</span>
        </div>

        <p className="hero-monument" aria-hidden="true">
          JHONATAN
        </p>

        <div className="hero-portrait" aria-hidden="true">
          <Image
            alt=""
            className="hero-portrait__image"
            fill
            priority
            sizes="(max-width: 767px) 86vw, (max-width: 1279px) 52vw, 38vw"
            src="/images/portfolio/jhonatan-standing.png"
          />
        </div>

        <div className="hero-intro">
          <p className="hero-eyebrow">
            Jhonatan Henrique — Desenvolvedor full-stack
          </p>
          <h1 id="hero-title">Tecnologia que resolve, estratégia que vende.</h1>
          {/* <p className="hero-copy">
            Crio páginas de vendas e sistemas sob medida para transformar
            problemas reais em experiências digitais claras, rápidas e prontas
            para gerar oportunidades.
          </p> */}
        </div>

        <ul className="hero-specialties" aria-label="Especialidades">
          <li>
            <ArrowRight /> Criação de páginas e sistemas profissionais
          </li>
          <li>
            <ArrowRight /> Foco em trafego orgânico e conversão
          </li>
          <li>
            <ArrowRight /> Foco em vender, agilizar e economizar
          </li>
        </ul>

        <div className="hero-actions">
          <div>
            <PillLink href={WHATSAPP_URL} variant="light">
              Iniciar projeto
            </PillLink>
            <p className="hero-microcopy">Conte o que sua empresa precisa.</p>
          </div>
          <PillLink href="#projetos" variant="outline">
            Ver projetos
          </PillLink>
        </div>

        <p className="hero-location">Ji-Paraná · Rondônia</p>
      </div>
    </section>
  );
}

export function SystemsSection() {
  return (
    <section
      className="systems-section"
      id="projetos"
      aria-labelledby="systems-title"
    >
      <div className="page-shell">
        <SectionEyebrow index="01">Sistemas web</SectionEyebrow>

        <h2 className="manifesto-title reveal" id="systems-title">
          <span>Produtos digitais com propósito.</span>
          <span>Sistemas pensados para o uso real.</span>
          <span>Projetos feitos para funcionar.</span>
        </h2>

        <div className="systems-grid">
          {systems.map((project, index) => (
            <article
              className={`system-card system-card--${project.tone} reveal`}
              key={project.name}
            >
              <p className="card-index">0{index + 1}</p>
              <div className="system-card__copy">
                <h3>{project.name}</h3>
                <p className="system-card__tagline">{project.tagline}</p>
                <p>{project.description}</p>
              </div>
              <div className="system-card__media">
                <ProjectMedia
                  alt={project.alt}
                  sizes="(max-width: 767px) 86vw, (max-width: 1100px) 45vw, 31vw"
                  src={project.image}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SalesPagesSection() {
  return (
    <section
      className="sales-section"
      id="servicos"
      aria-labelledby="sales-title"
    >
      <div className="page-shell sales-shell">
        <SectionEyebrow index="02">Páginas de vendas</SectionEyebrow>

        <div className="sales-copy reveal" data-reveal="left">
          <h2 id="sales-title">
            Design chama atenção. <span>Estratégia conduz à ação.</span>
          </h2>
          <p>
            Cada página combina disign estratégico, SEO, performance e textos
            focados para prender seus clientes, visando transformar interesse em
            uma próxima ação clara.
          </p>
          <div className="section-actions">
            <PillLink href={WHATSAPP_URL}>Contratar</PillLink>
            <PillLink href="https://jhhportifollio.vercel.app/" variant="ghost">
              Saber mais
            </PillLink>
          </div>
        </div>

        <div
          className="sales-media reveal"
          data-reveal="right"
          aria-label="Projetos de landing pages"
        >
          <figure className="browser-frame browser-frame--ese">
            <figcaption>{landingPages[0].name}</figcaption>
            <div className="browser-frame__image">
              <ProjectMedia
                alt={landingPages[0].alt}
                sizes="(max-width: 767px) 92vw, 56vw"
                src={landingPages[0].image}
              />
            </div>
          </figure>
          <figure className="browser-frame browser-frame--jhovy">
            <figcaption>{landingPages[1].name}</figcaption>
            <div className="browser-frame__image">
              <ProjectMedia
                alt={landingPages[1].alt}
                sizes="(max-width: 767px) 86vw, 50vw"
                src={landingPages[1].image}
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function CapabilitiesSection() {
  return (
    <section
      className="capabilities-section"
      aria-labelledby="capabilities-title"
    >
      <div className="page-shell">
        <SectionEyebrow index="03">Do objetivo à entrega</SectionEyebrow>

        <div className="capabilities-grid">
          <div
            className="capabilities-media reveal"
            data-reveal="left"
            aria-label="Amostra de projetos"
          >
            <figure className="capability-media capability-media--primary">
              <ProjectMedia
                alt="Detalhe da landing page da ESE Tecnologia"
                sizes="(max-width: 767px) 78vw, 28vw"
                src="/images/portfolio/ese-landing-page.png"
              />
            </figure>
            <figure className="capability-media capability-media--tasks">
              <ProjectMedia
                alt="Detalhe do painel de tarefas do Lumen Tasks"
                sizes="(max-width: 767px) 62vw, 22vw"
                src="/images/portfolio/lumen-tasks.png"
              />
            </figure>
            <figure className="capability-media capability-media--finance">
              <ProjectMedia
                alt="Detalhe do painel de controle financeiro"
                sizes="(max-width: 767px) 62vw, 22vw"
                src="/images/portfolio/financas-system.png"
              />
            </figure>
          </div>

          <div className="capabilities-copy reveal" data-reveal="right">
            <h2 id="capabilities-title">
              Da página de vendas ao <span>sistema completo.</span>
            </h2>
            <p>
              Desenvolvo experiências digitais que começam com um objetivo claro
              e evoluem com o negócio — de páginas focadas em conversão a
              sistemas preparados para rotinas mais complexas.
            </p>
          </div>
        </div>

        <div className="problem-solution">
          <div className="problem-list reveal" data-reveal="left">
            <p>
              Uma boa ideia sem uma experiência digital à altura perde força.
            </p>
            <p>
              Uma página confusa faz o visitante sair antes de entender a
              oferta.
            </p>
            <p>
              Processos manuais consomem tempo que deveria estar no crescimento.
            </p>
            <p>Tecnologia sem objetivo vira custo, não solução.</p>
          </div>
          <div className="solution-copy reveal" data-reveal="right">
            <p className="solution-label">A abordagem</p>
            <p>
              O trabalho começa pelo objetivo do negócio. A partir dele, cada
              decisão de copy, interface e código precisa conduzir a uma
              experiência mais clara, útil e preparada para evoluir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="about-section" id="sobre" aria-labelledby="about-title">
      <div className="page-shell">
        <SectionEyebrow index="04">Sobre</SectionEyebrow>

        <div className="about-grid">
          <div className="about-signature reveal" data-reveal="left">
            <p>Desenvolvedor full-stack</p>
            <h2 id="about-title">JHONATAN</h2>
            <span>Ji-Paraná · RO</span>
          </div>

          <figure className="about-portrait reveal">
            <Image
              alt="Jhonatan Henrique sentado, vestindo terno preto e gravata vermelha"
              className="about-portrait__image"
              fill
              sizes="(max-width: 767px) 92vw, (max-width: 1100px) 48vw, 38vw"
              src="/images/portfolio/jhonatan-portrait.png"
            />
          </figure>

          <div className="about-copy reveal" data-reveal="right">
            <p>
              Sou Jhonatan Henrique, desenvolvedor full-stack e estudante do
              IFRO em Ji-Paraná, Rondônia. Transformo problemas de empresas em
              páginas e sistemas claros, rápidos e úteis.
            </p>
            <p>
              Gosto de unir estratégia, design e tecnologia para ajudar negócios
              a vender melhor, ganhar eficiência e permanecer à frente da
              concorrência.
            </p>
            <PillLink href={WHATSAPP_URL}>Vamos conversar</PillLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemsComposition() {
  return (
    <div
      className="proof-composition proof-composition--systems reveal"
      data-reveal="right"
    >
      {systems.map((project, index) => (
        <figure
          className={`proof-shot proof-shot--system-${index + 1}`}
          key={project.name}
        >
          <ProjectMedia
            alt={project.alt}
            sizes="(max-width: 767px) 75vw, 31vw"
            src={project.image}
          />
        </figure>
      ))}
    </div>
  );
}

function LandingPagesComposition() {
  return (
    <div
      className="proof-composition proof-composition--pages reveal"
      data-reveal="left"
    >
      {landingPages.map((project, index) => (
        <figure
          className={`proof-shot proof-shot--page-${index + 1}`}
          key={project.name}
        >
          <ProjectMedia
            alt={project.alt}
            sizes="(max-width: 767px) 78vw, 38vw"
            src={project.image}
          />
        </figure>
      ))}
    </div>
  );
}

export function ProofSection() {
  return (
    <section className="proof-section" aria-labelledby="proof-title">
      <div className="page-shell">
        <SectionEyebrow index="05">Prova por execução</SectionEyebrow>
        <h2 className="sr-only" id="proof-title">
          Projetos apresentados visualmente
        </h2>

        <div className="proof-row proof-row--systems">
          <div className="proof-copy reveal" data-reveal="left">
            <p className="proof-count">03</p>
            <h3>3 sistemas criados para dores reais.</h3>
            <p>
              Organização de rotinas, operação de restaurantes e controle
              financeiro: projetos diferentes, construídos para tornar tarefas
              importantes mais simples.
            </p>
          </div>
          <SystemsComposition />
        </div>

        <div className="proof-row proof-row--pages">
          <LandingPagesComposition />
          <div className="proof-copy reveal" data-reveal="right">
            <p className="proof-count">02</p>
            <h3>2 páginas construídas para conduzir à ação.</h3>
            <p>
              Projetos que unem mensagem, hierarquia visual e caminhos claros
              para transformar visitantes em conversas e oportunidades.
            </p>
          </div>
        </div>

        <div className="offer-band reveal">
          <p className="offer-band__label">O que posso criar</p>
          <p>
            Landing pages, sistemas web e soluções digitais desenvolvidas de
            acordo com o problema, o objetivo e o momento de cada empresa.
          </p>
          <PillLink href={WHATSAPP_URL} variant="outline">
            Solicitar uma conversa
          </PillLink>
        </div>

        <div className="faq-grid">
          <div className="faq-intro reveal" data-reveal="left">
            <p className="faq-kicker">Antes de começar</p>
            <h3>Respostas diretas para decisões melhores.</h3>
            <p className="faq-reassurance">
              Explique sua necessidade diretamente pelo WhatsApp antes de
              definir o projeto.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <details className="reveal" key={item.question}>
                <summary>
                  <span>0{index + 1}</span>
                  {item.question}
                  <span className="faq-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="final-cta reveal">
          <div className="final-cta__line" aria-hidden="true" />
          <p className="final-cta__index">06 / CONTATO</p>
          <h3>Seu próximo projeto pode estar aqui.</h3>
          <p>
            Se sua empresa precisa vender melhor, organizar uma operação ou
            transformar uma ideia em produto digital, vamos conversar.
          </p>
          <PillLink href={WHATSAPP_URL} variant="light">
            Explicar meu projeto
          </PillLink>
          <p className="final-cta__ps">
            P.S.: Você não precisa chegar com a solução pronta. Comece contando
            o problema que sua empresa precisa resolver.
          </p>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contato">
      <div className="page-shell footer-grid">
        <a className="footer-brand reveal" href="#inicio">
          JHONATAN
        </a>
        <div className="footer-contact reveal">
          <p>Contato comercial</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            WhatsApp <ArrowUpRight />
          </a>
          <a href="mailto:jhonatanhrcomercial@gmail.com">
            jhonatanhrcomercial@gmail.com <ArrowUpRight />
          </a>
        </div>
        <div className="footer-social reveal">
          <p>Social</p>
          <a
            href="https://www.instagram.com/jh.rique/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram <ArrowUpRight />
          </a>
        </div>
        <p className="footer-copyright reveal">
          © 2026 Jhonatan Henrique. Todos os direitos reservados.
        </p>
        <a className="back-to-top reveal" href="#inicio">
          Voltar ao topo <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
