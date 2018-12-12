var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pockey;
(function (Pockey) {
    var SignalsModule;
    (function (SignalsModule) {
        var PockeySignalTypes = (function () {
            function PockeySignalTypes() {
            }
            PockeySignalTypes.PLAYER_SIGNED_OUT = "PockeySignalTypes." + "PLAYER_SIGNED_OUT";
            PockeySignalTypes.PLAYER_SIGNED_IN = "PockeySignalTypes." + "PLAYER_SIGNED_IN";
            PockeySignalTypes.GOOGLE_SIGN_IN = "PockeySignalTypes." + "GOOGLE_SIGN_IN";
            PockeySignalTypes.GOOGLE_SIGN_OUT = "PockeySignalTypes." + "GOOGLE_SIGN_OUT";
            PockeySignalTypes.FACEBOOK_SIGN_IN = "PockeySignalTypes." + "FACEBOOK_SIGN_IN";
            PockeySignalTypes.FACEBOOK_SIGN_OUT = "PockeySignalTypes." + "FACEBOOK_SIGN_OUT";
            PockeySignalTypes.GET_PLAYER_INFO = "PockeySignalTypes." + "GET_PLAYER_INFO";
            PockeySignalTypes.SHOOT_BALL = "PockeySignalTypes." + "SHOOT_BALL";
            PockeySignalTypes.NEXT_TURN = "PockeySignalTypes." + "NEXT_TURN";
            PockeySignalTypes.BALL_IN_POCKET = "PockeySignalTypes." + "BALL_IN_POCKET";
            PockeySignalTypes.WHITE_BALL_IN_POCKET = "PockeySignalTypes." + "WHITE_BALL_IN_POCKET";
            PockeySignalTypes.REACTIVATE_STICK = "PockeySignalTypes." + "REACTIVATE_STICK";
            PockeySignalTypes.REPOSITION_STICK = "PockeySignalTypes." + "REPOSITION_STICK";
            PockeySignalTypes.STICK_PIVOT_MOBILE_UPDATE = "PockeySignalTypes." + "STICK_PIVOT_MOBILE_UPDATE";
            PockeySignalTypes.STICK_MOBILE_RELEASE = "PockeySignalTypes." + "STICK_MOBILE_RELEASE";
            PockeySignalTypes.HIDE_STICK_POWER_MOBILE = "PockeySignalTypes." + "HIDE_STICK_POWER_MOBILE";
            PockeySignalTypes.SHOW_STICK_POWER_MOBILE = "PockeySignalTypes." + "SHOW_STICK_POWER_MOBILE";
            PockeySignalTypes.REPOSITION_WHITE_BALL = "PockeySignalTypes." + "REPOSITION_WHITE_BALL";
            PockeySignalTypes.WHITE_BALL_REPOSITIONED = "PockeySignalTypes." + "WHITE_BALL_REPOSITIONED";
            PockeySignalTypes.FIRST_BALL_FAULT = "PockeySignalTypes." + "FIRST_BALL_FAULT";
            PockeySignalTypes.HIDE_BALL_RAY_GRAPHICS = "PockeySignalTypes." + "HIDE_GRAPHICS";
            PockeySignalTypes.POOLSTICK_ACTIVATED = "PockeySignalTypes." + "POOLSTICK_ACTIVATED";
            PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED = "PockeySignalTypes." + "RESIZE_BACKGROUND";
            PockeySignalTypes.START_GAME = "PockeySignalTypes." + "START_GAME";
            PockeySignalTypes.SHOW_MAIN_MENU = "PockeySignalTypes." + "SHOW_MAIN_MENU";
            PockeySignalTypes.HIDE_MAIN_MENU = "PockeySignalTypes." + "HIDE_MAIN_MENU";
            PockeySignalTypes.SHOW_POOLTABLE = "PockeySignalTypes." + "SHOW_POOLTABLE";
            PockeySignalTypes.HIDE_POOLTABLE = "PockeySignalTypes." + "HIDE_POOLTABLE";
            PockeySignalTypes.SHOW_GAME_UI = "PockeySignalTypes." + "SHOW_GAME_UI";
            PockeySignalTypes.HIDE_GAME_UI = "PockeySignalTypes." + "HIDE_GAME_UI";
            PockeySignalTypes.SHOW_SEARCHING_SCREEN = "PockeySignalTypes." + "SHOW_SEARCHING_SCREEN";
            PockeySignalTypes.HIDE_SEARCHING_SCREEN = "PockeySignalTypes." + "HIDE_SEARCHING_SCREEN";
            PockeySignalTypes.SHOW_WINNING_SCREEN = "PockeySignalTypes." + "SHOW_WINNING_SCREEN";
            PockeySignalTypes.HIDE_WINNING_SCREEN = "PockeySignalTypes." + "HIDE_WINNING_SCREEN";
            PockeySignalTypes.UPDATE_PLAYER_NAME = "PockeySignalTypes." + "UPDATE_PLAYER_NAME";
            PockeySignalTypes.UPDATE_PLAYER_SCORE = "PockeySignalTypes." + "UPDATE_PLAYER_SCORE";
            PockeySignalTypes.CHANGE_PLAYER_COLOR = "PockeySignalTypes." + "CHANGE_PLAYER_COLOR";
            PockeySignalTypes.UPDATE_OPPONENT_NAME = "PockeySignalTypes." + "UPDATE_OPPONENT_NAME";
            PockeySignalTypes.UPDATE_OPPONENT_SCORE = "PockeySignalTypes." + "UPDATE_OPPONENT_SCORE";
            PockeySignalTypes.CHANGE_OPPONENT_COLOR = "PockeySignalTypes." + "CHANGE_OPPONENT_COLOR";
            PockeySignalTypes.SET_SIDES_TYPE = "PockeySignalTypes." + "SET_SIDES_TYPE";
            PockeySignalTypes.SEND_ELEMENTS_DATA_TO_MANAGER = "PockeySignalTypes." + "SEND_ELEMENTS_DATA_TO_MANAGER";
            PockeySignalTypes.UPDATE_WINNING_MESSAGE = "PockeySignalTypes." + "UPDATE_WINNING_MESSAGE";
            PockeySignalTypes.RESTART_GAME = "PockeySignalTypes." + "RESTART_GAME";
            PockeySignalTypes.RESET_POOLTABLE = "PockeySignalTypes." + "RESET_POOLTABLE";
            PockeySignalTypes.RESET_STICK_POWER = "PockeySignalTypes." + "RESET_STICK_POWER";
            PockeySignalTypes.RESET_GAME_SCREEN = "PockeySignalTypes." + "RESET_GAME_SCREEN";
            PockeySignalTypes.MOBILE_WHITE_BALL_REPOSITION_CONFIRMED = "PockeySignalTypes." + "MOBILE_WHITE_BALL_REPOSITION_CONFIRMED";
            PockeySignalTypes.SHOW_WHITE_BALL_POSITION_CONFIRMER = "PockeySignalTypes." + "SHOW_WHITE_BALL_POSITION_CONFIRMER";
            PockeySignalTypes.HIDE_WHITE_BALL_POSITION_CONFIRMER = "PockeySignalTypes." + "HIDE_WHITE_BALL_POSITION_CONFIRMER";
            PockeySignalTypes.UPDATE_STATE_TEXT = "PockeySignalTypes." + "UPDATE_GAME_TEXT";
            PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER = "PockeySignalTypes." + "UPDATE_CURRENT_PLAYER_TIMER";
            PockeySignalTypes.UPDATE_UI_TEXT = "PockeySignalTypes." + "UPDATE_UI_TEXT";
            PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH = "PockeySignalTypes." + "UPDATE_UI_TEXT_ON_WATCH";
            PockeySignalTypes.ANIMATE_PUCK_GOAL = "PockeySignalTypes." + "ANIMATE_PUCK_GOAL";
            PockeySignalTypes.ANIMATE_PUCK_GOAL_STOP = "PockeySignalTypes." + "ANIMATE_PUCK_GOAL_STOP";
            PockeySignalTypes.UPDATE_MATCH_CIRCLES = "PockeySignalTypes." + "UPDATE_MATCH_CIRCLES";
            PockeySignalTypes.UPDATE_PLAYER_COLOR = "PockeySignalTypes." + "UPDATE_PLAYER_COLOR";
            PockeySignalTypes.CHECK_USER_DATA = "PockeySignalTypes." + "CHECK_USER_DATA";
            PockeySignalTypes.INVENTORY_ITEM_UPDATED = "PockeySignalTypes." + "INVENTORY_ITEM_UPDATED";
            PockeySignalTypes.CHANGE_PLAYER_AVATAR = "PockeySignalTypes." + "CHANGE_PLAYER_AVATAR";
            PockeySignalTypes.CHANGE_OPPONENT_AVATAR = "PockeySignalTypes." + "CHANGE_OPPONENT_AVATAR";
            return PockeySignalTypes;
        }());
        SignalsModule.PockeySignalTypes = PockeySignalTypes;
        var PockeyConnectionSignals = (function () {
            function PockeyConnectionSignals() {
            }
            PockeyConnectionSignals.WATCH = "PockeyConnectionSignals." + "WATCH";
            PockeyConnectionSignals.SCORE_UPDATE = "PockeyConnectionSignals." + "SCORE_UPDATE";
            PockeyConnectionSignals.YOUR_TURN = "PockeyConnectionSignals." + "YOUR_TURN";
            PockeyConnectionSignals.OPPONENT_SETTINGS = "PockeyConnectionSignals." + "OPPONENT_SETTINGS";
            PockeyConnectionSignals.OPPONENT_RESTART_GAME = "PockeyConnectionSignals." + "OPPONENT_RESTART_GAME";
            return PockeyConnectionSignals;
        }());
        SignalsModule.PockeyConnectionSignals = PockeyConnectionSignals;
    })(SignalsModule = Pockey.SignalsModule || (Pockey.SignalsModule = {}));
})(Pockey || (Pockey = {}));
var Framework;
(function (Framework) {
    var SignalBinding = (function () {
        function SignalBinding(signal, listener, isOnce, listenerContext, priority) {
            if (priority === void 0) { priority = 0; }
            this.active = true;
            this.params = null;
            this._listener = listener;
            this._isOnce = isOnce;
            this.context = listenerContext;
            this._signal = signal;
            this.priority = priority || 0;
        }
        SignalBinding.prototype.execute = function (paramsArr) {
            var handlerReturn;
            var params;
            if (this.active && !!this._listener) {
                params = this.params ? this.params.concat(paramsArr) : paramsArr;
                handlerReturn = this._listener.apply(this.context, params);
                if (this._isOnce) {
                    this.detach();
                }
            }
            return handlerReturn;
        };
        SignalBinding.prototype.detach = function () {
            return this.isBound() ? this._signal.remove(this._listener, this.context) : null;
        };
        SignalBinding.prototype.isBound = function () {
            return (!!this._signal && !!this._listener);
        };
        SignalBinding.prototype.isOnce = function () {
            return this._isOnce;
        };
        SignalBinding.prototype.getListener = function () {
            return this._listener;
        };
        SignalBinding.prototype.getSignal = function () {
            return this._signal;
        };
        SignalBinding.prototype._destroy = function () {
            delete this._signal;
            delete this._listener;
            delete this.context;
        };
        SignalBinding.prototype.toString = function () {
            return '[SignalBinding isOnce:' + this._isOnce + ', isBound:' + this.isBound() + ', active:' + this.active + ']';
        };
        return SignalBinding;
    }());
    Framework.SignalBinding = SignalBinding;
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    var Signal = (function () {
        function Signal() {
            this._bindings = [];
            this._prevParams = null;
            this.memorize = false;
            this._shouldPropagate = true;
            this.active = true;
        }
        Signal.prototype.validateListener = function (listener, fnName) {
            if (typeof listener !== 'function') {
                throw new Error('listener is a required param of {fn}() and should be a Function.'.replace('{fn}', fnName));
            }
        };
        Signal.prototype._registerListener = function (listener, isOnce, listenerContext, priority) {
            var prevIndex = this._indexOfListener(listener, listenerContext);
            var binding;
            if (prevIndex !== -1) {
                binding = this._bindings[prevIndex];
                if (binding.isOnce() !== isOnce) {
                    throw new Error('You cannot add' + (isOnce ? '' : 'Once') + '() then add' + (!isOnce ? '' : 'Once') + '() the same listener without removing the relationship first.');
                }
            }
            else {
                binding = new Framework.SignalBinding(this, listener, isOnce, listenerContext, priority);
                this._addBinding(binding);
            }
            if (this.memorize && this._prevParams) {
                binding.execute(this._prevParams);
            }
            return binding;
        };
        Signal.prototype._addBinding = function (binding) {
            var n = this._bindings.length;
            do {
                --n;
            } while (this._bindings[n] && binding.priority <= this._bindings[n].priority);
            this._bindings.splice(n + 1, 0, binding);
        };
        Signal.prototype._indexOfListener = function (listener, context) {
            var n = this._bindings.length;
            var cur;
            while (n--) {
                cur = this._bindings[n];
                if (cur.getListener() === listener && cur.context === context) {
                    return n;
                }
            }
            return -1;
        };
        Signal.prototype.has = function (listener, context) {
            if (context === void 0) { context = null; }
            return this._indexOfListener(listener, context) !== -1;
        };
        Signal.prototype.add = function (listener, listenerContext, priority) {
            if (listenerContext === void 0) { listenerContext = null; }
            if (priority === void 0) { priority = 0; }
            this.validateListener(listener, 'add');
            return this._registerListener(listener, false, listenerContext, priority);
        };
        Signal.prototype.addOnce = function (listener, listenerContext, priority) {
            if (listenerContext === void 0) { listenerContext = null; }
            if (priority === void 0) { priority = 0; }
            this.validateListener(listener, 'addOnce');
            return this._registerListener(listener, true, listenerContext, priority);
        };
        Signal.prototype.remove = function (listener, context) {
            if (context === void 0) { context = null; }
            this.validateListener(listener, 'remove');
            var i = this._indexOfListener(listener, context);
            if (i !== -1) {
                this._bindings[i]._destroy();
                this._bindings.splice(i, 1);
            }
            return listener;
        };
        Signal.prototype.removeAll = function () {
            var n = this._bindings.length;
            while (n--) {
                this._bindings[n]._destroy();
            }
            this._bindings.length = 0;
        };
        Signal.prototype.getNumListeners = function () {
            return this._bindings.length;
        };
        Signal.prototype.halt = function () {
            this._shouldPropagate = false;
        };
        Signal.prototype.dispatch = function () {
            var paramsArr = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                paramsArr[_i] = arguments[_i];
            }
            if (!this.active) {
                return;
            }
            var n = this._bindings.length;
            var bindings;
            if (this.memorize) {
                this._prevParams = paramsArr;
            }
            if (!n) {
                return;
            }
            bindings = this._bindings.slice(0);
            this._shouldPropagate = true;
            do {
                n--;
            } while (bindings[n] && this._shouldPropagate && bindings[n].execute(paramsArr) !== false);
        };
        Signal.prototype.forget = function () {
            this._prevParams = null;
        };
        Signal.prototype.dispose = function () {
            this.removeAll();
            delete this._bindings;
            delete this._prevParams;
        };
        Signal.prototype.toString = function () {
            return '[Signal active:' + this.active + ' numListeners:' + this.getNumListeners() + ']';
        };
        Signal.VERSION = '1.0.0';
        return Signal;
    }());
    Framework.Signal = Signal;
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    var Signals;
    (function (Signals) {
        var SignalsManager = (function () {
            function SignalsManager() {
                this.initialized = false;
            }
            SignalsManager.Instance = function () {
                if (!SignalsManager.instance) {
                    SignalsManager.instance = new SignalsManager();
                    if (!SignalsManager.Instance().initialized) {
                        SignalsManager.InitializeSignals();
                        SignalsManager.Instance().initialized = true;
                    }
                }
                return SignalsManager.instance;
            };
            SignalsManager.InitializeSignals = function () {
                SignalsManager.Instance().signals = {};
            };
            SignalsManager.CreateNewSignal = function (id) {
                SignalsManager.Instance().signals[id] = new Framework.Signal();
                console.log("%c" + "Signals Manager -> new signal created: " + id, "color: orange");
            };
            SignalsManager.GetSignal = function (id) {
                var signal = SignalsManager.Instance().signals[id];
                if (!signal) {
                    console.warn("SignalsManager.GetSignal: signal " + id + " is not registered!");
                }
                return signal;
            };
            SignalsManager.AddSignalCallback = function (signalID, callbackFunction) {
                var signal = SignalsManager.Instance().signals[signalID];
                if (!signal) {
                    console.warn("SignalsManager.RegisterCallbackToSignal: signal " + signalID + " is not registered!");
                }
                signal.add(callbackFunction);
            };
            SignalsManager.DispatchSignal = function (id, params) {
                if (params === void 0) { params = null; }
                if (SignalsManager.Instance().signals[id]) {
                    if (Framework.Settings.showSignalsDispatchSignalLog) {
                        console.log("%c" + "SignalsManager -> Dispatched Signal: " + id, "color: #f68a06");
                    }
                    SignalsManager.Instance().signals[id].dispatch(params);
                }
                else {
                    console.warn("SignalsManager.DispatchSignal: signal " + id + " is net registered!");
                }
            };
            return SignalsManager;
        }());
        Signals.SignalsManager = SignalsManager;
    })(Signals = Framework.Signals || (Framework.Signals = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    var Signals;
    (function (Signals) {
        var SignalsType = (function () {
            function SignalsType() {
            }
            SignalsType.WINDOW_RESIZE = "SignalsType." + "WINDOW_RESIZE";
            SignalsType.ASSETS_LOADED = "SignalsType." + "ASSETS_LOADED";
            SignalsType.ALL_MODULES_ELEMENTS_CREATED = "SignalsType." + "ALL_MODULES_ELEMENTS_CREATED";
            SignalsType.MODULE_ELEMENTS_CREATED = "SignalsType." + "MODULE_ELEMENTS_CREATED";
            SignalsType.CHANGE_BACKGROUND = "SignalsType." + "CHANGE_BACKGROUND";
            SignalsType.CHECK_USER_DATA = "SignalsType." + "CHECK_USER_DATA";
            SignalsType.USER_DATA_CHECKED = "SignalsType." + "USER_DATA_CHECKED";
            SignalsType.PLAY_SOUND = "SignalsType." + "PLAY_SOUND";
            SignalsType.STOP_SOUND = "SignalsType." + "STOP_SOUND";
            return SignalsType;
        }());
        Signals.SignalsType = SignalsType;
        var ConnectionSignalsType = (function () {
            function ConnectionSignalsType() {
            }
            ConnectionSignalsType.CREATE_SEARCH_FOR_PARTNER_CONNECTION = "ConnectionSignalsType." + 'CREATE_SEARCH_FOR_PARTNER_CONNECTION';
            ConnectionSignalsType.SOCKET_IO_CONNECTION_CREATED = "ConnectionSignalsType." + 'SOCKET_IO_CONNECTION_CREATED';
            ConnectionSignalsType.SOCKET_IO_DISCONNECTED = "ConnectionSignalsType." + "SOCKET_IO_DISCONNECTED";
            ConnectionSignalsType.PRIVATE_MESSAGE = "ConnectionSignalsType." + "PRIVATE_MESSAGE";
            ConnectionSignalsType.UPDATE_SOCKET_ID = "ConnectionSignalsType." + "UPDATE_SOCKET_ID";
            return ConnectionSignalsType;
        }());
        Signals.ConnectionSignalsType = ConnectionSignalsType;
    })(Signals = Framework.Signals || (Framework.Signals = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    var Abstracts;
    (function (Abstracts) {
        var SignalsManager = Framework.Signals.SignalsManager;
        var SignalsType = Framework.Signals.SignalsType;
        var AbstractModule = (function () {
            function AbstractModule() {
                this.Name = "AbstractModule";
                this.ElementsCreated = false;
                this.registerSignalsHandlers();
                this.AssetsToLoad = [];
            }
            AbstractModule.prototype.addAssetToLoad = function (path) {
                this.AssetsToLoad.push(path);
            };
            AbstractModule.prototype.createElements = function () {
                console.log("%c" + this.Name + " Elements Created!", "color: green");
                this.ElementsCreated = true;
                SignalsManager.DispatchSignal(SignalsType.MODULE_ELEMENTS_CREATED);
            };
            AbstractModule.prototype.addChild = function (child) {
                if (_.isNull(this.Layer) || _.isUndefined(this.Layer)) {
                    console.log("%c" + this.Name + " LAYER not set!", "color: red");
                }
                this.Layer.addChild(child);
            };
            AbstractModule.prototype.removeChild = function (child) {
                if (_.isNull(this.Layer) || _.isUndefined(this.Layer)) {
                    console.log("%c" + this.Name + " LAYER not set!", "color: red");
                }
                this.Layer.removeChild(child);
            };
            AbstractModule.prototype.registerSignalsHandlers = function () {
                SignalsManager.AddSignalCallback(SignalsType.WINDOW_RESIZE, this.onResize.bind(this));
            };
            AbstractModule.prototype.onResize = function (params) {
                if (Framework.Settings.stageWidth >= Framework.Settings.stageHeight) {
                    if (Framework.Settings.isMobile) {
                        this.handleMobileLandscape();
                    }
                    else {
                        this.handleDesktopLandscape();
                    }
                }
                else {
                    if (Framework.Settings.isMobile) {
                        this.handleMobilePortrait();
                    }
                    else {
                        this.handleDesktopPortrait();
                    }
                }
            };
            AbstractModule.prototype.handleMobileLandscape = function () {
            };
            AbstractModule.prototype.handleMobilePortrait = function () {
            };
            AbstractModule.prototype.handleDesktopLandscape = function () {
            };
            AbstractModule.prototype.handleDesktopPortrait = function () {
                this.handleDesktopLandscape();
            };
            return AbstractModule;
        }());
        Abstracts.AbstractModule = AbstractModule;
    })(Abstracts = Framework.Abstracts || (Framework.Abstracts = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    var Settings = (function () {
        function Settings() {
        }
        Settings.desktopAssetsPath = "Assets/Desktop/";
        Settings.mobileAssetsPath = "Assets/Mobile/";
        Settings.isMobile = false;
        Settings.backgroundsPath = "Images/Backgrounds/";
        Settings.mainBackgroundName = "MainBackground";
        Settings.singlePlayer = false;
        Settings.showSignalsDispatchSignalLog = false;
        Settings.playerSignedIn = false;
        return Settings;
    }());
    Framework.Settings = Settings;
})(Framework || (Framework = {}));
var typestate;
(function (typestate) {
    var Transitions = (function () {
        function Transitions(fsm) {
            this.fsm = fsm;
        }
        Transitions.prototype.to = function () {
            var states = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                states[_i] = arguments[_i];
            }
            this.toStates = states;
            this.fsm.addTransitions(this);
        };
        Transitions.prototype.toAny = function (states) {
            var toStates = [];
            for (var s in states) {
                if (states.hasOwnProperty(s)) {
                    toStates.push(states[s]);
                }
            }
            this.toStates = toStates;
            this.fsm.addTransitions(this);
        };
        return Transitions;
    }());
    typestate.Transitions = Transitions;
    var TransitionFunction = (function () {
        function TransitionFunction(fsm, from, to) {
            this.fsm = fsm;
            this.from = from;
            this.to = to;
        }
        return TransitionFunction;
    }());
    typestate.TransitionFunction = TransitionFunction;
    var FiniteStateMachine = (function () {
        function FiniteStateMachine(startState, allowImplicitSelfTransition) {
            if (allowImplicitSelfTransition === void 0) { allowImplicitSelfTransition = false; }
            this._transitionFunctions = [];
            this._onCallbacks = {};
            this._exitCallbacks = {};
            this._enterCallbacks = {};
            this._invalidTransitionCallback = null;
            this.currentState = startState;
            this._startState = startState;
            this._allowImplicitSelfTransition = allowImplicitSelfTransition;
        }
        FiniteStateMachine.prototype.addTransitions = function (fcn) {
            var _this = this;
            fcn.fromStates.forEach(function (from) {
                fcn.toStates.forEach(function (to) {
                    if (!_this._canGo(from, to)) {
                        _this._transitionFunctions.push(new TransitionFunction(_this, from, to));
                    }
                });
            });
        };
        FiniteStateMachine.prototype.on = function (state, callback) {
            var key = state.toString();
            if (!this._onCallbacks[key]) {
                this._onCallbacks[key] = [];
            }
            this._onCallbacks[key].push(callback);
            return this;
        };
        FiniteStateMachine.prototype.onEnter = function (state, callback) {
            var key = state.toString();
            if (!this._enterCallbacks[key]) {
                this._enterCallbacks[key] = [];
            }
            this._enterCallbacks[key].push(callback);
            return this;
        };
        FiniteStateMachine.prototype.onExit = function (state, callback) {
            var key = state.toString();
            if (!this._exitCallbacks[key]) {
                this._exitCallbacks[key] = [];
            }
            this._exitCallbacks[key].push(callback);
            return this;
        };
        FiniteStateMachine.prototype.onInvalidTransition = function (callback) {
            if (!this._invalidTransitionCallback) {
                this._invalidTransitionCallback = callback;
            }
            return this;
        };
        FiniteStateMachine.prototype.from = function () {
            var states = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                states[_i] = arguments[_i];
            }
            var _transition = new Transitions(this);
            _transition.fromStates = states;
            return _transition;
        };
        FiniteStateMachine.prototype.fromAny = function (states) {
            var fromStates = [];
            for (var s in states) {
                if (states.hasOwnProperty(s)) {
                    fromStates.push(states[s]);
                }
            }
            var _transition = new Transitions(this);
            _transition.fromStates = fromStates;
            return _transition;
        };
        FiniteStateMachine.prototype._validTransition = function (from, to) {
            return this._transitionFunctions.some(function (tf) {
                return (tf.from === from && tf.to === to);
            });
        };
        FiniteStateMachine.prototype._canGo = function (fromState, toState) {
            return (this._allowImplicitSelfTransition && fromState === toState) || this._validTransition(fromState, toState);
        };
        FiniteStateMachine.prototype.canGo = function (state) {
            return this._canGo(this.currentState, state);
        };
        FiniteStateMachine.prototype.go = function (state, event) {
            if (!this.canGo(state)) {
                if (!this._invalidTransitionCallback || !this._invalidTransitionCallback(this.currentState, state)) {
                    throw new Error('Error no transition function exists from state ' + this.currentState.toString() + ' to ' + state.toString());
                }
            }
            else {
                this._transitionTo(state, event);
            }
        };
        FiniteStateMachine.prototype.onTransition = function (from, to) {
        };
        FiniteStateMachine.prototype.reset = function () {
            this.currentState = this._startState;
        };
        FiniteStateMachine.prototype.is = function (state) {
            return this.currentState === state;
        };
        FiniteStateMachine.prototype._transitionTo = function (state, event) {
            var _this = this;
            if (!this._exitCallbacks[this.currentState.toString()]) {
                this._exitCallbacks[this.currentState.toString()] = [];
            }
            if (!this._enterCallbacks[state.toString()]) {
                this._enterCallbacks[state.toString()] = [];
            }
            if (!this._onCallbacks[state.toString()]) {
                this._onCallbacks[state.toString()] = [];
            }
            var canExit = this._exitCallbacks[this.currentState.toString()].reduce(function (accum, next) {
                return accum && next.call(_this, state);
            }, true);
            var canEnter = this._enterCallbacks[state.toString()].reduce(function (accum, next) {
                return accum && next.call(_this, _this.currentState, event);
            }, true);
            if (canExit && canEnter) {
                var old = this.currentState;
                this.currentState = state;
                this._onCallbacks[this.currentState.toString()].forEach(function (fcn) {
                    fcn.call(_this, old, event);
                });
                this.onTransition(old, state);
            }
        };
        return FiniteStateMachine;
    }());
    typestate.FiniteStateMachine = FiniteStateMachine;
})(typestate || (typestate = {}));
var TypeState = typestate;
var Pockey;
(function (Pockey) {
    var StateMachineModule;
    (function (StateMachineModule) {
        var FiniteStateMachine = typestate.FiniteStateMachine;
        var PockeyStates;
        (function (PockeyStates) {
            PockeyStates[PockeyStates["onLoad"] = 0] = "onLoad";
            PockeyStates[PockeyStates["onMainMenu"] = 1] = "onMainMenu";
            PockeyStates[PockeyStates["onStart"] = 2] = "onStart";
            PockeyStates[PockeyStates["onGameEnd"] = 3] = "onGameEnd";
            PockeyStates[PockeyStates["onDefineClient"] = 4] = "onDefineClient";
            PockeyStates[PockeyStates["onSearchForPartner"] = 5] = "onSearchForPartner";
            PockeyStates[PockeyStates["onWatch"] = 6] = "onWatch";
            PockeyStates[PockeyStates["onRearrangeStick"] = 7] = "onRearrangeStick";
            PockeyStates[PockeyStates["onRepositionWhiteBall"] = 8] = "onRepositionWhiteBall";
            PockeyStates[PockeyStates["onShoot"] = 9] = "onShoot";
            PockeyStates[PockeyStates["onEndTurn"] = 10] = "onEndTurn";
        })(PockeyStates = StateMachineModule.PockeyStates || (StateMachineModule.PockeyStates = {}));
        var PockeyStateMachine = (function () {
            function PockeyStateMachine() {
                this.initialized = false;
            }
            PockeyStateMachine.Instance = function () {
                if (!PockeyStateMachine.instance) {
                    PockeyStateMachine.instance = new PockeyStateMachine();
                    if (!PockeyStateMachine.Instance().initialized) {
                        PockeyStateMachine.Instance().fsm = new FiniteStateMachine(PockeyStates.onLoad);
                        PockeyStateMachine.Instance().InitializeStates();
                        PockeyStateMachine.Instance().initialized = true;
                        var s = PockeyStates[PockeyStates.onLoad];
                        console.log("%c StateMachine -> FSM currentState: " + s, "background: yellow; color: #f6546a; font-weight:bold; ");
                    }
                }
                return PockeyStateMachine.instance;
            };
            PockeyStateMachine.prototype.InitializeStates = function () {
                this.fsm.from(PockeyStates.onLoad).to(PockeyStates.onMainMenu);
                this.fsm.from(PockeyStates.onMainMenu).to(PockeyStates.onRearrangeStick);
                this.fsm.from(PockeyStates.onMainMenu).to(PockeyStates.onSearchForPartner);
                this.fsm.from(PockeyStates.onSearchForPartner).to(PockeyStates.onRearrangeStick);
                this.fsm.from(PockeyStates.onSearchForPartner).to(PockeyStates.onWatch);
                this.fsm.from(PockeyStates.onRepositionWhiteBall).to(PockeyStates.onRearrangeStick);
                this.fsm.from(PockeyStates.onRepositionWhiteBall).to(PockeyStates.onWatch);
                this.fsm.from(PockeyStates.onRepositionWhiteBall).to(PockeyStates.onEndTurn);
                this.fsm.from(PockeyStates.onEndTurn).to(PockeyStates.onRearrangeStick);
                this.fsm.from(PockeyStates.onWatch).to(PockeyStates.onRearrangeStick);
                this.fsm.from(PockeyStates.onRearrangeStick).to(PockeyStates.onShoot);
                this.fsm.from(PockeyStates.onRearrangeStick).to(PockeyStates.onWatch);
                this.fsm.from(PockeyStates.onRearrangeStick).to(PockeyStates.onEndTurn);
                this.fsm.from(PockeyStates.onShoot).to(PockeyStates.onEndTurn);
                this.fsm.from(PockeyStates.onShoot).to(PockeyStates.onGameEnd);
                this.fsm.from(PockeyStates.onEndTurn).to(PockeyStates.onRepositionWhiteBall);
                this.fsm.from(PockeyStates.onEndTurn).to(PockeyStates.onWatch);
                this.fsm.from(PockeyStates.onEndTurn).to(PockeyStates.onGameEnd);
                this.fsm.from(PockeyStates.onWatch).to(PockeyStates.onGameEnd);
                this.fsm.from(PockeyStates.onWatch).to(PockeyStates.onRepositionWhiteBall);
                this.fsm.from(PockeyStates.onGameEnd).to(PockeyStates.onRearrangeStick);
                this.fsm.from(PockeyStates.onGameEnd).to(PockeyStates.onWatch);
            };
            PockeyStateMachine.prototype.changeState = function (state) {
                if (!PockeyStates[state]) {
                    console.log("%c StateMachine -> state does not exist: " + state, "color: #000000; background:#ff9900");
                }
                if (state == PockeyStates.onShoot) {
                    console.log("current state=======");
                    this.printFsmCurrentState();
                    console.log("current state=======");
                    console.log("stop");
                }
                PockeyStateMachine.Instance().fsm.go(state);
                this.printFsmCurrentState();
            };
            PockeyStateMachine.prototype.getCurrentStateName = function () {
                var _this = this;
                var s = "";
                if (this.fsm) {
                    _.forEach(this.fsm, function (state) {
                        if (state == _this.fsm.currentState) {
                            s = PockeyStates[state];
                            return;
                        }
                    });
                }
                return s;
            };
            PockeyStateMachine.prototype.printFsmCurrentState = function () {
                console.log("%c GameManager -> FSM currentState: " + PockeyStateMachine.Instance().getCurrentStateName(), "background: yellow; color: #f6546a; font-weight:bold; ");
            };
            return PockeyStateMachine;
        }());
        StateMachineModule.PockeyStateMachine = PockeyStateMachine;
    })(StateMachineModule = Pockey.StateMachineModule || (Pockey.StateMachineModule = {}));
})(Pockey || (Pockey = {}));
var Framework;
(function (Framework) {
    var Utils;
    (function (Utils) {
        var Vector2 = (function () {
            function Vector2(x, y) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                this.x = x;
                this.y = y;
            }
            Vector2.prototype.add = function (vector) {
                return new Vector2(this.x + vector.x, this.y + vector.y);
            };
            Vector2.prototype.addTo = function (vector) {
                this.x += vector.x;
                this.y += vector.y;
            };
            Vector2.prototype.substract = function (vector) {
                return new Vector2(this.x - vector.x, this.y - vector.y);
            };
            Vector2.prototype.distanceTo = function (vector) {
                var dx = this.x - vector.x;
                var dy = this.y - vector.y;
                return Math.sqrt(dx * dx + dy * dy);
            };
            Vector2.prototype.multiply = function (multiplicationFactor) {
                var cx = this.x;
                var cy = this.y;
                cx *= multiplicationFactor;
                cy *= multiplicationFactor;
                return new Vector2(cx, cy);
            };
            Vector2.prototype.dot = function (vector) {
                return this.x * vector.x + this.y * vector.y;
            };
            Vector2.prototype.length = function () {
                return (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
            };
            Vector2.prototype.projectionOn = function (axis) {
                return this.dotProduct(axis.normalise());
            };
            Vector2.prototype.dotProduct = function (vector2) {
                var componentX = this.x * vector2.x;
                var componentY = this.y * vector2.y;
                return componentX + componentY;
            };
            Vector2.prototype.normalise = function () {
                return new Vector2(this.x / (Math.sqrt(this.x * this.x + this.y * this.y)), this.y / (Math.sqrt(this.x * this.x + this.y * this.y)));
            };
            Vector2.prototype.getMagnitude = function () {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            };
            Vector2.prototype.setMagnitude = function (magnitude) {
                var ang_current = this.getAngle();
                this.polar(magnitude, ang_current);
            };
            Vector2.prototype.getAngle = function () {
                return Math.atan2(this.y, this.x);
            };
            Vector2.prototype.polar = function (mag, ang_rad) {
                this.x = mag * Math.cos(ang_rad);
                this.y = mag * Math.sin(ang_rad);
            };
            Vector2.prototype.rotate = function (angle_rad) {
                var newX = this.x * Math.cos(angle_rad) - this.y * Math.sin(angle_rad);
                var newY = this.x * Math.sin(angle_rad) + this.y * Math.cos(angle_rad);
                return new Vector2(newX, newY);
            };
            Vector2.prototype.clone = function () {
                var clone1 = new Vector2(this.x, this.y);
                return clone1;
            };
            return Vector2;
        }());
        Utils.Vector2 = Vector2;
    })(Utils = Framework.Utils || (Framework.Utils = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    var Utils;
    (function (Utils) {
        var PixiDashedLine = (function () {
            function PixiDashedLine() {
            }
            PixiDashedLine.drawDashedLine = function (graphics, startX, startY, endX, endY, strokeLength, gap, color, stroke, alpha) {
                if (startX === void 0) { startX = 0; }
                if (startY === void 0) { startY = 0; }
                if (endX === void 0) { endX = 0; }
                if (endY === void 0) { endY = 0; }
                if (strokeLength === void 0) { strokeLength = 0; }
                if (gap === void 0) { gap = 0; }
                if (color === void 0) { color = 0xffffff; }
                if (stroke === void 0) { stroke = 1; }
                if (alpha === void 0) { alpha = 1; }
                var arrowPoint = new Utils.Vector2();
                graphics.lineStyle(stroke, color, alpha);
                var segmentLength = strokeLength + gap;
                var deltaX = endX - startX;
                var deltaY = endY - startY;
                var _delta = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
                var segmentsCount = Math.floor(Math.abs(_delta / segmentLength));
                var radians = Math.atan2(deltaY, deltaX);
                var aX = startX;
                var aY = startY;
                deltaX = Math.cos(radians) * segmentLength;
                deltaY = Math.sin(radians) * segmentLength;
                for (var i = 0; i < segmentsCount; i++) {
                    graphics.moveTo(aX, aY);
                    graphics.lineTo(aX + Math.cos(radians) * strokeLength, aY + Math.sin(radians) * strokeLength);
                    aX += deltaX;
                    aY += deltaY;
                }
                graphics.moveTo(aX, aY);
                _delta = Math.sqrt((endX - aX) * (endX - aX) + (endY - aY) * (endY - aY));
                if (_delta > segmentLength) {
                    graphics.lineTo(aX + Math.cos(radians) * strokeLength, aY + Math.sin(radians) * strokeLength);
                }
                else if (_delta > 0) {
                    graphics.lineTo(aX + Math.cos(radians) * _delta, aY + Math.sin(radians) * _delta);
                }
                graphics.lineTo(endX, endY);
                arrowPoint.x = aX + Math.cos(radians) * (gap);
                arrowPoint.y = aY + Math.sin(radians) * (gap);
                return arrowPoint;
            };
            PixiDashedLine.drawDottedLine = function (graphics, startX, startY, endX, endY, radius, gap, color, alpha) {
                if (startX === void 0) { startX = 0; }
                if (startY === void 0) { startY = 0; }
                if (endX === void 0) { endX = 0; }
                if (endY === void 0) { endY = 0; }
                if (radius === void 0) { radius = 0; }
                if (gap === void 0) { gap = 0; }
                if (color === void 0) { color = 0xffffff; }
                if (alpha === void 0) { alpha = 1; }
                var arrowPoint = new Utils.Vector2();
                var segmentLength = radius * 2 + gap;
                var deltaX = endX - startX;
                var deltaY = endY - startY;
                var _delta = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
                var segmentsCount = Math.floor(Math.abs(_delta / segmentLength));
                var radians = Math.atan2(deltaY, deltaX);
                var aX = startX;
                var aY = startY;
                deltaX = Math.cos(radians) * segmentLength;
                deltaY = Math.sin(radians) * segmentLength;
                graphics.beginFill(color, alpha);
                for (var i = 0; i < segmentsCount; i++) {
                    graphics.drawCircle(aX + Math.cos(radians) * (radius + gap), aY + Math.sin(radians) * (radius + gap), radius);
                    aX += deltaX;
                    aY += deltaY;
                }
                _delta = Math.sqrt((endX - aX) * (endX - aX) + (endY - aY) * (endY - aY));
                if (_delta > segmentLength) {
                    graphics.drawCircle(aX + Math.cos(radians) * radius, aY + Math.sin(radians) * radius, radius);
                    graphics.drawCircle(endX, endY, radius);
                }
                graphics.endFill();
                arrowPoint.x = aX + Math.cos(radians) * (gap);
                arrowPoint.y = aY + Math.sin(radians) * (gap);
                return arrowPoint;
            };
            return PixiDashedLine;
        }());
        Utils.PixiDashedLine = PixiDashedLine;
    })(Utils = Framework.Utils || (Framework.Utils = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    var Utils;
    (function (Utils) {
        var ButtonState = (function () {
            function ButtonState() {
                this.down = false;
                this.pressed = false;
            }
            return ButtonState;
        }());
        Utils.ButtonState = ButtonState;
    })(Utils = Framework.Utils || (Framework.Utils = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    var Utils;
    (function (Utils) {
        var Point = PIXI.Point;
        var MouseHandler = (function () {
            function MouseHandler() {
                this.initialized = false;
            }
            MouseHandler.Instance = function () {
                if (!MouseHandler.instance) {
                    MouseHandler.instance = new MouseHandler();
                    if (!MouseHandler.Instance().initialized) {
                        MouseHandler.Instance().initialized = true;
                        MouseHandler.Instance().position = new Point();
                        MouseHandler.Instance().left = new Utils.ButtonState();
                        MouseHandler.Instance().middle = new Utils.ButtonState();
                        MouseHandler.Instance().right = new Utils.ButtonState();
                        document.onmousemove = MouseHandler.Instance().handleMouseMove.bind(this);
                        document.onmousedown = MouseHandler.Instance().handleMouseDown.bind(this);
                        document.onmouseup = MouseHandler.Instance().handleMouseUp.bind(this);
                        MouseHandler.Instance().reset();
                    }
                }
                return MouseHandler.instance;
            };
            MouseHandler.prototype.handleMouseMove = function (e) {
                var x = e.pageX;
                var y = e.pageY;
                MouseHandler.Instance().position = new Point(x, y);
            };
            MouseHandler.prototype.handleMouseDown = function (e) {
                if (e.button == 0) {
                    if (!MouseHandler.Instance().left.down) {
                        MouseHandler.Instance().left.pressed = true;
                    }
                    MouseHandler.Instance().left.down = true;
                }
                else if (e.button == 1) {
                    if (!MouseHandler.Instance().middle.down) {
                        MouseHandler.Instance().middle.pressed = true;
                    }
                    MouseHandler.Instance().middle.down = true;
                }
                else if (e.button == 2) {
                    if (!MouseHandler.Instance().right.down) {
                        MouseHandler.Instance().right.pressed = true;
                    }
                    MouseHandler.Instance().right.down = true;
                }
            };
            MouseHandler.prototype.handleMouseUp = function (e) {
                if (e.button == 0) {
                    MouseHandler.Instance().left.down = false;
                }
                else if (e.button == 1) {
                    MouseHandler.Instance().middle.down = false;
                }
                else if (e.button == 2) {
                    MouseHandler.Instance().right.down = false;
                }
            };
            MouseHandler.prototype.reset = function () {
                this.left.pressed = false;
                this.middle.pressed = false;
                this.right.pressed = false;
                requestAnimationFrame(this.reset.bind(this));
            };
            MouseHandler.prototype.GetAngle = function (vector) {
                var angle = Math.atan2(this.position.x - vector.x, -(this.position.y - vector.y)) * (180 / Math.PI);
                return angle;
            };
            return MouseHandler;
        }());
        Utils.MouseHandler = MouseHandler;
    })(Utils = Framework.Utils || (Framework.Utils = {}));
})(Framework || (Framework = {}));
var Pockey;
(function (Pockey) {
    var Settings = Framework.Settings;
    var PockeySettings = (function () {
        function PockeySettings() {
        }
        PockeySettings.PLAYER_SOCKET_ID = "";
        PockeySettings.PLAYER_NICKNAME = "";
        PockeySettings.PLAYER_ID = "guest";
        PockeySettings.PLAYER_LEVEL = 1;
        PockeySettings.OPPONENT_SOCKET_ID = "";
        PockeySettings.OPPONENT_NICKNAME = "SandruOpponent";
        PockeySettings.DELTA = 0.98;
        PockeySettings.BALL_RADIUS = 17;
        PockeySettings.P2_WORLD_STEP = 1 / 60;
        PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME = "pockey_custom_background_name";
        PockeySettings.PUCK_COLOR = 0xe4b31c;
        PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER = 7;
        PockeySettings.STICK_MAX_POWER = 108;
        PockeySettings.LARGE_GOALIES_ARRAY = [];
        PockeySettings.GOALIE_SPEED = 1;
        PockeySettings.SMALL_GOALIES_ARRAY = [];
        PockeySettings.LARGE_COLORS_ARRAY = [
            {
                category: "COLORS",
                id: "0xe92c5a",
                color: 0xe92c5a
            },
            {
                category: "COLORS",
                id: "0x16e0f8",
                color: 0x16e0f8
            },
            {
                category: "COLORS",
                id: "0xd6d72a",
                color: 0xd6d72a
            },
            {
                category: "COLORS",
                id: "0xc32ce9",
                color: 0xc32ce9
            },
            {
                category: "COLORS",
                id: "0x1584f4",
                color: 0x1584f4
            },
            {
                category: "COLORS",
                id: "0x15efaf",
                color: 0x15efaf
            },
            {
                category: "COLORS",
                id: "0x24a247",
                color: 0x24a247
            },
            {
                category: "COLORS",
                id: "0x86b009",
                color: 0x86b009
            },
            {
                category: "COLORS",
                id: "0xff8023",
                color: 0xff8023
            },
            {
                category: "COLORS",
                id: "0xe82bc3",
                color: 0xE82BC3
            }
        ];
        PockeySettings.SMALL_COLORS_ARRAY = [
            {
                category: "COLORS",
                id: "0xe92c5a",
                color: 0xe92c5a
            },
            {
                category: "COLORS",
                id: "0x16e0f8",
                color: 0x16e0f8
            }
        ];
        PockeySettings.PLAYER_COLOR_ID = PockeySettings.SMALL_COLORS_ARRAY[0].id;
        PockeySettings.SMALL_DECALS_ARRAY = [
            {
                category: "DECALS",
                id: "decal_default",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_default.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_default.png",
                level: 1
            }
        ];
        PockeySettings.LARGE_DECALS_ARRAY = [
            {
                category: "DECALS",
                id: "decal_default",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_default.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_default.png",
                level: 1
            },
            {
                category: "DECALS",
                id: "decal_welcome",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/dccal_welcome.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/dccal_welcome.png",
                level: 1
            },
            {
                category: "DECALS",
                id: "decal_astrojunkie",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_astrojunkie.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_astrojunkie.png",
                level: 2
            }, {
                category: "DECALS",
                id: "decal_blastoff",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_blastoff.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_blastoff.png",
                level: 2
            },
            {
                category: "DECALS",
                id: "decal_cthulu",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_cthulu.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_cthulu.png",
                level: 3
            },
            {
                category: "DECALS",
                id: "decal_dice",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_dice.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_dice.png",
                level: 3
            },
            {
                category: "DECALS",
                id: "decal_insertcoin",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_insertcoin.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_insertcoin.png",
                level: 4
            },
            {
                category: "DECALS",
                id: "decal_knucklesandwhich",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_knucklesandwhich.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_knucklesandwhich.png",
                level: 4
            }, {
                category: "DECALS",
                id: "decal_looselips",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_looselips.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_looselips.png",
                level: 5
            },
            {
                category: "DECALS",
                id: "decal_oneup",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_oneup.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_oneup.png",
                level: 6
            },
            {
                category: "DECALS",
                id: "decal_playerone",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_playerone.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_playerone.png",
                level: 7
            }, {
                category: "DECALS",
                id: "decal_pockey",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_pockey.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_pockey.png",
                level: 7
            },
            {
                category: "DECALS",
                id: "decal_ragequit",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_ragequit.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_ragequit.png",
                level: 8
            },
            {
                category: "DECALS",
                id: "decal_statTrickshot",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_statTrickshot.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_statTrickshot.png",
                level: 9
            },
            {
                category: "DECALS",
                id: "decal_towerking",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_towerking.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_towerking.png",
                level: 10
            },
            {
                category: "DECALS",
                id: "decal_wingedsword",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_wingedsword.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/Decals/decal_wingedsword.png",
                level: 11
            },
        ];
        PockeySettings.PLAYER_DECAL_ID = PockeySettings.SMALL_DECALS_ARRAY[0].id;
        PockeySettings.LARGE_AVATARS_ARRAY = [
            {
                category: "AVATARS",
                id: "avatar_guest",
                icon: Settings.desktopAssetsPath + "Images/avatar_guest.png",
                level: 1
            },
            {
                category: "AVATARS",
                id: "avatar_boi",
                icon: Settings.desktopAssetsPath + "Images/avatar_boi.png",
                level: 1
            },
            {
                category: "AVATARS",
                id: "avatar_grrl",
                icon: Settings.desktopAssetsPath + "Images/avatar_grrl.png",
                level: 1
            },
            {
                category: "AVATARS",
                id: "nerdist",
                icon: Settings.desktopAssetsPath + "Images/avatar_nerdist.png",
                level: 2
            },
            {
                category: "AVATARS",
                id: "avatar_micky",
                icon: Settings.desktopAssetsPath + "Images/avatar_micky.png",
                level: 2
            },
            {
                category: "AVATARS",
                id: "avatar_glenn",
                icon: Settings.desktopAssetsPath + "Images/avatar_glenn.png",
                level: 3
            },
            {
                category: "AVATARS",
                id: "avatar_sc-izzi",
                icon: Settings.desktopAssetsPath + "Images/avatar_sc-izzi.png",
                level: 4
            },
            {
                category: "AVATARS",
                id: "avatar_atlas",
                icon: Settings.desktopAssetsPath + "Images/avatar_atlas.png",
                level: 5
            },
            {
                category: "AVATARS",
                id: "avatar_bear-blue",
                icon: Settings.desktopAssetsPath + "Images/avatar_bear-blue.png",
                level: 6
            },
            {
                category: "AVATARS",
                id: "avatar_cate",
                icon: Settings.desktopAssetsPath + "Images/avatar_cate.png",
                level: 7
            },
            {
                category: "AVATARS",
                id: "avatar_kooky",
                icon: Settings.desktopAssetsPath + "Images/avatar_kooky.png",
                level: 8
            },
            {
                category: "AVATARS",
                id: "avatar_r66-z",
                icon: Settings.desktopAssetsPath + "Images/avatar_r66-z.png",
                level: 8
            },
            {
                category: "AVATARS",
                icon: Settings.desktopAssetsPath + "Images/avatar_sc-comet.png",
                id: "avatar_sc-comet",
                level: 8
            },
            {
                category: "AVATARS",
                id: "avatar_spooky",
                icon: Settings.desktopAssetsPath + "Images/avatar_spooky.png",
                level: 9
            },
            {
                category: "AVATARS",
                id: "avatar_xmas-atlas",
                icon: Settings.desktopAssetsPath + "Images/avatar_xmas-atlas.png",
                level: 9
            },
            {
                category: "AVATARS",
                id: "avater_snuggles",
                icon: Settings.desktopAssetsPath + "Images/avater_snuggles.png",
                level: 10
            }
        ];
        PockeySettings.SMALL_AVATARS_ARRAY = [
            {
                category: "AVATARS",
                id: "avatar_guest",
                icon: Settings.desktopAssetsPath + "Images/avatar_guest.png",
                level: 1
            }
        ];
        PockeySettings.LARGE_MISC_ARRAY = [
            {
                category: "MISC",
                id: "feltcolor-blue",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/misc/icon_feltcolor-blue.png",
                level: 1
            },
            {
                category: "MISC",
                id: "feltcolor-orange",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/misc/icon_feltcolor-orange.png",
                level: 1
            },
            {
                category: "MISC",
                id: "feltcolor-pink",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/misc/icon_feltcolor-pink.png",
                level: 1
            },
            {
                category: "MISC",
                id: "feltcolor-purple",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/misc/icon_feltcolor-purple.png",
                level: 1
            },
            {
                category: "MISC",
                id: "feltcolor-red",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/misc/icon_feltcolor-red.png",
                level: 1
            },
            {
                category: "MISC",
                id: "feltcolor-silver",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/misc/icon_feltcolor-silver.png",
                level: 1
            },
            {
                category: "MISC",
                id: "feltcolor-teal",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/misc/icon_feltcolor-teal.png",
                level: 1
            },
            {
                category: "MISC",
                id: "feltcolor-tope",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/misc/icon_feltcolor-tope.png",
                level: 1
            },
            {
                category: "MISC",
                id: "feltcolor-yellow",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/misc/icon_feltcolor-blue.png",
                level: 1
            }
        ];
        PockeySettings.SMALL_MISC_ARRAY = [
            {
                category: "MISC",
                id: "feltcolor-blue",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/misc/icon_feltcolor-blue.png",
                level: 1
            }
        ];
        PockeySettings.PLAYER_MISC_ID = PockeySettings.SMALL_MISC_ARRAY[0].id;
        PockeySettings.SMALL_CUES_ARRAY = [
            {
                category: "CUES",
                id: "icon_stick_default",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/icon_stick-default.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/stick_default.png",
                level: 1
            }
        ];
        PockeySettings.LARGE_CUES_ARRAY = [
            {
                category: "CUES",
                id: "icon_stick-default",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/icon_stick-default.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/stick_default.png",
                level: 1
            },
            {
                category: "CUES",
                id: "stick_basic",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/icon_stick-basic.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/stick_basic.png",
                level: 1
            },
            {
                category: "CUES",
                id: "stick_asiimowned",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/icon_stick-asiimowned.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/stick_asiimowned.png",
                level: 1
            },
            {
                category: "CUES",
                id: "stick_bluesteel",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/icon_stick-bluesteel.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/stick_bluesteel.png",
                level: 2
            },
            {
                category: "CUES",
                id: "stick_candycane",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/icon_stick-candycane.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/stick_candycane.png",
                level: 2
            },
            {
                category: "CUES",
                id: "stick_dotty",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/icon_stick-dotty.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/stick_dotty.png",
                level: 2
            },
            {
                category: "CUES",
                id: "stick_faceybook",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/icon_stick-faceybook.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/stick_faceybook.png",
                level: 3
            },
            {
                category: "CUES",
                id: "stick_faceyou",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/icon_stick-faceyou.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/stick_faceyou.png",
                level: 3
            },
            {
                category: "CUES",
                id: "stick_ivory",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/icon_stick-ivory.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/stick_ivory.png",
                level: 4
            },
            {
                category: "CUES",
                id: "stick_ninja",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/icon_stick-ninja.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/stick_ninja.png",
                level: 4
            },
            {
                category: "CUES",
                id: "stick_pinky",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/icon_stick-pinky.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/stick_pinky.png",
                level: 4
            },
            {
                category: "CUES",
                id: "stick_purplestripe",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/icon_stick-purplestripe.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/stick_purplestripe.png",
                level: 5
            },
            {
                category: "CUES",
                id: "stick_ragequit",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/icon_stick-ragequit.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/stick_ragequit.png",
                level: 6
            },
            {
                category: "CUES",
                id: "stick_rawkstar",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/icon_stick-rawkstar.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/stick_rawkstar.png",
                level: 7
            },
            {
                category: "CUES",
                id: "stick_rocket",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/icon_stick-rocket.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/stick_rocket.png",
                level: 7
            },
            {
                category: "CUES",
                id: "stick_snakeeyes",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/icon_stick-snakeeyes.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/stick_snakeeyes.png",
                level: 8
            },
            {
                category: "CUES",
                id: "stick_tiger",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/icon_stick-tiger.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/stick_tiger.png",
                level: 8
            },
            {
                category: "CUES",
                id: "stick_tweetybird",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/icon_stick-tweetybird.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/stick_tweetybird.png",
                level: 9
            },
            {
                category: "CUES",
                id: "stick_whiteknight",
                icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/icon_stick-whiteknight.png",
                model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolsticks/stick_whiteknight.png",
                level: 10
            },
        ];
        PockeySettings.PLAYER_CUE_ID = PockeySettings.SMALL_CUES_ARRAY[0].id;
        PockeySettings.ROUND_DURATION_IN_SECONDS = 25;
        PockeySettings.MAIN_COLLISION_POLYGON = [
            [-559, -98],
            [-487, -98],
            [-482, -106],
            [-482, -196],
            [-485, -201],
            [-520, -242],
            [-520, -268],
            [-494, -282],
            [-468, -264],
            [-439, -245],
            [-431, -242],
            [-47, -242],
            [-41, -245],
            [-25, -264],
            [-10, -288],
            [14, -288],
            [30, -264],
            [46, -245],
            [53, -242],
            [439, -242],
            [447, -245],
            [488, -280],
            [515, -278],
            [527, -249],
            [490, -202],
            [484, -195],
            [484, -104],
            [492, -96],
            [555, -96],
            [565, -96],
            [565, -317],
            [-559, -317]
        ];
        PockeySettings.MAIN_COLLISION_SHADOW = [
            [429 - 978, 277 - 12 - 549],
            [429 - 978, 561 - 12 - 549],
            [513 - 978, 561 - 12 - 549],
            [513 - 978, 357 - 12 - 549],
            [478 - 978, 314 - 12 - 549],
            [476 - 978, 300 - 12 - 549],
            [490 - 978, 303 - 12 - 549],
            [535 - 978, 336 - 12 - 549],
            [940 - 978, 336 - 12 - 549],
            [981 - 978, 287 - 12 - 549],
            [1018 - 978, 335 - 12 - 549],
            [1426 - 978, 335 - 12 - 549],
            [1469 - 978, 303 - 12 - 549],
            [1485 - 978, 300 - 12 - 549],
            [1483 - 978, 314 - 12 - 549],
            [1448 - 978, 358 - 12 - 549],
            [1448 - 978, 561 - 12 - 549],
            [1533 - 978, 561 - 12 - 549],
            [1533 - 978, 277 - 12 - 549]
        ];
        PockeySettings.PLAYER_TOTAL_POINTS = 1;
        return PockeySettings;
    }());
    Pockey.PockeySettings = PockeySettings;
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var Sound;
    (function (Sound) {
        var Settings = Framework.Settings;
        var PockeySoundNames = (function () {
            function PockeySoundNames() {
            }
            PockeySoundNames.MAIN_MENU_AMBIANCE = Settings.desktopAssetsPath + "Sounds/" + "pockey_main_menu.ogg";
            PockeySoundNames.IN_GAME_AMBIANCE = Settings.desktopAssetsPath + "Sounds/" + "ambient.ogg";
            PockeySoundNames.SHOOT_BALL = Settings.desktopAssetsPath + "Sounds/" + "shoot_ball.ogg";
            PockeySoundNames.LAST_FIVE_SECONDS = Settings.desktopAssetsPath + "Sounds/" + "5sec.ogg";
            PockeySoundNames.OPPONENT_FOUND = Settings.desktopAssetsPath + "Sounds/" + "opponent_found.ogg";
            PockeySoundNames.BALL_TO_BALL_HIT = Settings.desktopAssetsPath + "Sounds/" + "ball2ball_hit.ogg";
            return PockeySoundNames;
        }());
        Sound.PockeySoundNames = PockeySoundNames;
    })(Sound = Pockey.Sound || (Pockey.Sound = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var GameModule;
    (function (GameModule) {
        var SignalsManager = Framework.Signals.SignalsManager;
        var SignalsType = Framework.Signals.SignalsType;
        var PockeySoundNames = Pockey.Sound.PockeySoundNames;
        var Vector2 = Framework.Utils.Vector2;
        var MaterialType;
        (function (MaterialType) {
            MaterialType[MaterialType["BALL_MATERIAL"] = 1] = "BALL_MATERIAL";
            MaterialType[MaterialType["SHADOW_MATERIAL"] = 2] = "SHADOW_MATERIAL";
            MaterialType[MaterialType["LINE_MATERIAL"] = 3] = "LINE_MATERIAL";
            MaterialType[MaterialType["BALL_ONLY_MATERIAL"] = 4] = "BALL_ONLY_MATERIAL";
            MaterialType[MaterialType["PUCK_ONLY_MATERIAL"] = 5] = "PUCK_ONLY_MATERIAL";
            MaterialType[MaterialType["PUCK_MATERIAL"] = 6] = "PUCK_MATERIAL";
            MaterialType[MaterialType["GOALIE_MATERIAL"] = 7] = "GOALIE_MATERIAL";
        })(MaterialType = GameModule.MaterialType || (GameModule.MaterialType = {}));
        var P2WorldManager = (function () {
            function P2WorldManager() {
                this.initialized = false;
                this.frameStep = 1 / 60;
                this.name = "P2WorldManager";
                this.materials = {};
            }
            P2WorldManager.Instance = function () {
                if (!P2WorldManager.instance) {
                    P2WorldManager.instance = new P2WorldManager();
                    if (!P2WorldManager.Instance().initialized) {
                        P2WorldManager.Instance().world = new p2.World({
                            gravity: [0, 0],
                        });
                        TweenMax.delayedCall(Pockey.PockeySettings.P2_WORLD_STEP, P2WorldManager.Instance().createElements.bind(this));
                        P2WorldManager.Instance().initialized = true;
                        console.log("%c" + "P2WorldManager initialized", "color: blue");
                    }
                }
                return P2WorldManager.instance;
            };
            P2WorldManager.prototype.getMaterialByID = function (materialID) {
                if (!_.isNull(P2WorldManager.Instance().materials[materialID]) && !_.isUndefined(P2WorldManager.Instance().materials[materialID]))
                    return P2WorldManager.Instance().materials[materialID];
                else {
                    console.log("c%" + " " + P2WorldManager.Instance().name + " -> ERROR: material not registered");
                    return null;
                }
            };
            P2WorldManager.prototype.createElements = function () {
                P2WorldManager.Instance().world.sleepMode = p2.World.BODY_SLEEPING;
                P2WorldManager.Instance().materials = {};
                P2WorldManager.createMaterials();
                P2WorldManager.defineContactMaterials();
            };
            P2WorldManager.createMaterials = function () {
                P2WorldManager.createNewMaterial(MaterialType.SHADOW_MATERIAL);
                P2WorldManager.createNewMaterial(MaterialType.BALL_MATERIAL);
                P2WorldManager.createNewMaterial(MaterialType.PUCK_MATERIAL);
                P2WorldManager.createNewMaterial(MaterialType.BALL_ONLY_MATERIAL);
                P2WorldManager.createNewMaterial(MaterialType.PUCK_ONLY_MATERIAL);
                P2WorldManager.createNewMaterial(MaterialType.LINE_MATERIAL);
                P2WorldManager.createNewMaterial(MaterialType.GOALIE_MATERIAL);
            };
            P2WorldManager.defineContactMaterials = function () {
                var ballToNormalLineContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.LINE_MATERIAL), {
                    friction: 0.68,
                    restitution: 0.6821,
                    relaxation: 10
                });
                var ballToBallContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), {
                    friction: 0.2,
                    restitution: 0.9
                });
                P2WorldManager.Instance().world.addContactMaterial(ballToBallContactMaterial);
                var ballToPuckContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_MATERIAL), {
                    friction: 0.2,
                    restitution: 0.9
                });
                P2WorldManager.Instance().world.addContactMaterial(ballToPuckContactMaterial);
                P2WorldManager.Instance().world.addContactMaterial(ballToNormalLineContactMaterial);
                var ballToPuckOnlyLineContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_ONLY_MATERIAL), {
                    friction: 0.4,
                    restitution: 0.6
                });
                P2WorldManager.Instance().world.addContactMaterial(ballToPuckOnlyLineContactMaterial);
                var puckToNormalLineContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.LINE_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_MATERIAL), {
                    surfaceVelocity: 88,
                    friction: 0.6,
                    restitution: 0.6,
                    relaxation: 10
                });
                P2WorldManager.Instance().world.addContactMaterial(puckToNormalLineContactMaterial);
                var puckToBallOnlyLineContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_ONLY_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_MATERIAL), {
                    stiffness: 888,
                    friction: 20,
                    restitution: 0.4
                });
                P2WorldManager.Instance().world.addContactMaterial(puckToBallOnlyLineContactMaterial);
                var goalieToBallContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.GOALIE_MATERIAL), {
                    restitution: 1
                });
                P2WorldManager.Instance().world.addContactMaterial(goalieToBallContactMaterial);
                var goalieToPuckContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.GOALIE_MATERIAL), {
                    restitution: 0.8
                });
                P2WorldManager.Instance().world.addContactMaterial(goalieToPuckContactMaterial);
                var veloCounter = 0;
                P2WorldManager.Instance().world.on("preSolve", function (evt) {
                    _.forEach(evt.contactEquations, function (ce) {
                        if ((ce.shapeA.material.id == MaterialType.PUCK_MATERIAL && ce.shapeB.material.id == MaterialType.PUCK_ONLY_MATERIAL)
                            || (ce.shapeA.material.id == MaterialType.BALL_MATERIAL && ce.shapeB.material.id == MaterialType.BALL_ONLY_MATERIAL)
                            || (ce.shapeA.material.id == MaterialType.BALL_MATERIAL && ce.shapeB.material.id == MaterialType.SHADOW_MATERIAL)
                            || (ce.shapeA.material.id == MaterialType.SHADOW_MATERIAL && ce.shapeB.material.id == MaterialType.BALL_MATERIAL)
                            || (ce.shapeA.material.id == MaterialType.PUCK_MATERIAL && ce.shapeB.material.id == MaterialType.SHADOW_MATERIAL)
                            || (ce.shapeA.material.id == MaterialType.SHADOW_MATERIAL && ce.shapeB.material.id == MaterialType.PUCK_MATERIAL)
                            || (ce.shapeA.material.id == MaterialType.SHADOW_MATERIAL && ce.shapeB.material.id == MaterialType.GOALIE_MATERIAL)
                            || (ce.shapeA.material.id == MaterialType.GOALIE_MATERIAL && ce.shapeB.material.id == MaterialType.PUCK_ONLY_MATERIAL)
                            || (ce.shapeA.material.id == MaterialType.GOALIE_MATERIAL && ce.shapeB.material.id == MaterialType.LINE_MATERIAL)) {
                            ce.enabled = false;
                        }
                        else if ((ce.shapeA.material.id == MaterialType.BALL_MATERIAL && ce.shapeB.material.id == MaterialType.BALL_MATERIAL)) {
                            var maxPower = 1200;
                            var velocityVectorA = new Vector2(ce.bodyA.velocity[0], ce.bodyA.velocity[1]);
                            var speedA = velocityVectorA.getMagnitude();
                            var velocityVectorB = new Vector2(ce.bodyB.velocity[0], ce.bodyB.velocity[1]);
                            var speedB = velocityVectorB.getMagnitude();
                            var higherVelocity = (speedB > speedA) ? speedB : speedA;
                            var hitVolume = Math.round((higherVelocity / maxPower) * 100) / 100;
                            if (hitVolume > 1)
                                hitVolume = 1;
                            else if (hitVolume < 0.5)
                                hitVolume = 0.5;
                            SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{
                                    soundName: PockeySoundNames.BALL_TO_BALL_HIT,
                                    volume: hitVolume
                                }]);
                        }
                        else if ((ce.shapeA.material.id == MaterialType.BALL_MATERIAL && ce.shapeB.material.id == MaterialType.GOALIE_MATERIAL)) {
                            var ballVelocity = new Vector2(ce.bodyA.velocity[0], ce.bodyA.velocity[1]);
                            var ballSpeed = ballVelocity.getMagnitude();
                            if (ballSpeed < 388) {
                                var normalizedVector = ballVelocity.normalise().multiply(388);
                                ce.bodyA.velocity[0] = normalizedVector.x;
                                ce.bodyA.velocity[1] = normalizedVector.y;
                            }
                        }
                        else if ((ce.shapeA.material.id == MaterialType.PUCK_MATERIAL && ce.shapeB.material.id == MaterialType.GOALIE_MATERIAL)) {
                            veloCounter++;
                            var ballVelocity = new Vector2(ce.bodyA.velocity[0], ce.bodyA.velocity[1]);
                            var ballSpeed = ballVelocity.getMagnitude();
                            if (ballSpeed < 388) {
                                var normalizedVector = ballVelocity.normalise().multiply(388);
                                ce.bodyA.velocity[0] = normalizedVector.x;
                                ce.bodyA.velocity[1] = normalizedVector.y;
                            }
                        }
                    });
                }, this);
            };
            P2WorldManager.prototype.checkCollisions = function () {
            };
            P2WorldManager.createNewMaterial = function (ballMaterialType) {
                P2WorldManager.Instance().materials[ballMaterialType] = new p2.Material(ballMaterialType);
            };
            return P2WorldManager;
        }());
        GameModule.P2WorldManager = P2WorldManager;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Framework;
(function (Framework) {
    var Utils;
    (function (Utils) {
        var P2WorldManager = Pockey.GameModule.P2WorldManager;
        var LineType;
        (function (LineType) {
            LineType["BallsOnly"] = "BallOnly";
            LineType["PuckOnly"] = "PuckOnly";
            LineType["Normal"] = "Normal";
        })(LineType = Utils.LineType || (Utils.LineType = {}));
        var Line = (function () {
            function Line(firstPoint, secondPoint, materialType) {
                this.firstPoint = firstPoint;
                this.secondPoint = secondPoint;
                this.angle = this.getAngle();
                this.cosAlpha = Math.cos(this.angle);
                this.sinAlpha = Math.sin(this.angle);
                this.p2Body = new p2.Body({
                    mass: 0,
                    position: [(firstPoint.x + secondPoint.x) / 2, (firstPoint.y + secondPoint.y) / 2],
                    angle: this.getAngle()
                });
                var lineShape = new p2.Line({ length: firstPoint.distanceTo(secondPoint), collisionGroup: 5 });
                lineShape.material = new p2.Material(materialType);
                this.p2Body.addShape(lineShape);
                P2WorldManager.Instance().world.addBody(this.p2Body);
            }
            Line.prototype.getAngle = function () {
                var x1 = this.firstPoint.x;
                var y1 = this.firstPoint.y;
                var x2 = this.secondPoint.x;
                var y2 = this.secondPoint.y;
                var dy = y2 - y1;
                var dx = x2 - x1;
                var theta = Math.atan2(dy, dx);
                return theta;
            };
            return Line;
        }());
        Utils.Line = Line;
    })(Utils = Framework.Utils || (Framework.Utils = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    var Loaders;
    (function (Loaders) {
        var SignalsManager = Framework.Signals.SignalsManager;
        var SignalsType = Framework.Signals.SignalsType;
        var AssetsLoader = (function () {
            function AssetsLoader(onLoadCompleteCallback) {
                this.loader = PIXI.loader;
                this.assetsNames = [];
                this.loader.onComplete.add(function () {
                    SignalsManager.DispatchSignal(SignalsType.ASSETS_LOADED);
                });
                this.loader.onProgress.add(function () {
                });
            }
            AssetsLoader.prototype.addAssetToLoad = function (assetName) {
                if (!_.includes(this.assetsNames, assetName)) {
                    this.assetsNames.push(assetName);
                    this.loader.add(assetName);
                }
            };
            AssetsLoader.prototype.StartLoading = function () {
                this.loadFonts();
                this.loader.load();
            };
            AssetsLoader.prototype.addFontToLoad = function (fontName) {
                if (!this.fontsToLoad)
                    this.fontsToLoad = [];
                this.fontsToLoad.push(fontName);
            };
            AssetsLoader.prototype.loadFonts = function () {
                var _this = this;
                WebFont.load({
                    active: function () {
                        TweenMax.delayedCall(0.4, _this.onFontLoadComplete.bind(_this));
                    },
                    fontloading: this.preRenderFont.bind(this),
                    custom: {
                        families: this.fontsToLoad,
                        urls: ['/fonts.css']
                    }
                });
            };
            AssetsLoader.prototype.onFontLoadComplete = function () {
                console.log("Font Loading Complete");
            };
            AssetsLoader.prototype.preRenderFont = function () {
            };
            return AssetsLoader;
        }());
        Loaders.AssetsLoader = AssetsLoader;
    })(Loaders = Framework.Loaders || (Framework.Loaders = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    var Background;
    (function (Background) {
        var Sprite = PIXI.Sprite;
        var AbstractModule = Framework.Abstracts.AbstractModule;
        var SignalsManager = Framework.Signals.SignalsManager;
        var SignalsType = Framework.Signals.SignalsType;
        var AbstractBackgroundModule = (function (_super) {
            __extends(AbstractBackgroundModule, _super);
            function AbstractBackgroundModule() {
                var _this = _super.call(this) || this;
                _this.addAssetToLoad(Framework.Settings.desktopAssetsPath + Framework.Settings.backgroundsPath + "main_bg.png");
                _this.registerBackground(Framework.Settings.mainBackgroundName, Framework.Settings.desktopAssetsPath + Framework.Settings.backgroundsPath + "main_bg.png");
                return _this;
            }
            AbstractBackgroundModule.prototype.registerSignalsHandlers = function () {
                _super.prototype.registerSignalsHandlers.call(this);
                SignalsManager.AddSignalCallback(SignalsType.CHANGE_BACKGROUND, this.onChangeBackground.bind(this));
            };
            AbstractBackgroundModule.prototype.onChangeBackground = function (param) {
                this.changeBackground(param[0].toString(), +param[1]);
            };
            AbstractBackgroundModule.prototype.registerBackground = function (name, texturePath) {
                if (!this.backgroundsPaths)
                    this.backgroundsPaths = {};
                this.backgroundsPaths[name] = texturePath;
            };
            AbstractBackgroundModule.prototype.createElements = function () {
                var _this = this;
                _super.prototype.createElements.call(this);
                this.backgrounds = {};
                _.forEach(this.backgroundsPaths, function (path, id) {
                    _this.backgrounds[id] = new Sprite(PIXI.Texture.fromFrame(path));
                    _this.backgrounds[id].anchor.x = 0.5;
                    _this.backgrounds[id].anchor.y = 0.5;
                });
            };
            AbstractBackgroundModule.prototype.changeBackground = function (id, fadeTime) {
                if (this.backgrounds[id]) {
                    var newBackground = this.backgrounds[id];
                    newBackground.alpha = 0;
                    this.addChild(newBackground);
                    if (!_.isUndefined(this.currentBackground) && !_.isNull(this.currentBackground)) {
                        var oldBackground = this.currentBackground;
                        TweenMax.to(newBackground, fadeTime, { alpha: 1, onComplete: this.removeBackgroundFromParent.bind(this), onCompleteParams: [oldBackground] });
                    }
                    else {
                        TweenMax.to(newBackground, fadeTime, { alpha: 1 });
                    }
                    this.currentBackground = newBackground;
                }
                else {
                    console.warn("background id not registered: " + id);
                }
            };
            AbstractBackgroundModule.prototype.removeBackgroundFromParent = function (background) {
                if (background && background.parent)
                    background.parent.removeChild(background);
            };
            AbstractBackgroundModule.prototype.onResize = function (params) {
                _super.prototype.onResize.call(this, params);
                if (this.currentBackground && this.currentBackground == this.backgrounds[Framework.Settings.mainBackgroundName]) {
                    this.currentBackground.height = Framework.Settings.stageHeight;
                    var scale = this.currentBackground.scale.y;
                    this.currentBackground.scale.x = scale;
                    if (this.currentBackground.width < Framework.Settings.stageWidth) {
                        this.currentBackground.width = Framework.Settings.stageWidth;
                        scale = this.currentBackground.scale.x;
                        this.currentBackground.scale.y = scale;
                    }
                    this.currentBackground.x = Framework.Settings.stageWidth / 2;
                    this.currentBackground.y = Framework.Settings.stageHeight / 2;
                }
            };
            return AbstractBackgroundModule;
        }(AbstractModule));
        Background.AbstractBackgroundModule = AbstractBackgroundModule;
    })(Background = Framework.Background || (Framework.Background = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    var UserInterface;
    (function (UserInterface) {
        var AbstractModule = Framework.Abstracts.AbstractModule;
        var AbstractUserInterfaceModule = (function (_super) {
            __extends(AbstractUserInterfaceModule, _super);
            function AbstractUserInterfaceModule() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return AbstractUserInterfaceModule;
        }(AbstractModule));
        UserInterface.AbstractUserInterfaceModule = AbstractUserInterfaceModule;
    })(UserInterface = Framework.UserInterface || (Framework.UserInterface = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    var Utils;
    (function (Utils) {
        var Point = PIXI.Point;
        var TouchHandler = (function () {
            function TouchHandler() {
                this.initialized = false;
                this.isTouchMoving = false;
            }
            TouchHandler.Instance = function () {
                if (!TouchHandler.instance) {
                    TouchHandler.instance = new TouchHandler();
                    if (!TouchHandler.Instance().initialized) {
                        TouchHandler.Instance().initialized = true;
                        TouchHandler.Instance().position = new Point();
                        document.ontouchmove = TouchHandler.Instance().handleTouchMove.bind(this);
                        document.ontouchend = TouchHandler.Instance().handleTouchEnd.bind(this);
                    }
                }
                return TouchHandler.instance;
            };
            TouchHandler.prototype.handleTouchMove = function (e) {
                var x = e.touches[0].clientX;
                var y = e.touches[0].clientY;
                TouchHandler.Instance().position = new Point(x, y);
                TouchHandler.Instance().isTouchMoving = true;
            };
            TouchHandler.prototype.handleTouchEnd = function (e) {
                TouchHandler.Instance().isTouchMoving = false;
            };
            return TouchHandler;
        }());
        Utils.TouchHandler = TouchHandler;
    })(Utils = Framework.Utils || (Framework.Utils = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    var Connection;
    (function (Connection) {
        var FrameworkSocketNamespaces = (function () {
            function FrameworkSocketNamespaces() {
            }
            FrameworkSocketNamespaces.SEARCH = "/searching";
            FrameworkSocketNamespaces.PLAY = "/play";
            return FrameworkSocketNamespaces;
        }());
        Connection.FrameworkSocketNamespaces = FrameworkSocketNamespaces;
        var FrameworkSocketEvents = (function () {
            function FrameworkSocketEvents() {
            }
            FrameworkSocketEvents.newConnection = "FrameworkSocketEvents" + "newConnection";
            FrameworkSocketEvents.letsConnect = "FrameworkSocketEvents" + "letsConnect";
            FrameworkSocketEvents.joinRoom = "FrameworkSocketEvents" + "joinRoom";
            FrameworkSocketEvents.joinedRoom = "FrameworkSocketEvents" + "joinedRoom";
            FrameworkSocketEvents.privateMessage = "FrameworkSocketEvents" + "privateMessage";
            FrameworkSocketEvents.getUserFromDatabase = "FrameworkSocketEvents" + "getUserFromDatabase";
            FrameworkSocketEvents.updateUserData = "FrameworkSocketEvents" + "updateUserData";
            return FrameworkSocketEvents;
        }());
        Connection.FrameworkSocketEvents = FrameworkSocketEvents;
        var FrameworkSocketMessages = (function () {
            function FrameworkSocketMessages() {
            }
            FrameworkSocketMessages.WHO_WANTS_TO_PLAY = "FrameworkSocketMessages." + "WHO_WANTS_TO_PLAY";
            FrameworkSocketMessages.I_WANT_TO_PLAY = "FrameworkSocketMessages." + "I_WANTS_TO_PLAY";
            FrameworkSocketMessages.HELLO = "FrameworkSocketMessages." + "HELLO";
            return FrameworkSocketMessages;
        }());
        Connection.FrameworkSocketMessages = FrameworkSocketMessages;
    })(Connection = Framework.Connection || (Framework.Connection = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    var Connection;
    (function (Connection) {
        var SignalsManager = Framework.Signals.SignalsManager;
        var ConnectionSignalsType = Framework.Signals.ConnectionSignalsType;
        var SocketClient = (function () {
            function SocketClient() {
                this.lookingForPartner = false;
                this.myID = "";
                this.socketConnectionCreated = false;
            }
            SocketClient.prototype.initializeClientSocket = function (onSocketInitialiazed) {
                this.socket = io();
                this.socket.binaryType = "blob";
                this.socket.on('connect', function () {
                    onSocketInitialiazed();
                });
            };
            SocketClient.prototype.getUserFromDataBase = function (username, callback) {
                this.socket.on(Connection.FrameworkSocketEvents.getUserFromDatabase, function (usernameData) {
                    callback(usernameData);
                });
                this.socket.emit(Connection.FrameworkSocketEvents.getUserFromDatabase, username);
            };
            SocketClient.prototype.updateUserData = function (dbObject, callback) {
                this.socket.on(Connection.FrameworkSocketEvents.updateUserData, function (data) {
                    callback(data);
                });
                this.socket.emit(Connection.FrameworkSocketEvents.updateUserData, dbObject);
                console.log("intra la socket client updateUserData");
            };
            SocketClient.prototype.initializeSearchingSocket = function () {
                var _this = this;
                this.searchingSocket = io(Connection.FrameworkSocketNamespaces.SEARCH);
                this.searchingSocket.on('connect', function () {
                    _this.myID = _this.searchingSocket.id.replace(Connection.FrameworkSocketNamespaces.SEARCH, '');
                    SignalsManager.DispatchSignal(ConnectionSignalsType.UPDATE_SOCKET_ID, [_this.myID]);
                    console.log("sunt conectat pe search: " + _this.myID);
                    _this.searchingSocket.emit(Connection.FrameworkSocketEvents.letsConnect, Connection.FrameworkSocketMessages.WHO_WANTS_TO_PLAY, _this.myID, "");
                    _this.lookingForPartner = true;
                });
                this.searchingSocket.on(Connection.FrameworkSocketEvents.letsConnect, function (msg, id, partnerID) {
                    console.log("cineva vrea sa ma conectez, socket: " + id + ". verific...");
                    if (_this.lookingForPartner && msg == Connection.FrameworkSocketMessages.WHO_WANTS_TO_PLAY) {
                        if (id != _this.myID && (partnerID == "")) {
                            console.log("ma conectez cu: " + id);
                            _this.searchingSocket.emit(Connection.FrameworkSocketEvents.letsConnect, Connection.FrameworkSocketMessages.I_WANT_TO_PLAY, id, _this.myID);
                            _this.partnerID = id;
                            _this.connectionID = id + _this.myID;
                            _this.initializePlayingSocket();
                            _this.lookingForPartner = false;
                        }
                    }
                    else if (_this.lookingForPartner && msg == Connection.FrameworkSocketMessages.I_WANT_TO_PLAY) {
                        if (id == _this.myID && (partnerID != "" && partnerID != null && partnerID != undefined)) {
                            console.log("ma conectez cu: " + partnerID);
                            _this.partnerID = partnerID;
                            _this.connectionID = _this.myID + partnerID;
                            _this.initializePlayingSocket();
                            _this.lookingForPartner = false;
                        }
                    }
                });
            };
            SocketClient.prototype.initializePlayingSocket = function () {
                var _this = this;
                this.playingSocket = io(Connection.FrameworkSocketNamespaces.PLAY);
                this.playingSocket.on('connect', function () {
                    _this.searchingSocket.disconnect();
                    _this.searchingSocket = null;
                    _this.playingSocket.emit(Connection.FrameworkSocketEvents.joinRoom, _this.connectionID, _this.myID);
                    _this.playingSocket.on(Connection.FrameworkSocketEvents.joinedRoom, function (room) {
                        console.log("sunt conectat pe playing room: " + room + " as " + _this.myID);
                        _this.playingSocket.emit(Connection.FrameworkSocketEvents.privateMessage, _this.connectionID, Connection.FrameworkSocketMessages.HELLO, _this.myID, _this.partnerID);
                    });
                    _this.playingSocket.on(Connection.FrameworkSocketEvents.privateMessage, function (messageType, messageData) {
                        _this.handlePrivateMessage(messageType, messageData);
                    });
                });
            };
            SocketClient.prototype.handlePrivateMessage = function (messageType, messageData) {
                switch (messageType) {
                    case Connection.FrameworkSocketMessages.HELLO: {
                        if (!this.socketConnectionCreated) {
                            this.socketConnectionCreated = true;
                            SignalsManager.DispatchSignal(ConnectionSignalsType.SOCKET_IO_CONNECTION_CREATED, [this.myID, this.partnerID, this.connectionID]);
                            this.playingSocket.emit(Connection.FrameworkSocketEvents.privateMessage, this.connectionID, Connection.FrameworkSocketMessages.HELLO);
                        }
                        break;
                    }
                }
            };
            SocketClient.prototype.sendPrivateMessage = function (params) {
                if (this.playingSocket && this.connectionID && this.myID) {
                    var messageType = params[0];
                    var messageData = params[1];
                    this.playingSocket.emit(Connection.FrameworkSocketEvents.privateMessage, this.connectionID, messageType, messageData);
                }
            };
            return SocketClient;
        }());
        Connection.SocketClient = SocketClient;
    })(Connection = Framework.Connection || (Framework.Connection = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    var Connection;
    (function (Connection) {
        var SignalsManager = Framework.Signals.SignalsManager;
        var SignalsType = Framework.Signals.SignalsType;
        var LoginHandler = (function () {
            function LoginHandler() {
                SignalsManager.AddSignalCallback(SignalsType.CHECK_USER_DATA, this.onCheckUserData.bind(this));
            }
            LoginHandler.prototype.onCheckUserData = function () {
                console.log("on LOGIN HANDLER: onCheckUserData");
                SignalsManager.DispatchSignal(SignalsType.USER_DATA_CHECKED);
            };
            return LoginHandler;
        }());
        Connection.LoginHandler = LoginHandler;
    })(Connection = Framework.Connection || (Framework.Connection = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    var Connection;
    (function (Connection) {
        var AbstractModule = Framework.Abstracts.AbstractModule;
        var SocketClient = Framework.Connection.SocketClient;
        var ConnectionSignalsType = Framework.Signals.ConnectionSignalsType;
        var SignalsManager = Framework.Signals.SignalsManager;
        var SignalsType = Framework.Signals.SignalsType;
        var AbstractConnectionModule = (function (_super) {
            __extends(AbstractConnectionModule, _super);
            function AbstractConnectionModule() {
                var _this = _super.call(this) || this;
                _this.Name = "AbstractConnectionModule";
                _this.createLoginHandler();
                return _this;
            }
            AbstractConnectionModule.prototype.createLoginHandler = function () {
                var loginHandler = new Connection.LoginHandler();
                console.log("%c AbstractConnectionModule -> login handler", "color: white; background:green");
            };
            AbstractConnectionModule.prototype.createElements = function () {
                this.startSocketConnection();
            };
            AbstractConnectionModule.prototype.startSocketConnection = function () {
                this.onCreateSocketIoConnection();
                console.log("%c AbstractConnectionModule -> startSocketConnection", "color: white; background:green");
            };
            AbstractConnectionModule.prototype.registerSignalsHandlers = function () {
                _super.prototype.registerSignalsHandlers.call(this);
                if (!Framework.Settings.singlePlayer) {
                    SignalsManager.AddSignalCallback(ConnectionSignalsType.CREATE_SEARCH_FOR_PARTNER_CONNECTION, this.onCreateSearchForPartnerConnection.bind(this));
                    SignalsManager.AddSignalCallback(ConnectionSignalsType.SOCKET_IO_DISCONNECTED, this.onSocketIoDisconnected.bind(this));
                    SignalsManager.AddSignalCallback(ConnectionSignalsType.PRIVATE_MESSAGE, this.onPrivateMessage.bind(this));
                    SignalsManager.AddSignalCallback(ConnectionSignalsType.UPDATE_SOCKET_ID, this.onUpdateSocketID.bind(this));
                }
            };
            AbstractConnectionModule.prototype.onCreateSearchForPartnerConnection = function () {
                this.socketClient.initializeSearchingSocket();
            };
            AbstractConnectionModule.prototype.onUpdateSocketID = function (params) {
                Framework.Settings.socketID = params[0];
            };
            AbstractConnectionModule.prototype.onSocketIoDisconnected = function () {
            };
            AbstractConnectionModule.prototype.onPrivateMessage = function (params) {
                this.socketClient.sendPrivateMessage(params);
            };
            AbstractConnectionModule.prototype.onCreateSocketIoConnection = function () {
                if (_.isNull(this.socketClient) || _.isUndefined(this.socketClient)) {
                    this.socketClient = this.getSocketIoClient();
                    Connection.DatabaseConnector.socketClient = this.socketClient;
                    this.socketClient.initializeClientSocket(this.onSocketInitiliazed.bind(this));
                }
            };
            AbstractConnectionModule.prototype.onSocketInitiliazed = function () {
                console.log("%c AbstractConnectionModule -> Socket Initiliazed", "color: white; background:green");
                console.log("%c" + this.Name + " Elements Created!", "color: green");
                this.ElementsCreated = true;
                SignalsManager.DispatchSignal(SignalsType.MODULE_ELEMENTS_CREATED);
            };
            AbstractConnectionModule.prototype.getSocketIoClient = function () {
                return new SocketClient();
            };
            return AbstractConnectionModule;
        }(AbstractModule));
        Connection.AbstractConnectionModule = AbstractConnectionModule;
    })(Connection = Framework.Connection || (Framework.Connection = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    var Layers = (function () {
        function Layers() {
        }
        Layers.DefaultLayer = "DefaultLayer";
        Layers.BackgroundLayer = "BackgroundLayer";
        Layers.GameLayer = "GameLayer";
        Layers.UILayer = "UILayer";
        Layers.LayerOrder = [Layers.BackgroundLayer, Layers.GameLayer, Layers.UILayer];
        return Layers;
    }());
    Framework.Layers = Layers;
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    var Connection;
    (function (Connection) {
        var DatabaseConnector = (function () {
            function DatabaseConnector() {
            }
            Object.defineProperty(DatabaseConnector, "socketClient", {
                set: function (value) {
                    this._socketClient = value;
                },
                enumerable: true,
                configurable: true
            });
            DatabaseConnector.checkDatabaseUser = function (userID, callback) {
                this._socketClient.getUserFromDataBase(userID, callback);
            };
            DatabaseConnector.updateUserData = function (dbObject, callback) {
                console.log("intra la database connector updateUserData");
                var cb = (callback != null) ? callback : this.userDataUpdated.bind(this);
                this._socketClient.updateUserData(dbObject, cb);
            };
            DatabaseConnector.userDataUpdated = function (data) {
                console.log("DatabaseConnector userDataUpdated");
            };
            DatabaseConnector.checkUserIDRequestListener = function (e) {
            };
            return DatabaseConnector;
        }());
        Connection.DatabaseConnector = DatabaseConnector;
    })(Connection = Framework.Connection || (Framework.Connection = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    var Sound;
    (function (Sound) {
        var AbstractModule = Framework.Abstracts.AbstractModule;
        var SignalsManager = Framework.Signals.SignalsManager;
        var SignalsType = Framework.Signals.SignalsType;
        var AbstractSoundModule = (function (_super) {
            __extends(AbstractSoundModule, _super);
            function AbstractSoundModule() {
                var _this = _super.call(this) || this;
                _this.Name = "AbstractSoundModule";
                return _this;
            }
            AbstractSoundModule.prototype.registerSignalsHandlers = function () {
                _super.prototype.registerSignalsHandlers.call(this);
                SignalsManager.AddSignalCallback(SignalsType.PLAY_SOUND, this.onPlaySound.bind(this));
                SignalsManager.AddSignalCallback(SignalsType.STOP_SOUND, this.onStopSound.bind(this));
            };
            AbstractSoundModule.prototype.onStopSound = function (params) {
                var soundVO = params[0];
                var sound = PIXI.sound.Sound.from({
                    url: soundVO.soundName
                });
                sound.stop();
            };
            AbstractSoundModule.prototype.onPlaySound = function (params) {
                var soundVO = params[0];
                if (_.isNull(soundVO.volume) || _.isUndefined(soundVO.volume)) {
                    soundVO.volume = 1;
                }
                var sound = PIXI.sound.Sound.from({
                    url: soundVO.soundName,
                    volume: soundVO.volume
                });
                sound.play();
            };
            return AbstractSoundModule;
        }(AbstractModule));
        Sound.AbstractSoundModule = AbstractSoundModule;
    })(Sound = Framework.Sound || (Framework.Sound = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    var AssetsLoader = Framework.Loaders.AssetsLoader;
    var Container = PIXI.Container;
    var SignalsManager = Framework.Signals.SignalsManager;
    var SignalsType = Framework.Signals.SignalsType;
    var TouchHandler = Framework.Utils.TouchHandler;
    var AbstractConnectionModule = Framework.Connection.AbstractConnectionModule;
    var AbstractBackgroundModule = Framework.Background.AbstractBackgroundModule;
    var AbstractUserInterfaceModule = Framework.UserInterface.AbstractUserInterfaceModule;
    var ConnectionSignalsType = Framework.Signals.ConnectionSignalsType;
    var Settings = Framework.Settings;
    var AbstractSoundModule = Framework.Sound.AbstractSoundModule;
    var AbstractEntryPoint = (function () {
        function AbstractEntryPoint() {
            this.name = "";
            this.allElementsCreated = false;
            this.name = "AbstractEntryPoint";
            this.checkDevice();
            this.setWindowSize();
            this.initializePixi();
            this.registerSignals();
            this.subscribeToSignals();
            this.createLayers();
            this.addModules();
            this.initializeSingletons();
            this.startLoadingAssets();
        }
        AbstractEntryPoint.prototype.getCookieData = function () {
            SignalsManager.DispatchSignal(SignalsType.CHECK_USER_DATA);
        };
        AbstractEntryPoint.prototype.userDataChecked = function () {
            if (!this.allElementsCreated) {
                this.allElementsCreated = true;
                SignalsManager.DispatchSignal(SignalsType.ALL_MODULES_ELEMENTS_CREATED);
                SignalsManager.DispatchSignal(SignalsType.WINDOW_RESIZE);
            }
        };
        AbstractEntryPoint.prototype.setWindowSize = function () {
            Settings.stageWidth = window.innerWidth;
            Settings.stageHeight = window.innerHeight;
        };
        AbstractEntryPoint.prototype.checkDevice = function () {
            if (this.isMobile()) {
                Settings.isMobile = true;
                console.log("%c AbstractEntryPoint -> running on MOBILE!", "background: green; color: white; font-weight:bold; ");
                return;
            }
            console.log("%c AbstractEntryPoint -> running on DESKTOP!", "background: green; color: white; font-weight:bold; ");
        };
        AbstractEntryPoint.prototype.initializePixi = function () {
            PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;
            AbstractEntryPoint.renderer = PIXI.autoDetectRenderer(Settings.stageWidth, Settings.stageHeight, {
                backgroundColor: 0x0f404b,
                antialias: true,
            });
            AbstractEntryPoint.renderer.view.style.position = "absolute";
            AbstractEntryPoint.renderer.view.style.top = "0px";
            AbstractEntryPoint.renderer.view.style.left = "0px";
            AbstractEntryPoint.renderer.view.style.zIndex = "-800";
            document.body.appendChild(AbstractEntryPoint.renderer.view);
            this.stage = new Container();
            this.frameAnimate();
        };
        AbstractEntryPoint.prototype.addModules = function () {
            this.addConnectionModule();
            this.addBackgroundModule();
            this.addUIModule();
            this.addSoundModule();
        };
        AbstractEntryPoint.prototype.addSoundModule = function () {
            this.soundModule = this.getSoundModule();
            this.registerModule(this.soundModule);
        };
        AbstractEntryPoint.prototype.addBackgroundModule = function () {
            this.backgroundModule = this.getBackgroundModule();
            this.registerModule(this.backgroundModule);
        };
        AbstractEntryPoint.prototype.addConnectionModule = function () {
            this.connectionModule = this.getConnectionModule();
            this.registerModule(this.connectionModule);
        };
        AbstractEntryPoint.prototype.addUIModule = function () {
            this.uiModule = this.getUIModule();
            this.registerModule(this.uiModule);
        };
        AbstractEntryPoint.prototype.startLoadingAssets = function () {
            var _this = this;
            if (_.isNull(this.assetsLoader) || _.isUndefined(this.assetsLoader)) {
                this.assetsLoader = new AssetsLoader(this.onAssetsLoadComplete.bind(this));
            }
            this.addFontsToLoad();
            console.log(this.gameModules);
            _.forEach(this.gameModules, function (module) {
                _.forEach(module.AssetsToLoad, function (asset) {
                    _this.assetsLoader.addAssetToLoad(asset);
                });
            });
            this.assetsLoader.StartLoading();
        };
        AbstractEntryPoint.prototype.addFontsToLoad = function () {
        };
        AbstractEntryPoint.prototype.onAssetsLoadComplete = function () {
            _.forEach(this.gameModules, function (module) {
                module.createElements();
            });
        };
        AbstractEntryPoint.prototype.registerModule = function (module) {
            if (_.isNull(this.gameModules) || _.isUndefined(this.gameModules)) {
                this.gameModules = [];
            }
            this.gameModules.push(module);
        };
        AbstractEntryPoint.prototype.frameAnimate = function () {
            requestAnimationFrame(this.frameAnimate.bind(this));
            AbstractEntryPoint.renderer.render(this.stage);
        };
        AbstractEntryPoint.prototype.getBackgroundModule = function () {
            var backgroundModule = new AbstractBackgroundModule();
            backgroundModule.Layer = this.getLayer(Framework.Layers.BackgroundLayer);
            return backgroundModule;
        };
        AbstractEntryPoint.prototype.getSoundModule = function () {
            var soundModule = new AbstractSoundModule();
            soundModule.Layer = this.getLayer(Framework.Layers.DefaultLayer);
            return soundModule;
        };
        AbstractEntryPoint.prototype.getUIModule = function () {
            var uiModule = new AbstractUserInterfaceModule();
            uiModule.Layer = this.getLayer(Framework.Layers.UILayer);
            return uiModule;
        };
        AbstractEntryPoint.prototype.getConnectionModule = function () {
            console.log("intra la get connection module in: " + this.name);
            var connectionModule = new AbstractConnectionModule();
            return connectionModule;
        };
        AbstractEntryPoint.prototype.windowResize = function (stageWidth, stageHeight) {
            if (Settings.stageWidth == stageWidth && Settings.stageHeight == stageHeight) {
                return;
            }
            Settings.stageWidth = stageWidth;
            Settings.stageHeight = stageHeight;
            AbstractEntryPoint.renderer.resize(Settings.stageWidth, Settings.stageHeight);
            SignalsManager.DispatchSignal(SignalsType.WINDOW_RESIZE);
        };
        AbstractEntryPoint.prototype.createLayers = function () {
            for (var i = 0; i < Framework.Layers.LayerOrder.length; i++) {
                var layerName = Framework.Layers.LayerOrder[i];
                var layer = new Container();
                layer.name = layerName;
                this.stage.addChild(layer);
            }
        };
        AbstractEntryPoint.prototype.getLayer = function (layerName) {
            return this.stage.getChildByName(layerName);
        };
        AbstractEntryPoint.prototype.initializeSingletons = function () {
            SignalsManager.Instance();
            TouchHandler.Instance();
        };
        AbstractEntryPoint.prototype.subscribeToSignals = function () {
            SignalsManager.GetSignal(SignalsType.ASSETS_LOADED).add(this.onAssetsLoadComplete.bind(this));
            SignalsManager.GetSignal(SignalsType.MODULE_ELEMENTS_CREATED).add(this.onModuleElementsCreated.bind(this));
        };
        AbstractEntryPoint.prototype.registerSignals = function () {
            SignalsManager.CreateNewSignal(SignalsType.CHECK_USER_DATA);
            SignalsManager.CreateNewSignal(SignalsType.USER_DATA_CHECKED);
            SignalsManager.CreateNewSignal(SignalsType.ASSETS_LOADED);
            SignalsManager.CreateNewSignal(SignalsType.MODULE_ELEMENTS_CREATED);
            SignalsManager.CreateNewSignal(SignalsType.ALL_MODULES_ELEMENTS_CREATED);
            SignalsManager.CreateNewSignal(SignalsType.WINDOW_RESIZE);
            SignalsManager.CreateNewSignal(SignalsType.CHANGE_BACKGROUND);
            SignalsManager.CreateNewSignal(SignalsType.PLAY_SOUND);
            SignalsManager.CreateNewSignal(SignalsType.STOP_SOUND);
            SignalsManager.CreateNewSignal(SignalsType.CHANGE_BACKGROUND);
            SignalsManager.CreateNewSignal(ConnectionSignalsType.CREATE_SEARCH_FOR_PARTNER_CONNECTION);
            SignalsManager.CreateNewSignal(ConnectionSignalsType.SOCKET_IO_CONNECTION_CREATED);
            SignalsManager.CreateNewSignal(ConnectionSignalsType.SOCKET_IO_DISCONNECTED);
            SignalsManager.CreateNewSignal(ConnectionSignalsType.PRIVATE_MESSAGE);
            SignalsManager.CreateNewSignal(ConnectionSignalsType.UPDATE_SOCKET_ID);
            SignalsManager.AddSignalCallback(SignalsType.USER_DATA_CHECKED, this.userDataChecked.bind(this));
        };
        AbstractEntryPoint.prototype.onModuleElementsCreated = function () {
            var modulesCounter = 0;
            _.forEach(this.gameModules, function (module) {
                if (module.ElementsCreated) {
                    modulesCounter++;
                }
            });
            if (modulesCounter == this.gameModules.length) {
                this.getCookieData();
            }
        };
        AbstractEntryPoint.prototype.isMobile = function () {
            if (navigator.userAgent.match(/Mobi/)) {
                return true;
            }
            if ('screen' in window && window.screen.width < 1366) {
                return true;
            }
            var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (connection && connection.type === 'cellular') {
                return true;
            }
            return false;
        };
        return AbstractEntryPoint;
    }());
    Framework.AbstractEntryPoint = AbstractEntryPoint;
})(Framework || (Framework = {}));
var Pockey;
(function (Pockey) {
    var Vector2 = Framework.Utils.Vector2;
    var Circle = PIXI.Circle;
    var Graphics = PIXI.Graphics;
    var Pocket = (function (_super) {
        __extends(Pocket, _super);
        function Pocket(x, y, radius, finalPoint) {
            var _this = _super.call(this, x, y, radius) || this;
            _this.position = new Vector2(x, y);
            _this.finalPoint = finalPoint;
            _this.graphics = [];
            _this.touchPoints = [];
            var point = new Vector2();
            var g = new Graphics();
            var angle;
            angle = 90 * Math.PI / 180;
            point = new Vector2();
            point.x = _this.position.x + Math.cos(angle) * (_this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            point.y = _this.position.y + Math.sin(angle) * (_this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            _this.touchPoints.push(point);
            angle = 45 * Math.PI / 180;
            point = new Vector2();
            point.x = _this.position.x + Math.cos(angle) * (_this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            point.y = _this.position.y + Math.sin(angle) * (_this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            _this.touchPoints.push(point);
            angle = 0 * Math.PI / 180;
            point = new Vector2();
            point.x = _this.position.x + Math.cos(angle) * (_this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            point.y = _this.position.y + Math.sin(angle) * (_this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            _this.touchPoints.push(point);
            angle = -45 * Math.PI / 180;
            point = new Vector2();
            point.x = _this.position.x + Math.cos(angle) * (_this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            point.y = _this.position.y + Math.sin(angle) * (_this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            _this.touchPoints.push(point);
            angle = -90 * Math.PI / 180;
            point = new Vector2();
            point.x = _this.position.x + Math.cos(angle) * (_this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            point.y = _this.position.y + Math.sin(angle) * (_this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            _this.touchPoints.push(point);
            angle = -135 * Math.PI / 180;
            point = new Vector2();
            point.x = _this.position.x + Math.cos(angle) * (_this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            point.y = _this.position.y + Math.sin(angle) * (_this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            _this.touchPoints.push(point);
            angle = 180 * Math.PI / 180;
            point = new Vector2();
            point.x = _this.position.x + Math.cos(angle) * (_this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            point.y = _this.position.y + Math.sin(angle) * (_this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            _this.touchPoints.push(point);
            angle = 135 * Math.PI / 180;
            point = new Vector2();
            point.x = _this.position.x + Math.cos(angle) * (_this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            point.y = _this.position.y + Math.sin(angle) * (_this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            _this.touchPoints.push(point);
            return _this;
        }
        Pocket.prototype.addPoints = function (parent) {
            _.forEach(this.graphics, function (g) {
                parent.addChild(g);
            });
        };
        return Pocket;
    }(Circle));
    Pockey.Pocket = Pocket;
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var GameModule;
    (function (GameModule) {
        var Sprite = PIXI.Sprite;
        var Graphics = PIXI.Graphics;
        var Vector2 = Framework.Utils.Vector2;
        var AbstractEntryPoint = Framework.AbstractEntryPoint;
        var Settings = Framework.Settings;
        var Point = PIXI.Point;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var BallType;
        (function (BallType) {
            BallType["Player"] = "PlayerBall";
            BallType["Opponent"] = "OpponentBall";
            BallType["White"] = "WhiteBall";
            BallType["Puck"] = "Puck";
        })(BallType = GameModule.BallType || (GameModule.BallType = {}));
        var AbstractBall = (function (_super) {
            __extends(AbstractBall, _super);
            function AbstractBall(ballSide, id) {
                if (ballSide === void 0) { ballSide = ""; }
                if (id === void 0) { id = 'ball'; }
                var _this = _super.call(this) || this;
                _this.defaultTextureName = Settings.desktopAssetsPath + "Images/color_big.png";
                _this.defaultOverTextureName = Settings.desktopAssetsPath + "Images/color_big_over.png";
                _this.defaultShadowTextureName = Settings.desktopAssetsPath + "Images/color_big_shadow.png";
                _this.mass = 1.4;
                _this.moving = false;
                _this.minStopLimit = 0.1;
                _this.defaultColor = 0xffffff;
                _this.isInPocket = false;
                _this.zRotationActive = false;
                _this.numberTest = [];
                _this.lastAngle = 0;
                _this.prevX = 0;
                _this.prevY = 0;
                _this.newX = 0;
                _this.newY = 0;
                _this.ballIsInThePocket = false;
                _this.canBeRemoved = false;
                _this.finalPocketAnimationRightPoint = new Vector2();
                _this.finalPocketAnimationLeftPoint = new Vector2();
                _this.finalPocketAnimationCenterPoint = new Vector2();
                _this.pocketsZIndex = 0;
                _this.firstPocketAnimationDone = false;
                _this.removed = false;
                _this.zIndexSwitched = false;
                _this.animationInProgress = false;
                _this.ballValue = 1;
                _this.removedFromArray = false;
                _this.rot = [1, 0, 0, 1];
                _this.moving = false;
                _this.velocity = new Vector2();
                _this.oldPos = new Vector2();
                _this.delta = Pockey.PockeySettings.DELTA;
                _this.radius = Pockey.PockeySettings.BALL_RADIUS;
                _this.side = ballSide;
                _this.name = _this.side + id;
                _this.changeDefaultTextureName();
                _this.updateTexture();
                _this.addP2Body();
                return _this;
            }
            AbstractBall.prototype.addP2Body = function () {
                var _this = this;
                this.p2Body = new p2.Body({
                    mass: this.mass,
                    position: [this.x, this.y],
                });
                this.p2BodyShadow = new p2.Body({
                    mass: 0,
                    position: [this.x, this.y]
                });
                this.p2Body.angularDamping = 0.4;
                this.p2Body.damping = 0.2;
                this.p2Body.boundingRadius = this.radius;
                this.p2Body.allowSleep = true;
                this.p2Body.sleepSpeedLimit = 2;
                this.p2Body.sleepTimeLimit = 0.1;
                this.p2Body.sleep();
                this.p2Body.velocity[0] = 0;
                this.p2Body.velocity[1] = 0;
                this.circleShape = new p2.Circle({ radius: this.radius });
                this.circleShape.material = this.getCircleMaterial();
                this.p2Body.addShape(this.circleShape);
                var circleShape2 = new p2.Circle({ radius: Pockey.PockeySettings.BALL_RADIUS + this.radius - 0 });
                circleShape2.material = new p2.Material(GameModule.MaterialType.SHADOW_MATERIAL);
                this.p2BodyShadow.addShape(circleShape2);
                GameModule.P2WorldManager.Instance().world.addBody(this.p2Body);
                GameModule.P2WorldManager.Instance().world.on("preSolve", function (evt) {
                    _this.worldPreSolveHandler();
                }, this);
            };
            AbstractBall.prototype.worldPreSolveHandler = function () {
                if (this.speed() < 50)
                    this.p2Body.velocity = [this.p2Body.velocity[0] * Pockey.PockeySettings.DELTA, this.p2Body.velocity[1] * Pockey.PockeySettings.DELTA];
            };
            AbstractBall.prototype.getCircleMaterial = function () {
                return GameModule.P2WorldManager.Instance().getMaterialByID(GameModule.MaterialType.BALL_MATERIAL);
            };
            AbstractBall.prototype.changeDefaultTextureName = function () {
            };
            AbstractBall.prototype.updateTexture = function () {
                this.anchor.set(0.5, 0.5);
                this.ballTexture = new Sprite();
                var g = new Graphics();
                g.beginFill(0xffffff, 1);
                g.drawCircle(0, 0, this.radius);
                g.endFill();
                this.ballTexture.addChild(g);
                this.addChild(this.ballTexture);
                this.addGraphic();
            };
            AbstractBall.prototype.setLineLimits = function (lineLimits) {
                this.lineLimits = lineLimits;
            };
            AbstractBall.prototype.setPockets = function (pockets) {
                this.pockets = pockets;
            };
            AbstractBall.prototype.setWallLimits = function (left, right, up, down) {
                this.leftLimit = left;
                this.rightLimit = right;
                this.upLimit = up;
                this.downLimit = down;
            };
            AbstractBall.prototype.tintBall = function (color) {
                this.ballTexture.getChildAt(0).tint = color;
            };
            AbstractBall.prototype.addGraphic = function () {
                var _this = this;
                this.g = new Graphics();
                if (this.ballType == BallType.Opponent) {
                    this.defaultColor = Pockey.PockeySettings.OPPONENT_COLOR;
                }
                else if (this.ballType == BallType.Player) {
                    _.forEach(Pockey.PockeySettings.LARGE_COLORS_ARRAY, function (inventoryVO) {
                        if (inventoryVO.id == Pockey.PockeySettings.PLAYER_COLOR_ID) {
                            _this.defaultColor = inventoryVO.color;
                        }
                    });
                }
                else if (this.ballType == BallType.Puck) {
                    this.defaultColor = Pockey.PockeySettings.PUCK_COLOR;
                }
                else {
                    this.defaultColor = 0xffffff;
                }
                this.g.beginFill(this.defaultColor);
                this.g.drawCircle(0, 0, this.radius);
                this.g.endFill();
                this.img = AbstractEntryPoint.renderer.extract.pixels(this);
            };
            AbstractBall.prototype.update = function () {
                var _this = this;
                this.moving = this.p2Body.sleepState != p2.Body.SLEEPING;
                if (this.moving && !this.canBeRemoved) {
                    var isCloserToPocket_1 = false;
                    var pocketPosition_1 = new Vector2();
                    var p2BodyPos_1 = new Vector2(this.p2Body.position[0], this.p2Body.position[1]);
                    var lastDirection_1 = 0;
                    this.oldPos.x = this.p2Body.velocity[0];
                    this.oldPos.y = this.p2Body.velocity[1];
                    this.oldPos = this.oldPos.normalise();
                    _.forEach(this.pockets, function (pocket) {
                        pocketPosition_1 = new Vector2(pocket.x, pocket.y);
                        if (pocketPosition_1.distanceTo(p2BodyPos_1) <= (_this.radius + pocket.radius + 8)) {
                            isCloserToPocket_1 = true;
                            if (pocketPosition_1.distanceTo(p2BodyPos_1) <= (pocket.radius + 1)) {
                                _this.canBeRemoved = true;
                                console.log("intra la can be removed fmm: " + _this.name);
                                GameModule.P2WorldManager.Instance().world.removeBody(_this.p2Body);
                                SignalsManager.DispatchSignal(PockeySignalTypes.BALL_IN_POCKET, [_this.ballType]);
                                _this.x = p2BodyPos_1.x;
                                _this.y = p2BodyPos_1.y;
                                _this.ballShadow.x = p2BodyPos_1.x;
                                _this.ballShadow.y = p2BodyPos_1.y;
                                var closestDistance_1 = 3000;
                                var distanceToNextClosestPoint_1 = 3000;
                                var pointId_1 = 0;
                                var nextPointId_1 = 0;
                                var direction = 0;
                                var closestPoint_1 = new Vector2();
                                var nextClosestPoint2_1 = new Vector2();
                                closestPoint_1.x = pocket.x + _this.oldPos.x;
                                closestPoint_1.y = pocket.y + _this.oldPos.y;
                                closestPoint_1.x = closestPoint_1.x / 2 + p2BodyPos_1.x / 2;
                                closestPoint_1.y = closestPoint_1.y / 2 + p2BodyPos_1.y / 2;
                                nextClosestPoint2_1.x = p2BodyPos_1.x + _this.oldPos.x * Pockey.PockeySettings.BALL_RADIUS * 2;
                                nextClosestPoint2_1.y = p2BodyPos_1.y + _this.oldPos.y * Pockey.PockeySettings.BALL_RADIUS * 2;
                                var finalTouchPoint_1 = new Vector2(closestPoint_1.x, closestPoint_1.y);
                                _.forEach(pocket.touchPoints, function (touchPoint, id) {
                                    var newDist = closestPoint_1.distanceTo(touchPoint);
                                    var dirDist = nextClosestPoint2_1.distanceTo(touchPoint);
                                    if (newDist < closestDistance_1) {
                                        closestDistance_1 = newDist;
                                        finalTouchPoint_1 = new Vector2(touchPoint.x, touchPoint.y);
                                        pointId_1 = id;
                                    }
                                    if (dirDist < distanceToNextClosestPoint_1) {
                                        distanceToNextClosestPoint_1 = dirDist;
                                        nextPointId_1 = id;
                                    }
                                });
                                closestPoint_1.x = finalTouchPoint_1.x;
                                closestPoint_1.y = finalTouchPoint_1.y;
                                var touchPointsArrayLength = pocket.touchPoints.length;
                                var clockwiseDistance = 0;
                                var counterclockDistance = 0;
                                var idCounter = pointId_1;
                                if (nextPointId_1 > pointId_1) {
                                    clockwiseDistance = nextPointId_1 - pointId_1;
                                    var tempDist = 0;
                                    for (var i = 0; i < touchPointsArrayLength; i++) {
                                        tempDist++;
                                        idCounter--;
                                        if (idCounter < 0)
                                            idCounter = touchPointsArrayLength - 1;
                                        if (idCounter == nextPointId_1)
                                            counterclockDistance = tempDist;
                                    }
                                    if (counterclockDistance < clockwiseDistance)
                                        direction = -1;
                                    else if (counterclockDistance > clockwiseDistance)
                                        direction = 1;
                                    else
                                        direction = 0;
                                }
                                else {
                                    clockwiseDistance = pointId_1 - nextPointId_1;
                                    var tempDist = 0;
                                    idCounter = nextPointId_1;
                                    for (var i = 0; i < touchPointsArrayLength; i++) {
                                        tempDist++;
                                        idCounter--;
                                        if (idCounter < 0)
                                            idCounter = touchPointsArrayLength - 1;
                                        if (idCounter == pointId_1)
                                            counterclockDistance = tempDist;
                                    }
                                    if (clockwiseDistance < counterclockDistance)
                                        direction = -1;
                                    else if (clockwiseDistance > counterclockDistance)
                                        direction = 1;
                                    else
                                        direction = 0;
                                }
                                lastDirection_1 = direction;
                                var bezierPositions = [];
                                var testids = [];
                                idCounter = pointId_1;
                                if (direction == -1) {
                                    for (var i = 0; i < touchPointsArrayLength - 1; i++) {
                                        testids.push(idCounter);
                                        bezierPositions[i] = new Point(pocket.touchPoints[idCounter].x, pocket.touchPoints[idCounter].y);
                                        idCounter--;
                                        if (idCounter < 0)
                                            idCounter = touchPointsArrayLength - 1;
                                    }
                                    bezierPositions.shift();
                                }
                                else if (direction == 1) {
                                    for (var i = 0; i < touchPointsArrayLength; i++) {
                                        testids.push(idCounter);
                                        bezierPositions[i] = new Point(pocket.touchPoints[idCounter].x, pocket.touchPoints[idCounter].y);
                                        idCounter++;
                                        if (idCounter > touchPointsArrayLength - 1)
                                            idCounter = 0;
                                    }
                                    bezierPositions.shift();
                                }
                                else if (direction == 0) {
                                    direction = Math.round(Math.random() * 1) - 1;
                                    lastDirection_1 = direction;
                                    if (direction == 0)
                                        direction = 1;
                                    idCounter = nextPointId_1;
                                    bezierPositions.push(new Point(pocket.touchPoints[pointId_1].x, pocket.touchPoints[pointId_1].y));
                                    bezierPositions.push(new Point(pocket.touchPoints[nextPointId_1].x, pocket.touchPoints[nextPointId_1].y));
                                    for (var i = 0; i < touchPointsArrayLength - counterclockDistance; i++) {
                                        if (i == 1) {
                                            var tempPoint = new Point(pocket.touchPoints[nextPointId_1].x / 2 + pocket.touchPoints[idCounter].x / 2, pocket.touchPoints[nextPointId_1].y / 2 + pocket.touchPoints[idCounter].y / 2);
                                            tempPoint = new Point(tempPoint.x / 2 + pocket.touchPoints[nextPointId_1].x / 2, tempPoint.y / 2 + pocket.touchPoints[nextPointId_1].y / 2);
                                            tempPoint = new Point(tempPoint.x / 2 + pocket.touchPoints[nextPointId_1].x / 2, tempPoint.y / 2 + pocket.touchPoints[nextPointId_1].y / 2);
                                            tempPoint = new Point(tempPoint.x / 2 + pocket.touchPoints[nextPointId_1].x / 2, tempPoint.y / 2 + pocket.touchPoints[nextPointId_1].y / 2);
                                            bezierPositions.push(tempPoint);
                                            testids.push(idCounter);
                                        }
                                        idCounter -= direction;
                                        if (idCounter > touchPointsArrayLength - 1)
                                            idCounter = 0;
                                        if (idCounter < 0)
                                            idCounter = touchPointsArrayLength - 1;
                                    }
                                }
                                bezierPositions.push(new Point(pocket.finalPoint.x, pocket.finalPoint.y));
                                var duration = 1 / (_this.speed() / 60);
                                if (lastDirection_1 == 0)
                                    duration *= 2.4;
                                else
                                    duration *= 2;
                                if (duration > 1.8)
                                    duration = 1.8;
                                _this.animationInProgress = true;
                                _this.ballInPocketAnimationTimeline = new TimelineMax();
                                _this.ballInPocketAnimationTimeline.add(TweenMax.to(_this, duration, {
                                    bezier: bezierPositions,
                                    ease: Linear.easeNone,
                                    onUpdate: _this.onAnimationUpdate.bind(_this),
                                    onUpdateParams: [pocket.x, pocket.y, pocket.radius],
                                    onComplete: _this.declareAnimationFinished.bind(_this)
                                }), 0);
                                _this.ballInPocketAnimationTimeline.add(TweenMax.to(_this.scale, duration - duration / 3, {
                                    x: 0.8,
                                    y: 0.8,
                                    ease: Linear.easeNone
                                }), 0);
                                _this.ballInPocketAnimationTimeline.add(TweenMax.to(_this.ballShadow.scale, (duration - duration / 3) / 2, {
                                    x: 0,
                                    y: 0,
                                    ease: Linear.easeNone
                                }), 0);
                                _this.ballInPocketAnimationTimeline.add(TweenMax.to(_this, (duration - duration / 3), {
                                    alpha: 0,
                                    ease: Linear.easeNone
                                }), duration / 3);
                                return;
                            }
                        }
                    });
                    if (this.canBeRemoved)
                        return;
                    if (!isCloserToPocket_1) {
                        if (p2BodyPos_1.x + this.radius > this.rightLimit) {
                            p2BodyPos_1.x = this.rightLimit - this.radius;
                        }
                        else if (p2BodyPos_1.x - this.radius < this.leftLimit) {
                            p2BodyPos_1.x = this.leftLimit + this.radius;
                        }
                        if (p2BodyPos_1.y + this.radius > this.downLimit) {
                            p2BodyPos_1.y = this.downLimit - this.radius;
                        }
                        else if (p2BodyPos_1.y - this.radius < this.upLimit) {
                            p2BodyPos_1.y = this.upLimit + this.radius;
                        }
                    }
                    this.x = p2BodyPos_1.x;
                    this.y = p2BodyPos_1.y;
                    this.ballShadow.x = p2BodyPos_1.x;
                    this.ballShadow.y = p2BodyPos_1.y;
                    this.oldPos.x = this.x;
                    this.oldPos.y = this.y;
                }
            };
            AbstractBall.prototype.declareAnimationFinished = function () {
                this.animationInProgress = false;
                this.visible = false;
                if (this.parent)
                    this.parent.removeChild(this);
            };
            AbstractBall.prototype.addShadowBody = function () {
                this.p2BodyShadow.position[0] = this.x;
                this.p2BodyShadow.position[1] = this.y;
                GameModule.P2WorldManager.Instance().world.addBody(this.p2BodyShadow);
            };
            AbstractBall.prototype.onAnimationUpdate = function (x, y, radius) {
                this.moving = true;
                var ballPos = new Vector2(this.x, this.y);
                var pocketPos = new Vector2(x, y);
                var minDistance = radius - this.radius;
                var distance = pocketPos.distanceTo(ballPos);
                if (distance <= minDistance && !this.zIndexSwitched) {
                    this.ballAnimationHolder.addChildAt(this.ballShadow, 0);
                    this.ballAnimationHolder.addChild(this);
                    this.zIndexSwitched = true;
                }
            };
            Object.defineProperty(AbstractBall.prototype, "ballPosition", {
                get: function () {
                    return this._ballPosition;
                },
                set: function (positionVector) {
                    if (!this.initialPosition) {
                        this.initialPosition = positionVector.clone();
                    }
                    this._ballPosition = positionVector;
                    this.x = positionVector.x;
                    this.y = positionVector.y;
                    this.ballShadow.scale.x = 1;
                    this.ballShadow.scale.y = 1;
                    this.ballShadow.x = this.x;
                    this.ballShadow.y = this.y;
                    this.p2Body.position = [positionVector.x, positionVector.y];
                    this.p2BodyShadow.position = [positionVector.x, positionVector.y];
                },
                enumerable: true,
                configurable: true
            });
            AbstractBall.prototype.speed = function () {
                return Math.sqrt(this.p2Body.velocity[0] * this.p2Body.velocity[0] + this.p2Body.velocity[1] * this.p2Body.velocity[1]);
            };
            AbstractBall.prototype.angle = function () {
                return Math.atan2(this.velocity.y, this.velocity.x);
            };
            AbstractBall.prototype.onShoot = function (rotation, power) {
                this.power = power;
                this.velocity = new Vector2(this.power * Math.cos(rotation), this.power * Math.sin(rotation));
                this.moving = true;
            };
            AbstractBall.prototype.reset = function () {
                if (this.ballInPocketAnimationTimeline && this.ballInPocketAnimationTimeline.isActive()) {
                    this.ballInPocketAnimationTimeline.pause();
                    this.ballInPocketAnimationTimeline.kill();
                }
                this.alpha = 1;
                this.scale.x = 1;
                this.scale.y = 1;
                this.ballShadow.scale.x = 1;
                this.ballShadow.scale.y = 1;
                this.zIndexSwitched = false;
                this.canBeRemoved = false;
                this.animationInProgress = false;
                this.p2Body.velocity[0] = 0;
                this.p2Body.velocity[1] = 0;
                GameModule.P2WorldManager.Instance().world.addBody(this.p2Body);
                GameModule.P2WorldManager.Instance().world.addBody(this.p2BodyShadow);
                this.removedFromArray = false;
                this.visible = true;
                this.removed = false;
            };
            AbstractBall.prototype.createBallShadow = function () {
                this.ballShadow = new Graphics();
                this.ballShadow.beginFill(0x000000, 0.4);
                this.ballShadow.drawCircle(this.radius / 4, this.radius / 4, this.radius);
            };
            AbstractBall.prototype.getBallData = function () {
                var ballData = {};
                ballData.x = this.x;
                ballData.y = this.y;
                ballData.scaleX = this.scale.x;
                ballData.scaleY = this.scale.y;
                ballData.shadowScaleX = this.ballShadow.scale.x;
                ballData.shadowScaleY = this.ballShadow.scale.y;
                ballData.zIndexSwitched = this.zIndexSwitched;
                ballData.visible = this.visible;
                ballData.alpha = this.alpha;
                ballData.name = this.name;
                ballData.parentName = (this.parent) ? this.parent.name : "none";
                return ballData;
            };
            AbstractBall.prototype.setBallData = function (ballData) {
                this.ballPosition = new Vector2(ballData.x, ballData.y);
                this.scale.x = ballData.scaleX;
                this.scale.y = ballData.scaleY;
                this.ballShadow.scale.x = ballData.shadowScaleX;
                this.ballShadow.scale.y = ballData.shadowScaleY;
                this.visible = ballData.visible;
                this.alpha = ballData.alpha;
                if (ballData.zIndexSwitched) {
                    this.ballAnimationHolder.addChildAt(this.ballShadow, 0);
                    this.ballAnimationHolder.addChild(this);
                }
            };
            return AbstractBall;
        }(Sprite));
        GameModule.AbstractBall = AbstractBall;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Framework;
(function (Framework) {
    var Utils;
    (function (Utils) {
        var P2WorldManager = Pockey.GameModule.P2WorldManager;
        var Rect = (function () {
            function Rect(rectangle, rotationAngle, materialType) {
                this.p2Body = new p2.Body({
                    mass: 0,
                    position: [rectangle.x, rectangle.y],
                    angle: rotationAngle
                });
                var rectShape = new p2.Box({
                    width: rectangle.width,
                    height: rectangle.height
                });
                rectShape.material = new p2.Material(materialType);
                this.p2Body.addShape(rectShape);
                P2WorldManager.Instance().world.addBody(this.p2Body);
            }
            return Rect;
        }());
        Utils.Rect = Rect;
    })(Utils = Framework.Utils || (Framework.Utils = {}));
})(Framework || (Framework = {}));
var Pockey;
(function (Pockey) {
    var GameModule;
    (function (GameModule) {
        var Sprite = PIXI.Sprite;
        var DecalType;
        (function (DecalType) {
            DecalType["Welcome"] = "dccal_welcome.png";
            DecalType["AstroJunkie"] = "decal_astrojunkie.png";
            DecalType["Blastoff"] = "decal_blastoff.png";
            DecalType["Cthulu"] = "decal_cthulu.png";
            DecalType["Dice"] = "decal_dice.png";
            DecalType["InserCoin"] = "decal_insertcoin.png";
            DecalType["KnuckeSandwich"] = "decal_knucklesandwhich.png";
            DecalType["Looselips"] = "decal_looselips.png";
            DecalType["OneUp"] = "decal_oneup.png";
            DecalType["PlayerOne"] = "decal_playerone.png";
            DecalType["Pockey"] = "decal_pockey.png";
            DecalType["RageQuit"] = "decal_ragequit.png";
            DecalType["StatTrickShot"] = "decal_statTrickshot.png";
            DecalType["ToweKing"] = "decal_towerking.png";
            DecalType["WingedSword"] = "decal_wingedsword.png";
        })(DecalType = GameModule.DecalType || (GameModule.DecalType = {}));
        var Decal = (function (_super) {
            __extends(Decal, _super);
            function Decal() {
                var _this = _super.call(this) || this;
                _this.anchor.set(0.5, 0.5);
                _this.SetDecalIcon(DecalType.Pockey);
                return _this;
            }
            Decal.prototype.SetDecalIcon = function (decalType) {
                var texture = PIXI.Texture.fromFrame(decalType.toString());
                this.texture = texture;
                this.alpha = 0.4;
            };
            return Decal;
        }(Sprite));
        GameModule.Decal = Decal;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var Connection;
    (function (Connection) {
        var PockeySocketMessages = (function () {
            function PockeySocketMessages() {
            }
            PockeySocketMessages.WATCH = "PockeySocketMessages." + "WATCH";
            PockeySocketMessages.SCORE_UPDATE = "PockeySocketMessages." + "SCORE_UPDATE";
            PockeySocketMessages.OPPONENT = "PockeySocketMessages." + "OPPONENT";
            PockeySocketMessages.YOUR_TURN = "PockeySocketMessages." + "YOUR_TURN";
            PockeySocketMessages.OPPONENT_SETTINGS = "PockeySocketMessages." + "OPPONENT_SETTINGS";
            PockeySocketMessages.OPPONENT_RESTART_GAME = "PockeySocketMessages." + "OPPONENT_RESTART_GAME";
            return PockeySocketMessages;
        }());
        Connection.PockeySocketMessages = PockeySocketMessages;
    })(Connection = Pockey.Connection || (Pockey.Connection = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var GameModule;
    (function (GameModule) {
        var Sprite = PIXI.Sprite;
        var Point = PIXI.Point;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var Vector2 = Framework.Utils.Vector2;
        var MouseHandler = Framework.Utils.MouseHandler;
        var SignalsType = Framework.Signals.SignalsType;
        var PockeySoundNames = Pockey.Sound.PockeySoundNames;
        var StickType;
        (function (StickType) {
            StickType["Basic"] = "stick_basic.png";
            StickType["BlueSteel"] = "stick_bluesteel.png";
            StickType["CandyCue"] = "stick_candycue.png";
            StickType["Default"] = "stick_default.png";
            StickType["Dotty"] = "stick_dotty.png";
            StickType["E"] = "stick_e.png";
            StickType["Facebook1"] = "stick_facebook01.png";
            StickType["Facebook2"] = "stick_facebook02.png";
            StickType["Funky"] = "stick_funky.png";
            StickType["Gnarly"] = "stick_gnarly.png";
            StickType["Ivory"] = "stick_ivory.png";
            StickType["KingsGlaive"] = "stick_kingsglaive.png";
            StickType["Ninja"] = "stick_ninja.png";
            StickType["Pinky"] = "stick_pinky.png";
            StickType["GDY"] = "stick_qdy.png";
            StickType["Rocket"] = "stick_rocket.png";
            StickType["Rockstar"] = "stick_rockstar.png";
            StickType["Saber"] = "stick_saber.png";
            StickType["Sevn"] = "stick_sevn.png";
            StickType["Snake"] = "stick_snake.png";
            StickType["TigerMasou"] = "stick_tigermasou.png";
            StickType["Twisted"] = "stick_twisted.png";
            StickType["Twitch"] = "stick_twitch.png";
            StickType["Twitter1"] = "stick_twitter01.png";
        })(StickType = GameModule.StickType || (GameModule.StickType = {}));
        var Stick = (function (_super) {
            __extends(Stick, _super);
            function Stick() {
                var _this = _super.call(this) || this;
                _this.power = 0;
                _this.rotationEnabled = false;
                _this.isActive = false;
                _this.clickPointRegistered = false;
                _this.stickPowerFactor = 9.81;
                _this.mouseReleased = false;
                _this.SetStickSkin(StickType.Default);
                _this.initialPivotPoint = new Point(_this.texture.width + 8, _this.texture.height / 2);
                _this.pivot = _this.initialPivotPoint;
                _this.defineShootTimeline();
                return _this;
            }
            Stick.prototype.SetStickSkin = function (stickType) {
                this.texture = PIXI.Texture.fromFrame(stickType.toString());
            };
            Stick.prototype.update = function () {
                if (!MouseHandler.Instance().left.down)
                    this.mouseReleased = true;
                if (this.isActive) {
                    if (MouseHandler.Instance().left.down && this.mouseReleased) {
                        this.rotationEnabled = false;
                        if (!this.clickPointRegistered) {
                            var localPoint = this.parent.toLocal(new Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));
                            this.clickPointRegistered = true;
                            this.clickPoint = new Vector2(localPoint.x, localPoint.y);
                            var oppRot = new Vector2(Math.cos(90 * Math.PI / 180 + this.rotation), Math.sin(90 * Math.PI / 180 + this.rotation)).normalise();
                            this.firstPointOfTangent = new Vector2(localPoint.x - oppRot.x * 1500, localPoint.y - oppRot.y * 1500);
                            this.secondPointOfTangent = new Vector2(localPoint.x + oppRot.x * 1500, localPoint.y + oppRot.y * 1500);
                        }
                        else {
                            var stickPower = 0;
                            var localPoint = this.parent.toLocal(new Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));
                            var mouseDirection = (localPoint.x - this.firstPointOfTangent.x) * (this.secondPointOfTangent.y - this.firstPointOfTangent.y) - (localPoint.y - this.firstPointOfTangent.y) * (this.secondPointOfTangent.x - this.firstPointOfTangent.x);
                            if (mouseDirection > 0)
                                mouseDirection = -1;
                            else
                                mouseDirection = 1;
                            if (mouseDirection > 0) {
                                stickPower = this.distToSegment(localPoint, this.firstPointOfTangent, this.secondPointOfTangent);
                            }
                            else {
                                stickPower = 0;
                            }
                            stickPower /= 2;
                            if (stickPower > 120)
                                stickPower = 120;
                            this.increasePower(stickPower);
                        }
                    }
                    else if (this.power > 6) {
                        this.release();
                    }
                    else if (this.power == 0) {
                        this.rotationEnabled = true;
                    }
                    if (this.rotationEnabled && (!MouseHandler.Instance().left.down || !this.mouseReleased)) {
                        var localPoint = this.parent.toLocal(new Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));
                        this.opposite = localPoint.y - this.position.y;
                        this.adjacent = localPoint.x - this.position.x;
                        this.rotation = Math.atan2(this.opposite, this.adjacent);
                        this.clickPointRegistered = false;
                        this.pivot.x = this.initialPivotPoint.x;
                    }
                }
            };
            Stick.prototype.increasePower = function (stickPower) {
                this.pivot.x = this.initialPivotPoint.x + stickPower;
                this.power = stickPower * this.stickPowerFactor;
            };
            Stick.prototype.release = function () {
                this.isActive = false;
                this.clickPointRegistered = false;
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_BALL_RAY_GRAPHICS);
                this.shootTimeline.play(0);
            };
            Stick.prototype.reset = function () {
                this.isActive = false;
                this.rotationEnabled = false;
                this.clickPointRegistered = false;
                if (MouseHandler.Instance().left.down)
                    this.mouseReleased = false;
            };
            Stick.prototype.GoToStartPosition = function () {
                this.x = this.startPosition.x;
                this.y = this.startPosition.y;
            };
            Stick.prototype.activate = function (position) {
                this.position.x = position.x;
                this.position.y = position.y;
                this.isActive = true;
                this.rotationEnabled = true;
            };
            Stick.prototype.defineShootTimeline = function () {
                this.shootTimeline = new TimelineLite();
                this.shootTimeline.pause();
                this.shootTimeline.add(TweenMax.to(this.pivot, 0.05, {
                    x: this.initialPivotPoint.x - 8,
                    onComplete: this.shoot.bind(this)
                }));
                this.shootTimeline.add(TweenMax.to(this.pivot, 0.1, {
                    x: this.initialPivotPoint.x
                }));
            };
            Stick.prototype.shoot = function () {
                SignalsManager.DispatchSignal(PockeySignalTypes.SHOOT_BALL);
                SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{ soundName: PockeySoundNames.SHOOT_BALL }]);
            };
            Stick.prototype.dist2 = function (v, w) {
                return (v.x - w.x) * (v.x - w.x) + (v.y - w.y) * (v.y - w.y);
            };
            Stick.prototype.distToSegmentSquared = function (point, firstLinePoint, secondLinePoint) {
                var l2 = this.dist2(firstLinePoint, secondLinePoint);
                if (l2 == 0)
                    return this.dist2(point, firstLinePoint);
                var t = ((point.x - firstLinePoint.x) * (secondLinePoint.x - firstLinePoint.x) + (point.y - firstLinePoint.y) * (secondLinePoint.y - firstLinePoint.y)) / l2;
                t = Math.max(0, Math.min(1, t));
                return this.dist2(point, new Vector2(firstLinePoint.x + t * (secondLinePoint.x - firstLinePoint.x), firstLinePoint.y + t * (secondLinePoint.y - firstLinePoint.y)));
            };
            Stick.prototype.distToSegment = function (p, v, w) {
                return Math.sqrt(this.distToSegmentSquared(p, v, w));
            };
            return Stick;
        }(Sprite));
        GameModule.Stick = Stick;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var Stick = Pockey.GameModule.Stick;
    var TouchHandler = Framework.Utils.TouchHandler;
    var Point = PIXI.Point;
    var SignalsManager = Framework.Signals.SignalsManager;
    var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
    var StickMobile = (function (_super) {
        __extends(StickMobile, _super);
        function StickMobile() {
            var _this = _super.call(this) || this;
            SignalsManager.AddSignalCallback(PockeySignalTypes.STICK_PIVOT_MOBILE_UPDATE, _this.onStickPowerMobile.bind(_this));
            SignalsManager.AddSignalCallback(PockeySignalTypes.STICK_MOBILE_RELEASE, _this.stickMobileRelease.bind(_this));
            return _this;
        }
        StickMobile.prototype.activate = function (position) {
            _super.prototype.activate.call(this, position);
            SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_STICK_POWER_MOBILE);
        };
        StickMobile.prototype.stickMobileRelease = function (params) {
            if (this.power > 6) {
                this.release();
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_STICK_POWER_MOBILE);
            }
            else if (this.power == 0) {
                this.rotationEnabled = true;
            }
        };
        StickMobile.prototype.onStickPowerMobile = function (params) {
            var stickPower = params[0];
            this.rotationEnabled = false;
            this.increasePower(stickPower);
        };
        StickMobile.prototype.increasePower = function (stickPower) {
            this.pivot.x = this.initialPivotPoint.x + stickPower;
            console.log("pivotu pizdii: " + this.initialPivotPoint.x, stickPower, this.pivot.x);
            this.power = stickPower * this.stickPowerFactor;
        };
        StickMobile.prototype.update = function () {
            if (this.isActive) {
                if (this.rotationEnabled && TouchHandler.Instance().isTouchMoving) {
                    console.log("intra la rotation enabled");
                    var localPoint = this.parent.toLocal(new Point(TouchHandler.Instance().position.x, TouchHandler.Instance().position.y));
                    this.opposite = localPoint.y - this.position.y;
                    this.adjacent = localPoint.x - this.position.x;
                    this.rotation = Math.atan2(this.opposite, this.adjacent);
                    this.clickPointRegistered = false;
                    this.pivot.x = this.initialPivotPoint.x;
                }
            }
        };
        return StickMobile;
    }(Stick));
    Pockey.StickMobile = StickMobile;
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var GameModule;
    (function (GameModule) {
        var Vector2 = Framework.Utils.Vector2;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var Puck = (function (_super) {
            __extends(Puck, _super);
            function Puck() {
                var _this = _super.call(this) || this;
                _this.ballType = GameModule.BallType.Puck;
                _this.name = "Puck";
                _this.ballValue = 2;
                _this.delta += 0.994;
                _this.mass = 0.3;
                return _this;
            }
            Puck.prototype.worldPreSolveHandler = function () {
                if (this.speed() < 18)
                    this.p2Body.velocity = [this.p2Body.velocity[0] * Pockey.PockeySettings.DELTA, this.p2Body.velocity[1] * Pockey.PockeySettings.DELTA];
            };
            Puck.prototype.getCircleMaterial = function () {
                return GameModule.P2WorldManager.Instance().getMaterialByID(GameModule.MaterialType.PUCK_MATERIAL);
            };
            Puck.prototype.changeDefaultTextureName = function () {
                this.defaultTextureName = "ball-puck.png";
            };
            Puck.prototype.updateTexture = function () {
                this.radius = 25;
                _super.prototype.updateTexture.call(this);
            };
            Puck.prototype.animatePocketCollision = function (pocketPosition, newX, newY) {
                if (newX === void 0) { newX = null; }
                if (newY === void 0) { newY = null; }
                var animationSpeed = 1 / this.speed();
                this.x = pocketPosition.x;
                TweenMax.to(this, animationSpeed, {
                    x: newX
                });
            };
            Puck.prototype.update = function () {
                this.moving = this.p2Body.sleepState != p2.Body.SLEEPING;
                if (this.moving && !this.canBeRemoved) {
                    var isCloserToGoal = false;
                    var goalPosition = new Vector2();
                    var p2BodyPos = new Vector2(this.p2Body.position[0], this.p2Body.position[1]);
                    var lastDirection = 0;
                    var goalScored = false;
                    var goalType = void 0;
                    if (p2BodyPos.y > this.goalYPosition && p2BodyPos.y < this.goalYPosition + this.goalHeight) {
                        this.x = p2BodyPos.x;
                        this.y = p2BodyPos.y;
                        isCloserToGoal = true;
                        var distanceToFinalX = void 0;
                        var finalPoint = new Vector2();
                        var p2BodyVelocityNormalized = void 0;
                        if (p2BodyPos.x < this.leftLimit) {
                            distanceToFinalX = (this.leftLimit - this.radius) - p2BodyPos.x;
                            p2BodyVelocityNormalized = p2BodyPos.substract(this.oldPos).normalise().multiply(distanceToFinalX);
                            finalPoint.x = this.leftLimit - this.radius - 3;
                            goalScored = true;
                            goalType = this.puckGoals[0].type;
                        }
                        else if (p2BodyPos.x > this.rightLimit) {
                            distanceToFinalX = p2BodyPos.x - (this.rightLimit + this.radius);
                            p2BodyVelocityNormalized = p2BodyPos.substract(this.oldPos).normalise().multiply(distanceToFinalX);
                            finalPoint.x = this.rightLimit + this.radius + 3;
                            goalScored = true;
                            goalType = this.puckGoals[1].type;
                        }
                        if (goalScored) {
                            this.canBeRemoved = true;
                            GameModule.P2WorldManager.Instance().world.removeBody(this.p2Body);
                            SignalsManager.DispatchSignal(PockeySignalTypes.BALL_IN_POCKET, [this.ballType, goalType]);
                            finalPoint.y = this.y - p2BodyVelocityNormalized.y;
                            if (finalPoint.y < this.goalYPosition + this.radius) {
                                finalPoint.y = this.goalYPosition + this.radius;
                            }
                            if (finalPoint.y > this.goalYPosition + this.goalHeight - this.radius) {
                                finalPoint.y = this.goalYPosition + this.goalHeight - this.radius;
                            }
                            var duration = 1 / (this.speed() / 60);
                            duration *= 2;
                            if (duration > 1.8)
                                duration = 1.8;
                            this.animationInProgress = true;
                            var tl = new TimelineMax();
                            tl.add(TweenMax.to(this, duration, {
                                x: finalPoint.x,
                                y: finalPoint.y,
                                onComplete: this.declareAnimationFinished.bind(this)
                            }), 0);
                            tl.add(TweenMax.to(this.ballShadow.scale, duration, {
                                x: 0.8,
                                y: 0.8,
                                ease: Linear.easeNone
                            }), 0);
                            tl.add(TweenMax.to(this.ballShadow, duration, {
                                x: finalPoint.x,
                                y: finalPoint.y,
                                ease: Linear.easeNone
                            }), 0);
                            tl.add(TweenMax.to(this.scale, duration, {
                                x: 0.92,
                                y: 0.92
                            }), 0);
                        }
                    }
                    if (this.canBeRemoved)
                        return;
                    this.x = p2BodyPos.x;
                    this.y = p2BodyPos.y;
                    this.ballShadow.x = p2BodyPos.x;
                    this.ballShadow.y = p2BodyPos.y;
                    this.oldPos.x = this.x;
                    this.oldPos.y = this.y;
                }
            };
            Puck.prototype.declareAnimationFinished = function () {
                this.animationInProgress = false;
            };
            return Puck;
        }(GameModule.AbstractBall));
        GameModule.Puck = Puck;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var GameModule;
    (function (GameModule) {
        var WhiteBall = (function (_super) {
            __extends(WhiteBall, _super);
            function WhiteBall() {
                var _this = _super.call(this) || this;
                _this.ballWasShot = false;
                _this.ballType = GameModule.BallType.White;
                _this.name = "WhiteBall";
                return _this;
            }
            WhiteBall.prototype.worldPreSolveHandler = function () {
                if (this.ballWasShot) {
                    this.ballWasShot = false;
                    this.p2Body.velocity = [this.velocity.x, this.velocity.y];
                }
                _super.prototype.worldPreSolveHandler.call(this);
            };
            WhiteBall.prototype.onShoot = function (rotation, power) {
                _super.prototype.onShoot.call(this, rotation, power);
                this.ballWasShot = true;
            };
            WhiteBall.prototype.update = function () {
                _super.prototype.update.call(this);
            };
            return WhiteBall;
        }(GameModule.AbstractBall));
        GameModule.WhiteBall = WhiteBall;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var GameModule;
    (function (GameModule) {
        var Sprite = PIXI.Sprite;
        var Container = PIXI.Container;
        var PuckGoal = (function (_super) {
            __extends(PuckGoal, _super);
            function PuckGoal(side) {
                var _this = _super.call(this) || this;
                _this.goalRightPath = "goalTop_right.png";
                _this.goalTopRightPath = "goalTop_righttTopper.png";
                _this.goalLeftPath = "goalTop_left.png";
                _this.goalTopLefttPath = "goalTop_leftTopper.png";
                _this.animationStarted = false;
                if (side == "left") {
                    _this.goalGraphics = new Sprite(PIXI.Texture.fromFrame(_this.goalLeftPath));
                    _this.goalGraphicsAnimator = new Sprite(PIXI.Texture.fromFrame(_this.goalLeftPath));
                    _this.goalTopGraphics = new Sprite(PIXI.Texture.fromFrame(_this.goalTopLefttPath));
                }
                else {
                    _this.goalGraphics = new Sprite(PIXI.Texture.fromFrame(_this.goalRightPath));
                    _this.goalGraphicsAnimator = new Sprite(PIXI.Texture.fromFrame(_this.goalRightPath));
                    _this.goalTopGraphics = new Sprite(PIXI.Texture.fromFrame(_this.goalTopRightPath));
                }
                _this.addChild(_this.goalGraphics);
                _this.goalGraphicsAnimator.visible = false;
                _this.addChild(_this.goalGraphicsAnimator);
                _this.addChild(_this.goalTopGraphics);
                return _this;
            }
            Object.defineProperty(PuckGoal.prototype, "tint", {
                set: function (color) {
                    this.goalGraphics.tint = color;
                },
                enumerable: true,
                configurable: true
            });
            PuckGoal.prototype.animate = function () {
                if (!this.animationStarted) {
                    this.animationStarted = true;
                    this.goalGraphicsAnimator.visible = true;
                    this.goalGraphicsAnimator.alpha = 0;
                    this.goalAnimationTween = TweenMax.to(this.goalGraphicsAnimator, 0.2, {
                        alpha: 0.68,
                        yoyo: true,
                        repeat: -1
                    });
                }
            };
            PuckGoal.prototype.stopAnimation = function () {
                if (this.animationStarted) {
                    this.animationStarted = false;
                    this.goalGraphicsAnimator.visible = false;
                    if (this.goalAnimationTween && this.goalAnimationTween.isActive())
                        this.goalAnimationTween.kill();
                }
            };
            return PuckGoal;
        }(Container));
        GameModule.PuckGoal = PuckGoal;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var StateMachineModule;
    (function (StateMachineModule) {
        var PockeyStateTexts = (function () {
            function PockeyStateTexts() {
            }
            PockeyStateTexts.beginGame = "AIM WITH CURSOR, PRESS & HOLD LEFT MOUSE BUTTON AND DRAG TO SET POWER";
            PockeyStateTexts.beginGameMobile = "TO AIM, TAP OR MOVE OVER THE POOLTABLE. SHOOT BY SELECTING THE POWER ON THE LEFT SIDE";
            PockeyStateTexts.yourTurnToShoot = "YOUR TURN! SHOOT <opponent>{opponent}'S</opponent> BALLS INTO POCKETS";
            PockeyStateTexts.ownBallAiming = "<warning>WARNING!</warning> HITTING YOUR OWN BALL FIRST IS A FOUL";
            PockeyStateTexts.ownBallHit = "<opponent>{opponent}</opponent> FOULED!";
            PockeyStateTexts.puckAiming = "SHOOT THE PUCK INTO <opponent>{opponent}'S</opponent> GOAL!";
            PockeyStateTexts.opponentFault = "<opponent>{opponent}</opponent> FOULED! PLACE THE BALL ANYWHERE ON TABLE";
            PockeyStateTexts.whiteBallFault = "YOU FOULED! <opponent>{opponent}</opponent> GETS BALL-IN-HAND";
            PockeyStateTexts.onOwnBallInPocket = "YOU SCORED AN OWN BALL! <opponent>{opponent}’s</opponent> TURN!";
            PockeyStateTexts.puckOwnGoal = "PUCK WENT INTO YOUR OWN GOAL! <opponent>{opponent}</opponent> GETS BALL-IN-HAND";
            PockeyStateTexts.onTimeUp = "YOUR TIME IS UP! <opponent>{opponent}</opponent> GETS BALL-IN-HAND";
            PockeyStateTexts.onOpponentsTimeUp = "<opponent>{opponent}</opponent> TIME IS UP! PLACE THE BALL ANYWHERE ON TABLE";
            PockeyStateTexts.onPuckGoal = "YOU SCORED THE PUCK! -2 HEALTH TO <opponent>{opponent}</opponent>";
            PockeyStateTexts.noBallScored = "YOU DIDN’T SCORED! <opponent>{opponent}'S</opponent> TURN";
            PockeyStateTexts.multipleBallsIn = "YOU MADE A TRICKSHOT! CONGRATS!";
            PockeyStateTexts.ballInPocketViaOtherBall = "YOU MADE A TRICKSHOT! CONGRATS!";
            PockeyStateTexts.opponentBallInPocket = "<opponent>{opponent}</opponent> POCKETED A BALL AND CAN SHOOT AGAIN!";
            PockeyStateTexts.opponentsTurn = "<opponent>{opponent}'s</opponent> turn";
            return PockeyStateTexts;
        }());
        StateMachineModule.PockeyStateTexts = PockeyStateTexts;
    })(StateMachineModule = Pockey.StateMachineModule || (Pockey.StateMachineModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var GameModule;
    (function (GameModule) {
        var Sprite = PIXI.Sprite;
        var Settings = Framework.Settings;
        var PockeyStateTexts = Pockey.StateMachineModule.PockeyStateTexts;
        var Goalie = (function (_super) {
            __extends(Goalie, _super);
            function Goalie(side) {
                var _this = _super.call(this) || this;
                _this.yLimit = 50;
                _this.isGoing = "down";
                _this.moving = false;
                _this.goaliePolygonCoord = [
                    [-25 - 2, 13 + 2],
                    [-24 - 2, -5 - 2],
                    [-17 - 5, -16 + 2],
                    [-22 - 4, -20 + 2],
                    [-17 - 2, -30 - 2],
                    [-10 - 2, -29 - 2],
                    [-6 - 2, -35 - 2],
                    [28, -37],
                    [28, 37],
                    [-5 - 2, 35 + 2],
                    [-18 - 2, 35 + 2],
                    [-26 - 2, 29 + 2]
                ];
                _this.goalieShadowPolygonCoord = [
                    [-42, 6],
                    [-36, -32],
                    [-17, -42],
                    [-4, -52],
                    [11, -46],
                    [31, -24],
                    [42, 16],
                    [34, 26],
                    [22, 48],
                    [3, 50],
                    [-15, 52],
                    [-34, 47],
                    [-40, 23]
                ];
                _this.side = side;
                _this.name = side + "Goalie";
                _this.goalieBody = new p2.Body({ mass: 0 });
                GameModule.P2WorldManager.Instance().world.addBody(_this.goalieBody);
                _this.goalieBody.fromPolygon(_this.goaliePolygonCoord);
                _.forEach(_this.goalieBody.shapes, function (shape) {
                    shape.material = new p2.Material(GameModule.MaterialType.GOALIE_MATERIAL);
                });
                _this.goalieBodyShadow = new p2.Body({ mass: 0 });
                GameModule.P2WorldManager.Instance().world.addBody(_this.goalieBodyShadow);
                _this.goalieBodyShadow.fromPolygon(_this.goalieShadowPolygonCoord);
                _.forEach(_this.goalieBodyShadow.shapes, function (shape) {
                    shape.material = new p2.Material(GameModule.MaterialType.SHADOW_MATERIAL);
                });
                _this.goalieBottomLayer = new Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/goalie_bottom.png"));
                _this.goalieMiddleLayer = new Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/goalie_color.png"));
                _this.goalieTopLayer = new Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/goalie_top.png"));
                _this.addChild(_this.goalieBottomLayer);
                _this.addChild(_this.goalieMiddleLayer);
                _this.addChild(_this.goalieTopLayer);
                _this.pivot.set(_this.width / 2, _this.height / 2);
                return _this;
            }
            Goalie.prototype.setBodyPosition = function () {
                this.goalieBody.position[0] = this.x;
                this.goalieBody.position[1] = this.y;
                this.goalieBody.angle = this.rotation;
                this.goalieBodyShadow.position[0] = this.x;
                this.goalieBodyShadow.position[1] = this.y;
                this.goalieBodyShadow.angle = this.rotation;
            };
            Goalie.prototype.setPosition = function (position) {
                this.x = position.x;
                this.y = position.y;
                this.setBodyPosition();
            };
            Goalie.prototype.onUpdateUiText = function (params) {
                if (params[0] == PockeyStateTexts.beginGame) {
                    this.startMoving();
                }
            };
            Goalie.prototype.addGrToPool = function (parent) {
                parent.addChild(this.gr);
            };
            Goalie.prototype.startMoving = function () {
                this.moving = true;
                if (this.isGoing == "down") {
                    this.startGoDownTween();
                }
                else {
                    this.startGoUpTween();
                }
            };
            Goalie.prototype.startGoDownTween = function () {
                this.resetTweens();
                var tweenTime = (this.yLimit - this.y) / (2 * this.yLimit);
                this.goDownTween = TweenMax.to(this, Math.abs(tweenTime), {
                    y: this.yLimit,
                    ease: Linear.easeNone,
                    onUpdate: this.onGoDownUpdate.bind(this),
                    onComplete: this.startGoUpTween.bind(this)
                });
            };
            Goalie.prototype.startGoUpTween = function () {
                this.resetTweens();
                var tweenTime = (-this.yLimit - this.y) / (2 * this.yLimit);
                this.goUpTween = TweenMax.to(this, Math.abs(tweenTime), {
                    y: -this.yLimit,
                    ease: Linear.easeNone,
                    onUpdate: this.onGoUpUpdate.bind(this),
                    onComplete: this.startGoDownTween.bind(this)
                });
            };
            Goalie.prototype.onGoDownUpdate = function () {
                this.isGoing = "down";
                this.setBodyPosition();
            };
            Goalie.prototype.onGoUpUpdate = function () {
                this.isGoing = "up";
                this.setBodyPosition();
            };
            Goalie.prototype.resetTweens = function () {
                this.moving = false;
                if (this.goUpTween && this.goUpTween.isActive()) {
                    this.goUpTween.kill();
                    this.goUpTween = null;
                }
                if (this.goDownTween && this.goDownTween.isActive()) {
                    this.goDownTween.kill();
                    this.goDownTween = null;
                }
                TweenMax.killTweensOf(this);
            };
            return Goalie;
        }(PIXI.Container));
        GameModule.Goalie = Goalie;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Container = PIXI.Container;
var Pockey;
(function (Pockey) {
    var GameModule;
    (function (GameModule) {
        var Sprite = PIXI.Sprite;
        var Graphics = PIXI.Graphics;
        var Point = PIXI.Point;
        var Vector2 = Framework.Utils.Vector2;
        var Rect = Framework.Utils.Rect;
        var Rectangle = PIXI.Rectangle;
        var Settings = Framework.Settings;
        var PoolTable = (function (_super) {
            __extends(PoolTable, _super);
            function PoolTable() {
                var _this = _super.call(this) || this;
                _this.ballsDistance = 108;
                _this.playerStartXPos = 736;
                _this.opponentStartXPos = 1223;
                _this.mouseXOffset = 0;
                _this.mouseYOffset = 0;
                _this.ballCanMove = false;
                _this.name = "poolTable";
                _this.createElements();
                return _this;
            }
            PoolTable.prototype.createElements = function () {
                var _this = this;
                this.balls = [];
                this.poolTableBackground = new Sprite(PIXI.Texture.fromFrame("table-default.png"));
                this.poolTableBackground.name = "poolTableBackground";
                this.poolTableBackground.x = -this.poolTableBackground.width / 2;
                this.poolTableBackground.y = -this.poolTableBackground.height / 2;
                this.addChild(this.poolTableBackground);
                Pockey.PockeySettings.MIDDLE_TABLE_POS = new Vector2(0, 0);
                Pockey.PockeySettings.MIDDLE_TABLE_LEFT_POS = new Vector2(Pockey.PockeySettings.MIDDLE_TABLE_POS.x - 244, Pockey.PockeySettings.MIDDLE_TABLE_POS.y);
                Pockey.PockeySettings.MIDDLE_TABLE_RIGHT_POS = new Vector2(Pockey.PockeySettings.MIDDLE_TABLE_POS.x + 244, Pockey.PockeySettings.MIDDLE_TABLE_POS.y);
                this.poolTableOverFrame = new Sprite(PIXI.Texture.fromFrame("table_border-1.png"));
                this.poolTableOverFrame.name = "poolTableOverFrame";
                this.poolTableOverFrame.x = Pockey.PockeySettings.MIDDLE_TABLE_POS.x - this.poolTableOverFrame.width / 2;
                this.poolTableOverFrame.y = Pockey.PockeySettings.MIDDLE_TABLE_POS.y - this.poolTableOverFrame.height / 2;
                this.addChild(this.poolTableOverFrame);
                this.ballAnimationHolder = new Container();
                this.addChild(this.ballAnimationHolder);
                this.poolTableBackgroundBottom = new Sprite(PIXI.Texture.fromFrame(Settings.desktopAssetsPath + "Images/table_bottom.png"));
                this.poolTableBackgroundBottom.name = "poolTableBackgroundBottom";
                this.poolTableBackgroundBottom.x = -this.poolTableBackgroundBottom.width / 2;
                this.poolTableBackgroundBottom.y = -this.poolTableBackgroundBottom.height / 2;
                this.addChild(this.poolTableBackgroundBottom);
                this.playGround = new Rectangle(-970 / 2, -484 / 2, 970, 484);
                this.setTableLimits();
                this.addPockets();
                this.decalIcon = new GameModule.Decal();
                this.decalIcon.name = "decalIcon";
                this.decalIcon.x = Pockey.PockeySettings.MIDDLE_TABLE_POS.x;
                this.decalIcon.y = Pockey.PockeySettings.MIDDLE_TABLE_POS.y;
                this.addChild(this.decalIcon);
                this.shadowsHolder = new Container();
                this.addChild(this.shadowsHolder);
                this.ballsHolder = new Container();
                this.ballsHolder.name = "ballsHolder";
                this.addChild(this.ballsHolder);
                this.puck = new GameModule.Puck();
                this.puck.ballAnimationHolder = this.ballAnimationHolder;
                this.puck.createBallShadow();
                this.puck.tintBall(Pockey.PockeySettings.PUCK_COLOR);
                this.puck.x = Pockey.PockeySettings.MIDDLE_TABLE_POS.x;
                this.puck.y = Pockey.PockeySettings.MIDDLE_TABLE_POS.y;
                this.puck.ballPosition = new Vector2(Pockey.PockeySettings.MIDDLE_TABLE_POS.x, Pockey.PockeySettings.MIDDLE_TABLE_POS.y);
                this.puck.setWallLimits(this.leftLimit, this.rightLimit, this.upLimit, this.downLimit);
                this.addBallToBallsHolder(this.puck);
                this.balls.push(this.puck);
                this.rightGoal = new GameModule.PuckGoal("right");
                this.rightGoal.name = "rightGoal";
                this.rightGoal.x = Pockey.PockeySettings.MIDDLE_TABLE_POS.x + 487;
                this.rightGoal.y = Pockey.PockeySettings.MIDDLE_TABLE_POS.y - 116;
                this.addChild(this.rightGoal);
                this.leftGoal = new GameModule.PuckGoal("left");
                this.leftGoal.name = "leftGoal";
                this.leftGoal.x = Pockey.PockeySettings.MIDDLE_TABLE_POS.x - 483 - this.leftGoal.width;
                this.leftGoal.y = Pockey.PockeySettings.MIDDLE_TABLE_POS.y - 116;
                this.addChild(this.leftGoal);
                this.puck.puckGoals = [this.leftGoal, this.rightGoal];
                this.puck.goalYPosition = this.leftGoal.y;
                this.puck.goalHeight = this.leftGoal.height;
                this.leftGoalie = new GameModule.Goalie("left");
                this.leftGoalie.rotation = Math.PI;
                this.leftGoalie.setPosition(new Vector2(-468, 0));
                this.addChild(this.leftGoalie);
                this.rightGoalie = new GameModule.Goalie("right");
                this.rightGoalie.setPosition(new Vector2(468, 0));
                this.addChild(this.rightGoalie);
                this.ballPositionCircleOnRaycast = new Container();
                this.ballPositionCircleOnRaycast.name = "ballPositionCircleOnRaycast";
                var graphics = new Graphics();
                graphics.name = "graphics";
                graphics.lineStyle(4, 0xffffff);
                graphics.beginFill(0xffffff, 0);
                graphics.drawCircle(0, 0, Pockey.PockeySettings.BALL_RADIUS + 6);
                this.ballPositionCircleOnRaycast.addChild(graphics);
                this.ballPositionCircleOnRaycast.visible = false;
                this.addChild(this.ballPositionCircleOnRaycast);
                this.whiteBall = new GameModule.WhiteBall();
                this.whiteBall.ballAnimationHolder = this.ballAnimationHolder;
                this.whiteBall.createBallShadow();
                this.whiteBall.ballPosition = new Vector2(Pockey.PockeySettings.MIDDLE_TABLE_LEFT_POS.x, Pockey.PockeySettings.MIDDLE_TABLE_POS.y);
                this.whiteBall.setWallLimits(this.leftLimit, this.rightLimit, this.upLimit, this.downLimit);
                this.whiteBall.setPockets(this.pockets);
                this.balls.push(this.whiteBall);
                this.addBallToBallsHolder(this.whiteBall);
                var ball;
                this.rightBallsArray = [];
                this.leftBallsArray = [];
                var angle;
                _.forEach(_.range(Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER), function (id) {
                    ball = new GameModule.AbstractBall("right", id.toString());
                    ball.ballAnimationHolder = _this.ballAnimationHolder;
                    ball.createBallShadow();
                    ball.setWallLimits(_this.leftLimit, _this.rightLimit, _this.upLimit, _this.downLimit);
                    ball.setPockets(_this.pockets);
                    _this.balls.push(ball);
                    _this.rightBallsArray.push(ball);
                    angle = (id / (Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER / 2)) * Math.PI;
                    ball.ballPosition = new Vector2(Pockey.PockeySettings.MIDDLE_TABLE_POS.x + (_this.ballsDistance * Math.cos(angle)), Pockey.PockeySettings.MIDDLE_TABLE_POS.y + (_this.ballsDistance * Math.sin(angle)));
                    _this.addBallToBallsHolder(ball);
                });
                _.forEach(_.range(Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER), function (id) {
                    ball = new GameModule.AbstractBall("left", id.toString());
                    ball.ballAnimationHolder = _this.ballAnimationHolder;
                    ball.createBallShadow();
                    ball.setWallLimits(_this.leftLimit, _this.rightLimit, _this.upLimit, _this.downLimit);
                    ball.setPockets(_this.pockets);
                    _this.balls.push(ball);
                    _this.leftBallsArray.push(ball);
                    angle = (id / (Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER / 2)) * Math.PI + Math.PI / Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER;
                    ball.ballPosition = new Vector2(Pockey.PockeySettings.MIDDLE_TABLE_POS.x + (_this.ballsDistance * Math.cos(angle)), Pockey.PockeySettings.MIDDLE_TABLE_POS.y + (_this.ballsDistance * Math.sin(angle)));
                    _this.addBallToBallsHolder(ball);
                });
                this.ballPositionCircle = new Container();
                this.ballPositionCircle.name = "ballPositionCircle";
                graphics = new Graphics();
                graphics.name = "graphics";
                graphics.lineStyle(3, 0xffffff);
                graphics.drawCircle(0, 0, Pockey.PockeySettings.BALL_RADIUS);
                this.ballPositionCircle.addChild(graphics);
                this.ballPositionCircle.x = 580;
                this.ballPositionCircle.y = 400;
                this.ballPositionCircle.visible = false;
                this.addChild(this.ballPositionCircle);
                this.raycastFollower = new Sprite();
                graphics = new Graphics();
                graphics.name = "graphics";
                graphics.lineStyle(4, 0xffffff);
                graphics.beginFill(0xffffff, 0);
                graphics.drawCircle(0, 0, Pockey.PockeySettings.BALL_RADIUS - 2);
                graphics.endFill();
                this.raycastFollower.addChild(graphics);
                this.raycastFollower.visible = false;
                this.addChild(this.raycastFollower);
                this.whiteBallReflectionArrow = new Container();
                this.otherBallReflectionArrow = new Container();
                _.forEach([this.whiteBallReflectionArrow, this.otherBallReflectionArrow], function (arrow) {
                    var g = new Graphics();
                    g.lineStyle(4, 0xffffff);
                    var sideLength = 6;
                    g.moveTo(-sideLength / 2, -sideLength * Math.sqrt(2));
                    g.lineTo(sideLength, 0.2);
                    g.moveTo(-sideLength / 2, sideLength * Math.sqrt(2));
                    g.lineTo(sideLength, -0.2);
                    arrow.addChild(g);
                    arrow.x = 200;
                    arrow.y = 200;
                    arrow.visible = false;
                    _this.addChild(arrow);
                });
                if (Settings.isMobile) {
                    this.poolStick = new Pockey.StickMobile();
                    this.poolStick.x = -145;
                    this.poolStick.y = 110;
                }
                else {
                    this.poolStick = new GameModule.Stick();
                    this.poolStick.x = 844;
                    this.poolStick.y = 650;
                }
                this.poolStick.initialPosition = new Point(this.poolStick.x, this.poolStick.y);
                this.poolStick.startPosition = new Point(this.whiteBall.position.x, this.whiteBall.position.y);
                this.poolStick.visible = false;
                this.addChild(this.poolStick);
                this.createUpperCollisionPolygon();
                this.createUpperCollisionShadowPolygon();
                this.createBottomCollisionPolygon();
                this.createBottomCollisionShadowPolygon();
            };
            PoolTable.prototype.setTableLimits = function () {
                this.leftLimit = this.playGround.x;
                this.rightLimit = this.playGround.x + this.playGround.width;
                this.upLimit = this.playGround.y;
                this.downLimit = this.playGround.y + this.playGround.height;
            };
            PoolTable.prototype.addBallToBallsHolder = function (ball) {
                this.ballsHolder.addChild(ball);
                this.shadowsHolder.addChild(ball.ballShadow);
            };
            PoolTable.prototype.addPockets = function () {
                var rect2A = this.createRectangle(new Rectangle(-494, 0, 20, 380), 0, GameModule.MaterialType.PUCK_ONLY_MATERIAL, 0xff9900, "rect2a");
                var rect2B = this.createRectangle(new Rectangle(497, 0, 20, 380), 0, GameModule.MaterialType.PUCK_ONLY_MATERIAL, 0xff9900, "rect2b");
                var rect4A = this.createRectangle(new Rectangle(-492, -250, 20, 58), 0.7853981634, GameModule.MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect4a");
                var rect4B = this.createRectangle(new Rectangle(492, 250, 20, 58), 0.7853981634, GameModule.MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect4b");
                var rect5A = this.createRectangle(new Rectangle(492, -250, 20, 58), -0.7853981634, GameModule.MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect5a");
                var rect5B = this.createRectangle(new Rectangle(-492, 250, 20, 58), -0.7853981634, GameModule.MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect5b");
                var rect7A = this.createRectangle(new Rectangle(0, -270, 100, 20), 0, GameModule.MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect7a");
                var rect7B = this.createRectangle(new Rectangle(0, 270, 100, 20), 0, GameModule.MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect7b");
                this.pockets = [];
                var pocket1 = new Pockey.Pocket(-497, -254, 28, new Vector2(-438, -200));
                this.pockets.push(pocket1);
                pocket1.addPoints(this);
                var pocket2 = new Pockey.Pocket(0, -264, 26, new Vector2(0, -200));
                this.pockets.push(pocket2);
                pocket2.addPoints(this);
                var pocket3 = new Pockey.Pocket(496, -255, 28, new Vector2(438, -200));
                this.pockets.push(pocket3);
                pocket3.addPoints(this);
                var pocket4 = new Pockey.Pocket(497, 254, 28, new Vector2(438, 200));
                this.pockets.push(pocket4);
                pocket4.addPoints(this);
                var pocket5 = new Pockey.Pocket(0, 263, 26, new Vector2(0, 200));
                this.pockets.push(pocket5);
                pocket5.addPoints(this);
                var pocket6 = new Pockey.Pocket(-497, 253, 28, new Vector2(-438, 200));
                this.pockets.push(pocket6);
                pocket6.addPoints(this);
            };
            PoolTable.prototype.createUpperCollisionPolygon = function () {
                var vertices = Pockey.PockeySettings.MAIN_COLLISION_POLYGON.slice(0);
                var upperCollisionPolygon = new p2.Body({ mass: 0 });
                GameModule.P2WorldManager.Instance().world.addBody(upperCollisionPolygon);
                upperCollisionPolygon.fromPolygon(vertices);
                _.forEach(upperCollisionPolygon.shapes, function (shape) {
                    shape.material = new p2.Material(GameModule.MaterialType.LINE_MATERIAL);
                });
            };
            PoolTable.prototype.createUpperCollisionShadowPolygon = function () {
                var vertices = Pockey.PockeySettings.MAIN_COLLISION_SHADOW.slice(0);
                var upperCollisionShadowPolygon = new p2.Body({ mass: 0 });
                GameModule.P2WorldManager.Instance().world.addBody(upperCollisionShadowPolygon);
                upperCollisionShadowPolygon.fromPolygon(vertices);
                _.forEach(upperCollisionShadowPolygon.shapes, function (shape) {
                    shape.material = new p2.Material(GameModule.MaterialType.SHADOW_MATERIAL);
                });
                upperCollisionShadowPolygon.position[0] -= 1.5;
                upperCollisionShadowPolygon.position[1] += 1.5;
            };
            PoolTable.prototype.createBottomCollisionPolygon = function () {
                var vertices = Pockey.PockeySettings.MAIN_COLLISION_POLYGON.slice(0);
                var bottomCollisionPolygon = new p2.Body({ mass: 0 });
                GameModule.P2WorldManager.Instance().world.addBody(bottomCollisionPolygon);
                bottomCollisionPolygon.fromPolygon(vertices);
                _.forEach(bottomCollisionPolygon.shapes, function (shape) {
                    shape.material = new p2.Material(GameModule.MaterialType.LINE_MATERIAL);
                });
                bottomCollisionPolygon.angle = Math.PI;
                bottomCollisionPolygon.position[1] += 513;
                bottomCollisionPolygon.position[0] -= 11;
            };
            PoolTable.prototype.createBottomCollisionShadowPolygon = function () {
                var vertices = Pockey.PockeySettings.MAIN_COLLISION_SHADOW.slice(0);
                var bottomCollisionShadowPolygon = new p2.Body({ mass: 0 });
                GameModule.P2WorldManager.Instance().world.addBody(bottomCollisionShadowPolygon);
                bottomCollisionShadowPolygon.fromPolygon(vertices);
                _.forEach(bottomCollisionShadowPolygon.shapes, function (shape) {
                    shape.material = new p2.Material(GameModule.MaterialType.SHADOW_MATERIAL);
                });
                bottomCollisionShadowPolygon.angle = Math.PI;
                bottomCollisionShadowPolygon.position[1] += 399;
                bottomCollisionShadowPolygon.position[0] -= 2;
            };
            PoolTable.prototype.createLine = function (v1, v2, materialType, body) {
                if (body === void 0) { body = null; }
                var graphics = new Graphics();
                graphics.name = "line";
                graphics.lineStyle(2, 0xffff00);
                graphics.moveTo(v1.x, v1.y);
                graphics.lineTo(v2.x, v2.y);
                this.addChild(graphics);
            };
            PoolTable.prototype.reset = function () {
                var _this = this;
                this.balls = [];
                this.whiteBall.reset();
                this.whiteBall.ballPosition = this.whiteBall.initialPosition;
                this.addBallToBallsHolder(this.whiteBall);
                this.balls.push(this.whiteBall);
                this.puck.reset();
                this.puck.ballPosition = this.puck.initialPosition;
                this.balls.push(this.puck);
                this.addBallToBallsHolder(this.puck);
                _.forEach(this.leftBallsArray, function (ball) {
                    ball.reset();
                    ball.ballPosition = ball.initialPosition;
                    _this.balls.push(ball);
                    _this.addBallToBallsHolder(ball);
                });
                _.forEach(this.rightBallsArray, function (ball) {
                    ball.reset();
                    console.log(ball.name);
                    ball.ballPosition = ball.initialPosition;
                    _this.balls.push(ball);
                    _this.addBallToBallsHolder(ball);
                });
            };
            PoolTable.prototype.createRectangle = function (rectangle, rotationAngle, materialType, color, id) {
                if (color === void 0) { color = 0xffff00; }
                var rect = new Rect(rectangle, rotationAngle, materialType);
                return rect;
            };
            return PoolTable;
        }(Container));
        GameModule.PoolTable = PoolTable;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var GameModule;
    (function (GameModule) {
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var Vector2 = Framework.Utils.Vector2;
        var Point = PIXI.Point;
        var Graphics = PIXI.Graphics;
        var PixiDashedLine = Framework.Utils.PixiDashedLine;
        var PockeyStateMachine = Pockey.StateMachineModule.PockeyStateMachine;
        var PockeyStates = Pockey.StateMachineModule.PockeyStates;
        var MouseHandler = Framework.Utils.MouseHandler;
        var PockeyConnectionSignals = Pockey.SignalsModule.PockeyConnectionSignals;
        var Settings = Framework.Settings;
        var PockeyStateTexts = Pockey.StateMachineModule.PockeyStateTexts;
        var PoolTableManager = (function () {
            function PoolTableManager() {
                var _this = this;
                this.shootingEnded = false;
                this.hitPoint = p2.vec2.create();
                this.startRayCastPoint = [0, 0];
                this.endRayCastPoint = [0, 0];
                this.raycastResult = new p2.RaycastResult();
                this.rayClosest = new p2.Ray({
                    mode: p2.Ray.CLOSEST,
                    skipBackfaces: true
                });
                this.repositionWhiteBallEnabled = false;
                this.contactEnabled = false;
                this.whiteBallInThePocket = false;
                this.opponentBallInThePocket = false;
                this.playerTurnStarted = false;
                this.ballWasShot = false;
                this.opponentTimeUp = false;
                this.repositionStarted = false;
                this.isFirstShoot = true;
                this.uiTextOnWatch = "";
                this.graphColor = 0xffffff;
                this.registerSignalsHandlers();
                this.poolTable = new GameModule.PoolTable();
                this.poolTable.visible = false;
                this.ticker = PIXI.ticker.shared;
                if (this.poolTable.poolStick)
                    this.ticker.add(this.poolTable.poolStick.update, this.poolTable.poolStick);
                _.forEach(this.poolTable.balls, function (ball) {
                    _this.ticker.add(ball.update, ball);
                    ball.addShadowBody();
                });
                this.ticker.add(this.update, this);
                GameModule.P2WorldManager.Instance().world.on("beginContact", function (evt) {
                    if (_this.contactEnabled) {
                        if (!_.isNull(evt.shapeA.radius) && !_.isUndefined(evt.shapeA.radius) &&
                            !_.isNull(evt.shapeB.radius) && !_.isUndefined(evt.shapeB.radius)) {
                            _this.contactEnabled = false;
                            var isOwnBall = false;
                            if (evt.bodyA == _this.poolTable.whiteBall.p2Body) {
                                isOwnBall = _this.checkIfOwnBall(evt.bodyB);
                            }
                            else if (evt.bodyB == _this.poolTable.whiteBall.p2Body) {
                                isOwnBall = _this.checkIfOwnBall(evt.bodyA);
                            }
                            if (isOwnBall) {
                                SignalsManager.DispatchSignal(PockeySignalTypes.FIRST_BALL_FAULT);
                                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.whiteBallFault]);
                            }
                        }
                    }
                }, this);
            }
            PoolTableManager.prototype.registerSignalsHandlers = function () {
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_POOLTABLE, this.onShowPoolTable.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.RESET_POOLTABLE, this.onResetPoolTable.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.RESET_STICK_POWER, this.onResetStickPower.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_BALL_RAY_GRAPHICS, this.hideBallRayGraphics.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.REACTIVATE_STICK, this.reactivateStick.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOOT_BALL, this.onShoot.bind(this));
                SignalsManager.AddSignalCallback(PockeyConnectionSignals.WATCH, this.onWatch.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_OPPONENT_COLOR, this.onChangeOpponentColor.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_PLAYER_COLOR, this.onChangePlayerColor.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SET_SIDES_TYPE, this.onSetPuckGoalsSides.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, this.onUpdateUITextOnWatch.bind(this));
            };
            PoolTableManager.prototype.onAnimatePuckGoal = function () {
                if (this.poolTable.leftGoal.type == GameModule.GameManager.Instance().currentPlayer.type) {
                    this.poolTable.rightGoal.animate();
                }
                else {
                    this.poolTable.leftGoal.animate();
                }
            };
            PoolTableManager.prototype.onResetStickPower = function () {
                this.poolTable.poolStick.power = 0;
                this.poolTable.poolStick.reset();
            };
            PoolTableManager.prototype.onStopAnimatePuckGoal = function () {
                this.poolTable.leftGoal.stopAnimation();
                this.poolTable.rightGoal.stopAnimation();
            };
            PoolTableManager.prototype.onUpdateUITextOnWatch = function (params) {
                this.uiTextOnWatch = params["0"];
            };
            PoolTableManager.prototype.onSetPuckGoalsSides = function (params) {
                this.poolTable.leftGoal.type = params[0];
                this.poolTable.leftGoalie.type = params[0];
                this.poolTable.rightGoal.type = params[1];
                this.poolTable.rightGoalie.type = params[1];
                _.forEach(this.poolTable.leftBallsArray, function (ball) {
                    ball.ballType = params[0];
                });
                _.forEach(this.poolTable.rightBallsArray, function (ball) {
                    ball.ballType = params[1];
                });
            };
            PoolTableManager.prototype.onChangeOpponentColor = function (color) {
                if (this.poolTable.leftGoal.type == GameModule.BallType.Opponent) {
                    this.poolTable.leftGoal.tint = color;
                }
                else {
                    this.poolTable.rightGoal.tint = color;
                }
                if (this.poolTable.leftGoalie.type == GameModule.BallType.Opponent) {
                    this.poolTable.leftGoalie.goalieMiddleLayer.tint = color;
                }
                else {
                    this.poolTable.rightGoalie.goalieMiddleLayer.tint = color;
                }
                _.forEach(this.poolTable.balls, function (ball) {
                    if (ball.ballType == GameModule.BallType.Opponent) {
                        ball.tintBall(color);
                    }
                });
            };
            PoolTableManager.prototype.onChangePlayerColor = function (color) {
                if (this.poolTable.leftGoal.type == GameModule.BallType.Player) {
                    this.poolTable.leftGoal.tint = +color;
                }
                else {
                    this.poolTable.rightGoal.tint = +color;
                }
                if (this.poolTable.leftGoalie.type == GameModule.BallType.Player) {
                    this.poolTable.leftGoalie.goalieMiddleLayer.tint = +color;
                }
                else {
                    this.poolTable.rightGoalie.goalieMiddleLayer.tint = +color;
                }
                _.forEach(this.poolTable.balls, function (ball) {
                    if (ball.ballType == GameModule.BallType.Player) {
                        ball.tintBall(+color);
                    }
                });
            };
            PoolTableManager.prototype.onShowPoolTable = function () {
                this.poolTable.visible = true;
            };
            PoolTableManager.prototype.onResetPoolTable = function () {
                this.isFirstShoot = true;
                this.poolTable.reset();
            };
            PoolTableManager.prototype.onShoot = function () {
                this.onStopAnimatePuckGoal();
                this.contactEnabled = true;
                var rotation = this.poolTable.poolStick.rotation;
                _.forEach(this.poolTable.balls, function (ball) {
                    GameModule.P2WorldManager.Instance().world.removeBody(ball.p2BodyShadow);
                    ball.p2Body.wakeUp();
                });
                this.poolTable.whiteBall.onShoot(rotation, this.poolTable.poolStick.power);
                this.poolTable.poolStick.power = 0;
                this.isFirstShoot = false;
            };
            PoolTableManager.prototype.onRepositionWhiteBall = function () {
                var _this = this;
                if (this.opponentTimeUp) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.onOpponentsTimeUp]);
                }
                else
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.opponentFault]);
                var localPoint = this.poolTable.toLocal(new Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));
                if (_.isNull(this.lastGoodRepositionPoint) || _.isUndefined(this.lastGoodRepositionPoint)) {
                    this.lastGoodRepositionPoint = new Vector2();
                }
                if (this.graph) {
                    if (this.graph.parent)
                        this.graph.parent.removeChild(this.graph);
                    this.graph.clear();
                    this.graph = null;
                }
                var ballPositionCirclePosition = new Vector2(localPoint.x, localPoint.y);
                if (ballPositionCirclePosition.x + Pockey.PockeySettings.BALL_RADIUS > this.poolTable.rightLimit)
                    ballPositionCirclePosition.x = this.poolTable.rightLimit - Pockey.PockeySettings.BALL_RADIUS;
                if (ballPositionCirclePosition.x - Pockey.PockeySettings.BALL_RADIUS < this.poolTable.leftLimit)
                    ballPositionCirclePosition.x = this.poolTable.leftLimit + Pockey.PockeySettings.BALL_RADIUS;
                if (ballPositionCirclePosition.y + Pockey.PockeySettings.BALL_RADIUS > this.poolTable.downLimit)
                    ballPositionCirclePosition.y = this.poolTable.downLimit - Pockey.PockeySettings.BALL_RADIUS;
                if (ballPositionCirclePosition.y - Pockey.PockeySettings.BALL_RADIUS < this.poolTable.upLimit)
                    ballPositionCirclePosition.y = this.poolTable.upLimit + Pockey.PockeySettings.BALL_RADIUS;
                var ballPosition;
                _.forEach(this.poolTable.balls, function (ball) {
                    ballPosition = new Vector2(ball.x, ball.y);
                    if (ballPositionCirclePosition.distanceTo(ballPosition) < ball.radius + Pockey.PockeySettings.BALL_RADIUS) {
                        var opposite = ballPositionCirclePosition.y - ballPosition.y;
                        var adjacent = ballPositionCirclePosition.x - ballPosition.x;
                        var rotAngle = Math.atan2(opposite, adjacent);
                        ballPositionCirclePosition.x = ballPosition.x + (Pockey.PockeySettings.BALL_RADIUS + ball.radius) * Math.cos(rotAngle);
                        ballPositionCirclePosition.y = ballPosition.y + (Pockey.PockeySettings.BALL_RADIUS + ball.radius) * Math.sin(rotAngle);
                        var isInteresectingWithOthers_1 = false;
                        _.forEach(_this.poolTable.balls, function (ball2) {
                            if (ball2 != ball) {
                                var ball2Position = new Vector2(ball2.x, ball2.y);
                                if (ball2Position.distanceTo(ballPositionCirclePosition) < Pockey.PockeySettings.BALL_RADIUS + ball2.radius) {
                                    isInteresectingWithOthers_1 = true;
                                    return;
                                }
                            }
                        });
                        if (isInteresectingWithOthers_1) {
                            ballPositionCirclePosition.x = _this.lastGoodRepositionPoint.x;
                            ballPositionCirclePosition.y = _this.lastGoodRepositionPoint.y;
                        }
                        else {
                            _this.lastGoodRepositionPoint.x = ballPositionCirclePosition.x;
                            _this.lastGoodRepositionPoint.y = ballPositionCirclePosition.y;
                        }
                    }
                    _this.poolTable.ballPositionCircle.x = ballPositionCirclePosition.x;
                    _this.poolTable.ballPositionCircle.y = ballPositionCirclePosition.y;
                    _this.poolTable.ballPositionCircle.visible = true;
                });
                if (MouseHandler.Instance().left.down) {
                    this.repositionStarted = true;
                }
                if (this.repositionStarted && !MouseHandler.Instance().left.down) {
                    this.repositionStarted = false;
                    this.repositionWhiteBallEnabled = false;
                    this.poolTable.ballPositionCircle.visible = false;
                    this.poolTable.whiteBall.reset();
                    this.poolTable.whiteBall.ballPosition = ballPositionCirclePosition;
                    this.poolTable.balls.push(this.poolTable.whiteBall);
                    this.poolTable.addBallToBallsHolder(this.poolTable.whiteBall);
                    SignalsManager.DispatchSignal(PockeySignalTypes.WHITE_BALL_REPOSITIONED);
                    if (!this.poolTable.poolStick.isActive) {
                        _.forEach(this.poolTable.balls, function (ball) {
                            ball.addShadowBody();
                        });
                        this.poolTable.raycastFollower.visible = true;
                        this.poolTable.ballPositionCircleOnRaycast.visible = true;
                        this.poolTable.poolStick.activate(new Point(this.poolTable.whiteBall.x, this.poolTable.whiteBall.y));
                    }
                }
                this.sendElementsDataToManager();
            };
            PoolTableManager.prototype.handleCollisions = function () {
                var _this = this;
                _.remove(this.poolTable.balls, function (ball) {
                    if (ball.canBeRemoved && !ball.animationInProgress) {
                        _this.ticker.remove(ball.update);
                        ball.removedFromArray = true;
                    }
                    return ball.canBeRemoved && !ball.animationInProgress;
                });
            };
            PoolTableManager.prototype.ballInPocketHandler = function (params) {
                console.log("ball in Pocket: " + params);
                console.log("la pocket 1: " + this.poolTable.balls.length);
                console.log("la pocket 2: " + this.poolTable.balls.length);
            };
            PoolTableManager.prototype.hideBallRayGraphics = function () {
                if (this.graph) {
                    if (this.graph.parent)
                        this.graph.parent.removeChild(this.graph);
                    this.graph.clear();
                }
                this.lineBetweenCirclesVisible = false;
                this.poolTable.whiteBallReflectionArrow.visible = false;
                this.poolTable.otherBallReflectionArrow.visible = false;
                this.poolTable.raycastFollower.visible = false;
                this.poolTable.ballPositionCircleOnRaycast.visible = false;
            };
            PoolTableManager.prototype.update = function () {
                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onRepositionWhiteBall) {
                    if (!this.poolTable.leftGoalie.moving)
                        this.poolTable.leftGoalie.startMoving();
                    if (!this.poolTable.rightGoalie.moving)
                        this.poolTable.rightGoalie.startMoving();
                    this.onRepositionWhiteBall();
                    return;
                }
                else if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onShoot) {
                    if (!this.ballsAreMoving()) {
                        SignalsManager.DispatchSignal(PockeySignalTypes.NEXT_TURN);
                    }
                    else {
                        this.handleCollisions();
                        this.sendElementsDataToManager();
                    }
                }
                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onRearrangeStick) {
                    if (this.poolTable.poolStick.rotationEnabled) {
                        if (!this.poolTable.leftGoalie.moving)
                            this.poolTable.leftGoalie.startMoving();
                        if (!this.poolTable.rightGoalie.moving)
                            this.poolTable.rightGoalie.startMoving();
                        if (this.isFirstShoot) {
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.beginGame]);
                        }
                        else {
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.yourTurnToShoot]);
                        }
                        if (this.graph) {
                            if (this.graph.parent)
                                this.graph.parent.removeChild(this.graph);
                            this.graph.clear();
                            this.graph = null;
                        }
                        this.graph = new Graphics();
                        var localPoint = this.poolTable.toLocal(new Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));
                        var opposite = localPoint.y - this.poolTable.whiteBall.y;
                        var adjacent = localPoint.x - this.poolTable.whiteBall.x;
                        var rot = Math.atan2(opposite, adjacent);
                        var dir = new Vector2(Math.cos(rot), Math.sin(rot)).multiply(1100);
                        this.newPos = new Vector2(this.poolTable.whiteBall.x + dir.x, this.poolTable.whiteBall.y + dir.y);
                        this.shortestContactDistance = this.newPos.distanceTo(this.poolTable.whiteBall.position);
                        this.startRayCastPoint[0] = this.poolTable.whiteBall.x;
                        this.startRayCastPoint[1] = this.poolTable.whiteBall.y;
                        this.endRayCastPoint[0] = this.newPos.x;
                        this.endRayCastPoint[1] = this.newPos.y;
                        p2.vec2.copy(this.rayClosest.from, this.startRayCastPoint);
                        p2.vec2.copy(this.rayClosest.to, this.endRayCastPoint);
                        this.rayClosest.update();
                        this.raycastResult.reset();
                        GameModule.P2WorldManager.Instance().world.raycast(this.raycastResult, this.rayClosest);
                        this.drawRayResult(this.raycastResult, this.rayClosest);
                    }
                    this.sendElementsDataToManager();
                }
            };
            PoolTableManager.prototype.sendElementsDataToManager = function () {
                var ballsData = [];
                _.forEach(this.poolTable.balls, function (ball) {
                    ballsData.push(ball.getBallData());
                });
                if (!Settings.singlePlayer) {
                    var poolTableData = {
                        poolstickPivotX: this.poolTable.poolStick.pivot.x,
                        poolstickRotation: this.poolTable.poolStick.rotation,
                        poolstickPositionX: this.poolTable.poolStick.position.x,
                        poolstickPositionY: this.poolTable.poolStick.position.y,
                        whiteBallData: this.poolTable.whiteBall.getBallData(),
                        balls: ballsData,
                        ballPositionCircleVisible: this.poolTable.ballPositionCircle.visible,
                        ballPositionCircleX: this.poolTable.ballPositionCircle.x,
                        ballPositionCircleY: this.poolTable.ballPositionCircle.y,
                        ballPositionCircleOnRaycastVisible: this.poolTable.ballPositionCircleOnRaycast.visible,
                        ballPositionCircleOnRaycastX: this.poolTable.ballPositionCircleOnRaycast.x,
                        ballPositionCircleOnRaycastY: this.poolTable.ballPositionCircleOnRaycast.y,
                        followerVisible: this.poolTable.raycastFollower.visible,
                        followerX: this.poolTable.raycastFollower.x,
                        followerY: this.poolTable.raycastFollower.y,
                        lineBetweenCirclesVisible: this.lineBetweenCirclesVisible,
                        lineBetweenCirclesPoints: this.lineBetweenCirclesPoints,
                        graphColor: this.graphColor,
                        leftGoalieY: this.poolTable.leftGoalie.y,
                        rightGoalieY: this.poolTable.rightGoalie.y,
                    };
                    SignalsManager.DispatchSignal(PockeySignalTypes.SEND_ELEMENTS_DATA_TO_MANAGER, [poolTableData]);
                }
            };
            PoolTableManager.prototype.onWatch = function (params) {
                var _this = this;
                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onWatch) {
                    this.onStopAnimatePuckGoal();
                    var poolTableData = params[0];
                    if (this.poolTable.leftGoalie.moving)
                        this.poolTable.leftGoalie.resetTweens();
                    if (this.poolTable.rightGoalie.moving)
                        this.poolTable.rightGoalie.resetTweens();
                    this.poolTable.leftGoalie.y = poolTableData.leftGoalieY;
                    this.poolTable.rightGoalie.y = poolTableData.rightGoalieY;
                    if (poolTableData.opponentState == PockeyStates.onShoot) {
                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.opponentsTurn]);
                    }
                    else {
                        if (poolTableData.opponentTimeFinished == true) {
                            this.opponentTimeUp = true;
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.onOpponentsTimeUp]);
                        }
                        else {
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [this.uiTextOnWatch]);
                            this.opponentTimeUp = false;
                        }
                    }
                    this.poolTable.poolStick.x = poolTableData.poolstickPositionX;
                    this.poolTable.poolStick.y = poolTableData.poolstickPositionY;
                    this.poolTable.poolStick.rotation = poolTableData.poolstickRotation;
                    this.poolTable.poolStick.reset();
                    this.poolTable.poolStick.pivot.x = poolTableData.poolstickPivotX;
                    this.poolTable.poolStick.visible = true;
                    var ballsData_1 = poolTableData.balls;
                    var includesWhiteBall_1 = false;
                    var whiteBallData_1;
                    _.remove(this.poolTable.balls, function (ball) {
                        var canBeKept = false;
                        _.forEach(ballsData_1, function (ballData) {
                            if (ballData.name == ball.name) {
                                canBeKept = true;
                                ball.setBallData(ballData);
                            }
                            if (ballData.name == _this.poolTable.whiteBall.name) {
                                whiteBallData_1 = ballData;
                                includesWhiteBall_1 = true;
                            }
                        });
                        if (!canBeKept) {
                            GameModule.P2WorldManager.Instance().world.removeBody(ball.p2Body);
                            GameModule.P2WorldManager.Instance().world.removeBody(ball.p2BodyShadow);
                            ball.removed = true;
                        }
                        return ball.removed;
                    });
                    if (includesWhiteBall_1 && !_.includes(this.poolTable.balls, this.poolTable.whiteBall)) {
                        this.poolTable.whiteBall.setBallData(whiteBallData_1);
                        this.poolTable.whiteBall.reset();
                        this.poolTable.addBallToBallsHolder(this.poolTable.whiteBall);
                        this.poolTable.balls.push(this.poolTable.whiteBall);
                    }
                    this.graphColor = poolTableData.graphColor;
                    this.poolTable.raycastFollower.visible = poolTableData.followerVisible;
                    if (this.poolTable.raycastFollower.visible) {
                        if (this.poolTable.raycastFollower.getChildByName("graphics")) {
                            this.poolTable.raycastFollower.getChildByName("graphics").tint = this.graphColor;
                        }
                        this.poolTable.raycastFollower.x = poolTableData.followerX;
                        this.poolTable.raycastFollower.y = poolTableData.followerY;
                    }
                    this.poolTable.ballPositionCircle.visible = poolTableData.ballPositionCircleVisible;
                    if (this.poolTable.ballPositionCircle.visible) {
                        this.poolTable.ballPositionCircle.x = poolTableData.ballPositionCircleX;
                        this.poolTable.ballPositionCircle.y = poolTableData.ballPositionCircleY;
                    }
                    this.poolTable.ballPositionCircleOnRaycast.visible = poolTableData.ballPositionCircleOnRaycastVisible;
                    if (this.poolTable.ballPositionCircleOnRaycast.visible) {
                        if (this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics")) {
                            this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics").tint = this.graphColor;
                        }
                        this.poolTable.ballPositionCircleOnRaycast.x = poolTableData.ballPositionCircleOnRaycastX;
                        this.poolTable.ballPositionCircleOnRaycast.y = poolTableData.ballPositionCircleOnRaycastY;
                    }
                    if (this.graph) {
                        if (this.graph.parent)
                            this.graph.parent.removeChild(this.graph);
                        this.graph.clear();
                        this.graph = null;
                    }
                    this.lineBetweenCirclesVisible = poolTableData.lineBetweenCirclesVisible;
                    if (this.lineBetweenCirclesVisible) {
                        this.graph = new Graphics();
                        this.graph.lineStyle(4, this.graphColor);
                        this.graph.moveTo(poolTableData.lineBetweenCirclesPoints[0], poolTableData.lineBetweenCirclesPoints[1]);
                        this.graph.lineTo(poolTableData.lineBetweenCirclesPoints[2], poolTableData.lineBetweenCirclesPoints[3]);
                        this.poolTable.addChild(this.graph);
                    }
                }
            };
            PoolTableManager.prototype.ballsArrayContainsBall = function (ballName) {
                var contains = false;
                _.forEach(this.poolTable.balls, function (ball) {
                    if (ballName == ball.name) {
                        contains = true;
                        return;
                    }
                });
                return contains;
            };
            PoolTableManager.prototype.removeBallFromArray = function (ballName) {
                _.remove(this.poolTable.balls, function (ball) {
                    if (ballName == ball.name) {
                        GameModule.P2WorldManager.Instance().world.removeBody(ball.p2Body);
                        GameModule.P2WorldManager.Instance().world.removeBody(ball.p2BodyShadow);
                    }
                    return ballName == ball.name;
                });
            };
            PoolTableManager.prototype.drawRayResult = function (result, ray) {
                result.getHitPoint(this.hitPoint, ray);
                if (result.hasHit()) {
                    var defaultColor = 0xffffff;
                    this.graphColor = defaultColor;
                    this.poolTable.raycastFollower.visible = true;
                    if (this.poolTable.raycastFollower.getChildByName("graphics")) {
                        this.poolTable.raycastFollower.getChildByName("graphics").tint = defaultColor;
                    }
                    if (this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics")) {
                        this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics").tint = defaultColor;
                    }
                    var hitPoint = new Vector2(this.hitPoint[0], this.hitPoint[1]);
                    var rayFrom = new Vector2(ray.from[0], ray.from[1]);
                    var opposite = ray.from[1] - this.hitPoint[1];
                    var adjacent = ray.from[0] - this.hitPoint[0];
                    var raycastAngle = Math.atan2(opposite, adjacent);
                    var rayCastLineStart = new Vector2();
                    var rayCastLineEnd = new Vector2(Math.cos(raycastAngle), Math.sin(raycastAngle)).multiply(Pockey.PockeySettings.BALL_RADIUS);
                    rayCastLineEnd.x += hitPoint.x;
                    rayCastLineEnd.y += hitPoint.y;
                    rayCastLineStart.x = ray.from[0] - (Pockey.PockeySettings.BALL_RADIUS + 4) * Math.cos(raycastAngle);
                    rayCastLineStart.y = ray.from[1] - (Pockey.PockeySettings.BALL_RADIUS + 4) * Math.sin(raycastAngle);
                    this.graph.lineStyle(4, defaultColor);
                    this.graph.moveTo(rayCastLineEnd.x, rayCastLineEnd.y);
                    this.graph.lineTo(rayCastLineStart.x, rayCastLineStart.y);
                    this.graph.tint = defaultColor;
                    this.lineBetweenCirclesVisible = true;
                    this.lineBetweenCirclesPoints = [rayCastLineStart.x, rayCastLineStart.y, rayCastLineEnd.x, rayCastLineEnd.y];
                    this.poolTable.raycastFollower.x = hitPoint.x;
                    this.poolTable.raycastFollower.y = hitPoint.y;
                    this.poolTable.ballPositionCircleOnRaycast.x = rayFrom.x;
                    this.poolTable.ballPositionCircleOnRaycast.y = rayFrom.y;
                    this.poolTable.whiteBallReflectionArrow.visible = false;
                    this.poolTable.otherBallReflectionArrow.visible = false;
                    this.poolTable.ballPositionCircleOnRaycast.visible = true;
                    if (!_.isNull(result.shape.radius) && !_.isUndefined(result.shape.radius)) {
                        var isOwnBall = this.checkIfOwnShadow(result.body);
                        if (isOwnBall) {
                            defaultColor = 0xca384d;
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.ownBallAiming]);
                        }
                        this.graphColor = defaultColor;
                        var isPuck = this.checkIfPuck(result.body);
                        if (isPuck) {
                            this.onAnimatePuckGoal();
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.puckAiming]);
                        }
                        else {
                            this.onStopAnimatePuckGoal();
                        }
                        this.graph.tint = defaultColor;
                        if (this.poolTable.raycastFollower.getChildByName("graphics")) {
                            this.poolTable.raycastFollower.getChildByName("graphics").tint = defaultColor;
                        }
                        if (this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics")) {
                            this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics").tint = defaultColor;
                        }
                        var startPoint = void 0;
                        var endPoint = void 0;
                        var dottedLineArrowPoint = void 0;
                        var tangentVector = new Vector2();
                        tangentVector.y = -(result.body.position[0] - this.hitPoint[0]);
                        tangentVector.x = result.body.position[1] - this.hitPoint[1];
                        tangentVector = tangentVector.normalise();
                        var relativeVelocity = new Vector2(this.hitPoint[0] - result.body.position[0], this.hitPoint[1] - result.body.position[1]);
                        var length_1 = tangentVector.dot(relativeVelocity);
                        var cotangentVector = relativeVelocity.substract(tangentVector.multiply(length_1)).normalise();
                        var directionLength = 85;
                        var distanceToTheOtherBall = new Vector2(this.hitPoint[0] - Math.cos(raycastAngle) * Pockey.PockeySettings.BALL_RADIUS, this.hitPoint[1] - Math.sin(raycastAngle) * Pockey.PockeySettings.BALL_RADIUS)
                            .distanceTo(new Vector2(result.body.position[0], result.body.position[1]));
                        if (distanceToTheOtherBall > Pockey.PockeySettings.BALL_RADIUS + result.shape.radius / 2) {
                            distanceToTheOtherBall = Pockey.PockeySettings.BALL_RADIUS + result.shape.radius / 2;
                        }
                        var arrowScaleFactor = (1 - ((result.shape.radius / 2) / distanceToTheOtherBall)) / 0.5;
                        arrowScaleFactor = Math.round(arrowScaleFactor * 1000) / 1000;
                        if (arrowScaleFactor > 0.03 && !isOwnBall) {
                            var whiteBallArrowAngleCorrection = 1;
                            startPoint = new Vector2(this.hitPoint[0] - (Pockey.PockeySettings.BALL_RADIUS * whiteBallArrowAngleCorrection * tangentVector.x), this.hitPoint[1] - (Pockey.PockeySettings.BALL_RADIUS * whiteBallArrowAngleCorrection * tangentVector.y));
                            var opposedStartPoint = new Vector2(this.hitPoint[0] + (Pockey.PockeySettings.BALL_RADIUS * whiteBallArrowAngleCorrection * tangentVector.x), this.hitPoint[1] + (Pockey.PockeySettings.BALL_RADIUS * whiteBallArrowAngleCorrection * tangentVector.y));
                            if (startPoint.distanceTo(rayCastLineEnd) <= opposedStartPoint.distanceTo(rayCastLineEnd)) {
                                startPoint = opposedStartPoint;
                                whiteBallArrowAngleCorrection = -1;
                            }
                            directionLength = 68;
                            endPoint = new Vector2(startPoint.x - whiteBallArrowAngleCorrection * tangentVector.x * directionLength / 3 * arrowScaleFactor, startPoint.y - whiteBallArrowAngleCorrection * tangentVector.y * directionLength / 3 * arrowScaleFactor);
                            this.graph.lineStyle(4, 0xffffff);
                            this.graph.moveTo(startPoint.x, startPoint.y);
                            this.graph.lineTo(endPoint.x, endPoint.y);
                            startPoint.x = endPoint.x;
                            startPoint.y = endPoint.y;
                            endPoint.x -= whiteBallArrowAngleCorrection * tangentVector.x * directionLength * 2 / 3 * arrowScaleFactor;
                            endPoint.y -= whiteBallArrowAngleCorrection * tangentVector.y * directionLength * 2 / 3 * arrowScaleFactor;
                            var dottedLineArrowPoint_1 = PixiDashedLine.drawDashedLine(this.graph, startPoint.x, startPoint.y, endPoint.x, endPoint.y, 1, 0, 0xffffff, 4, 1);
                            directionLength = 85;
                            this.poolTable.whiteBallReflectionArrow.x = dottedLineArrowPoint_1.x;
                            this.poolTable.whiteBallReflectionArrow.y = dottedLineArrowPoint_1.y;
                            this.poolTable.whiteBallReflectionArrow.rotation = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x);
                            this.poolTable.whiteBallReflectionArrow.visible = true;
                        }
                        if ((1 - arrowScaleFactor) > 0.02 && !isOwnBall) {
                            startPoint = new Vector2(this.hitPoint[0] - (Pockey.PockeySettings.BALL_RADIUS * cotangentVector.x), this.hitPoint[1] - (Pockey.PockeySettings.BALL_RADIUS * cotangentVector.y));
                            endPoint = new Vector2(startPoint.x - cotangentVector.x * directionLength / 3 * (1 - arrowScaleFactor), startPoint.y - cotangentVector.y * directionLength / 3 * (1 - arrowScaleFactor));
                            this.graph.lineStyle(4, 0xffffff);
                            this.graph.moveTo(startPoint.x, startPoint.y);
                            this.graph.lineTo(endPoint.x, endPoint.y);
                            startPoint.x = endPoint.x;
                            startPoint.y = endPoint.y;
                            endPoint.x -= cotangentVector.x * directionLength * 2 / 3 * (1 - arrowScaleFactor);
                            endPoint.y -= cotangentVector.y * directionLength * 2 / 3 * (1 - arrowScaleFactor);
                            dottedLineArrowPoint = PixiDashedLine.drawDottedLine(this.graph, startPoint.x, startPoint.y, endPoint.x, endPoint.y, 1, 10, 0xffffff, 1);
                            this.poolTable.otherBallReflectionArrow.x = dottedLineArrowPoint.x;
                            this.poolTable.otherBallReflectionArrow.y = dottedLineArrowPoint.y;
                            this.poolTable.otherBallReflectionArrow.rotation = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x);
                            this.poolTable.otherBallReflectionArrow.visible = true;
                        }
                    }
                    this.poolTable.addChild(this.graph);
                }
            };
            ;
            PoolTableManager.prototype.ballsAreMoving = function () {
                var areMoving = false;
                _.forEach(this.poolTable.balls, function (ball, id) {
                    if (ball.moving || ball.animationInProgress) {
                        areMoving = true;
                        return;
                    }
                });
                return areMoving;
            };
            PoolTableManager.prototype.onStartVersusGame = function () {
            };
            PoolTableManager.prototype.reactivateStick = function () {
                _.forEach(this.poolTable.balls, function (ball) {
                    ball.addShadowBody();
                });
                this.poolTable.raycastFollower.visible = true;
                this.poolTable.ballPositionCircleOnRaycast.visible = true;
                this.poolTable.poolStick.activate(this.poolTable.whiteBall.position);
            };
            PoolTableManager.prototype.checkIfOwnShadow = function (body) {
                var isOwnBall = false;
                _.forEach(this.poolTable.balls, function (ball) {
                    if (ball.ballType == GameModule.GameManager.Instance().currentPlayer.type && ball.p2BodyShadow.id == body.id) {
                        isOwnBall = true;
                    }
                });
                return isOwnBall;
            };
            PoolTableManager.prototype.checkIfPuck = function (body) {
                var isPuck = false;
                _.forEach(this.poolTable.balls, function (ball) {
                    if (ball.ballType == GameModule.BallType.Puck && ball.p2BodyShadow.id == body.id) {
                        isPuck = true;
                    }
                });
                return isPuck;
            };
            PoolTableManager.prototype.checkIfOwnBall = function (body) {
                var isOwnBall = false;
                _.forEach(this.poolTable.balls, function (ball) {
                    if (ball.ballType == GameModule.GameManager.Instance().currentPlayer.type && ball.p2Body.id == body.id) {
                        isOwnBall = true;
                    }
                });
                return isOwnBall;
            };
            return PoolTableManager;
        }());
        GameModule.PoolTableManager = PoolTableManager;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var GameModule;
    (function (GameModule) {
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var PockeyStates = Pockey.StateMachineModule.PockeyStates;
        var PockeyStateMachine = Pockey.StateMachineModule.PockeyStateMachine;
        var Point = PIXI.Point;
        var Graphics = PIXI.Graphics;
        var Vector2 = Framework.Utils.Vector2;
        var TouchHandler = Framework.Utils.TouchHandler;
        var PockeyStateTexts = Pockey.StateMachineModule.PockeyStateTexts;
        var PoolTableManagerMobile = (function (_super) {
            __extends(PoolTableManagerMobile, _super);
            function PoolTableManagerMobile() {
                var _this = _super.call(this) || this;
                _this.whiteBallPositionConfirmed = false;
                _this.rearrangeStickStarted = false;
                SignalsManager.AddSignalCallback(PockeySignalTypes.MOBILE_WHITE_BALL_REPOSITION_CONFIRMED, _this.onWhiteBallPositionConfirmed.bind(_this));
                return _this;
            }
            PoolTableManagerMobile.prototype.onWhiteBallPositionConfirmed = function () {
                this.whiteBallPositionConfirmed = true;
            };
            PoolTableManagerMobile.prototype.onShoot = function () {
                _super.prototype.onShoot.call(this);
                this.rearrangeStickStarted = false;
            };
            PoolTableManagerMobile.prototype.update = function () {
                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onRepositionWhiteBall) {
                    if (!this.poolTable.leftGoalie.moving)
                        this.poolTable.leftGoalie.startMoving();
                    if (!this.poolTable.rightGoalie.moving)
                        this.poolTable.rightGoalie.startMoving();
                    this.onRepositionWhiteBall();
                    return;
                }
                else if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onShoot) {
                    if (!this.ballsAreMoving()) {
                        SignalsManager.DispatchSignal(PockeySignalTypes.NEXT_TURN);
                    }
                    else {
                        this.handleCollisions();
                        this.sendElementsDataToManager();
                    }
                }
                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onRearrangeStick) {
                    if (this.poolTable.poolStick.rotationEnabled) {
                        if (!this.poolTable.leftGoalie.moving)
                            this.poolTable.leftGoalie.startMoving();
                        if (!this.poolTable.rightGoalie.moving)
                            this.poolTable.rightGoalie.startMoving();
                        if (this.isFirstShoot) {
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.beginGame]);
                        }
                        else {
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.yourTurnToShoot]);
                        }
                        this.poolTable.poolStick.x = this.poolTable.whiteBall.x;
                        this.poolTable.poolStick.y = this.poolTable.whiteBall.y;
                        if (this.graph) {
                            if (this.graph.parent)
                                this.graph.parent.removeChild(this.graph);
                            this.graph.clear();
                            this.graph = null;
                        }
                        this.graph = new Graphics();
                        var localPoint = this.poolTable.toLocal(new Point(TouchHandler.Instance().position.x, TouchHandler.Instance().position.y));
                        if (!this.rearrangeStickStarted) {
                            localPoint.x = this.poolTable.poolStick.x + 10 * Math.cos(this.poolTable.poolStick.rotation);
                            localPoint.y = this.poolTable.poolStick.y + 10 * Math.sin(this.poolTable.poolStick.rotation);
                        }
                        if (TouchHandler.Instance().isTouchMoving) {
                            this.rearrangeStickStarted = true;
                        }
                        var opposite = localPoint.y - this.poolTable.whiteBall.y;
                        var adjacent = localPoint.x - this.poolTable.whiteBall.x;
                        var rot = Math.atan2(opposite, adjacent);
                        var dir = new Vector2(Math.cos(rot), Math.sin(rot)).multiply(1100);
                        this.newPos = new Vector2(this.poolTable.whiteBall.x + dir.x, this.poolTable.whiteBall.y + dir.y);
                        this.shortestContactDistance = this.newPos.distanceTo(this.poolTable.whiteBall.position);
                        this.startRayCastPoint[0] = this.poolTable.whiteBall.x;
                        this.startRayCastPoint[1] = this.poolTable.whiteBall.y;
                        this.endRayCastPoint[0] = this.newPos.x;
                        this.endRayCastPoint[1] = this.newPos.y;
                        p2.vec2.copy(this.rayClosest.from, this.startRayCastPoint);
                        p2.vec2.copy(this.rayClosest.to, this.endRayCastPoint);
                        this.rayClosest.update();
                        this.raycastResult.reset();
                        GameModule.P2WorldManager.Instance().world.raycast(this.raycastResult, this.rayClosest);
                        this.drawRayResult(this.raycastResult, this.rayClosest);
                    }
                    this.sendElementsDataToManager();
                }
            };
            PoolTableManagerMobile.prototype.onStartVersusGame = function () {
                if (this.poolTable.poolStick && !this.poolTable.poolStick.isActive) {
                    this.poolTable.poolStick.activate(new Point(this.poolTable.poolStick.initialPosition.x, this.poolTable.poolStick.initialPosition.y));
                    SignalsManager.DispatchSignal(PockeySignalTypes.POOLSTICK_ACTIVATED);
                }
            };
            PoolTableManagerMobile.prototype.onRepositionWhiteBall = function () {
                var _this = this;
                if (this.opponentTimeUp) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.onOpponentsTimeUp]);
                }
                else
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.opponentFault]);
                var localPoint = this.poolTable.toLocal(new Point(TouchHandler.Instance().position.x, TouchHandler.Instance().position.y));
                if (_.isNull(this.lastGoodRepositionPoint) || _.isUndefined(this.lastGoodRepositionPoint)) {
                    this.lastGoodRepositionPoint = new Vector2();
                }
                if (this.graph) {
                    if (this.graph.parent)
                        this.graph.parent.removeChild(this.graph);
                    this.graph.clear();
                    this.graph = null;
                }
                var ballPositionCirclePosition = new Vector2(localPoint.x, localPoint.y);
                if (ballPositionCirclePosition.x + Pockey.PockeySettings.BALL_RADIUS > this.poolTable.rightLimit)
                    ballPositionCirclePosition.x = this.poolTable.rightLimit - Pockey.PockeySettings.BALL_RADIUS;
                if (ballPositionCirclePosition.x - Pockey.PockeySettings.BALL_RADIUS < this.poolTable.leftLimit)
                    ballPositionCirclePosition.x = this.poolTable.leftLimit + Pockey.PockeySettings.BALL_RADIUS;
                if (ballPositionCirclePosition.y + Pockey.PockeySettings.BALL_RADIUS > this.poolTable.downLimit)
                    ballPositionCirclePosition.y = this.poolTable.downLimit - Pockey.PockeySettings.BALL_RADIUS;
                if (ballPositionCirclePosition.y - Pockey.PockeySettings.BALL_RADIUS < this.poolTable.upLimit)
                    ballPositionCirclePosition.y = this.poolTable.upLimit + Pockey.PockeySettings.BALL_RADIUS;
                var ballPosition;
                _.forEach(this.poolTable.balls, function (ball) {
                    ballPosition = new Vector2(ball.x, ball.y);
                    if (ballPositionCirclePosition.distanceTo(ballPosition) < ball.radius + Pockey.PockeySettings.BALL_RADIUS) {
                        var opposite = ballPositionCirclePosition.y - ballPosition.y;
                        var adjacent = ballPositionCirclePosition.x - ballPosition.x;
                        var rotAngle = Math.atan2(opposite, adjacent);
                        ballPositionCirclePosition.x = ballPosition.x + (Pockey.PockeySettings.BALL_RADIUS + ball.radius) * Math.cos(rotAngle);
                        ballPositionCirclePosition.y = ballPosition.y + (Pockey.PockeySettings.BALL_RADIUS + ball.radius) * Math.sin(rotAngle);
                        var isInteresectingWithOthers_2 = false;
                        _.forEach(_this.poolTable.balls, function (ball2) {
                            if (ball2 != ball) {
                                var ball2Position = new Vector2(ball2.x, ball2.y);
                                if (ball2Position.distanceTo(ballPositionCirclePosition) < Pockey.PockeySettings.BALL_RADIUS + ball2.radius) {
                                    isInteresectingWithOthers_2 = true;
                                    return;
                                }
                            }
                        });
                        if (isInteresectingWithOthers_2) {
                            ballPositionCirclePosition.x = _this.lastGoodRepositionPoint.x;
                            ballPositionCirclePosition.y = _this.lastGoodRepositionPoint.y;
                        }
                        else {
                            _this.lastGoodRepositionPoint.x = ballPositionCirclePosition.x;
                            _this.lastGoodRepositionPoint.y = ballPositionCirclePosition.y;
                        }
                    }
                    TweenMax.to(_this.poolTable.ballPositionCircle, 0, {
                        x: ballPositionCirclePosition.x,
                        y: ballPositionCirclePosition.y
                    });
                    _this.poolTable.ballPositionCircle.visible = true;
                });
                if (TouchHandler.Instance().isTouchMoving) {
                    this.repositionStarted = true;
                }
                if (this.repositionStarted && this.whiteBallPositionConfirmed) {
                    this.repositionStarted = false;
                    this.repositionWhiteBallEnabled = false;
                    this.poolTable.ballPositionCircle.visible = false;
                    this.poolTable.whiteBall.reset();
                    this.poolTable.whiteBall.ballPosition = ballPositionCirclePosition;
                    this.poolTable.balls.push(this.poolTable.whiteBall);
                    this.poolTable.addBallToBallsHolder(this.poolTable.whiteBall);
                    this.whiteBallPositionConfirmed = false;
                    SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_WHITE_BALL_POSITION_CONFIRMER);
                    SignalsManager.DispatchSignal(PockeySignalTypes.WHITE_BALL_REPOSITIONED);
                    if (!this.poolTable.poolStick.isActive) {
                        _.forEach(this.poolTable.balls, function (ball) {
                            ball.addShadowBody();
                        });
                        this.poolTable.raycastFollower.visible = true;
                        this.poolTable.ballPositionCircleOnRaycast.visible = true;
                        this.poolTable.poolStick.activate(new Point(this.poolTable.whiteBall.x, this.poolTable.whiteBall.y));
                    }
                }
            };
            return PoolTableManagerMobile;
        }(GameModule.PoolTableManager));
        GameModule.PoolTableManagerMobile = PoolTableManagerMobile;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var GameModule;
    (function (GameModule) {
        var Sprite = PIXI.Sprite;
        var Graphics = PIXI.Graphics;
        var Point = PIXI.Point;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var MobileStickPower = (function (_super) {
            __extends(MobileStickPower, _super);
            function MobileStickPower() {
                var _this = _super.call(this) || this;
                _this.initialStickY = 60;
                _this.stickMaxY = 528;
                _this.isDown = false;
                _this.stickPowerFactor = Pockey.PockeySettings.DELTA * 10;
                _this.visible = false;
                _this.backgroundGraphics = new Sprite(PIXI.Texture.fromFrame("power-bg.png"));
                _this.backgroundGraphics.anchor.x = 0.5;
                _this.addChild(_this.backgroundGraphics);
                _this.stickTexture = new Sprite(PIXI.Texture.fromFrame(GameModule.StickType.Default));
                _this.stickTexture.anchor.y = 0.5;
                _this.stickTexture.anchor.x = 1;
                _this.stickTexture.rotation = -90 * Math.PI / 180;
                _this.stickTexture.y = _this.initialStickY;
                _this.addChild(_this.stickTexture);
                _this.touchGraphics = new Container();
                _this.touchGraphics.interactive = true;
                var newGr = new Graphics();
                newGr.beginFill(0xff9900, 0);
                newGr.drawRect(0, 0, _this.backgroundGraphics.width, _this.backgroundGraphics.height);
                newGr.x = _this.backgroundGraphics.x;
                newGr.y = _this.backgroundGraphics.y;
                _this.touchGraphics.addChild(newGr);
                _this.touchGraphics.pivot.x = _this.backgroundGraphics.anchor.x * _this.touchGraphics.width;
                _this.touchGraphics.on("touchstart", function (event) {
                    _this.isDown = true;
                    var localPosition = new Point();
                    event.data.getLocalPosition(_this.touchGraphics, localPosition, event.data.global);
                    _this.stickTexture.y = localPosition.y;
                    if (_this.stickTexture.y < _this.initialStickY)
                        _this.stickTexture.y = _this.initialStickY;
                    else if (_this.stickTexture.y > _this.stickMaxY)
                        _this.stickTexture.y = _this.stickMaxY;
                    console.log("mobile stick start ");
                    _this.power = (_this.stickTexture.y - _this.initialStickY) * (Pockey.PockeySettings.STICK_MAX_POWER / (_this.stickMaxY - _this.initialStickY));
                    SignalsManager.DispatchSignal(PockeySignalTypes.STICK_PIVOT_MOBILE_UPDATE, [_this.power]);
                });
                _this.touchGraphics.on("touchmove", function (event) {
                    if (_this.isDown) {
                        var localPosition = new Point();
                        event.data.getLocalPosition(_this.touchGraphics, localPosition, event.data.global);
                        _this.stickTexture.y = localPosition.y;
                        if (_this.stickTexture.y < _this.initialStickY)
                            _this.stickTexture.y = _this.initialStickY;
                        else if (_this.stickTexture.y > _this.stickMaxY)
                            _this.stickTexture.y = _this.stickMaxY;
                        _this.power = (_this.stickTexture.y - _this.initialStickY) * (Pockey.PockeySettings.STICK_MAX_POWER / (_this.stickMaxY - _this.initialStickY));
                        SignalsManager.DispatchSignal(PockeySignalTypes.STICK_PIVOT_MOBILE_UPDATE, [_this.power]);
                    }
                });
                _this.touchGraphics.on("touchend", function () {
                    _this.isDown = false;
                    TweenMax.to(_this.stickTexture, 0.05, { y: _this.initialStickY });
                    SignalsManager.DispatchSignal(PockeySignalTypes.STICK_MOBILE_RELEASE, [_this.power]);
                });
                _this.touchGraphics.on("touchendoutside", function () {
                    _this.isDown = false;
                    TweenMax.to(_this.stickTexture, 0.05, { y: _this.initialStickY });
                    SignalsManager.DispatchSignal(PockeySignalTypes.STICK_MOBILE_RELEASE, [_this.power]);
                });
                _this.addChild(_this.touchGraphics);
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_STICK_POWER_MOBILE, _this.onHide.bind(_this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_STICK_POWER_MOBILE, _this.onShow.bind(_this));
                return _this;
            }
            MobileStickPower.prototype.onHide = function () {
                var _this = this;
                TweenMax.to(this, 0.2, {
                    alpha: 0, onComplete: function () {
                        _this.visible = false;
                    }
                });
            };
            MobileStickPower.prototype.onShow = function () {
                this.visible = true;
                TweenMax.to(this, 0.2, {
                    alpha: 1
                });
            };
            return MobileStickPower;
        }(Container));
        GameModule.MobileStickPower = MobileStickPower;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var GameModule;
    (function (GameModule) {
        var AbstractModule = Framework.Abstracts.AbstractModule;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var Point = PIXI.Point;
        var Settings = Framework.Settings;
        var Sprite = PIXI.Sprite;
        var PockeyGameModule = (function (_super) {
            __extends(PockeyGameModule, _super);
            function PockeyGameModule() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PockeyGameModule.prototype.createElements = function () {
                if (Settings.isMobile) {
                    this.levelManager = new GameModule.PoolTableManagerMobile();
                }
                else {
                    this.levelManager = new GameModule.PoolTableManager();
                }
                this.addChild(this.levelManager.poolTable);
                if (Settings.isMobile) {
                    this.confirmWhiteBallPlacementTexture = new Sprite(PIXI.Texture.fromFrame("penalty-droppuck.png"));
                    this.confirmWhiteBallPlacementTexture.anchor.x = 0.5;
                    this.confirmWhiteBallPlacementTexture.anchor.y = 0.5;
                    this.confirmWhiteBallPlacementTexture.visible = false;
                    this.addChild(this.confirmWhiteBallPlacementTexture);
                    this.confirmWhiteBallPlacementTexture.interactive = true;
                    this.confirmWhiteBallPlacementTexture.on("tap", function () {
                        SignalsManager.DispatchSignal(PockeySignalTypes.MOBILE_WHITE_BALL_REPOSITION_CONFIRMED);
                    });
                    this.mobileStickPower = new GameModule.MobileStickPower();
                    this.addChild(this.mobileStickPower);
                    SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_WHITE_BALL_POSITION_CONFIRMER, this.onShowWhiteBallPositionConfirmer.bind(this));
                    SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_WHITE_BALL_POSITION_CONFIRMER, this.onHideWhiteBallPositionConfirmer.bind(this));
                }
                _super.prototype.createElements.call(this);
            };
            PockeyGameModule.prototype.onShowWhiteBallPositionConfirmer = function () {
                this.confirmWhiteBallPlacementTexture.visible = true;
            };
            PockeyGameModule.prototype.onHideWhiteBallPositionConfirmer = function () {
                this.confirmWhiteBallPlacementTexture.visible = false;
            };
            PockeyGameModule.prototype.handleDesktopLandscape = function () {
                _super.prototype.handleDesktopLandscape.call(this);
                if (this.levelManager && this.levelManager.poolTable) {
                    this.levelManager.poolTable.poolStick.visible = false;
                    this.levelManager.poolTable.height = 0.7 * Settings.stageHeight;
                    var backgroundScaleFactor = this.levelManager.poolTable.scale.y;
                    this.levelManager.poolTable.scale.x = backgroundScaleFactor;
                    this.levelManager.poolTable.x = Settings.stageWidth / 2;
                    this.levelManager.poolTable.y = 0.18 * Settings.stageHeight + this.levelManager.poolTable.height / 2;
                    SignalsManager.DispatchSignal(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, [backgroundScaleFactor, this.levelManager.poolTable.position, this.levelManager.poolTable.rotation, this.levelManager.poolTable.width, this.levelManager.poolTable.height]);
                    this.levelManager.poolTable.poolStick.visible = true;
                }
            };
            PockeyGameModule.prototype.handleMobileLandscape = function () {
                if (this.levelManager && this.levelManager.poolTable) {
                    this.levelManager.poolTable.poolStick.visible = false;
                    this.levelManager.poolTable.height = 0.9 * Settings.stageHeight;
                    var backgroundScaleFactor = this.levelManager.poolTable.scale.y;
                    this.levelManager.poolTable.scale.x = backgroundScaleFactor;
                    this.levelManager.poolTable.rotation = 0;
                    this.levelManager.poolTable.x = Settings.stageWidth / 2;
                    this.levelManager.poolTable.y = 0.05 * Settings.stageHeight + this.levelManager.poolTable.height / 2;
                    this.confirmWhiteBallPlacementTexture.rotation = 0;
                    this.confirmWhiteBallPlacementTexture.scale.x = this.confirmWhiteBallPlacementTexture.scale.y = backgroundScaleFactor;
                    this.confirmWhiteBallPlacementTexture.x = Settings.stageWidth / 4 - this.levelManager.poolTable.width / 4;
                    if (this.confirmWhiteBallPlacementTexture.x < 5 + this.confirmWhiteBallPlacementTexture.width / 2)
                        this.confirmWhiteBallPlacementTexture.x = 5 + this.confirmWhiteBallPlacementTexture.width / 2;
                    this.confirmWhiteBallPlacementTexture.y = Settings.stageHeight / 2;
                    this.mobileStickPower.rotation = 0;
                    this.mobileStickPower.scale.x = this.mobileStickPower.scale.y = backgroundScaleFactor;
                    this.mobileStickPower.x = this.confirmWhiteBallPlacementTexture.x;
                    this.mobileStickPower.y = Settings.stageHeight / 2 - this.mobileStickPower.height / 2;
                    var newPos = new Point();
                    newPos.x = this.levelManager.poolTable.position.x;
                    newPos.y = this.levelManager.poolTable.position.y + this.levelManager.poolTable.height * 0.019;
                    this.levelManager.poolTable.poolStick.visible = true;
                    SignalsManager.DispatchSignal(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, [backgroundScaleFactor, newPos, this.levelManager.poolTable.rotation]);
                }
            };
            PockeyGameModule.prototype.handleMobilePortrait = function () {
                if (this.levelManager && this.levelManager.poolTable) {
                    this.levelManager.poolTable.poolStick.visible = false;
                    this.levelManager.poolTable.height = 0.9 * Settings.stageWidth;
                    var backgroundScaleFactor = this.levelManager.poolTable.scale.y;
                    this.levelManager.poolTable.scale.x = backgroundScaleFactor;
                    if (this.levelManager.poolTable.width > Settings.stageHeight) {
                        this.levelManager.poolTable.width = Settings.stageHeight;
                    }
                    backgroundScaleFactor = this.levelManager.poolTable.scale.x;
                    this.levelManager.poolTable.scale.y = backgroundScaleFactor;
                    this.levelManager.poolTable.rotation = 90 * Math.PI / 180;
                    this.levelManager.poolTable.x = 0.5 * Settings.stageWidth;
                    this.levelManager.poolTable.y = Settings.stageHeight / 2;
                    this.confirmWhiteBallPlacementTexture.scale.x = this.confirmWhiteBallPlacementTexture.scale.y = backgroundScaleFactor;
                    this.confirmWhiteBallPlacementTexture.rotation = 90 * Math.PI / 180;
                    this.confirmWhiteBallPlacementTexture.x = Settings.stageWidth / 2;
                    this.confirmWhiteBallPlacementTexture.y = Settings.stageHeight / 4 - this.levelManager.poolTable.width / 4;
                    if (this.confirmWhiteBallPlacementTexture.y < 5 + this.confirmWhiteBallPlacementTexture.width / 2)
                        this.confirmWhiteBallPlacementTexture.y = 5 + this.confirmWhiteBallPlacementTexture.width / 2;
                    this.mobileStickPower.rotation = 90 * Math.PI / 180;
                    this.mobileStickPower.scale.x = this.mobileStickPower.scale.y = backgroundScaleFactor;
                    this.mobileStickPower.y = this.confirmWhiteBallPlacementTexture.y;
                    this.mobileStickPower.x = Settings.stageWidth / 2 + this.mobileStickPower.height / 2;
                    var newPos = new Point();
                    newPos.x = this.levelManager.poolTable.position.x - this.levelManager.poolTable.height * 0.019;
                    newPos.y = this.levelManager.poolTable.position.y;
                    this.levelManager.poolTable.poolStick.visible = true;
                    SignalsManager.DispatchSignal(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, [backgroundScaleFactor, newPos, this.levelManager.poolTable.rotation]);
                }
            };
            return PockeyGameModule;
        }(AbstractModule));
        GameModule.PockeyGameModule = PockeyGameModule;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var GameModule;
    (function (GameModule) {
        var Player = (function () {
            function Player(id, type) {
                this.matchesWon = 0;
                this.id = id;
                this.type = type;
                this.score = Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER;
            }
            Player.prototype.reset = function () {
            };
            return Player;
        }());
        GameModule.Player = Player;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var GameModule;
    (function (GameModule) {
        var SignalsManager = Framework.Signals.SignalsManager;
        var SignalsType = Framework.Signals.SignalsType;
        var PockeyStates = Pockey.StateMachineModule.PockeyStates;
        var ConnectionSignalsType = Framework.Signals.ConnectionSignalsType;
        var PockeyConnectionSignals = Pockey.SignalsModule.PockeyConnectionSignals;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var PockeySocketMessages = Pockey.Connection.PockeySocketMessages;
        var Settings = Framework.Settings;
        var PockeyStateMachine = Pockey.StateMachineModule.PockeyStateMachine;
        var PockeyStateTexts = Pockey.StateMachineModule.PockeyStateTexts;
        var PockeySoundNames = Pockey.Sound.PockeySoundNames;
        var WinStatus;
        (function (WinStatus) {
            WinStatus[WinStatus["WIN"] = 0] = "WIN";
            WinStatus[WinStatus["LOST"] = 1] = "LOST";
        })(WinStatus = GameModule.WinStatus || (GameModule.WinStatus = {}));
        var GameManager = (function () {
            function GameManager() {
                this.initialized = false;
                this.player = new GameModule.Player("player", GameModule.BallType.Player);
                this.opponent = new GameModule.Player("opponent", GameModule.BallType.Opponent);
                this.whiteBallPenalty = false;
                this.ballsHit = 0;
                this.ownBallInPocketFault = false;
                this.gameFinished = false;
                this.availableForRestart = false;
                this.timerText = "";
                this.animateOpponentTimer = false;
                this.countdownEnded = false;
            }
            GameManager.Instance = function () {
                if (!GameManager.instance) {
                    GameManager.instance = new GameManager();
                    if (!GameManager.Instance().initialized) {
                        GameManager.Instance().InitializeOthers();
                        GameManager.Instance().registerSignalsHandlers();
                        GameManager.Instance().initialized = true;
                    }
                }
                return GameManager.instance;
            };
            GameManager.prototype.InitializeOthers = function () {
                this.player = new GameModule.Player("player", GameModule.BallType.Player);
                this.opponent = new GameModule.Player("opponent", GameModule.BallType.Opponent);
            };
            GameManager.prototype.registerSignalsHandlers = function () {
                SignalsManager.AddSignalCallback(SignalsType.ALL_MODULES_ELEMENTS_CREATED, GameManager.Instance().onAllModuleElementsCreated.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.WHITE_BALL_REPOSITIONED, GameManager.Instance().onWhiteBallRepositioned.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.FIRST_BALL_FAULT, this.onFirstBallFault.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.NEXT_TURN, this.onNextTurn.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOOT_BALL, this.onShoot.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.BALL_IN_POCKET, this.onBallInPocket.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SEND_ELEMENTS_DATA_TO_MANAGER, this.onSendElementsDataToManager.bind(this));
                SignalsManager.AddSignalCallback(ConnectionSignalsType.SOCKET_IO_CONNECTION_CREATED, this.onSocketIOConnectionCreated.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.START_GAME, this.onStartGame.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.RESTART_GAME, this.onRestartGame.bind(this));
                SignalsManager.AddSignalCallback(PockeyConnectionSignals.WATCH, this.onWatch.bind(this));
                SignalsManager.AddSignalCallback(PockeyConnectionSignals.YOUR_TURN, this.onMyTurn.bind(this));
                SignalsManager.AddSignalCallback(PockeyConnectionSignals.OPPONENT_SETTINGS, this.onOpponentSettings.bind(this));
                SignalsManager.AddSignalCallback(PockeyConnectionSignals.OPPONENT_RESTART_GAME, this.onOpponentRestart.bind(this));
                SignalsManager.AddSignalCallback(PockeyConnectionSignals.SCORE_UPDATE, this.onScoreUpdate.bind(this));
            };
            GameManager.prototype.startCountdown = function (seconds) {
                var _this = this;
                var counter = seconds;
                var counterText = "0:";
                counterText += (counter >= 10) ? counter.toString() : "0" + counter.toString();
                this.timerText = counterText;
                this.animateOpponentTimer = false;
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, [counterText, this.currentPlayer.type, false]);
                this.roundTimer = setInterval(function () {
                    counterText = "0:";
                    counter--;
                    counterText += (counter >= 10) ? counter.toString() : "0" + counter.toString();
                    _this.timerText = counterText;
                    if (counter <= 5) {
                        if (counter == 5) {
                            SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{ soundName: PockeySoundNames.LAST_FIVE_SECONDS }]);
                        }
                        _this.animateOpponentTimer = true;
                    }
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, [counterText, _this.currentPlayer.type, _this.animateOpponentTimer]);
                    if (counter < 0) {
                        _this.stopCountdown();
                        _this.countdownEnded = true;
                        SignalsManager.DispatchSignal(PockeySignalTypes.RESET_STICK_POWER);
                    }
                }, 1000);
            };
            ;
            GameManager.prototype.stopCountdown = function () {
                clearInterval(this.roundTimer);
                this.timerText = "";
                this.animateOpponentTimer = false;
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, ["", this.currentPlayer.type, false]);
                console.log('Ding!');
            };
            GameManager.prototype.onMyTurn = function (params) {
                this.changePlayer();
                var state = params[0];
                console.log("currentSTate: " + PockeyStateMachine.Instance().getCurrentStateName());
                console.log("new state: " + state);
                if (state == PockeyStates.onRearrangeStick) {
                    if (params[1]) {
                        var balls = void 0;
                    }
                    SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
                    this.startCountdown(Pockey.PockeySettings.ROUND_DURATION_IN_SECONDS);
                }
                else if (state == PockeyStates.onRepositionWhiteBall) {
                    this.startCountdown(Pockey.PockeySettings.ROUND_DURATION_IN_SECONDS);
                    if (Settings.isMobile) {
                        SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_WHITE_BALL_POSITION_CONFIRMER);
                    }
                }
                else if (state == PockeyStates.onGameEnd) {
                    if (this.player.score <= 0) {
                        this.winStatus = WinStatus.LOST;
                        this.opponent.matchesWon++;
                        this.gameFinished = true;
                        console.log("la ball in pocket: " + this.winStatus);
                    }
                    else if (this.opponent.score <= 0) {
                        this.winStatus = WinStatus.WIN;
                        this.player.matchesWon++;
                        this.gameFinished = true;
                    }
                    this.onGameFinished();
                }
                PockeyStateMachine.Instance().changeState(state);
            };
            GameManager.prototype.onSendElementsDataToManager = function (params) {
                var poolTableData = params[0];
                poolTableData.playerScore = this.player.score;
                poolTableData.opponentScore = this.opponent.score;
                poolTableData.whiteBallPenalty = this.whiteBallPenalty;
                poolTableData.ballsHit = this.ballsHit;
                poolTableData.opponentState = PockeyStateMachine.Instance().fsm.currentState;
                poolTableData.opponentTimerText = this.timerText;
                poolTableData.opponentTimerAnimate = this.animateOpponentTimer;
                if (this.countdownEnded) {
                    poolTableData.opponentTimeFinished = true;
                    console.log("time ended sent");
                }
                SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.WATCH, poolTableData]);
                if (this.countdownEnded) {
                    this.onNextTurn();
                }
            };
            GameManager.prototype.onRestartGame = function () {
                if (Settings.singlePlayer)
                    this.switchSides();
                else {
                    this.availableForRestart = true;
                    this.switchSides();
                    SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.OPPONENT_RESTART_GAME]);
                }
            };
            GameManager.prototype.onOpponentRestart = function () {
                if (this.availableForRestart) {
                    this.switchSides();
                }
            };
            GameManager.prototype.switchSides = function () {
                this.whiteBallPenalty = false;
                this.ballsHit = 0;
                this.gameFinished = false;
                this.availableForRestart = false;
                this.player.score = Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER;
                this.opponent.score = Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER;
                SignalsManager.DispatchSignal(PockeySignalTypes.RESET_POOLTABLE);
                SignalsManager.DispatchSignal(PockeySignalTypes.RESET_GAME_SCREEN);
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_WINNING_SCREEN);
                var orderArray = [];
                if (this.player.side == "left") {
                    if (!Settings.singlePlayer) {
                        PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.opponentsTurn]);
                    }
                    this.opponent.side = "left";
                    this.player.side = "right";
                    this.setCurrentPlayer(this.opponent);
                    orderArray = [this.opponent.type, this.player.type];
                }
                else {
                    if (!Settings.singlePlayer) {
                        SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
                        PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
                    }
                    this.opponent.side = "right";
                    this.player.side = "left";
                    this.setCurrentPlayer(this.player);
                    orderArray = [this.player.type, this.opponent.type];
                }
                if (Settings.singlePlayer) {
                    this.beginPlay();
                }
                SignalsManager.DispatchSignal(PockeySignalTypes.SET_SIDES_TYPE, orderArray);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_PLAYER_COLOR, [+Pockey.PockeySettings.PLAYER_COLOR_ID]);
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_PLAYER_NAME, [Pockey.PockeySettings.PLAYER_NICKNAME]);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_PLAYER_AVATAR, [Pockey.PockeySettings.PLAYER_AVATAR_ID]);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_OPPONENT_COLOR, [Pockey.PockeySettings.OPPONENT_COLOR]);
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_OPPONENT_NAME, [Pockey.PockeySettings.OPPONENT_NICKNAME]);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_OPPONENT_AVATAR, [Pockey.PockeySettings.OPPONENT_AVATAR_ID]);
            };
            GameManager.prototype.onStartGame = function () {
                SignalsManager.DispatchSignal(SignalsType.CHANGE_BACKGROUND, [Pockey.PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME, 0.4]);
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_MAIN_MENU);
                SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_GAME_UI);
                SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_POOLTABLE);
                if (Settings.singlePlayer) {
                    this.setCurrentPlayer(this.player);
                    this.beginPlay();
                    SignalsManager.DispatchSignal(PockeySignalTypes.SET_SIDES_TYPE, [this.player.type, this.opponent.type]);
                    this.player.side = "left";
                    this.opponent.side = "right";
                    SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_PLAYER_COLOR, [+Pockey.PockeySettings.PLAYER_COLOR_ID]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_OPPONENT_COLOR, [Pockey.PockeySettings.OPPONENT_COLOR]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_PLAYER_NAME, [Pockey.PockeySettings.PLAYER_NICKNAME]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_OPPONENT_NAME, [Pockey.PockeySettings.OPPONENT_NICKNAME]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_PLAYER_AVATAR, [Pockey.PockeySettings.PLAYER_AVATAR_ID]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_OPPONENT_AVATAR, [Pockey.PockeySettings.OPPONENT_AVATAR_ID]);
                }
                else {
                    PockeyStateMachine.Instance().changeState(PockeyStates.onSearchForPartner);
                    SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_SEARCHING_SCREEN);
                    SignalsManager.DispatchSignal(ConnectionSignalsType.CREATE_SEARCH_FOR_PARTNER_CONNECTION);
                }
            };
            GameManager.prototype.onWatch = function (params) {
                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onWatch) {
                    var poolTableData = params[0];
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, [poolTableData.opponentTimerText, this.currentPlayer.type, poolTableData.opponentTimerAnimate]);
                    this.whiteBallPenalty = poolTableData.whiteBallPenalty;
                    this.ballsHit = poolTableData.ballsHit;
                    if (this.player.score != poolTableData.opponentScore) {
                        this.player.score = poolTableData.opponentScore;
                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_PLAYER_SCORE, [this.player.score]);
                    }
                    if (this.opponent.score != poolTableData.playerScore) {
                        this.opponent.score = poolTableData.playerScore;
                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_OPPONENT_SCORE, [this.opponent.score]);
                    }
                }
            };
            GameManager.prototype.onScoreUpdate = function (params) {
                console.log("on score update");
            };
            GameManager.prototype.onBallInPocket = function (params) {
                if (!this.gameFinished) {
                    var ballType = params[0];
                    console.log("ballType in pocket: " + ballType);
                    if (ballType == GameModule.BallType.White) {
                        this.whiteBallPenalty = true;
                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.whiteBallFault]);
                        console.log("%c GameManager -> White ball PENALTY for " + this.currentPlayer.id.toUpperCase(), "color: #00bcd4");
                    }
                    else if (ballType == GameModule.BallType.Puck) {
                        this.ballsHit++;
                        var goalType = params[1];
                        if (goalType == this.player.type) {
                            this.player.score -= 2;
                        }
                        else if (goalType == this.opponent.type) {
                            this.opponent.score -= 2;
                        }
                        if (goalType != this.currentPlayer.type) {
                            console.log("aici se face update ce plm");
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.onPuckGoal]);
                        }
                    }
                    else if (ballType == this.currentPlayer.type) {
                        this.ballsHit++;
                        this.currentPlayer.score--;
                        this.ownBallInPocketFault = true;
                        if (!this.whiteBallPenalty)
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.onOwnBallInPocket]);
                    }
                    else if (ballType != this.currentPlayer.type) {
                        this.ballsHit++;
                        if (this.currentPlayer == this.player) {
                            this.opponent.score--;
                        }
                        else {
                            this.player.score--;
                        }
                    }
                    console.log("ball in the pocket!!! type: " + params);
                    console.log("score -> player: " + this.player.score, " - Opponent: " + this.opponent.score);
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_PLAYER_SCORE, [this.player.score]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_OPPONENT_SCORE, [this.opponent.score]);
                    if (this.player.score <= 0) {
                        this.winStatus = WinStatus.LOST;
                        this.opponent.matchesWon++;
                        this.gameFinished = true;
                        console.log("la ball in pocket: " + this.winStatus);
                    }
                    else if (this.opponent.score <= 0) {
                        this.winStatus = WinStatus.WIN;
                        this.player.matchesWon++;
                        this.gameFinished = true;
                        console.log("la ball in pocket: " + this.winStatus);
                    }
                }
            };
            GameManager.prototype.onAllModuleElementsCreated = function () {
                PockeyStateMachine.Instance().changeState(PockeyStates.onMainMenu);
                SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_MAIN_MENU);
                SignalsManager.DispatchSignal(SignalsType.CHANGE_BACKGROUND, [Settings.mainBackgroundName, 4]);
            };
            GameManager.prototype.onSocketIOConnectionCreated = function (params) {
                console.log("%c GameManager -> socket io connection created", "color: #00bcd4");
                this.player.id = params[0];
                Pockey.PockeySettings.PLAYER_SOCKET_ID = this.player.id;
                this.opponent.id = params[1];
                Pockey.PockeySettings.OPPONENT_SOCKET_ID = this.opponent.id;
                var connectionID = params[2];
                if (_.startsWith(connectionID, this.player.id)) {
                    this.currentPlayer = this.player;
                    var playerSettings = {
                        opponentAvatarId: Pockey.PockeySettings.PLAYER_AVATAR_ID,
                        opponentNickname: Pockey.PockeySettings.PLAYER_NICKNAME,
                        opponentSocketId: Pockey.PockeySettings.PLAYER_SOCKET_ID,
                        opponentColor: +Pockey.PockeySettings.PLAYER_COLOR_ID
                    };
                    console.log("opponent avatar socket connection created: " + Pockey.PockeySettings.PLAYER_AVATAR_ID);
                    console.log(playerSettings);
                    playerSettings.firstToStart = this.player.id;
                    SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.OPPONENT_SETTINGS, playerSettings]);
                }
            };
            GameManager.prototype.onOpponentSettings = function (params) {
                var opponentSettings = params[0];
                Pockey.PockeySettings.OPPONENT_COLOR = opponentSettings.opponentColor;
                Pockey.PockeySettings.OPPONENT_SOCKET_ID = opponentSettings.opponentSocketId;
                Pockey.PockeySettings.OPPONENT_NICKNAME = opponentSettings.opponentNickname;
                Pockey.PockeySettings.OPPONENT_AVATAR_ID = opponentSettings.opponentAvatarId;
                console.log("opponent avatar la opponent settings: " + Pockey.PockeySettings.OPPONENT_AVATAR_ID);
                if (opponentSettings.firstToStart == this.player.id) {
                    this.setCurrentPlayer(this.player);
                    console.log("culorilefmm: la player " + Pockey.PockeySettings.OPPONENT_COLOR, +Pockey.PockeySettings.PLAYER_COLOR_ID);
                    SignalsManager.DispatchSignal(PockeySignalTypes.SET_SIDES_TYPE, [this.player.type, this.opponent.type]);
                    this.player.side = "left";
                    this.opponent.side = "right";
                    this.startCountdown(Pockey.PockeySettings.ROUND_DURATION_IN_SECONDS);
                    this.beginPlay();
                }
                else {
                    this.setCurrentPlayer(this.opponent);
                    SignalsManager.DispatchSignal(PockeySignalTypes.SET_SIDES_TYPE, [this.opponent.type, this.player.type]);
                    this.player.side = "right";
                    this.opponent.side = "left";
                    console.log("culorilefmm: la opp " + Pockey.PockeySettings.OPPONENT_COLOR, +Pockey.PockeySettings.PLAYER_COLOR_ID);
                    var sameColorsUsed = false;
                    if (Pockey.PockeySettings.OPPONENT_COLOR == +Pockey.PockeySettings.PLAYER_COLOR_ID) {
                        sameColorsUsed = true;
                        console.log("culorilefmm: sunt la fel in plm ");
                        var randNumber = Math.round(Math.random() * (Pockey.PockeySettings.LARGE_COLORS_ARRAY.length - 1));
                        Pockey.PockeySettings.OPPONENT_COLOR = parseInt("0x" + Pockey.PockeySettings.LARGE_COLORS_ARRAY[randNumber].color);
                    }
                    var playerSettings = {
                        opponentAvatarId: Pockey.PockeySettings.PLAYER_AVATAR_ID,
                        opponentNickname: Pockey.PockeySettings.PLAYER_NICKNAME,
                        opponentSocketId: Pockey.PockeySettings.PLAYER_SOCKET_ID,
                        opponentColor: (sameColorsUsed) ? Pockey.PockeySettings.OPPONENT_COLOR : +Pockey.PockeySettings.PLAYER_COLOR_ID,
                        firstToStart: this.opponent.id
                    };
                    console.log("opponent nickname:");
                    console.log(playerSettings);
                    SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.OPPONENT_SETTINGS, playerSettings]);
                    PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.opponentsTurn]);
                }
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_SEARCHING_SCREEN);
                SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{ soundName: PockeySoundNames.OPPONENT_FOUND }]);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_PLAYER_COLOR, [+Pockey.PockeySettings.PLAYER_COLOR_ID]);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_PLAYER_AVATAR, [Pockey.PockeySettings.PLAYER_AVATAR_ID]);
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_PLAYER_NAME, [Pockey.PockeySettings.PLAYER_NICKNAME]);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_OPPONENT_COLOR, [Pockey.PockeySettings.OPPONENT_COLOR]);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_OPPONENT_AVATAR, [Pockey.PockeySettings.OPPONENT_AVATAR_ID]);
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_OPPONENT_NAME, [Pockey.PockeySettings.OPPONENT_NICKNAME]);
            };
            GameManager.prototype.onShoot = function () {
                this.whiteBallPenalty = false;
                clearInterval(this.roundTimer);
                this.stopCountdown();
                PockeyStateMachine.Instance().changeState(PockeyStates.onShoot);
            };
            GameManager.prototype.onWhiteBallRepositioned = function () {
                console.log("%c GameManager -> White Ball Repositioned", "color: #00bcd4");
                PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
                SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
            };
            GameManager.prototype.onGameFinished = function () {
                if (this.winStatus == WinStatus.WIN) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_WINNING_MESSAGE, ["you won!"]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_WINNING_SCREEN);
                }
                else {
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_WINNING_MESSAGE, ["you lost!"]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_WINNING_SCREEN);
                }
                if (this.player.side == "left") {
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_MATCH_CIRCLES, [this.player.matchesWon, this.opponent.matchesWon]);
                }
                else {
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_MATCH_CIRCLES, [this.opponent.matchesWon, this.player.matchesWon]);
                }
            };
            GameManager.prototype.onNextTurn = function () {
                if (this.countdownEnded) {
                    this.countdownEnded = false;
                    this.changePlayer();
                    SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.YOUR_TURN, PockeyStateMachine.Instance().fsm.currentState]);
                    PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.onTimeUp]);
                    return;
                }
                if (this.gameFinished) {
                    PockeyStateMachine.Instance().changeState(PockeyStates.onGameEnd);
                    console.log("la next turn: " + this.winStatus);
                    SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.YOUR_TURN, PockeyStates.onGameEnd, this.winStatus]);
                    this.onGameFinished();
                    return;
                }
                else {
                    PockeyStateMachine.Instance().changeState(PockeyStates.onEndTurn);
                }
                console.log("%c GameManager -> Checking for next turn...", "color: #00bcd4");
                if (this.whiteBallPenalty) {
                    console.log("%c GameManager -> PENALTY! Round ended for " + this.currentPlayer.id.toUpperCase(), "color: #00bcd4");
                    this.changePlayer();
                    if (!Settings.singlePlayer) {
                        SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.YOUR_TURN, PockeyStates.onRepositionWhiteBall]);
                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.whiteBallFault]);
                        PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                    }
                    else {
                        PockeyStateMachine.Instance().changeState(PockeyStates.onRepositionWhiteBall);
                        if (Settings.isMobile) {
                            SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_WHITE_BALL_POSITION_CONFIRMER);
                        }
                    }
                }
                else if (this.ownBallInPocketFault) {
                    console.log("%c GameManager -> Fault! Own ball in pocket! " + this.currentPlayer.id.toUpperCase(), "color: #00bcd4");
                    this.changePlayer();
                    this.ownBallInPocketFault = false;
                    if (!Settings.singlePlayer) {
                        PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                        SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.YOUR_TURN, PockeyStates.onRearrangeStick]);
                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.onOwnBallInPocket]);
                    }
                    else {
                        SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
                        PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
                    }
                }
                else {
                    if (this.ballsHit == 0) {
                        console.log("%c GameManager -> No balls hit for " + this.currentPlayer.id.toUpperCase(), "color: #00bcd4");
                        this.changePlayer();
                        if (!Settings.singlePlayer) {
                            PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                            SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.YOUR_TURN, PockeyStates.onRearrangeStick]);
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.noBallScored]);
                        }
                        else {
                            SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
                            PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
                        }
                        return;
                    }
                    else {
                        this.ballsHit = 0;
                    }
                    this.startCountdown(Pockey.PockeySettings.ROUND_DURATION_IN_SECONDS);
                    SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
                    PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
                }
                console.log("score -> player: " + this.player.score, " - Opponent: " + this.opponent.score);
            };
            GameManager.prototype.setCurrentPlayer = function (player) {
                this.currentPlayer = player;
                console.log("%c GameManager -> Current player is: " + this.currentPlayer.id.toUpperCase(), "background: red; color: white; font-weight:bold; ");
            };
            GameManager.prototype.changePlayer = function () {
                if (this.currentPlayer == this.opponent)
                    this.currentPlayer = this.player;
                else
                    this.currentPlayer = this.opponent;
                console.log("%c GameManager -> Player changed: " + this.currentPlayer.id.toUpperCase(), "background: red; color: white; font-weight:bold; ");
            };
            GameManager.prototype.onFirstBallFault = function () {
                this.whiteBallPenalty = true;
                console.log("%c GameManager -> First ball fault!", "color: #00bcd4");
            };
            GameManager.prototype.beginPlay = function () {
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.beginGame]);
                SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
                PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
            };
            return GameManager;
        }());
        GameModule.GameManager = GameManager;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var Background;
    (function (Background) {
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var AbstractBackgroundModule = Framework.Background.AbstractBackgroundModule;
        var PockeyBackgroundModule = (function (_super) {
            __extends(PockeyBackgroundModule, _super);
            function PockeyBackgroundModule() {
                return _super.call(this) || this;
            }
            PockeyBackgroundModule.prototype.registerSignalsHandlers = function () {
                _super.prototype.registerSignalsHandlers.call(this);
                SignalsManager.AddSignalCallback(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, this.onResizeBackground.bind(this));
            };
            PockeyBackgroundModule.prototype.onResizeBackground = function (params) {
                if (this.backgrounds[Pockey.PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME]) {
                    var scaleFactor = params[0];
                    var position = params[1];
                    var rotation = params[2];
                    this.backgrounds[Pockey.PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME].x = position.x;
                    this.backgrounds[Pockey.PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME].y = position.y;
                    this.backgrounds[Pockey.PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME].rotation = rotation;
                    this.backgrounds[Pockey.PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME].scale.x = scaleFactor;
                    this.backgrounds[Pockey.PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME].scale.y = scaleFactor;
                }
            };
            return PockeyBackgroundModule;
        }(AbstractBackgroundModule));
        Background.PockeyBackgroundModule = PockeyBackgroundModule;
    })(Background = Pockey.Background || (Pockey.Background = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var Connection;
    (function (Connection) {
        var SocketClient = Framework.Connection.SocketClient;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeyConnectionSignals = Pockey.SignalsModule.PockeyConnectionSignals;
        var PockeySocketClient = (function (_super) {
            __extends(PockeySocketClient, _super);
            function PockeySocketClient() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PockeySocketClient.prototype.handlePrivateMessage = function (messageType, messageData) {
                _super.prototype.handlePrivateMessage.call(this, messageType, messageData);
                switch (messageType) {
                    case Connection.PockeySocketMessages.WATCH: {
                        SignalsManager.DispatchSignal(PockeyConnectionSignals.WATCH, [messageData]);
                        break;
                    }
                    case Connection.PockeySocketMessages.OPPONENT_SETTINGS: {
                        SignalsManager.DispatchSignal(PockeyConnectionSignals.OPPONENT_SETTINGS, [messageData]);
                        break;
                    }
                    case Connection.PockeySocketMessages.YOUR_TURN: {
                        SignalsManager.DispatchSignal(PockeyConnectionSignals.YOUR_TURN, [messageData]);
                        break;
                    }
                    case Connection.PockeySocketMessages.OPPONENT_RESTART_GAME: {
                        SignalsManager.DispatchSignal(PockeyConnectionSignals.OPPONENT_RESTART_GAME, [messageData]);
                        break;
                    }
                }
            };
            return PockeySocketClient;
        }(SocketClient));
        Connection.PockeySocketClient = PockeySocketClient;
    })(Connection = Pockey.Connection || (Pockey.Connection = {}));
})(Pockey || (Pockey = {}));
var Framework;
(function (Framework) {
    var Utils;
    (function (Utils) {
        function readCookie(c_name) {
            if (document.cookie.length > 0) {
                var c_start = document.cookie.indexOf(c_name + "=");
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1;
                    var c_end = document.cookie.indexOf(";", c_start);
                    if (c_end == -1) {
                        c_end = document.cookie.length;
                    }
                    return (document.cookie.substring(c_start, c_end)).toString();
                }
            }
            return "";
        }
        Utils.readCookie = readCookie;
        function writeCookie(name, value, days) {
            var expires;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            else {
                expires = "";
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        }
        Utils.writeCookie = writeCookie;
        function removeCookie(name) {
            writeCookie(name, "", -1);
        }
        Utils.removeCookie = removeCookie;
    })(Utils = Framework.Utils || (Framework.Utils = {}));
})(Framework || (Framework = {}));
var Pockey;
(function (Pockey) {
    var Connection;
    (function (Connection) {
        var LoginHandler = Framework.Connection.LoginHandler;
        var readCookie = Framework.Utils.readCookie;
        var DatabaseConnector = Framework.Connection.DatabaseConnector;
        var writeCookie = Framework.Utils.writeCookie;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var Settings = Framework.Settings;
        var PockeyLoginHandler = (function (_super) {
            __extends(PockeyLoginHandler, _super);
            function PockeyLoginHandler() {
                var _this = _super.call(this) || this;
                SignalsManager.AddSignalCallback(PockeySignalTypes.FACEBOOK_SIGN_IN, _this.onFbLogin.bind(_this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.GOOGLE_SIGN_IN, _this.onGoogleLogin.bind(_this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_OUT, _this.onLogout.bind(_this));
                return _this;
            }
            PockeyLoginHandler.prototype.onLogout = function () {
                console.log("pockey login handler onFbLogin");
                Settings.playerSignedIn = false;
                this.resetUserData();
                this.onCheckUserData();
            };
            PockeyLoginHandler.prototype.resetUserData = function () {
                var dataChanged = false;
                if (Pockey.PockeySettings.PLAYER_ID != "guest") {
                    Pockey.PockeySettings.PLAYER_ID = "guest";
                }
                if (Pockey.PockeySettings.PLAYER_COLOR_ID != Pockey.PockeySettings.SMALL_COLORS_ARRAY[0].id) {
                    Pockey.PockeySettings.PLAYER_COLOR_ID = Pockey.PockeySettings.SMALL_COLORS_ARRAY[0].id;
                    dataChanged = true;
                }
                if (Pockey.PockeySettings.PLAYER_DECAL_ID != Pockey.PockeySettings.SMALL_DECALS_ARRAY[0].id) {
                    Pockey.PockeySettings.PLAYER_DECAL_ID = Pockey.PockeySettings.SMALL_DECALS_ARRAY[0].id;
                    dataChanged = true;
                }
                if (Pockey.PockeySettings.PLAYER_CUE_ID != Pockey.PockeySettings.SMALL_CUES_ARRAY[0].id) {
                    Pockey.PockeySettings.PLAYER_CUE_ID = Pockey.PockeySettings.SMALL_CUES_ARRAY[0].id;
                    dataChanged = true;
                }
                if (Pockey.PockeySettings.PLAYER_MISC_ID != Pockey.PockeySettings.SMALL_MISC_ARRAY[0].id) {
                    Pockey.PockeySettings.PLAYER_MISC_ID = Pockey.PockeySettings.SMALL_MISC_ARRAY[0].id;
                    dataChanged = true;
                }
                if (Pockey.PockeySettings.PLAYER_LEVEL != 1) {
                    Pockey.PockeySettings.PLAYER_LEVEL = 1;
                }
                if (dataChanged) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
                }
            };
            PockeyLoginHandler.prototype.onFbLogin = function () {
                console.log("pockey login handler onFbLogin");
                this.onCheckUserData();
            };
            PockeyLoginHandler.prototype.onGoogleLogin = function () {
                console.log("pockey login handler onGoogleLogin");
                this.onCheckUserData();
            };
            PockeyLoginHandler.prototype.onCheckUserData = function () {
                console.log("on POCKEY LOGIN HANDLER: onCheckUserData");
                var pockeyID = readCookie('PockeyID');
                console.log("intra la get cookie");
                if (pockeyID != "") {
                    if (_.includes(pockeyID, "@") && _.includes(pockeyID, ".")) {
                        DatabaseConnector.checkDatabaseUser(pockeyID, this.playerInfoReceived.bind(this));
                        console.log("database query for user");
                    }
                    else if (pockeyID == "guest") {
                        var playerData = {};
                        if (readCookie('PockeyUserColorId') != "") {
                            Pockey.PockeySettings.PLAYER_COLOR_ID = readCookie('PockeyUserColorId');
                            playerData["color"] = Pockey.PockeySettings.PLAYER_COLOR_ID;
                        }
                        if (readCookie('PockeyNickname') != "") {
                            Pockey.PockeySettings.PLAYER_NICKNAME = readCookie('PockeyNickname');
                            playerData["nickname"] = Pockey.PockeySettings.PLAYER_NICKNAME;
                        }
                        console.log("guest on read cookie");
                        this.playerInfoReceived(playerData);
                    }
                }
                else {
                    console.log("first time play guest");
                    var playerData = {};
                    writeCookie("PockeyID", Pockey.PockeySettings.PLAYER_ID, 30);
                    writeCookie("PockeyUserColorId", Pockey.PockeySettings.PLAYER_COLOR_ID, 30);
                    writeCookie("PockeyNickname", Pockey.PockeySettings.PLAYER_NICKNAME, 30);
                    this.playerInfoReceived(playerData);
                }
            };
            PockeyLoginHandler.prototype.playerInfoReceived = function (usernameData) {
                console.log("%c usernameData: ", "background: #ff9900; color: black; font-weight:bold; ");
                console.log(usernameData);
                var inventoryItemUpdated = false;
                if (!_.isUndefined(usernameData["avatar"]) && !_.isNull(usernameData["avatar"])) {
                    Pockey.PockeySettings.PLAYER_AVATAR_ID = usernameData["avatar"];
                    console.log("%c PLAYER_AVATAR_ID updated from db", "background: #ff9900; color: black; font-weight:bold;");
                    inventoryItemUpdated = true;
                }
                if (!_.isUndefined(usernameData["color"]) && !_.isNull(usernameData["color"])) {
                    Pockey.PockeySettings.PLAYER_COLOR_ID = usernameData["color"];
                    console.log("%c PLAYER_COLOR_ID updated from db", "background: #ff9900; color: black; font-weight:bold;");
                    inventoryItemUpdated = true;
                }
                if (!_.isUndefined(usernameData["decal"]) && !_.isNull(usernameData["decal"])) {
                    Pockey.PockeySettings.PLAYER_DECAL_ID = usernameData["decal"];
                    console.log("%c PLAYER_DECAL_ID updated from db", "background: #ff9900; color: black; font-weight:bold;");
                    inventoryItemUpdated = true;
                }
                if (!_.isUndefined(usernameData["player_level"]) && !_.isNull(usernameData["player_level"])) {
                    Pockey.PockeySettings.PLAYER_LEVEL = usernameData["player_level"];
                    console.log("%c PLAYER_LEVEL updated from db", "background: #ff9900; color: black; font-weight:bold;");
                }
                if (!_.isUndefined(usernameData["stick"]) && !_.isNull(usernameData["stick"])) {
                    Pockey.PockeySettings.PLAYER_CUE_ID = usernameData["stick"];
                    console.log("%c PLAYER_CUE_ID" +
                        "                    inventoryItemUpdated = true;\n updated from db", "background: #ff9900; color: black; font-weight:bold; ");
                    inventoryItemUpdated = true;
                }
                if (!_.isUndefined(usernameData["total_points"]) && !_.isNull(usernameData["total_points"])) {
                    Pockey.PockeySettings.PLAYER_TOTAL_POINTS = usernameData["total_points"];
                    console.log("%c PLAYER_TOTAL_POINTS updated from db", "background: #ff9900; color: black; font-weight:bold; ");
                }
                if (!_.isUndefined(usernameData["nickname"]) && !_.isNull(usernameData["nickname"])) {
                    Pockey.PockeySettings.PLAYER_NICKNAME = usernameData["nickname"];
                    console.log("%c PLAYER_NICKNAME updated from db", "background: #ff9900; color: black; font-weight:bold; ");
                    inventoryItemUpdated = true;
                }
                if (!_.isUndefined(usernameData["user_id"]) && !_.isNull(usernameData["user_id"])) {
                    Pockey.PockeySettings.PLAYER_ID = usernameData["user_id"];
                    console.log("%c USER_ID updated from db", "background: #ff9900; color: black; font-weight:bold; ");
                    if (!_.isUndefined(usernameData["first_login_date"]) && !_.isNull(usernameData["first_login_date"])) {
                        if (!Settings.playerSignedIn) {
                            Settings.playerSignedIn = true;
                            SignalsManager.DispatchSignal(PockeySignalTypes.PLAYER_SIGNED_IN);
                            console.log("%c PLAYER SIGNED IN", "background: #ff8811; color: black; font-weight:bold; ");
                        }
                    }
                }
                if (inventoryItemUpdated) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
                }
                _super.prototype.onCheckUserData.call(this);
            };
            return PockeyLoginHandler;
        }(LoginHandler));
        Connection.PockeyLoginHandler = PockeyLoginHandler;
    })(Connection = Pockey.Connection || (Pockey.Connection = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var Connection;
    (function (Connection) {
        var AbstractConnectionModule = Framework.Connection.AbstractConnectionModule;
        var PockeyConnectionModule = (function (_super) {
            __extends(PockeyConnectionModule, _super);
            function PockeyConnectionModule() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PockeyConnectionModule.prototype.registerSignalsHandlers = function () {
                _super.prototype.registerSignalsHandlers.call(this);
            };
            PockeyConnectionModule.prototype.getSocketIoClient = function () {
                return new Connection.PockeySocketClient();
            };
            PockeyConnectionModule.prototype.createLoginHandler = function () {
                var loginHandler = new Connection.PockeyLoginHandler();
            };
            return PockeyConnectionModule;
        }(AbstractConnectionModule));
        Connection.PockeyConnectionModule = PockeyConnectionModule;
    })(Connection = Pockey.Connection || (Pockey.Connection = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var UserInterface;
    (function (UserInterface) {
        var PockeyUiSearchingScreen = (function (_super) {
            __extends(PockeyUiSearchingScreen, _super);
            function PockeyUiSearchingScreen() {
                var _this = _super.call(this) || this;
                _this.searchScreen = document.getElementById("SearchingScreen");
                return _this;
            }
            PockeyUiSearchingScreen.prototype.setVisibleTrue = function () {
                this.killTweens();
                this.searchScreen.style.display = "flex";
                this.staggerTimeline = new TimelineMax();
                TweenMax.staggerFrom(".search", 2, {
                    backgroundColor: '#36edc9',
                    opacity: 0,
                    scale: 0.2,
                    repeat: -1,
                    ease: SlowMo.ease.config(0.5, 0.4, true)
                }, 0.4);
                TweenMax.staggerTo(".search", 2, {
                    x: 320,
                    backgroundColor: '#43f9f3',
                    repeat: -1,
                    ease: SlowMo.ease.config(0.5, 0.4, false)
                }, 0.4);
            };
            PockeyUiSearchingScreen.prototype.setVisibleFalse = function () {
                this.killTweens();
                this.searchScreen.style.display = "none";
            };
            PockeyUiSearchingScreen.prototype.killTweens = function () {
                TweenMax.killTweensOf(".search");
            };
            return PockeyUiSearchingScreen;
        }(Container));
        UserInterface.PockeyUiSearchingScreen = PockeyUiSearchingScreen;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Framework;
(function (Framework) {
    var utils;
    (function (utils) {
        var Graphics = PIXI.Graphics;
        var TextStyle = PIXI.TextStyle;
        var TextField = (function (_super) {
            __extends(TextField, _super);
            function TextField(text, style, debug) {
                var _this = _super.call(this, text, style) || this;
                if (style)
                    _this.setStyle(style);
                _this.updateText();
                if (debug)
                    _this.debug();
                return _this;
            }
            TextField.prototype.setText = function (text) {
                this.text = text;
            };
            TextField.prototype.setStyle = function (fontStyle) {
                this.scale.x = 1;
                this.scale.y = 1;
                var style = new TextStyle({});
                style.fontSize = +fontStyle.fontSize;
                style.wordWrapWidth = fontStyle.wordWrapWidth;
                style.wordWrap = fontStyle.wordWrap;
                style.fontFamily = fontStyle.fontFamily;
                style.fill = fontStyle.fill;
                style.dropShadow = fontStyle.dropShadow;
                style.dropShadowColor = fontStyle.dropShadowColor;
                style.dropShadowBlur = fontStyle.dropShadowBlur;
                style.dropShadowAngle = fontStyle.dropShadowAngle;
                style.dropShadowDistance = fontStyle.dropShadowDistance;
                if (style && !_.isUndefined(style.fontSize) && !_.isNull(style.fontSize)) {
                    var fontSize = +style.fontSize;
                    fontSize *= 2;
                    style.fontSize = fontSize;
                }
                if (style && !_.isUndefined(style.wordWrapWidth) && !_.isNull(style.wordWrapWidth)) {
                    var wordWrapWidth = +style.wordWrapWidth;
                    wordWrapWidth *= 2;
                    style.wordWrapWidth = wordWrapWidth;
                }
                this.style = style;
                this.scale.y /= 2;
                this.scale.x /= 2;
                this.initialScale = +this.style.fontSize;
            };
            TextField.prototype.rescale = function (scaleFactor) {
                var newFontSize = scaleFactor * this.initialScale;
                console.log("initial font size: " + this.initialScale);
                console.log("new font size: " + newFontSize);
                this.style.fontSize = newFontSize;
            };
            TextField.prototype.debug = function () {
                var gr = new Graphics();
                gr.beginFill(0xff9900, 0.5);
                gr.drawRect(0, 0, this.width * 2, this.height * 2);
                gr.endFill();
                gr.x = this.x;
                gr.y = this.y;
                this.addChild(gr);
            };
            return TextField;
        }(PIXI.Text));
        utils.TextField = TextField;
    })(utils = Framework.utils || (Framework.utils = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    var UserInterface;
    (function (UserInterface) {
        var TextField = Framework.utils.TextField;
        var Vector2 = Framework.Utils.Vector2;
        var PixiButton = (function (_super) {
            __extends(PixiButton, _super);
            function PixiButton(texture) {
                var _this = _super.call(this, texture) || this;
                _this.alignment = "center";
                _this.texture = _this.texture;
                _this.textOffset = new Vector2();
                _this._text = new TextField('Basic text in pixi');
                _this.addChild(_this._text);
                _this.interactive = true;
                _this.on("mousedown", function () {
                    _this.onDown();
                }, _this);
                _this.on("mouseup", function () {
                    _this.onUp();
                }, _this);
                _this.on("mouseover", function () {
                    _this.onHover();
                }, _this);
                _this.on("mouseout", function () {
                    _this.onOut();
                }, _this);
                _this.on("tap", function () {
                    _this.onUp();
                }, _this);
                return _this;
            }
            PixiButton.prototype.setOffset = function (offset) {
                this.textOffset = offset;
            };
            PixiButton.prototype.setAlign = function (align) {
                this.alignment = align;
                if (align == "left") {
                    this._text.x = 0 + this.textOffset.x;
                    this._text.y = 0 + this.textOffset.y;
                }
                else if (align == "right") {
                    this._text.x = this.width - this._text.width + this.textOffset.x;
                    this._text.y = this.height - this._text.height + this.textOffset.y;
                }
                else {
                    this._text.x = this.width / 2 - this._text.width / 2 - this.textOffset.x;
                    this._text.y = this.height / 2 - this._text.height / 2 - this.textOffset.x;
                }
            };
            PixiButton.prototype.setText = function (val, style) {
                this._text.text = val;
                this._text.setStyle(style);
                this._text.x = this.width / 2 - this._text.width / 2;
                this._text.y = this.height / 2 - this._text.height / 2;
                this.setAlign(this.alignment);
            };
            PixiButton.prototype.getText = function () {
                return this._text;
            };
            PixiButton.prototype.onDown = function () {
                this.y += 5;
            };
            PixiButton.prototype.onUp = function () {
                if (typeof (this._cb) === 'function') {
                    this._cb();
                }
                this.y -= 5;
            };
            PixiButton.prototype.onHover = function () {
                if (this.onMouseOverAnimation) {
                    this.onMouseOverAnimation();
                }
            };
            PixiButton.prototype.onOut = function () {
                if (this.onMouseOutAnimation) {
                    this.onMouseOutAnimation();
                }
            };
            Object.defineProperty(PixiButton.prototype, "clicked", {
                get: function () {
                    return this._cb;
                },
                set: function (cb) {
                    this._cb = cb;
                },
                enumerable: true,
                configurable: true
            });
            return PixiButton;
        }(PIXI.Sprite));
        UserInterface.PixiButton = PixiButton;
    })(UserInterface = Framework.UserInterface || (Framework.UserInterface = {}));
})(Framework || (Framework = {}));
var Pockey;
(function (Pockey) {
    var UserInterface;
    (function (UserInterface) {
        var Settings = Framework.Settings;
        var writeCookie = Framework.Utils.writeCookie;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var DatabaseConnector = Framework.Connection.DatabaseConnector;
        var PlayerColorCustomizer = (function () {
            function PlayerColorCustomizer() {
                var _this = this;
                this.currentColorCounter = 0;
                console.log("color customizer");
                this.colorCircle = document.getElementById("PlayerColorCircle");
                this.colorsArray = Pockey.PockeySettings.SMALL_COLORS_ARRAY;
                this.colorCircle.style.backgroundColor = this.parseColor(this.colorsArray[this.currentColorCounter].color);
                this.previousColorButton = document.getElementById("PreviousColorButton");
                this.nextColorButton = document.getElementById("NextColorButton");
                this.previousColorButton.onclick = function () {
                    console.log("on prev color");
                    _this.currentColorCounter--;
                    if (_this.currentColorCounter < 0) {
                        _this.currentColorCounter = _this.colorsArray.length - 1;
                    }
                    Pockey.PockeySettings.PLAYER_COLOR_ID = _this.colorsArray[_this.currentColorCounter].id;
                    _this.colorCircle.style.backgroundColor = _this.parseColor(_this.colorsArray[_this.currentColorCounter].color);
                    _this.updateCookieOrDatabase();
                };
                this.nextColorButton.onclick = function () {
                    console.log("on next color");
                    _this.currentColorCounter++;
                    if (_this.currentColorCounter > _this.colorsArray.length - 1) {
                        _this.currentColorCounter = 0;
                    }
                    Pockey.PockeySettings.PLAYER_COLOR_ID = _this.colorsArray[_this.currentColorCounter].id;
                    _this.colorCircle.style.backgroundColor = _this.parseColor(_this.colorsArray[_this.currentColorCounter].color);
                    _this.updateCookieOrDatabase();
                };
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_PLAYER_COLOR, this.updateCurrentColor.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_IN, this.onPlayerSignedIn.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_OUT, this.onPlayerSignedOut.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.INVENTORY_ITEM_UPDATED, this.onInventoryItemUpdated.bind(this));
            }
            PlayerColorCustomizer.prototype.onInventoryItemUpdated = function () {
                if (this.colorsArray[this.currentColorCounter].id != Pockey.PockeySettings.PLAYER_COLOR_ID) {
                    this.updateCurrentColor();
                }
            };
            PlayerColorCustomizer.prototype.updateCurrentColor = function () {
                var _this = this;
                _.forEach(this.colorsArray, function (item, counter) {
                    if (item.id == Pockey.PockeySettings.PLAYER_COLOR_ID) {
                        _this.currentColorCounter = counter;
                        return true;
                    }
                });
                this.colorCircle.style.backgroundColor = this.parseColor(this.colorsArray[this.currentColorCounter].color);
            };
            PlayerColorCustomizer.prototype.updateCookieOrDatabase = function () {
                if (Settings.playerSignedIn) {
                    var colorDbObject = {
                        userID: Pockey.PockeySettings.PLAYER_ID,
                        column: "color",
                        value: Pockey.PockeySettings.PLAYER_COLOR_ID
                    };
                    DatabaseConnector.updateUserData(colorDbObject, null);
                }
                else {
                    writeCookie("PockeyUserColorId", Pockey.PockeySettings.PLAYER_COLOR_ID, 30);
                }
            };
            PlayerColorCustomizer.prototype.onPlayerSignedIn = function () {
                this.colorsArray = Pockey.PockeySettings.LARGE_COLORS_ARRAY;
                console.log("colors customizer player signed in");
                this.updateCurrentColor();
            };
            PlayerColorCustomizer.prototype.onPlayerSignedOut = function () {
                this.colorsArray = Pockey.PockeySettings.SMALL_COLORS_ARRAY;
                if (this.currentColorCounter > this.colorsArray.length - 1) {
                    this.currentColorCounter = 0;
                    Pockey.PockeySettings.PLAYER_COLOR_ID = this.colorsArray[this.currentColorCounter].id;
                }
                this.colorCircle.style.backgroundColor = this.parseColor(this.colorsArray[this.currentColorCounter].color);
                this.updateCookieOrDatabase();
            };
            PlayerColorCustomizer.prototype.parseColor = function (color) {
                if (typeof color === 'number') {
                    color = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
                }
                return color;
            };
            ;
            return PlayerColorCustomizer;
        }());
        UserInterface.PlayerColorCustomizer = PlayerColorCustomizer;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var UserInterface;
    (function (UserInterface) {
        var Settings = Framework.Settings;
        var writeCookie = Framework.Utils.writeCookie;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var DatabaseConnector = Framework.Connection.DatabaseConnector;
        var PlayerAvatarCustomizer = (function () {
            function PlayerAvatarCustomizer() {
                var _this = this;
                this.currentAvatarCounter = 0;
                if (Settings.playerSignedIn) {
                    this.avatarsArray = Pockey.PockeySettings.LARGE_AVATARS_ARRAY;
                }
                else {
                    this.avatarsArray = Pockey.PockeySettings.SMALL_AVATARS_ARRAY;
                }
                if (Pockey.PockeySettings.PLAYER_AVATAR_ID) {
                    _.forEach(this.avatarsArray, function (avatar, counter) {
                        if (avatar.id == Pockey.PockeySettings.PLAYER_AVATAR_ID) {
                            _this.currentAvatarCounter = counter;
                        }
                    });
                }
                this.avatarHolder = document.getElementById("AvatarImage");
                Pockey.PockeySettings.PLAYER_AVATAR_ID = this.avatarsArray[this.currentAvatarCounter].id;
                this.avatarHolder.style.background = "center / 97% no-repeat #1A4157 url(" + this.avatarsArray[this.currentAvatarCounter].icon + ")";
                this.previousAvatarButton = document.getElementById("PreviousAvatarButton");
                this.nextAvatarButton = document.getElementById("NextAvatarButton");
                this.previousAvatarButton.onclick = function () {
                    _this.onPreviousButtonClicked();
                };
                this.nextAvatarButton.onclick = function () {
                    _this.onNextButtonClicked();
                };
                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_IN, this.onPlayerSignedIn.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_OUT, this.onPlayerSignedOut.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.INVENTORY_ITEM_UPDATED, this.onInventoryItemUpdated.bind(this));
            }
            PlayerAvatarCustomizer.prototype.onInventoryItemUpdated = function () {
                var _this = this;
                if (this.avatarsArray[this.currentAvatarCounter].id != Pockey.PockeySettings.PLAYER_AVATAR_ID) {
                    _.forEach(this.avatarsArray, function (item, counter) {
                        if (item.id == Pockey.PockeySettings.PLAYER_AVATAR_ID) {
                            _this.currentAvatarCounter = counter;
                            return true;
                        }
                    });
                    this.avatarHolder.style.background = "center / 97% no-repeat #1A4157 url(" + this.avatarsArray[this.currentAvatarCounter].icon + ")";
                }
            };
            PlayerAvatarCustomizer.prototype.onPreviousButtonClicked = function () {
                this.currentAvatarCounter--;
                if (this.currentAvatarCounter < 0) {
                    this.currentAvatarCounter = this.avatarsArray.length - 1;
                }
                if (this.avatarsArray[this.currentAvatarCounter].level > Pockey.PockeySettings.PLAYER_LEVEL) {
                    this.onPreviousButtonClicked();
                    return;
                }
                Pockey.PockeySettings.PLAYER_AVATAR_ID = this.avatarsArray[this.currentAvatarCounter].id;
                this.avatarHolder.style.background = "center / 97% no-repeat #1A4157 url(" + this.avatarsArray[this.currentAvatarCounter].icon + ")";
                this.updateCookieOrDatabase();
            };
            PlayerAvatarCustomizer.prototype.onNextButtonClicked = function () {
                this.currentAvatarCounter++;
                if (this.currentAvatarCounter > this.avatarsArray.length - 1) {
                    this.currentAvatarCounter = 0;
                }
                if (this.avatarsArray[this.currentAvatarCounter].level > Pockey.PockeySettings.PLAYER_LEVEL) {
                    this.onNextButtonClicked();
                    return;
                }
                Pockey.PockeySettings.PLAYER_AVATAR_ID = this.avatarsArray[this.currentAvatarCounter].id;
                this.avatarHolder.style.background = "center / 97% no-repeat #1A4157 url(" + this.avatarsArray[this.currentAvatarCounter].icon + ")";
                this.updateCookieOrDatabase();
                console.log("this.currentAvatarCounter: " + this.currentAvatarCounter);
            };
            PlayerAvatarCustomizer.prototype.onPlayerSignedOut = function () {
                this.avatarsArray = Pockey.PockeySettings.SMALL_AVATARS_ARRAY;
                this.currentAvatarCounter = 0;
                Pockey.PockeySettings.PLAYER_AVATAR_ID = this.avatarsArray[this.currentAvatarCounter].id;
                this.avatarHolder.style.background = "center / 97% no-repeat #1A4157 url(" + this.avatarsArray[this.currentAvatarCounter].icon + ")";
                this.updateCookieOrDatabase();
            };
            PlayerAvatarCustomizer.prototype.onPlayerSignedIn = function () {
                var _this = this;
                this.avatarsArray = Pockey.PockeySettings.LARGE_AVATARS_ARRAY;
                _.forEach(this.avatarsArray, function (item, counter) {
                    if (item.id == Pockey.PockeySettings.PLAYER_AVATAR_ID) {
                        _this.currentAvatarCounter = counter;
                        return true;
                    }
                });
                this.avatarHolder.style.background = "center / 97% no-repeat #1A4157 url(" + this.avatarsArray[this.currentAvatarCounter].icon + ")";
            };
            PlayerAvatarCustomizer.prototype.updateCookieOrDatabase = function () {
                if (Settings.playerSignedIn) {
                    var colorDbObject = {
                        userID: Pockey.PockeySettings.PLAYER_ID,
                        column: "avatar",
                        value: Pockey.PockeySettings.PLAYER_AVATAR_ID
                    };
                    DatabaseConnector.updateUserData(colorDbObject, null);
                }
                else {
                    writeCookie("PockeyUserAvatarId", Pockey.PockeySettings.PLAYER_AVATAR_ID, 30);
                }
                SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
            };
            return PlayerAvatarCustomizer;
        }());
        UserInterface.PlayerAvatarCustomizer = PlayerAvatarCustomizer;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var UserInterface;
    (function (UserInterface) {
        var writeCookie = Framework.Utils.writeCookie;
        var removeCookie = Framework.Utils.removeCookie;
        var Settings = Framework.Settings;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var DatabaseConnector = Framework.Connection.DatabaseConnector;
        var LoginElements = (function () {
            function LoginElements() {
                this.correctText = document.getElementById("CorrectText");
                this.handleInputText();
                this.handleSignOutButton();
                this.handleStartButton();
                this.handleFacebookButton();
                this.handleGoogleButton();
                this.checkForPlayerSignIn();
                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_IN, this.onPlayerSignedIn.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.INVENTORY_ITEM_UPDATED, this.onInventoryItemUpdated.bind(this));
            }
            LoginElements.prototype.onInventoryItemUpdated = function () {
                if (Pockey.PockeySettings.PLAYER_NICKNAME != "" && this.inputText.value != Pockey.PockeySettings.PLAYER_NICKNAME) {
                    this.inputText.value = Pockey.PockeySettings.PLAYER_NICKNAME;
                }
            };
            LoginElements.prototype.onPlayerSignedIn = function () {
                this.hideSignInButtons();
                if (this.inputText.value != Pockey.PockeySettings.PLAYER_NICKNAME && Pockey.PockeySettings.PLAYER_NICKNAME != "") {
                    this.inputText.value = Pockey.PockeySettings.PLAYER_NICKNAME;
                }
            };
            LoginElements.prototype.handleInputText = function () {
                this.inputText = document.getElementById("InputText");
                if (Pockey.PockeySettings.PLAYER_NICKNAME != "") {
                    this.inputText.value = Pockey.PockeySettings.PLAYER_NICKNAME;
                }
                this.inputText.addEventListener('input', this.typeHandler.bind(this));
                this.inputText.addEventListener('propertychange', this.typeHandler.bind(this));
                this.inputText.addEventListener('change', this.typeHandler.bind(this));
            };
            LoginElements.prototype.typeHandler = function () {
                if (this.inputText.value != "") {
                    this.correctText.style.visibility = "hidden";
                }
            };
            LoginElements.prototype.handleSignOutButton = function () {
                var _this = this;
                this.signOutBtn = document.getElementById("LogoutButton");
                this.signOutBtn.onclick = function () {
                    console.log("intra la click");
                    var pockeyEvent = new Event('PockeyGoogleSignOutEvent');
                    _this.signOutBtn.dispatchEvent(pockeyEvent);
                    Pockey.PockeySettings.PLAYER_ID = "guest";
                    removeCookie("PockeyID");
                    removeCookie("PockeyUserColorId");
                    removeCookie("PockeyUserAvatarId");
                    _this.showSignInButtons();
                    SignalsManager.DispatchSignal(PockeySignalTypes.PLAYER_SIGNED_OUT);
                };
            };
            LoginElements.prototype.showSignInButtons = function () {
                this.googleSignIn.style.display = "block";
                this.facebookSignIn.style.display = "block";
                this.signOutBtn.style.display = "none";
                document.getElementById("MainMenuPlayerRankingsHolder").style.display = "none";
            };
            LoginElements.prototype.hideSignInButtons = function () {
                this.googleSignIn.style.display = "none";
                this.facebookSignIn.style.display = "none";
                this.signOutBtn.style.display = "block";
                document.getElementById("MainMenuPlayerRankingsHolder").style.display = "flex";
            };
            LoginElements.prototype.handleStartButton = function () {
                var _this = this;
                this.startBtn = document.getElementById("StartGameButtonHolder");
                this.startBtn.onclick = function () {
                    if (_this.inputText.value == "") {
                        _this.correctText.style.visibility = "visible";
                        TweenMax.killTweensOf(_this.inputText);
                        _this.inputText.style.borderColor = "";
                        TweenMax.to(_this.inputText, .2, { css: { borderColor: "#e92c5a" }, yoyo: true, repeat: 3 });
                    }
                    else {
                        if (Settings.playerSignedIn) {
                            Pockey.PockeySettings.PLAYER_NICKNAME = _this.inputText.value;
                            var nicknameDb = {
                                userID: Pockey.PockeySettings.PLAYER_ID,
                                column: "nickname",
                                value: Pockey.PockeySettings.PLAYER_NICKNAME
                            };
                            DatabaseConnector.updateUserData(nicknameDb, null);
                        }
                        else {
                            Pockey.PockeySettings.PLAYER_NICKNAME = _this.inputText.value;
                            writeCookie('PockeyNickname', _this.inputText.value, 30);
                        }
                        SignalsManager.DispatchSignal(PockeySignalTypes.START_GAME);
                    }
                };
            };
            LoginElements.prototype.handleGoogleButton = function () {
                this.googleSignIn = document.getElementById("GoogleSignInButtonHolder");
                this.googleSignIn.addEventListener('PockeyGoogleSignInEvent', function (e) {
                    console.log("%c login handler: google logged in", "background:pink");
                    writeCookie('PockeyID', e.detail.toString(), 30);
                    SignalsManager.DispatchSignal(PockeySignalTypes.GOOGLE_SIGN_IN);
                }, false);
            };
            LoginElements.prototype.handleFacebookButton = function () {
                this.facebookSignIn = document.getElementById("FacebookSignInButtonHolder");
                this.facebookSignIn.addEventListener("PockeyFacebookSignedIn", function (e) {
                    if (!_.isNull(e.detail["email"]) && !_.isUndefined(e.detail["email"])) {
                        writeCookie('PockeyID', e.detail["email"].toString(), 30);
                    }
                    console.log("%c login handler: google logged in", "background:pink");
                    SignalsManager.DispatchSignal(PockeySignalTypes.FACEBOOK_SIGN_IN);
                });
            };
            LoginElements.prototype.checkForPlayerSignIn = function () {
                if (Settings.playerSignedIn) {
                    this.hideSignInButtons();
                }
            };
            return LoginElements;
        }());
        UserInterface.LoginElements = LoginElements;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var UserInterface;
    (function (UserInterface) {
        var TutorialMenu = (function () {
            function TutorialMenu() {
                var _this = this;
                this.howToButtonClicked = false;
                this.howToPlayButton = document.getElementById("HowToPlayButtonHolder");
                this.howToPlayImage = document.getElementById("HowToPlayImage");
                var buttonBg = this.howToPlayButton.querySelector('.normalButtonBackground');
                this.howToPlayButton.onclick = function () {
                    _this.howToButtonClicked = (!_this.howToButtonClicked);
                    console.log("how to clicked la click: " + _this.howToButtonClicked);
                    if (_this.howToButtonClicked) {
                        _this.howToPlayButton.style.borderColor = "#ffffff";
                        buttonBg.style.backgroundColor = "#ffffff";
                        buttonBg.style.color = "#2D899D";
                        _this.howToPlayImage.style.background = "none";
                        var random = Math.random() * 50;
                        _this.howToPlayImage.style.background = "url(Assets/Desktop/Images/howtoplay.gif?v=" + random.toString() + ")  center center / 97% no-repeat";
                        document.getElementById("HowToPlayImage").style.display = "block";
                        document.getElementById("FbTwitterPromoHolder").style.display = "none";
                        document.getElementById("ShareButtonsHolder").style.display = "none";
                    }
                    else {
                        _this.howToPlayButton.style.borderColor = "";
                        buttonBg.style.backgroundColor = "";
                        buttonBg.style.color = "";
                        _this.howToPlayImage.style.background = "none";
                        document.getElementById("HowToPlayImage").style.display = "none";
                        document.getElementById("FbTwitterPromoHolder").style.display = "flex";
                    }
                };
            }
            return TutorialMenu;
        }());
        UserInterface.TutorialMenu = TutorialMenu;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var UserInterface;
    (function (UserInterface) {
        var PlayGameMenu = (function () {
            function PlayGameMenu() {
                this.loginElements = new UserInterface.LoginElements();
                this.playerColorCustomizer = new UserInterface.PlayerColorCustomizer();
                this.playerAvatarCustomizer = new UserInterface.PlayerAvatarCustomizer();
                this.tutorialMenu = new UserInterface.TutorialMenu();
            }
            return PlayGameMenu;
        }());
        UserInterface.PlayGameMenu = PlayGameMenu;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var UserInterface;
    (function (UserInterface) {
        var Settings = Framework.Settings;
        var InventoryButton = (function () {
            function InventoryButton(btnDiv, showCategoryCallback, hideCategoryCallback) {
                var _this = this;
                this.button = btnDiv;
                this.id = this.button.id;
                this.onShowCategoryCallback = showCategoryCallback;
                this.onHideCategoryCallback = hideCategoryCallback;
                this.category = this.id.replace("Inventory", "");
                this.inventoryButtonLogo = this.button.querySelector('.inventoryButtonLogo');
                if (Settings.playerSignedIn) {
                    this.categoryElements = Pockey.PockeySettings["LARGE_" + this.category.toUpperCase() + "_ARRAY"];
                }
                else {
                    this.categoryElements = Pockey.PockeySettings["SMALL_" + this.category.toUpperCase() + "_ARRAY"];
                }
                this.clicked = false;
                this.button.onclick = function () {
                    _this.clickHandler();
                };
                this.button.onmouseover = function () {
                    if (_this.clicked) {
                        _this.inventoryButtonLogo.style.background = "center / contain no-repeat url(Assets/Desktop/Images/minus-sign-white.png)";
                        _this.button.style.borderColor = "";
                        _this.button.style.backgroundColor = "";
                        _this.button.style.color = "white";
                    }
                };
                this.button.onmouseout = function () {
                    if (_this.clicked) {
                        _this.inventoryButtonLogo.style.background = "center / contain no-repeat url(Assets/Desktop/Images/minus-sign-color.png)";
                        _this.button.style.borderColor = "white";
                        _this.button.style.backgroundColor = "white";
                        _this.button.style.color = "#2d889c";
                    }
                    else {
                        _this.inventoryButtonLogo.style.background = "";
                    }
                };
            }
            InventoryButton.prototype.clickHandler = function () {
                this.clicked = !this.clicked;
                if (this.clicked) {
                    this.inventoryButtonLogo.style.background = "center / contain no-repeat url(Assets/Desktop/Images/minus-sign-white.png)";
                    this.button.style.color = "white";
                    this.onShowCategoryCallback(this.categoryElements);
                }
                else {
                    this.inventoryButtonLogo.style.background = "center / contain no-repeat url(Assets/Desktop/Images/plus-sign-white.png)";
                    this.button.style.color = "";
                    this.onHideCategoryCallback(this.categoryElements);
                }
            };
            ;
            InventoryButton.prototype.onSignedIn = function () {
                if (this.clicked) {
                    this.onHideCategoryCallback(this.categoryElements);
                    this.categoryElements = Pockey.PockeySettings["LARGE_" + this.category.toUpperCase() + "_ARRAY"];
                    this.onShowCategoryCallback(this.categoryElements);
                }
                else {
                    this.categoryElements = Pockey.PockeySettings["LARGE_" + this.category.toUpperCase() + "_ARRAY"];
                }
            };
            InventoryButton.prototype.onSignedOut = function () {
                if (this.clicked) {
                    this.onHideCategoryCallback(this.categoryElements);
                    this.categoryElements = Pockey.PockeySettings["SMALL_" + this.category.toUpperCase() + "_ARRAY"];
                    this.onShowCategoryCallback(this.categoryElements);
                }
                else {
                    this.categoryElements = Pockey.PockeySettings["SMALL_" + this.category.toUpperCase() + "_ARRAY"];
                }
            };
            InventoryButton.prototype.activate = function () {
                if (this.categoryElements.length > 0) {
                    this.clickHandler();
                    this.inventoryButtonLogo.style.background = "center / contain no-repeat url(Assets/Desktop/Images/minus-sign-color.png)";
                    this.button.style.borderColor = "white";
                    this.button.style.backgroundColor = "white";
                    this.button.style.color = "#2d889c";
                }
            };
            return InventoryButton;
        }());
        UserInterface.InventoryButton = InventoryButton;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var UserInterface;
    (function (UserInterface) {
        var InventoryBox = (function () {
            function InventoryBox(imgDiv, clickFunction) {
                var _this = this;
                this.occupied = false;
                this.clicked = false;
                this.imageDiv = imgDiv;
                this.iconDiv = this.imageDiv.querySelector(".inventoryItemBoxBackground");
                this.imageDiv.onmouseover = function () {
                    if (_this.occupied) {
                        _this.imageDiv.style.cursor = "pointer";
                        _this.imageDiv.style.borderColor = "white";
                    }
                    else {
                        _this.imageDiv.style.cursor = "";
                        _this.imageDiv.style.borderColor = "";
                    }
                };
                this.imageDiv.onmouseout = function () {
                    if (!_this.clicked)
                        _this.imageDiv.style.borderColor = "";
                };
                this.imageDiv.onclick = function () {
                    _this.clicked = !_this.clicked;
                    if (_this.clicked) {
                        _this.imageDiv.style.borderColor = "white";
                        _this.imageDiv.style.borderWidth = "4px";
                    }
                    if (_this.occupied)
                        clickFunction(_this.inventoryVO);
                };
            }
            InventoryBox.prototype.click = function () {
                this.clicked = true;
                this.imageDiv.style.borderColor = "white";
                this.imageDiv.style.borderWidth = "4px";
            };
            InventoryBox.prototype.unClick = function () {
                this.stopAnimation();
                this.imageDiv.style.borderColor = "";
                this.imageDiv.style.borderWidth = "";
                this.clicked = false;
            };
            InventoryBox.prototype.addVO = function (inventoryVO) {
                this.clearVO();
                this.occupied = true;
                this.inventoryVO = inventoryVO;
                this.iconDiv.style.background = "center / contain no-repeat #062f38 url(" + this.inventoryVO.icon + ")";
            };
            InventoryBox.prototype.clearVO = function () {
                this.stopAnimation();
                this.unClick();
                this.occupied = false;
                this.iconDiv.style.background = "center / contain no-repeat #062f38 url('')";
                this.inventoryVO = null;
                this.iconDiv.querySelector(".inventoryItemBoxSelected").style.display = "";
                this.iconDiv.querySelector(".inventoryItemBoxLocked").style.display = "";
            };
            InventoryBox.prototype.stopAnimation = function () {
                if (this.borderAnimation && this.borderAnimation.isActive()) {
                    this.borderAnimation.kill();
                    this.borderAnimation = null;
                }
                this.imageDiv.style.borderColor = "";
                this.imageDiv.style.borderWidth = "";
            };
            InventoryBox.prototype.animate = function () {
                this.stopAnimation();
                this.borderAnimation = TweenMax.to(this.imageDiv, 0.3, {
                    css: { borderColor: "white", borderWidth: "5px" },
                    yoyo: true,
                    repeat: 1
                });
            };
            return InventoryBox;
        }());
        UserInterface.InventoryBox = InventoryBox;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var UserInterface;
    (function (UserInterface) {
        var InventoryItemsHolderButton = (function () {
            function InventoryItemsHolderButton(btn) {
                var _this = this;
                this.button = btn;
                var iconBgID = this.button.getElementsByClassName("buttonArrow")[0].id;
                this.iconBg = document.getElementById(iconBgID);
                var iconStyle = this.iconBg.currentStyle || window.getComputedStyle(this.iconBg);
                var mouseOverBackground = iconStyle.background.toString().replace(".svg", "-reg.svg");
                this.bg = this.button.getElementsByClassName("normalButtonBackground")[0];
                this.button.setAttribute("isActive", "true");
                this.button.onmouseover = function () {
                    if (_this.button.getAttribute("isActive") == "true") {
                        _this.bg.style.background = "white";
                        _this.iconBg.style.background = mouseOverBackground;
                    }
                    else {
                        _this.bg.style.background = "";
                        _this.iconBg.style.background = "";
                    }
                };
                this.button.onmouseout = function () {
                    _this.bg.style.background = "";
                    _this.iconBg.style.background = "";
                };
                this.disable();
            }
            InventoryItemsHolderButton.prototype.disable = function () {
                this.button.style.opacity = "0.5";
                this.button.style.cursor = "default";
                this.button.setAttribute("isActive", "false");
                this.bg.style.background = "";
                this.iconBg.style.background = "";
            };
            InventoryItemsHolderButton.prototype.enable = function () {
                this.button.style.opacity = "";
                this.button.style.cursor = "";
                this.button.setAttribute("isActive", "true");
            };
            return InventoryItemsHolderButton;
        }());
        UserInterface.InventoryItemsHolderButton = InventoryItemsHolderButton;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var UserInterface;
    (function (UserInterface) {
        var Settings = Framework.Settings;
        var InventoryButtonMobile = (function (_super) {
            __extends(InventoryButtonMobile, _super);
            function InventoryButtonMobile(btnDiv, showCategoryCallback, hideCategoryCallback) {
                var _this = _super.call(this, btnDiv, showCategoryCallback, hideCategoryCallback) || this;
                _this.button = btnDiv;
                _this.id = _this.button.id;
                _this.onShowCategoryCallback = showCategoryCallback;
                _this.onHideCategoryCallback = hideCategoryCallback;
                _this.category = _this.id.replace("Inventory", "");
                _this.inventoryButtonLogo = _this.button.querySelector('.inventoryButtonLogo');
                if (Settings.playerSignedIn) {
                    _this.categoryElements = Pockey.PockeySettings["LARGE_" + _this.category.toUpperCase() + "_ARRAY"];
                }
                else {
                    _this.categoryElements = Pockey.PockeySettings["SMALL_" + _this.category.toUpperCase() + "_ARRAY"];
                }
                _this.clicked = false;
                _this.button.onclick = function () {
                    _this.clickHandler();
                };
                _this.button.onmouseover = function () {
                };
                _this.button.onmouseout = function () {
                };
                return _this;
            }
            InventoryButtonMobile.prototype.clickHandler = function () {
                this.clicked = !this.clicked;
                if (this.clicked) {
                    this.button.style.borderColor = "white";
                    this.button.style.backgroundColor = "white";
                    this.button.style.color = "#2d889c";
                    this.onShowCategoryCallback(this.categoryElements);
                }
                else {
                    this.inventoryButtonLogo.style.background = "center / contain no-repeat url(Assets/Desktop/Images/plus-sign-white.png)";
                    this.button.style.borderColor = "";
                    this.button.style.backgroundColor = "";
                    this.button.style.color = "";
                    this.onHideCategoryCallback(this.categoryElements);
                }
            };
            ;
            InventoryButtonMobile.prototype.onSignedIn = function () {
                if (this.clicked) {
                    this.onHideCategoryCallback(this.categoryElements);
                    this.categoryElements = Pockey.PockeySettings["LARGE_" + this.category.toUpperCase() + "_ARRAY"];
                    this.onShowCategoryCallback(this.categoryElements);
                }
                else {
                    this.categoryElements = Pockey.PockeySettings["LARGE_" + this.category.toUpperCase() + "_ARRAY"];
                }
            };
            InventoryButtonMobile.prototype.onSignedOut = function () {
                if (this.clicked) {
                    this.onHideCategoryCallback(this.categoryElements);
                    this.categoryElements = Pockey.PockeySettings["SMALL_" + this.category.toUpperCase() + "_ARRAY"];
                    this.onShowCategoryCallback(this.categoryElements);
                }
                else {
                    this.categoryElements = Pockey.PockeySettings["SMALL_" + this.category.toUpperCase() + "_ARRAY"];
                }
            };
            InventoryButtonMobile.prototype.activate = function () {
                if (this.categoryElements.length > 0) {
                    this.clickHandler();
                    this.inventoryButtonLogo.style.background = "center / contain no-repeat url(Assets/Desktop/Images/minus-sign-color.png)";
                    this.button.style.borderColor = "white";
                    this.button.style.backgroundColor = "white";
                    this.button.style.color = "#2d889c";
                }
            };
            return InventoryButtonMobile;
        }(UserInterface.InventoryButton));
        UserInterface.InventoryButtonMobile = InventoryButtonMobile;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var UserInterface;
    (function (UserInterface) {
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var DatabaseConnector = Framework.Connection.DatabaseConnector;
        var SignalsType = Framework.Signals.SignalsType;
        var Settings = Framework.Settings;
        var PockeyInventoryMenu = (function () {
            function PockeyInventoryMenu() {
                this.currentColumnIndex = 0;
                this.columnsNumber = 0;
                this.columnWidth = 0;
                this.columnPadding = 0;
                this.itemsArray = [];
                this.handleItemDescriptionPanel();
                this.handleInventoryBoxes();
                this.handleInventoryButtons();
                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_IN, this.onPlayerSignedIn.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_OUT, this.onPlayerSignedOut.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.INVENTORY_ITEM_UPDATED, this.onInventoryItemUpdated.bind(this));
                SignalsManager.AddSignalCallback(SignalsType.ALL_MODULES_ELEMENTS_CREATED, this.onAllModulesElementsCreated.bind(this));
            }
            PockeyInventoryMenu.prototype.onAllModulesElementsCreated = function () {
                for (var i = this.inventoryButtons.length; i--; i >= 0) {
                    this.inventoryButtons[i].activate();
                }
            };
            PockeyInventoryMenu.prototype.onInventoryItemUpdated = function (params) {
                this.updateBoxes(this.itemsArray);
            };
            PockeyInventoryMenu.prototype.onPlayerSignedIn = function () {
                _.forEach(this.inventoryButtons, function (button) {
                    button.onSignedIn();
                });
            };
            PockeyInventoryMenu.prototype.onPlayerSignedOut = function () {
                _.forEach(this.inventoryButtons, function (button) {
                    button.onSignedOut();
                });
                this.updateBoxes(this.itemsArray);
                this.moveHolderToOffset(0, true);
            };
            PockeyInventoryMenu.prototype.handleItemDescriptionPanel = function () {
                this.bigAvatar = document.getElementById("InventoryBigAvatar");
                this.itemNameDiv = document.getElementById("ItemNameText");
            };
            PockeyInventoryMenu.prototype.handleInventoryBoxes = function () {
                var _this = this;
                this.boxesHolder = document.getElementById("ItemsHolder");
                this.boxesHolderWrapper = document.getElementById("ItemsHolderWrapper");
                this.boxesHolderWrapper.classList.add("inventoryRightSideMask");
                this.boxes = [];
                var counter = 0;
                _.forEach(this.boxesHolder.children, function (column) {
                    _this.columnsNumber++;
                    _this.columnPadding = +((column.style.marginRight).replace("px", ""));
                    _.forEach(column.children, function (item) {
                        var box = new UserInterface.InventoryBox(item, _this.showItemDescription.bind(_this));
                        _this.boxes.push(box);
                        counter++;
                    });
                });
                TweenMax.delayedCall(0.5, function () {
                    if (_this.columnWidth == 0) {
                        _this.columnWidth = _this.boxesHolder.scrollWidth / _this.boxesHolder.children.length;
                    }
                });
            };
            PockeyInventoryMenu.prototype.showCategory = function (category) {
                var _this = this;
                if (this.columnWidth == 0) {
                    this.columnWidth = this.boxesHolder.scrollWidth / this.boxesHolder.children.length;
                }
                _.forEach(category, function (inventoryVO, counter) {
                    _.remove(_this.itemsArray, function (item) {
                        return item.id == inventoryVO.id;
                    });
                    _this.itemsArray.push(inventoryVO);
                });
                this.reorderItemsArray();
                var neededColumns = Math.round(this.itemsArray.length / 3);
                var columnsNo = this.boxesHolder.children.length;
                if (neededColumns > columnsNo) {
                    var itm_1 = this.boxesHolder.children[0];
                    _.forEach(_.range(neededColumns - columnsNo), function () {
                        var newColumn = itm_1.cloneNode(true);
                        _this.boxesHolder.appendChild(newColumn);
                    });
                    this.boxes = [];
                    _.forEach(this.boxesHolder.children, function (column) {
                        _.forEach(column.children, function (item) {
                            var box = new UserInterface.InventoryBox(item, _this.showItemDescription.bind(_this));
                            _this.boxes.push(box);
                        });
                    });
                }
                this.updateBoxes(this.itemsArray, category[0].category);
                var columnIndex = this.getNewColumnIndexOnShow(category[0].category);
                var newOffset = columnIndex * this.columnWidth;
                this.moveHolderToOffset(newOffset);
            };
            PockeyInventoryMenu.prototype.getNewColumnIndexOnShow = function (categoryName) {
                var firstItemIndex = -1;
                var lastItemIndex = 0;
                _.forEach(this.itemsArray, function (item, counter) {
                    if (item.category == categoryName) {
                        if (firstItemIndex == -1) {
                            firstItemIndex = counter;
                            lastItemIndex = firstItemIndex - 1;
                        }
                        lastItemIndex++;
                    }
                });
                var columnIndex = Math.floor(firstItemIndex / 3);
                var maxColumns = this.boxesHolder.children.length;
                if (columnIndex > maxColumns) {
                    columnIndex = maxColumns;
                }
                console.log("current columns index: " + this.currentColumnIndex);
                return columnIndex;
            };
            PockeyInventoryMenu.prototype.reorderItemsArray = function () {
                var _this = this;
                var newArr = [];
                _.forEach(this.inventoryButtons, function (button) {
                    _.forEach(_this.itemsArray, function (item) {
                        if (item.category.toUpperCase() == button.category.toUpperCase()) {
                            newArr.push(item);
                        }
                    });
                });
                this.itemsArray = newArr;
            };
            PockeyInventoryMenu.prototype.hideCategory = function (category) {
                var _this = this;
                _.forEach(category, function (inventoryVO, counter) {
                    _.remove(_this.itemsArray, function (item) {
                        if (item.id == inventoryVO.id) {
                        }
                        return item.id == inventoryVO.id;
                    });
                });
                this.reorderItemsArray();
                var neededColumns = Math.round(this.itemsArray.length / 3);
                if (neededColumns < this.columnsNumber) {
                    neededColumns = this.columnsNumber;
                }
                var columnsNo = this.boxesHolder.children.length;
                if (columnsNo > neededColumns) {
                    console.log("children inainate de remove: " + this.boxesHolder.children.length);
                    var boxes = this.boxesHolder.children;
                    for (var i = boxes.length - 1; i >= neededColumns; i--) {
                        this.boxesHolder.removeChild(boxes[i]);
                    }
                    console.log("children dupa remove: " + this.boxesHolder.children.length);
                }
                this.updateBoxes(this.itemsArray);
                var currentRight = this.boxesHolder.style.right;
                currentRight = currentRight.replace("px", "");
                var newOffset = +currentRight;
                if (this.itemsArray.length == 0) {
                    this.disableEquipBtn(false);
                    this.moveHolderToOffset(0);
                }
                else {
                    if (this.itemsArray.length < 21) {
                        this.moveHolderToOffset(0, true);
                    }
                    else {
                        this.moveHolderToOffset(newOffset, true);
                    }
                }
            };
            PockeyInventoryMenu.prototype.handleInventoryButtons = function () {
                var _this = this;
                this.nextColumnBtn = new UserInterface.InventoryItemsHolderButton(document.getElementById("ItemsNextButton"));
                this.nextColumnBtn.button.onclick = function () {
                    if (_this.nextColumnBtn.button.getAttribute("isActive") == "true") {
                        if (_this.columnWidth == 0) {
                            _this.columnWidth = _this.boxesHolder.scrollWidth / _this.boxesHolder.children.length;
                        }
                        var currentRightPos = _this.boxesHolder.style.right;
                        currentRightPos = currentRightPos.replace("px", "");
                        var newOffset = +currentRightPos + _this.columnWidth * 2;
                        _this.moveHolderToOffset(newOffset);
                    }
                };
                this.prevColumnBtn = new UserInterface.InventoryItemsHolderButton(document.getElementById("ItemsPrevButton"));
                this.prevColumnBtn.button.onclick = function () {
                    if (_this.prevColumnBtn.button.getAttribute("isActive") == "true") {
                        if (_this.columnWidth == 0) {
                            _this.columnWidth = _this.boxesHolder.scrollWidth / _this.boxesHolder.children.length;
                        }
                        var currentRightPos = _this.boxesHolder.style.right;
                        currentRightPos = currentRightPos.replace("px", "");
                        var newOffset = +currentRightPos - _this.columnWidth * 2;
                        _this.moveHolderToOffset(newOffset);
                    }
                };
                this.inventoryButtonsHolder = document.getElementById("InventoryButtonsHolder");
                this.inventoryButtons = [];
                var inventoryButton;
                _.forEach(this.inventoryButtonsHolder.children, function (button) {
                    if (button.className == "inventoryButton") {
                        if (Settings.isMobile)
                            inventoryButton = new UserInterface.InventoryButtonMobile(button, _this.showCategory.bind(_this), _this.hideCategory.bind(_this));
                        else
                            inventoryButton = new UserInterface.InventoryButton(button, _this.showCategory.bind(_this), _this.hideCategory.bind(_this));
                        _this.inventoryButtons.push(inventoryButton);
                    }
                });
                this.equipBtn = document.getElementById("EquipButtonHolder");
                this.equipBtn.style.opacity = "0.5";
                this.equipBtn.setAttribute('clicked', 'false');
                this.equipBtn.onclick = function () {
                    if (_this.equipBtn.getAttribute("enabled") == "true") {
                        switch (_this.currentActiveItem.category) {
                            case "AVATARS": {
                                Pockey.PockeySettings.PLAYER_AVATAR_ID = _this.currentActiveItem.id;
                                SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
                                _this.checkIfCurrentItemCanBeUsed();
                                var dbObject = {
                                    userID: Pockey.PockeySettings.PLAYER_ID,
                                    column: "avatar",
                                    value: Pockey.PockeySettings.PLAYER_AVATAR_ID
                                };
                                DatabaseConnector.updateUserData(dbObject, null);
                                return;
                            }
                            case "CUES": {
                                Pockey.PockeySettings.PLAYER_CUE_ID = _this.currentActiveItem.id;
                                SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
                                _this.checkIfCurrentItemCanBeUsed();
                                var dbObject = {
                                    userID: Pockey.PockeySettings.PLAYER_ID,
                                    column: "stick",
                                    value: Pockey.PockeySettings.PLAYER_CUE_ID
                                };
                                DatabaseConnector.updateUserData(dbObject, null);
                                return;
                            }
                            case "DECALS": {
                                Pockey.PockeySettings.PLAYER_DECAL_ID = _this.currentActiveItem.id;
                                SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
                                _this.checkIfCurrentItemCanBeUsed();
                                var dbObject = {
                                    userID: Pockey.PockeySettings.PLAYER_ID,
                                    column: "decal",
                                    value: Pockey.PockeySettings.PLAYER_DECAL_ID
                                };
                                DatabaseConnector.updateUserData(dbObject, null);
                                return;
                            }
                            case "GOALIES": {
                                return;
                            }
                            case "MISC": {
                                _this.checkIfCurrentItemCanBeUsed();
                                return;
                            }
                        }
                    }
                    console.log("equip: " + _this.equipBtn.getAttribute('clicked'));
                };
            };
            PockeyInventoryMenu.prototype.moveHolderToOffset = function (offset, fast) {
                this.offsetLimit = this.boxesHolder.offsetWidth;
                if (offset > this.boxesHolder.scrollWidth - this.boxesHolder.offsetWidth) {
                    console.log("cazul 1: " + offset, this.boxesHolder.scrollWidth, this.boxesHolder.offsetWidth);
                    offset = this.boxesHolder.scrollWidth - this.boxesHolder.offsetWidth;
                    if (offset != 0) {
                        this.boxesHolderWrapper.classList.remove("inventoryMask");
                        this.boxesHolderWrapper.classList.remove("inventoryRightSideMask");
                        this.boxesHolderWrapper.classList.add("inventoryLeftSideMask");
                        this.nextColumnBtn.disable();
                        this.prevColumnBtn.enable();
                    }
                }
                else if (offset <= 0) {
                    offset = 0;
                    this.boxesHolderWrapper.classList.remove("inventoryMask");
                    this.boxesHolderWrapper.classList.remove("inventoryLeftSideMask");
                    this.boxesHolderWrapper.classList.add("inventoryRightSideMask");
                    this.nextColumnBtn.enable();
                    this.prevColumnBtn.disable();
                    console.log("cazul 2");
                }
                else {
                    this.boxesHolderWrapper.classList.remove("inventoryLeftSideMask");
                    this.boxesHolderWrapper.classList.remove("inventoryRightSideMask");
                    this.boxesHolderWrapper.classList.add("inventoryMask");
                    this.nextColumnBtn.enable();
                    this.prevColumnBtn.enable();
                    console.log("cazul 3");
                }
                if (this.itemsArray.length == 0) {
                    this.nextColumnBtn.disable();
                    this.prevColumnBtn.disable();
                }
                if (this.holderTween && this.holderTween.isActive()) {
                    this.holderTween.kill();
                }
                var tweenTime = 0.2;
                if (fast)
                    tweenTime = 0;
                this.holderTween = TweenMax.to(this.boxesHolder, tweenTime, { css: { "right": offset.toString() + "px" } });
            };
            PockeyInventoryMenu.prototype.updateBoxes = function (itemsToBeDisplayed, categoryToAnimate) {
                var _this = this;
                var maxLength = (this.boxes.length <= itemsToBeDisplayed.length) ? this.boxes.length : itemsToBeDisplayed.length;
                _.forEach(this.boxes, function (box) {
                    box.clearVO();
                });
                _.forEach(_.range(maxLength), function (counter) {
                    _this.boxes[counter].addVO(itemsToBeDisplayed[counter]);
                    if (_this.currentActiveItem && _this.boxes[counter].inventoryVO.id == _this.currentActiveItem.id) {
                        _this.boxes[counter].click();
                    }
                    else {
                        _this.boxes[counter].unClick();
                    }
                    if (_this.boxes[counter].inventoryVO.level > Pockey.PockeySettings.PLAYER_LEVEL) {
                        _this.boxes[counter].iconDiv.querySelector(".inventoryItemBoxLocked").style.display = "block";
                    }
                    else {
                        _this.boxes[counter].iconDiv.querySelector(".inventoryItemBoxLocked").style.display = "";
                    }
                    if (categoryToAnimate && _this.boxes[counter].inventoryVO.category.toUpperCase() == categoryToAnimate.toUpperCase()) {
                        _this.boxes[counter].animate();
                    }
                    if (_this.boxes[counter].inventoryVO.id == Pockey.PockeySettings.PLAYER_AVATAR_ID
                        || _this.boxes[counter].inventoryVO.id == Pockey.PockeySettings.PLAYER_DECAL_ID
                        || _this.boxes[counter].inventoryVO.id == Pockey.PockeySettings.PLAYER_CUE_ID) {
                        _this.boxes[counter].iconDiv.querySelector(".inventoryItemBoxSelected").style.display = "block";
                    }
                    else {
                        _this.boxes[counter].iconDiv.querySelector(".inventoryItemBoxSelected").style.display = "";
                    }
                });
            };
            PockeyInventoryMenu.prototype.showItemDescription = function (inventoryVO) {
                this.bigAvatar.style.background = "center / contain no-repeat #062f38 url(" + inventoryVO.icon + ")";
                this.itemNameDiv.innerHTML = inventoryVO.id;
                _.forEach(this.boxes, function (box) {
                    if (box.occupied) {
                        if (box.inventoryVO.id != inventoryVO.id) {
                            box.unClick();
                        }
                    }
                });
                this.currentActiveItem = inventoryVO;
                this.checkIfCurrentItemCanBeUsed();
            };
            PockeyInventoryMenu.prototype.checkIfCurrentItemCanBeUsed = function () {
                if (this.currentActiveItem.level > Pockey.PockeySettings.PLAYER_LEVEL) {
                    this.disableEquipBtn(false);
                    return;
                }
                switch (this.currentActiveItem.category) {
                    case "AVATARS": {
                        if (Pockey.PockeySettings.PLAYER_AVATAR_ID != this.currentActiveItem.id) {
                            this.enableEquipBtn();
                        }
                        else {
                            this.disableEquipBtn();
                        }
                        return;
                    }
                    case "CUES": {
                        if (Pockey.PockeySettings.PLAYER_CUE_ID != this.currentActiveItem.id) {
                            this.enableEquipBtn();
                        }
                        else {
                            this.disableEquipBtn();
                        }
                        return;
                    }
                    case "DECALS": {
                        if (Pockey.PockeySettings.PLAYER_DECAL_ID != this.currentActiveItem.id) {
                            this.enableEquipBtn();
                        }
                        else {
                            this.disableEquipBtn();
                        }
                        return;
                    }
                    case "GOALIES": {
                        return;
                    }
                    case "MISC": {
                        return;
                    }
                }
            };
            PockeyInventoryMenu.prototype.enableEquipBtn = function () {
                this.equipBtn.setAttribute("enabled", "true");
                this.equipBtn.style.opacity = "1";
                this.equipBtn.querySelector(".normalButtonBackground").innerHTML = "EQUIP";
                this.equipBtn.style.cursor = "pointer";
            };
            PockeyInventoryMenu.prototype.disableEquipBtn = function (changeText) {
                if (changeText === void 0) { changeText = true; }
                this.equipBtn.setAttribute("enabled", "false");
                this.equipBtn.style.opacity = "0.5";
                if (changeText)
                    this.equipBtn.querySelector(".normalButtonBackground").innerHTML = "EQUIPPED";
                else {
                    this.equipBtn.querySelector(".normalButtonBackground").innerHTML = "EQUIP";
                }
                this.equipBtn.style.cursor = "";
            };
            PockeyInventoryMenu.prototype.resetItemDescription = function () {
                this.bigAvatar.style.background = "center / contain no-repeat #062f38 url('')";
                this.itemNameDiv.innerHTML = "Item Name";
            };
            return PockeyInventoryMenu;
        }());
        UserInterface.PockeyInventoryMenu = PockeyInventoryMenu;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var UserInterface;
    (function (UserInterface) {
        var PockeyUiMainScreen = (function () {
            function PockeyUiMainScreen() {
                this.defineElements();
            }
            PockeyUiMainScreen.prototype.defineElements = function () {
                var _this = this;
                this.loginMenu = document.getElementById("LoginScreen");
                this.playGameMenu = new UserInterface.PlayGameMenu();
                this.inventoryMenu = new UserInterface.PockeyInventoryMenu();
                this.leftSideLoginMenu = document.getElementById("LeftSide");
                this.leaderboardMenu = document.getElementById("LeaderBoardScreen");
                this.hideElement(this.leaderboardMenu);
                this.inviteMenu = document.getElementById("InviteElementsHolder");
                this.hideElement(this.inviteMenu);
                this.tutorialAndShareButtonsMenu = document.getElementById("TutorialAndShareButtonsHolder");
                this.inventoryScreen = document.getElementById("InventoryScreen");
                this.hideElement(this.inventoryScreen);
                this.mainMenuElementsHolder = document.getElementById("MainMenuElementsHolder");
                this.mainMenuButtons = [];
                this.playGameButton = document.getElementById("PlayGameButton");
                this.mainMenuButtons.push(this.playGameButton);
                this.inventoryButton = document.getElementById("InventoryButton");
                this.mainMenuButtons.push(this.inventoryButton);
                this.inviteFriendButton = document.getElementById("InviteFriendsButton");
                this.mainMenuButtons.push(this.inviteFriendButton);
                this.leaderboardButton = document.getElementById("LeaderboardButton");
                this.mainMenuButtons.push(this.leaderboardButton);
                _.forEach(this.mainMenuButtons, function (element) {
                    element.setAttribute('clicked', 'false');
                    element.onclick = function () {
                        element.setAttribute("clicked", "true");
                        _this.setMainButtonStyleOnClick(element);
                        switch (element.id) {
                            case _this.playGameButton.id: {
                                _this.showPlayGameMenu();
                                break;
                            }
                            case _this.inventoryButton.id: {
                                _this.showInventoryMenu();
                                break;
                            }
                            case _this.inviteFriendButton.id: {
                                _this.showInviteMenu();
                                break;
                            }
                            case _this.leaderboardButton.id: {
                                _this.showLeaderboardMenu();
                                break;
                            }
                        }
                        _.forEach(_this.mainMenuButtons, function (otherElement) {
                            if (otherElement != element) {
                                otherElement.setAttribute("clicked", "false");
                                _this.resetMainButtonStyleOnClick(otherElement);
                            }
                        });
                    };
                });
            };
            PockeyUiMainScreen.prototype.showElement = function (element) {
                element.style.display = "flex";
            };
            PockeyUiMainScreen.prototype.hideElement = function (element) {
                element.style.display = "none";
            };
            PockeyUiMainScreen.prototype.showPlayGameMenu = function () {
                console.log("intra la show play");
                this.showElement(this.loginMenu);
                this.showElement(this.tutorialAndShareButtonsMenu);
                this.hideElement(this.inventoryScreen);
                this.hideElement(this.leaderboardMenu);
                this.hideElement(this.inviteMenu);
            };
            PockeyUiMainScreen.prototype.showInventoryMenu = function () {
                console.log("intra la show inventory");
                this.hideElement(this.loginMenu);
                this.hideElement(this.leaderboardMenu);
                this.showElement(this.inventoryScreen);
            };
            PockeyUiMainScreen.prototype.showLeaderboardMenu = function () {
                console.log("intra la show leaderboard");
                this.hideElement(this.loginMenu);
                this.hideElement(this.inventoryScreen);
                this.showElement(this.leaderboardMenu);
            };
            PockeyUiMainScreen.prototype.showInviteMenu = function () {
                console.log("intra la show invite");
                this.showElement(this.loginMenu);
                this.showElement(this.inviteMenu);
                this.hideElement(this.tutorialAndShareButtonsMenu);
                this.hideElement(this.leaderboardMenu);
                this.hideElement(this.inventoryScreen);
            };
            PockeyUiMainScreen.prototype.setMainButtonStyleOnClick = function (element) {
                element.classList.add('simpleBtnOnClick');
                var arrowDiv = element.querySelector('.simpleBtnArrow');
                arrowDiv.classList.add('simpleBtnArrowOnClick');
                var btnHighlight = element.querySelector('.simpleBtnHighlight');
                btnHighlight.classList.add('simpleBtnHighlightOnClick');
            };
            PockeyUiMainScreen.prototype.resetMainButtonStyleOnClick = function (element) {
                element.classList.remove('simpleBtnOnClick');
                var arrowDiv = element.querySelector('.simpleBtnArrow');
                arrowDiv.classList.remove('simpleBtnArrowOnClick');
                var btnHighlight = element.querySelector('.simpleBtnHighlight');
                btnHighlight.classList.remove('simpleBtnHighlightOnClick');
            };
            PockeyUiMainScreen.prototype.setVisibleTrue = function () {
                this.mainMenuElementsHolder.style.display = "block";
            };
            PockeyUiMainScreen.prototype.setVisibleFalse = function () {
                this.mainMenuElementsHolder.style.display = "none";
            };
            return PockeyUiMainScreen;
        }());
        UserInterface.PockeyUiMainScreen = PockeyUiMainScreen;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var UserInterface;
    (function (UserInterface) {
        var Sprite = PIXI.Sprite;
        var Graphics = PIXI.Graphics;
        var PockeyUiInGameAvatar = (function (_super) {
            __extends(PockeyUiInGameAvatar, _super);
            function PockeyUiInGameAvatar() {
                var _this = _super.call(this) || this;
                _this.rectangleSize = 92;
                _this.borderSpacing = 3;
                var firstRect = new Graphics();
                firstRect.beginFill(0x000000, 0.7);
                firstRect.drawRoundedRect(0, 0, _this.rectangleSize, _this.rectangleSize, _this.borderSpacing * 2);
                _this.addChild(firstRect);
                var secondRect = new Graphics();
                secondRect.beginFill(0xffffff);
                secondRect.drawRoundedRect(0, 0, _this.rectangleSize - _this.borderSpacing, _this.rectangleSize - 2, 4);
                secondRect.x = firstRect.x + firstRect.width / 2 - secondRect.width / 2;
                _this.addChild(secondRect);
                var thirdRect = new Graphics();
                thirdRect.beginFill(0x1a4157);
                thirdRect.drawRoundedRect(0, 0, secondRect.width - _this.borderSpacing * 2, secondRect.height - _this.borderSpacing * 2, 4);
                thirdRect.x = secondRect.x + secondRect.width / 2 - thirdRect.width / 2;
                thirdRect.y = secondRect.y + secondRect.height / 2 - thirdRect.height / 2;
                _this.addChild(thirdRect);
                var avatarPath = "";
                _.forEach(Pockey.PockeySettings.LARGE_AVATARS_ARRAY, function (avatar, counter) {
                    if (avatar.id == Pockey.PockeySettings.PLAYER_AVATAR_ID) {
                        avatarPath = avatar.icon;
                        return true;
                    }
                });
                _this.avatarImage = new Sprite(PIXI.Texture.fromImage(avatarPath));
                _this.avatarImage.width = _this.avatarImage.height = thirdRect.width;
                _this.avatarImage.x = thirdRect.x;
                _this.avatarImage.y = thirdRect.y;
                _this.addChild(_this.avatarImage);
                return _this;
            }
            PockeyUiInGameAvatar.prototype.updateAvatarImage = function (avatarID) {
                console.log("on change avatar la game screen: " + avatarID);
                var avatarPath = "";
                _.forEach(Pockey.PockeySettings.LARGE_AVATARS_ARRAY, function (avatar, counter) {
                    if (avatar.id == avatarID) {
                        avatarPath = avatar.icon;
                        return true;
                    }
                });
                this.avatarImage.texture = PIXI.Texture.fromImage(avatarPath);
            };
            return PockeyUiInGameAvatar;
        }(Container));
        UserInterface.PockeyUiInGameAvatar = PockeyUiInGameAvatar;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var UserInterface;
    (function (UserInterface) {
        var Graphics = PIXI.Graphics;
        var PockeyLifeBar = (function (_super) {
            __extends(PockeyLifeBar, _super);
            function PockeyLifeBar() {
                var _this = _super.call(this) || this;
                _this.playerLifeGraphicsWidth = 256;
                _this.playerLifeGraphicsHeight = 28;
                _this.createLifeBar();
                return _this;
            }
            PockeyLifeBar.prototype.createLifeBar = function () {
                var _this = this;
                var spacing = 3;
                var firstRect = new Graphics();
                firstRect.beginFill(0x000000, 0.7);
                firstRect.drawRoundedRect(0, 0, this.playerLifeGraphicsWidth, this.playerLifeGraphicsHeight, spacing * 2);
                this.addChild(firstRect);
                var secondRect = new Graphics();
                secondRect.beginFill(0xffffff);
                secondRect.drawRoundedRect(0, 0, this.playerLifeGraphicsWidth - spacing, this.playerLifeGraphicsHeight - 2, 4);
                secondRect.x = firstRect.x + firstRect.width / 2 - secondRect.width / 2;
                this.addChild(secondRect);
                var thirdRect = new Graphics();
                thirdRect.beginFill(0x000000);
                thirdRect.drawRoundedRect(0, 0, secondRect.width - spacing * 2, secondRect.height - spacing * 2, 4);
                thirdRect.x = secondRect.x + secondRect.width / 2 - thirdRect.width / 2;
                thirdRect.y = secondRect.y + secondRect.height / 2 - thirdRect.height / 2;
                this.addChild(thirdRect);
                var remainingWidth = thirdRect.width - 8 * (spacing + 1);
                var unitWidth = remainingWidth / 7;
                var unitHeight = thirdRect.height - 2 * (spacing + 1);
                var unitY = thirdRect.y + thirdRect.height / 2 - unitHeight / 2;
                var unitStartX = thirdRect.x + spacing + 1;
                this.lifeUnits = [];
                _.forEach(_.range(0, 7), function (counter) {
                    var lifeUnit = new Graphics();
                    lifeUnit.beginFill(0xffffff);
                    lifeUnit.drawRoundedRect(0, 0, unitWidth, unitHeight, 2);
                    lifeUnit.x = unitStartX + counter * (unitWidth + spacing + 1);
                    lifeUnit.y = unitY;
                    _this.addChild(lifeUnit);
                    _this.lifeUnits.push(lifeUnit);
                });
            };
            return PockeyLifeBar;
        }(Container));
        UserInterface.PockeyLifeBar = PockeyLifeBar;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var UserInterface;
    (function (UserInterface) {
        var TextField = Framework.utils.TextField;
        var PockeyUserGameGraphics = (function (_super) {
            __extends(PockeyUserGameGraphics, _super);
            function PockeyUserGameGraphics(side) {
                var _this = _super.call(this) || this;
                _this.side = side;
                var style = new PIXI.TextStyle({
                    fontFamily: 'troika',
                    fontSize: 22,
                    fill: 0xffffff,
                    stroke: '#ffffff',
                    dropShadow: true,
                    dropShadowColor: '#000000',
                    dropShadowBlur: 1,
                    dropShadowAngle: Math.PI / 3,
                    dropShadowDistance: 10,
                });
                var timerTextStyle = style.clone();
                timerTextStyle.fontSize = 28;
                _this.userAvatar = new UserInterface.PockeyUiInGameAvatar();
                _this.userLifeBar = new UserInterface.PockeyLifeBar();
                _this.timerText = new TextField("0:" + Pockey.PockeySettings.ROUND_DURATION_IN_SECONDS.toString(), timerTextStyle);
                _this.timerText.visible = false;
                if (_this.side == "left") {
                    _this.userNameTextField = new TextField("Player", style);
                    _this.userLifeBar.x = _this.userAvatar.width + 76;
                    _this.userNameTextField.x = _this.userLifeBar.x;
                }
                else {
                    _this.userNameTextField = new TextField("Opponent", style);
                    _this.userAvatar.x = _this.userLifeBar.width + 76;
                    _this.userNameTextField.x = _this.userLifeBar.width - _this.userNameTextField.width;
                }
                _this.timerText.x = _this.userAvatar.x + _this.userAvatar.width / 2 - _this.timerText.width / 2;
                _this.userLifeBar.y = _this.userAvatar.height - _this.userLifeBar.height;
                _this.userNameTextField.y = _this.userLifeBar.y - _this.userNameTextField.height + 4;
                _this.timerText.y = _this.userAvatar.y + _this.userAvatar.height - 1 - _this.timerText.height;
                _this.addChild(_this.userAvatar);
                _this.addChild(_this.userLifeBar);
                _this.addChild(_this.userNameTextField);
                _this.addChild(_this.timerText);
                return _this;
            }
            PockeyUserGameGraphics.prototype.resetTimer = function () {
                this.timerText.visible = false;
                this.timerText.style.fill = 0xffffff;
                this.timerText.setText("0:" + Pockey.PockeySettings.ROUND_DURATION_IN_SECONDS.toString());
            };
            PockeyUserGameGraphics.prototype.updateTimer = function (timeText) {
                if (timeText == "") {
                    this.resetTimer();
                }
                else {
                    this.timerText.visible = true;
                    this.timerText.style.fill = 0xffffff;
                    this.timerText.setText(timeText);
                    this.timerText.x = 2 + this.userAvatar.x + this.userAvatar.width / 2 - this.timerText.width / 2;
                }
            };
            PockeyUserGameGraphics.prototype.updateUsername = function (text) {
                this.userNameTextField.setText(text);
                if (this.side == "right") {
                    this.userNameTextField.x = this.userLifeBar.width - this.userNameTextField.width;
                }
            };
            PockeyUserGameGraphics.prototype.reset = function () {
                _.forEach(this.userLifeBar.lifeUnits, function (lifeUnit, id) {
                    lifeUnit.alpha = 1;
                });
            };
            PockeyUserGameGraphics.prototype.updateScore = function (score) {
                var _this = this;
                _.forEach(this.userLifeBar.lifeUnits, function (lifeUnit, id) {
                    if (_this.side == "left") {
                        if (id >= score) {
                            lifeUnit.alpha = 0.5;
                        }
                    }
                    else {
                        if (id < 7 - score) {
                            lifeUnit.alpha = 0.5;
                        }
                    }
                });
            };
            PockeyUserGameGraphics.prototype.tint = function (color) {
                _.forEach(this.userLifeBar.lifeUnits, function (lifeUnit, id) {
                    lifeUnit.tint = color;
                });
                this.userNameTextField.tint = color;
            };
            PockeyUserGameGraphics.prototype.updateAvatar = function (avatar) {
                this.userAvatar.updateAvatarImage(avatar);
            };
            PockeyUserGameGraphics.prototype.setTimerColor = function (tintColor) {
                if (this.timerText.style.fill = tintColor) {
                    return;
                }
                else {
                    this.timerText.style.fill = tintColor;
                }
            };
            PockeyUserGameGraphics.prototype.animateTimer = function () {
                this.setTimerColor(0xFF0000);
            };
            return PockeyUserGameGraphics;
        }(Container));
        UserInterface.PockeyUserGameGraphics = PockeyUserGameGraphics;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var UserInterface;
    (function (UserInterface) {
        var Graphics = PIXI.Graphics;
        var PockeyUiMatchCircle = (function (_super) {
            __extends(PockeyUiMatchCircle, _super);
            function PockeyUiMatchCircle() {
                var _this = _super.call(this) || this;
                _this.createMatchCircle();
                return _this;
            }
            PockeyUiMatchCircle.prototype.createMatchCircle = function () {
                this.firstCircleGraphics = new Graphics();
                this.firstCircleGraphics.lineStyle(5, 0xffffff);
                this.firstCircleGraphics.tint = 0x639db5;
                this.firstCircleGraphics.drawCircle(0, 0, 12);
                this.addChild(this.firstCircleGraphics);
                this.secondCircleGraphics = new Graphics();
                this.secondCircleGraphics.beginFill(0xffffff);
                this.secondCircleGraphics.tint = 0x426d7e;
                this.secondCircleGraphics.drawCircle(0, 0, 6);
                this.secondCircleGraphics.endFill();
                this.addChild(this.secondCircleGraphics);
            };
            PockeyUiMatchCircle.prototype.activate = function (color) {
                this.firstCircleGraphics.tint = 0xffffff;
                this.secondCircleGraphics.tint = color;
            };
            PockeyUiMatchCircle.prototype.reset = function (color) {
                this.secondCircleGraphics.tint = 0x426d7e;
                this.firstCircleGraphics.tint = 0x639db5;
            };
            return PockeyUiMatchCircle;
        }(Container));
        UserInterface.PockeyUiMatchCircle = PockeyUiMatchCircle;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var UserInterface;
    (function (UserInterface) {
        var Sprite = PIXI.Sprite;
        var Settings = Framework.Settings;
        var PockeyUiVersusGraphics = (function (_super) {
            __extends(PockeyUiVersusGraphics, _super);
            function PockeyUiVersusGraphics() {
                var _this = _super.call(this) || this;
                _this.versusGraphics = new Sprite(PIXI.Texture.fromFrame("vs.png"));
                _this.addChild(_this.versusGraphics);
                if (Settings.isMobile) {
                }
                _this.leftSideMatchCirclesContainer = new Container();
                _this.addChild(_this.leftSideMatchCirclesContainer);
                _this.leftSideMatchCircles = [];
                _this.rightSideMatchCirclesContainer = new Container();
                _this.addChild(_this.rightSideMatchCirclesContainer);
                _this.rightSideMatchCircles = [];
                var circle1 = new UserInterface.PockeyUiMatchCircle();
                var circle2 = new UserInterface.PockeyUiMatchCircle();
                circle1.x = circle2.width + 10;
                _this.leftSideMatchCirclesContainer.addChild(circle1);
                _this.leftSideMatchCirclesContainer.addChild(circle2);
                _this.leftSideMatchCirclesContainer.y = _this.versusGraphics.height / 2 + 6;
                _this.leftSideMatchCirclesContainer.x = circle1.width;
                _this.leftSideMatchCircles.push(circle1);
                _this.leftSideMatchCircles.push(circle2);
                var circle3 = new UserInterface.PockeyUiMatchCircle();
                var circle4 = new UserInterface.PockeyUiMatchCircle();
                circle4.x = circle3.width + 10;
                _this.rightSideMatchCirclesContainer.addChild(circle3);
                _this.rightSideMatchCirclesContainer.addChild(circle4);
                _this.rightSideMatchCirclesContainer.y = _this.leftSideMatchCirclesContainer.y;
                _this.rightSideMatchCirclesContainer.x = _this.versusGraphics.width - _this.rightSideMatchCirclesContainer.width + 2;
                _this.rightSideMatchCircles.push(circle3);
                _this.rightSideMatchCircles.push(circle4);
                return _this;
            }
            return PockeyUiVersusGraphics;
        }(Container));
        UserInterface.PockeyUiVersusGraphics = PockeyUiVersusGraphics;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Framework;
(function (Framework) {
    var Utils;
    (function (Utils) {
        Utils.INTERACTION_EVENTS = [
            "pointerover",
            "pointerenter",
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointercancel",
            "pointerout",
            "pointerleave",
            "gotpointercapture",
            "lostpointercapture",
            "mouseover",
            "mouseenter",
            "mousedown",
            "mousemove",
            "mouseup",
            "mousecancel",
            "mouseout",
            "mouseleave",
            "touchover",
            "touchenter",
            "touchdown",
            "touchmove",
            "touchup",
            "touchcancel",
            "touchout",
            "touchleave"
        ];
        var MultiStyleText = (function (_super) {
            __extends(MultiStyleText, _super);
            function MultiStyleText(text, styles) {
                var _this = _super.call(this, text) || this;
                _this.styles = styles;
                Utils.INTERACTION_EVENTS.forEach(function (event) {
                    _this.on(event, function (e) { return _this.handleInteraction(e); });
                });
                return _this;
            }
            MultiStyleText.prototype.handleInteraction = function (e) {
                var ev = e;
                var localPoint = e.data.getLocalPosition(this);
                var targetTag = this.hitboxes.reduce(function (prev, hitbox) { return prev !== undefined ? prev : (hitbox.hitbox.contains(localPoint.x, localPoint.y) ? hitbox : undefined); }, undefined);
                ev.targetTag = targetTag === undefined ? undefined : targetTag.tag;
            };
            Object.defineProperty(MultiStyleText.prototype, "styles", {
                set: function (styles) {
                    this.textStyles = {};
                    this.textStyles["default"] = this.assign({}, MultiStyleText.DEFAULT_TAG_STYLE);
                    for (var style in styles) {
                        if (style === "default") {
                            this.assign(this.textStyles["default"], styles[style]);
                        }
                        else {
                            this.textStyles[style] = this.assign({}, styles[style]);
                        }
                    }
                    this._style = new PIXI.TextStyle(this.textStyles["default"]);
                    this.dirty = true;
                },
                enumerable: true,
                configurable: true
            });
            MultiStyleText.prototype.setStyle = function (style) {
                this.scale.x = 1;
                this.scale.y = 1;
                if (style && !_.isUndefined(style.fontSize) && !_.isNull(style.fontSize)) {
                    var fontSize = +style.fontSize;
                    fontSize *= 2;
                    style.fontSize = fontSize;
                }
            };
            MultiStyleText.prototype.setTagStyle = function (tag, style) {
                if (tag in this.textStyles) {
                    this.assign(this.textStyles[tag], style);
                }
                else {
                    this.textStyles[tag] = this.assign({}, style);
                }
                this._style = new PIXI.TextStyle(this.textStyles["default"]);
                this.dirty = true;
            };
            MultiStyleText.prototype.deleteTagStyle = function (tag) {
                if (tag === "default") {
                    this.textStyles["default"] = this.assign({}, MultiStyleText.DEFAULT_TAG_STYLE);
                }
                else {
                    delete this.textStyles[tag];
                }
                this._style = new PIXI.TextStyle(this.textStyles["default"]);
                this.dirty = true;
            };
            MultiStyleText.prototype.getTagRegex = function (captureName, captureMatch) {
                var tagAlternation = Object.keys(this.textStyles).join("|");
                if (captureName) {
                    tagAlternation = "(" + tagAlternation + ")";
                }
                else {
                    tagAlternation = "(?:" + tagAlternation + ")";
                }
                var reStr = "<" + tagAlternation + "(?:\\s+[A-Za-z0-9_\\-]+=(?:\"(?:[^\"]+|\\\\\")*\"|'(?:[^']+|\\\\')*'))*\\s*>|</" + tagAlternation + "\\s*>";
                if (captureMatch) {
                    reStr = "(" + reStr + ")";
                }
                return new RegExp(reStr, "g");
            };
            MultiStyleText.prototype.getPropertyRegex = function () {
                return new RegExp("([A-Za-z0-9_\\-]+)=(?:\"((?:[^\"]+|\\\\\")*)\"|'((?:[^']+|\\\\')*)')", "g");
            };
            MultiStyleText.prototype._getTextDataPerLine = function (lines) {
                var outputTextData = [];
                var re = this.getTagRegex(true, false);
                var styleStack = [this.assign({}, this.textStyles["default"])];
                var tagStack = [{ name: "default", properties: {} }];
                for (var i = 0; i < lines.length; i++) {
                    var lineTextData = [];
                    var matches = [];
                    var matchArray = void 0;
                    while (matchArray = re.exec(lines[i])) {
                        matches.push(matchArray);
                    }
                    if (matches.length === 0) {
                        lineTextData.push(this.createTextData(lines[i], styleStack[styleStack.length - 1], tagStack[tagStack.length - 1]));
                    }
                    else {
                        var currentSearchIdx = 0;
                        for (var j = 0; j < matches.length; j++) {
                            if (matches[j].index > currentSearchIdx) {
                                lineTextData.push(this.createTextData(lines[i].substring(currentSearchIdx, matches[j].index), styleStack[styleStack.length - 1], tagStack[tagStack.length - 1]));
                            }
                            if (matches[j][0][1] === "/") {
                                if (styleStack.length > 1) {
                                    styleStack.pop();
                                    tagStack.pop();
                                }
                            }
                            else {
                                styleStack.push(this.assign({}, styleStack[styleStack.length - 1], this.textStyles[matches[j][1]]));
                                var properties = {};
                                var propertyRegex = this.getPropertyRegex();
                                var propertyMatch = void 0;
                                while (propertyMatch = propertyRegex.exec(matches[j][0])) {
                                    properties[propertyMatch[1]] = propertyMatch[2] || propertyMatch[3];
                                }
                                tagStack.push({ name: matches[j][1], properties: properties });
                            }
                            currentSearchIdx = matches[j].index + matches[j][0].length;
                        }
                        if (currentSearchIdx < lines[i].length) {
                            lineTextData.push(this.createTextData(lines[i].substring(currentSearchIdx), styleStack[styleStack.length - 1], tagStack[tagStack.length - 1]));
                        }
                    }
                    outputTextData.push(lineTextData);
                }
                return outputTextData;
            };
            MultiStyleText.prototype.getFontString = function (style) {
                return new PIXI.TextStyle(style).toFontString();
            };
            MultiStyleText.prototype.createTextData = function (text, style, tag) {
                return {
                    text: text,
                    style: style,
                    width: 0,
                    height: 0,
                    fontProperties: undefined,
                    tag: tag
                };
            };
            MultiStyleText.prototype.getDropShadowPadding = function () {
                var _this = this;
                var maxDistance = 0;
                var maxBlur = 0;
                Object.keys(this.textStyles).forEach(function (styleKey) {
                    var _a = _this.textStyles[styleKey], dropShadowDistance = _a.dropShadowDistance, dropShadowBlur = _a.dropShadowBlur;
                    maxDistance = Math.max(maxDistance, dropShadowDistance || 0);
                    maxBlur = Math.max(maxBlur, dropShadowBlur || 0);
                });
                return maxDistance + maxBlur;
            };
            MultiStyleText.prototype.updateText = function () {
                var _this = this;
                if (!this.dirty) {
                    return;
                }
                this.hitboxes = [];
                this.texture.baseTexture.resolution = this.resolution;
                var textStyles = this.textStyles;
                var outputText = this.text;
                if (this._style.wordWrap) {
                    outputText = this.wordWrap(this.text);
                }
                var lines = outputText.split(/(?:\r\n|\r|\n)/);
                var outputTextData = this._getTextDataPerLine(lines);
                var lineWidths = [];
                var lineYMins = [];
                var lineYMaxs = [];
                var baselines = [];
                var maxLineWidth = 0;
                for (var i = 0; i < lines.length; i++) {
                    var lineWidth = 0;
                    var lineYMin = 0;
                    var lineYMax = 0;
                    var baseline = 0;
                    for (var j = 0; j < outputTextData[i].length; j++) {
                        var sty = outputTextData[i][j].style;
                        this.context.font = this.getFontString(sty);
                        outputTextData[i][j].width = this.context.measureText(outputTextData[i][j].text).width;
                        if (outputTextData[i][j].text.length === 0) {
                            outputTextData[i][j].width += (outputTextData[i][j].text.length - 1) * sty.letterSpacing;
                            if (j > 0) {
                                lineWidth += sty.letterSpacing / 2;
                            }
                            if (j < outputTextData[i].length - 1) {
                                lineWidth += sty.letterSpacing / 2;
                            }
                        }
                        lineWidth += outputTextData[i][j].width;
                        outputTextData[i][j].fontProperties = PIXI.TextMetrics.measureFont(this.context.font);
                        outputTextData[i][j].height =
                            outputTextData[i][j].fontProperties.fontSize + outputTextData[i][j].style.strokeThickness;
                        if (typeof sty.valign === "number") {
                            lineYMin = Math.min(lineYMin, sty.valign - outputTextData[i][j].fontProperties.descent);
                            lineYMax = Math.max(lineYMax, sty.valign + outputTextData[i][j].fontProperties.ascent);
                        }
                        else {
                            lineYMin = Math.min(lineYMin, -outputTextData[i][j].fontProperties.descent);
                            lineYMax = Math.max(lineYMax, outputTextData[i][j].fontProperties.ascent);
                        }
                    }
                    lineWidths[i] = lineWidth;
                    lineYMins[i] = lineYMin;
                    lineYMaxs[i] = lineYMax;
                    maxLineWidth = Math.max(maxLineWidth, lineWidth);
                }
                var stylesArray = Object.keys(textStyles).map(function (key) { return textStyles[key]; });
                var maxStrokeThickness = stylesArray.reduce(function (prev, cur) { return Math.max(prev, cur.strokeThickness || 0); }, 0);
                var dropShadowPadding = this.getDropShadowPadding();
                var totalHeight = lineYMaxs.reduce(function (prev, cur) { return prev + cur; }, 0) - lineYMins.reduce(function (prev, cur) { return prev + cur; }, 0);
                var width = maxLineWidth + maxStrokeThickness + 2 * dropShadowPadding;
                var height = totalHeight + 2 * dropShadowPadding;
                this.canvas.width = (width + this.context.lineWidth) * this.resolution;
                this.canvas.height = height * this.resolution;
                this.context.scale(this.resolution, this.resolution);
                this.context.textBaseline = "alphabetic";
                this.context.lineJoin = "round";
                var basePositionY = dropShadowPadding;
                var drawingData = [];
                for (var i = 0; i < outputTextData.length; i++) {
                    var line = outputTextData[i];
                    var linePositionX = void 0;
                    switch (this._style.align) {
                        case "left":
                            linePositionX = dropShadowPadding;
                            break;
                        case "center":
                            linePositionX = dropShadowPadding + (maxLineWidth - lineWidths[i]) / 2;
                            break;
                        case "right":
                            linePositionX = dropShadowPadding + maxLineWidth - lineWidths[i];
                            break;
                    }
                    for (var j = 0; j < line.length; j++) {
                        var _a = line[j], style = _a.style, text = _a.text, fontProperties = _a.fontProperties, width_1 = _a.width, height_1 = _a.height, tag = _a.tag;
                        linePositionX += maxStrokeThickness / 2;
                        var linePositionY = maxStrokeThickness / 2 + basePositionY + fontProperties.ascent;
                        switch (style.valign) {
                            case "top":
                                break;
                            case "baseline":
                                linePositionY += lineYMaxs[i] - fontProperties.ascent;
                                break;
                            case "middle":
                                linePositionY += (lineYMaxs[i] - lineYMins[i] - fontProperties.ascent - fontProperties.descent) / 2;
                                break;
                            case "bottom":
                                linePositionY += lineYMaxs[i] - lineYMins[i] - fontProperties.ascent - fontProperties.descent;
                                break;
                            default:
                                linePositionY += lineYMaxs[i] - fontProperties.ascent - style.valign;
                                break;
                        }
                        if (style.letterSpacing === 0) {
                            drawingData.push({
                                text: text,
                                style: style,
                                x: linePositionX,
                                y: linePositionY,
                                width: width_1,
                                ascent: fontProperties.ascent,
                                descent: fontProperties.descent,
                                tag: tag
                            });
                            linePositionX += line[j].width;
                        }
                        else {
                            this.context.font = this.getFontString(line[j].style);
                            for (var k = 0; k < text.length; k++) {
                                if (k > 0 || j > 0) {
                                    linePositionX += style.letterSpacing / 2;
                                }
                                drawingData.push({
                                    text: text.charAt(k),
                                    style: style,
                                    x: linePositionX,
                                    y: linePositionY,
                                    width: width_1,
                                    ascent: fontProperties.ascent,
                                    descent: fontProperties.descent,
                                    tag: tag
                                });
                                linePositionX += this.context.measureText(text.charAt(k)).width;
                                if (k < text.length - 1 || j < line.length - 1) {
                                    linePositionX += style.letterSpacing / 2;
                                }
                            }
                        }
                        linePositionX -= maxStrokeThickness / 2;
                    }
                    basePositionY += lineYMaxs[i] - lineYMins[i];
                }
                this.context.save();
                drawingData.forEach(function (_a) {
                    var style = _a.style, text = _a.text, x = _a.x, y = _a.y;
                    if (!style.dropShadow) {
                        return;
                    }
                    _this.context.font = _this.getFontString(style);
                    var dropFillStyle = style.dropShadowColor;
                    if (typeof dropFillStyle === "number") {
                        dropFillStyle = PIXI.utils.hex2string(dropFillStyle);
                    }
                    _this.context.shadowColor = dropFillStyle;
                    _this.context.shadowBlur = style.dropShadowBlur;
                    _this.context.shadowOffsetX = Math.cos(style.dropShadowAngle) * style.dropShadowDistance * _this.resolution;
                    _this.context.shadowOffsetY = Math.sin(style.dropShadowAngle) * style.dropShadowDistance * _this.resolution;
                    _this.context.fillText(text, x, y);
                });
                this.context.restore();
                drawingData.forEach(function (_a) {
                    var style = _a.style, text = _a.text, x = _a.x, y = _a.y, width = _a.width, ascent = _a.ascent, descent = _a.descent, tag = _a.tag;
                    _this.context.font = _this.getFontString(style);
                    var strokeStyle = style.stroke;
                    if (typeof strokeStyle === "number") {
                        strokeStyle = PIXI.utils.hex2string(strokeStyle);
                    }
                    _this.context.strokeStyle = strokeStyle;
                    _this.context.lineWidth = style.strokeThickness;
                    var fillStyle = style.fill;
                    if (typeof fillStyle === "number") {
                        fillStyle = PIXI.utils.hex2string(fillStyle);
                    }
                    else if (Array.isArray(fillStyle)) {
                        for (var i = 0; i < fillStyle.length; i++) {
                            var fill = fillStyle[i];
                            if (typeof fill === "number") {
                                fillStyle[i] = PIXI.utils.hex2string(fill);
                            }
                        }
                    }
                    _this.context.fillStyle = _this._generateFillStyle(new PIXI.TextStyle(style), [text]);
                    if (style.stroke && style.strokeThickness) {
                        _this.context.strokeText(text, x, y);
                    }
                    if (style.fill) {
                        _this.context.fillText(text, x, y);
                    }
                    var offset = -_this._style.padding - _this.getDropShadowPadding();
                    _this.hitboxes.push({
                        tag: tag,
                        hitbox: new PIXI.Rectangle(x + offset, y - ascent + offset, width, ascent + descent)
                    });
                    var debugSpan = style.debug === undefined
                        ? MultiStyleText.debugOptions.spans.enabled
                        : style.debug;
                    if (debugSpan) {
                        _this.context.lineWidth = 1;
                        if (MultiStyleText.debugOptions.spans.bounding) {
                            _this.context.fillStyle = MultiStyleText.debugOptions.spans.bounding;
                            _this.context.strokeStyle = MultiStyleText.debugOptions.spans.bounding;
                            _this.context.beginPath();
                            _this.context.rect(x, y - ascent, width, ascent + descent);
                            _this.context.fill();
                            _this.context.stroke();
                            _this.context.stroke();
                        }
                        if (MultiStyleText.debugOptions.spans.baseline) {
                            _this.context.strokeStyle = MultiStyleText.debugOptions.spans.baseline;
                            _this.context.beginPath();
                            _this.context.moveTo(x, y);
                            _this.context.lineTo(x + width, y);
                            _this.context.closePath();
                            _this.context.stroke();
                        }
                        if (MultiStyleText.debugOptions.spans.top) {
                            _this.context.strokeStyle = MultiStyleText.debugOptions.spans.top;
                            _this.context.beginPath();
                            _this.context.moveTo(x, y - ascent);
                            _this.context.lineTo(x + width, y - ascent);
                            _this.context.closePath();
                            _this.context.stroke();
                        }
                        if (MultiStyleText.debugOptions.spans.bottom) {
                            _this.context.strokeStyle = MultiStyleText.debugOptions.spans.bottom;
                            _this.context.beginPath();
                            _this.context.moveTo(x, y + descent);
                            _this.context.lineTo(x + width, y + descent);
                            _this.context.closePath();
                            _this.context.stroke();
                        }
                        if (MultiStyleText.debugOptions.spans.text) {
                            _this.context.fillStyle = "#ffffff";
                            _this.context.strokeStyle = "#000000";
                            _this.context.lineWidth = 2;
                            _this.context.font = "8px monospace";
                            _this.context.strokeText(tag.name, x, y - ascent + 8);
                            _this.context.fillText(tag.name, x, y - ascent + 8);
                            _this.context.strokeText(width.toFixed(2) + "x" + (ascent + descent).toFixed(2), x, y - ascent + 16);
                            _this.context.fillText(width.toFixed(2) + "x" + (ascent + descent).toFixed(2), x, y - ascent + 16);
                        }
                    }
                });
                if (MultiStyleText.debugOptions.objects.enabled) {
                    if (MultiStyleText.debugOptions.objects.bounding) {
                        this.context.fillStyle = MultiStyleText.debugOptions.objects.bounding;
                        this.context.beginPath();
                        this.context.rect(0, 0, width, height);
                        this.context.fill();
                    }
                    if (MultiStyleText.debugOptions.objects.text) {
                        this.context.fillStyle = "#ffffff";
                        this.context.strokeStyle = "#000000";
                        this.context.lineWidth = 2;
                        this.context.font = "8px monospace";
                        this.context.strokeText(width.toFixed(2) + "x" + height.toFixed(2), 0, 8, width);
                        this.context.fillText(width.toFixed(2) + "x" + height.toFixed(2), 0, 8, width);
                    }
                }
                this.updateTexture();
            };
            MultiStyleText.prototype.wordWrap = function (text) {
                var result = "";
                var re = this.getTagRegex(true, true);
                var lines = text.split("\n");
                var wordWrapWidth = this._style.wordWrapWidth;
                var styleStack = [this.assign({}, this.textStyles["default"])];
                this.context.font = this.getFontString(this.textStyles["default"]);
                for (var i = 0; i < lines.length; i++) {
                    var spaceLeft = wordWrapWidth;
                    var tagSplit = lines[i].split(re);
                    var firstWordOfLine = true;
                    for (var j = 0; j < tagSplit.length; j++) {
                        if (re.test(tagSplit[j])) {
                            result += tagSplit[j];
                            if (tagSplit[j][1] === "/") {
                                j += 2;
                                styleStack.pop();
                            }
                            else {
                                j++;
                                styleStack.push(this.assign({}, styleStack[styleStack.length - 1], this.textStyles[tagSplit[j]]));
                                j++;
                            }
                            this.context.font = this.getFontString(styleStack[styleStack.length - 1]);
                        }
                        else {
                            var words = tagSplit[j].split(" ");
                            for (var k = 0; k < words.length; k++) {
                                var wordWidth = this.context.measureText(words[k]).width;
                                if (this._style.breakWords && wordWidth > spaceLeft) {
                                    var characters = words[k].split('');
                                    if (k > 0) {
                                        result += " ";
                                        spaceLeft -= this.context.measureText(" ").width;
                                    }
                                    for (var c = 0; c < characters.length; c++) {
                                        var characterWidth = this.context.measureText(characters[c]).width;
                                        if (characterWidth > spaceLeft) {
                                            result += "\n" + characters[c];
                                            spaceLeft = wordWrapWidth - characterWidth;
                                        }
                                        else {
                                            result += characters[c];
                                            spaceLeft -= characterWidth;
                                        }
                                    }
                                }
                                else if (this._style.breakWords) {
                                    result += words[k];
                                    spaceLeft -= wordWidth;
                                }
                                else {
                                    var paddedWordWidth = wordWidth + (k > 0 ? this.context.measureText(" ").width : 0);
                                    if (paddedWordWidth > spaceLeft) {
                                        if (!firstWordOfLine) {
                                            result += "\n";
                                        }
                                        result += words[k];
                                        spaceLeft = wordWrapWidth - wordWidth;
                                    }
                                    else {
                                        spaceLeft -= paddedWordWidth;
                                        if (k > 0) {
                                            result += " ";
                                        }
                                        result += words[k];
                                    }
                                }
                                firstWordOfLine = false;
                            }
                        }
                    }
                    if (i < lines.length - 1) {
                        result += '\n';
                    }
                }
                return result;
            };
            MultiStyleText.prototype.updateTexture = function () {
                var texture = this._texture;
                var dropShadowPadding = this.getDropShadowPadding();
                texture.baseTexture.hasLoaded = true;
                texture.baseTexture.resolution = this.resolution;
                texture.baseTexture.realWidth = this.canvas.width;
                texture.baseTexture.realHeight = this.canvas.height;
                texture.baseTexture.width = this.canvas.width / this.resolution;
                texture.baseTexture.height = this.canvas.height / this.resolution;
                texture.trim.width = texture.frame.width = this.canvas.width / this.resolution;
                texture.trim.height = texture.frame.height = this.canvas.height / this.resolution;
                texture.trim.x = -this._style.padding - dropShadowPadding;
                texture.trim.y = -this._style.padding - dropShadowPadding;
                texture.orig.width = texture.frame.width - (this._style.padding + dropShadowPadding) * 2;
                texture.orig.height = texture.frame.height - (this._style.padding + dropShadowPadding) * 2;
                this._onTextureUpdate();
                texture.baseTexture.emit('update', texture.baseTexture);
                this.dirty = false;
            };
            MultiStyleText.prototype.assign = function (destination) {
                var sources = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    sources[_i - 1] = arguments[_i];
                }
                for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
                    var source = sources_1[_a];
                    for (var key in source) {
                        destination[key] = source[key];
                    }
                }
                return destination;
            };
            MultiStyleText.DEFAULT_TAG_STYLE = {
                align: "left",
                breakWords: false,
                dropShadow: false,
                dropShadowAngle: Math.PI / 6,
                dropShadowBlur: 0,
                dropShadowColor: "#000000",
                dropShadowDistance: 5,
                fill: "black",
                fillGradientType: PIXI.TEXT_GRADIENT.LINEAR_VERTICAL,
                fontFamily: "Arial",
                fontSize: 26,
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "normal",
                letterSpacing: 0,
                lineHeight: 0,
                lineJoin: "miter",
                miterLimit: 10,
                padding: 0,
                stroke: "black",
                strokeThickness: 0,
                textBaseline: "alphabetic",
                valign: "baseline",
                wordWrap: false,
                wordWrapWidth: 100
            };
            MultiStyleText.debugOptions = {
                spans: {
                    enabled: false,
                    baseline: "#44BB44",
                    top: "#BB4444",
                    bottom: "#4444BB",
                    bounding: "rgba(255, 255, 255, 0.1)",
                    text: true
                },
                objects: {
                    enabled: false,
                    bounding: "rgba(255, 255, 255, 0.05)",
                    text: true
                }
            };
            return MultiStyleText;
        }(PIXI.Text));
        Utils.MultiStyleText = MultiStyleText;
    })(Utils = Framework.Utils || (Framework.Utils = {}));
})(Framework || (Framework = {}));
var Pockey;
(function (Pockey) {
    var UserInterface;
    (function (UserInterface) {
        var BallType = Pockey.GameModule.BallType;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var TextField = Framework.utils.TextField;
        var MultiStyleText = Framework.Utils.MultiStyleText;
        var TextStyle = PIXI.TextStyle;
        var Settings = Framework.Settings;
        var PockeyUiGameScreen = (function (_super) {
            __extends(PockeyUiGameScreen, _super);
            function PockeyUiGameScreen() {
                var _this = _super.call(this) || this;
                _this.tipTextWidth = 934;
                _this.poolTableScaleFactor = 1;
                _this.subscribeToSignals();
                _this.defineTextStyles();
                _this.addElements();
                return _this;
            }
            PockeyUiGameScreen.prototype.subscribeToSignals = function () {
                SignalsManager.AddSignalCallback(PockeySignalTypes.SET_SIDES_TYPE, this.onSetSides.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_PLAYER_NAME, this.onUpdatePlayerName.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_PLAYER_SCORE, this.onUpdatePlayerScore.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_PLAYER_COLOR, this.onChangePlayerColor.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_PLAYER_AVATAR, this.onChangePlayerAvatar.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_OPPONENT_NAME, this.onUpdateOpponentName.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_OPPONENT_SCORE, this.onUpdateOpponentScore.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_OPPONENT_COLOR, this.onChangeOpponentColor.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_OPPONENT_AVATAR, this.onChangeOpponentAvatar.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.RESET_GAME_SCREEN, this.onReset.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, this.onUpdateCurrentPlayerTimer.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_MATCH_CIRCLES, this.onUpdateMatchCircles.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, this.onResizeBackground.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_UI_TEXT, this.onUpdateUIText.bind(this));
            };
            PockeyUiGameScreen.prototype.onUpdateMatchCircles = function (params) {
                var _this = this;
                var leftSideColor;
                var rightSideColor;
                if (this.leftGameGraphics.type == BallType.Player) {
                    leftSideColor = +Pockey.PockeySettings.PLAYER_COLOR_ID;
                    rightSideColor = Pockey.PockeySettings.OPPONENT_COLOR;
                }
                else {
                    leftSideColor = Pockey.PockeySettings.OPPONENT_COLOR;
                    rightSideColor = +Pockey.PockeySettings.PLAYER_COLOR_ID;
                }
                var leftSideMatchesWon = params[0];
                var rightSideMatchesWon = params[1];
                _.forEach(_.range(leftSideMatchesWon), function (i) {
                    _this.versus.leftSideMatchCircles[i].activate(leftSideColor);
                });
                _.forEach(_.range(rightSideMatchesWon), function (i) {
                    _this.versus.rightSideMatchCircles[i].activate(rightSideColor);
                });
            };
            PockeyUiGameScreen.prototype.onUpdateUIText = function (params) {
                var text = params[0];
                if (_.includes(text, "{opponent"))
                    text = text.replace("{opponent}", Pockey.PockeySettings.OPPONENT_NICKNAME);
                if (text != this.multilineText.text) {
                }
            };
            PockeyUiGameScreen.prototype.onUpdateCurrentPlayerTimer = function (params) {
                var time = params[0];
                var playerType = params[1];
                var animateText = params[2];
                if (this.leftGameGraphics.type == playerType) {
                    this.leftGameGraphics.updateTimer(time);
                    if (animateText)
                        this.leftGameGraphics.animateTimer();
                }
                else {
                    this.rightGameGraphics.updateTimer(time);
                    if (animateText)
                        this.rightGameGraphics.animateTimer();
                }
            };
            PockeyUiGameScreen.prototype.onResizeBackground = function (params) {
                this.poolTableScaleFactor = params[0];
            };
            PockeyUiGameScreen.prototype.onReset = function (param) {
                this.leftGameGraphics.reset();
                this.rightGameGraphics.reset();
            };
            PockeyUiGameScreen.prototype.onSetSides = function (params) {
                this.leftGameGraphics.type = params[0];
                this.rightGameGraphics.type = params[1];
                if (this.leftGameGraphics.type == BallType.Player) {
                    this.playerGameGraphics = this.leftGameGraphics;
                    this.opponentGameGraphics = this.rightGameGraphics;
                }
                else {
                    this.playerGameGraphics = this.rightGameGraphics;
                    this.opponentGameGraphics = this.leftGameGraphics;
                }
            };
            PockeyUiGameScreen.prototype.onUpdatePlayerScore = function (score) {
                if (this.playerGameGraphics)
                    this.playerGameGraphics.updateScore(score);
            };
            PockeyUiGameScreen.prototype.onUpdatePlayerName = function (name) {
                if (this.playerGameGraphics)
                    this.playerGameGraphics.updateUsername(name);
            };
            PockeyUiGameScreen.prototype.onChangePlayerColor = function (color) {
                if (this.playerGameGraphics)
                    this.playerGameGraphics.tint(+color);
            };
            PockeyUiGameScreen.prototype.onChangePlayerAvatar = function (avatarPath) {
                if (this.playerGameGraphics)
                    this.playerGameGraphics.updateAvatar(avatarPath);
            };
            PockeyUiGameScreen.prototype.onUpdateOpponentScore = function (score) {
                if (this.opponentGameGraphics)
                    this.opponentGameGraphics.updateScore(score);
            };
            PockeyUiGameScreen.prototype.onUpdateOpponentName = function (name) {
                if (this.opponentGameGraphics)
                    this.opponentGameGraphics.updateUsername(name);
            };
            PockeyUiGameScreen.prototype.onChangeOpponentColor = function (color) {
                if (this.opponentGameGraphics) {
                    this.opponentGameGraphics.tint(color);
                }
                this.opponentTextStyle = new TextStyle({
                    fontFamily: 'troika',
                    fontSize: this.textFontSize,
                    fill: color,
                    dropShadow: true,
                    dropShadowColor: '#000000',
                    dropShadowBlur: 1,
                    dropShadowAngle: Math.PI / 3,
                    dropShadowDistance: 8
                });
                this.multilineText.styles =
                    {
                        "default": this.defaultTextStyle,
                        "warning": this.warningTextStyle,
                        "opponent": this.opponentTextStyle
                    };
            };
            PockeyUiGameScreen.prototype.onChangeOpponentAvatar = function (avatarPath) {
                if (this.opponentGameGraphics)
                    this.opponentGameGraphics.updateAvatar(avatarPath);
            };
            PockeyUiGameScreen.prototype.handleDesktopLandscape = function () {
                this.graphicsContainer.height = 0.11 * Settings.stageHeight;
                this.graphicsContainer.scale.x = this.graphicsContainer.scale.y;
                this.graphicsContainer.x = Settings.stageWidth / 2;
                this.graphicsContainer.y = 0.05 * Settings.stageHeight;
                this.tipTextContainer.scale.x = this.tipTextContainer.scale.y = this.poolTableScaleFactor;
                this.tipTextContainer.y = Settings.stageHeight - Settings.stageHeight * 0.1;
                this.tipTextContainer.x = Settings.stageWidth / 2 + (this.tipTextWidth / 2) * this.poolTableScaleFactor;
                this.multilineText.x = -this.multilineText.width;
            };
            PockeyUiGameScreen.prototype.onResizeMobileLandscape = function () {
                this.rotation = 0;
                this.tipTextContainer.height = 0.046 * Settings.stageHeight;
                this.tipTextContainer.scale.x = this.tipTextContainer.scale.y;
                this.tipTextContainer.y = Settings.stageHeight - Settings.stageHeight * 0.0452;
                this.tipTextContainer.x = Settings.stageWidth / 2;
                this.multilineText.x = -this.multilineText.width / 2;
                this.graphicsContainer.height = 0.13 * Settings.stageHeight;
                this.graphicsContainer.scale.x = this.graphicsContainer.scale.y;
                this.graphicsContainer.x = Settings.stageWidth / 2;
                this.graphicsContainer.y = Settings.stageHeight * 0.008;
            };
            PockeyUiGameScreen.prototype.onResizeMobilePortrait = function () {
                this.rotation = 90 * Math.PI / 180;
                this.tipTextContainer.height = 0.0448 * Settings.stageWidth;
                this.tipTextContainer.scale.x = this.tipTextContainer.scale.y;
                this.tipTextContainer.x = Settings.stageHeight / 2;
                this.tipTextContainer.y = -Settings.stageWidth * 0.046;
                this.multilineText.x = -this.multilineText.width / 2;
                this.graphicsContainer.height = 0.13 * Settings.stageWidth;
                this.graphicsContainer.scale.x = this.graphicsContainer.scale.y;
                this.graphicsContainer.x = Settings.stageHeight / 2;
                this.graphicsContainer.y = -Settings.stageWidth + 0.008 * Settings.stageWidth;
            };
            PockeyUiGameScreen.prototype.defineTextStyles = function () {
                this.textFontSize = 56.4;
                if (Settings.isMobile) {
                    this.textFontSize = 28;
                }
                this.defaultTextStyle = new TextStyle({
                    fontFamily: 'troika',
                    fontSize: this.textFontSize,
                    fill: 0xffffff,
                    dropShadow: true,
                    dropShadowColor: '#000000',
                    dropShadowBlur: 1,
                    dropShadowAngle: Math.PI / 3,
                    dropShadowDistance: 8
                });
                this.warningTextStyle = new TextStyle({
                    fontFamily: 'troika',
                    fontSize: this.textFontSize,
                    fill: 0xff0000,
                    dropShadow: true,
                    dropShadowColor: '#000000',
                    dropShadowBlur: 1,
                    dropShadowAngle: Math.PI / 3,
                    dropShadowDistance: 8
                });
                this.opponentTextStyle = new TextStyle({});
            };
            PockeyUiGameScreen.prototype.addElements = function () {
                this.graphicsContainer = new Container();
                this.addChild(this.graphicsContainer);
                this.addVersusGraphics();
                this.addLeftGameGraphics();
                this.addRightGameGraphics();
                this.addTipText();
            };
            PockeyUiGameScreen.prototype.addTipText = function () {
                this.multilineText = new MultiStyleText("", {
                    "default": this.defaultTextStyle,
                    "warning": this.warningTextStyle,
                    "opponent": this.opponentTextStyle
                });
                this.tipTextContainer = new Container();
                this.tipTextContainer.name = "tipTextContainer";
                this.addChild(this.tipTextContainer);
                this.multilineText.scale.x = this.multilineText.scale.y = 0.5;
                this.addChild(this.multilineText);
                this.tipTextContainer.addChild(this.multilineText);
            };
            PockeyUiGameScreen.prototype.addTipTextMobile = function () {
                var style = new PIXI.TextStyle({
                    fontFamily: 'troika',
                    fontSize: 14,
                    fill: 0xffffff,
                    dropShadow: true,
                    dropShadowColor: '#000000',
                    dropShadowBlur: 1,
                    dropShadowAngle: Math.PI / 3,
                    dropShadowDistance: 6,
                });
                this.tipText = new TextField("", style);
                this.tipTextContainer = new Container();
                this.addChild(this.tipTextContainer);
                this.tipTextContainer.addChild(this.tipText);
            };
            PockeyUiGameScreen.prototype.addVersusGraphics = function () {
                this.versus = new UserInterface.PockeyUiVersusGraphics();
                this.versus.x -= this.versus.width / 2;
                this.graphicsContainer.addChild(this.versus);
            };
            PockeyUiGameScreen.prototype.addLeftGameGraphics = function () {
                this.leftGameGraphics = new UserInterface.PockeyUserGameGraphics("left");
                this.leftGameGraphics.x = this.versus.x - this.leftGameGraphics.width - 36;
                this.versus.y = this.leftGameGraphics.height - this.versus.height + 8;
                this.graphicsContainer.addChild(this.leftGameGraphics);
            };
            PockeyUiGameScreen.prototype.addRightGameGraphics = function () {
                this.rightGameGraphics = new UserInterface.PockeyUserGameGraphics("right");
                this.rightGameGraphics.x = this.versus.x + this.versus.width + 36;
                this.graphicsContainer.addChild(this.rightGameGraphics);
            };
            return PockeyUiGameScreen;
        }(Container));
        UserInterface.PockeyUiGameScreen = PockeyUiGameScreen;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var UserInterface;
    (function (UserInterface) {
        var Sprite = PIXI.Sprite;
        var Settings = Framework.Settings;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var PockeyUiWinningScreen = (function (_super) {
            __extends(PockeyUiWinningScreen, _super);
            function PockeyUiWinningScreen() {
                var _this = _super.call(this) || this;
                _this.registerSignalHandlers();
                _this.addElements();
                return _this;
            }
            PockeyUiWinningScreen.prototype.addElements = function () {
                this.addWinningBackground();
                this.addRestartButton();
            };
            PockeyUiWinningScreen.prototype.addWinningBackground = function () {
                this.background = new Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/menu_background.svg"));
                console.log("this.background.width, height: " + this.background.width, this.background.height);
                this.background.x = Settings.stageWidth / 2 - this.background.width / 2;
                this.background.y = Settings.stageHeight / 2 - this.background.height / 2;
                this.addChild(this.background);
            };
            PockeyUiWinningScreen.prototype.onResize = function () {
                this.background.x = Settings.stageWidth / 2 - this.background.width / 2;
                this.background.y = Settings.stageHeight / 2 - this.background.height / 2;
            };
            PockeyUiWinningScreen.prototype.addRestartButton = function () {
            };
            PockeyUiWinningScreen.prototype.registerSignalHandlers = function () {
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_WINNING_MESSAGE, this.onUpdateWinningMessage.bind(this));
            };
            PockeyUiWinningScreen.prototype.onUpdateWinningMessage = function (message) {
                this.winningTextField.setText(message);
            };
            return PockeyUiWinningScreen;
        }(Container));
        UserInterface.PockeyUiWinningScreen = PockeyUiWinningScreen;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var UserInterface;
    (function (UserInterface) {
        var PockeyUiMainScreenMobile = (function (_super) {
            __extends(PockeyUiMainScreenMobile, _super);
            function PockeyUiMainScreenMobile() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PockeyUiMainScreenMobile.prototype.defineElements = function () {
                var _this = this;
                this.rightSide = document.getElementById("RightSideBackground");
                this.mainButtonsHolder = document.getElementById("MainButtonsHolder");
                this.backButton = document.getElementById("BackToMainMenuButton");
                this.backBg = document.getElementById("MainMenuBg");
                this.loginMenu = document.getElementById("LoginScreen");
                this.playGameMenu = new UserInterface.PlayGameMenu();
                this.inventoryMenu = new UserInterface.PockeyInventoryMenu();
                this.leftSideLoginMenu = document.getElementById("LeftSide");
                this.leaderboardMenu = document.getElementById("LeaderBoardScreen");
                this.hideElement(this.leaderboardMenu);
                this.inviteMenu = document.getElementById("InviteElementsHolder");
                this.hideElement(this.inviteMenu);
                this.tutorialAndShareButtonsMenu = document.getElementById("TutorialAndShareButtonsHolder");
                this.inventoryScreen = document.getElementById("InventoryScreen");
                this.hideElement(this.inventoryScreen);
                this.mainMenuElementsHolder = document.getElementById("MainMenuElementsHolder");
                this.mainMenuButtons = [];
                this.playGameButton = document.getElementById("PlayGameButton");
                this.mainMenuButtons.push(this.playGameButton);
                this.inventoryButton = document.getElementById("InventoryButton");
                this.mainMenuButtons.push(this.inventoryButton);
                this.inviteFriendButton = document.getElementById("InviteFriendsButton");
                this.mainMenuButtons.push(this.inviteFriendButton);
                this.leaderboardButton = document.getElementById("LeaderboardButton");
                this.mainMenuButtons.push(this.leaderboardButton);
                _.forEach(this.mainMenuButtons, function (element) {
                    element.setAttribute('clicked', 'false');
                    element.onclick = function () {
                        element.setAttribute("clicked", "true");
                        switch (element.id) {
                            case _this.playGameButton.id: {
                                _this.showPlayGameMenu();
                                break;
                            }
                            case _this.inventoryButton.id: {
                                _this.showInventoryMenu();
                                break;
                            }
                            case _this.inviteFriendButton.id: {
                                _this.showInviteMenu();
                                break;
                            }
                            case _this.leaderboardButton.id: {
                                _this.showLeaderboardMenu();
                                break;
                            }
                        }
                        _.forEach(_this.mainMenuButtons, function (otherElement) {
                            if (otherElement != element) {
                                otherElement.setAttribute("clicked", "false");
                            }
                        });
                    };
                });
                this.backButton.onclick = function () {
                    _this.hideElement(_this.rightSide);
                    _this.hideElement(_this.backBg);
                    _this.showElement(_this.mainButtonsHolder, "block");
                };
            };
            PockeyUiMainScreenMobile.prototype.showElement = function (element, displayType) {
                element.style.display = (!displayType) ? "flex" : displayType;
            };
            PockeyUiMainScreenMobile.prototype.showPlayGameMenu = function () {
                console.log("intra la show play");
                this.showElement(this.backBg);
                this.showElement(this.rightSide);
                this.hideElement(this.mainButtonsHolder);
                _super.prototype.showPlayGameMenu.call(this);
            };
            PockeyUiMainScreenMobile.prototype.showInventoryMenu = function () {
                this.showElement(this.backBg);
                console.log("intra la show inventory");
                this.showElement(this.rightSide);
                this.hideElement(this.mainButtonsHolder);
                _super.prototype.showInventoryMenu.call(this);
            };
            PockeyUiMainScreenMobile.prototype.showLeaderboardMenu = function () {
                this.showElement(this.backBg);
                console.log("intra la show leaderboard");
                this.showElement(this.rightSide);
                this.hideElement(this.mainButtonsHolder);
                _super.prototype.showLeaderboardMenu.call(this);
            };
            PockeyUiMainScreenMobile.prototype.showInviteMenu = function () {
                this.showElement(this.backBg);
                console.log("intra la show invite");
                this.showElement(this.rightSide);
                this.hideElement(this.mainButtonsHolder);
                _super.prototype.showInviteMenu.call(this);
            };
            return PockeyUiMainScreenMobile;
        }(UserInterface.PockeyUiMainScreen));
        UserInterface.PockeyUiMainScreenMobile = PockeyUiMainScreenMobile;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var UserInterface;
    (function (UserInterface) {
        var AbstractUserInterfaceModule = Framework.UserInterface.AbstractUserInterfaceModule;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var SignalsType = Framework.Signals.SignalsType;
        var PockeySoundNames = Pockey.Sound.PockeySoundNames;
        var Settings = Framework.Settings;
        var PockeyUserInterfaceModule = (function (_super) {
            __extends(PockeyUserInterfaceModule, _super);
            function PockeyUserInterfaceModule() {
                return _super.call(this) || this;
            }
            PockeyUserInterfaceModule.prototype.createElements = function () {
                if (Settings.isMobile) {
                    this.mainScreen = new UserInterface.PockeyUiMainScreenMobile();
                }
                else {
                    this.mainScreen = new UserInterface.PockeyUiMainScreen();
                }
                this.searchingScreen = new UserInterface.PockeyUiSearchingScreen();
                this.gameScreen = new UserInterface.PockeyUiGameScreen();
                _super.prototype.createElements.call(this);
            };
            PockeyUserInterfaceModule.prototype.registerSignalsHandlers = function () {
                _super.prototype.registerSignalsHandlers.call(this);
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_MAIN_MENU, this.onShowMainMenu.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_MAIN_MENU, this.onHideMainMenu.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_GAME_UI, this.onShowGameMenu.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_GAME_UI, this.onHideGameMenu.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_SEARCHING_SCREEN, this.onShowSearchingScreen.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_SEARCHING_SCREEN, this.onHideSearchingScreen.bind(this));
            };
            PockeyUserInterfaceModule.prototype.onShowWinningScreen = function () {
                this.addChild(this.winningScreen);
            };
            PockeyUserInterfaceModule.prototype.onHideWinningScreen = function () {
                this.removeChild(this.winningScreen);
            };
            PockeyUserInterfaceModule.prototype.onShowSearchingScreen = function () {
                this.searchingScreen.setVisibleTrue();
            };
            PockeyUserInterfaceModule.prototype.onHideSearchingScreen = function () {
                this.searchingScreen.setVisibleFalse();
            };
            PockeyUserInterfaceModule.prototype.onShowMainMenu = function () {
                this.mainScreen.setVisibleTrue();
                SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{ soundName: PockeySoundNames.MAIN_MENU_AMBIANCE }]);
                SignalsManager.DispatchSignal(SignalsType.STOP_SOUND, [{ soundName: PockeySoundNames.IN_GAME_AMBIANCE }]);
            };
            PockeyUserInterfaceModule.prototype.onHideMainMenu = function () {
                this.mainScreen.setVisibleFalse();
            };
            PockeyUserInterfaceModule.prototype.onShowGameMenu = function () {
                this.addChild(this.gameScreen);
                SignalsManager.DispatchSignal(SignalsType.STOP_SOUND, [{ soundName: PockeySoundNames.MAIN_MENU_AMBIANCE }]);
                SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{ soundName: PockeySoundNames.IN_GAME_AMBIANCE, loop: true }]);
            };
            PockeyUserInterfaceModule.prototype.onHideGameMenu = function () {
                this.removeChild(this.gameScreen);
            };
            PockeyUserInterfaceModule.prototype.onResize = function (params) {
                _super.prototype.onResize.call(this, params);
            };
            PockeyUserInterfaceModule.prototype.handleDesktopLandscape = function () {
                _super.prototype.handleDesktopLandscape.call(this);
                if (this.gameScreen)
                    this.gameScreen.handleDesktopLandscape();
            };
            PockeyUserInterfaceModule.prototype.handleMobilePortrait = function () {
                _super.prototype.handleMobilePortrait.call(this);
                if (this.gameScreen)
                    this.gameScreen.onResizeMobilePortrait();
            };
            PockeyUserInterfaceModule.prototype.handleMobileLandscape = function () {
                _super.prototype.handleMobileLandscape.call(this);
                if (this.gameScreen)
                    this.gameScreen.onResizeMobileLandscape();
            };
            return PockeyUserInterfaceModule;
        }(AbstractUserInterfaceModule));
        UserInterface.PockeyUserInterfaceModule = PockeyUserInterfaceModule;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var AbstractEntryPoint = Framework.AbstractEntryPoint;
    var Settings = Framework.Settings;
    var Layers = Framework.Layers;
    var PockeyGameModule = Pockey.GameModule.PockeyGameModule;
    var GameManager = Pockey.GameModule.GameManager;
    var P2WorldManager = Pockey.GameModule.P2WorldManager;
    var PockeyStateMachine = Pockey.StateMachineModule.PockeyStateMachine;
    var SignalsManager = Framework.Signals.SignalsManager;
    var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
    var MouseHandler = Framework.Utils.MouseHandler;
    var PockeyBackgroundModule = Pockey.Background.PockeyBackgroundModule;
    var PockeyConnectionModule = Pockey.Connection.PockeyConnectionModule;
    var PockeyConnectionSignals = Pockey.SignalsModule.PockeyConnectionSignals;
    var PockeyUserInterfaceModule = Pockey.UserInterface.PockeyUserInterfaceModule;
    var PockeyEntryPoint = (function (_super) {
        __extends(PockeyEntryPoint, _super);
        function PockeyEntryPoint() {
            var _this = _super.call(this) || this;
            _this.maxSubSteps = 7;
            _this.name = "PockeyEntryPoint";
            return _this;
        }
        PockeyEntryPoint.prototype.addFontsToLoad = function () {
            _super.prototype.addFontsToLoad.call(this);
            this.assetsLoader.addFontToLoad("troika");
            this.assetsLoader.addFontToLoad("opensansextrabold");
        };
        PockeyEntryPoint.prototype.addModules = function () {
            this.gameModule = this.getGameModule();
            this.registerModule(this.gameModule);
            _super.prototype.addModules.call(this);
        };
        PockeyEntryPoint.prototype.getGameModule = function () {
            var gameModule = new PockeyGameModule();
            gameModule.Name = "GameModule";
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey_main.json");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey_main.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey-decals.json");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey-decals.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey-sticks.json");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey-sticks.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/ballTexture.jpg");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/balls.json");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/balls.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/color_big.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/table_bottom.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/color_big_over.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/color_big_shadow.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/goalie_bottom.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/goalie_color.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/goalie_top.png");
            gameModule.Layer = this.getLayer(Layers.GameLayer);
            return gameModule;
        };
        PockeyEntryPoint.prototype.getUIModule = function () {
            var uiModule = new PockeyUserInterfaceModule();
            uiModule.Name = "PockeyUIModule";
            uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey_main.json");
            uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey_main.png");
            uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/menu_background.svg");
            uiModule.Layer = this.getLayer(Layers.UILayer);
            return uiModule;
        };
        PockeyEntryPoint.prototype.getBackgroundModule = function () {
            var backgroundModule = new PockeyBackgroundModule();
            backgroundModule.registerBackground(Pockey.PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME, Settings.desktopAssetsPath + "/Images/Backgrounds/game_bg.png");
            backgroundModule.Name = "PockeyBackgroundModule";
            backgroundModule.addAssetToLoad(Settings.desktopAssetsPath + "/Images/Backgrounds/game_bg.png");
            backgroundModule.Layer = this.getLayer(Layers.BackgroundLayer);
            return backgroundModule;
        };
        PockeyEntryPoint.prototype.getConnectionModule = function () {
            var connectionModule = new PockeyConnectionModule();
            connectionModule.Name = 'PockeyConnectionModule';
            return connectionModule;
        };
        PockeyEntryPoint.prototype.initializeSingletons = function () {
            _super.prototype.initializeSingletons.call(this);
            PockeyStateMachine.Instance();
            GameManager.Instance();
            MouseHandler.Instance();
            P2WorldManager.Instance();
        };
        PockeyEntryPoint.prototype.initializePixi = function () {
            _super.prototype.initializePixi.call(this);
            P2WorldManager.Instance().world = new p2.World({
                gravity: [0, 0]
            });
            requestAnimationFrame(this.animate.bind(this));
        };
        PockeyEntryPoint.prototype.frameAnimate = function () {
            _super.prototype.frameAnimate.call(this);
        };
        PockeyEntryPoint.prototype.animate = function (time) {
            requestAnimationFrame(this.animate.bind(this));
            var deltaTime = this.lastTime ? (time - this.lastTime) / 1000 : 0;
            if (P2WorldManager.Instance().world)
                P2WorldManager.Instance().world.step(Pockey.PockeySettings.P2_WORLD_STEP, deltaTime, this.maxSubSteps);
            this.lastTime = time;
        };
        PockeyEntryPoint.prototype.registerSignals = function () {
            _super.prototype.registerSignals.call(this);
            SignalsManager.CreateNewSignal(PockeySignalTypes.CHECK_USER_DATA);
            SignalsManager.CreateNewSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
            SignalsManager.CreateNewSignal(PockeySignalTypes.PLAYER_SIGNED_IN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.PLAYER_SIGNED_OUT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.GOOGLE_SIGN_IN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.GOOGLE_SIGN_OUT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.FACEBOOK_SIGN_IN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.FACEBOOK_SIGN_OUT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOOT_BALL);
            SignalsManager.CreateNewSignal(PockeySignalTypes.NEXT_TURN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.BALL_IN_POCKET);
            SignalsManager.CreateNewSignal(PockeySignalTypes.WHITE_BALL_IN_POCKET);
            SignalsManager.CreateNewSignal(PockeySignalTypes.FIRST_BALL_FAULT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.REPOSITION_WHITE_BALL);
            SignalsManager.CreateNewSignal(PockeySignalTypes.REACTIVATE_STICK);
            SignalsManager.CreateNewSignal(PockeySignalTypes.STICK_PIVOT_MOBILE_UPDATE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.STICK_MOBILE_RELEASE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_STICK_POWER_MOBILE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOW_STICK_POWER_MOBILE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.WHITE_BALL_REPOSITIONED);
            SignalsManager.CreateNewSignal(PockeySignalTypes.MOBILE_WHITE_BALL_REPOSITION_CONFIRMED);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOW_WHITE_BALL_POSITION_CONFIRMER);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_WHITE_BALL_POSITION_CONFIRMER);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_BALL_RAY_GRAPHICS);
            SignalsManager.CreateNewSignal(PockeySignalTypes.POOLSTICK_ACTIVATED);
            SignalsManager.CreateNewSignal(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED);
            SignalsManager.CreateNewSignal(PockeyConnectionSignals.WATCH);
            SignalsManager.CreateNewSignal(PockeyConnectionSignals.SCORE_UPDATE);
            SignalsManager.CreateNewSignal(PockeyConnectionSignals.YOUR_TURN);
            SignalsManager.CreateNewSignal(PockeyConnectionSignals.OPPONENT_SETTINGS);
            SignalsManager.CreateNewSignal(PockeyConnectionSignals.OPPONENT_RESTART_GAME);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOW_MAIN_MENU);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_MAIN_MENU);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOW_POOLTABLE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_POOLTABLE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOW_SEARCHING_SCREEN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_SEARCHING_SCREEN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOW_GAME_UI);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_GAME_UI);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_WINNING_MESSAGE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOW_WINNING_SCREEN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_WINNING_SCREEN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.START_GAME);
            SignalsManager.CreateNewSignal(PockeySignalTypes.RESET_POOLTABLE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.RESET_STICK_POWER);
            SignalsManager.CreateNewSignal(PockeySignalTypes.RESET_GAME_SCREEN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.RESTART_GAME);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SET_SIDES_TYPE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_PLAYER_NAME);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_PLAYER_SCORE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.CHANGE_PLAYER_COLOR);
            SignalsManager.CreateNewSignal(PockeySignalTypes.CHANGE_PLAYER_AVATAR);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_OPPONENT_NAME);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_OPPONENT_SCORE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.CHANGE_OPPONENT_COLOR);
            SignalsManager.CreateNewSignal(PockeySignalTypes.CHANGE_OPPONENT_AVATAR);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SEND_ELEMENTS_DATA_TO_MANAGER);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_STATE_TEXT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_UI_TEXT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_MATCH_CIRCLES);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_PLAYER_COLOR);
        };
        return PockeyEntryPoint;
    }(AbstractEntryPoint));
    Pockey.PockeyEntryPoint = PockeyEntryPoint;
})(Pockey || (Pockey = {}));
var mainModule;
window.onload = function () {
    mainModule = new Pockey.PockeyEntryPoint();
    this.onresize = function (event) {
        mainModule.windowResize(window.innerWidth, window.innerHeight);
    };
};

//# sourceMappingURL=main.js.map
