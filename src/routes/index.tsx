import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Instagram, Music2, MapPin, Sparkles, Gem, Hand, Palette, Check, Star } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { HeroSlider } from "@/components/HeroSlider";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { icon: Gem, title: "Alongamento em Gel", desc: "Extensões duráveis, naturais e perfeitamente moldadas ao seu formato." },
  { icon: Sparkles, title: "Banho de Gel", desc: "Brilho intenso e resistência por até 3 semanas nas unhas naturais." },
  { icon: Hand, title: "Manicure Russa", desc: "Técnica precisa com cutilagem a seco / tesoura, deixando cutículas impecáveis." },
  { icon: Palette, title: "Nail Art Personalizada", desc: "Designs únicos criados exclusivamente para o seu estilo." },
];

const portfolio = [
  { src: p1, alt: "Francesinha clássica", span: "row-span-2" },
  { src: p2, alt: "Nude com detalhes dourados", span: "" },
  { src: p5, alt: "Nail art floral com detalhes dourados", span: "" },
  { src: p3, alt: "Manicure em preto brilhoso", span: "row-span-2" },
  { src: p4, alt: "Manicure russa nude", span: "" },
  { src: p6, alt: "Esmaltação rosa cremosa", span: "" },
];

function Index() {
  const [form, setForm] = useState({ nome: "", whats: "", servico: "", msg: "" });
  const [sent, setSent] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  useReveal();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroRef.current) {
            heroRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#fbf8f4] text-neutral-900 font-sans">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-white/60 border-b border-neutral-200/60">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-2xl tracking-wide">
            Bella <span className="italic text-[#b8935a]">Nails</span>
          </a>
          <ul className="hidden md:flex gap-8 text-sm font-medium text-neutral-700">
            <li><a href="#sobre" className="hover:text-[#b8935a] transition">Sobre</a></li>
            <li><a href="#portfolio" className="hover:text-[#b8935a] transition">Portfólio</a></li>
            <li><a href="#servicos" className="hover:text-[#b8935a] transition">Serviços</a></li>
            <li><a href="#contato" className="hover:text-[#b8935a] transition">Contato</a></li>
          </ul>
          <a href="#contato" className="rounded-full bg-neutral-900 text-white text-sm px-5 py-2.5 hover:bg-[#b8935a] transition-colors">
            Agendar
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div 
          ref={heroRef}
          className="absolute inset-0"
          style={{ transform: `translateY(0px)` }}
        >
          <HeroSlider images={[hero, p5]} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none z-10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-white">
          <p className="font-script text-3xl md:text-4xl text-[#e8c98a] mb-4">by Isabella Moraes</p>
          <h1 className="font-display font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] max-w-3xl">
            Transformando<br /><em className="italic text-[#e8c98a]">Unhas</em> em Arte
          </h1>
          <p className="mt-6 max-w-lg text-base md:text-lg text-neutral-200 font-light">
            Atendimento exclusivo com foco em higiene, técnica e design.
            Cada cliente é uma nova obra.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contato" className="rounded-full bg-[#b8935a] hover:bg-[#a07f4a] text-white px-8 py-3.5 text-sm font-medium tracking-wide transition-all hover:scale-105">
              Agendar horário
            </a>
            <a href="#portfolio" className="rounded-full border border-white/60 hover:border-white text-white px-8 py-3.5 text-sm font-medium tracking-wide transition">
              Ver portfólio
            </a>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative order-2 md:order-1 reveal">
            <img src={about} alt="Isabella Moraes, nail designer" className="w-full rounded-sm shadow-2xl" width={900} height={1100} loading="lazy" />
            <div className="absolute -bottom-6 -right-6 bg-[#b8935a] text-white p-6 rounded-sm hidden md:block">
              <p className="font-display text-4xl">+<AnimatedCounter end={8} /></p>
              <p className="text-xs uppercase tracking-widest">anos de experiência</p>
            </div>
          </div>
          <div className="order-1 md:order-2 reveal reveal-delay-1">
            <p className="font-script text-3xl text-[#b8935a] mb-2">Sobre mim</p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6 leading-tight">
              Precisão, delicadeza e <em className="italic">amor</em> pelo detalhe.
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Sou Isabella Moraes, nail designer há mais de 8 anos, apaixonada por transformar
              cada visita em um ritual de cuidado e autoestima. Trabalho com produtos importados,
              biossegurança rigorosa e técnicas atuais para entregar unhas saudáveis e impecáveis.
            </p>
            <ul className="space-y-3">
              {["Certificação em Manicure Russa (Escola Nail Pro)", "Especialização em Alongamento em Gel", "Biossegurança e esterilização em autoclave", "Workshop internacional de Nail Art"].map((c) => (
                <li key={c} className="flex items-start gap-3 text-neutral-700">
                  <Check className="w-5 h-5 text-[#b8935a] mt-0.5 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="font-script text-3xl text-[#b8935a]">Portfólio</p>
            <h2 className="font-display text-4xl md:text-5xl font-light mt-2">
              Trabalhos <em className="italic">recentes</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[260px] gap-4">
            {portfolio.map((p, i) => {
              if (i === 0) {
                return (
                  <div key={i} className={`overflow-hidden rounded-sm group relative reveal reveal-delay-1 ${p.span}`}>
                    <BeforeAfterSlider beforeImage={p2} afterImage={p1} />
                  </div>
                );
              }
              return (
                <Dialog key={i}>
                  <DialogTrigger asChild>
                    <div className={`overflow-hidden rounded-sm group relative reveal cursor-pointer reveal-delay-${(i % 4) + 1} ${p.span}`}>
                      <img src={p.src} alt={p.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <p className="text-white text-sm font-light">{p.alt}</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] md:max-w-4xl p-0 bg-transparent border-none shadow-none [&>button]:bg-white [&>button]:text-black [&>button]:rounded-full [&>button]:p-2 [&>button]:opacity-70 hover:[&>button]:opacity-100">
                    <img src={p.src} alt={p.alt} className="w-full h-auto max-h-[90vh] object-contain rounded-md" />
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="font-script text-3xl text-[#b8935a]">O que ofereço</p>
            <h2 className="font-display text-4xl md:text-5xl font-light mt-2">
              Serviços <em className="italic">exclusivos</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className={`group bg-white p-8 rounded-sm border border-neutral-200 hover:border-[#b8935a] hover:shadow-[0_4px_20px_rgba(184,147,90,0.15)] transition-all duration-300 hover:-translate-y-[4px] reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="w-14 h-14 rounded-full bg-[#f5ede1] flex items-center justify-center mb-6 group-hover:bg-[#b8935a] transition-all duration-300 group-hover:scale-110">
                  <s.icon className="w-6 h-6 text-[#b8935a] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 md:py-32 px-6 bg-[#fbf8f4]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="font-script text-3xl text-[#b8935a]">O que dizem</p>
            <h2 className="font-display text-4xl md:text-5xl font-light mt-2">
              Feedback das <em className="italic">clientes</em>
            </h2>
          </div>
          <div className="px-4 md:px-12 reveal reveal-delay-1">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {[
                  { name: "Mariana Souza", text: "Trabalho impecável! A durabilidade do gel é incrível e o formato ficou super natural.", before: p2, after: p1 },
                  { name: "Camila Rodrigues", text: "A melhor manicure russa que já fiz. A cutilagem é perfeita e as unhas ficam lindas por semanas.", before: p4, after: p5 },
                  { name: "Juliana Mendes", text: "Ambiente super aconchegante e o detalhe da nail art foi exatamente como pedi. Recomendo muito!", before: p6, after: p3 },
                  { name: "Amanda Costa", text: "Profissionalismo e higiene nota 10. Sem contar a simpatia da Isabella. Virei cliente fiel!", before: p2, after: p5 }
                ].map((dep, idx) => (
                  <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="bg-white p-8 rounded-sm border border-neutral-200 h-full flex flex-col">
                      <div className="flex gap-1 mb-4 text-[#b8935a]">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                      <p className="text-neutral-600 mb-6 italic flex-grow">"{dep.text}"</p>
                      <p className="font-display text-neutral-900">— {dep.name}</p>
                      
                      {/* Antes e Depois (Miniatura) */}
                      <div className="mt-6 flex items-center gap-3 pt-6 border-t border-neutral-100">
                        <div className="relative w-16 h-16 rounded-md overflow-hidden shadow-sm border border-neutral-100">
                          <img src={dep.before} alt="Antes" className="w-full h-full object-cover" loading="lazy" />
                          <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm text-white text-[9px] uppercase tracking-wider text-center py-0.5">Antes</div>
                        </div>
                        <div className="relative w-16 h-16 rounded-md overflow-hidden shadow-sm border border-neutral-100">
                          <img src={dep.after} alt="Depois" className="w-full h-full object-cover" loading="lazy" />
                          <div className="absolute bottom-0 inset-x-0 bg-[#b8935a]/80 backdrop-blur-sm text-white text-[9px] uppercase tracking-wider text-center py-0.5">Depois</div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4 bg-white border-neutral-200 text-neutral-600 hover:text-[#b8935a] hover:border-[#b8935a]" />
              <CarouselNext className="hidden md:flex -right-4 bg-white border-neutral-200 text-neutral-600 hover:text-[#b8935a] hover:border-[#b8935a]" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24 md:py-32 px-6 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="reveal">
            <p className="font-script text-3xl text-[#e8c98a]">Vamos conversar</p>
            <h2 className="font-display text-4xl md:text-5xl font-light mt-2 mb-6">
              Agende seu <em className="italic">horário</em>
            </h2>
            <p className="text-neutral-300 mb-8 leading-relaxed">
              Preencha o formulário e entrarei em contato pelo WhatsApp para
              confirmar seu agendamento. Atendimento com hora marcada.
            </p>
            <div className="space-y-3 text-sm text-neutral-300">
              <p className="flex items-center gap-3"><MapPin className="w-4 h-4 text-[#e8c98a]" /> Rua das Camélias, 128 — Jardim Paulista, SP</p>
              <p className="flex items-center gap-3"><Instagram className="w-4 h-4 text-[#e8c98a]" /> @bellanails.studio</p>
            </div>
          </div>
          <form onSubmit={submit} className="space-y-4 reveal reveal-delay-1">
            <input required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} placeholder="Seu nome" className="w-full bg-transparent border border-neutral-700 focus:border-[#e8c98a] rounded-sm px-4 py-3 text-sm outline-none transition-colors" />
            <input required value={form.whats} onChange={(e) => setForm({ ...form, whats: e.target.value })} placeholder="WhatsApp" className="w-full bg-transparent border border-neutral-700 focus:border-[#e8c98a] rounded-sm px-4 py-3 text-sm outline-none transition-colors" />
            <select required value={form.servico} onChange={(e) => setForm({ ...form, servico: e.target.value })} className="w-full bg-neutral-900 border border-neutral-700 focus:border-[#e8c98a] rounded-sm px-4 py-3 text-sm outline-none transition-colors">
              <option value="">Serviço desejado</option>
              {services.map((s) => <option key={s.title}>{s.title}</option>)}
            </select>
            <textarea value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} rows={4} placeholder="Mensagem (opcional)" className="w-full bg-transparent border border-neutral-700 focus:border-[#e8c98a] rounded-sm px-4 py-3 text-sm outline-none transition-colors resize-none" />
            <button type="submit" className="w-full rounded-full bg-[#b8935a] hover:bg-[#a07f4a] text-white py-3.5 text-sm font-medium tracking-wide transition-all hover:scale-[1.02]">
              {sent ? "Recebido! Entrarei em contato." : "Enviar mensagem"}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-400 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-display text-2xl text-white">Bella <span className="italic text-[#b8935a]">Nails</span></p>
          <p className="text-xs text-center">Rua das Camélias, 128 — Jardim Paulista, São Paulo</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-neutral-700 hover:border-[#b8935a] hover:text-[#b8935a] flex items-center justify-center transition"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full border border-neutral-700 hover:border-[#b8935a] hover:text-[#b8935a] flex items-center justify-center transition"><Music2 className="w-4 h-4" /></a>
          </div>
        </div>
        <p className="text-center text-xs mt-8 text-neutral-600">© {new Date().getFullYear()} Bella Nails Studio. Todos os direitos reservados.</p>
      </footer>
      <FloatingWhatsApp />
    </div>
  );
}
