(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/VSc":
/*!********************************!*\
  !*** ./src/app/point/brick.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "4Zia");

class Brick extends _point__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(x, y) {
        super(x, y);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Brick);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/czesiek/Desktop/bouncingBall1/bouncing-ball/src/main.ts */"zUnb");


/***/ }),

/***/ "2TRj":
/*!*****************************************!*\
  !*** ./src/app/utils/betweenTwoNums.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * tests is number is between other two numbers
 */
function isBetween(testedNum, lowerIncl, upperIncl) {
    return (testedNum >= lowerIncl) && (testedNum <= upperIncl);
}
/* harmony default export */ __webpack_exports__["default"] = (isBetween);


/***/ }),

/***/ "4Zia":
/*!********************************!*\
  !*** ./src/app/point/point.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    getX() {
        return this._x;
    }
    setX(newX) {
        this._x = newX;
    }
    getY() {
        return this._y;
    }
    setY(newY) {
        this._y = newY;
    }
    getPos() {
        return [this._x, this._y];
    }
    equalPosition(other) {
        return this._x === other._x && this._y === other._y;
    }
    add(other) {
        let newX = this.getX() + other.getX();
        let newY = this.getY() + other.getY();
        return new Point(newX, newY);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Point);


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _gameBoard_gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard/gameBoard */ "q2bA");
/* harmony import */ var _utils_betweenTwoNums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/betweenTwoNums */ "2TRj");
/* harmony import */ var _point_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point/point */ "4Zia");
/* harmony import */ var _point_ball__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point/ball */ "t0yH");
/* harmony import */ var _point_brick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./point/brick */ "/VSc");
/* harmony import */ var _utils_randInt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/randInt */ "iG7A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");

// GameBoard imported only for better autocompletion
// consider removing it after everything is done;









const _c0 = function (a0, a1) { return [a0, a1]; };
function AppComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cId_r5 = ctx.index;
    const rId_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.getClassForField(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, rId_r2, cId_r5)));
} }
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_5_div_1_Template, 2, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r1);
} }
class AppComponent {
    constructor() {
        this.title = 'bouncing-ball';
        this.gameBoard = _gameBoard_gameBoard__WEBPACK_IMPORTED_MODULE_1__["singelton"].getGameBoardInstance();
        this.shift = new _point_point__WEBPACK_IMPORTED_MODULE_3__["default"](1, 1);
        this.initialBall = this.gameBoard.getBall();
        this.shouldBallBeStopped = false;
        this.gameStarted = false;
    }
    getClassForField(pos) {
        if (this.gameBoard.getContent(pos) instanceof _point_brick__WEBPACK_IMPORTED_MODULE_5__["default"]) {
            return "boarder";
        }
        else if (this.gameBoard.getContent(pos) instanceof _point_ball__WEBPACK_IMPORTED_MODULE_4__["default"]) {
            return "ball";
        }
        else {
            return "empty";
        }
    }
    collisionOnAxis(pos, axis) {
        if (axis === 'x') {
            return !Object(_utils_betweenTwoNums__WEBPACK_IMPORTED_MODULE_2__["default"])(pos[0], 1, this.gameBoard.getNRows() - 2);
        }
        else {
            return !Object(_utils_betweenTwoNums__WEBPACK_IMPORTED_MODULE_2__["default"])(pos[1], 1, this.gameBoard.getNCols() - 2);
        }
    }
    collisionOnAnyAxis(pos) {
        return this.collisionOnAxis(pos, 'x') || this.collisionOnAxis(pos, 'y');
    }
    changeShift(option) {
        switch (option) {
            case 1:
                this.shift = new _point_point__WEBPACK_IMPORTED_MODULE_3__["default"](-1, -1);
                break;
            case 2:
                this.shift = new _point_point__WEBPACK_IMPORTED_MODULE_3__["default"](-1, 1);
                break;
            case 3:
                this.shift = new _point_point__WEBPACK_IMPORTED_MODULE_3__["default"](1, -1);
                break;
            default:
                this.shift = new _point_point__WEBPACK_IMPORTED_MODULE_3__["default"](1, 1);
                break;
        }
    }
    /**
     * detects collisions of someBall position with the walls of gameBoard
     * changes this.shift X and/or Y coordinate (negates it)
     */
    changeShiftIfCollision(someBall) {
        if (this.collisionOnAxis(someBall.getPos(), 'x')) {
            this.shift.setX(this.shift.getX() * -1);
        }
        if (this.collisionOnAxis(someBall.getPos(), 'y')) {
            this.shift.setY(this.shift.getY() * -1);
        }
    }
    getBallAtWithItsXYRandom() {
        let newX = Object(_utils_randInt__WEBPACK_IMPORTED_MODULE_6__["default"])(1, this.gameBoard.getNRows() - 1);
        let newY = Object(_utils_randInt__WEBPACK_IMPORTED_MODULE_6__["default"])(1, this.gameBoard.getNCols() - 1);
        return new _point_ball__WEBPACK_IMPORTED_MODULE_4__["default"](newX, newY);
    }
    setStartingBallAtRandomPosition() {
        let curBall = this.gameBoard.getBall();
        let newBall;
        do {
            newBall = this.getBallAtWithItsXYRandom();
        } while (curBall.equalPosition(newBall));
        this.gameBoard.setObjAtBoard(new _point_point__WEBPACK_IMPORTED_MODULE_3__["default"](curBall.getX(), curBall.getY()));
        this.gameBoard.setObjAtBoard(newBall);
        this.initialBall = newBall;
    }
    moveBallByOneField() {
        let curBall = this.gameBoard.getBall();
        let [bRow, bCol] = curBall.getPos();
        let newBall; // where ball will be in the next move
        do {
            newBall = curBall.add(this.shift);
            this.changeShiftIfCollision(newBall);
        } while (this.collisionOnAnyAxis(newBall.getPos()));
        this.gameBoard.setObjAtBoard(new _point_point__WEBPACK_IMPORTED_MODULE_3__["default"](bRow, bCol));
        this.gameBoard.setObjAtBoard(newBall);
        this.shouldBallBeStopped = newBall.equalPosition(this.initialBall);
    }
    initializeGameBoard() {
        this.gameBoard.initializeBoard();
    }
    /**
     * sets ball into motion
     * sets this.internalId = to interval id from setInterval
     * that it uses internally
     */
    setBallIntoMotion() {
        let intervalId = setInterval(() => {
            this.gameStarted = true;
            this.moveBallByOneField();
            if (this.shouldBallBeStopped) {
                this.stopTheBall();
            }
        }, 200);
        this.intervalId = intervalId;
    }
    stopTheBall() {
        clearInterval(this.intervalId);
    }
    ngOnInit() {
        this.initializeGameBoard();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 47, vars: 3, consts: [[1, "gameboard"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], ["type", "button", 3, "disabled", "click"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bouncing ball (description):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Set ball into motion by pressing the start button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " The ball will stop automatically once it reaches its starting position ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Change movement direction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_21_listener() { return ctx.changeShift(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u2196");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_26_listener() { return ctx.changeShift(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u2197");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_30_listener() { return ctx.changeShift(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u2199");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_35_listener() { return ctx.changeShift(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u2198");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_40_listener() { return ctx.setStartingBallAtRandomPosition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Set ball at random position ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_44_listener() { return ctx.setBallIntoMotion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Set ball into motion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gameBoard.getGameBoard());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.gameStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.gameStarted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: [".gameboard[_ngcontent-%COMP%] {\n  \n}\n\n.empty[_ngcontent-%COMP%] {\n  width: 3.6em;\n  height: 3.6em;\n  float: left;\n  background-color: white;\n  \n  border: 0.2em white solid;\n}\n\n.boarder[_ngcontent-%COMP%] {\n  width: 3.6em;\n  height: 3.6em;\n  float: left;\n  background-color: darkgray;\n  border: 0.2em white solid;\n}\n\n.ball[_ngcontent-%COMP%] {\n  width: 3.6em;\n  height: 3.6em;\n  float: left;\n  background-color: #FBB917;\n  border-radius: 50%;\n  border: 0.2em white solid;\n}\n\nbutton[_ngcontent-%COMP%] {\n    background-color: #008CBA; \n    border: none;\n    border-radius: 0.4em;\n    color: white;\n    padding: 0.4em 0.8em;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 1em;\n    font-weight: bold;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    background-color: #3566e4; \n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n    cursor: auto;\n    background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLCtCQUErQjtFQUMvQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUIsRUFBRSxTQUFTO0lBQ3BDLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QixFQUFFLFNBQVM7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0FBQy9CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWVib2FyZCB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM5OEFGQzc7ICovXG59XG5cbi5lbXB0eSB7XG4gIHdpZHRoOiAzLjZlbTtcbiAgaGVpZ2h0OiAzLjZlbTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjOThBRkM3OyAqL1xuICBib3JkZXI6IDAuMmVtIHdoaXRlIHNvbGlkO1xufVxuXG4uYm9hcmRlciB7XG4gIHdpZHRoOiAzLjZlbTtcbiAgaGVpZ2h0OiAzLjZlbTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xuICBib3JkZXI6IDAuMmVtIHdoaXRlIHNvbGlkO1xufVxuXG4uYmFsbCB7XG4gIHdpZHRoOiAzLjZlbTtcbiAgaGVpZ2h0OiAzLjZlbTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkI5MTc7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAwLjJlbSB3aGl0ZSBzb2xpZDtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Q0JBOyAvKiBibHVlICovXG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNGVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwLjRlbSAwLjhlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1NjZlNDsgLyogYmx1ZSAqL1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "W4zx":
/*!****************************************!*\
  !*** ./src/app/gameBoard/examInput.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// tablica wymagana przez Karola
const board = [
    ["X", "X", "X", "X", "X", "X", "X"],
    ["X", "1", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "X", "X", "X", "X", "X", "X"],
];
/* harmony default export */ __webpack_exports__["default"] = (board);


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "iG7A":
/*!**********************************!*\
  !*** ./src/app/utils/randInt.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * python like randInt
 * returns random int from given range (incl-excl)
 * @param {number}  min - minimum (incl)
 * @param {number}  max - maximum (excl)
 * @returns {number} random value from a given range
 */
function randInt(min, max) {
    let result = 0;
    for (let i = 0; i < 2; i++) {
        if (arguments[i] < 0) {
            throw new Error("range must not include negative numbers");
        }
    }
    if (arguments.length === 1) {
        max = min;
        min = 0;
    }
    // floats protection
    min = Math.ceil(min);
    // should always be true,
    // but the stricter angular checker requires me to do that way
    if (max) {
        max = Math.floor(max);
        result = Math.floor(Math.random() * (max - min)) + min;
    }
    return result;
}
/* harmony default export */ __webpack_exports__["default"] = (randInt);


/***/ }),

/***/ "q2bA":
/*!****************************************!*\
  !*** ./src/app/gameBoard/gameBoard.ts ***!
  \****************************************/
/*! exports provided: GameBoard, singelton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameBoard", function() { return GameBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singelton", function() { return singelton; });
/* harmony import */ var _examInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examInput */ "W4zx");
/* harmony import */ var _point_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../point/point */ "4Zia");
/* harmony import */ var _point_ball__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../point/ball */ "t0yH");
/* harmony import */ var _point_brick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../point/brick */ "/VSc");




class GameBoard {
    constructor() {
        this._gameBoard = [];
        this._ball = new _point_ball__WEBPACK_IMPORTED_MODULE_2__["default"](1, 1);
        this.initializeBoard();
    }
    // initialize board with required in task pattern
    initializeBoard() {
        this._gameBoard = [];
        for (let r = 0; r < _examInput__WEBPACK_IMPORTED_MODULE_0__["default"].length; r++) {
            let row = [];
            for (let c = 0; c < _examInput__WEBPACK_IMPORTED_MODULE_0__["default"][r].length; c++) {
                if (_examInput__WEBPACK_IMPORTED_MODULE_0__["default"][r][c] === "X") {
                    row.push(new _point_brick__WEBPACK_IMPORTED_MODULE_3__["default"](r, c));
                }
                else if (_examInput__WEBPACK_IMPORTED_MODULE_0__["default"][r][c] === "1") {
                    this._ball = new _point_ball__WEBPACK_IMPORTED_MODULE_2__["default"](r, c);
                    row.push(this._ball);
                }
                else {
                    row.push(new _point_point__WEBPACK_IMPORTED_MODULE_1__["default"](r, c));
                }
            }
            this._gameBoard.push(row);
        }
    }
    getGameBoard() {
        return this._gameBoard;
    }
    getBall() {
        return this._ball;
    }
    setObjAtBoard(obj) {
        let [row, col] = obj.getPos();
        if (obj instanceof _point_ball__WEBPACK_IMPORTED_MODULE_2__["default"]) {
            this._ball = obj;
        }
        this._gameBoard[row][col] = obj;
    }
    getContent(pos) {
        let [row, col] = pos;
        return this._gameBoard[row][col];
    }
    getNCols() {
        // all rows are of equal length
        return this._gameBoard[0].length;
    }
    getNRows() {
        return this._gameBoard.length;
    }
}
const singelton = (function () {
    let instance; // no initialization, so undefined
    function init() {
        return new GameBoard();
    }
    function getInstance() {
        if (!Boolean(instance)) {
            instance = init();
        }
        return instance;
    }
    return {
        getGameBoardInstance: getInstance
    };
})();



/***/ }),

/***/ "t0yH":
/*!*******************************!*\
  !*** ./src/app/point/ball.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "4Zia");

class Ball extends _point__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(x, y) {
        super(x, y);
    }
    add(other) {
        let newX = this.getX() + other.getX();
        let newY = this.getY() + other.getY();
        return new Ball(newX, newY);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Ball);


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map