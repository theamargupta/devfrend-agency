import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/data/caseStudies";
import { BRAND } from "@/lib/constants";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

type Params = { slug: string };

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((c) => c.slug === slug);
  if (!study) return { title: "Not found" };
  const title = `${study.title} — ${BRAND.name}`;
  return {
    title,
    description: study.hero.subhead,
    openGraph: {
      title,
      description: study.hero.subhead,
      type: "article",
    },
    twitter: {
      title,
      description: study.hero.subhead,
      card: "summary_large_image",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((c) => c.slug === slug);
  if (!study) notFound();

  const next = CASE_STUDIES.find((c) => c.slug === study.nextSlug);

  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      <Navbar />

      <article className="mx-auto w-full max-w-[var(--container-max)] px-[var(--gutter)] pt-40 pb-24">
        <Link
          href="/#work"
          data-cursor="magnet"
          className="font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-fg-2)] hover:text-[var(--color-fg-0)]"
        >
          ← Back to work
        </Link>

        <header className="mt-10 grid gap-8 md:grid-cols-12">
          <p className="font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-accent-400)] md:col-span-3">
            § {study.hero.eyebrow}
          </p>
          <div className="md:col-span-9">
            <h1
              className="font-display font-semibold text-[var(--color-fg-0)]"
              style={{
                fontSize: "var(--text-5xl)",
                lineHeight: "var(--leading-tight)",
                letterSpacing: "var(--tracking-tighter)",
              }}
            >
              {study.hero.headline}
            </h1>
            <p
              className="mt-6 max-w-3xl font-body text-[var(--color-fg-1)]"
              style={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-snug)" }}
            >
              {study.hero.subhead}
            </p>
          </div>
        </header>

        <dl className="mt-16 grid grid-cols-2 gap-6 border-y border-[var(--color-surface-3)] py-8 md:grid-cols-4">
          {[
            ["Sector", study.sector],
            ["Year", study.year],
            ["Role", study.role],
            ["Stack", study.stack.slice(0, 3).join(" · ")],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-fg-2)]">
                {k}
              </dt>
              <dd className="mt-2 font-body text-[var(--color-fg-0)]">{v}</dd>
            </div>
          ))}
        </dl>

        <section className="mt-24 grid gap-10 md:grid-cols-12">
          <h2 className="font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-fg-2)] md:col-span-3">
            01 · Problem
          </h2>
          <p
            className="font-body text-[var(--color-fg-1)] md:col-span-9"
            style={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-snug)" }}
          >
            {study.problem}
          </p>
        </section>

        <section className="mt-24 grid gap-10 md:grid-cols-12">
          <h2 className="font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-fg-2)] md:col-span-3">
            02 · Approach
          </h2>
          <ol className="grid gap-5 md:col-span-9">
            {study.approach.map((a, i) => (
              <li
                key={a}
                className="flex gap-4 border-l border-[var(--color-surface-3)] pl-5"
              >
                <span className="font-mono text-xs text-[var(--color-accent-400)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className="font-body text-[var(--color-fg-1)]"
                  style={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-snug)" }}
                >
                  {a}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-24 grid gap-10 md:grid-cols-12">
          <h2 className="font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-fg-2)] md:col-span-3">
            03 · Outcome
          </h2>
          <div className="grid gap-6 md:col-span-9 md:grid-cols-3">
            {study.outcome.map((o) => (
              <div
                key={o.metric}
                className="rounded-2xl border border-[var(--color-surface-3)] bg-[color:var(--color-surface-1)]/50 p-6"
              >
                <p
                  className="font-display font-semibold text-[var(--color-accent-400)]"
                  style={{ fontSize: "var(--text-3xl)", letterSpacing: "var(--tracking-tight)" }}
                >
                  {o.value}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[var(--tracking-wider)] text-[var(--color-fg-2)]">
                  {o.metric}
                </p>
                <p className="mt-3 font-body text-sm text-[var(--color-fg-1)]">
                  {o.narrative}
                </p>
              </div>
            ))}
          </div>
        </section>

        {study.quote && (
          <blockquote className="mx-auto mt-24 max-w-3xl border-l-2 border-[var(--color-accent-400)] pl-6">
            <p
              className="font-display italic text-[var(--color-fg-0)]"
              style={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-snug)" }}
            >
              &ldquo;{study.quote.text}&rdquo;
            </p>
            <footer className="mt-4 font-mono text-xs uppercase tracking-[var(--tracking-wider)] text-[var(--color-fg-2)]">
              — {study.quote.attribution}
            </footer>
          </blockquote>
        )}

        <section className="mt-24 grid gap-10 md:grid-cols-12">
          <h2 className="font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-fg-2)] md:col-span-3">
            Stack
          </h2>
          <ul className="flex flex-wrap gap-2 md:col-span-9">
            {study.stack.map((t) => (
              <li
                key={t}
                className="rounded-full border border-[var(--color-surface-3)] px-4 py-1.5 font-mono text-xs uppercase tracking-[var(--tracking-wider)] text-[var(--color-fg-1)]"
              >
                {t}
              </li>
            ))}
          </ul>
        </section>

        {next && (
          <Link
            href={`/work/${next.slug}`}
            data-cursor="magnet"
            className="mt-32 grid items-center gap-4 rounded-3xl border border-[var(--color-surface-3)] bg-[color:var(--color-surface-1)]/50 p-10 transition-colors hover:border-[var(--color-accent-400)]/40 md:grid-cols-12"
          >
            <p className="font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-accent-400)] md:col-span-3">
              Next case
            </p>
            <div className="md:col-span-9">
              <p
                className="font-display font-semibold text-[var(--color-fg-0)]"
                style={{ fontSize: "var(--text-3xl)", letterSpacing: "var(--tracking-tight)" }}
              >
                {next.title} →
              </p>
              <p className="mt-2 font-body text-[var(--color-fg-1)]">{next.tagline}</p>
            </div>
          </Link>
        )}
      </article>

      <Footer />
    </main>
  );
}
