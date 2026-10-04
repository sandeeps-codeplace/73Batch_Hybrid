import { Global } from "./Global"

//To provide allre-usable functions/method related to whole applicaiton
export class General extends Global{
async openApplicaiton(){
    // console.log('URL:', this.url);
    await this.page.goto(this.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    
    // Debug: screenshot लें और HTML content निकालें
    await this.page.screenshot({ path: 'debug-after-goto.png', fullPage: true });
    const content = await this.page.content();
    console.log(content.substring(0, 500)); // पहले 500 characters देखें
    
    await this.page.waitForSelector(this.textbox_LoginName, { state: 'visible', timeout: 15000 });
    console.log("sandeep testing tha app");
}
async login(){
    const userField = this.page.locator(this.textbox_LoginName);
    await userField.waitFor({ state: 'visible', timeout: 15000 });
    await userField.fill(this.username);
// await this.page.locator(this.textbox_LoginName).fill(this.username);
await this.page.locator(this.textbox_Password).fill(this.password);
await this.page.locator(this.button_Login).click();
 console.log("logint complated");
}
async logout(){
   await this.page.locator(this.link_Logout).click();

}
async addnewemployee(){
const frame = this.page.frameLocator(this.iframe_empinfo);
await frame.locator(this.button_addEmp).click();
await frame.locator(this.textbox_firstName).fill(this.firstname);
await frame.locator(this.textbox_lastname).fill(this.lastname);
await frame.locator(this.button_save).click();
console.log("New employee added successfully");
}


}