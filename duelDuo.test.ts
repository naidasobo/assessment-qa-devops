
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


test('See All Bots shows up when page loads', async () => {
    const title = await driver.findElement(By.id('see-all'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


test('Draw button shows up when page loads', async () => {
    const title = await driver.findElement(By.id('draw'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})