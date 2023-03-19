import { Applicant } from "./src/users/Applicant"
import { Company } from "./src/users/Company"
import { ApplicantList } from "./src/users/ApplicantList"
import { CompanyList } from "./src/users/CompanyList"
import { ApplicantValidator } from "./src/validation/ApplicantValidator"
import { CompanyValidator } from "./src/validation/CompanyValidator"

// ===================================================================================================================
// Applicants and Companies List
var applicantList: ApplicantList
var companyList: CompanyList

let applicantListString: string | null = localStorage.getItem("applicantList")
let companyListString: string | null = localStorage.getItem("companyList")

if (applicantListString) {
    applicantList = new ApplicantList()
    applicantList.parseJSON(applicantListString)
} else {
    applicantList = new ApplicantList()
}

if (companyListString) {
    companyList = new CompanyList()
    companyList.parseJSON(companyListString)
} else {
    companyList = new CompanyList()
}


// Applicants and Companies Table
var applicantTableRow: string
var companyTableRow: string

var applicantTableRow_: string | null = localStorage.getItem("applicantTableRow")
var companyTableRow_: string | null = localStorage.getItem("companyTableRow")

if (applicantTableRow_) {
    applicantTableRow = applicantTableRow_
} else {
    applicantTableRow = ``
}
if (companyTableRow_) {
    companyTableRow = companyTableRow_
} else {
    companyTableRow = ``
}

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

        try {
            ApplicantValidator.checkAll(name, email, country, state, cep, cpf, age)
            applicantList.add(new Applicant(name, email, country, state, Number(cep), description, Number(cpf), Number(age), selectedSkills))
            addApplicantTableRow(name, email, country, state, Number(cep), description, Number(cpf), Number(age), selectedSkills)
            localStorage.setItem("applicantList", JSON.stringify(applicantList))
            localStorage.setItem("applicantTableRow", applicantTableRow)
            alert("Applicant registered!")
        } catch (error: any) {
            alert(error.message)
        }
    }
}

// Update Applicant Table
function addApplicantTableRow(name: string, email: string, country: string, state: string, cep: number, description: string, cpf: number, age: number, requiredSkills: Array<string>) {
    applicantTableRow += `
<tr>
    <th id="applicant-name">${name}</th>
    <th id="applicant-email">${email}</th>
    <th id="applicant-country">${country}</th>
    <th id="applicant-state">${state}</th>
    <th id="applicant-cep">${cep}</th>
    <th id="applicant-description">${description}</th>
    <th id="applicant-cnpj">${cpf}</th>
    <th id="applicant-age">${age}</th>
    <th id="applicant-required-skills">${requiredSkills}</th>
</tr>
`
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

        try {
            CompanyValidator.checkAll(name, email, country, state, cep, cnpj)
            companyList.add(new Company(name, email, country, state, Number(cep), description, Number(cnpj), selectedSkills))
            addCompanyTableRow(name, email, country, state, Number(cep), description, Number(cnpj), selectedSkills)
            localStorage.setItem("companyList", JSON.stringify(companyList))
            localStorage.setItem("companyTableRow", companyTableRow)
            alert("Company registered")
        } catch (error: any) {
            alert(error.message)
        }
    }
}

// Update Company Table
function addCompanyTableRow(name: string, email: string, country: string, state: string, cep: number, description: string, cnpj: number, requiredSkills: Array<string>) {
    companyTableRow += `
<tr>
    <th id="company-name">${name}</th>
    <th id="company-email">${email}</th>
    <th id="company-country">${country}</th>
    <th id="company-state">${state}</th>
    <th id="company-cep">${cep}</th>
    <th id="company-description">${description}</th>
    <th id="company-cnpj">${cnpj}</th>
    <th id="company-required-skills">${requiredSkills}</th>
</tr>
`
}

// ===================================================================================================================
// Display Company Table
var companyTableBody = <HTMLButtonElement>document.querySelector("#table-company-body")

if (companyTableBody) {
    companyTableBody.innerHTML = companyTableRow
}

// ===================================================================================================================
// Display Applicant Table
var applicantTableBody = <HTMLButtonElement>document.querySelector("#table-applicant-body")

if (applicantTableBody) {
    applicantTableBody.innerHTML = applicantTableRow
}
