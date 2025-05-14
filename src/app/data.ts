import {
  IAdmin,
  NetOpeningPosition,
  SettingItemI,
  sidebarLinksI,
} from './models/interface';

export const sidebarLinks: sidebarLinksI[] = [
  {
    section: '',
    items: [{ label: 'Dashboards', icon: 'dashboard', path: '/dashboard' }],
  },
  {
    section: 'Set Up',
    items: [
      { label: 'Admin', icon: 'admin', path: '/admin' },
      { label: 'Static Data', icon: 'static-data', path: '/staticdata' },
    ],
  },
  {
    section: 'Configuration',
    items: [
      { label: 'Product', icon: 'product', path: '/product' },
      {
        label: 'General Service',
        icon: 'general-service',
        path: '/generalservice',
      },
      { label: 'Workflow', icon: 'workflow', path: '/workflow' },
    ],
  },
  {
    section: 'Process',
    items: [
      { label: 'Deals', icon: 'deals', path: '/deals' },
      {
        label: 'Market Risk',
        icon: 'market-risk',
        path: '/marketrisk',
      },
      {
        label: 'Auxiliary Service',
        icon: 'auxiliary-service',
        path: '/auxiliaryservice',
      },
      { label: 'Messages', icon: 'messages', path: '/messages' },
      { label: 'Utilities', icon: 'utilities', path: '/utilities' },
    ],
  },
  {
    section: 'Insight',
    items: [
      { label: 'Report', icon: 'report', path: '/report' },
      { label: 'Analytics', icon: 'analytics', path: '/analytics' },
    ],
  },
];

export const netOpeningPositions: NetOpeningPosition[] = [
  {
    label: '',
    date: '',
    NGN: 11416152.76,
    USD: 11416152.76,
    EURO: -1200.0,
    GBP: 0.0,
  },
  {
    label: 'Cash',
    date: '30/Jan/2021',
    NGN: 11416152.76,
    USD: 11416152.76,
    EURO: -1200.0,
    GBP: 0.0,
  },
  {
    label: 'TOM',
    date: '30/Jan/2021',
    NGN: 195394.56,
    USD: 195394.56,
    EURO: -2520161.94,
    GBP: 2946081.05,
  },
  {
    label: 'SPOT',
    date: '30/Jan/2021',
    NGN: 0.0,
    USD: 0.0,
    EURO: 0.0,
    GBP: 0.0,
  },
  {
    label: '1D',
    date: '30/Jan/2021',
    NGN: 0.0,
    USD: 0.0,
    EURO: 0.0,
    GBP: 0.0,
  },
  {
    label: '1W',
    date: '30/Jan/2021',
    NGN: 0.0,
    USD: 0.0,
    EURO: 0.0,
    GBP: 0.0,
  },
  {
    label: '1M',
    date: '30/Jan/2021',
    NGN: 0.0,
    USD: 0.0,
    EURO: 0.0,
    GBP: 0.0,
  },
  {
    label: '2M',
    date: '30/Jan/2021',
    NGN: 3195394.56,
    USD: 3195394.56,
    EURO: 0.0,
    GBP: -4195394.56,
  },
  {
    label: '3M',
    date: '30/Jan/2021',
    NGN: -189416152.76,
    USD: -189416152.76,
    EURO: -189416152.76,
    GBP: 0.0,
  },
  {
    label: '6M',
    date: '30/Jan/2021',
    NGN: 150416152.76,
    USD: 150416152.76,
    EURO: 150416152.76,
    GBP: 0.0,
  },
  {
    label: '9M',
    date: '30/Jan/2021',
    NGN: 76416152.76,
    USD: 76416152.76,
    EURO: 76416152.76,
    GBP: 0.0,
  },
  {
    label: '1Y',
    date: '30/Jan/2021',
    NGN: -120416152.76,
    USD: -120416152.76,
    EURO: -120416152.76,
    GBP: 0.0,
  },
  {
    label: '2Y',
    date: '30/Jan/2021',
    NGN: 200416152.76,
    USD: 200416152.76,
    EURO: 200416152.76,
    GBP: 0.0,
  },
];

export const adminData: IAdmin[] = [
  {
    title: 'Users',
    description: 'Create users',
    icon: 'user-icon',
    path: '/users',
  },
  {
    title: 'Applications',
    description: 'Integrated Applications',
    icon: 'folder-icon',
    path: '/applications',
  },
  {
    title: 'Authorities',
    description: 'Define function of roles',
    icon: 'gavel-icon',
    path: '/authorities',
  },
  {
    title: 'Policies',
    description: 'Define user log in nomenclature',
    icon: 'document-icon',
    path: '/policies',
  },
  {
    title: 'System Roles',
    description: 'Set-up your various divisions & enhance reporting',
    icon: 'hierarchy-icon',
    path: '/system-roles',
  },
  {
    title: 'Logger Levels',
    description: 'View and enable transaction log',
    icon: 'log-icon',
    path: '/logger-levels',
  },
  {
    title: 'Audit Trail',
    description: 'Countries Information',
    icon: 'book-icon',
    path: '/audit-trail',
  },
];

export const staticdata: SettingItemI[] = [
  {
    title: 'Account',
    icon: 'user-circle',
    description:
      'Create a new account for retail & corporate customers or treasury',
  },
  {
    title: 'Account Type',
    icon: 'file-text',
    description: 'Create & categorize all account ledgers',
  },
  {
    title: 'BIC',
    icon: 'barcode',
    description:
      'Create the unique business identifier code for your counterparties',
  },
  {
    title: 'Broker',
    icon: 'briefcase',
    description: 'Create & facilitate your intermediary deals',
  },
  {
    title: 'Business Unit',
    icon: 'layers',
    description: 'Set-up your various divisions & enhance reporting',
  },
  {
    title: 'Calendars',
    icon: 'calendar',
    description: 'Activate your business working days',
  },
  {
    title: 'Calendar Holiday',
    icon: 'calendar-x',
    description: 'Countries information',
  },
  {
    title: 'Chart Account',
    icon: 'book',
    description: "Upload your company's general ledgers",
  },
  {
    title: 'Countries',
    icon: 'globe',
    description: 'Set up the different territories your company transact with.',
  },
  {
    title: 'Config Parameters',
    icon: 'sliders',
    description: 'Parameters to add configurations to your system',
  },
  {
    title: 'Currency',
    icon: 'currency-dollar',
    description: 'Countries Information',
  },
  {
    title: 'Currency Count Basis',
    icon: 'hash',
    description: 'Countries Information',
  },
  {
    title: 'Currency Positions',
    icon: 'shuffle',
    description: 'Set-up all tradable currencies that requires position',
  },
  {
    title: 'Currency Pairs',
    icon: 'repeat',
    description: 'Create and quote one currency against another',
  },
  {
    title: 'Currency Position Account',
    icon: 'layout',
    description: 'Align the currencies to different general ledgers',
  },
  {
    title: 'Currency Position Account Bal.',
    icon: 'bar-chart',
    description: "View the company's net exposure on all currencies",
  },
  {
    title: 'Legal Entity Type',
    icon: 'id-badge',
    description: 'Identify and categorize the different types of counterparty',
  },
  {
    title: 'Legal Entity',
    icon: 'building',
    description: 'Countries Information',
  },
  {
    title: 'Settlement Account',
    icon: 'clipboard-check',
    description: 'Countries Information',
  },
  {
    title: 'Trading Books',
    icon: 'book-open',
    description:
      'Create and maintain a collection of accounting books for all your financial assets',
  },
  {
    title: 'Mock Customer',
    icon: 'user',
    description: 'Identify and categorize the different types of counterparty',
  },
  {
    title: 'Mock Account',
    icon: 'users',
    description: 'Identify and categorize the different types of counterparty',
  },
  {
    title: 'Beneficiary',
    icon: 'heart',
    description: 'Create and maintain a collection of beneficiaries',
  },
];
