import {test} from '@playwright/test';
import { General } from '../lib/General';
test('TC002',async({page})=>{
    let obj=new General(page);
    await obj.openApplicaiton();
    await obj.login();
    await obj.addnewemployee();
    await obj.logout();

});