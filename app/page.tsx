import { Metadata } from "next";
import content from "@/content/es.json";
import Hero from "@/components/hero";
import FeaturesSection from "@/components/features-section";
import MenuPreviewSection from "@/components/menu-preview-section";
import CtaBanner from "@/components/cta-banner";

const c = content as any;

export const metadata: Metadata = {
  title: c.home.seo.title,
  description: "Cerveza artesanal de calidad en San Lorenzo. Estilos únicos para todos los paladares.",
};

export default function HomePage() {
  const h = c.home;
  const site = c.site;

  // Beer-style features items (use home.features data but with beer context)
  const beerFeatures = h.features.items.map((item: any) => ({
    icon: item.icon,
    title: item.title,
    description: item.description,
  }));

  // Beer categories for menu preview
  const cervezaCategories = [
    { id: "ipa", name: "IPA", priceRange: "Gs 25.000" },
    { id: "lager", name: "Lager", priceRange: "Gs 20.000" },
    { id: "stout", name: "Stout", priceRange: "Gs 30.000" },
    { id: "porter", name: "Porter", priceRange: "Gs 28.000" },
    { id: "pale-ale", name: "Pale Ale", priceRange: "Gs 25.000" },
  ];

  return (
    <>
      {/* Hero */}
      <Hero
        eyebrow="Trentina Cerveza Artesanal"
        headline="Cerveza artesanal con identidad"
        subheadline="Elaborada en San Lorenzo con ingredientes seleccionados. IPA, Lager, Stout, Porter y más estilos para descubrir."
        ctaPrimaryText="Ver Cervezas"
        ctaPrimaryHref="/cervezas"
        ctaSecondaryText="Pedir por WhatsApp"
        ctaSecondaryHref={`https://wa.me/${site.whatsapp}`}
        variant="dark"
      />

      {/* Features — Nuestras Cervezas */}
      <FeaturesSection
        title={h.features.title}
        subtitle={h.features.subtitle}
        items={beerFeatures}
      />

      {/* Pack Promo Section */}
      <section className="section-padding bg-[var(--color-background)]">
        <div className="container-page text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold mb-4 block">
            Promociones
          </span>
          <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-text)] mb-4">
            Pack Trentina
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto mb-10">
            Llevate un mix de nuestras mejores cervezas a un precio especial.
            Ideal para compartir con amigos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            {[
              { name: "Pack 6 Pack", desc: "6 botellas de 355ml", price: "Gs 90.000" },
              { name: "Pack 12 Pack", desc: "12 botellas de 355ml", price: "Gs 165.000" },
              { name: "Pack Mix", desc: "6 estilos diferentes", price: "Gs 100.000" },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className="p-6 rounded-xl bg-[var(--color-surface-alt)] border border-[var(--color-border)] hover:border-gold/40 transition-all"
              >
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">
                  {pkg.name}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-3">{pkg.desc}</p>
                <span className="text-lg font-bold text-gold">{pkg.price}</span>
              </div>
            ))}
          </div>
          <a
            href={`https://wa.me/${site.whatsapp}?text=Hola!%20Quiero%20pedir%20un%20Pack%20Trentina`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-gold text-[var(--color-background)] font-semibold rounded-lg hover:bg-[var(--color-accent-light)] transition-all"
          >
            Pedir Pack
          </a>
        </div>
      </section>

      {/* Cervezas Preview */}
      <MenuPreviewSection
        title="Nuestras Cervezas"
        description="Explorá nuestra variedad de estilos artesanales"
        categories={cervezaCategories}
      />

      {/* Chopp / Beer Banner */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-900 to-amber-950 p-10 md:p-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-[0.3em] text-gold mb-4 block">
                Chopp
              </span>
              <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] font-bold text-white mb-4">
                Cerveza tirada bien fría
              </h2>
              <p className="text-[var(--color-primary-light)] mb-8 max-w-lg mx-auto">
                Pasá por nuestro local y disfrutá de la mejor cerveza artesanal
                tirada al momento. También disponible para llevar en growlers.
              </p>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-gold text-amber-950 font-semibold rounded-lg hover:bg-[var(--color-accent-light)] transition-all"
              >
                Consultar Disponibilidad
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        title={h.cta?.title || "¿Listo para probar nuestras cervezas?"}
        subtitle={h.cta?.subtitle || "Pedí por WhatsApp o visitanos en el local"}
        buttonText={h.cta?.buttonText || "Pedir Ahora"}
        buttonHref={h.cta?.buttonHref || `https://wa.me/${site.whatsapp}`}
      />
    </>
  );
}
