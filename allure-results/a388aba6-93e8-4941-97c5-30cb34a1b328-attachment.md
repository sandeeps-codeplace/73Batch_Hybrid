# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC001.spec.ts >> TC001
- Location: tests\TC001.spec.ts:4:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://ctcorphyd.com/SureshIT/login.php
Call log:
  - navigating to "https://ctcorphyd.com/SureshIT/login.php", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | import { Global } from "./Global"
  2  | 
  3  | //To provide allre-usable functions/method related to whole applicaiton
  4  | export class General extends Global{
  5  | async openApplicaiton(){
  6  |     // console.log('URL:', this.url);
> 7  |     await this.page.goto(this.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
     |                     ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://ctcorphyd.com/SureshIT/login.php
  8  |     
  9  |     // Debug: screenshot लें और HTML content निकालें
  10 |     await this.page.screenshot({ path: 'debug-after-goto.png', fullPage: true });
  11 |     const content = await this.page.content();
  12 |     console.log(content.substring(0, 500)); // पहले 500 characters देखें
  13 |     
  14 |     await this.page.waitForSelector(this.textbox_LoginName, { state: 'visible', timeout: 15000 });
  15 |     console.log("sandeep testing tha app");
  16 | }
  17 | async login(){
  18 |     const userField = this.page.locator(this.textbox_LoginName);
  19 |     await userField.waitFor({ state: 'visible', timeout: 15000 });
  20 |     await userField.fill(this.username);
  21 | // await this.page.locator(this.textbox_LoginName).fill(this.username);
  22 | await this.page.locator(this.textbox_Password).fill(this.password);
  23 | await this.page.locator(this.button_Login).click();
  24 |  console.log("logint complated");
  25 | }
  26 | async logout(){
  27 |    await this.page.locator(this.link_Logout).click();
  28 | 
  29 | }
  30 | async addnewemployee(){
  31 | const frame = this.page.frameLocator(this.iframe_empinfo);
  32 | await frame.locator(this.button_addEmp).click();
  33 | await frame.locator(this.textbox_firstName).fill(this.firstname);
  34 | await frame.locator(this.textbox_lastname).fill(this.lastname);
  35 | await frame.locator(this.button_save).click();
  36 | console.log("New employee added successfully");
  37 | }
  38 | 
  39 | 
  40 | }
```