import Link from 'next/link';

import { RowFlex } from '@/components/base';
import type { NavItem } from '@/constants/navigation';
import { HEADER_NAV_CONFIG } from '@/constants/navigation';

export default function HeaderNavList() {
  return (
    <RowFlex align="center" className="gap-6">
      {HEADER_NAV_CONFIG.map(({ label, href }) => (
        <NavItem key={label} label={label} href={href} />
      ))}
    </RowFlex>
  );
}

function NavItem({ label, href }: NavItem) {
  return (
    <Link href={href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200">
      {label}
    </Link>
  );
}
