export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-screen md:h-screen overflow-hidden">
      {/* ELLIPSE BACKGROUND */}
      <figure className="w-full absolute bottom-0 left-0 select-none">
        <img src="/ellipse-bottom.svg" alt="ellipse" className="w-full" />
      </figure>

      <div className="glass-container absolute top-1/2 left-1/2 -translate-1/2 w-[90%] md:w-[40%] h-[90%] md:h-[80%] py-10 md:py-16 px-6 md:px-12 overflow-y-auto md:overflow-auto">
        {children}
      </div>
    </div>
  );
}
