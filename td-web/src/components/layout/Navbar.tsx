'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { classNames } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const services = [
  { name: 'Web Design', href: '/services#web-design', category: 'web' },
  { name: 'E-commerce', href: '/services#ecommerce', category: 'web' },
  { name: 'SEO', href: '/services#seo', category: 'web' },
  { name: 'Logo Design', href: '/services#logo-design', category: 'design' },
  { name: 'Branding', href: '/services#branding', category: 'design' },
  { name: 'CIPC Registration', href: '/services#cipc', category: 'compliance' },
  { name: 'B-BBEE Certificates', href: '/services#bbbee', category: 'compliance' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={classNames(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">TD</span>
            </div>
            <span className={`font-bold text-xl ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Thabo Digital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  'font-medium transition-colors',
                  isActive(item.href)
                    ? 'text-accent-500'
                    : isScrolled
                    ? 'text-slate-700 hover:text-primary-500'
                    : 'text-white hover:text-accent-300'
                )}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={classNames(
                  'font-medium transition-colors flex items-center space-x-1',
                  pathname.startsWith('/services')
                    ? 'text-accent-500'
                    : isScrolled
                    ? 'text-slate-700 hover:text-primary-500'
                    : 'text-white hover:text-accent-300'
                )}
              >
                <span>Services</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4">
                  <div className="mb-3">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Web & Digital</h3>
                    {services.filter(s => s.category === 'web').map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-3 py-2 text-sm text-slate-700 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  <div className="mb-3">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Design & Branding</h3>
                    {services.filter(s => s.category === 'design').map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-3 py-2 text-sm text-slate-700 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Business Compliance</h3>
                    {services.filter(s => s.category === 'compliance').map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-3 py-2 text-sm text-slate-700 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                href="/contact"
                className="btn-primary text-sm"
              >
                Get Quote
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={classNames(
                'p-2 rounded-md transition-colors',
                isScrolled ? 'text-slate-700 hover:text-primary-500' : 'text-white hover:text-accent-300'
              )}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                    isActive(item.href)
                      ? 'text-accent-500 bg-accent-50'
                      : 'text-slate-700 hover:bg-gray-50'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <Link
                  href="/contact"
                  className="block w-full text-center btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
