import { Metadata } from "next";
import content from "@/content/es.json";

const c = content as any;

export const metadata: Metadata = {
  title: c.chopp.seo.title,
  description: c.chopp.seo.description,
};

const site = c.site;

export default function ChoppPage() {
  const ch = c.chopp;
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-[var(--color-background)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="container-page text-center">
          <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold text-[var(--color-text)] mb-4">
            {ch.hero.title}
          </h1>
          <p className="text-[var(--color-text-muted)]">{ch.hero.subtitle}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-[var(--font-heading)] font-bold text-[var(--color-text)] mb-4">
            {ch.intro.title}
          </h2>
          <p className="text-[var(--color-text-light)] leading-relaxed">
            {ch.intro.description}
          </p>
        </div>
      </section>

      {/* Beers on Tap */}
      <section className="section-padding bg-[var(--color-background)]">
        <div className="container-page max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-[var(--font-heading)] font-bold text-center text-[var(--color-text)] mb-12">
            Cervezas en Chopp
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ch.beersOnTap.map((beer: any) => (
              <div
                key={beer.name}
                className="p-6 rounded-xl bg-[var(--color-surface-alt)] border border-[var(--color-border)] text-center hover:border-gold/30 transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-gold"
                  >
                    <path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2h-2" />
                    <path d="M5 17H3a2 2 0 01-2-2v-4a2 2 0 012-2h2" />
                    <path d="M17 17v1a2 2 0 01-2 2H9a2 2 0 01-2-2v-1" />
                    <path d="M5 17v1a2 2 0 002 2h.5" />
                    <path d="M7 7h10" />
                    <path d="M7 3h10" />
                    <path d="M9 7V3" />
                    <path d="M15 7V3" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                  {beer.name}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-3">
                  {beer.description}
                </p>
                <div className="flex justify-center gap-4 text-xs text-[var(--color-text-light)]">
                  <span>ABV {beer.ABV}</span>
                  <span>IBU {beer.IBU}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Prices */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="rounded-xl bg-[var(--color-surface-alt)] border border-[var(--color-border)] overflow-hidden">
              <div className="px-6 py-3 bg-gold/10 border-b border-[var(--color-border)]">
                <h3 className="text-sm font-semibold text-[var(--color-text)] text-center uppercase tracking-wider">
                  Precios
                </h3>
              </div>
              <div className="divide-y divide-[var(--color-border)]">
                {[
                  { label: "Chopp 400 ml", price: ch.prices.chopp400ml },
                  { label: "Chopp 500 ml", price: ch.prices.chopp500ml },
                  { label: "Chopp 1 Litro", price: ch.prices.chopp1L },
                  { label: "Picada para compartir", price: ch.prices.picada },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between px-6 py-3"
                  >
                    <span className="text-sm text-[var(--color-text)]">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-gold">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Rental */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-page max-w-3xl">
          <div className="rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-[var(--font-heading)] font-bold text-[var(--color-text)] mb-4 text-center">
              {ch.equipmentRental.title}
            </h2>
            <p className="text-[var(--color-text-light)] text-center mb-8">
              {ch.equipmentRental.description}
            </p>
            <div className="text-center mb-6">
              <span className="text-2xl font-bold text-gold">
                {ch.equipmentRental.price}
              </span>
            </div>
            <ul className="space-y-3 max-w-md mx-auto mb-8">
              {ch.equipmentRental.includes.map((item: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-[var(--color-text-light)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-gold mt-0.5 shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--color-background)]">
        <div className="container-page">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-[var(--font-heading)] font-bold text-[var(--color-text)] mb-4">
              {ch.cta.title}
            </h2>
            <p className="text-[var(--color-text-muted)] mb-8">
              {ch.cta.subtitle}
            </p>
            <a
              href={ch.cta.buttonHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-light)] transition-all"
            >
              {ch.cta.buttonText}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
