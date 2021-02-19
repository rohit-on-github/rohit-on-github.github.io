(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["certificates-certificates-module"],{

/***/ "U5yV":
/*!*************************************************************!*\
  !*** ./src/app/certificates/certificates-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CertificatesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificatesPageRoutingModule", function() { return CertificatesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _certificates_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./certificates.page */ "xyGt");




const routes = [
    {
        path: '',
        component: _certificates_page__WEBPACK_IMPORTED_MODULE_3__["CertificatesPage"]
    }
];
let CertificatesPageRoutingModule = class CertificatesPageRoutingModule {
};
CertificatesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CertificatesPageRoutingModule);



/***/ }),

/***/ "Y8Cb":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/certificates/certificates.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"item-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Certificates</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-contentclass=\"ion-padding\">\n\n  <h3>\n  </h3>\n\n  </ion-content>");

/***/ }),

/***/ "fTgl":
/*!*****************************************************!*\
  !*** ./src/app/certificates/certificates.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZXJ0aWZpY2F0ZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "xhln":
/*!*****************************************************!*\
  !*** ./src/app/certificates/certificates.module.ts ***!
  \*****************************************************/
/*! exports provided: CertificatesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificatesPageModule", function() { return CertificatesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _certificates_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./certificates-routing.module */ "U5yV");
/* harmony import */ var _certificates_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./certificates.page */ "xyGt");







let CertificatesPageModule = class CertificatesPageModule {
};
CertificatesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _certificates_routing_module__WEBPACK_IMPORTED_MODULE_5__["CertificatesPageRoutingModule"]
        ],
        declarations: [_certificates_page__WEBPACK_IMPORTED_MODULE_6__["CertificatesPage"]]
    })
], CertificatesPageModule);



/***/ }),

/***/ "xyGt":
/*!***************************************************!*\
  !*** ./src/app/certificates/certificates.page.ts ***!
  \***************************************************/
/*! exports provided: CertificatesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificatesPage", function() { return CertificatesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_certificates_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./certificates.page.html */ "Y8Cb");
/* harmony import */ var _certificates_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certificates.page.scss */ "fTgl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CertificatesPage = class CertificatesPage {
    constructor() { }
    ngOnInit() {
    }
};
CertificatesPage.ctorParameters = () => [];
CertificatesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-certificates',
        template: _raw_loader_certificates_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_certificates_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CertificatesPage);



/***/ })

}]);
//# sourceMappingURL=certificates-certificates-module.js.map