'use client';

import dynamic from 'next/dynamic';
import { useCallback, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Activity } from 'react-github-calendar';
import SectionHeading from './section-heading';

const GitHubCalendar = dynamic(() => import('react-github-calendar'), {
  ssr: false,
  loading: () => <div className="h-[159px] w-full" />,
});

function GithubCalender() {
  const [totalCount, setTotalCount] = useState(0);
  const [todayHours, setTodayHours] = useState<string>("--");

  const processContributions = useCallback((contributions: Activity[]) => {
    setTimeout(() => {
      const total = contributions
        .map((el) => el.count)
        .reduce((acc, curr) => acc + curr, 0);

      setTotalCount(total);
    }, 0);

    return contributions.slice(91, 365);
  }, []);

  useEffect(() => {
    fetch("/api/coding-time")
      .then((res) => res.json())
      .then((data) => {
        if (data.hours) {
          setTodayHours(data.hours);
        } else {
          setTodayHours("0");
        }
      })
      .catch((error) => {
        console.error("Failed to fetch coding time:", error);
        setTodayHours("0");
      });
  }, []);

  return (
    <div className="py-12">
      <SectionHeading 
        title="GitHub" 
        subtitle={`${todayHours} hours coded today`} 
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
          <div className="relative">
            <GitHubCalendar
              username="kendrekaran"
              transformData={processContributions}
              totalCount={totalCount}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default GithubCalender;
