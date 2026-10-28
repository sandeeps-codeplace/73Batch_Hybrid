# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC001.spec.ts >> TC001
- Location: tests\TC001.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.screenshot: Test timeout of 30000ms exceeded.
Call log:
  - taking page screenshot
  - waiting for fonts to load...
  - fonts loaded

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - table [ref=e2]:
    - rowgroup [ref=e3]:
      - row [ref=e4]:
        - cell [ref=e5]
        - cell [ref=e7]
  - table [ref=e8]:
    - rowgroup [ref=e9]:
      - row [ref=e10]:
        - cell [ref=e11]:
          - table [ref=e12]:
            - rowgroup [ref=e13]:
              - row [ref=e14]:
                - cell [ref=e15]
                - cell [ref=e16]
                - cell [ref=e17]
                - cell [ref=e18]
                - cell [ref=e19]
                - cell [ref=e20]
  - generic [ref=e21]:
    - table [ref=e22]:
      - rowgroup [ref=e23]:
        - row [ref=e24]:
          - cell [ref=e25]
          - cell [ref=e26]:
            - table [ref=e27]:
              - rowgroup [ref=e28]:
                - row [ref=e29]:
                  - cell [ref=e30]
                  - cell [ref=e31]:
                    - table [ref=e33]:
                      - rowgroup [ref=e34]:
                        - row [ref=e35]:
                          - cell [ref=e36]
                          - cell [ref=e37]
                        - row [ref=e38]:
                          - cell "Login Name :" [ref=e39]
                          - cell [ref=e40]:
                            - textbox [ref=e41]
                        - row [ref=e42]:
                          - cell "Password :" [ref=e43]
                          - cell [ref=e44]:
                            - textbox [ref=e45]
                        - row [ref=e46]:
                          - cell [ref=e47]:
                            - button "Login" [ref=e48]
                          - cell [ref=e49]:
                            - button "Clear" [ref=e50]
                        - row [ref=e51]:
                          - cell [ref=e52]
                          - cell [ref=e53]:
                            - strong [ref=e54]
                  - cell [ref=e55]
                  - cell [ref=e57]
                - row [ref=e58]:
                  - cell [ref=e59]
                - row [ref=e60]:
                  - cell [ref=e61]
                - row [ref=e62]:
                  - cell [ref=e63]
                  - cell [ref=e65]
                - row [ref=e66]:
                  - cell [ref=e67]
                  - cell [ref=e68]:
                    - table [ref=e69]:
                      - rowgroup [ref=e70]:
                        - row [ref=e71]:
                          - cell "Orange HRM comes as a comprehensive solution for the efficient management and development of your Human Resource. It will assist you in the complex and strategic process of managing this crucial resource of your enterprise. Based on modular architecture, it facilitates a vast range of HR activities, with features that reflect the main HR management activities. It comes as a web-enabled application and considering the available flexibility, OrangeHRM is a perfect platform for reengineering your HR processes and achieving a new level of HR Management." [ref=e72]
                - row [ref=e73]:
                  - cell [ref=e74]
                  - cell [ref=e76]
                - row [ref=e77]:
                  - cell [ref=e78]
                  - cell [ref=e79]
                - row [ref=e80]:
                  - cell [ref=e81]
                  - cell [ref=e82]
                  - cell [ref=e83]
                  - cell [ref=e84]
                  - cell [ref=e85]
                  - cell [ref=e86]
          - cell [ref=e87]
    - table [ref=e88]:
      - rowgroup [ref=e89]:
        - row [ref=e90]:
          - cell [ref=e91]:
            - link "SureshIT" [ref=e92] [cursor=pointer]:
              - /url: "#"
```

# Test source

```ts
  1  | import { Global } from "./Global"
  2  | 
  3  | //To provide allre-usable functions/method related to whole applicaiton
  4  | export class General extends Global{
  5  | async openApplicaiton(){
  6  |     // console.log('URL:', this.url);
  7  |     await this.page.goto(this.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  8  |     
  9  |     // Debug: screenshot लें और HTML content निकालें
> 10 |     await this.page.screenshot({ path: 'debug-after-goto.png', fullPage: true });
     |                     ^ Error: page.screenshot: Test timeout of 30000ms exceeded.
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