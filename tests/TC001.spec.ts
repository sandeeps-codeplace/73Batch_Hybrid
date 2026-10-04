//Actual automation test steps
import {test} from '@playwright/test';
import { General } from '../lib/General';
test('TC001',async({page})=>{
 let obj = new General(page);
    await obj.openApplicaiton();
    await obj.login();
    await obj.logout();

})