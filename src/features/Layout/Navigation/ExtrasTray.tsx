import { useRef } from 'react';

import { Box } from '@components';
import { useClickAway } from '@vendor';

import { LinkSet } from './components';

export const ExtrasTray = ({ isMobile, closeTray }: { isMobile: boolean; closeTray(): void }) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => !isMobile && closeTray());

  return (
    <Box
      zIndex={998}
      display="flex"
      flexDirection="column"
      backgroundColor="BG_GRAY"
      borderRadius="default"
      position={{ _: 'absolute', sm: 'fixed' }}
      width={{ _: '100vw', sm: '375px' }}
      top={{ _: 0, sm: 'unset' }}
      bottom={{ sm: 0 }}
      left={{ _: 0, sm: '6.8vh', xxl: '67px' }}
      height={{ sm: 'auto' }}
      boxShadow={{ sm: '3px 3px 20px rgba(0, 0, 0, 0.15);' }}
      ref={ref}
    >
      <LinkSet />
    </Box>
  );
};
