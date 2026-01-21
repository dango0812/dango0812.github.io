import Link from 'next/link';
import { Typography } from '@/components/base';

export default function HeaderLogo() {
  return (
    <Link href="/">
      <Typography
        as="span"
        align="center"
        weight={700}
        className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        김동규
      </Typography>
    </Link>
  );
}
