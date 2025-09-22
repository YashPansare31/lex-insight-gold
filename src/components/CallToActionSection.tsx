import { ArrowRight, Sparkles } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald/10 border border-emerald/20 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-emerald" />
            <span className="text-sm font-medium text-emerald">Limited Early Access</span>
          </div>
          
          {/* Main Content */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Revolutionize Legal Review
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-gold">
              with AI
            </span>
          </h2>
          
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join leading law firms and legal teams already using AI to accelerate document review and reduce risk.
          </p>
          
          {/* CTA Button */}
          <button className="btn-gold text-lg px-12 py-6 group animate-glow-pulse">
            Get Early Access
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
          </button>
          
          {/* Social Proof */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald mb-2">500+</div>
              <div className="text-white/60">Legal Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald mb-2">50K+</div>
              <div className="text-white/60">Documents Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald mb-2">95%</div>
              <div className="text-white/60">Time Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;