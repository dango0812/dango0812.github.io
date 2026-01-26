'use client';

import { Code, Download } from 'lucide-react';

import { Button, RowFlex } from '@/components/base';
import { GITHUB_URL, RESUME_URL } from '@/constants/routes';

/** 외부 링크 열기 */
const openExternalLink = (url: string) => () => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const BUTTON_CONFIG = [
  {
    label: '이력서 다운로드',
    icon: <Download size={20} />,
    url: RESUME_URL,
    variant: 'primary',
    color: 'blue',
    size: 'sm',
  },
  {
    label: 'GitHub 프로필',
    icon: <Code size={20} />,
    url: GITHUB_URL,
    variant: 'outline',
    color: 'gray',
    size: 'sm',
  },
] as const;

export default function HeroCTA() {
  return (
    <RowFlex justify="center" className="gap-4 mt-4">
      {BUTTON_CONFIG.map(({ label, icon, url, variant, color, size }) => (
        <Button key={label} variant={variant} color={color} size={size} onClick={openExternalLink(url)}>
          {label}
          {icon}
        </Button>
      ))}
    </RowFlex>
  );
}
