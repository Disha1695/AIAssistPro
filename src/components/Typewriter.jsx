import { useState, useEffect } from 'react'

/**
 * Continuously types and deletes a rotating list of words in a loop.
 */
export default function Typewriter({
  words,
  className = '',
  typingSpeed = 85,
  deletingSpeed = 40,
  pause = 1400,
}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(
        () =>
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1),
          ),
        deleting ? deletingSpeed : typingSpeed,
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause])

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse self-stretch bg-current align-middle" style={{ height: '1em' }} />
    </span>
  )
}
