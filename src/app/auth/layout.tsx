export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* ELLIPSE BACKGROUND */}
      <figure className="w-full absolute top-1/2 left-0 select-none">
        <img src="/ellipse.svg" alt="ellipse" className="w-full" />
      </figure>

      {children}
    </div>
  );
}
