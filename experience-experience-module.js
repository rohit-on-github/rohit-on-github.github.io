(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["experience-experience-module"],{

/***/ "2g8h":
/*!*********************************************************!*\
  !*** ./src/app/experience/experience-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ExperiencePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencePageRoutingModule", function() { return ExperiencePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _experience_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience.page */ "cQsJ");




const routes = [
    {
        path: '',
        component: _experience_page__WEBPACK_IMPORTED_MODULE_3__["ExperiencePage"]
    }
];
let ExperiencePageRoutingModule = class ExperiencePageRoutingModule {
};
ExperiencePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExperiencePageRoutingModule);



/***/ }),

/***/ "KFMo":
/*!*************************************************!*\
  !*** ./src/app/experience/experience.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlcmllbmNlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "cQsJ":
/*!***********************************************!*\
  !*** ./src/app/experience/experience.page.ts ***!
  \***********************************************/
/*! exports provided: ExperiencePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencePage", function() { return ExperiencePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_experience_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./experience.page.html */ "kYxo");
/* harmony import */ var _experience_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience.page.scss */ "KFMo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ExperiencePage = class ExperiencePage {
    constructor() { }
    ngOnInit() {
    }
};
ExperiencePage.ctorParameters = () => [];
ExperiencePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-experience',
        template: _raw_loader_experience_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_experience_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExperiencePage);



/***/ }),

/***/ "kYxo":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"item-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Experience</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-list class=\"item-background-color\">\n    <ion-item class=\"item-background-color\">\n      <div>\n        <h3>ANALYTICS DOMAIN</h3>\n        <h5> January 2020 – Present</h5>\n        <i>An advanced analytic and data warehousing firm with clients/partners like Knime and IBM.</i>\n        <br>\n        <br>\n        <b>Intern - Analytics Products and Tools</b>\n        <br>\n        <br>\n        Designing and Developing of various Analytical Tools including Stock Prediction and deploying on GCP\n        • Time Series Model: Created a dashboard for Corona Virus Spreading metrics and future predictions.\n        • Business Acumen: Analyzed market, researched and created models for Stock Prediction.\n        • Python: For development of various forecasting models and Natural Language Processing on stock market data and\n        using the Time-Series model to predict closing price.\n        <br>\n      </div>\n    </ion-item>\n\n    <ion-item class=\"item-background-color\">\n      <div>\n        <h3>INNODATATICS</h3>\n        <h5>February 2020 – May 2020</h5>\n        <i>Innodatatics rated among the \"20 Most Promising Data Analytics Solution Providers - 2018\" with clients like\n          Hindustan Unilever and Yatra.</i>\n        <br>\n        <br>\n        <b>Data Science Intern</b>\n        <br>\n        <br>\n        Research and Development for Sales forecasting of a US based retail sector client.\n        • Business Acumen: Analyzed sales and products and created visualization for various insights for better\n        customer\n        retention and increase in profit by customizing the inventory.\n        • Time Series Model: Developed a neural network model for Sales Forecasting in a team of 6 in a remote\n        environment,\n        collaborated code on Kaggle and deployed successfully on Flask and Django.\n        <br>\n      </div>\n    </ion-item>\n\n    <ion-item class=\"item-background-color\">\n      <div>\n        <h3>WITTYFEED (Vatsana Technologies)</h3>\n        <h5> August 2018 – February 2019</h5>\n        <i>World’s second largest viral content company with clients/partners like Samsung, Balaji Telefilms, Excel\n          Entertainment and Zee Entertainment Enterprises.</i>\n        <br>\n        <br>\n        <b>Assistant Developer (Mobile Team)</b>\n        <br>\n      </div>\n\n    </ion-item>\n\n    <ion-item class=\"item-background-color\">\n      <div>\n        <h3>ENDEAVOUR IT SOLUTIONS</h3>\n        <h5>April 2016 – May 2016</h5>\n        <i>A creative digital agency focused on Web Development and Marketing related Services with clients/partners\n          like\n          Socialite Sydney, Swan Group, and Gruvi.</i>\n        <br><br>\n        <b>Advanced Java Intern</b>\n        <br>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "n62C":
/*!*************************************************!*\
  !*** ./src/app/experience/experience.module.ts ***!
  \*************************************************/
/*! exports provided: ExperiencePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencePageModule", function() { return ExperiencePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _experience_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experience-routing.module */ "2g8h");
/* harmony import */ var _experience_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experience.page */ "cQsJ");







let ExperiencePageModule = class ExperiencePageModule {
};
ExperiencePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _experience_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExperiencePageRoutingModule"]
        ],
        declarations: [_experience_page__WEBPACK_IMPORTED_MODULE_6__["ExperiencePage"]]
    })
], ExperiencePageModule);



/***/ })

}]);
//# sourceMappingURL=experience-experience-module.js.map