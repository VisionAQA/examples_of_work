import { test, expect } from '@playwright/test';

test.describe('SMSFAST.NET — Главная страница', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://smsfast.net/', { waitUntil: 'domcontentloaded' });
  });

  test('Проверка наличия заголовка "Быстрый прием СМС на виртуальные номера"', async ({ page }) => {
    const header = page.getByRole('heading', { name: 'Быстрый прием СМС на виртуальные номера' });
    await expect(header).toBeVisible();
  });

  test('Проверка наличия кнопки "Купить номер"', async ({ page }) => {
    // На странице несколько упоминаний "Купить номер" — берём первое
    const buyButton = page.locator('text=Купить номер').first();
    await expect(buyButton).toBeVisible();
    await expect(buyButton).toBeEnabled();
  });

  test('Проверка наличия кнопки "Регистрация"', async ({ page }) => {
  // на странице первое вхождение «Регистрация» — скрытый <span>, второе — видимая ссылка
  const registerButton = page.locator('text=Регистрация').nth(1);
  await expect(registerButton).toBeVisible();
  await expect(registerButton).toBeEnabled();
});

  test('Проверка наличия ссылок на популярные сервисы', async ({ page }) => {
    const services = ['Amazon', 'Facebook', 'Telegram', 'WhatsApp', 'Google'];
    for (const service of services) {
      // Каждое сервисное название отображается в списке входящих SMS — берём первое совпадение
      const serviceText = page.locator(`text=${service}`).first();
      await expect(serviceText).toBeVisible();
    }
  });

  test('Проверка наличия блока "Как принять SMS на временный номер"', async ({ page }) => {
    // Ищем заголовок блока
    const howBlock = page.locator('h1', { hasText: 'Как принять SMS на временный номер' });
    await expect(howBlock).toBeVisible();
  });

  test('Проверка наличия блока "Часто задаваемые вопросы"', async ({ page }) => {
    const faqBlock = page.locator('h1', { hasText: 'Часто задаваемые вопросы' });
    await expect(faqBlock).toBeVisible();
  });
});

test.describe('SMSFAST.NET — Навигация', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://smsfast.net/', { waitUntil: 'domcontentloaded' });
  });

  test('Пункт меню "Главная" ведёт на главную страницу', async ({ page }) => {
    const home = page.getByRole('link', { name: 'Главная' }).first();
    await expect(home).toBeVisible();
    await home.click();
    await expect(page).toHaveURL('https://smsfast.net/');
  });

  test('Пункт меню "Программа лояльности" ведёт на /loyalty', async ({ page }) => {
    const loyalty = page.getByRole('link', { name: 'Программа лояльности' }).first();
    await expect(loyalty).toBeVisible();
    await loyalty.click();
    await expect(page).toHaveURL('https://smsfast.net/loyalty');
  });

  test('Пункт меню "Прайс-лист" ведёт на /price', async ({ page }) => {
    const price = page.getByRole('link', { name: 'Прайс-лист' }).first();
    await expect(price).toBeVisible();
    await price.click();
    await expect(page).toHaveURL('https://smsfast.net/price');
  });

  test('Пункт меню "FAQ" ведёт на /faq', async ({ page }) => {
    const faq = page.getByRole('link', { name: 'FAQ' }).first();
    await expect(faq).toBeVisible();
    await faq.click();
    await expect(page).toHaveURL('https://smsfast.net/faq');
  });

  test('Пункт меню "API" ведёт на /doc', async ({ page }) => {
    const api = page.getByRole('link', { name: 'API' }).first();
    await expect(api).toBeVisible();
    await api.click();
    await expect(page).toHaveURL('https://smsfast.net/doc');
  });

 test('Пункт меню "Партнёрская программа" ведёт на /partner', async ({ page }) => {
  // Ищем ссылку по частичному совпадению href
  const partnerLink = page.locator('a[href*="partner"]').first();
  await expect(partnerLink).toBeVisible();
  await partnerLink.click();
  // Ждём, что URL содержит /partner
  await expect(page).toHaveURL(/\/partner/);
});
});