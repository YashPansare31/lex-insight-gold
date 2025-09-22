import { FileText, Gavel, Scroll, Building, Copyright, Users, Shield, Briefcase } from 'lucide-react';

const documentTypes = [
  { icon: FileText, label: 'Contracts' },
  { icon: Building, label: 'Deeds' },
  { icon: Scroll, label: 'Wills' },
  { icon: Gavel, label: 'Court Filings' },
  { icon: Shield, label: 'Legislation' },
  { icon: Users, label: 'Legal Forms' },
  { icon: Copyright, label: 'IP Documents' },
  { icon: Briefcase, label: 'Corporate Docs' }
];

const DocumentTypesSection = () => {
  return (
    <section className="py-24 legal-pattern">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title text-charcoal mb-6">
            Supported Document Types
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive analysis across all major legal document categories.
          </p>
        </div>
        
        {/* Document Types Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {documentTypes.map((type, index) => (
            <div 
              key={index}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:bg-card hover:shadow-medium hover:-translate-y-1 transition-all duration-300 animate-scale-in"
              style={{animationDelay: `${index * 0.05}s`}}
            >
              <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald/20 transition-colors">
                <type.icon className="w-6 h-6 text-emerald" />
              </div>
              
              <h3 className="font-semibold text-charcoal">
                {type.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentTypesSection;