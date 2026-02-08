'use client';

import { Github, Rss, Send } from 'lucide-react';

import { Button, RowFlex } from '@/components/base';
import { BLOG_URL, GITHUB_URL, MAIL_TO } from '@/constants/routes';

/** 외부 링크 열기 */
const openExternalLink = (url: string) => () => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const BUTTON_CONFIG = [
  /*
  {
    label: '이력서 다운로드',
    icon: <Download size={20} />,
    url: RESUME_URL,
    variant: 'primary',
    color: 'blue',
    size: 'sm',
  },
  */
  {
    label: 'Github 프로필',
    icon: <Github size={20} />,
    url: GITHUB_URL,
    variant: 'primary',
    color: 'black',
    size: 'sm',
  },
  {
    label: '블로그',
    icon: <Rss size={20} />,
    url: BLOG_URL,
    variant: 'outline',
    color: 'gray',
    size: 'sm',
  },
  {
    label: '메일 전송',
    icon: <Send size={20} />,
    url: MAIL_TO,
    variant: 'outline',
    color: 'gray',
    size: 'sm',
  },
] as const;

export default function HeroCTA() {
  return (
    <RowFlex justify="center" className="gap-4 mt-4">
      {BUTTON_CONFIG.map(({ label, icon, url, variant, color, size }) => (
        <Button
          key={label}
          variant={variant}
          color={color}
          size={size}
          onClick={openExternalLink(url)}
          className="rounded-full"
        >
          {label}
          {icon}
        </Button>
      ))}
    </RowFlex>
  );
}
