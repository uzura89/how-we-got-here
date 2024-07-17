export default function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="py-4 md:py-5 text-sm text-center text-foreLight border-t border-border">
      {/* Watermark */}
      <p>{`©${thisYear} How We Got Here. All rights reserved.`}</p>
    </footer>
  );
}
