import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  // Try to query the database
  let dbStatus: { ok: boolean; userCount?: number; error?: string };

  try {
    const userCount = await prisma.user.count();
    dbStatus = { ok: true, userCount };
  } catch (err) {
    dbStatus = { ok: false, error: err instanceof Error ? err.message : "Unknown error" };
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-950 text-zinc-100 p-6">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-2">
          <span className="text-white">TOUGH</span>
          <span className="text-red-600">DOG</span>
        </h1>
        <p className="text-zinc-400 text-sm tracking-widest mb-10">KNOWLEDGE HUB</p>

        <div className="text-left bg-zinc-900 border border-zinc-800 rounded-xl p-5">
          <div className="text-xs font-bold text-zinc-500 tracking-widest mb-3">SYSTEM STATUS</div>

          <div className="flex items-center justify-between py-2 border-b border-zinc-800">
            <span className="text-sm text-zinc-300">Next.js</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              OK
            </span>
          </div>

          <div className="flex items-center justify-between py-2 border-b border-zinc-800">
            <span className="text-sm text-zinc-300">Database (Neon)</span>
            {dbStatus.ok ? (
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                CONNECTED
              </span>
            ) : (
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-red-600/10 text-red-400 border border-red-600/30">
                ERROR
              </span>
            )}
          </div>

          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-zinc-300">Users in DB</span>
            <span className="text-sm font-mono text-zinc-400">
              {dbStatus.ok ? dbStatus.userCount : "—"}
            </span>
          </div>

          {!dbStatus.ok && dbStatus.error && (
            <div className="mt-3 p-3 bg-red-600/5 border border-red-600/30 rounded text-xs text-red-300 font-mono">
              {dbStatus.error}
            </div>
          )}
        </div>

        <p className="mt-6 text-zinc-600 text-xs">Sprint 1 · Database connected</p>
      </div>
    </main>
  );
}