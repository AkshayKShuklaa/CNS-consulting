import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  const pillars = [
    {
      title: 'Integrated Expertise',
      desc: "We don't just look at the numbers, and we don't just look at the statutes. We analyze how they impact each other to create seamless, bulletproof strategies."
    },
    {
      title: 'Agility & Innovation',
      desc: "As a new-generation firm, we aren't weighed down by rigid, legacy processes. We leverage modern methodologies and forward-thinking insights."
    },
    {
      title: 'Uncompromising Integrity',
      desc: "Trust is our ultimate currency. We hold ourselves to the highest ethical and professional standards, ensuring your peace of mind in every transaction."
    }
  ];

  return (
    <section id="about" className="section-pad bg-navy-900 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute -left-1/4 top-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20 items-start">
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="eyebrow">About Us</div>
            <h2 className="section-title mb-6">Bridging Strategy, Law, and Finance</h2>
            
            <div className="w-full h-64 md:h-80 rounded-3xl overflow-hidden mb-8 shadow-xl relative group">
              <div className="absolute inset-0 bg-navy-900/30 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500" />
              <img src="/assets/image/about-img-2.jpeg" alt="About Consult New Stream" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed mb-10">
              <p>
                In today's fast-paced economic landscape, business decisions rarely happen in a vacuum. A financial choice impacts legal compliance, and a legal strategy shapes fiscal growth.
              </p>
              <p>
                We were founded with a clear, singular purpose: to dismantle the traditional silos between legal counsel and financial strategy. As a modern consulting firm built for the complexities of the current market, we provide integrated, high-caliber solutions that empower businesses and individuals to navigate growth with absolute confidence.
              </p>
            </div>

            <h3 className="text-2xl font-serif text-white font-bold mb-4">What We Do</h3>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed mb-10">
              <p>
                We operate at the critical intersection of law and finance. By combining these two vital disciplines under one roof, we eliminate friction, reduce overhead, and deliver holistic strategies that protect your assets while accelerating your ambitions.
              </p>
              <p>
                Whether you are a startup scaling your operations, an established enterprise navigating complex regulatory waters, or an individual managing private wealth, we provide the clarity you need to move forward.
              </p>
            </div>

            <a href="#contact" className="btn-primary group inline-flex items-center gap-2">
              Work With Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right Column (Pillars & Why Us) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Core Pillars */}
            <div className="glass p-8 md:p-10 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-serif text-teal-400 font-bold mb-6">Our Core Pillars</h3>
              <div className="space-y-6">
                {pillars.map((pillar, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="text-gold-400 shrink-0" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{pillar.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="glass p-8 md:p-10 rounded-3xl border border-teal-500/20 bg-teal-500/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-bl-full blur-[30px]" />
              
              <h3 className="text-2xl font-serif text-white font-bold mb-4 relative z-10">Why Choose Us?</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed relative z-10">
                <p>
                  The traditional approach to legal and financial consulting is reactive—fixing problems after they arise. We do things differently.
                </p>
                <p>
                  We partner with our clients proactively, anticipating challenges and identifying market opportunities before they hit your radar. Because we operate as a cohesive collective rather than a decentralized network of independent brokers, you get unified advice, consistent communication, and a team completely aligned with your vision.
                </p>
                <div className="mt-6 p-4 bg-navy-900/50 rounded-xl border border-gold-500/20">
                  <span className="text-gold-400 font-bold block mb-1">Our Promise:</span>
                  To simplify the complex, mitigate your risks, and build a resilient foundation for your long-term success.
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
