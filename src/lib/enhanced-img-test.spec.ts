// @vitest-environment happy-dom

import ImgTest from './enhanced-img-test.svelte';
import { render } from '@testing-library/svelte';
import { it, expect } from 'vitest';

it('renders', () => {
  render(ImgTest);
  expect(document.querySelector('img')).not.toBeNull
})
