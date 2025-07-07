import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '@/app/page';
import About from '@/app/about/page';
import Projects from '@/app/projects/page';
import Prettier from '@/app/projects/prettier-er/page';
import PrettierDocs from '@/app/projects/prettier-er/docs/page';
import Tasker from '@/app/projects/tasker/page';
import Scdb from '@/app/projects/scdb-database-trends/page';
import NotFound from '@/app/not-found';

jest.mock('framer-motion', () => {
  const React = require('react');

  const MOTION_PROPS = new Set([
    'initial',
    'animate',
    'whileInView',
    'exit',
    'variants',
    'transition',
    'viewport',
    'onViewportEnter',
    'onViewportLeave',
  ]);

  const makeMock = (tag: string) => {
    const MockComponent = ({ children, ...rest }: any) =>
      React.createElement(
        tag,
        Object.fromEntries(
          Object.entries(rest).filter(([key]) => !MOTION_PROPS.has(key))
        ),
        children
      );
    MockComponent.displayName = `Mock(${tag})`;
    return MockComponent;
  };

  const handler = { get: (_: unknown, tag: string) => makeMock(tag) };

  return {
    motion: new Proxy({}, handler),          // <motion.div>, <motion.h1>, …
    AnimatePresence: ({ children }: any) => <>{children}</>,
  };
});

const pages = [
    { component: Home, heading: /hello, i'm joshua/i },
    { component: About, heading: /about me/i },
    { component: Projects, heading: /my projects/i },
    { component: Prettier, heading: /prettier-er/i, level: 1 },
    { component: PrettierDocs, heading: /prettier-er internals & documentation/i, level: 1 },
    { component: Tasker, heading: /tasker/i, level: 1 },
    { component: Scdb, heading: /scdb trend explorer/i },
    { component: NotFound, heading: /page not found/i, level: 2 },
];

describe('Static pages render', () => {
    pages.forEach(({ component: Component, heading, level }) => {
        test(`${Component.name} renders without crashing`, () => {
        render(<Component />);
        const opts: any = { name: heading };
        if (typeof level === 'number') {
            opts.level = level;
        }
        const h = screen.getByRole('heading', opts);
        expect(h).toBeInTheDocument();
        });
    });
});