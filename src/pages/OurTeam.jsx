import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Mail, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alexander Vance',
    role: 'Managing Partner & Senior Advocate',
    education: 'LL.M., Harvard Law School',
    bio: 'With over 25 years of courtroom experience, Alexander is the lead partner of our litigation department, representing high-profile domestic and international clients in complex High Court and Supreme Court disputes.',
    specializations: ['Matrimonial Disputes', 'Property Litigation', 'Criminal Defence', 'Constitutional Law'],
    image: '/assets/image/dummy_lawyer_1.png',
    email: 'a.vance@thecns.online'
  },
  {
    name: 'Victoria Sterling',
    role: 'Senior Partner & Corporate Advisor',
    education: 'J.D., Oxford University',
    bio: 'Victoria advises Fortune 500 corporations, scaling startups, and private equity boards on complex legal restructuring, corporate governance compliance, and multi-jurisdictional mergers and acquisitions.',
    specializations: ['Corporate Law', 'M&A', 'Corporate Governance', 'Arbitration'],
    image: '/assets/image/dummy_lawyer_2.png',
    email: 'v.sterling@thecns.online'
  },
  {
    name: 'Marcus Thorne',
    role: 'Principal Financial Advisor & CA',
    education: 'Chartered Accountant (FCA)',
    bio: 'Marcus has 22+ years of experience structuring debt and equity financing, managing public issues, and auditing large banking institutions, PSUs, and private enterprises in India and abroad.',
    specializations: ['Project Finance', 'Taxation & Audits', 'Corporate Restructuring', 'Bookkeeping'],
    image: '/assets/image/dummy_lawyer_3.png',
    email: 'm.thorne@thecns.online'
  },
  {
    name: 'Helena Vance',
    role: 'Partner - Arbitration & Commercial Litigation',
    education: 'J.D., Yale Law School',
    bio: 'Helena leads our alternative dispute resolution team, representing corporate clients in international arbitrations and securing strategic out-of-court settlements in high-stakes civil conflicts.',
    specializations: ['Civil Litigation', 'Arbitration & Mediation', 'Contract Breaches', 'Business Disputes'],
    image: '/assets/image/dummy_lawyer_4.png',
    email: 'h.vance@thecns.online'
  },
  {
    name: 'Jonathan Cross',
    role: 'Associate Partner - Taxation & Regulatory Compliance',
    education: 'LL.B., Delhi University',
    bio: 'Jonathan assists startups and SMEs in setting up compliance-oriented business structures, handles tax dispute resolutions, and represents clients in front of regulatory boards.',
    specializations: ['GST Compliance', 'Company Formation', 'Tax Litigation', 'Regulatory Advisory'],
    image: '/assets/image/dummy_lawyer_5.png',
    email: 'j.cross@thecns.online'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Partner - Family & Matrimonial Law',
    education: 'LL.B., National Law University (NLU)',
    bio: 'Sarah provides empathetic, strategic, and result-oriented legal counsel to individuals navigating sensitive family transitions, inheritance disputes, and matrimonial settlements.',
    specializations: ['Matrimonial Law', 'Divorce & Alimony', 'Child Custody', 'Inheritance Disputes'],
    image: '/assets/image/dummy_lawyer_6.png',
    email: 's.jenkins@thecns.online'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const OurTeam = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-navy-900">
      <div className="container-page">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-100 mb-6">Our Team</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A cohesive collective of legal minds and financial strategists working in synergy to provide absolute clarity and protection.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl overflow-hidden border border-white/5 bg-navy-800/40 hover:border-white/10 hover:shadow-glow transition-all duration-300 flex flex-col p-6 md:p-8"
            >
              {/* Circular Photo Area */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden bg-navy-900 mx-auto mb-6 border-2 border-white/10 group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content Area */}
              <div className="flex-1 flex flex-col text-center">
                <div className="mb-4">
                  <h3 className="text-2xl font-serif font-bold text-slate-100 mb-1">{member.name}</h3>
                  <p className="text-teal-400 font-medium text-sm tracking-wide">{member.role}</p>
                </div>

                {/* Education */}
                <div className="flex items-center justify-center gap-2 text-slate-400 text-sm mb-6 border-b border-white/5 pb-4">
                  <GraduationCap size={16} className="text-teal-400 shrink-0" />
                  <span>{member.education}</span>
                </div>

                {/* Bio */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">{member.bio}</p>

                {/* Specializations */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Expertise</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.specializations.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 transition-colors"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-center gap-4 pt-4 border-t border-white/5">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-white hover:text-black transition-colors"
                    title="Send Email"
                  >
                    <Mail size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-white hover:text-black transition-colors"
                    title="LinkedIn Profile"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurTeam;
