import { inject } from '@vercel/analytics';

/**
 * Vercel Web Analytics（与 Next 中 <Analytics /> 同源能力）。
 * 多页应用：每个 HTML 入口的 bundle 在加载时执行一次即可。
 * @see https://vercel.com/docs/analytics/quickstart
 */
export function initVercelAnalytics() {
  inject({
    framework: 'vite',
  });
}
