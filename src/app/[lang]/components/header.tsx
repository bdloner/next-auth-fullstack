import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/src/lib/dictionary'
import LocaleSwitcher from './locale-switcher'
import SigninButton from "./SigninButton"

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header className='py-6'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-x-8'>
          <li>
            <Link href={`/${lang}`}>{navigation.home}</Link>
          </li>
          <li>
            <Link href={`/${lang}/about`}>{navigation.about}</Link>
          </li>
          <li>
          <Link className="transition-colors hover:text-blue-500" href={"/"}>
            Home Page
          </Link>
          </li>
          <li>
            <Link className="transition-colors hover:text-blue-500" href={"/UserPost"}>
              User Post Page
            </Link>
          </li>
          <li>
            <SigninButton />
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  )
}
