function Footer() {
  // Returned JSX
  return (
    <footer className="flex gap-6 text-[1.5rem] text-stone-600 py-2 px-4 justify-end">
      <span>
        Built by VSBroN as a portfolio project (
        <a
          href="https://github.com/vsbron/bronflix-2024-react"
          target="_blank"
          className="text-stone-500 hover:text-stone-400 transition-colors"
        >
          source
        </a>
        )
      </span>
      <span>|</span>
      <span>© 2024. All rights reserved</span>
    </footer>
  );
}

export default Footer;
