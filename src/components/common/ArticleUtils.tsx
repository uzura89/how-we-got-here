export function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-6">{children}</h1>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-6">{children}</h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl md:text-2xl font-semibold my-2">{children}</h3>;
}

export function H4({ children }: { children: React.ReactNode }) {
  return <h4 className="text-lg md:text-xl font-semibold my-2">{children}</h4>;
}

export function H5({ children }: { children: React.ReactNode }) {
  return (
    <h5 className="text-base md:text-lg font-semibold my-2">{children}</h5>
  );
}

export function H6({ children }: { children: React.ReactNode }) {
  return (
    <h6 className="text-sm md:text-base font-semibold my-2">{children}</h6>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="my-2 leading-relaxed">{children}</p>;
}

export function Small({ children }: { children: React.ReactNode }) {
  return <small className="text-xs">{children}</small>;
}

export function Blockquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-foreLightest pl-2 my-4">
      {children}
    </blockquote>
  );
}

export function Code({ children }: { children: React.ReactNode }) {
  return <code className="bg-foreLightest p-1 rounded">{children}</code>;
}

export function Pre({ children }: { children: React.ReactNode }) {
  return <pre className="bg-foreLightest p-2 rounded my-4">{children}</pre>;
}

export function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc list-inside my-4">{children}</ul>;
}

export function Ol({ children }: { children: React.ReactNode }) {
  return <ol className="list-decimal list-inside my-4">{children}</ol>;
}

export function Li({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

export function A({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className="text-blue-500 hover:underline">
      {children}
    </a>
  );
}

export function Img({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="my-4" />;
}

export function Table({ children }: { children: React.ReactNode }) {
  return <table className="table-auto my-4">{children}</table>;
}

export function Thead({ children }: { children: React.ReactNode }) {
  return <thead>{children}</thead>;
}

export function Tbody({ children }: { children: React.ReactNode }) {
  return <tbody>{children}</tbody>;
}

export function Tr({ children }: { children: React.ReactNode }) {
  return <tr>{children}</tr>;
}

export function Th({ children }: { children: React.ReactNode }) {
  return <th className="border border-border p-2">{children}</th>;
}

export function Td({ children }: { children: React.ReactNode }) {
  return <td className="border border-border p-2">{children}</td>;
}

export function Article({ children }: { children: React.ReactNode }) {
  return <article className="max-w-xl">{children}</article>;
}

export function Section({ children }: { children: React.ReactNode }) {
  return <section className="my-4">{children}</section>;
}
