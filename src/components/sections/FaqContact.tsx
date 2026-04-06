import React, { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { FAQS_DATA } from "../../data/homeData";

const FaqContact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Titre de section */}
        <div className="text-center mb-16">
          <span className="bg-dark-900 text-white text-xs font-bold px-4 py-2 uppercase tracking-widest inline-block rounded-sm">
            Foire aux questions
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* COLONNE GAUCHE : FAQ */}
          <div className="space-y-6">
            {FAQS_DATA.map((faq, index) => (
              <div 
                key={index} 
                className="bg-[#fafafa] transition-all duration-300"
              >
                <button 
                  className="w-full text-left flex items-start justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg p-1"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-start gap-4">
                    {/* Le petit cercle '?' de ton design d'origine */}
                    <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                      ?
                    </div>
                    <h3 className={`font-bold text-lg transition-colors duration-300 ${openFaq === index ? 'text-gold-600' : 'text-dark-900'}`}>
                      {faq.q}
                    </h3>
                  </div>
                  <div className="shrink-0 ml-4 text-gray-400 mt-1">
                    {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>
                
                <div 
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out pl-11 ${openFaq === index ? 'max-h-64 pt-3 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-500 font-light text-sm leading-relaxed pr-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* COLONNE DROITE : CARTE CONTACT */}
          <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm text-center flex flex-col items-center justify-center h-full min-h-[320px] hover:shadow-lg transition-shadow duration-500">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-400">
              <MessageCircle size={32} strokeWidth={1.5} />
            </div>
            
            <h3 className="text-2xl font-serif text-dark-900 mb-4">Posez-nous une question ?</h3>
            
            <p className="text-gray-500 font-light mb-8 text-sm max-w-xs mx-auto leading-relaxed">
              Vous avez une question concernant la location contactez-nous, notre équipe est disponible 7j/7 pour vous aider.
            </p>
            
            <a href="https://wa.me/33768176882" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="secondary" className="border-gray-200 text-dark-900 hover:bg-dark-900 hover:text-white hover:border-dark-900 transition-colors w-full px-8 py-3 flex items-center justify-center gap-2">
                Nous contacter <span className="font-serif text-lg leading-none">✆</span>
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqContact;