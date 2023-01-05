import classNames from 'classnames';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import BLOG from '~/blog.config';
import { fetchLocaleLang } from '~/lib/i18n/lang';
import { Twemoji } from './Twemoji';

const locale = fetchLocaleLang();
const links = [
  { id: 1, name: locale.NAV.INDEX, to: BLOG.path || '/', show: true },
  { id: 2, name: locale.NAV.PROJECT, to: '/projects', show: true },
  { id: 3, name: locale.NAV.ABOUT, to: '/about', show: BLOG.showAbout },
  // { id: 4, name: locale.NAV.RSS, to: '/feed', show: true },
];

const NavBar: React.VFC = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const activeNav = useMemo(() => {
    if (router.asPath === links[0].to) return links[0].to;
    if (router.pathname === links[1].to || router.asPath.includes('projects')) return links[1].to;
    if (router.asPath === links[2].to) return links[2].to;
    return links[0].to;
  }, [router]);

  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row gap-x-4 items-center">
        {links.map(
          (link) =>
            link.show && (
              <li
                key={link.id}
                className={classNames('block text-black dark:text-gray-50 nav', {
                  'border-b-2 border-yellow-light dark:border-yellow': link.to === activeNav,
                })}
              >
                <Link href={link.to}>
                  <a>{link.name}</a>
                </Link>
              </li>
            ),
        )}
        <li className="ml-2">
          <button
            className="block p-1 bg-night dark:bg-day rounded-full transition-all duration-300"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="toggle Dark Mode"
          >
            {/* {theme === 'light' ? <MoonIcon className="w-5 h-5 text-day" /> : <SunIcon className="w-5 h-5 text-night" />} */}
            {theme === 'light' ? (
              <span className="flex items-center">
                <Twemoji emoji={'🌛'} size={25} />
              </span>
            ) : (
              <span className="flex items-center">
                <Twemoji emoji={'🌞'} size={25} />
              </span>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

type HeaderProps = {
  navBarTitle: string | null;
  fullWidth?: boolean;
};

export const Header: React.VFC<HeaderProps> = ({ navBarTitle, fullWidth }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const sentinalRef = useRef<HTMLDivElement>(null);
  const handler = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (navRef && navRef.current && !BLOG.autoCollapsedNavBar) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current.classList.add('sticky-nav-full');
      } else {
        navRef.current.classList.remove('sticky-nav-full');
      }
    } else {
      navRef?.current?.classList.add('remove-sticky');
    }
  }, []);
  useEffect(() => {
    const obvserver = new window.IntersectionObserver(handler);
    if (sentinalRef?.current) obvserver.observe(sentinalRef.current);
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current);
    // };
  }, [sentinalRef, handler]);
  return (
    <>
      <div className="h-4 md:h-12" ref={sentinalRef}></div>
      <div
        className={classNames(
          'sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60',
          {
            'px-4 md:px-24': fullWidth,
            'max-w-2xl px-4': !fullWidth,
          },
        )}
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex items-center">
          <Link href="/">
            <a aria-label={BLOG.title} className="flex gap-x-4 items-center">
              <div className="min-w-max">
                <Twemoji emoji={'🏠'} size={28} />
              </div>
              <span className="font-medium text-day dark:text-night header-name">{navBarTitle}</span>
            </a>
          </Link>
        </div>
        <NavBar />
      </div>
    </>
  );
};
