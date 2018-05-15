webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = "p {\r\n  float: left;\r\n  white-space: pre;\r\n  width: 1200px;\r\n  font-size: 1.5em;\r\n  background-color: rgba(0,0,0,0.7);\r\n  margin-left: 10px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #b0cdd9;\r\n}\r\n\r\na:hover {\r\n  color: #83c1d9;\r\n  text-decoration: underline;\r\n}\r\n\r\n#container {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n}\r\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\r\n\r\n<div id=\"container\">\r\n    <p>\r\n      Welcome.\r\n\r\n      Lantern Dragon Works is a small collection fictional of novels inspired by Japanese visual novels and themes.\r\n\r\n      All credit for creation, story-writing, and characters go to the sole author, deltaOG (long may he live).\r\n\r\n      For now, this website is still in its infancy, as are my development skills. Therefore, if you\r\n      would like a more complete experience, on a more worthy interface, please visit this <a href=\"https://lanterndragonworks.wordpress.com/\">WordPress page</a> for now.\r\n      Though be sure to come back and visit again when this project becomes awesome.\r\n\r\n      Regards, and enjoy your stay,\r\n\r\n      A lowly member of the Lantern Dragons Works team.\r\n    </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stories_stories_component__ = __webpack_require__("./src/app/stories/stories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gallery_gallery_component__ = __webpack_require__("./src/app/gallery/gallery.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'stories', component: __WEBPACK_IMPORTED_MODULE_4__stories_stories_component__["a" /* StoriesComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_5__gallery_gallery_component__["a" /* GalleryComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stories_stories_component__ = __webpack_require__("./src/app/stories/stories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gallery_gallery_component__ = __webpack_require__("./src/app/gallery/gallery.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__stories_stories_component__["a" /* StoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__gallery_gallery_component__["a" /* GalleryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n\n<div class=\"container\">\n\n</div>\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gallery',
            template: __webpack_require__("./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__("./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  font-family: Merienda;\r\n  font-weight: 400;\r\n  color: #83c1d9;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  text-shadow: 1px 1px #2a4353;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.menu {\r\n  margin: 20px;\r\n  padding-left: 10px;\r\n  font-size: 4em;\r\n  width: 400px;\r\n  background: rgba(169, 169, 236, 0.2);\r\n}\r\n\r\n.main-menu nav{\r\n  margin-top: 50px;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  list-style-type: none;\r\n  white-space: nowrap;\r\n  float: left;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  height: 100%;\r\n  background-color: rgba(0,0,0,0.7);\r\n  min-height: 100vh;\r\n}\r\n\r\n.menu:hover, .active {\r\n  color: #ff362e;\r\n  padding-left: 15px;\r\n  margin-right: 15px;\r\n}\r\n\r\n#title {\r\n  font-size: 8em;\r\n  white-space: nowrap;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <a routerLink=\"\"><h1 id=\"title\">Lantern Dragon Works</h1></a>\r\n\r\n  <div class =\"main-menu\">\r\n    <nav>\r\n      <a *ngFor=\"let option of menuOptions\"\r\n         routerLink=\"/{{option}}\"><h1 class=\"menu\">{{option}}</h1></a>\r\n    </nav>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.menuOptions = ['stories', 'gallery', 'about', 'extras'];
    }
    HomeComponent.prototype.fadeLeft = function () {
        $('.menu').fadeOut(1000, function () {
            console.log('finished fading');
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".nav-link {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n.navbar {\r\n  background: transparent;\r\n}\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm fixed-bottom\">\r\n  <ul class=\"navbar-nav\">\r\n    <li class=\"nav-item active\">\r\n      <a class=\"nav-link\" href=\"#\">Active</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#\">Link</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#\">Link</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/stories/stories.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n  background: url('cartoon_scroll.f80e33e567e6cae8e913.png') no-repeat;\r\n  background-size: 600px;\r\n  margin-left: 30px;\r\n  float: left;\r\n  width: 600px;\r\n  height: 100vh;\r\n  text-align: center;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 80px 180px 0 180px;\r\n  font-family: Merienda;\r\n  color: #7d1e0c;\r\n}\r\n"

/***/ }),

/***/ "./src/app/stories/stories.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n\n<div class=\"container\">\n  <p class=\"text-block\">So sorry, turns out theres nothing here yet.</p>\n</div>\n"

/***/ }),

/***/ "./src/app/stories/stories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoriesComponent = /** @class */ (function () {
    function StoriesComponent() {
    }
    StoriesComponent.prototype.ngOnInit = function () {
    };
    StoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stories',
            template: __webpack_require__("./src/app/stories/stories.component.html"),
            styles: [__webpack_require__("./src/app/stories/stories.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StoriesComponent);
    return StoriesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map