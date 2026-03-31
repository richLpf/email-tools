/**
 * 工具白名单（仅展示以下类别）。
 * category 取值：deliverability | design | warmup | blacklist | dns
 * pricing 取值：free | paid | freemium
 */
export const tools = [
  {
    id: 'mail-tester',
    name: 'Mail-Tester',
    category: 'deliverability',
    descriptionKey: 'tools.mailtester.desc',
    link: 'https://www.mail-tester.com',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    pricing: 'freemium',
    usageInstructionsKey: 'tools.mailtester.usage',
  },
  {
    id: 'stripo',
    name: 'Stripo',
    category: 'design',
    descriptionKey: 'tools.stripo.desc',
    link: 'https://stripo.email',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
    pricing: 'freemium',
    usageInstructionsKey: 'tools.stripo.usage',
  },
  {
    id: 'lemwarm',
    name: 'Lemwarm',
    category: 'warmup',
    descriptionKey: 'tools.lemwarm.desc',
    link: 'https://www.lemlist.com/warm-up',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    pricing: 'paid',
    usageInstructionsKey: 'tools.lemwarm.usage',
  },
  {
    id: 'mxtoolbox-blacklist',
    name: 'MXToolbox Blacklist Check',
    category: 'blacklist',
    descriptionKey: 'tools.mxtoolboxBlacklist.desc',
    link: 'https://mxtoolbox.com/blacklists.aspx',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    pricing: 'free',
    usageInstructionsKey: 'tools.mxtoolboxBlacklist.usage',
  },
  {
    id: 'dnschecker',
    name: 'DNSChecker',
    category: 'dns',
    descriptionKey: 'tools.dnschecker.desc',
    link: 'https://dnschecker.org/all-dns-records-of-domain.php',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    pricing: 'free',
    usageInstructionsKey: 'tools.dnschecker.usage',
  },
];
