import Image from 'next/image'

/**
 * Slack channel + Block Kit attachment mockup. Mirrors discord-mock.tsx but
 * uses Slack's color tokens, typography, and block layout.
 */
export function SlackMock() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#1a1d21] font-sans text-[15px] leading-snug text-[#d1d2d3] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
      {/* Channel header */}
      <div className="flex items-center gap-2 border-b border-black/30 bg-[#1a1d21] px-4 py-3 shadow-[0_1px_0_rgba(0,0,0,0.2)]">
        <span className="text-base text-[#abadb1]">#</span>
        <span className="font-semibold text-white">ops-announcements</span>
        <span className="ml-3 hidden text-xs text-[#9a9b9e] sm:inline">
          PERSCOM personnel &amp; operations channel
        </span>
      </div>

      {/* Message list */}
      <div className="space-y-5 px-4 py-5">
        {/* Previous chat message for context */}
        <div className="flex items-start gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-[6px] bg-[#4a154b] text-sm font-semibold text-white">
            LW
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-white">Linwood Will</span>
              <span className="text-xs text-[#9a9b9e]">18:42</span>
            </div>
            <p className="text-[#d1d2d3]">
              Roger that — promotion board for SSG slots is locked in for Sat 1900.
            </p>
          </div>
        </div>

        {/* PERSCOM bot message with Block Kit attachment */}
        <div className="flex items-start gap-3">
          {/* Bot avatar */}
          <div className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-[6px] bg-[#0a0e1f] ring-1 ring-white/10">
            <Image src="/icon.svg" alt="PERSCOM" width={24} height={24} className="h-6 w-6" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-white">PERSCOM</span>
              <span className="inline-flex h-[14px] items-center rounded-[3px] bg-[#3f0e40] px-1 text-[10px] leading-none font-bold tracking-wide text-[#d1d2d3] uppercase">
                APP
              </span>
              <span className="text-xs text-[#9a9b9e]">18:43</span>
            </div>

            {/* Attachment with left color bar (Slack secondary_attachment) */}
            <div className="mt-1.5 flex max-w-2xl overflow-hidden rounded-[4px] border-l-4 border-[#2563eb] bg-[#222529]">
              <div className="min-w-0 flex-1 p-4">
                {/* Author */}
                <div className="mb-2 flex items-center gap-2">
                  <Image
                    src="/icon.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4 rounded-sm"
                  />
                  <span className="text-xs font-semibold text-[#d1d2d3]">
                    Promotion approved · Alpha Co, 1st Btn, 5th SFG
                  </span>
                </div>

                {/* Title */}
                <a href="#" className="block text-base font-bold text-[#1d9bd1] hover:underline">
                  Braxton Stamm DVM → Staff Sergeant (SSG)
                </a>

                {/* Description */}
                <p className="mt-1 text-sm text-[#d1d2d3]">
                  Promoted from <span className="font-semibold">Sergeant (E-5)</span> to{' '}
                  <span className="font-semibold">Staff Sergeant (E-6)</span>, effective{' '}
                  <span className="font-semibold">23 MAY 2026</span>. Service record updated, DA
                  Form 4187 attached.
                </p>

                {/* Fields */}
                <div className="mt-4 grid grid-cols-3 gap-x-4 gap-y-3 text-sm">
                  <div>
                    <p className="text-xs font-bold text-white">Effective</p>
                    <p className="mt-0.5 text-[#d1d2d3]">23 MAY 2026</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Authority</p>
                    <p className="mt-0.5 text-[#d1d2d3]">CSM Linwood Will</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Status</p>
                    <p className="mt-0.5">
                      <span className="inline-flex items-center gap-1 rounded-sm bg-[#2eb67d]/15 px-1.5 py-0.5 text-xs font-semibold text-[#2eb67d]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2eb67d]" />
                        Approved
                      </span>
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-4 flex items-center gap-2 text-xs text-[#9a9b9e]">
                  <Image
                    src="/icon.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="h-3.5 w-3.5 rounded-sm opacity-80"
                  />
                  <span>PERSCOM Automations · Promotion Approved</span>
                  <span>•</span>
                  <span>Today at 18:43</span>
                </div>
              </div>
            </div>

            {/* Reaction row */}
            <div className="mt-2 flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1 rounded-full border border-[#1d9bd1]/40 bg-[#1d9bd1]/10 px-2 py-0.5 text-xs font-semibold text-[#d1d2d3]">
                🫡 <span className="text-[#1d9bd1]">14</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/5 bg-white/[0.04] px-2 py-0.5 text-xs font-semibold text-[#d1d2d3]">
                🎉 <span>9</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/5 bg-white/[0.04] px-2 py-0.5 text-xs font-semibold text-[#d1d2d3]">
                🔥 <span>6</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Message composer */}
      <div className="border-t border-black/20 px-4 py-3">
        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#222529] px-3 py-2 text-sm text-[#9a9b9e]">
          <span className="text-lg">＋</span>
          <span>Message #ops-announcements</span>
        </div>
      </div>
    </div>
  )
}
