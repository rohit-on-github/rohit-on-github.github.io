(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expertise-expertise-module"],{

/***/ "3H/Y":
/*!*********************************************!*\
  !*** ./src/app/expertise/expertise.page.ts ***!
  \*********************************************/
/*! exports provided: ExpertisePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpertisePage", function() { return ExpertisePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_expertise_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./expertise.page.html */ "dM6R");
/* harmony import */ var _expertise_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expertise.page.scss */ "vA1C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ExpertisePage = class ExpertisePage {
    constructor() { }
    ngOnInit() {
    }
};
ExpertisePage.ctorParameters = () => [];
ExpertisePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-expertise',
        template: _raw_loader_expertise_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_expertise_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExpertisePage);



/***/ }),

/***/ "EzXz":
/*!***********************************************!*\
  !*** ./src/app/expertise/expertise.module.ts ***!
  \***********************************************/
/*! exports provided: ExpertisePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpertisePageModule", function() { return ExpertisePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _expertise_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expertise-routing.module */ "iZTI");
/* harmony import */ var _expertise_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expertise.page */ "3H/Y");







let ExpertisePageModule = class ExpertisePageModule {
};
ExpertisePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _expertise_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExpertisePageRoutingModule"]
        ],
        declarations: [_expertise_page__WEBPACK_IMPORTED_MODULE_6__["ExpertisePage"]]
    })
], ExpertisePageModule);



/***/ }),

/***/ "dM6R":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expertise/expertise.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Areas of Expertise</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <h4>\n    Areas of professional expertise:\n  </h4>\n\n  <ion-list>\n    <ion-list-item>\n      • Business Acumen\n    </ion-list-item>\n    <ion-list-item>\n      • Effective Communication\n    </ion-list-item>\n    <ion-list-item>\n      • Time Series Models\n    </ion-list-item>\n    <ion-list-item>\n      • Python\n    </ion-list-item>\n    <ion-list-item>\n      • Data Analysis\n    </ion-list-item>\n    <ion-list-item>\n      • Django\n    </ion-list-item>\n  </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "iZTI":
/*!*******************************************************!*\
  !*** ./src/app/expertise/expertise-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ExpertisePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpertisePageRoutingModule", function() { return ExpertisePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _expertise_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expertise.page */ "3H/Y");




const routes = [
    {
        path: '',
        component: _expertise_page__WEBPACK_IMPORTED_MODULE_3__["ExpertisePage"]
    }
];
let ExpertisePageRoutingModule = class ExpertisePageRoutingModule {
};
ExpertisePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExpertisePageRoutingModule);



/***/ }),

/***/ "vA1C":
/*!***********************************************!*\
  !*** ./src/app/expertise/expertise.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlcnRpc2UucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=expertise-expertise-module.js.map