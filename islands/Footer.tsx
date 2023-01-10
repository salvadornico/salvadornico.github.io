export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="flex flex-col gap-2 items-center bg-red-900 text-white p-2">
      © {currentYear} Nico Salvador
      <a href="https://fresh.deno.dev">
        <img
          width="197"
          height="37"
          src="https://fresh.deno.dev/fresh-badge.svg"
          alt="Made with Fresh"
        />
      </a>
    </footer>
  );
}
