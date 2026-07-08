import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Menu as MenuIcon, Share2, Users, LayoutGrid, MessageSquare, FileText } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth, useHasAdminAccess } from "@/hooks/useAuth";

export const Route = createFileRoute("/admin/")({ component: Dashboard });

function useDashboardStats() {
  return useQuery({
    queryKey: ["admin-dashboard-stats"],
    queryFn: async () => {
      const [menuRes, socialRes, rolesRes] = await Promise.all([
        supabase.from("nav_items").select("*", { count: "exact", head: true }),
        supabase.from("social_links").select("*", { count: "exact", head: true }),
        supabase.from("user_roles").select("*", { count: "exact", head: true }).in("role", ["admin", "editor"]),
      ]);
      return {
        menuItems: menuRes.count ?? 0,
        socialLinks: socialRes.count ?? 0,
        adminUsers: rolesRes.count ?? 0,
      };
    },
    staleTime: 30_000,
  });
}

function Dashboard() {
  const { user } = useAuth();
  const { role } = useHasAdminAccess(user);
  const { data: stats } = useDashboardStats();
  const isAdmin = role === "admin";

  const kpis = [
    { label: "Itens de menu", value: stats?.menuItems ?? "—", icon: MenuIcon, to: "/admin/menu" },
    { label: "Redes sociais", value: stats?.socialLinks ?? "—", icon: Share2, to: "/admin/social" },
    { label: "Usuários admin", value: stats?.adminUsers ?? "—", icon: Users, to: "/admin/users" },
    { label: "Posts publicados", value: "—", icon: FileText, to: "/admin", disabled: true, hint: "Em breve (Fase 4)" },
  ];

  const shortcuts = [
    { to: "/admin/settings", label: "Identidade & Contato", desc: "Logo, cores, fontes, contato, SEO", icon: Settings, adminOnly: true },
    { to: "/admin/menu", label: "Menu", desc: "Itens do menu principal, ordem e visibilidade", icon: MenuIcon },
    { to: "/admin/social", label: "Redes Sociais", desc: "Facebook, Instagram, Twitter, LinkedIn e outras", icon: Share2 },
    { to: "/admin/users", label: "Administradores", desc: "Conceda ou remova papel de admin/editor", icon: Users, adminOnly: true },
  ].filter((s) => !s.adminOnly || isAdmin);

  return (
    <div className="max-w-6xl">
      <h1 className="text-3xl font-black mb-1">Painel Administrativo</h1>
      <p className="text-muted-foreground mb-6">Bem-vindo, {user?.email}. Gerencie o conteúdo do site sem tocar no código.</p>

      <div className="grid gap-3 grid-cols-2 md:grid-cols-4 mb-8">
        {kpis.map((k) => (
          <Card key={k.label} className={k.disabled ? "opacity-60" : ""}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <k.icon className="w-4 h-4 text-muted-foreground" />
                {!k.disabled && <Link to={k.to} className="text-[11px] text-primary hover:underline">Abrir →</Link>}
              </div>
              <div className="text-2xl font-black">{k.value}</div>
              <div className="text-xs text-muted-foreground">{k.label}</div>
              {k.hint && <div className="text-[10px] text-muted-foreground mt-1">{k.hint}</div>}
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-lg font-bold mb-3 flex items-center gap-2"><LayoutGrid className="w-4 h-4"/>Atalhos</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {shortcuts.map((c) => (
          <Link key={c.to} to={c.to} className="block">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader className="flex flex-row items-center gap-3 space-y-0">
                <div className="w-10 h-10 grid place-items-center rounded bg-primary/10 text-primary"><c.icon className="w-5 h-5"/></div>
                <CardTitle className="text-lg">{c.label}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{c.desc}</CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8 rounded-lg border bg-white p-4 text-sm text-muted-foreground flex items-start gap-3">
        <MessageSquare className="w-4 h-4 mt-0.5 text-primary shrink-0"/>
        <div>
          <div className="font-medium text-foreground mb-1">Próximas fases</div>
          Este painel será expandido com módulos de Conteúdo (Serviços, Blog, Depoimentos, FAQ, Equipe, Galeria), Planos, WhatsApp/Chatbot, Orçamentos e SEO por página. Fase atual: <strong>1 — Fundação</strong>.
        </div>
      </div>
    </div>
  );
}
