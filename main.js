(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h2>{{title}}</h2> -->\n\n<!-- <app-categoria-create></app-categoria-create> -->\n<!-- <app-favorito-create></app-favorito-create> -->\n<app-favoritos-viewer></app-favoritos-viewer>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _favoritos_viewer_favoritos_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favoritos-viewer/favoritos-viewer.component */ "./src/app/favoritos-viewer/favoritos-viewer.component.ts");
/* harmony import */ var _favorito_create_favorito_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favorito-create/favorito-create.component */ "./src/app/favorito-create/favorito-create.component.ts");
/* harmony import */ var _categoria_create_categoria_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categoria-create/categoria-create.component */ "./src/app/categoria-create/categoria-create.component.ts");
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase-config */ "./src/firebase-config.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _favoritos_viewer_favoritos_viewer_component__WEBPACK_IMPORTED_MODULE_4__["FavoritosViewerComponent"],
                _favorito_create_favorito_create_component__WEBPACK_IMPORTED_MODULE_5__["FavoritoCreateComponent"],
                _categoria_create_categoria_create_component__WEBPACK_IMPORTED_MODULE_6__["CategoriaCreateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_firebase_config__WEBPACK_IMPORTED_MODULE_7__["firebaseConfig"]),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"] // imports firebase/storage only needed for storage features
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/categoria-create/categoria-create.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/categoria-create/categoria-create.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categoria-create/categoria-create.component.html":
/*!******************************************************************!*\
  !*** ./src/app/categoria-create/categoria-create.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"categoria-create-form\">\n  <label>Id\n      <input [(ngModel)]=\"categoria.id\" placeholder=\"id\">\n  </label>\n\n  <label>Nome\n    <input [(ngModel)]=\"categoria.nome\" placeholder=\"nome\">\n  </label>\n\n  <button (click)=\"save()\">Novo</button>\n</div>\n"

/***/ }),

/***/ "./src/app/categoria-create/categoria-create.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/categoria-create/categoria-create.component.ts ***!
  \****************************************************************/
/*! exports provided: CategoriaCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaCreateComponent", function() { return CategoriaCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_categoria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/categoria */ "./src/models/categoria.ts");
/* harmony import */ var _categoria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../categoria.service */ "./src/app/categoria.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriaCreateComponent = /** @class */ (function () {
    function CategoriaCreateComponent(categoriaService, db) {
        this.categoriaService = categoriaService;
        this.db = db;
        this.categoria = new _models_categoria__WEBPACK_IMPORTED_MODULE_1__["Categoria"](this.db);
    }
    CategoriaCreateComponent.prototype.ngOnInit = function () {
    };
    CategoriaCreateComponent.prototype.save = function () {
        this.categoriaService.save(this.categoria);
        this.categoria = new _models_categoria__WEBPACK_IMPORTED_MODULE_1__["Categoria"](this.db);
    };
    CategoriaCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categoria-create',
            template: __webpack_require__(/*! ./categoria-create.component.html */ "./src/app/categoria-create/categoria-create.component.html"),
            styles: [__webpack_require__(/*! ./categoria-create.component.css */ "./src/app/categoria-create/categoria-create.component.css")]
        }),
        __metadata("design:paramtypes", [_categoria_service__WEBPACK_IMPORTED_MODULE_2__["CategoriaService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], CategoriaCreateComponent);
    return CategoriaCreateComponent;
}());



/***/ }),

/***/ "./src/app/categoria.service.ts":
/*!**************************************!*\
  !*** ./src/app/categoria.service.ts ***!
  \**************************************/
/*! exports provided: CategoriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaService", function() { return CategoriaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_categoria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/categoria */ "./src/models/categoria.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _models_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/entity */ "./src/models/entity.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoriaService = /** @class */ (function () {
    function CategoriaService(db) {
        this.db = db;
    }
    CategoriaService.prototype.getCategorias = function () {
        var _this = this;
        var listAllCategorias = _models_entity__WEBPACK_IMPORTED_MODULE_4__["Entity"].getAll(this.db, "categoria");
        var categoriasList = [];
        listAllCategorias.subscribe(function (categorias) {
            categorias.forEach(function (categoria) {
                _models_entity__WEBPACK_IMPORTED_MODULE_4__["Entity"].getAllFilter(_this.db, "favorito", "categoria_id", categoria.id).subscribe(function (favoritos) {
                    var c = new _models_categoria__WEBPACK_IMPORTED_MODULE_1__["Categoria"](_this.db);
                    c.nome = categoria.nome;
                    c.favoritos = favoritos;
                    categoriasList.push(c);
                });
            });
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(categoriasList);
    };
    CategoriaService.prototype.save = function (categoria) {
        categoria.add();
        //CATEGORIAS.push(categoria);
    };
    /*saveFavorito(favorito: Favorito){
        CATEGORIAS.forEach(element => {
            if(element.id==favorito.categoria_id){
              element.favoritos.push(favorito);
            }
        });
    }*/
    CategoriaService.prototype.getFavoritos = function () {
        var favoritos = [];
        _models_categoria__WEBPACK_IMPORTED_MODULE_1__["Categoria"].getAll(this.db).subscribe((function (elements) {
            elements.map(function (element) {
                favoritos = favoritos.concat(element.favoritos);
            });
        }));
        // CATEGORIAS.forEach(element => {
        //   favoritos = favoritos.concat(element.favoritos);
        // });
        return favoritos;
    };
    CategoriaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], CategoriaService);
    return CategoriaService;
}());



/***/ }),

/***/ "./src/app/favorito-create/favorito-create.component.css":
/*!***************************************************************!*\
  !*** ./src/app/favorito-create/favorito-create.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/favorito-create/favorito-create.component.html":
/*!****************************************************************!*\
  !*** ./src/app/favorito-create/favorito-create.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"create-favorito-form\">\n\n    <label>categoria\n      \n      <select [(ngModel)]=\"favorito.categoria_id\">\n        <option *ngFor=\"let c of categorias\" [ngValue]=\"c.id\" >{{c.nome}}</option>\n      </select>\n    </label>\n\n    \n  <label>titulo:\n    <input [(ngModel)]=\"favorito.titulo\" placeholder=\"titulo\">\n  </label>\n\n  <label>url:\n    <input [(ngModel)]=\"favorito.url\" placeholder=\"url\">\n  </label>\n\n  <button (click)=\"save()\">Novo</button>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/favorito-create/favorito-create.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/favorito-create/favorito-create.component.ts ***!
  \**************************************************************/
/*! exports provided: FavoritoCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritoCreateComponent", function() { return FavoritoCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _categoria_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../categoria.service */ "./src/app/categoria.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritoCreateComponent = /** @class */ (function () {
    function FavoritoCreateComponent(categoriaService) {
        this.categoriaService = categoriaService;
    }
    FavoritoCreateComponent.prototype.ngOnInit = function () {
        /*this.favorito = {id:1,titulo:"",url:""};
        this.categoriaService.getCategorias().
                    subscribe(categorias => this.categorias = categorias);*/
    };
    FavoritoCreateComponent.prototype.save = function () {
        //this.categoriaService.saveFavorito(this.favorito);
        //this.favorito = {id:1,titulo:"",url:""};
    };
    FavoritoCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favorito-create',
            template: __webpack_require__(/*! ./favorito-create.component.html */ "./src/app/favorito-create/favorito-create.component.html"),
            styles: [__webpack_require__(/*! ./favorito-create.component.css */ "./src/app/favorito-create/favorito-create.component.css")]
        }),
        __metadata("design:paramtypes", [_categoria_service__WEBPACK_IMPORTED_MODULE_1__["CategoriaService"]])
    ], FavoritoCreateComponent);
    return FavoritoCreateComponent;
}());



/***/ }),

/***/ "./src/app/favoritos-viewer/favoritos-viewer.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/favoritos-viewer/favoritos-viewer.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".favoritos ul  {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n\n.favoritos ul > li{\n    padding-top: 2%;\n}\n\n.titulo{\n    padding: 0;\n    margin: 0;\n}\n\n.categoria{\n    display: inline-block;\n    padding-left: 1%;\n}\n\n.linha{\n   width: 80%;\n   padding: 0; \n   margin: 2% 0 5% 0;\n}\n\na:visited {\n    color: #000000;\n    \n}\n\na{\n    text-decoration: none;\n    color: #000000;\n}\n\n"

/***/ }),

/***/ "./src/app/favoritos-viewer/favoritos-viewer.component.html":
/*!******************************************************************!*\
  !*** ./src/app/favoritos-viewer/favoritos-viewer.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"categoria\" *ngFor=\"let c of categorias\">\n    <h2 class=\"titulo\">{{c.nome}}</h2>\n    <hr class=\"linha\">\n    <!--<hr class=\"linha\">-->\n    <div class=\"favoritos\">\n      <ul>\n        <li *ngFor=\"let f of c.favoritos\">\n          <a href=\"{{f.url}}\" target=\"_blank\">{{f.titulo}}</a>\n        </li>\n      </ul>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/favoritos-viewer/favoritos-viewer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/favoritos-viewer/favoritos-viewer.component.ts ***!
  \****************************************************************/
/*! exports provided: FavoritosViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritosViewerComponent", function() { return FavoritosViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _categoria_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../categoria.service */ "./src/app/categoria.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritosViewerComponent = /** @class */ (function () {
    function FavoritosViewerComponent(categoriaService) {
        this.categoriaService = categoriaService;
    }
    FavoritosViewerComponent.prototype.ngOnInit = function () {
        this.getCategorias();
    };
    FavoritosViewerComponent.prototype.getCategorias = function () {
        var _this = this;
        this.categoriaService.getCategorias()
            .subscribe(function (categorias) { return _this.categorias = categorias; });
    };
    FavoritosViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favoritos-viewer',
            template: __webpack_require__(/*! ./favoritos-viewer.component.html */ "./src/app/favoritos-viewer/favoritos-viewer.component.html"),
            styles: [__webpack_require__(/*! ./favoritos-viewer.component.css */ "./src/app/favoritos-viewer/favoritos-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_categoria_service__WEBPACK_IMPORTED_MODULE_1__["CategoriaService"]])
    ], FavoritosViewerComponent);
    return FavoritosViewerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/firebase-config.ts":
/*!********************************!*\
  !*** ./src/firebase-config.ts ***!
  \********************************/
/*! exports provided: firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyBvkO4j9_5FyaIRyGG7oLKehhRv38Cg7ws",
    authDomain: "favoritos-6c870.firebaseapp.com",
    databaseURL: "https://favoritos-6c870.firebaseio.com",
    projectId: "favoritos-6c870",
    storageBucket: "favoritos-6c870.appspot.com",
    messagingSenderId: "1060222359028"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/models/categoria.ts":
/*!*********************************!*\
  !*** ./src/models/categoria.ts ***!
  \*********************************/
/*! exports provided: Categoria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categoria", function() { return Categoria; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/models/entity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Categoria = /** @class */ (function (_super) {
    __extends(Categoria, _super);
    function Categoria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Categoria;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]));



/***/ }),

/***/ "./src/models/entity.ts":
/*!******************************!*\
  !*** ./src/models/entity.ts ***!
  \******************************/
/*! exports provided: ownership, Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ownership", function() { return ownership; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

// Aluno -> Escola
// 
//
function ownership(target, property) {
    var ownership = [];
    if (this.ownership != undefined) {
        this.ownership.forEach(function (element) {
            ownership.push(new element().className());
        });
    }
    this.ownership = ownership;
}
var Entity = /** @class */ (function () {
    function Entity(fsService, params) {
        this.fsService = fsService;
        this.fireStore = fsService;
        this._build(params);
        //this.ownership = [];
    }
    Entity.isDocument = function (document) {
        if (typeof document == "object" && document != null && typeof document.toObject == "function")
            return true;
        return false;
    };
    Entity.prototype._build = function (params) {
        if (params != undefined && typeof params == "object") {
            for (var key in params) {
                if (params[key] != undefined) {
                    this[key] = params[key];
                }
            }
        }
    };
    Entity.prototype.generateOwnership = function () {
        var has = [];
        if (this.has != undefined) {
            this.has.forEach(function (element) {
                has.push(new element().className());
            });
        }
        return has;
    };
    Entity.prototype.toObject = function () {
        var _this = this;
        var x = Reflect.ownKeys(this);
        var myObj = {};
        x.forEach(function (element) {
            if (typeof _this[element] != "function" && typeof _this[element] != "object")
                myObj[element] = _this[element];
            else if (Entity.isDocument(_this[element])) {
                //myObj[this[element].className()] = this[element].toObject()
                myObj[_this[element].className()] = _this[element].id;
            }
            else if (typeof _this[element] == "object" && element == "has") {
                //myObj[element] = this.generateOwnership();
            }
        });
        return myObj;
    };
    Entity.className = function () {
        return this.toString().split('(' || /s+/)[0].split(' ' || /s+/)[1];
    };
    Entity.prototype.className = function () {
        return this.constructor.name;
    };
    Entity._documentToObject = function (fireStore, document) {
        var id;
        var data;
        try {
            if (document.payload.doc == undefined) {
                data = document.payload.data();
                id = document.payload.id;
            }
            else {
                data = document.payload.doc.data();
                id = document.payload.doc.id;
            }
            return Reflect.construct(this, [fireStore, __assign({ id: id }, data)]);
        }
        catch (e) {
            throw new Error("This document doesn't exist.");
        }
    };
    Entity._getFromSnapshot = function (fireStore, collection) {
        var _this = this;
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            var self = _this;
            collection.snapshotChanges().subscribe(function (result) {
                var documents = [];
                result.map(function (action) {
                    try {
                        var document_1 = _this._documentToObject(fireStore, action);
                        documents.push(document_1);
                    }
                    catch (e) {
                        observer.error(new Error(e));
                    }
                });
                observer.next(documents);
                observer.complete();
            });
        });
    };
    Entity.get = function (fireStore, id) {
        var _this = this;
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            var result$;
            var document = fireStore.doc(_this.className() + "/" + id);
            document.snapshotChanges().subscribe(function (result) {
                try {
                    var doc = Entity._documentToObject(fireStore, result);
                    observer.next(doc);
                    observer.complete();
                }
                catch (e) {
                    observer.error(new Error(e.message));
                }
                finally {
                }
            });
        });
    };
    Entity.getAll = function (fireStore, collectionName) {
        var _this = this;
        if (collectionName == undefined)
            collectionName = this.className();
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            var collection = fireStore.collection(collectionName);
            _this._getFromSnapshot(fireStore, collection).subscribe(function (result) {
                var documents = result;
                observer.next(documents);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    Entity.getAllFilter = function (fireStore, collectionName, key, value) {
        var _this = this;
        if (collectionName == undefined)
            collectionName = this.className();
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            var collection = fireStore.collection(collectionName, function (ref) { return ref.where(key, '==', value); });
            _this._getFromSnapshot(fireStore, collection).subscribe(function (result) {
                var documents = result;
                observer.next(documents);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    Entity.deleteAll = function (fireStore, collectionName) {
        var _this = this;
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            if (collectionName == undefined)
                collectionName = _this.className();
            var collection = fireStore.collection(collectionName);
            _this.getAll(fireStore, collectionName).subscribe(function (result) {
                var documents = [];
                for (var i = 0; i < result.length; i++) {
                    documents.push(result[i].delete(collectionName));
                }
                Promise.all(documents).then(function (result) {
                    observer.next();
                    observer.complete();
                });
            }, function (err) {
                observer.error(err);
            });
        });
    };
    Entity.prototype.delete = function (collectionName) {
        var _this = this;
        if (collectionName == undefined)
            collectionName = this.className();
        var collection = this.fireStore.collection(collectionName);
        var has = this.generateOwnership();
        has.forEach(function (element) {
            Entity.deleteAll(_this.fireStore, element);
        });
        return collection.doc(this.id).delete();
    };
    /**
     * Returns all documents which belongs to the document.
     */
    Entity.prototype.relationships = function () {
        var x = Reflect.ownKeys(this);
        var myObj = [];
        for (var key in x) {
            if (Entity.isDocument(this[x[key]])) {
                myObj[this[x[key]].className()] = this[x[key]];
            }
        }
        return myObj;
    };
    /**
     * Returns the size of document's inside a collection.
     */
    Entity.count = function (fireStore, collectionName) {
        var _this = this;
        if (collectionName == undefined)
            collectionName = this.className();
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            var collection = fireStore.collection(collectionName);
            _this._getFromSnapshot(fireStore, collection).subscribe(function (result) {
                observer.next(result.length);
                observer.complete();
            });
        });
    };
    /**
     * Save all documents which belongs to the document.
     * Not to be called directly. This is called by save() to recursively save all documents.
     */
    Entity.prototype.saveRelationships = function () {
        var promises = [];
        var relationships = this.relationships();
        for (var key in relationships) {
            if (relationships[key].id != undefined) {
                // TODO: update
            }
            else {
                promises.push(relationships[key].add());
            }
        }
        return Promise.all(promises);
    };
    Entity.prototype.add = function () {
        //let inspector = ReflectiveInjector.resolveAndCreate([AngularFirestore]) 
        //let firestore:AngularFirestore = inspector.get(AngularFirestore);
        var collection = this.fireStore.collection(this.className());
        var _this = this; // this is lost in promise.
        return new Promise(function (resolve, reject) {
            var savingRelationships = _this.saveRelationships();
            savingRelationships.then(function (result) {
                collection.add(_this.toObject()).then(function (result) {
                    _this.id = result.id;
                    resolve(_this);
                });
            });
        });
    };
    return Entity;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/juniorpires/favoritos/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map