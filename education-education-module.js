(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["education-education-module"],{

/***/ "+lCT":
/*!*********************************************!*\
  !*** ./src/app/education/education.page.ts ***!
  \*********************************************/
/*! exports provided: EducationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationPage", function() { return EducationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_education_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./education.page.html */ "SIcj");
/* harmony import */ var _education_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./education.page.scss */ "LJc1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let EducationPage = class EducationPage {
    constructor() { }
    ngOnInit() {
    }
};
EducationPage.ctorParameters = () => [];
EducationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-education',
        template: _raw_loader_education_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_education_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EducationPage);



/***/ }),

/***/ "0lx5":
/*!*******************************************************!*\
  !*** ./src/app/education/education-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EducationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationPageRoutingModule", function() { return EducationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _education_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education.page */ "+lCT");




const routes = [
    {
        path: '',
        component: _education_page__WEBPACK_IMPORTED_MODULE_3__["EducationPage"]
    }
];
let EducationPageRoutingModule = class EducationPageRoutingModule {
};
EducationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EducationPageRoutingModule);



/***/ }),

/***/ "LJc1":
/*!***********************************************!*\
  !*** ./src/app/education/education.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZHVjYXRpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "SIcj":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Education</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  Training Program on Data Science  . EXCELR Solutions (Division of EXCELR Solutions (USA))\n  Bachelor of Engineering (Computer Science) . SGSITS (Indore, M.P.) - Estd. 1952\n  High School (Science) conc. in Computer Science. Delhi Public School, Vijaipur (Guna, M.P)\n</ion-content>\n");

/***/ }),

/***/ "hDSD":
/*!***********************************************!*\
  !*** ./src/app/education/education.module.ts ***!
  \***********************************************/
/*! exports provided: EducationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationPageModule", function() { return EducationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _education_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./education-routing.module */ "0lx5");
/* harmony import */ var _education_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./education.page */ "+lCT");







let EducationPageModule = class EducationPageModule {
};
EducationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _education_routing_module__WEBPACK_IMPORTED_MODULE_5__["EducationPageRoutingModule"]
        ],
        declarations: [_education_page__WEBPACK_IMPORTED_MODULE_6__["EducationPage"]]
    })
], EducationPageModule);



/***/ })

}]);
//# sourceMappingURL=education-education-module.js.map