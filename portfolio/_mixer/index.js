var app;
(function (app) {
    'use strict';
    var MainController = /** @class */ (function () {
        function MainController($mdDialog) {
            var _this = this;
            this.$mdDialog = $mdDialog;
            this.r = 200;
            this.g = 200;
            this.b = 200;
            this.init = function () {
                _this.onColorChange();
            };
            this.onColorChange = function () {
                var rgbString = 'rgb(' + _this.r + ',' +
                    _this.g + ',' + _this.b + ')';
                var color = new fabric.Color(rgbString);
                _this.colorHex = '#' + color.toHex();
                _this.colorHsl = color.toHsl();
            };
            this.init();
        }
        MainController.$inject = ['$mdDialog'];
        return MainController;
    }());
    angular
        .module('app', ['ngMaterial'])
        .controller('MainController', MainController);
})(app || (app = {}));