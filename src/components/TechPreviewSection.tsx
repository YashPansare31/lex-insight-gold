import { Code2, Terminal } from 'lucide-react';

const TechPreviewSection = () => {
  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-emerald/10 border border-emerald/20 rounded-full px-6 py-2 mb-6">
              <Code2 className="w-4 h-4 text-emerald" />
              <span className="text-sm font-medium text-emerald">Developer API</span>
            </div>
            
            <h2 className="text-section-title text-white mb-6">
              Built for Developers & Legal Teams
            </h2>
            
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Integrate our AI legal analysis directly into your applications with our robust API.
            </p>
          </div>
          
          {/* Code Block */}
          <div className="bg-charcoal-light border border-gold/20 rounded-2xl p-8 text-left animate-scale-in">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-gold" />
                <span className="text-white/70 text-sm font-mono">API Endpoint</span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            
            <div className="font-mono text-sm">
              <div className="text-emerald mb-2">POST /api/documents/process</div>
              <div className="text-white/60 mb-4">{`{`}</div>
              <div className="text-white/60 ml-4 mb-1">{`"file_id": "doc_abc123xyz",`}</div>
              <div className="text-white/60 ml-4 mb-1">{`"type": "contracts_agreements",`}</div>
              <div className="text-white/60 ml-4 mb-4">{`"analysis_depth": "comprehensive"`}</div>
              <div className="text-white/60">{`}`}</div>
              
              <div className="mt-6 pt-6 border-t border-gold/10">
                <div className="text-gold mb-2">Response (200 OK)</div>
                <div className="text-white/60">{`{`}</div>
                <div className="text-white/60 ml-4 mb-1">{`"risk_score": "medium",`}</div>
                <div className="text-white/60 ml-4 mb-1">{`"key_terms": [...],`}</div>
                <div className="text-white/60 ml-4 mb-1">{`"recommendations": [...],`}</div>
                <div className="text-white/60 ml-4 mb-4">{`"processing_time": "24s"`}</div>
                <div className="text-white/60">{`}`}</div>
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-2">REST API</div>
              <div className="text-white/70">Simple integration</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-2">Webhooks</div>
              <div className="text-white/70">Real-time updates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-2">SDKs</div>
              <div className="text-white/70">Multiple languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechPreviewSection;