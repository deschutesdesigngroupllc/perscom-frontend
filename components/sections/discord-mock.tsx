import Image from 'next/image'

/**
 * Realistic Discord channel + bot embed mockup, rendered in HTML/Tailwind.
 * Matches Discord's actual color tokens so it reads as authentic.
 */
export function DiscordMock() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#313338] font-sans text-[15px] leading-snug text-[#dbdee1] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
      {/* Channel header */}
      <div className="flex items-center gap-2 border-b border-black/30 bg-[#313338] px-4 py-3 shadow-[0_1px_0_rgba(0,0,0,0.2)]">
        <span className="text-xl text-[#80848e]">#</span>
        <span className="font-semibold text-white">ops-announcements</span>
        <span className="ml-3 hidden text-xs text-[#949ba4] sm:inline">
          PERSCOM personnel & operations channel
        </span>
      </div>

      {/* Message list */}
      <div className="space-y-5 px-4 py-5">
        {/* Previous chat message for context */}
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#5865f2] text-sm font-semibold text-white">
            LW
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <span className="font-medium text-[#f2c14e]">Linwood Will</span>
              <span className="text-xs text-[#949ba4]">CSM · Today at 18:42</span>
            </div>
            <p className="text-[#dbdee1]">
              Roger that — promotion board for SSG slots is locked in for Sat 1900.
            </p>
          </div>
        </div>

        {/* PERSCOM bot message with embed */}
        <div className="flex items-start gap-3">
          {/* Bot avatar */}
          <div className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full bg-[#0a0e1f] ring-1 ring-white/10">
            <Image src="/icon.svg" alt="PERSCOM" width={28} height={28} className="h-7 w-7" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <span className="font-medium text-white">PERSCOM</span>
              <span className="inline-flex h-4 items-center gap-0.5 rounded-[3px] bg-[#5865f2] px-[5px] text-[10px] leading-none font-semibold text-white uppercase">
                <svg viewBox="0 0 16 16" className="h-2.5 w-2.5">
                  <path
                    fill="currentColor"
                    d="M5.5 8.5l2 2 4-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fillOpacity="0"
                  />
                </svg>
                App
              </span>
              <span className="text-xs text-[#949ba4]">Today at 18:43</span>
            </div>

            {/* Embed */}
            <div className="mt-1.5 flex max-w-2xl overflow-hidden rounded-[4px] bg-[#2b2d31]">
              {/* Brand color bar */}
              <div className="w-1 shrink-0 bg-[#2563eb]" />
              <div className="min-w-0 flex-1 p-4">
                {/* Author */}
                <div className="mb-2 flex items-center gap-2">
                  <Image
                    src="/icon.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 rounded-sm"
                  />
                  <span className="text-xs font-semibold text-[#dbdee1]">
                    Promotion approved · Alpha Co, 1st Btn, 5th SFG
                  </span>
                </div>

                {/* Title */}
                <a
                  href="#"
                  className="block text-base font-semibold text-[#00a8fc] hover:underline"
                >
                  Braxton Stamm DVM → Staff Sergeant (SSG)
                </a>

                {/* Description */}
                <p className="mt-1 text-sm text-[#dbdee1]">
                  Promoted from <span className="font-medium">Sergeant (E-5)</span> to{' '}
                  <span className="font-medium">Staff Sergeant (E-6)</span>, effective{' '}
                  <span className="font-medium">23 MAY 2026</span>. Service record updated, DA Form
                  4187 attached.
                </p>

                {/* Fields */}
                <div className="mt-4 grid grid-cols-3 gap-x-4 gap-y-3 text-sm">
                  <div>
                    <p className="text-xs font-semibold text-white">Effective</p>
                    <p className="mt-0.5 text-[#dbdee1]">23 MAY 2026</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Authority</p>
                    <p className="mt-0.5 text-[#dbdee1]">CSM Linwood Will</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Status</p>
                    <p className="mt-0.5">
                      <span className="bg-brand-500/15 text-brand-200 inline-flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-xs font-medium">
                        <span className="bg-brand-400 h-1.5 w-1.5 rounded-full" />
                        Approved
                      </span>
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-4 flex items-center gap-2 text-xs text-[#949ba4]">
                  <Image
                    src="/icon.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4 rounded-sm opacity-80"
                  />
                  <span>PERSCOM Automations · Promotion Approved</span>
                  <span>•</span>
                  <span>Today at 18:43</span>
                </div>
              </div>
            </div>

            {/* Reaction row */}
            <div className="mt-2 flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1 rounded-md border border-[#5865f2]/40 bg-[#5865f2]/15 px-1.5 py-0.5 text-xs font-medium text-[#dbdee1]">
                🫡 <span className="text-[#a8b3ff]">14</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-md border border-white/5 bg-white/[0.04] px-1.5 py-0.5 text-xs font-medium text-[#dbdee1]">
                🎉 <span>9</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-md border border-white/5 bg-white/[0.04] px-1.5 py-0.5 text-xs font-medium text-[#dbdee1]">
                🔥 <span>6</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Message composer */}
      <div className="border-t border-black/20 px-4 py-3">
        <div className="flex items-center gap-2 rounded-lg bg-[#383a40] px-3 py-2 text-sm text-[#80848e]">
          <span className="text-lg">＋</span>
          <span>Message #ops-announcements</span>
        </div>
      </div>
    </div>
  )
}
