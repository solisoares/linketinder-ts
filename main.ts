import { Applicant } from "./src/users/Applicant"
import { Company } from "./src/users/Company"
import { ApplicantList } from "./src/users/ApplicantList"
import { CompanyList } from "./src/users/CompanyList"

// ===================================================================================================================
// Applicants and Companies List
var applicantList: ApplicantList = new ApplicantList()
var companyList: CompanyList = new CompanyList()

// ===================================================================================================================
// Register new Applicant Button
var registerApplicantButton = <HTMLButtonElement>document.querySelector("#register-applicant-button")

if (registerApplicantButton) {
    registerApplicantButton.onclick = function () {
        let name: string = (<HTMLInputElement>document.getElementById("register-applicant-name")).value
        let email: string = (<HTMLInputElement>document.getElementById("register-applicant-email")).value
        let country: string = (<HTMLInputElement>document.getElementById("register-applicant-country")).value
        let state: string = (<HTMLInputElement>document.getElementById("register-applicant-state")).value
        let cep: string = (<HTMLInputElement>document.getElementById("register-applicant-cep")).value
        let description: string = (<HTMLInputElement>document.getElementById("register-applicant-description")).value
        let cpf: string = (<HTMLInputElement>document.getElementById("register-applicant-cpf")).value
        let age: string = (<HTMLInputElement>document.getElementById("register-applicant-age")).value
        
        let allSkills = document.getElementsByClassName("register-applicant-input-skill")
        var selectedSkills: Array<string> = []
        for (let skill of allSkills) {
            if ((skill as HTMLInputElement).checked) {
                selectedSkills.push((skill as HTMLInputElement).value);
            }
        }
        
        applicantList.add(new Applicant(name, email, country, state, Number(cep), description, Number(cpf), Number(age), selectedSkills))
    }
}

// ===================================================================================================================
// Register new Company Button
var registerCompanyButton = <HTMLButtonElement>document.querySelector("#register-company-button")

if (registerCompanyButton) {
    registerCompanyButton.onclick = function () {
        let name: string = (<HTMLInputElement>document.getElementById("register-company-name")).value
        let email: string = (<HTMLInputElement>document.getElementById("register-company-email")).value
        let country: string = (<HTMLInputElement>document.getElementById("register-company-country")).value
        let state: string = (<HTMLInputElement>document.getElementById("register-company-state")).value
        let cep: string = (<HTMLInputElement>document.getElementById("register-company-cep")).value
        let description: string = (<HTMLInputElement>document.getElementById("register-company-description")).value
        let cnpj: string = (<HTMLInputElement>document.getElementById("register-company-cnpj")).value

        let allSkills = document.getElementsByClassName("register-company-input-skill")
        var selectedSkills: Array<string> = []
        for (let skill of allSkills) {
            if ((skill as HTMLInputElement).checked) {
                selectedSkills.push((skill as HTMLInputElement).value);
            }
        }

        companyList.add(new Company(name, email, country, state, Number(cep), description, Number(cnpj), selectedSkills))
        console.log(companyList);
    }
}