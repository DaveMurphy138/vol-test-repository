import { $, by, element } from "protractor";

export class LoginPage {
    
    public loginUserName = $('input#UserName')
    public loginPassword = $('input#Password')
    public loginButton
}