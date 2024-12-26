function FooterHeading({ children }: { children: string }) {
  // Returned JSX
  return (
    <div className="text-3xl mb-3 font-heading uppercase text-stone-50">
      {children}
    </div>
  );
}

export default FooterHeading;
