export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <defs><linearGradient id="lg" x1="0" y1="0" x2="40" y2="40"><stop offset="0" stopColor="#7AA2FF" /><stop offset="1" stopColor="#B79CFF" /></linearGradient></defs>
      <g className="lhex"><polygon points="20,2 36,11 36,29 20,38 4,29 4,11" stroke="url(#lg)" strokeWidth="1.6" />
        <path d="M20 2V13M36 11L26 17M36 29L26 23M20 38V27M4 29L14 23M4 11L14 17" stroke="rgba(124,160,255,.5)" strokeWidth="1" /></g>
      <circle cx="20" cy="20" r="7" fill="url(#lg)" /><circle cx="20" cy="20" r="2.6" fill="#05070D" />
    </svg>
  );
}
