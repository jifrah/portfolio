import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Clock, Users, TrendingUp, ChevronRight, Star } from 'lucide-react';

// Adie Project Detail Page
const Adie = () => {
  const navigate = useNavigate();
  // State for scroll progress
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Metrics animation state
  const [animatedMetrics, setAnimatedMetrics] = useState({
    approvalTime: 0,
    dropOffRate: 0,
    supportUsers: 0
  });

  // Handle scroll for progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate metrics on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === 'metrics') {
            // Animate numbers
            const duration = 2000;
            const steps = 60;
            const interval = duration / steps;
            let step = 0;

            const timer = setInterval(() => {
              step++;
              const progress = step / steps;
              
              setAnimatedMetrics({
                approvalTime: Math.round(6 * progress),
                dropOffRate: Math.round(47 * progress),
                supportUsers: Math.round(12 * progress)
              });

              if (step >= steps) clearInterval(timer);
            }, interval);
          }
        });
      },
      { threshold: 0.5 }
    );

    const metricsSection = document.getElementById('metrics');
    if (metricsSection) observer.observe(metricsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFCF9] font-nunito">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[#F5F5F7] z-50">
        <div 
          className="h-full bg-[#050505] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header Navigation */}
      <header className="sticky top-0 bg-[#FCFCF9]/95 backdrop-blur-sm z-40 border-b border-[#E5E5E5]">
        <nav className="py-4 px-5 md:px-10 lg:px-[70px] 2xl:px-[200px]">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => navigate('/')} 
              className="flex items-center gap-2 text-[#050505] hover:opacity-70 transition-opacity"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Projects</span>
            </button>
            <a 
              href="https://adie.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#050505] hover:opacity-70 transition-opacity"
            >
              <span className="font-medium">View Live Site</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-[70px] px-5 md:px-10 lg:px-[70px] 2xl:px-[200px]">
        <div className="max-w-7xl mx-auto">
          {/* Project Type Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F5F5F7] rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-sm font-medium text-[#1D1D1F]">Digital Innovation</span>
          </div>

          {/* Title and Description */}
          <h1 className="text-[48px] md:text-[64px] lg:text-[80px] font-bold leading-[1.1] mb-6">
            Scaling Microfinance Impact in France
          </h1>
          
          <p className="text-[20px] md:text-[24px] text-[#1D1D1F] leading-relaxed max-w-3xl mb-8">
            Transforming how 65,000 entrepreneurs access loans and support through AI-powered automation and user-centered design.
          </p>

          {/* Project Details */}
          <div className="flex flex-wrap gap-6 text-[16px] text-[#1D1D1F]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 opacity-60" />
              <span>12 months</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 opacity-60" />
              <span>Product Manager</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 opacity-60" />
              <span>60% faster processing | 45% higher conversion</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="px-5 md:px-10 lg:px-[70px] 2xl:px-[200px] mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
            <img 
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&h=900&fit=crop"
              alt="Adie microfinance platform"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-20 px-5 md:px-10 lg:px-[70px] 2xl:px-[200px] bg-[#F5F5F7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-6">Context</h2>
          <p className="text-[18px] md:text-[20px] text-[#1D1D1F] leading-relaxed">
            Adie is France's largest microfinance organization, supporting women entrepreneurs and business owners in underserved communities. Despite reaching 65,000 annual prospects, their manual processes created bottlenecks that limited actual loan approvals to just 34,000—leaving significant impact on the table.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-5 md:px-10 lg:px-[70px] 2xl:px-[200px]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-6">The Challenge</h2>
          <div className="space-y-4">
            <p className="text-[18px] md:text-[20px] text-[#050505]">
              Although <strong>65,000 prospects</strong> began the loan journey annually, only <strong>34,000 loans</strong> were issued.
            </p>
            
            <div className="bg-[#F5F5F7] rounded-2xl p-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-[18px]">Primary gap:</p>
                  <p className="text-[#1D1D1F]">79% of users dropped off before decision</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-[18px]">Secondary gap:</p>
                  <p className="text-[#1D1D1F]">Entrepreneurs struggled to find and use Adie's free support services</p>
                </div>
              </div>
            </div>
            
            <p className="text-[16px] text-[#1D1D1F] italic pt-2">
              We prioritized reducing loan-flow friction first, then improved support-services discoverability.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metrics" className="py-20 px-5 md:px-10 lg:px-[70px] 2xl:px-[200px] bg-[#F5F5F7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12 text-center">Key Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 text-center">
              <div className="text-[48px] font-bold text-[#050505] mb-2">{animatedMetrics.approvalTime}h</div>
              <p className="text-[18px] text-[#1D1D1F]">Approval Time</p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center">
              <div className="text-[48px] font-bold text-[#050505] mb-2">{animatedMetrics.dropOffRate}%</div>
              <p className="text-[18px] text-[#1D1D1F]">Drop-off Reduction</p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center">
              <div className="text-[48px] font-bold text-[#050505] mb-2">{animatedMetrics.supportUsers}K</div>
              <p className="text-[18px] text-[#1D1D1F]">New Support Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-5 md:px-10 lg:px-[70px] 2xl:px-[200px]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-12">What We Built</h2>

          <div className="space-y-20">
            {/* Solution 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-medium">
                  <span>UX + Automation</span>
                </div>
                <h3 className="text-[24px] md:text-[28px] font-bold">Streamlined Application Flow</h3>
                <p className="text-[18px] text-[#050505]">
                  Reduced 47-field forms to progressive disclosure—collecting the right info at the right time.
                </p>
                <p className="text-[16px] text-[#1D1D1F]">
                  Built conditional logic that adapts questions based on business type, funding needs, and risk profile. 
                  Added real-time validation and auto-save to prevent data loss.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl h-[300px] flex items-center justify-center text-[64px] font-bold text-blue-700">
                Smart Forms
              </div>
            </div>

            {/* Solution 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl h-[300px] flex items-center justify-center text-[64px] font-bold text-green-700">
                AI OCR
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm font-medium">
                  <span>AI + Vision</span>
                </div>
                <h3 className="text-[24px] md:text-[28px] font-bold">Document Processing Automation</h3>
                <p className="text-[18px] text-[#050505]">
                  Document uploads went from 3-week verification delays to instant data extraction.
                </p>
                <p className="text-[16px] text-[#1D1D1F]">
                  Deployed an AI-powered OCR engine with human-in-the-loop fallback, then extended the pipeline 
                  from IDs to bank and legal documents.
                </p>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm font-medium">
                  <span>LLM + RAG</span>
                </div>
                <h3 className="text-[24px] md:text-[28px] font-bold">AI-Powered Support Assistant</h3>
                <p className="text-[18px] text-[#050505]">
                  Even the best services fail if users can't find them—so we built a conversational UI.
                </p>
                <p className="text-[16px] text-[#1D1D1F]">
                  Transformed static help pages into an LLM + RAG chatbot that surfaces high-value support, 
                  personalized by user profile & stage.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl h-[300px] flex items-center justify-center text-[64px] font-bold text-purple-700">
                AI Support
              </div>
            </div>

            {/* Solution 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-orange-50 to-red-100 rounded-3xl h-[300px] flex items-center justify-center text-[64px] font-bold text-orange-700">
                Match AI
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 rounded-full px-3 py-1 text-sm font-medium">
                  <span>Recommendation Engine</span>
                </div>
                <h3 className="text-[24px] md:text-[28px] font-bold">Smart Mentor Matching</h3>
                <p className="text-[18px] text-[#050505]">
                  Connecting entrepreneurs with relevant mentors moved from ad-hoc to data-driven precision.
                </p>
                <p className="text-[16px] text-[#1D1D1F]">
                  Structured mentor data with ops/HR, then built a feedback-driven recommender to surface 
                  the right mentor everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Contribution Section */}
      <section className="py-20 px-5 md:px-10 lg:px-[70px] 2xl:px-[200px] bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 text-[#050505]" />
            <h2 className="text-[28px] md:text-[36px] font-bold">My Contribution</h2>
          </div>
          
          <div className="mb-6">
            <p className="text-[18px] md:text-[20px] text-[#1D1D1F] font-medium mb-8">
              As the Product Manager leading discovery and delivery:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-[16px] md:text-[18px] text-[#050505]">
                    Led <strong>user research and stakeholder interviews</strong> across 15 Adie offices to understand loan processing bottlenecks and user pain points
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-[16px] md:text-[18px] text-[#050505]">
                    Designed and executed <strong>A/B testing framework</strong> for progressive form disclosure, achieving 47% drop-off reduction
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-[16px] md:text-[18px] text-[#050505]">
                    Managed <strong>cross-functional delivery teams</strong> (engineering, design, data science) using agile methodologies and sprint planning
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-[16px] md:text-[18px] text-[#050505]">
                    Established <strong>KPI tracking and analytics infrastructure</strong> to measure loan conversion, processing time, and user satisfaction
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-[16px] md:text-[18px] text-[#050505]">
                    Collaborated with <strong>AI/ML teams to define OCR requirements</strong> and human-in-the-loop workflows for document processing
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-[16px] md:text-[18px] text-[#050505]">
                    Facilitated <strong>stakeholder alignment</strong> between loan officers, IT, and executive teams to ensure smooth rollout across all regions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-20 px-5 md:px-10 lg:px-[70px] 2xl:px-[200px] bg-[#050505] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-6">The Bottom Line</h2>
          <p className="text-[20px] md:text-[24px] leading-relaxed mb-8 opacity-90">
            By focusing on automation and user experience, we transformed Adie's ability to serve entrepreneurs. 
            The platform now processes <strong>2x more applications</strong> with <strong>half the operational cost</strong>, 
            enabling Adie to reinvest savings into expanding their support services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Back to Portfolio
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-5 md:px-10 lg:px-[70px] 2xl:px-[200px] bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-[14px] text-[#1D1D1F]">© 2024 Your Portfolio</p>
          <button 
            onClick={() => navigate('/?contact=true')}
            className="text-[14px] text-[#050505] hover:underline"
          >
            Let's work together
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Adie;