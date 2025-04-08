import { test, expect } from '@playwright/test';

const FRONTEND_URL = "http://localhost:3000";
test('Ensure add a link is working', async ({page}) => {
    
    //go to edit page
    await page.goto(`${FRONTEND_URL}/editmodule`);
    
    //click type select drop down
    await page.getByTestId("type_select_button").click();

    //select link type 
    await page.getByTestId("type_link_button").click();

    //select link type 
    await page.getByTestId("add_el_btn").click();

    //find newest field added

    //fill the field

    //click insert

    //check for page content

});