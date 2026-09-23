import{test} from '@playwright/test'


// test ('browsing',async ({page}) => {

// await page.goto('https://chatgpt.com/')

// await page('screenshot.png')


// })

// test('learning',async({browser})=>{


// }

// const  

test ('click button in Red',async ({page}) =>
     {


    await page.goto('https://www.redbus.in')

    await page.locator("//div[@class='dojWrapper___86b3ef']")

    await page.waitForTimeout(3000);

    }

    )

    