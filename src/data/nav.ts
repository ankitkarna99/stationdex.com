type HeaderLink = {
  [key: string]: {
    title: string,
    path: string
  
  }
}

const headerLinks: HeaderLink = {
  about: {
    title: 'About Us',
    path: '/about-us'
  },
  bugBounty: {
    title: 'Documents',
    path: '/documents'
  },
  contact: {
    title: 'Contact Us',
    path: '/contact-us'
  },
  tradeNow: {
    title: 'Trade Now',
    path: '/trade-now'
  }
}

export { headerLinks }