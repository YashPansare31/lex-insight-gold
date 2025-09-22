import { ArrowRight, Sparkles } from 'lucide-react';
import heroBackground from '../assets/hero-background.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 hero-gradient">
        <img 
          src={heroBackground} 
          alt="AI Legal Analysis" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">AI-Powered Legal Intelligence</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-display text-white mb-6">
            AI-Powered Legal
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-gold">
              Document Intelligence
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Upload contracts, deeds, or pleadings—get structured legal insights instantly. 
            Transform document review with advanced AI analysis.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-gold group">
              Try Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="btn-ghost">
              View Documentation
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">10MB</div>
              <div className="text-white/70">Max File Size</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">99.9%</div>
              <div className="text-white/70">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">&lt;30s</div>
              <div className="text-white/70">Analysis Time</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;