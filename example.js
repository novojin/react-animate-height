require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');
var AnimateHeight = require('react-animate-height');

var Example = (function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example() {
    _classCallCheck(this, Example);

    _get(Object.getPrototypeOf(Example.prototype), 'constructor', this).call(this);

    this.state = {
      height: 0,
      height2: 'auto'
    };
  }

  _createClass(Example, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var _state = this.state;
      var height = _state.height;
      var height2 = _state.height2;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          'Demo, starting height = 0'
        ),
        React.createElement(
          'p',
          null,
          'Current Height: ',
          React.createElement(
            'b',
            null,
            height !== null ? height : 'null'
          )
        ),
        React.createElement(
          'p',
          { className: '' },
          'Set height to:'
        ),
        React.createElement(
          'div',
          { className: 'buttons' },
          React.createElement(
            'button',
            { className: 'btn btn-sm btn-dark', onClick: function () {
                return _this.setState({ height: 0 });
              } },
            '0'
          ),
          React.createElement(
            'button',
            { className: 'btn btn-sm btn-dark', onClick: function () {
                return _this.setState({ height: 100 });
              } },
            '100'
          ),
          React.createElement(
            'button',
            { className: 'btn btn-sm btn-dark', onClick: function () {
                return _this.setState({ height: 200 });
              } },
            '200'
          ),
          React.createElement(
            'button',
            { className: 'btn btn-sm btn-dark', onClick: function () {
                return _this.setState({ height: 300 });
              } },
            '300'
          ),
          React.createElement(
            'button',
            { className: 'btn btn-sm btn-dark', onClick: function () {
                return _this.setState({ height: 'auto' });
              } },
            'auto'
          )
        ),
        React.createElement(
          AnimateHeight,
          {
            height: height,
            className: 'demo demo-1'
          },
          React.createElement(
            'div',
            { className: 'demo-content' },
            React.createElement(
              'p',
              null,
              'It looked serious, but we in California, like everywhere else, were not alarmed. We were sure that the bacteriologists would find a way to overcome this new germ, just as they had overcome other germs in the past. But the trouble was the astonishing quickness with which this germ destroyed human beings, and the fact that it inevitably killed any human body it entered. No one ever recovered. There was the old Asiatic cholera, when you might eat dinner with a well man in the evening, and the next morning, if you got up early enough, you would see him being hauled by your window in the death-cart. But this new plague was quicker than that—much quicker.'
            ),
            React.createElement(
              'p',
              null,
              'From the moment of the first signs of it, a man would be dead in an hour. Some lasted for several hours. Many died within ten or fifteen minutes of the appearance of the first signs.'
            ),
            React.createElement(
              'p',
              null,
              'The heart began to beat faster and the heat of the body to increase. Then came the scarlet rash, spreading like wildfire over the face and body. Most persons never noticed the increase in heat and heart-beat, and the first they knew was when the scarlet rash came out. Usually, they had convulsions at the time of the appearance of the rash. But these convulsions did not last long and were not very severe. If one lived through them, he became perfectly quiet, and only did he feel a numbness swiftly creeping up his body from the feet. The heels became numb first, then the legs, and hips, and when the numbness reached as high as his heart he died. They did not rave or sleep. Their minds always remained cool and calm up to the moment their heart numbed and stopped. And another strange thing was the rapidity of decomposition. No sooner was a person dead than the body seemed to fall to pieces, to fly apart, to melt away even as you looked at it. That was one of the reasons the plague spread so rapidly. All the billions of germs in a corpse were so immediately released.'
            )
          )
        ),
        React.createElement(
          'h3',
          null,
          'Demo, starting height = auto'
        ),
        React.createElement(
          'p',
          null,
          'Current Height: ',
          React.createElement(
            'b',
            null,
            height !== null ? height2 : 'null'
          )
        ),
        React.createElement(
          'p',
          { className: '' },
          'Set height to:'
        ),
        React.createElement(
          'div',
          { className: 'buttons' },
          React.createElement(
            'button',
            { className: 'btn btn-sm btn-dark', onClick: function () {
                return _this.setState({ height2: 0 });
              } },
            '0'
          ),
          React.createElement(
            'button',
            { className: 'btn btn-sm btn-dark', onClick: function () {
                return _this.setState({ height2: 100 });
              } },
            '100'
          ),
          React.createElement(
            'button',
            { className: 'btn btn-sm btn-dark', onClick: function () {
                return _this.setState({ height2: 200 });
              } },
            '200'
          ),
          React.createElement(
            'button',
            { className: 'btn btn-sm btn-dark', onClick: function () {
                return _this.setState({ height2: 300 });
              } },
            '300'
          ),
          React.createElement(
            'button',
            { className: 'btn btn-sm btn-dark', onClick: function () {
                return _this.setState({ height2: 'auto' });
              } },
            'auto'
          )
        ),
        React.createElement(
          AnimateHeight,
          {
            height: height2,
            className: 'demo demo-2'
          },
          React.createElement(
            'div',
            { className: 'demo-content' },
            React.createElement(
              'p',
              null,
              'It looked serious, but we in California, like everywhere else, were not alarmed. We were sure that the bacteriologists would find a way to overcome this new germ, just as they had overcome other germs in the past. But the trouble was the astonishing quickness with which this germ destroyed human beings, and the fact that it inevitably killed any human body it entered. No one ever recovered. There was the old Asiatic cholera, when you might eat dinner with a well man in the evening, and the next morning, if you got up early enough, you would see him being hauled by your window in the death-cart. But this new plague was quicker than that—much quicker.'
            ),
            React.createElement(
              'p',
              null,
              'From the moment of the first signs of it, a man would be dead in an hour. Some lasted for several hours. Many died within ten or fifteen minutes of the appearance of the first signs.'
            ),
            React.createElement(
              'p',
              null,
              'The heart began to beat faster and the heat of the body to increase. Then came the scarlet rash, spreading like wildfire over the face and body. Most persons never noticed the increase in heat and heart-beat, and the first they knew was when the scarlet rash came out. Usually, they had convulsions at the time of the appearance of the rash. But these convulsions did not last long and were not very severe. If one lived through them, he became perfectly quiet, and only did he feel a numbness swiftly creeping up his body from the feet. The heels became numb first, then the legs, and hips, and when the numbness reached as high as his heart he died. They did not rave or sleep. Their minds always remained cool and calm up to the moment their heart numbed and stopped. And another strange thing was the rapidity of decomposition. No sooner was a person dead than the body seemed to fall to pieces, to fly apart, to melt away even as you looked at it. That was one of the reasons the plague spread so rapidly. All the billions of germs in a corpse were so immediately released.'
            )
          )
        )
      );
    }
  }]);

  return Example;
})(React.Component);

ReactDOM.render(React.createElement(Example, null), document.getElementById('demo'));

},{"react":undefined,"react-animate-height":undefined,"react-dom":undefined}]},{},[1]);
