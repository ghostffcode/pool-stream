import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import classNames from "classnames"
import Link from "next/link"

const Nav = () => {
  return (
    <nav className='flex flex-1 justify-between items-center my-2'>
      <div><Link href="/">Pool Stream</Link></div>
      <div className="flex flex-row">
        <NavigationMenu className="mr-4">
          <NavigationMenuList>
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Link href="/my-streams" legacyBehavior passHref>
                <NavigationMenuLink className={classNames(navigationMenuTriggerStyle(), "text-base")}>
                  My Pool Streams
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ConnectButton />
      </div>
    </nav>
  )
}

export default Nav
