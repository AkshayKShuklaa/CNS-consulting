import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp, DollarSign, Building, Package, PartyPopper } from 'lucide-react';

const investments = [
  {
    title: 'Event Business Revenue Share Model',
    image: '/assets/image/practice-area/banking-finance.jpeg',
    icon: <PartyPopper size={24} />,
    duration: '10 Months',
    roi: '10% to 15% Monthly',
    minInvestment: '₹10,000 or more',
    gradient: 'from-white/5 to-transparent',
    borderColor: 'border-white/10',
    iconBg: 'bg-white/10 text-white'
  },
  {
    title: 'Builder Projects @ Ajitgarh, Rajasthan',
    image: '/assets/image/real-eatase.jpeg',
    icon: <Building size={24} />,
    duration: '24 Months',
    roi: '15% to 25% Monthly',
    minInvestment: '₹5,000,000 or more',
    gradient: 'from-white/5 to-transparent',
    borderColor: 'border-white/10',
    iconBg: 'bg-white/10 text-white'
  },
  {
    title: 'Invest in Product Based Business',
    image: '/assets/image/practice-area/finance.webp',
    icon: <Package size={24} />,
    duration: '45 Days to 70 Days',
    roi: '20% to 45% One Time Profit',
    minInvestment: 'Variable',
    gradient: 'from-white/5 to-transparent',
    borderColor: 'border-white/10',
    iconBg: 'bg-white/10 text-white'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Investments = () => {
  return (
    <section id="investments" className="py-24 bg-navy-800 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-page relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Consult New Stream</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-100">
            Opportunities for <span className="text-gold-400">Investors & Partners</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
            Make your money work for you. Discover our high-yield investment models designed to accelerate your wealth.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {investments.map((inv, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className={`glass rounded-3xl p-6 md:p-8 border ${inv.borderColor} bg-gradient-to-r ${inv.gradient} relative overflow-hidden group transition-all duration-300 shadow-lg`}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 relative z-10">
                {/* Image */}
                <div className="w-full md:w-48 h-48 md:h-auto md:aspect-square rounded-2xl overflow-hidden shrink-0 shadow-inner relative group-hover:shadow-xl transition-all duration-300">
                  <div className={`absolute inset-0 opacity-40 mix-blend-multiply ${inv.iconBg.split(' ')[0]}`} />
                  <img src={inv.image} alt={inv.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${inv.iconBg}`}>
                    {inv.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-serif font-bold text-slate-100 mb-6 drop-shadow-sm">
                    {idx + 1}. {inv.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 bg-navy-900/40 rounded-xl p-3 border border-white/5">
                      <TrendingUp className="text-teal-400 shrink-0" size={20} />
                      <span className="text-slate-200 font-semibold">{inv.roi}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 bg-navy-900/40 rounded-xl p-3 border border-white/5">
                      <Calendar className="text-teal-400 shrink-0" size={20} />
                      <span className="text-slate-200 font-semibold">{inv.duration}</span>
                    </div>

                    <div className="flex items-center gap-3 bg-navy-900/40 rounded-xl p-3 border border-white/5 sm:col-span-2">
                      <DollarSign className="text-gold-400 shrink-0" size={20} />
                      <span className="text-slate-200 font-semibold">Invest {inv.minInvestment}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Investments;
