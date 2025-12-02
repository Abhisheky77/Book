import { UserIcon, SettingsIcon, BellIcon, LogOutIcon, CreditCardIcon, CircleUserRound, UserCog, User, MoreHorizontalIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

const listItems = [
  {
    icon: UserIcon,
    property: 'Profile'
  },
  {
    icon: SettingsIcon,
    property: 'Settings'
  },
  {
    icon: CreditCardIcon,
    property: 'Billing'
  },
  {
    icon: BellIcon,
    property: 'Notifications'
  },
  {
    icon: LogOutIcon,
    property: 'Sign Out'
  }
]

const DropdownMenuUserMenuDemo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
           <Button variant="secondary" size="icon" className="overflow-hidden rounded-full">
          <MoreHorizontalIcon   className="h-30 w-30" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          {listItems.map((item, index) => (
            <DropdownMenuItem key={index}>
              <item.icon />
              <span className='text-popover-foreground'>{item.property}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuUserMenuDemo
