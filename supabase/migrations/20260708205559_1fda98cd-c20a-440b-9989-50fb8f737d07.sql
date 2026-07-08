-- 1. Drop duplicate storage policies (keep the "Admin/editor can *" set)
DROP POLICY IF EXISTS "Admins upload site assets" ON storage.objects;
DROP POLICY IF EXISTS "Admins update site assets" ON storage.objects;
DROP POLICY IF EXISTS "Admins delete site assets" ON storage.objects;
DROP POLICY IF EXISTS "Site assets public read" ON storage.objects;

-- 2. Tighten EXECUTE grants on SECURITY DEFINER functions
-- Role-check helpers: only authenticated needs to call them (RLS policies + app code).
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.has_any_role(uuid, public.app_role[]) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.is_admin_or_editor(uuid) FROM PUBLIC, anon;

GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.has_any_role(uuid, public.app_role[]) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.is_admin_or_editor(uuid) TO authenticated, service_role;

-- Trigger-only functions must not be callable via the API at all.
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;