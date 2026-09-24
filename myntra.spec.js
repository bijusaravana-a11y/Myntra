
 //  1. FInding Discounted price products in KIDS T-shirts.
// import { test } from '@playwright/test';

// test('Count Discounted Prices', async ({ page }) => {

//     // Open Myntra
//     await page.goto('https://www.myntra.com/kids-tshirts');

//     // Find discounted prices using XPath
//     const discountedprices = page.locator('//span[@class="product-discountedPrice"]');

//     // Count the discounted prices
//     const count = await discountedprices.count();

//     // Print the count
//     console.log('Total discounted prices:', count);
// });

// import { test } from '@playwright/test';

// test('Total number of products in Kids T-shirts', async ({ page }) => {

//     // Open Myntra
//     await page.goto('https://www.myntra.com/kids-tshirts');

//     // Find the total number 
//     // using XPath
//     const prices = page.locator('//li[@class="product-base"]');

//     // Count the Total products 
//     const count = await prices.count();

//     // Print the count
//     console.log('Total number of products in Kids T-shirts', count);
// });

// 3.Finding the Lowest price

// import { test } from '@playwright/test';

// test('Find Lowest Discounted Price', async ({ page }) => {

//     // Open Myntra
//     await page.goto('https://www.myntra.com/kids-tshirts');

//     // Find all products
//     const products = page.locator('//li[contains(@class,"product-base")]');

//     // Find all discounted prices
//     const discountprices = page.locator('//span[@class="product-discountedPrice"]');

//     // Total number of products
//     const totalProducts = await products.count();

//     // console.log('Total products:', totalProducts);

//     // Get all discounted prices
//     const priceText = await discountprices.allInnerTexts();

//     console.log('Discounted prices:', priceText);

//     // Convert prices into numbers
//     const priceNumbers = priceText.map(price =>
//         Number(price.replace('₹', '').replace(',', ''))
//     );


//     // Find lowest price
//     const lowestPrice = Math.min(...priceNumbers);

//     console.log(lowestPrice);
// });

// import { test } from '@playwright/test';

// test('Find Lowest Discounted Price', async ({ page }) => {

//     await page.goto('https://www.myntra.com/kids-tshirts');

//     const products = page.locator('//li[contains(@class,"product-base")]');

//     const discountprices = page.locator('//span[@class="product-discountedPrice"]');

//     const totalProducts = await products.count();

//     console.log('Total products:', totalProducts);

//     const priceText = await discountprices.allInnerTexts();

//     const priceNumbers = priceText.map(price =>
//         Number(price.replace('Rs. ', '').replace(',', ''))
//     );

//     const lowestPrice = Math.min(...priceNumbers);

//     console.log('Lowest discounted price:', lowestPrice);
// });

//4. Lowest price alter 
// method:-



// import { test } from '@playwright/test';

// test('Find minimum price and its brand', async ({ page }) => {

//     await page.goto('https://www.myntra.com/boy-tshirts', {
//         waitUntil: 'domcontentloaded',
//         timeout: 60000
//     });

    
//     async function getProductBrandByPrice(price) {
//         const productLocator = page.locator(
//            ` //li[@class="product-base"]/descendant::span[@class="product-discountedPrice" and text()="${price}"]/ancestor::div[@class="product-productMetaInfo"]/descendant::h3[@class="product-brand"]`
//         );

//         return await productLocator.textContent();
//     }

//     async function findMinimumPrice() {
//         const allPrices = page.locator(
//             '//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]'
//         );

//         const priceList = await allPrices.allTextContents();

//         const priceNumbers = priceList.map((price) =>
//             Number(price.replace(/[^0-9]/g, ''))
//         );

//         const minPrice = Math.min(...priceNumbers);

//         console.log('Minimum price:', minPrice);

//         // Calling the product-brand function inside this function
//         const brandName = await getProductBrandByPrice(minPrice);

//         console.log('Product Brand:', brandName);
//     }

//     await findMinimumPrice();

// });

   import { test } from '@playwright/test';

async function getProductBrandByPriceoftotalproduct(page, price) {

    const productLocator1 = page.locator(
        `//li[@class="product-base"]//span[@class="product-discountedPrice" and normalize-space(.)='₹${price}']/ancestor::li[@class="product-base"]//h3[@class="product-brand"]`
    );

    return await productLocator1.allTextContents();
}


async function findMinimumPriceofallproducts(page) {

    const alltotalPrices = page.locator(
        '//li[@class="product-base"]//div[@class="product-price"]//span[@class="product-discountedPrice"]'
    );

    const totalpriceList = await alltotalPrices.allTextContents();

    const totalpriceNumbers = totalpriceList.map((price) =>
        Number(price.replace(/[^0-9]/g, ''))
    );

    const minPrice1 = Math.min(...totalpriceNumbers);

    console.log('Minimum price:', minPrice1);

    const brandName = await getProductBrandByPriceoftotalproduct(page, minPrice1);

    console.log('Product Brand:', brandName);
}


test('Find minimum price', async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts');

    await findMinimumPriceofallproducts(page);

});



// console.log ("This change from Master code");
// test ('Find minimum price in Kids T-shirts', async ({ page }) => {

//     await page.goto('https://www.myntra.com/kids-tshirts');

console.log("This change from Login-test")
// login-test
