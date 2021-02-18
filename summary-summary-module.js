(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["summary-summary-module"],{

/***/ "A6O4":
/*!*******************************************!*\
  !*** ./src/app/summary/summary.module.ts ***!
  \*******************************************/
/*! exports provided: SummaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageModule", function() { return SummaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _summary_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summary-routing.module */ "ZCMI");
/* harmony import */ var _summary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./summary.page */ "vyRd");







let SummaryPageModule = class SummaryPageModule {
};
SummaryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _summary_routing_module__WEBPACK_IMPORTED_MODULE_5__["SummaryPageRoutingModule"]
        ],
        declarations: [_summary_page__WEBPACK_IMPORTED_MODULE_6__["SummaryPage"]]
    })
], SummaryPageModule);



/***/ }),

/***/ "ZCMI":
/*!***************************************************!*\
  !*** ./src/app/summary/summary-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SummaryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageRoutingModule", function() { return SummaryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _summary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./summary.page */ "vyRd");




const routes = [
    {
        path: '',
        component: _summary_page__WEBPACK_IMPORTED_MODULE_3__["SummaryPage"]
    }
];
let SummaryPageRoutingModule = class SummaryPageRoutingModule {
};
SummaryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SummaryPageRoutingModule);



/***/ }),

/***/ "qo/X":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/summary/summary.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Professional Summary</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <h3>\n    A Data Science Enthusiast with 2 years of experience in content marketing and I.T. industry. An expert in business\n    acumen, analysing it by applying critical thinking and creatively presenting the stats on Tableau. A programmer who\n    specializes in developing platforms for complex ML based applications. A team player in developing Analytical apps\n    with excellent communication and collaboration.\n  </h3>\n\n</ion-content>\n\n<ion-footer style=\"text-align: center;\">\n  <ion-button href=\"https://drive.google.com/drive/folders/11nFMgU2X_yG72p2U8KCxmMXSmAbnZY7A?usp=sharing\">\n    Download Resume\n  </ion-button>\n</ion-footer>");

/***/ }),

/***/ "vyRd":
/*!*****************************************!*\
  !*** ./src/app/summary/summary.page.ts ***!
  \*****************************************/
/*! exports provided: SummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPage", function() { return SummaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_summary_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./summary.page.html */ "qo/X");
/* harmony import */ var _summary_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summary.page.scss */ "wZzh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SummaryPage = class SummaryPage {
    constructor() { }
    ngOnInit() {
    }
};
SummaryPage.ctorParameters = () => [];
SummaryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-summary',
        template: _raw_loader_summary_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_summary_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SummaryPage);



/***/ }),

/***/ "wZzh":
/*!*******************************************!*\
  !*** ./src/app/summary/summary.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdW1tYXJ5LnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=summary-summary-module.js.map