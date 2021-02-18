(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["skills-skills-module"],{

/***/ "JIqc":
/*!*************************************************!*\
  !*** ./src/app/skills/skills-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SkillsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsPageRoutingModule", function() { return SkillsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _skills_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills.page */ "SASi");




const routes = [
    {
        path: '',
        component: _skills_page__WEBPACK_IMPORTED_MODULE_3__["SkillsPage"]
    }
];
let SkillsPageRoutingModule = class SkillsPageRoutingModule {
};
SkillsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SkillsPageRoutingModule);



/***/ }),

/***/ "SASi":
/*!***************************************!*\
  !*** ./src/app/skills/skills.page.ts ***!
  \***************************************/
/*! exports provided: SkillsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsPage", function() { return SkillsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_skills_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./skills.page.html */ "ggzz");
/* harmony import */ var _skills_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills.page.scss */ "ka5R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SkillsPage = class SkillsPage {
    constructor() { }
    ngOnInit() {
    }
};
SkillsPage.ctorParameters = () => [];
SkillsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-skills',
        template: _raw_loader_skills_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_skills_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SkillsPage);



/***/ }),

/***/ "ggzz":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Skills</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <h3>\n  Languages: R (Standard), Java (Basic), Nodejs (Basic), AngularJS (Standard)\n  Computer skills: Git (Standard),Linux (Standard)\n  Softwares: Tableau (Standard), Excel (Standard)\n  Editors: VScode(Expert), Jupyter(Expert), Spyder(Standard), Vim(Standard)\n  Platforms: GCP-Virtual Machine (Basic), Firebase(Expert), Google Play Console(Expert)\n  Database: SQL (Basic)\n  Concepts: NLP (Basic), ETL (Basic)\n  Frameworks: Gunicorn (Basic). Flask (Basic), Django (Standard)\n  Libraries: Pandas (Standard), Scikit-Learn (Standard), Numpy (Standard)\n  </h3>\n</ion-content>");

/***/ }),

/***/ "ka5R":
/*!*****************************************!*\
  !*** ./src/app/skills/skills.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJza2lsbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "nGXA":
/*!*****************************************!*\
  !*** ./src/app/skills/skills.module.ts ***!
  \*****************************************/
/*! exports provided: SkillsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsPageModule", function() { return SkillsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _skills_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills-routing.module */ "JIqc");
/* harmony import */ var _skills_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skills.page */ "SASi");







let SkillsPageModule = class SkillsPageModule {
};
SkillsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _skills_routing_module__WEBPACK_IMPORTED_MODULE_5__["SkillsPageRoutingModule"]
        ],
        declarations: [_skills_page__WEBPACK_IMPORTED_MODULE_6__["SkillsPage"]]
    })
], SkillsPageModule);



/***/ })

}]);
//# sourceMappingURL=skills-skills-module.js.map