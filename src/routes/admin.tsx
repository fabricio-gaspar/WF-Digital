import { createFileRoute, Outlet, Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuth, useHasAdminAccess } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Loader2, Settings, Menu as MenuIcon, Share2, Users, LogOut, Home, ExternalLink, Palette, LayoutGrid } from "lucide-react";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
  head: () => ({ meta: [{ title: "Admin — WF Digital" }, { name: "robots", content: "noindex" }] }),
});

type MenuItem = { to: string; label: string; icon: typeof Home; exact?: boolean; adminOnly?: boolean };
type MenuSection = { section: string; items: MenuItem[] };

const menuSections: MenuSection[] = [
  {
    section: "Geral",
    items: [{ to: "/admin", label: "Painel", icon: Home, exact: true }],
  },
  {
    section: "Layout do site",
    items: [
      { to: "/admin/settings", label: "Identidade & Contato", icon: Palette, adminOnly: true },
      { to: "/admin/menu", label: "Menu", icon: MenuIcon },
      { to: "/admin/social", label: "Redes Sociais", icon: Share2 },
    ],
  },
  {
    section: "Conteúdo",
    items: [
      // Placeholders — will be enabled in Fase 3+
    ],
  },
  {
    section: "Configurações",
    items: [
      { to: "/admin/users", label: "Administradores", icon: Users, adminOnly: true },
    ],
  },
];

function AdminLayout() {
  const { user, loading } = useAuth();
  const { data: hasAccess, role, isLoading: roleLoading } = useHasAdminAccess(user);
  const navigate = useNavigate();
  const path = useRouterState({ select: (r) => r.location.pathname });
  const qc = useQueryClient();

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/auth" });
  }, [loading, user, navigate]);

  const signOut = async () => {
    await supabase.auth.signOut();
    qc.clear();
    toast.success("Sessão encerrada");
    navigate({ to: "/auth" });
  };

  if (loading || (user && roleLoading)) {
    return <div className="min-h-screen grid place-items-center"><Loader2 className="w-6 h-6 animate-spin" /></div>;
  }
  if (!user) return null;

  if (!hasAccess) {
    return (
      <div className="min-h-screen grid place-items-center p-4">
        <div className="max-w-md text-center space-y-4">
          <h1 className="text-2xl font-bold">Sem permissão de acesso</h1>
          <p className="text-muted-foreground text-sm">
            Sua conta ({user.email}) foi criada, mas ainda não tem papel de administrador ou editor. Peça a um admin para promover sua conta,
            ou execute este SQL no Supabase para promover a si mesmo:
          </p>
          <pre className="text-left text-xs bg-muted p-3 rounded overflow-x-auto">{`INSERT INTO public.user_roles (user_id, role)
VALUES ('${user.id}', 'admin');`}</pre>
          <div className="flex gap-2 justify-center">
            <Button variant="outline" onClick={signOut}>Sair</Button>
            <Button asChild><a href={`https://supabase.com/dashboard/project/bxwyeosqffbbkwqpyttd/sql/new`} target="_blank" rel="noreferrer">Abrir SQL Editor <ExternalLink className="w-3 h-3 ml-1"/></a></Button>
          </div>
        </div>
      </div>
    );
  }

  const isAdmin = role === "admin";

  return (
    <div className="min-h-screen flex bg-slate-50">
      <aside className="w-60 shrink-0 bg-white border-r flex flex-col">
        <div className="p-4 border-b">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 grid place-items-center rounded bg-primary text-primary-foreground font-black">W</div>
            <div className="flex flex-col">
              <span className="font-black tracking-tight text-sm leading-none">Admin</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{role}</span>
            </div>
          </Link>
        </div>
        <nav className="flex-1 p-2 space-y-4 overflow-y-auto">
          {menuSections.map((sec) => {
            const items = sec.items.filter((m) => !m.adminOnly || isAdmin);
            if (!items.length) return null;
            return (
              <div key={sec.section}>
                <div className="px-3 pb-1 text-[10px] uppercase font-semibold text-slate-400 tracking-wider">{sec.section}</div>
                <div className="space-y-1">
                  {items.map((m) => {
                    const active = m.exact ? path === m.to : path.startsWith(m.to);
                    return (
                      <Link key={m.to} to={m.to} className={`flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition-colors ${active ? "bg-primary text-primary-foreground" : "text-slate-700 hover:bg-slate-100"}`}>
                        <m.icon className="w-4 h-4" />
                        {m.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>
        <div className="p-3 border-t space-y-2">
          <a href="/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"><ExternalLink className="w-3 h-3"/>Ver site</a>
          <div className="text-xs text-muted-foreground truncate">{user.email}</div>
          <Button variant="outline" size="sm" className="w-full" onClick={signOut}><LogOut className="w-3 h-3 mr-2"/>Sair</Button>
        </div>
      </aside>
      <main className="flex-1 p-6 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}
