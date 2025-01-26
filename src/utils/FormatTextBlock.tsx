export function FormatTextBlock(text: string) {
  return text.split("\n\n").map((paragraph, i, arr) => (
    <p key={i} className={i === arr.length - 1 ? "mb-0" : ""}>
      {paragraph}
    </p>
  ));
}
