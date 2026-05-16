import { test, expect } from '@playwright/test';

test('loads home title', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page.getByText('AI Smart Hair & Beard Mirror')).toBeVisible();
});
