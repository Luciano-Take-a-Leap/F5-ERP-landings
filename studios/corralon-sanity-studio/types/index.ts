
export interface NavigationLink {
  key: {
    current: string
  }
  label: string
  href: string
  isButton?: boolean
}

export interface CountdownBanner {
  enabled: boolean
  limitDate?: string
  mainText?: string
  ctaButtonText?: string
}

export interface Accessibility {
  logoAlt: string
  homeAriaLabel: string
  mobileMenuLabel: string
}

export interface HeaderConfig {
  _id: string
  _type: 'header'
  title: string
  navigation: NavigationLink[]
  countdownBanner: CountdownBanner
  accessibility: Accessibility
}