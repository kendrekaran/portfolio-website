'use client';

import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import type { Activity } from 'react-github-calendar';
import SectionHeading from './section-heading';

const GitHubCalendar = dynamic(() => import('react-github-calendar'), {
  ssr: false,
  loading: () => <div className="h-[159px] w-full" />,
});

function GithubCalender() {
  const [totalCount, setTotalCount] = useState(0);

  const processContributions = useCallback((contributions: Activity[]) => {
    setTimeout(() => {
      const total = contributions
        .map((el) => el.count)
        .reduce((acc, curr) => acc + curr, 0);

      setTotalCount(total);
    }, 0);

    return contributions.slice(91, 365);
  }, []);

  return (
    <div className="pb-16">
      <SectionHeading 
        title="GitHub" 
        subtitle="My contributions and activity on GitHub." 
      />
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="overflow-x-auto"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <GitHubCalendar
            username="kendrekaran"
            transformData={processContributions}
            totalCount={totalCount}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default GithubCalender;
