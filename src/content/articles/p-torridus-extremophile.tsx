import { SpeciesEm } from '@/components/shared/SpeciesHighlight'

export function PTorridusContent() {
  return (
    <>
      <p className="mb-10 font-serif text-[22px] leading-[1.6] font-normal text-[var(--text)]">
        Many physical quantities define the domain of life: the intangible region where life can
        exist. This region can be thought of as an intersection of the various domains of quantities
        like temperature, pH, pressure, and so on.
      </p>

      <p className="mb-7 font-mono text-[14px] leading-[2] font-light text-[rgba(240,237,230,0.75)]">
        What&apos;s interesting about the domain of life is that extremities exist. We have life
        forms that can survive in conditions at the ends of the ranges of the various conditions that
        define the existence of life. One of these life forms is{' '}
        <SpeciesEm>Picrophilus torridus</SpeciesEm> (<SpeciesEm>P. torridus</SpeciesEm>) of phylum
        Euryarchaeota. <SpeciesEm>P. torridus</SpeciesEm>, first extracted from moderately
        high-temperature hydrothermal areas in solfataric fields in Hokkaido, Japan, are known to
        grow in regions of pH around 0 and temperatures between 47 and 65 degrees Celsius.
      </p>

      <h2 className="mt-12 mb-5 font-serif text-[28px] font-normal tracking-[-0.01em] text-[var(--text)]">
        Discovery in the Solfataric Fields
      </h2>

      <p className="mb-7 font-mono text-[14px] leading-[2] font-light text-[rgba(240,237,230,0.75)]">
        Thermoacidophile <SpeciesEm>P. torridus</SpeciesEm> was discovered by Dr. Christa Schleper
        and her colleagues in 1995 among the wet layers of coal in the acidic and geothermally heated
        fields of the solfataras. <SpeciesEm>P. torridus</SpeciesEm> is an aerobic life form, hence
        discovered in the oxygenous upper layers of coal. The acid that gives the solfataric fields
        their acidic behavior is sulfuric acid, produced from the oxidation of hydrogen sulfide.
      </p>

      <p className="mb-7 font-mono text-[14px] leading-[2] font-light text-[rgba(240,237,230,0.75)]">
        The fact that <SpeciesEm>P. torridus</SpeciesEm>, together with Picrophilus oshimae, could
        grow in these highly acidic and hot environments makes it one of the most thermoacidophilic
        organisms known to exist. Most organisms cannot grow in these conditions — low intracellular
        pH values denature protein structures, leading to cell death through reactions between
        peptide linkages and hydronium ions. High temperatures weaken the hydrogen bonding that gives
        proteins their structure and functionality.
      </p>

      <h2 className="mt-12 mb-5 font-serif text-[28px] font-normal tracking-[-0.01em] text-[var(--text)]">
        The Survival Mechanism
      </h2>

      <p className="mb-7 font-mono text-[14px] leading-[2] font-light text-[rgba(240,237,230,0.75)]">
        We&apos;ve established that acidic and high-temperature environments are destructive to
        proteins. But how does <SpeciesEm>P. torridus</SpeciesEm> keep its proteins functional in
        such an environment? Little is known about the complete mechanisms by which these organisms
        combat their environment. However, <SpeciesEm>P. torridus</SpeciesEm> maintains an
        intracellular pH of about 4-5 pH units above the extracellular pH.
      </p>

      <div
        className="my-10 px-8 py-7"
        style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
      >
        <div className="mb-3 font-mono text-[9px] font-medium tracking-[0.2em] text-[var(--accent2)] uppercase">
          Key insight
        </div>
        <p className="m-0 font-mono text-[13px] leading-[1.8] font-light text-[var(--muted)]">
          pH homeostasis — the cell&apos;s regulation of cytoplasmic concentration of hydronium ions
          — is aided by active uptake of sodium and potassium ions. This creates a chemiosmotic
          potential that extracellular hydronium ions must overcome to enter the cell, effectively
          keeping the acidity outside.
        </p>
      </div>

      <p className="mb-7 font-mono text-[14px] leading-[2] font-light text-[rgba(240,237,230,0.75)]">
        This hypothesis is supported by the evident use of secondary cation transporters, especially
        potassium ions, in the sequenced genome of <SpeciesEm>P. torridus</SpeciesEm>. The genome also
        contains genes that encode for enzymes that degrade organic acids — another pH correction
        mechanism.
      </p>

      <h3 className="mt-10 mb-4 font-sans text-[13px] font-semibold tracking-[0.1em] text-[var(--accent2)] uppercase">
        Combating High Temperatures
      </h3>

      <p className="mb-7 font-mono text-[14px] leading-[2] font-light text-[rgba(240,237,230,0.75)]">
        We&apos;ve explored how <SpeciesEm>P. torridus</SpeciesEm> thrives in low pH regions, but how
        does it combat high temperatures? The genome of <SpeciesEm>P. torridus</SpeciesEm> offers
        insights. These microorganisms have the smallest genome among all aerobic non-parasitic
        microorganisms, with one of the highest coding densities compared to other extremophiles like
        Thermoplasma acidophilum.
      </p>

      <p className="mb-7 font-mono text-[14px] leading-[2] font-light text-[rgba(240,237,230,0.75)]">
        The densely packed genome might account for why these organisms survive high temperatures in
        their environment. Perhaps the compact structure creates stronger hydrogen bonds that hold
        protein components together, with shorter bond lengths that can withstand higher
        temperatures.
      </p>

      <h2 className="mt-12 mb-5 font-serif text-[28px] font-normal tracking-[-0.01em] text-[var(--text)]">
        Evolution Under Pressure
      </h2>

      <p className="mb-7 font-mono text-[14px] leading-[2] font-light text-[rgba(240,237,230,0.75)]">
        The existence of <SpeciesEm>P. torridus</SpeciesEm> is not by mere coincidence. This
        microorganism evolved under the selective pressure of both low pH and high temperatures. The
        key features that resulted from these pressures are the very small genome size and its high
        coding density. This can be deduced by comparing <SpeciesEm>P. torridus</SpeciesEm> with
        closely related extremophiles like Sulfolobus solfataricus and Thermoplasma volcanii.
      </p>

      <p className="mb-7 font-mono text-[14px] leading-[2] font-light text-[rgba(240,237,230,0.75)]">
        The genome contains a large proportion of genes encoding protein transporters, particularly
        gradient-driven secondary transporters, suggesting adaptation to use the pH difference
        between the inner cell membrane and extracellular regions. We can conceptualize the
        phenotype of <SpeciesEm>P. torridus</SpeciesEm> by studying the selective pressures that led
        to its evolution: low pH and high temperature.
      </p>

      <div className="my-12 flex items-center justify-center gap-4 font-mono text-[16px] tracking-[0.5em] text-[var(--dim)]">
        · · ·
      </div>

      <p className="mb-10 font-serif text-[20px] leading-[1.6] font-normal text-[var(--text)] italic">
        <SpeciesEm>P. torridus</SpeciesEm> is an aerobic, non-parasitic, and thermoacidophilic
        microorganism that presents one of the most extreme examples of life, stretching the
        boundaries where life was once thought impossible.
      </p>

      <h3 className="mt-12 mb-4 font-sans text-[13px] font-semibold tracking-[0.1em] text-[var(--accent2)] uppercase">
        References
      </h3>

      <ul className="list-none space-y-3 pl-0">
        {[
          {
            text: (
              <>
                Angelov, A., & Liebl, W. (2006). Insights into extreme thermoacidophily based on
                genome analysis of <SpeciesEm>Picrophilus torridus</SpeciesEm> and other
                thermoacidophilic archaea. <em>Journal of Biotechnology</em>, 126(1), 3-10.
              </>
            ),
            href: 'https://doi.org/10.1016/j.jbiotec.2006.02.011',
          },
          {
            text: (
              <>
                Fütterer, O., et al. (2004). Genome sequence of{' '}
                <SpeciesEm>Picrophilus torridus</SpeciesEm> and its implications for life around pH
                0. <em>Proceedings of the National Academy of Sciences</em>, 101(24), 9091-9096.
              </>
            ),
            href: 'https://doi.org/10.1073/pnas.0401356101',
          },
          {
            text: (
              <>
                Schleper, C., et al. (1995). Picrophilus gen. nov., fam. nov.: a novel aerobic,
                heterotrophic, thermoacidophilic genus and family comprising archaea capable of growth
                around pH 0. <em>Journal of Bacteriology</em>, 177(24), 7050-7059.
              </>
            ),
            href: 'https://doi.org/10.1128/jb.177.24.7050-7059.1995',
          },
          {
            text: (
              <>
                Schleper, C., et al. (1996). Picrophilus oshimae and{' '}
                <SpeciesEm>Picrophilus torridus</SpeciesEm> fam. nov., gen. nov., sp. nov., two
                species of hyperacidophilic, thermophilic, heterotrophic, aerobic archaea.{' '}
                <em>International Journal of Systematic and Evolutionary Microbiology</em>, 46(3),
                814-816.
              </>
            ),
            href: 'https://doi.org/10.1099/00207713-46-3-814',
          },
          {
            text: (
              <>
                Slonczewski, J. L., et al. (2009). Cytoplasmic pH measurement and homeostasis in
                bacteria and archaea. <em>Advances in Microbial Physiology</em>, 55, 1-317.
              </>
            ),
            href: 'https://doi.org/10.1016/S0065-2911(09)05501-5',
          },
        ].map((ref) => (
          <li
            key={ref.href}
            className="flex gap-3 font-mono text-[12px] leading-[1.8] font-light text-[var(--muted)]"
          >
            <span className="text-[var(--accent2)]">•</span>
            <span>
              {ref.text}{' '}
              <a
                href={ref.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)]"
              >
                DOI
              </a>
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}
