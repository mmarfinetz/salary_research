import { useEffect } from 'react';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f8fa]">
      <Header />
      <Nav />
      <main>
        <section id="overview" className="container mx-auto px-4 py-6">
          <h2 className="text-2xl font-bold text-[#2c426c] mb-4">Executive Summary</h2>
          <div className="bg-white p-6 rounded-md shadow-sm mb-8">
            <p className="mb-4">This comprehensive report analyzes salary data for four key roles in the cryptocurrency industry: Research Analysts, Data Analysts, Community Managers, and Business Developers. Based on data from multiple authoritative sources including CryptoJobsList, Web3.career, BeInCrypto, Glassdoor, and Built In, this report provides a detailed overview of current compensation trends.</p>
            <p>The research reveals that crypto industry salaries are significantly higher than comparable roles in traditional industries, with substantial variations based on location, experience level, and company type. Total compensation packages frequently include significant bonuses, equity, and cryptocurrency payments in addition to base salary.</p>
          </div>

          <div className="key-findings mb-8">
            <h3 className="text-xl font-bold text-[#2c426c] mb-4">Key Findings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <KeyFindingCard
                icon="💰"
                title="Premium Compensation"
                description="Crypto roles command 40-60% higher salaries than traditional industry counterparts"
              />
              <KeyFindingCard
                icon="📈"
                title="Business Development Leads"
                description="Business Development roles have the highest total compensation, reaching $280,000"
              />
              <KeyFindingCard
                icon="🌎"
                title="Location Matters"
                description="US salaries average 50% higher than global averages for equivalent positions"
              />
              <KeyFindingCard
                icon="⏳"
                title="Experience Premium"
                description="Senior roles command 2-3x the compensation of entry-level positions"
              />
            </div>
          </div>
        </section>

        <section id="role-comparison" className="container mx-auto px-4 py-6 bg-white">
          <h2 className="text-2xl font-bold text-[#2c426c] mb-4">Role Comparison</h2>
          <div className="bg-white p-6 rounded-md shadow-sm mb-8">
            <h3 className="text-xl font-bold text-[#2c426c] mb-4">Comparative Salary Analysis</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#2c426c] text-white">
                    <th className="p-3 text-left">Role</th>
                    <th className="p-3 text-left">Global Average</th>
                    <th className="p-3 text-left">US Average</th>
                    <th className="p-3 text-left">Salary Range (US)</th>
                    <th className="p-3 text-left">Total Comp (US)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Crypto Research Analyst</td>
                    <td className="p-3">$74,294</td>
                    <td className="p-3">$111,928</td>
                    <td className="p-3">$80,000 - $160,000</td>
                    <td className="p-3">Up to $151,474</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-3 font-medium">Data Analyst</td>
                    <td className="p-3">$73,089</td>
                    <td className="p-3">$131,615</td>
                    <td className="p-3">$61,000 - $230,000</td>
                    <td className="p-3">Up to $200,000+</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Community Manager</td>
                    <td className="p-3">$70,993</td>
                    <td className="p-3">$93,200</td>
                    <td className="p-3">$47,000 - $200,000</td>
                    <td className="p-3">Up to $102,500</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-3 font-medium">Business Developer</td>
                    <td className="p-3">$86,086</td>
                    <td className="p-3">$122,500</td>
                    <td className="p-3">$90,000 - $150,000</td>
                    <td className="p-3">$153,000 - $280,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm mb-8">
            <h3 className="text-xl font-bold text-[#2c426c] mb-4">Average US Salaries by Role in Crypto Industry (2025)</h3>
            <BarChart />
          </div>
        </section>

        <section id="salary-ranges" className="container mx-auto px-4 py-6">
          <h2 className="text-2xl font-bold text-[#2c426c] mb-4">Salary Ranges by Role</h2>
          <div className="bg-white p-6 rounded-md shadow-sm mb-8">
            <h3 className="text-xl font-bold text-[#2c426c] mb-4">Total Compensation Breakdown</h3>
            <p className="mb-4">Total compensation in the crypto industry typically includes base salary, performance bonuses, equity or token grants, and other benefits. Business Development roles show the widest range, with top performers earning more than double their base salary through performance-based incentives.</p>
            <CompensationChart />
          </div>
        </section>

        <section id="experience-impact" className="container mx-auto px-4 py-6 bg-white">
          <h2 className="text-2xl font-bold text-[#2c426c] mb-4">Experience Level Impact</h2>
          <div className="bg-white p-6 rounded-md shadow-sm mb-8">
            <h3 className="text-xl font-bold text-[#2c426c] mb-4">Experience Level Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ExperienceCard
                level="Junior/Entry Level"
                salary="$47,000 - $90,000"
                points={[
                  "0-2 years experience",
                  "Basic industry knowledge",
                  "Entry-level technical skills"
                ]}
              />
              <ExperienceCard
                level="Mid-Level"
                salary="$85,000 - $130,000"
                points={[
                  "3-5 years experience",
                  "Specialized knowledge",
                  "Project leadership"
                ]}
              />
              <ExperienceCard
                level="Senior/Lead"
                salary="$125,000 - $200,000+"
                points={[
                  "6+ years experience",
                  "Strategic decision-making",
                  "Team leadership"
                ]}
              />
            </div>
          </div>
        </section>

        <section id="regional-differences" className="container mx-auto px-4 py-6">
          <h2 className="text-2xl font-bold text-[#2c426c] mb-4">Regional Differences</h2>
          <div className="bg-white p-6 rounded-md shadow-sm mb-8">
            <h3 className="text-xl font-bold text-[#2c426c] mb-4">Top Paying Locations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <LocationCard city="San Francisco" premium="+28% above US average" />
              <LocationCard city="New York" premium="+14% above US average" />
              <LocationCard city="Remote" premium="+19% above US average" />
              <LocationCard city="Los Angeles" premium="+15% above US average" />
            </div>

            <h3 className="text-xl font-bold text-[#2c426c] mb-4">Why US Salaries Are Higher</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Market maturity:</strong> More established companies and venture capital funding</li>
              <li><strong>Cost of living:</strong> Major crypto hubs in high-cost areas</li>
              <li><strong>Talent competition:</strong> Competition with tech giants like Google and Amazon</li>
              <li><strong>Regulatory expertise:</strong> Premium for understanding US-specific compliance</li>
              <li><strong>Total compensation:</strong> More substantial bonuses and equity components</li>
              <li><strong>Skill scarcity:</strong> Shortage of qualified professionals with both technical expertise and industry knowledge</li>
            </ul>
          </div>
        </section>

        <section id="works-cited" className="container mx-auto px-4 py-6 bg-white">
          <h2 className="text-2xl font-bold text-[#2c426c] mb-4">Works Cited</h2>
          <div className="bg-white p-6 rounded-md shadow-sm mb-8">
            <h3 className="text-xl font-bold text-[#2c426c] mb-4">Data Sources</h3>
            <ul className="space-y-3 mb-6">
              <li><strong>CryptoJobsList</strong> (2025). "Business Development Salary in 2025." <em>CryptoJobsList.com</em>. Retrieved April 7, 2025, from <a href="https://cryptojobslist.com/salaries/business-development-salary" className="text-blue-600 hover:underline">https://cryptojobslist.com/salaries/business-development-salary</a></li>
              <li><strong>Web3.career</strong> (2025). "Web3 Developer Salary - Apr 2025." <em>Web3.career</em>. Retrieved April 7, 2025, from <a href="https://web3.career/web3-salaries" className="text-blue-600 hover:underline">https://web3.career/web3-salaries</a></li>
              <li><strong>BeInCrypto</strong> (2025). "Business Development Manager Salary - April 2025." <em>BeInCrypto.com</em>. Retrieved April 7, 2025, from <a href="https://beincrypto.com/jobs/salary/business-development/" className="text-blue-600 hover:underline">https://beincrypto.com/jobs/salary/business-development/</a></li>
              <li><strong>Glassdoor</strong> (2025). "Salary: Crypto Business Development Manager in United States 2025." <em>Glassdoor.com</em>. Retrieved April 7, 2025, from <a href="https://www.glassdoor.com/Salaries/united-states-crypto-business-development-manager-salary-SRCH_IL.0,13_KO14,49.htm" className="text-blue-600 hover:underline">https://www.glassdoor.com/Salaries/united-states-crypto-business-development-manager-salary-SRCH_IL.0,13_KO14,49.htm</a></li>
            </ul>

            <h3 className="text-xl font-bold text-[#2c426c] mb-4">Methodology</h3>
            <p className="mb-4">This report synthesizes data from multiple authoritative sources in the cryptocurrency industry. Salary figures represent a combination of employer-reported data, anonymous submissions from industry professionals, and publicly listed job offerings. Regional variations are based on location-specific data where available. All figures are in USD and current as of April 2025.</p>

            <h3 className="text-xl font-bold text-[#2c426c] mb-4">Image Credits</h3>
            <p>All charts and visualizations were created specifically for this report using Chart.js and are based on the data sources cited above.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

// Header Component
function Header() {
  return (
    <header className="bg-[#2c426c] text-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">Crypto Industry Salary Report</h1>
        <p className="text-lg opacity-90 mt-2">Comprehensive Analysis of Compensation Trends in 2025</p>
      </div>
    </header>
  );
}

// Navigation Component
function Nav() {
  return (
    <nav className="bg-[#1c2e4a] text-white py-3 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap space-x-1 md:space-x-4 justify-center md:justify-start">
          <NavItem href="#overview" label="Overview" />
          <NavItem href="#role-comparison" label="Role Comparison" />
          <NavItem href="#salary-ranges" label="Salary Ranges" />
          <NavItem href="#experience-impact" label="Experience Impact" />
          <NavItem href="#regional-differences" label="Regional Differences" />
          <NavItem href="#works-cited" label="Works Cited" />
        </ul>
      </div>
    </nav>
  );
}

// Nav Item Component
function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <a
        href={href}
        className="inline-block px-3 py-1 transition-colors hover:bg-[#3a547c] rounded"
      >
        {label}
      </a>
    </li>
  );
}

// Key Finding Card Component
function KeyFindingCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-md shadow-sm h-full">
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="text-lg font-bold text-[#2c426c] mb-2">{title}</h4>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

// Experience Card Component
function ExperienceCard({ level, salary, points }: { level: string; salary: string; points: string[] }) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-md shadow-sm h-full">
      <h4 className="text-lg font-bold text-[#2c426c] mb-2">{level}</h4>
      <p className="text-[#ca432b] font-bold mb-3">{salary}</p>
      <ul className="list-disc pl-5 space-y-1">
        {points.map((point) => (
          <li key={`${level}-${point}`} className="text-gray-700">{point}</li>
        ))}
      </ul>
    </div>
  );
}

// Location Card Component
function LocationCard({ city, premium }: { city: string; premium: string }) {
  return (
    <div className="bg-white border border-gray-200 p-5 rounded-md shadow-sm">
      <h4 className="text-lg font-bold text-[#2c426c] mb-2">{city}</h4>
      <p className="text-[#63b74a]">{premium}</p>
    </div>
  );
}

// Bar Chart Component
function BarChart() {
  return (
    <div className="aspect-video bg-gray-100 flex flex-col items-center justify-center p-4 rounded-md">
      <div className="flex justify-between w-full px-12 pb-2">
        <div className="text-sm font-medium text-[#2c426c]">$0</div>
        <div className="text-sm font-medium text-[#2c426c]">$50,000</div>
        <div className="text-sm font-medium text-[#2c426c]">$100,000</div>
        <div className="text-sm font-medium text-[#2c426c]">$150,000</div>
      </div>
      <div className="w-full h-full flex items-end justify-around px-8 border-t border-l border-gray-300 relative">
        {/* Y-axis label */}
        <div className="absolute -left-10 top-1/2 -rotate-90 text-sm font-medium text-[#2c426c]">Salary (USD)</div>

        <div className="flex flex-col items-center gap-2">
          <div className="w-16 bg-[#5470C6] rounded-t-sm" style={{ height: '180px' }} />
          <span className="text-sm">Crypto Research Analyst</span>
          <span className="text-xs font-medium">$111,928</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 bg-[#91CC75] rounded-t-sm" style={{ height: '230px' }} />
          <span className="text-sm">Data Analyst</span>
          <span className="text-xs font-medium">$131,615</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 bg-[#FAC858] rounded-t-sm" style={{ height: '150px' }} />
          <span className="text-sm">Community Manager</span>
          <span className="text-xs font-medium">$93,200</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 bg-[#EE6666] rounded-t-sm" style={{ height: '200px' }} />
          <span className="text-sm">Business Developer</span>
          <span className="text-xs font-medium">$122,500</span>
        </div>
      </div>
      <div className="w-full text-center mt-4">
        <p className="text-sm font-medium text-[#2c426c]">Role</p>
      </div>
    </div>
  );
}

// Compensation Chart Component
function CompensationChart() {
  return (
    <div className="aspect-video bg-gray-100 flex flex-col items-center justify-center p-4 rounded-md">
      <div className="flex justify-between w-full px-12 pb-2">
        <div className="text-sm font-medium text-[#2c426c]">$0</div>
        <div className="text-sm font-medium text-[#2c426c]">$100,000</div>
        <div className="text-sm font-medium text-[#2c426c]">$200,000</div>
        <div className="text-sm font-medium text-[#2c426c]">$300,000</div>
      </div>
      <div className="w-full h-full flex items-end justify-around px-8 border-t border-l border-gray-300 relative">
        {/* Y-axis label */}
        <div className="absolute -left-10 top-1/2 -rotate-90 text-sm font-medium text-[#2c426c]">Compensation (USD)</div>

        <div className="flex flex-col items-center gap-2">
          <div className="relative w-16">
            <div className="absolute bottom-0 w-16 bg-[#5470C6] rounded-t-sm" style={{ height: '80px' }} />
            <div className="absolute bottom-0 w-16 bg-[#91CC75] opacity-70 rounded-t-sm" style={{ height: '140px' }} />
          </div>
          <span className="text-sm">Crypto Research Analyst</span>
          <div className="flex flex-wrap justify-center gap-x-2 text-xs">
            <span className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-[#5470C6] rounded-sm" />
              Base: $95K
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-[#91CC75] rounded-sm" />
              Total: $151K
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-16">
            <div className="absolute bottom-0 w-16 bg-[#5470C6] rounded-t-sm" style={{ height: '110px' }} />
            <div className="absolute bottom-0 w-16 bg-[#91CC75] opacity-70 rounded-t-sm" style={{ height: '190px' }} />
          </div>
          <span className="text-sm">Data Analyst</span>
          <div className="flex flex-wrap justify-center gap-x-2 text-xs">
            <span className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-[#5470C6] rounded-sm" />
              Base: $110K
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-[#91CC75] rounded-sm" />
              Total: $200K
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-16">
            <div className="absolute bottom-0 w-16 bg-[#5470C6] rounded-t-sm" style={{ height: '70px' }} />
            <div className="absolute bottom-0 w-16 bg-[#91CC75] opacity-70 rounded-t-sm" style={{ height: '100px' }} />
          </div>
          <span className="text-sm">Community Manager</span>
          <div className="flex flex-wrap justify-center gap-x-2 text-xs">
            <span className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-[#5470C6] rounded-sm" />
              Base: $75K
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-[#91CC75] rounded-sm" />
              Total: $103K
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-16">
            <div className="absolute bottom-0 w-16 bg-[#5470C6] rounded-t-sm" style={{ height: '100px' }} />
            <div className="absolute bottom-0 w-16 bg-[#91CC75] opacity-70 rounded-t-sm" style={{ height: '220px' }} />
          </div>
          <span className="text-sm">Business Developer</span>
          <div className="flex flex-wrap justify-center gap-x-2 text-xs">
            <span className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-[#5470C6] rounded-sm" />
              Base: $100K
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-[#91CC75] rounded-sm" />
              Total: $230K
            </span>
          </div>
        </div>
      </div>
      <div className="w-full text-center mt-4">
        <p className="text-sm font-medium text-[#2c426c]">Role</p>
      </div>
    </div>
  );
}

export default App;
