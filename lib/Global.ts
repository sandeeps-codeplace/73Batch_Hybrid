//to provide test data & objets related to whole application
import {Page} from "@playwright/test"
export class Global{
    constructor(public page:Page){
        this.page=page;
    }
    // test data========================================
    public url:string="https://ctcorphyd.com/SureshIT/login.php";
    public username:string="sureshit";
    public password:string="sureshit";
    public firstname:string="sandeep";
    public lastname:string="kumar";
    //Objects/Element=======================================
    public textbox_LoginName:string="//input[@name='txtUserName']";
    public textbox_Password:string="//input[@name='txtPassword']";
    public button_Login:string="//input[@name='Submit']";
    public link_Logout:string="//a[text()='Logout']";
    public iframe_empinfo:string="//iframe[@name='rightMenu']";
    public button_addEmp:string="//input[@value='Add']";
    public textbox_firstName:string="//input[@name='txtEmpFirstName']";
    public textbox_lastname:string="//input[@name='txtEmpLastName']";
    public button_save:string="//input[@id='btnEdit']";

    


}