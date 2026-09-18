export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  url: string;
  isExternal?: boolean;
}

export interface CVDownload {
  label: string;
  filename: string;
  url: string;
}

export interface CompetencySpec {
  category: string;
  items: string[];
}
