import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans flex flex-col select-none">
      {/* Header Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-zinc-800 bg-zinc-900/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">M</div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight leading-none">Marketing Skills</h1>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">Agent Specification v2.1.0</span>
          </div>
        </div>
        <div className="hidden md:flex gap-6 items-center text-sm font-medium text-zinc-400">
          <span className="text-indigo-400 cursor-pointer hover:text-indigo-300 transition-colors">Início</span>
          <span className="cursor-pointer hover:text-zinc-200 transition-colors">Documentação</span>
          <span className="cursor-pointer hover:text-zinc-200 transition-colors">Comunidade</span>
          <div className="h-4 w-px bg-zinc-800 mx-2"></div>
          <span className="text-xs bg-zinc-800 px-3 py-1 rounded-full text-zinc-300 cursor-pointer hover:bg-zinc-700 transition-colors">GitHub v1.4k ⭐</span>
        </div>
      </nav>

      {/* Main Hero Area */}
      <main className="flex-1 flex flex-col lg:flex-row gap-8 p-8 max-w-6xl mx-auto w-full items-stretch">
        {/* Left Column: Context & Diagram */}
        <div className="flex-[1.2] flex flex-col gap-6 w-full">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
              Dê superpoderes de marketing <br className="hidden md:block" /><span className="text-indigo-400 font-light">ao seu agente de IA.</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
              Uma biblioteca técnica de fluxos de trabalho e frameworks para Claude Code, Cursor e OpenAI. 
              Focado em conversão, copywriting, SEO e analytics para founders técnicos.
            </p>
          </div>

          {/* Visual Relationship Diagram */}
          <div className="flex-1 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6 relative flex items-center justify-center min-h-[300px]">
            <div className="flex flex-col items-center gap-8 w-full max-w-md">
              {/* Root Context */}
              <div className="relative z-10 w-64 bg-indigo-600/10 border border-indigo-500/40 rounded-lg p-4 text-center shadow-xl">
                <div className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mb-1">Foundation Layer</div>
                <div className="font-mono text-xs text-white truncate">product-marketing-context.md</div>
              </div>

              {/* Connecting Lines (Flex grid emulation) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                <div className="flex flex-col gap-3 items-center">
                  <div className="h-6 md:h-8 w-px bg-gradient-to-b from-indigo-500/40 to-emerald-500/20 mb-1"></div>
                  <div className="w-full bg-zinc-800 border border-zinc-700 p-3 rounded text-[11px] text-zinc-300 text-center">
                    <span className="block font-bold text-emerald-400 mb-1">SEO & Conteúdo</span>
                    <span className="opacity-60 text-[9px] md:text-[10px] leading-tight block">seo-audit, ai-seo, schema...</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <div className="h-6 md:h-8 w-px bg-gradient-to-b from-indigo-500/40 to-blue-500/20 mb-1"></div>
                  <div className="w-full bg-zinc-800 border border-zinc-700 p-3 rounded text-[11px] text-zinc-300 text-center">
                    <span className="block font-bold text-blue-400 mb-1">Otimização CRO</span>
                    <span className="opacity-60 text-[9px] md:text-[10px] leading-tight block">page-cro, signup-flow...</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <div className="h-6 md:h-8 w-px bg-gradient-to-b from-indigo-500/40 to-purple-500/20 mb-1"></div>
                  <div className="w-full bg-zinc-800 border border-zinc-700 p-3 rounded text-[11px] text-zinc-300 text-center">
                    <span className="block font-bold text-purple-400 mb-1">Ads & Growth</span>
                    <span className="opacity-60 text-[9px] md:text-[10px] leading-tight block">paid-ads, tracking...</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <div className="h-6 md:h-8 w-px bg-gradient-to-b from-indigo-500/40 to-amber-500/20 mb-1"></div>
                  <div className="w-full bg-zinc-800 border border-zinc-700 p-3 rounded text-[11px] text-zinc-300 text-center">
                    <span className="block font-bold text-amber-400 mb-1">Estratégia GTM</span>
                    <span className="opacity-60 text-[9px] md:text-[10px] leading-tight block">pricing, revops, sales...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Terminal & CTA */}
        <div className="flex-1 flex flex-col gap-6 w-full mt-4 lg:mt-0">
          {/* Terminal Window */}
          <div className="bg-black border border-zinc-800 rounded-lg overflow-hidden shadow-2xl flex-1 flex flex-col min-h-[250px]">
            <div className="bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b border-zinc-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs text-zinc-500 font-mono ml-4">bash — install-skills.sh</div>
            </div>
            <div className="p-5 font-mono text-sm leading-relaxed overflow-x-auto text-nowrap">
              <div className="flex gap-2 text-zinc-400 mb-2 whitespace-nowrap"><span className="text-indigo-400">$</span> npx skills add coreyhaines31/marketingskills</div>
              <div className="text-zinc-500 italic mb-3"># Scanning repository...</div>
              <div className="text-emerald-400">✓ 38 marketing skills identified</div>
              <div className="text-emerald-400">✓ Symlinks created for Claude Code (.claude/skills)</div>
              <div className="text-emerald-400 mb-6">✓ Context fallback established</div>
              <div className="text-zinc-500 mb-1">Usage:</div>
              <div className="text-zinc-300">"Ajude-me a otimizar esta landing page"</div>
              <div className="text-indigo-400 font-bold tracking-normal mt-1">→ Autoloading page-cro.md...</div>
              <div className="mt-4">
                <span className="animate-pulse inline-block w-2.5 h-5 bg-zinc-400 align-middle"></span>
              </div>
            </div>
          </div>

          {/* Featured Tool Card */}
          <div className="bg-gradient-to-br from-indigo-900/30 to-zinc-900/80 border border-indigo-500/20 p-6 rounded-2xl">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-white text-lg">Magister Marketing</h3>
              <span className="text-[10px] bg-indigo-500 text-white px-2 py-1 rounded font-bold uppercase tracking-wider">Pro</span>
            </div>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">Um agente autônomo completo que atua como seu CMO, utilizando todas estas skills integradas nativamente.</p>
            <button className="w-full bg-white text-zinc-950 text-sm font-bold py-3 rounded-lg hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
              Conhecer o Magister
            </button>
          </div>
        </div>
      </main>

      {/* Footer Grid */}
      <footer className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-zinc-800 bg-zinc-900/40 p-8 mt-auto">
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Agência</span>
          <span className="text-sm font-medium text-zinc-300">Conversion Factory</span>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Aprendizado</span>
          <span className="text-sm font-medium text-zinc-300">Swipe Files</span>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Guia Terminal</span>
          <span className="text-sm font-medium text-zinc-300">Coding for Marketers</span>
        </div>
        <div className="flex flex-col gap-1.5 md:text-right">
          <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Criado por</span>
          <span className="text-sm font-medium text-zinc-100">Corey Haines</span>
        </div>
      </footer>
    </div>
  );
}
