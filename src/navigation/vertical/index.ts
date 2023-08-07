// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'mdi:home-outline',
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'mdi:shield-outline',
    },
    {
      title: 'Home',
      action:'read',
      path: '/employee-home',
      subject: 'employee-home-page',
      icon: 'mdi:home-outline',
    },
    {
      path: '/qr-scanner',
      action: 'read',
      subject: 'qr-scanner-page',
      title: 'QR Scanner',
      icon: 'mdi:qrcode', 
    },
    {
      title: 'Workhours & salaries',
      icon: 'mdi:clock',
      path: '/chartjs',
    },
    {
      title: 'Users',
      icon: 'mdi:account-outline',
      path: '/apps/user/list'
    },
        
  ]
}

export default navigation
