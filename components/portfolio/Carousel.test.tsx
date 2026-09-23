import '@testing-library/jest-dom';
import { fireEvent, render, screen, within } from '@testing-library/react';
import Carousel from '@/components/portfolio/Carousel';
import { getProjects } from '@/constants/portfolio/projects';

const projectTitles = getProjects((key) => key).map((project) => project.title);

const setViewport = (width: number) => {
  window.innerWidth = width;
};

const getDots = () => within(screen.getByRole('group', { name: 'projectNavigation' }));

describe('Carousel', () => {
  beforeAll(() => {
    // jsdom does not implement scrolling
    Element.prototype.scrollTo = jest.fn();
  });

  describe('on mobile', () => {
    beforeEach(() => setViewport(375));

    it('shows one dot per project with the first one current', () => {
      render(<Carousel />);

      expect(getDots().getAllByRole('button')).toHaveLength(projectTitles.length);
      expect(getDots().getByRole('button', { name: projectTitles[0] })).toHaveAttribute(
        'aria-current',
        'true'
      );
    });

    it('makes a tapped dot current', () => {
      render(<Carousel />);

      fireEvent.click(getDots().getByRole('button', { name: projectTitles[1] }));

      expect(getDots().getByRole('button', { name: projectTitles[1] })).toHaveAttribute(
        'aria-current',
        'true'
      );
      expect(getDots().getByRole('button', { name: projectTitles[0] })).toHaveAttribute(
        'aria-current',
        'false'
      );
    });

    it('moves the current dot when swiping', () => {
      render(<Carousel />);

      fireEvent.scroll(screen.getByRole('region', { name: 'portfolio' }), {
        target: { scrollLeft: 316 * 2 },
      });

      expect(getDots().getByRole('button', { name: projectTitles[2] })).toHaveAttribute(
        'aria-current',
        'true'
      );
    });
  });

  describe('on desktop', () => {
    beforeEach(() => setViewport(1280));

    it('shows no dots', () => {
      render(<Carousel />);

      expect(
        screen.queryByRole('group', { name: 'projectNavigation' })
      ).not.toBeInTheDocument();
    });
  });
});
