export default function Text({ addEmoji }) {
  const text = 'I am text component';
  return <h1>{addEmoji ? addEmoji(text) : text }</h1>
}