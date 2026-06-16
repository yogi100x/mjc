// Real content sourced from mjcglobaltech.com

export const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4'

export const SCRUB_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4'

const BANNERS = 'https://mjcglobaltech.com/assets/images/banners'
export const banners = {
  ai: `${BANNERS}/ai.jpg`,
  staffing: `${BANNERS}/staffing.jpg`,
  cloud: `${BANNERS}/MJC_B1.jpg`,
  data: `${BANNERS}/mjc-b6.jpg`,
}

export const navLinks = [
  { label: 'The Model', href: '#model' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Industries', href: '#industries' },
  { label: 'Global Reach', href: '#global' },
]

export const stats = [
  { to: 15, suffix: '+', label: 'Years in enterprise delivery' },
  { to: 350, suffix: '+', label: 'Software implementations' },
  { to: 324, suffix: '+', label: 'Clients served' },
  { to: 100, suffix: '+', label: 'Technology professionals' },
]

export const pillars = [
  {
    kicker: 'Pillar 01',
    title: 'AI & Advanced Analytics',
    body: "AI is the strategy, not a side project. Predictive analytics, intelligent compliance, and agent-led automation — built to run the business, not just demo well.",
    points: [
      'Predictive analytics and executive decision dashboards',
      'Intelligent compliance and risk monitoring',
      'AI / ML / IoT solutions engineered for production',
      'From pilot to production, owned end to end',
    ],
    image: banners.ai,
  },
  {
    kicker: 'Pillar 02',
    title: 'GCC Enablement',
    body: "A Global Capability Center isn't a cost center anymore. Run right, it's where the real AI and engineering work happens.",
    points: [
      'Location strategy, cost modeling, operating-model design',
      'Governance frameworks, SLAs, and live KPI dashboards',
      'Agile and DevOps embedded in delivery, not added later',
      'ISO-certified processes, security and compliance built in',
    ],
    image: banners.cloud,
  },
  {
    kicker: 'Pillar 03',
    title: 'Talent & Staffing',
    body: 'The hardest part of any AI program is people. We design the team structure first, then staff it with specialists who can ship.',
    points: [
      "Dedicated project squads for work that can't slip",
      'Hybrid onsite–offshore pods, ramped in 30 to 45 days',
      'Five layers deep, from support to architecture leads',
      'Knowledge continuity that stays when contracts end',
    ],
    image: banners.staffing,
  },
]

export const capabilities = [
  { ix: '01', title: 'ERP Consulting', body: 'SAP, Oracle Fusion, Yardi, and Dynamics — modernized for cloud and intelligence.' },
  { ix: '02', title: 'Information Security', body: 'GRC, identity, and cyber risk management across the whole stack.' },
  { ix: '03', title: 'Cloud Engineering', body: 'Azure, AWS, and Google Cloud, architected to scale.' },
  { ix: '04', title: 'Data Engineering', body: 'Pipelines and platforms that make enterprise AI trustworthy and fast.' },
  { ix: '05', title: 'AI / ML & IoT', body: 'Production AI — predictive, agentic, and connected to live data.' },
  { ix: '06', title: 'Managed Services', body: 'Technical support and managed operations that keep systems running.' },
]

export const industries = [
  'Pharmaceutical & Life Sciences',
  'Healthcare',
  'Biotech',
  'Retail',
  'Manufacturing & Distribution',
  'Banking',
  'Construction & Engineering',
  'Real Estate',
  'Telecommunication',
  'Information & Technology',
]

const TECH = 'https://mjcglobaltech.com/assets/images/tech'
const EXPERT = 'https://mjcglobaltech.com/assets/images/expert'
export const logos = [
  { name: 'Microsoft Azure', src: `${TECH}/Microsoft_Azure_Logo.svg.png` },
  { name: 'Oracle', src: `${TECH}/oracle.png` },
  { name: 'Google Cloud', src: `${TECH}/google-cloud-platform.png` },
  { name: 'Dynamics 365', src: `${EXPERT}/msd365.png` },
  { name: 'Yardi', src: `${EXPERT}/Yardi.png` },
  { name: 'Angular', src: `${TECH}/Angular_full_color_logo.svg.png` },
  { name: 'React', src: `${TECH}/Node.js_logo_2015.svg.png` },
  { name: 'Python', src: `${TECH}/python-logo-master-v3-TM-flattened.png` },
  { name: 'Java', src: `${TECH}/Java-Logo.png` },
  { name: '.NET', src: `${TECH}/dotnet-ar21.png` },
  { name: 'MySQL', src: `${TECH}/MySQL-Logo.png` },
  { name: 'Cisco', src: `${TECH}/800px-Cisco_logo_blue_2016.svg.png` },
]

export const lifecycle = [
  { num: '01', tag: 'Design', title: 'Decide where and how', body: 'Location strategy, total-cost modeling, and an operating model mapped to your objectives.' },
  { num: '02', tag: 'Establish', title: 'Stand it up', body: 'Teams, infrastructure, governance, SOPs, and SLAs — the backbone that makes delivery repeatable.' },
  { num: '03', tag: 'Scale', title: 'Grow on demand', body: 'Add capability and headcount as the work grows, with pods that ramp in 30 to 45 days.' },
  { num: '04', tag: 'Optimize', title: 'Keep sharpening', body: 'Continuous improvement on cost, performance, and quality, measured against real KPIs.' },
]

export const differences = [
  { di: 'i.', title: 'Real-time, not eventually', body: "Agile delivery that holds up under load, so scaling doesn't mean starting over." },
  { di: 'ii.', title: 'Fewer surprises', body: 'Visibility and compliance built in, so the risky parts stay under control.' },
  { di: 'iii.', title: 'Deeper insight', body: 'Solutions that connect to your existing systems and surface live, usable data.' },
  { di: 'iv.', title: 'Reporting that keeps up', body: 'Accurate financial and operational reporting without the month-end scramble.' },
  { di: 'v.', title: 'Flexible by design', body: 'Add capability as goals shift — no rip-and-replace, no lock-in tax.' },
  { di: 'vi.', title: 'One accountable team', body: 'Strategy, build, talent, and run — owned end to end, not handed off.' },
]
