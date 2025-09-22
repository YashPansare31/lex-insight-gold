import { Upload, Zap, Eye } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload',
    description: 'Drag & drop your legal document or browse to upload. We support PDF and DOCX formats up to 10MB.'
  },
  {
    icon: Zap,
    title: 'Analyze',
    description: 'Our AI processes your document with advanced legal understanding, extracting key insights and risk factors.'
  },
  {
    icon: Eye,
    title: 'Review Insights',
    description: 'Get structured analysis with risk assessments, key terms, and actionable recommendations in seconds.'
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title text-charcoal mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, fast, and secure. Get professional legal document analysis in three easy steps.
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-slide-in-left" style={{animationDelay: `${index * 0.2}s`}}>
              {/* Step Number */}
              <div className="text-6xl lg:text-8xl font-bold text-gold/10 absolute -top-4 -left-2 -z-10">
                {index + 1}
              </div>
              
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-gold rounded-2xl flex items-center justify-center mb-8 relative z-10">
                <step.icon className="w-10 h-10 text-charcoal" />
              </div>
              
              {/* Content */}
              <h3 className="text-card-title text-charcoal mb-4">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              
              {/* Connector Line (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gold/20 to-transparent transform translate-x-12"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;