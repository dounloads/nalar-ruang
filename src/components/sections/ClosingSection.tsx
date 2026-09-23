import { PillLink } from "@/components/ui/PillLink";

export function ClosingSection() {
  return <section className="closing section-dark" data-reveal><h2 data-reveal-item>Siap membaca kotamu sendiri.</h2><div data-reveal-item><PillLink to="/app" light>Mulai Cari Hunian</PillLink></div></section>;
}