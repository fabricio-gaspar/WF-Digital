import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Check, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/plans")({
  head: () => ({
    meta: [
      { title: "Planos — WF Digital Soluções de TI" },
      {
        name: "description",
        content:
          "Planos mensais da WF Digital: Ponto Digital e Lavanderia Residencial e Industrial. Escolha o melhor plano para a sua empresa.",
      },
    ],
  }),
  component: PlansPage,
});

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Ponto Digital",
    price: "149",
    period: "/mês",
    description: "Controle de jornada digital para a sua equipe",
    featured: true,
    features: [
      "Registro de entrada, saída e intervalos",
      "Acesso online por computador e celular",
      "Colaboradores ilimitados",
      "Banco de horas e relatórios",
      "Ajustes e justificativas de ponto",
      "Backup automático das informações",
      "Suporte técnico incluso",
      "Atualizações contínuas",
    ],
  },
  {
    name: "Lavanderia",
    price: "249",
    period: "/mês",
    description: "Gestão completa para lavanderias residenciais e industriais",
    features: [
      "Cadastro de clientes residenciais e corporativos",
      "Controle de pedidos e ordens de serviço",
      "Registro de peças, quantidades e valores",
      "Status do serviço em cada etapa",
      "Controle de entregas e retiradas",
      "Financeiro por cliente e período",
      "Relatórios operacionais e de faturamento",
      "Suporte técnico e atualizações inclusos",
    ],
  },
];

function PlansPage() {
  return (
    <SiteShell>
      <section className="bg-[#121212] py-24 md:py-28">
        <div className="container-x">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <nav className="flex justify-center items-center gap-2 text-sm text-zinc-500 mb-6">
              <Link to="/" className="hover:text-zinc-300 transition-colors">Início</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary">Planos</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              A solução certa para sua <span className="text-primary">operação</span>
            </h1>
            <p className="mt-5 text-zinc-400 text-lg">
              Escolha o plano que melhor se adapta às necessidades da sua empresa. Gestão simplificada e resultados exponenciais.
            </p>
          </div>

          {/* Pricing grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto reveal-stagger">
            {plans.map((p) => (
              <article
                key={p.name}
                className={`reveal relative rounded-3xl p-8 md:p-10 flex flex-col transition-transform duration-500 hover:-translate-y-2 ${
                  p.featured
                    ? "bg-zinc-900 border-2 border-primary shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--color-primary)_55%,transparent)]"
                    : "bg-zinc-900/50 border border-zinc-800"
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap">
                    Mais Procurado
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
                  <p className="text-sm text-zinc-500 mb-6">{p.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-primary">R$</span>
                    <span className="text-6xl font-bold text-white tracking-tighter leading-none">{p.price}</span>
                    <span className="text-zinc-500 font-medium ml-1">{p.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-3 text-sm ${p.featured ? "text-zinc-300" : "text-zinc-400"}`}
                    >
                      <Check
                        className={`w-5 h-5 shrink-0 mt-0.5 ${p.featured ? "text-primary" : "text-zinc-600"}`}
                        strokeWidth={3}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3">
                  <Link
                    to="/contact"
                    className={`w-full py-4 text-center font-bold rounded-xl transition-colors ${
                      p.featured
                        ? "bg-primary hover:bg-[#e85a2c] text-white"
                        : "bg-zinc-100 hover:bg-white text-zinc-900"
                    }`}
                  >
                    Começar teste grátis
                  </Link>
                  <Link
                    to="/contact"
                    className={`w-full py-4 text-center font-semibold rounded-xl border transition-all ${
                      p.featured
                        ? "border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white"
                        : "border-zinc-800 hover:border-zinc-700 text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    Falar com especialista
                  </Link>
                  <p className="text-center text-xs text-zinc-600 mt-1">
                    7 dias grátis · sem cartão de crédito
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-14 text-center text-zinc-600 text-sm reveal">
            Precisa de um plano personalizado?{" "}
            <Link to="/contact" className="text-primary hover:underline font-semibold">
              Entre em contato conosco
            </Link>
            .
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
