import { Logo } from "@/components/ui/logo";

export default function LoginPage() {
  return (
    <div className="glass-container absolute top-1/2 left-1/2 -translate-1/2 w-[40%] h-[80%] py-16 px-12">
      {/* FORM CONTENT */}
      <Logo className="w-15 md:w-15" />
      <h1 className="my-3 text-5xl font-medium">Sign In</h1>
    </div>
  );
}
