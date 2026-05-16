import { BoltIcon, ChatBubbleLeftRightIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { Container } from "../ui/container";
import { DiscordMock } from "./discord-mock";

const highlights = [
  {
    icon: BoltIcon,
    title: "Fires on every event",
    description:
      "Promotions, awards, assignments, RSVPs, form submissions — any record change can hit any channel.",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Real embeds, not pings",
    description:
      "Rich Discord embeds with rank, citation, paygrade, and effective date. Your members get the whole story in one message.",
  },
  {
    icon: CodeBracketIcon,
    title: "Webhooks + a real API",
    description:
      "Discord is one of many. Twilio SMS, email, generic webhooks, and OAuth/OIDC for your own bots — wire it however you run ops.",
  },
];

export function LivesInDiscord() {
  return (
    <section
      id="discord"
      className="relative overflow-hidden bg-surface py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30 mask-radial"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-1/4 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-600/15 blur-3xl"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold tracking-wider text-brand-400 uppercase">
              Lives where your team lives
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Every promotion, every order — straight into{" "}
              <span className="text-[#5865f2]">Discord</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Your members are already in Discord. PERSCOM meets them there — rich,
              auto-generated embeds for promotions, awards, assignments, AARs, and event
              RSVPs. No more &quot;@everyone go check the website.&quot;
            </p>

            <ul className="mt-10 space-y-6">
              {highlights.map((h) => (
                <li key={h.title} className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5">
                    <h.icon className="h-5 w-5 text-brand-300" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{h.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{h.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:col-span-7">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-600/25 via-brand-500/10 to-brand-700/20 blur-2xl"
            />
            <DiscordMock />
          </div>
        </div>
      </Container>
    </section>
  );
}
