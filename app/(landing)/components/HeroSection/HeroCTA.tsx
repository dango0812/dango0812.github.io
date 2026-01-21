'use client';

import { m } from 'motion/react';
import { Download, Code } from 'lucide-react';
import { Button, RowFlex } from '@/components/base';
import { fadeInUp } from '@/constants/animations';
import { DOMAINS } from '@/constants/routes';
import { For } from '@/components/common';

/** 외부 링크 열기 */
const openExternalLink = (url: string) => () => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const BUTTON_CONFIG = [
  {
    label: '이력서 다운로드',
    icon: <Download size={20} />,
    url: DOMAINS.DOWNLOAD_RESUME,
    variant: 'primary',
    color: 'blue',
    size: 'sm',
  },
  {
    label: 'GitHub 프로필',
    icon: <Code size={20} />,
    url: DOMAINS.GITHUB,
    variant: 'outline',
    color: 'gray',
    size: 'sm',
  },
] as const;

export default function HeroCTA() {
  return (
    <m.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.3}>
      <RowFlex justify="center" className="gap-4 mt-4">
        <For each={BUTTON_CONFIG}>
          {({ label, icon, url, variant, color, size }) => (
            <Button key={label} variant={variant} color={color} size={size} onClick={openExternalLink(url)}>
              {label}
              {icon}
            </Button>
          )}
        </For>
      </RowFlex>
    </m.div>
  );
}
