import type { ReactNode } from 'react'

export const speciesClassName = 'text-[var(--accent)] italic'

export function SpeciesEm({ children }: { children: ReactNode }) {
  return <em className={speciesClassName}>{children}</em>
}

const speciesPattern = /(Picrophilus torridus|P\.\s*[Tt]orridus)/g

function formatSpeciesMatch(match: string) {
  return /^P\./i.test(match) ? 'P. torridus' : match
}

export function SpeciesHighlight({ text }: { text: string }) {
  const parts: ReactNode[] = []
  let lastIndex = 0

  for (const match of text.matchAll(speciesPattern)) {
    const index = match.index ?? 0

    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index))
    }

    parts.push(
      <SpeciesEm key={index}>{formatSpeciesMatch(match[0])}</SpeciesEm>,
    )

    lastIndex = index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return <>{parts}</>
}
