import React from 'react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('meta');

  return (
    <footer className="w-gray h-60 bg-black flex text-white flex items-center	">
      <div className="main-content">
        <div className="flex items-center">
          {/* <img className="w-20 h-20 mr-4" src="/images/logo.png" /> */}
          <section className="flex flex-col	h-full">
            <span className="text-lg">{t('sub-title')}</span>
            <span className="text-gray-200 text-sm mt-4">
              Copyright © {`${new Date().getFullYear()} `} NFT4Metaverse Inc. All rights reserved.
            </span>
          </section>
        </div>
      </div>
    </footer>
  );
}
