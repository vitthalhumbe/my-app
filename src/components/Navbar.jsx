import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4">
      <span className="text-xl font-semibold">Vitthal Humbe</span>
      <ThemeToggle />
    </nav>
  );
}
