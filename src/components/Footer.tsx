import { Scale } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
              <Scale className="w-5 h-5 text-charcoal" />
            </div>
            <span className="text-xl font-bold text-charcoal">LegalAI</span>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap gap-8 mb-8">
            <a href="#" className="text-muted-foreground hover:text-charcoal transition-colors animated-underline">
              About
            </a>
            <a href="#" className="text-muted-foreground hover:text-charcoal transition-colors animated-underline">
              API Docs
            </a>
            <a href="#" className="text-muted-foreground hover:text-charcoal transition-colors animated-underline">
              Contact
            </a>
            <a href="#" className="text-muted-foreground hover:text-charcoal transition-colors animated-underline">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-charcoal transition-colors animated-underline">
              Terms
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 LegalAI. All rights reserved. | Revolutionizing legal document analysis with AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;