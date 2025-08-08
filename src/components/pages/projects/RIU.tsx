// RIU Smart Lighting Project Page with Your Contribution
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Clock, Users, TrendingUp, ChevronRight, Star } from 'lucide-react';

const Riu = () => {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animatedMetrics, setAnimatedMetrics] = useState({
    energySavings: 0,
    co2Reduction: 0,
    guestIssues: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === 'metrics') {
          const duration = 2000;
          const steps = 60;
          const interval = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setAnimatedMetrics({
              energySavings: Math.round(110000 * progress),
              co2Reduction: Math.round(181 * progress),
              guestIssues: Math.round(0 * progress)
            });
            if (step >= steps) clearInterval(timer);
          }, interval);
        }
      });
    }, { threshold: 0.5 });

    const metricsSection = document.getElementById('metrics');
    if (metricsSection) observer.observe(metricsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFCF9] font-nunito">
      <div className="fixed top-0 left-0 w-full h-1 bg-[#F5F5F7] z-50">
        <div className="h-full bg-[#050505] transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
      </div>

      <header className="sticky top-0 bg-[#FCFCF9]/95 backdrop-blur-sm z-40 border-b border-[#E5E5E5]">
        <nav className="py-4 px-5 md:px-10 lg:px-[70px] 2xl:px-[200px]">
          <div className="flex justify-between items-center">
            <button onClick={() => navigate('/')} className="flex items-center gap-2 text-[#050505] hover:opacity-70 transition-opacity">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Projects</span>
            </button>
          </div>
        </nav>
      </header>

      <section className="py-[70px] px-5 md:px-10 lg:px-[70px] 2xl:px-[200px]">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#F5F5F7] rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-sm font-medium text-[#1D1D1F]">Cloud + IoT Strategy</span>
          </div>

          <h1 className="text-[48px] md:text-[64px] lg:text-[80px] font-bold leading-[1.1] mb-6">
            Smart Lighting to Bridge ROI and Emissions
          </h1>

          <p className="text-[20px] md:text-[24px] text-[#1D1D1F] leading-relaxed max-w-3xl mb-8">
            Accelerating ESG goals for a global hotel brand by piloting Azure Digital Twins, IoT sensors, and energy dashboards—without disrupting luxury guest service.
          </p>

          <div className="flex flex-wrap gap-6 text-[16px] text-[#1D1D1F]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 opacity-60" />
              <span>2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 opacity-60" />
              <span>Cross-functional team (Tech + Hospitality)</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 opacity-60" />
              <span>€110K Savings | 181t CO₂ Cut</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-10 lg:px-[70px] 2xl:px-[200px] bg-[#050505] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-6">The Bottom Line</h2>
          <p className="text-[20px] md:text-[24px] leading-relaxed mb-8 opacity-90">
            Smart lighting proved to be the ideal wedge—delivering immediate ESG value with zero disruption. We're now scaling across RIU's global portfolio.
          </p>
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-[70px] 2xl:px-[200px] mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
            <img 
              src="https://images.unsplash.com/photo-1508923567004-3a6b8004f3d1?w=1600&h=900&fit=crop"
              alt="RIU Hotel lighting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-10 lg:px-[70px] 2xl:px-[200px] bg-[#F5F5F7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-6">Context</h2>
          <p className="text-[18px] md:text-[20px] text-[#1D1D1F] leading-relaxed">
            RIU Hotels, with 100+ properties, faced post-COVID financial pressure and increasing ESG scrutiny from stakeholder TUI Group. Microsoft Azure stepped in to pilot smart building technologies that deliver measurable value—fast.
          </p>
        </div>
      </section>

      <section className="py-20 px-5 md:px-10 lg:px-[70px] 2xl:px-[200px]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-6">The Challenge</h2>
          <div className="space-y-4">
            <p className="text-[18px] md:text-[20px] text-[#050505]">
              Pilot sustainability upgrades without disturbing premium guest experience or overshooting cloud budget (€110K–180K).
            </p>

            <div className="bg-[#F5F5F7] rounded-2xl p-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-[18px]">Legacy Systems:</p>
                  <p className="text-[#1D1D1F]">Operational conservatism made major overhauls risky</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-[18px]">Quick ROI Needed:</p>
                  <p className="text-[#1D1D1F]">ESG actions needed real impact to unlock further investment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="metrics" className="py-20 px-5 md:px-10 lg:px-[70px] 2xl:px-[200px] bg-[#F5F5F7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12 text-center">Key Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 text-center">
              <div className="text-[48px] font-bold text-[#050505] mb-2">€{animatedMetrics.energySavings.toLocaleString()}</div>
              <p className="text-[18px] text-[#1D1D1F]">Projected Savings</p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center">
              <div className="text-[48px] font-bold text-[#050505] mb-2">{animatedMetrics.co2Reduction} t</div>
              <p className="text-[18px] text-[#1D1D1F]">CO₂ Reduced</p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center">
              <div className="text-[48px] font-bold text-[#050505] mb-2">{animatedMetrics.guestIssues}</div>
              <p className="text-[18px] text-[#1D1D1F]">Guest Complaints</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-10 lg:px-[70px] 2xl:px-[200px]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12">What We Built</h2>

          <div className="space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-medium">
                  <span>IoT + Cloud</span>
                </div>
                <h3 className="text-[24px] md:text-[28px] font-bold">Occupancy-Based Lighting</h3>
                <p className="text-[18px] text-[#050505]">
                  Deployed sensor arrays in high-traffic and low-use areas—like lobbies, meeting rooms, and service corridors—to trigger zone-based lighting dimming and switch-off.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl h-[300px] flex items-center justify-center text-[64px] font-bold text-blue-700">
                IoT Zones
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl h-[300px] flex items-center justify-center text-[64px] font-bold text-green-700">
                Digital Twin
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm font-medium">
                  <span>Simulation</span>
                </div>
                <h3 className="text-[24px] md:text-[28px] font-bold">Azure Digital Twins Modeling</h3>
                <p className="text-[18px] text-[#050505]">
                  Used Digital Twins to simulate lighting strategies, predict consumption, and model optimal guest-adaptive configurations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm font-medium">
                  <span>Dashboards</span>
                </div>
                <h3 className="text-[24px] md:text-[28px] font-bold">Real-Time Energy KPIs</h3>
                <p className="text-[18px] text-[#050505]">
                  Built a central dashboard using Azure Monitor and Power BI—visualizing energy trends, emissions, and financial metrics for stakeholder visibility.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl h-[300px] flex items-center justify-center text-[64px] font-bold text-purple-700">
                KPIs Live
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Contribution Section */}
      <section className="py-20 px-5 md:px-10 lg:px-[70px] 2xl:px-[200px] bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 text-[#050505]" />
            <h2 className="text-[28px] md:text-[36px] font-bold">My Contribution</h2>
          </div>
          
          <div className="mb-6">
            <p className="text-[18px] md:text-[20px] text-[#1D1D1F] font-medium mb-8">
              As the Product/Strategy Consultant:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-[16px] md:text-[18px] text-[#050505]">
                    I <strong>translated stakeholder needs</strong> into a focused technical roadmap — aligning IT, sustainability, and hotel operations
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-[16px] md:text-[18px] text-[#050505]">
                    Leveraged my <strong>hospitality experience</strong> to ensure proposed changes would be guest-neutral or positive
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-[16px] md:text-[18px] text-[#050505]">
                    Collaborated with Azure's technical team to <strong>define system architecture</strong>, sensor placement, and expected outcomes
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-[16px] md:text-[18px] text-[#050505]">
                    Built the <strong>business case model</strong> used to pitch the ROI of lighting vs. other potential upgrades
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-[16px] md:text-[18px] text-[#050505]">
                    Prepared the <strong>presentation to RIU's board</strong> summarizing sustainability gains, cost savings, and scalability
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-[16px] md:text-[18px] text-[#050505]">
                    Used my relationships within RIU's C-suite to <strong>navigate internal concerns and political sensitivities</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-20 px-5 md:px-10 lg:px-[70px] 2xl:px-[200px]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => navigate('/')} 
              className="inline-flex items-center gap-2 border border-[#050505] px-6 py-3 rounded-full font-medium hover:bg-[#050505] hover:text-white transition-colors"
            >
              Back to Portfolio
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Riu;