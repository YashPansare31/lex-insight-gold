import { Upload, Brain, Shield, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Upload,
    title: 'Smart Uploads',
    description: 'PDF/DOCX up to 10MB with intelligent document detection and parsing.'
  },
  {
    icon: Brain,
    title: 'Deep Legal Analysis',
    description: 'GPT-driven insights that understand legal context and terminology.'
  },
  {
    icon: BarChart3,
    title: 'Risk Assessment',
    description: 'Low/Medium/High risk scoring with detailed context and recommendations.'
  },
  {
    icon: Shield,
    title: 'Secure Processing',
    description: 'Auto cleanup and privacy protection with enterprise-grade security.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title text-charcoal mb-6">
            Core Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful AI capabilities designed specifically for legal document analysis and review.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card group animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-gold" />
                </div>
              </div>
              
              <h3 className="text-card-title text-charcoal mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;