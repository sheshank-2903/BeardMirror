import { test, expect } from '@playwright/test';

test('loads home title', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page.getByText('LinkedIn Job Search Automation Agent')).toBeVisible();
});
