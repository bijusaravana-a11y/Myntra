// import { test } from '@playwright/test';

// test('Search iPhone 17 in Amazon', async ({ page }) => {

//     await page.goto('https://www.amazon.in');

//     await page.locator("//input[@id='twotabsearchtextbox']").fill('iPhone 17');

//     await page.locator("//input[@id='nav-search-submit-button']").click();

// });

// import { test } from '@playwright/test';

// test('Get Apple iPhone details', async ({ page }) => {

//     // Open Amazon
//     await page.goto('https://www.amazon.in');

//     // Search for Apple
//     await page.locator("//input[@id='twotabsearchtextbox']")
//         .fill('Apple');

//     // Click Search
//     await page.locator("//input[@id='nav-search-submit-button']")
//         .click();

//     // Combined XPath
//     const products = page.locator(
//         "//div[@role='listitem'][.//div[@data-cy='title-recipe'] and .//div[@data-cy='reviews-block']]"
//     );

//     // Get product titles
//     const titles = products.locator(".//div[@data-cy='title-recipe']");

//     // Get ratings
//     const ratings = products.locator(".//div[@data-cy='reviews-block']");

//     console.log("Product Titles:");
//     console.log(await titles.allTextContents());

//     console.log("Ratings:");
//     console.log(await ratings.allTextContents());

// });

import { test } from '@playwright/test';

test('Get Apple iPhone details', async ({ browser }) => {

    await browser.goto('https://www', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });

    console.log("Amazon opened");

    await browser.locator("//input[@id='twotabsearchtextbox']").fill('Apple 17 pro');

    console.log("Apple entered");

    await browser.locator("//input[@id='nav-search-submit-button']").click();

    console.log("Search clicked");

    const products = browser.locator(
        "//div[@role='listitem'][.//div[@data-cy='title-recipe'] and .//div[@data-cy='reviews-block']]"
    );

    console.log("Products found:", await products.count());

});