export function LogoStrip() {
  return (
    <section className="border-y bg-white">
      <div className="container-x py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center justify-center opacity-50 hover:opacity-90 transition-opacity">
            <svg viewBox="0 0 110 28" className="h-6 w-auto fill-current text-foreground/70">
              <path d="M14 4l8 10-8 10L6 14z" />
              <text x="28" y="20" fontFamily="Rubik, sans-serif" fontSize="14" fontWeight="700">envato</text>
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
}
