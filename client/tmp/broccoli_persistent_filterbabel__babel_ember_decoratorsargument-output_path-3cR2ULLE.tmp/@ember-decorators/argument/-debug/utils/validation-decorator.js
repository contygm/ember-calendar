define('@ember-decorators/argument/-debug/utils/validation-decorator', ['exports', '@ember-decorators/argument/-debug/utils/computed', '@ember-decorators/argument/-debug/utils/object', '@ember-decorators/argument/-debug/utils/validations-for', '@ember-decorators/argument/-debug/errors'], function (exports, _computed, _object, _validationsFor, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = validationDecorator;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new _errors.TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new _errors.TypeError("Cannot call a class as a function");
    }
  }

  var notifyPropertyChange = Ember.notifyPropertyChange || Ember.propertyDidChange;

  function guardBind(fn) {
    if (typeof fn === 'function') {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return fn.bind.apply(fn, args);
    }
  }

  var ValidatedProperty = function () {
    function ValidatedProperty(_ref2) {
      var originalValue = _ref2.originalValue,
          klass = _ref2.klass,
          keyName = _ref2.keyName,
          isImmutable = _ref2.isImmutable,
          typeValidators = _ref2.typeValidators;

      _classCallCheck(this, ValidatedProperty);

      this.isDescriptor = true;

      this.klass = klass;
      this.originalValue = originalValue;
      this.isImmutable = isImmutable;
      this.typeValidators = typeValidators;

      runValidators(typeValidators, klass, keyName, originalValue, 'init');
    }

    ValidatedProperty.prototype.get = function get(obj, keyName) {
      var klass = this.klass,
          originalValue = this.originalValue,
          isImmutable = this.isImmutable,
          typeValidators = this.typeValidators;


      var newValue = this._get(obj, keyName);

      if (isImmutable && newValue !== originalValue) {
        throw new _errors.MutabilityError('Immutable value ' + klass.name + '#' + keyName + ' changed by underlying computed, original value: ' + originalValue + ', new value: ' + newValue);
      }

      if (typeValidators.length > 0) {
        runValidators(typeValidators, klass, keyName, newValue, 'get');
      }

      return newValue;
    };

    ValidatedProperty.prototype.set = function set(obj, keyName, value) {
      var klass = this.klass,
          isImmutable = this.isImmutable,
          typeValidators = this.typeValidators;


      if (isImmutable) {
        throw new _errors.MutabilityError('Attempted to set ' + klass.name + '#' + keyName + ' to the value ' + value + ' but the field is immutable');
      }

      var newValue = this._set(obj, keyName, value);

      if (typeValidators.length > 0) {
        runValidators(typeValidators, klass, keyName, newValue, 'set');
      }

      return newValue;
    };

    return ValidatedProperty;
  }();

  var StandardValidatedProperty = function (_ValidatedProperty) {
    _inherits(StandardValidatedProperty, _ValidatedProperty);

    function StandardValidatedProperty(_ref3) {
      var originalValue = _ref3.originalValue;

      _classCallCheck(this, StandardValidatedProperty);

      var _this = _possibleConstructorReturn(this, _ValidatedProperty.apply(this, arguments));

      _this.cachedValue = originalValue;
      return _this;
    }

    StandardValidatedProperty.prototype._get = function _get() {
      return this.cachedValue;
    };

    StandardValidatedProperty.prototype._set = function _set(obj, keyName, value) {
      if (value === this.cachedValue) return value;

      this.cachedValue = value;

      notifyPropertyChange(obj, keyName);

      return this.cachedValue;
    };

    return StandardValidatedProperty;
  }(ValidatedProperty);

  var NativeComputedValidatedProperty = function (_ValidatedProperty2) {
    _inherits(NativeComputedValidatedProperty, _ValidatedProperty2);

    function NativeComputedValidatedProperty(_ref4) {
      var desc = _ref4.desc;

      _classCallCheck(this, NativeComputedValidatedProperty);

      var _this2 = _possibleConstructorReturn(this, _ValidatedProperty2.apply(this, arguments));

      _this2.desc = desc;
      return _this2;
    }

    NativeComputedValidatedProperty.prototype._get = function _get(obj) {
      return this.desc.get.call(obj);
    };

    NativeComputedValidatedProperty.prototype._set = function _set(obj, keyName, value) {
      // By default Ember.get will check to see if the value has changed before setting
      // and calling propertyDidChange. In order to not change behavior, we must do the same
      var currentValue = this._get(obj);

      if (value === currentValue) return value;

      this.desc.set.call(obj, value);

      notifyPropertyChange(obj, keyName);

      return this._get(obj);
    };

    return NativeComputedValidatedProperty;
  }(ValidatedProperty);

  var ComputedValidatedProperty = function (_ValidatedProperty3) {
    _inherits(ComputedValidatedProperty, _ValidatedProperty3);

    function ComputedValidatedProperty(_ref5) {
      var desc = _ref5.desc;

      _classCallCheck(this, ComputedValidatedProperty);

      var _this3 = _possibleConstructorReturn(this, _ValidatedProperty3.apply(this, arguments));

      _this3.desc = desc;

      _this3.setup = guardBind(desc.setup, desc);
      _this3.teardown = guardBind(desc.teardown, desc);
      _this3.willChange = guardBind(desc.willChange, desc);
      _this3.didChange = guardBind(desc.didChange, desc);
      _this3.willWatch = guardBind(desc.willWatch, desc);
      _this3.didUnwatch = guardBind(desc.didUnwatch, desc);
      return _this3;
    }

    ComputedValidatedProperty.prototype._get = function _get(obj, keyName) {
      return this.desc.get(obj, keyName);
    };

    ComputedValidatedProperty.prototype._set = function _set(obj, keyName, value) {
      if (true) {
        return this.desc.set(obj, keyName, value);
      }

      this.desc.set(obj, keyName, value);

      var _Ember$meta = Ember.meta(obj),
          cache = _Ember$meta.cache;

      return (typeof cache === 'undefined' ? 'undefined' : _typeof(cache)) === 'object' ? cache[keyName] : value;
    };

    return ComputedValidatedProperty;
  }(ValidatedProperty);

  function runValidators(validators, klass, key, value, phase) {
    validators.forEach(function (validator) {
      if (validator(value) === false) {
        var formattedValue = typeof value === 'string' ? '\'' + value + '\'' : value;
        throw new _errors.TypeError(klass.name + '#' + key + ' expected value of type ' + validator + ' during \'' + phase + '\', but received: ' + formattedValue);
      }
    });
  }

  function wrapField(klass, instance, validations, keyName) {
    var _validations$keyName = validations[keyName],
        isImmutable = _validations$keyName.isImmutable,
        isRequired = _validations$keyName.isRequired,
        typeValidators = _validations$keyName.typeValidators,
        typeRequired = _validations$keyName.typeRequired;


    if (isRequired && instance[keyName] === undefined && !instance.hasOwnProperty(keyName)) {
      throw new _errors.RequiredFieldError(klass.name + '#' + keyName + ' is a required value, but was not provided. You can provide it as an argument, as a class field, or in the constructor');
    }

    // opt out early if no further validations
    if (!isImmutable && typeValidators.length === 0) {
      if (typeValidators.length === 0 && typeRequired) {
        throw new _errors.TypeError(klass.name + '#' + keyName + ' requires a type, add one using the @type decorator');
      }

      return;
    }

    var originalValue = instance[keyName];
    var meta = Ember.meta(instance);

    if (false) {
      var possibleDesc = meta.peekDescriptors(keyName);

      if (possibleDesc !== undefined) {
        originalValue = possibleDesc;
      }
    }

    if ((0, _computed.isDescriptorTrap)(originalValue)) {
      originalValue = originalValue.__DESCRIPTOR__;
    }

    var validatedProperty = void 0;

    if ((0, _computed.isDescriptor)(originalValue)) {
      var desc = originalValue;

      originalValue = desc.get(instance, keyName);

      validatedProperty = new ComputedValidatedProperty({
        desc: desc, isImmutable: isImmutable, keyName: keyName, klass: klass, originalValue: originalValue, typeValidators: typeValidators
      });
    } else {
      var _desc = (0, _object.getPropertyDescriptor)(instance, keyName);

      if ((typeof _desc.get === 'function' || typeof _desc.set === 'function') && !(0, _computed.isMandatorySetter)(_desc.set)) {
        validatedProperty = new NativeComputedValidatedProperty({
          desc: _desc, isImmutable: isImmutable, keyName: keyName, klass: klass, originalValue: originalValue, typeValidators: typeValidators
        });
      } else {
        validatedProperty = new StandardValidatedProperty({
          isImmutable: isImmutable, keyName: keyName, klass: klass, originalValue: originalValue, typeValidators: typeValidators
        });
      }
    }

    if (false) {
      // We're trying to fly under the radar here, so don't use Ember.defineProperty.
      // Ember should think the property is completely unchanged.
      Object.defineProperty(instance, keyName, {
        configurable: true,
        enumerable: true,
        get: function get() {
          return validatedProperty.get(this, keyName);
        }
      });

      meta.writeDescriptors(keyName, validatedProperty);
    } else {
      // We're trying to fly under the radar here, so don't use Ember.defineProperty.
      // Ember should think the property is completely unchanged.
      Object.defineProperty(instance, keyName, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: validatedProperty
      });
    }
  }

  var ValidatingCreateMixin = Ember.Mixin.create({
    create: function create() {
      var instance = this._super.apply(this, arguments);

      var klass = this;
      var prototype = Object.getPrototypeOf(instance);
      var validations = (0, _validationsFor.getValidationsFor)(prototype);

      if (!validations) {
        return instance;
      }

      for (var key in validations) {
        wrapField(klass, instance, validations, key);
      }

      return instance;
    }
  });

  Ember.Object.reopenClass(ValidatingCreateMixin);

  // Reopening a parent class does not apply the mixin to existing child classes,
  // so we need to apply it directly
  ValidatingCreateMixin.apply(Ember.Component);
  ValidatingCreateMixin.apply(Ember.Service);
  ValidatingCreateMixin.apply(Ember.Controller);

  if (requireModule.has('ember-data')) {
    var DS = requireModule('ember-data').default;

    if (DS.Model) {
      ValidatingCreateMixin.apply(DS.Model);
    }
  }

  function validationDecorator(fn) {
    return function (target, key, desc, options) {
      var validations = (0, _validationsFor.getValidationsForKey)(target, key);

      fn(target, key, desc, options, validations);

      if (!desc.get && !desc.set) {
        // always ensure the property is writeable, doesn't make sense otherwise (babel bug?)
        desc.writable = true;
        desc.configurable = true;
      }

      if (desc.initializer === null) {
        desc.initializer = undefined;
      }
    };
  }
});