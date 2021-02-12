(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"],{

/***/ "2QCM":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Projects</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  Data Science Projects: The Repository contains\n  Big Cities Health - Clean the health data of 26 cities using Tidying up fields, Missing Value Treatment.\n  Climate Change - Cleaning Climate Change Knowledge Portal on climate systems, exposure to climate\n  Titanic - Predicts passengers surviving the Titanic using Logistic Regression, and evaluated by accuracy.\n  NLP - Spelling Correction - Flask project to find the wrong spelling and also suggests correct spelling.\n  Sentimental Analysis - calculate the polarity of the given sentence between -1 to 1 using Textblob\n  Digit Recogniser - Identify digits from handwritten images using Random Forest and Decision Tree.\n  Available on GitHub (2020)\n</ion-content>");

/***/ }),

/***/ "A4EA":
/*!*****************************************************!*\
  !*** ./src/app/projects/projects-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageRoutingModule", function() { return ProjectsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _projects_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.page */ "fyPJ");




const routes = [
    {
        path: '',
        component: _projects_page__WEBPACK_IMPORTED_MODULE_3__["ProjectsPage"]
    }
];
let ProjectsPageRoutingModule = class ProjectsPageRoutingModule {
};
ProjectsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProjectsPageRoutingModule);



/***/ }),

/***/ "MF/m":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Wm2z":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.module.ts ***!
  \*********************************************/
/*! exports provided: ProjectsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageModule", function() { return ProjectsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects-routing.module */ "A4EA");
/* harmony import */ var _projects_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects.page */ "fyPJ");







let ProjectsPageModule = class ProjectsPageModule {
};
ProjectsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _projects_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectsPageRoutingModule"]
        ],
        declarations: [_projects_page__WEBPACK_IMPORTED_MODULE_6__["ProjectsPage"]]
    })
], ProjectsPageModule);



/***/ }),

/***/ "fyPJ":
/*!*******************************************!*\
  !*** ./src/app/projects/projects.page.ts ***!
  \*******************************************/
/*! exports provided: ProjectsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPage", function() { return ProjectsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_projects_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./projects.page.html */ "2QCM");
/* harmony import */ var _projects_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.page.scss */ "MF/m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ProjectsPage = class ProjectsPage {
    constructor() { }
    ngOnInit() {
    }
};
ProjectsPage.ctorParameters = () => [];
ProjectsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-projects',
        template: _raw_loader_projects_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_projects_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProjectsPage);



/***/ })

}]);
//# sourceMappingURL=projects-projects-module.js.map