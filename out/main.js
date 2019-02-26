var Pockey;
(function (Pockey) {
    let SignalsModule;
    (function (SignalsModule) {
        class PockeySignalTypes {
        }
        PockeySignalTypes.PLAYER_SIGNED_OUT = "PockeySignalTypes." + "PLAYER_SIGNED_OUT";
        PockeySignalTypes.PLAYER_SIGNED_IN = "PockeySignalTypes." + "PLAYER_SIGNED_IN";
        PockeySignalTypes.GET_PLAYER_INFO = "PockeySignalTypes." + "GET_PLAYER_INFO";
        PockeySignalTypes.GOOGLE_SIGN_IN = "PockeySignalTypes." + "GOOGLE_SIGN_IN";
        PockeySignalTypes.GOOGLE_SIGN_OUT = "PockeySignalTypes." + "GOOGLE_SIGN_OUT";
        PockeySignalTypes.FACEBOOK_SIGN_IN = "PockeySignalTypes." + "FACEBOOK_SIGN_IN";
        PockeySignalTypes.FACEBOOK_SIGN_OUT = "PockeySignalTypes." + "FACEBOOK_SIGN_OUT";
        PockeySignalTypes.SHOOT_BALL = "PockeySignalTypes." + "SHOOT_BALL";
        PockeySignalTypes.PREPARE_NEXT_TURN = "PockeySignalTypes." + "PREPARE_NEXT_TURN";
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
        PockeySignalTypes.MAIN_MENU_BUTTON_CLICKED = "PockeySignalTypes." + "MAIN_MENU_BUTTON_CLICKED";
        PockeySignalTypes.HIDE_MAIN_MENU = "PockeySignalTypes." + "HIDE_MAIN_MENU";
        PockeySignalTypes.SHOW_POOLTABLE = "PockeySignalTypes." + "SHOW_POOLTABLE";
        PockeySignalTypes.HIDE_POOLTABLE = "PockeySignalTypes." + "HIDE_POOLTABLE";
        PockeySignalTypes.SHOW_GAME_UI = "PockeySignalTypes." + "SHOW_GAME_UI";
        PockeySignalTypes.HIDE_GAME_UI = "PockeySignalTypes." + "HIDE_GAME_UI";
        PockeySignalTypes.SHOW_SEARCHING_SCREEN = "PockeySignalTypes." + "SHOW_SEARCHING_SCREEN";
        PockeySignalTypes.HIDE_SEARCHING_SCREEN = "PockeySignalTypes." + "HIDE_SEARCHING_SCREEN";
        PockeySignalTypes.SHOW_ROUND_COMPLETE_SCREEN = "PockeySignalTypes." + "SHOW_ROUND_COMPLETE_SCREEN";
        PockeySignalTypes.HIDE_ROUND_COMPLETE_SCREEN = "PockeySignalTypes." + "HIDE_ROUND_COMPLETE_SCREEN";
        PockeySignalTypes.SHOW_OPPONENT_FOUND_SCREEN = "PockeySignalTypes." + "SHOW_OPPONENT_FOUND_SCREEN";
        PockeySignalTypes.HIDE_OPPONENT_FOUND_SCREEN = "PockeySignalTypes." + "HIDE_OPPONENT_FOUND_SCREEN";
        PockeySignalTypes.CHANGE_POOLTABLE_DECAL = "PockeySignalTypes." + "CHANGE_POOLTABLE_DECAL";
        PockeySignalTypes.UPDATE_UI_SCORE = "PockeySignalTypes." + "UPDATE_UI_SCORE";
        PockeySignalTypes.CHANGE_POOLTABLE_FELT = "PockeySignalTypes." + "CHANGE_POOLTABLE_FELT";
        PockeySignalTypes.SET_SIDES_TYPE = "PockeySignalTypes." + "SET_SIDES_TYPE";
        PockeySignalTypes.SEND_ELEMENTS_DATA_TO_MANAGER = "PockeySignalTypes." + "SEND_ELEMENTS_DATA_TO_MANAGER";
        PockeySignalTypes.UPDATE_WINNING_MESSAGE = "PockeySignalTypes." + "UPDATE_WINNING_MESSAGE";
        PockeySignalTypes.RESTART_GAME_BUTTON_CLICKED = "PockeySignalTypes." + "RESTART_GAME_BUTTON_CLICKED";
        PockeySignalTypes.RESET_POOLTABLE = "PockeySignalTypes." + "RESET_POOLTABLE";
        PockeySignalTypes.RESET_STICK_POWER = "PockeySignalTypes." + "RESET_STICK_POWER";
        PockeySignalTypes.RESET_GAME_SCREEN = "PockeySignalTypes." + "RESET_GAME_SCREEN";
        PockeySignalTypes.MOBILE_WHITE_BALL_REPOSITION_CONFIRMED = "PockeySignalTypes." + "MOBILE_WHITE_BALL_REPOSITION_CONFIRMED";
        PockeySignalTypes.SHOW_WHITE_BALL_POSITION_CONFIRMER = "PockeySignalTypes." + "SHOW_WHITE_BALL_POSITION_CONFIRMER";
        PockeySignalTypes.HIDE_WHITE_BALL_POSITION_CONFIRMER = "PockeySignalTypes." + "HIDE_WHITE_BALL_POSITION_CONFIRMER";
        PockeySignalTypes.UPDATE_STATE_TEXT = "PockeySignalTypes." + "UPDATE_GAME_TEXT";
        PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER = "PockeySignalTypes." + "UPDATE_CURRENT_PLAYER_TIMER";
        PockeySignalTypes.UPDATE_MY_TIMER = "PockeySignalTypes." + "UPDATE_MY_TIMER";
        PockeySignalTypes.UPDATE_STICK_SKIN = "PockeySignalTypes." + "UPDATE_STICK_SKIN";
        PockeySignalTypes.UPDATE_UI_TEXT = "PockeySignalTypes." + "UPDATE_UI_TEXT";
        PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH = "PockeySignalTypes." + "UPDATE_UI_TEXT_ON_WATCH";
        PockeySignalTypes.ANIMATE_PUCK_GOAL = "PockeySignalTypes." + "ANIMATE_PUCK_GOAL";
        PockeySignalTypes.ANIMATE_PUCK_GOAL_STOP = "PockeySignalTypes." + "ANIMATE_PUCK_GOAL_STOP";
        PockeySignalTypes.UPDATE_MATCH_CIRCLES = "PockeySignalTypes." + "UPDATE_MATCH_CIRCLES";
        PockeySignalTypes.UPDATE_PLAYER_COLOR = "PockeySignalTypes." + "UPDATE_PLAYER_COLOR";
        PockeySignalTypes.CHECK_USER_DATA = "PockeySignalTypes." + "CHECK_USER_DATA";
        PockeySignalTypes.INVENTORY_ITEM_UPDATED = "PockeySignalTypes." + "INVENTORY_ITEM_UPDATED";
        PockeySignalTypes.ON_WATCH_FINISHED = "PockeySignalTypes." + "ON_WATCH_FINISHED";
        PockeySignalTypes.CREATE_POOLTABLE_STATE = "PockeySignalTypes." + "CREATE_POOLTABLE_STATE";
        PockeySignalTypes.APPLY_POOLTABLE_STATE = "PockeySignalTypes." + "APPLY_POOLTABLE_STATE";
        PockeySignalTypes.UPDATE_CURRENT_ROUND_SCREEN_TEXT = "PockeySignalTypes." + "UPDATE_CURRENT_ROUND_SCREEN_TEXT";
        PockeySignalTypes.CHANGE_WHITE_BALL_STATUS = "PockeySignalTypes." + "CHANGE_WHITE_BALL_STATUS";
        PockeySignalTypes.ASSIGN_PLAYER = "PockeySignalTypes." + "ASSIGN_PLAYER";
        PockeySignalTypes.REMATCH_CONFIRM_BUTTON_CLICKED = "PockeySignalTypes." + "REMATCH_CONFIRM_BUTTON_CLICKED";
        SignalsModule.PockeySignalTypes = PockeySignalTypes;
        class PockeyConnectionSignals {
        }
        PockeyConnectionSignals.WATCH = "PockeyConnectionSignals." + "WATCH";
        PockeyConnectionSignals.SCORE_UPDATE = "PockeyConnectionSignals." + "SCORE_UPDATE";
        PockeyConnectionSignals.YOUR_TURN = "PockeyConnectionSignals." + "YOUR_TURN";
        PockeyConnectionSignals.OPPONENT_SETTINGS = "PockeyConnectionSignals." + "OPPONENT_SETTINGS";
        PockeyConnectionSignals.OPPONENT_NEXT_ROUND = "PockeyConnectionSignals." + "OPPONENT_NEXT_ROUND";
        SignalsModule.PockeyConnectionSignals = PockeyConnectionSignals;
    })(SignalsModule = Pockey.SignalsModule || (Pockey.SignalsModule = {}));
})(Pockey || (Pockey = {}));
var Framework;
(function (Framework) {
    class SignalBinding {
        constructor(signal, listener, isOnce, listenerContext, priority = 0) {
            this.active = true;
            this.params = null;
            this._listener = listener;
            this._isOnce = isOnce;
            this.context = listenerContext;
            this._signal = signal;
            this.priority = priority || 0;
        }
        execute(paramsArr) {
            let handlerReturn;
            let params;
            if (this.active && !!this._listener) {
                params = this.params ? this.params.concat(paramsArr) : paramsArr;
                handlerReturn = this._listener.apply(this.context, params);
                if (this._isOnce) {
                    this.detach();
                }
            }
            return handlerReturn;
        }
        detach() {
            return this.isBound() ? this._signal.remove(this._listener, this.context) : null;
        }
        isBound() {
            return (!!this._signal && !!this._listener);
        }
        isOnce() {
            return this._isOnce;
        }
        getListener() {
            return this._listener;
        }
        getSignal() {
            return this._signal;
        }
        _destroy() {
            delete this._signal;
            delete this._listener;
            delete this.context;
        }
        toString() {
            return '[SignalBinding isOnce:' + this._isOnce + ', isBound:' + this.isBound() + ', active:' + this.active + ']';
        }
    }
    Framework.SignalBinding = SignalBinding;
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    class Signal {
        constructor() {
            this._bindings = [];
            this._prevParams = null;
            this.memorize = false;
            this._shouldPropagate = true;
            this.active = true;
        }
        validateListener(listener, fnName) {
            if (typeof listener !== 'function') {
                throw new Error('listener is a required param of {fn}() and should be a Function.'.replace('{fn}', fnName));
            }
        }
        _registerListener(listener, isOnce, listenerContext, priority) {
            let prevIndex = this._indexOfListener(listener, listenerContext);
            let binding;
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
        }
        _addBinding(binding) {
            let n = this._bindings.length;
            do {
                --n;
            } while (this._bindings[n] && binding.priority <= this._bindings[n].priority);
            this._bindings.splice(n + 1, 0, binding);
        }
        _indexOfListener(listener, context) {
            let n = this._bindings.length;
            let cur;
            while (n--) {
                cur = this._bindings[n];
                if (cur.getListener() === listener && cur.context === context) {
                    return n;
                }
            }
            return -1;
        }
        has(listener, context = null) {
            return this._indexOfListener(listener, context) !== -1;
        }
        add(listener, listenerContext = null, priority = 0) {
            this.validateListener(listener, 'add');
            return this._registerListener(listener, false, listenerContext, priority);
        }
        addOnce(listener, listenerContext = null, priority = 0) {
            this.validateListener(listener, 'addOnce');
            return this._registerListener(listener, true, listenerContext, priority);
        }
        remove(listener, context = null) {
            this.validateListener(listener, 'remove');
            let i = this._indexOfListener(listener, context);
            if (i !== -1) {
                this._bindings[i]._destroy();
                this._bindings.splice(i, 1);
            }
            return listener;
        }
        removeAll() {
            let n = this._bindings.length;
            while (n--) {
                this._bindings[n]._destroy();
            }
            this._bindings.length = 0;
        }
        getNumListeners() {
            return this._bindings.length;
        }
        halt() {
            this._shouldPropagate = false;
        }
        dispatch(...paramsArr) {
            if (!this.active) {
                return;
            }
            let n = this._bindings.length;
            let bindings;
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
        }
        forget() {
            this._prevParams = null;
        }
        dispose() {
            this.removeAll();
            delete this._bindings;
            delete this._prevParams;
        }
        toString() {
            return '[Signal active:' + this.active + ' numListeners:' + this.getNumListeners() + ']';
        }
    }
    Signal.VERSION = '1.0.0';
    Framework.Signal = Signal;
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    let Signals;
    (function (Signals) {
        class SignalsManager {
            constructor() {
                this.initialized = false;
            }
            static Instance() {
                if (!SignalsManager.instance) {
                    SignalsManager.instance = new SignalsManager();
                    if (!SignalsManager.Instance().initialized) {
                        SignalsManager.InitializeSignals();
                        SignalsManager.Instance().initialized = true;
                    }
                }
                return SignalsManager.instance;
            }
            static InitializeSignals() {
                SignalsManager.Instance().signals = {};
            }
            static CreateNewSignal(id) {
                SignalsManager.Instance().signals[id] = new Framework.Signal();
                console.log("%c" + "Signals Manager -> new signal created: " + id, "color: orange");
            }
            static GetSignal(id) {
                let signal = SignalsManager.Instance().signals[id];
                if (!signal) {
                    console.warn("SignalsManager.GetSignal: signal " + id + " is not registered!");
                }
                return signal;
            }
            static AddSignalCallback(signalID, callbackFunction) {
                let signal = SignalsManager.Instance().signals[signalID];
                if (!signal) {
                    console.warn("SignalsManager.RegisterCallbackToSignal: signal " + signalID + " is not registered!");
                }
                signal.add(callbackFunction);
            }
            static DispatchSignal(id, params = null) {
                if (SignalsManager.Instance().signals[id]) {
                    if (Framework.Settings.showSignalsDispatchSignalLog) {
                        console.log("%c" + "SignalsManager -> Dispatched Signal: " + id, "color: #f68a06");
                    }
                    SignalsManager.Instance().signals[id].dispatch(params);
                }
                else {
                    console.warn("SignalsManager.DispatchSignal: signal " + id + " is net registered!");
                }
            }
        }
        Signals.SignalsManager = SignalsManager;
    })(Signals = Framework.Signals || (Framework.Signals = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    let Signals;
    (function (Signals) {
        class SignalsType {
        }
        SignalsType.WINDOW_RESIZE = "SignalsType." + "WINDOW_RESIZE";
        SignalsType.ASSETS_LOADED = "SignalsType." + "ASSETS_LOADED";
        SignalsType.ALL_MODULES_ELEMENTS_CREATED = "SignalsType." + "ALL_MODULES_ELEMENTS_CREATED";
        SignalsType.MODULE_ELEMENTS_CREATED = "SignalsType." + "MODULE_ELEMENTS_CREATED";
        SignalsType.CHANGE_BACKGROUND = "SignalsType." + "CHANGE_BACKGROUND";
        SignalsType.CHECK_USER_DATA = "SignalsType." + "CHECK_USER_DATA";
        SignalsType.USER_DATA_CHECKED = "SignalsType." + "USER_DATA_CHECKED";
        SignalsType.CREATE_SOUND_CACHE = "SignalsType." + "CREATE_SOUND_CACHE";
        SignalsType.PLAY_SOUND = "SignalsType." + "PLAY_SOUND";
        SignalsType.STOP_SOUND = "SignalsType." + "STOP_SOUND";
        Signals.SignalsType = SignalsType;
        class ConnectionSignalsType {
        }
        ConnectionSignalsType.CREATE_SEARCH_FOR_PARTNER_CONNECTION = "ConnectionSignalsType." + 'CREATE_SEARCH_FOR_PARTNER_CONNECTION';
        ConnectionSignalsType.DISCONNECT_MY_SOCKET = "ConnectionSignalsType." + 'DISCONNECT_MY_SOCKET';
        ConnectionSignalsType.SOCKET_IO_CONNECTION_CREATED = "ConnectionSignalsType." + 'SOCKET_IO_CONNECTION_CREATED';
        ConnectionSignalsType.SOCKET_IO_DISCONNECTED = "ConnectionSignalsType." + "SOCKET_IO_DISCONNECTED";
        ConnectionSignalsType.PRIVATE_MESSAGE = "ConnectionSignalsType." + "PRIVATE_MESSAGE";
        ConnectionSignalsType.UPDATE_SOCKET_ID = "ConnectionSignalsType." + "UPDATE_SOCKET_ID";
        ConnectionSignalsType.OPPONENT_DISCONNECTED = "ConnectionSignalsType." + "OPPONENT_DISCONNECTED";
        Signals.ConnectionSignalsType = ConnectionSignalsType;
    })(Signals = Framework.Signals || (Framework.Signals = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    let Abstracts;
    (function (Abstracts) {
        var SignalsManager = Framework.Signals.SignalsManager;
        var SignalsType = Framework.Signals.SignalsType;
        class AbstractModule {
            constructor() {
                this.Name = "AbstractModule";
                this.ElementsCreated = false;
                this.registerSignalsHandlers();
                this.AssetsToLoad = [];
            }
            addAssetToLoad(path) {
                this.AssetsToLoad.push(path);
            }
            createElements() {
                console.log("%c" + this.Name + " Elements Created!", "color: green");
                this.ElementsCreated = true;
                SignalsManager.DispatchSignal(SignalsType.MODULE_ELEMENTS_CREATED);
            }
            addChild(child) {
                if (_.isNull(this.Layer) || _.isUndefined(this.Layer)) {
                    console.log("%c" + this.Name + " LAYER not set!", "color: red");
                }
                this.Layer.addChild(child);
            }
            removeChild(child) {
                if (_.isNull(this.Layer) || _.isUndefined(this.Layer)) {
                    console.log("%c" + this.Name + " LAYER not set!", "color: red");
                }
                this.Layer.removeChild(child);
            }
            registerSignalsHandlers() {
                SignalsManager.AddSignalCallback(SignalsType.WINDOW_RESIZE, this.onResize.bind(this));
            }
            onResize(params) {
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
            }
            handleMobileLandscape() {
            }
            handleMobilePortrait() {
            }
            handleDesktopLandscape() {
            }
            handleDesktopPortrait() {
                this.handleDesktopLandscape();
            }
        }
        Abstracts.AbstractModule = AbstractModule;
    })(Abstracts = Framework.Abstracts || (Framework.Abstracts = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    class Settings {
    }
    Settings.desktopAssetsPath = "Assets/Desktop/";
    Settings.mobileAssetsPath = "Assets/Mobile/";
    Settings.isMobile = false;
    Settings.backgroundsPath = "Images/Backgrounds/";
    Settings.mainBackgroundName = "MainBackground";
    Settings.singlePlayer = false;
    Settings.showSignalsDispatchSignalLog = false;
    Settings.playerSignedIn = false;
    Framework.Settings = Settings;
})(Framework || (Framework = {}));
var typestate;
(function (typestate) {
    class Transitions {
        constructor(fsm) {
            this.fsm = fsm;
        }
        to(...states) {
            this.toStates = states;
            this.fsm.addTransitions(this);
        }
        toAny(states) {
            var toStates = [];
            for (var s in states) {
                if (states.hasOwnProperty(s)) {
                    toStates.push(states[s]);
                }
            }
            this.toStates = toStates;
            this.fsm.addTransitions(this);
        }
    }
    typestate.Transitions = Transitions;
    class TransitionFunction {
        constructor(fsm, from, to) {
            this.fsm = fsm;
            this.from = from;
            this.to = to;
        }
    }
    typestate.TransitionFunction = TransitionFunction;
    class FiniteStateMachine {
        constructor(startState, allowImplicitSelfTransition = false) {
            this._transitionFunctions = [];
            this._onCallbacks = {};
            this._exitCallbacks = {};
            this._enterCallbacks = {};
            this._invalidTransitionCallback = null;
            this.currentState = startState;
            this._startState = startState;
            this._allowImplicitSelfTransition = allowImplicitSelfTransition;
        }
        addTransitions(fcn) {
            fcn.fromStates.forEach(from => {
                fcn.toStates.forEach(to => {
                    if (!this._canGo(from, to)) {
                        this._transitionFunctions.push(new TransitionFunction(this, from, to));
                    }
                });
            });
        }
        on(state, callback) {
            var key = state.toString();
            if (!this._onCallbacks[key]) {
                this._onCallbacks[key] = [];
            }
            this._onCallbacks[key].push(callback);
            return this;
        }
        onEnter(state, callback) {
            var key = state.toString();
            if (!this._enterCallbacks[key]) {
                this._enterCallbacks[key] = [];
            }
            this._enterCallbacks[key].push(callback);
            return this;
        }
        onExit(state, callback) {
            var key = state.toString();
            if (!this._exitCallbacks[key]) {
                this._exitCallbacks[key] = [];
            }
            this._exitCallbacks[key].push(callback);
            return this;
        }
        onInvalidTransition(callback) {
            if (!this._invalidTransitionCallback) {
                this._invalidTransitionCallback = callback;
            }
            return this;
        }
        from(...states) {
            var _transition = new Transitions(this);
            _transition.fromStates = states;
            return _transition;
        }
        fromAny(states) {
            var fromStates = [];
            for (var s in states) {
                if (states.hasOwnProperty(s)) {
                    fromStates.push(states[s]);
                }
            }
            var _transition = new Transitions(this);
            _transition.fromStates = fromStates;
            return _transition;
        }
        _validTransition(from, to) {
            return this._transitionFunctions.some(tf => {
                return (tf.from === from && tf.to === to);
            });
        }
        _canGo(fromState, toState) {
            return (this._allowImplicitSelfTransition && fromState === toState) || this._validTransition(fromState, toState);
        }
        canGo(state) {
            return this._canGo(this.currentState, state);
        }
        go(state, event) {
            if (!this.canGo(state)) {
                if (!this._invalidTransitionCallback || !this._invalidTransitionCallback(this.currentState, state)) {
                    throw new Error('Error no transition function exists from state ' + this.currentState.toString() + ' to ' + state.toString());
                }
            }
            else {
                this._transitionTo(state, event);
            }
        }
        onTransition(from, to) {
        }
        reset() {
            this.currentState = this._startState;
        }
        is(state) {
            return this.currentState === state;
        }
        _transitionTo(state, event) {
            if (!this._exitCallbacks[this.currentState.toString()]) {
                this._exitCallbacks[this.currentState.toString()] = [];
            }
            if (!this._enterCallbacks[state.toString()]) {
                this._enterCallbacks[state.toString()] = [];
            }
            if (!this._onCallbacks[state.toString()]) {
                this._onCallbacks[state.toString()] = [];
            }
            var canExit = this._exitCallbacks[this.currentState.toString()].reduce((accum, next) => {
                return accum && next.call(this, state);
            }, true);
            var canEnter = this._enterCallbacks[state.toString()].reduce((accum, next) => {
                return accum && next.call(this, this.currentState, event);
            }, true);
            if (canExit && canEnter) {
                var old = this.currentState;
                this.currentState = state;
                this._onCallbacks[this.currentState.toString()].forEach(fcn => {
                    fcn.call(this, old, event);
                });
                this.onTransition(old, state);
            }
        }
    }
    typestate.FiniteStateMachine = FiniteStateMachine;
})(typestate || (typestate = {}));
var TypeState = typestate;
var Pockey;
(function (Pockey) {
    let StateMachineModule;
    (function (StateMachineModule) {
        var FiniteStateMachine = typestate.FiniteStateMachine;
        let PockeyStates;
        (function (PockeyStates) {
            PockeyStates[PockeyStates["onLoad"] = 0] = "onLoad";
            PockeyStates[PockeyStates["onMainMenu"] = 1] = "onMainMenu";
            PockeyStates[PockeyStates["onStart"] = 2] = "onStart";
            PockeyStates[PockeyStates["onRoundEnd"] = 3] = "onRoundEnd";
            PockeyStates[PockeyStates["onDefineClient"] = 4] = "onDefineClient";
            PockeyStates[PockeyStates["onSearchForPartner"] = 5] = "onSearchForPartner";
            PockeyStates[PockeyStates["onWatch"] = 6] = "onWatch";
            PockeyStates[PockeyStates["onRearrangeStick"] = 7] = "onRearrangeStick";
            PockeyStates[PockeyStates["onRepositionWhiteBall"] = 8] = "onRepositionWhiteBall";
            PockeyStates[PockeyStates["onShoot"] = 9] = "onShoot";
            PockeyStates[PockeyStates["onEndTurn"] = 10] = "onEndTurn";
            PockeyStates[PockeyStates["onEndMatch"] = 11] = "onEndMatch";
            PockeyStates[PockeyStates["onPrepareRoundOne"] = 12] = "onPrepareRoundOne";
            PockeyStates[PockeyStates["onPrepareRoundTwo"] = 13] = "onPrepareRoundTwo";
            PockeyStates[PockeyStates["onPrepareRoundThree"] = 14] = "onPrepareRoundThree";
        })(PockeyStates = StateMachineModule.PockeyStates || (StateMachineModule.PockeyStates = {}));
        class PockeyStateMachine {
            constructor() {
                this.initialized = false;
            }
            static Instance() {
                if (!PockeyStateMachine.instance) {
                    PockeyStateMachine.instance = new PockeyStateMachine();
                    if (!PockeyStateMachine.Instance().initialized) {
                        PockeyStateMachine.Instance().fsm = new FiniteStateMachine(PockeyStates.onLoad);
                        PockeyStateMachine.Instance().InitializeStates();
                        PockeyStateMachine.Instance().initialized = true;
                        let s = PockeyStates[PockeyStates.onLoad];
                        console.log("%c StateMachine -> FSM currentState: " + s, "background: yellow; color: #f6546a; font-weight:bold; ");
                    }
                }
                return PockeyStateMachine.instance;
            }
            InitializeStates() {
                this.fsm.from(PockeyStates.onLoad).to(PockeyStates.onMainMenu);
                this.fsm.from(PockeyStates.onMainMenu).to(PockeyStates.onRearrangeStick);
                this.fsm.from(PockeyStates.onMainMenu).to(PockeyStates.onSearchForPartner);
                this.fsm.from(PockeyStates.onSearchForPartner).to(PockeyStates.onPrepareRoundOne);
                this.fsm.from(PockeyStates.onPrepareRoundOne).to(PockeyStates.onWatch);
                this.fsm.from(PockeyStates.onPrepareRoundOne).to(PockeyStates.onRearrangeStick);
                this.fsm.from(PockeyStates.onRoundEnd).to(PockeyStates.onPrepareRoundTwo);
                this.fsm.from(PockeyStates.onPrepareRoundTwo).to(PockeyStates.onRearrangeStick);
                this.fsm.from(PockeyStates.onPrepareRoundTwo).to(PockeyStates.onWatch);
                this.fsm.from(PockeyStates.onRoundEnd).to(PockeyStates.onPrepareRoundThree);
                this.fsm.from(PockeyStates.onPrepareRoundThree).to(PockeyStates.onRearrangeStick);
                this.fsm.from(PockeyStates.onPrepareRoundThree).to(PockeyStates.onRepositionWhiteBall);
                this.fsm.from(PockeyStates.onPrepareRoundThree).to(PockeyStates.onWatch);
                this.fsm.from(PockeyStates.onRepositionWhiteBall).to(PockeyStates.onRearrangeStick);
                this.fsm.from(PockeyStates.onRepositionWhiteBall).to(PockeyStates.onWatch);
                this.fsm.from(PockeyStates.onRepositionWhiteBall).to(PockeyStates.onEndTurn);
                this.fsm.from(PockeyStates.onEndTurn).to(PockeyStates.onRearrangeStick);
                this.fsm.from(PockeyStates.onWatch).to(PockeyStates.onRearrangeStick);
                this.fsm.from(PockeyStates.onWatch).to(PockeyStates.onEndMatch);
                this.fsm.from(PockeyStates.onRearrangeStick).to(PockeyStates.onEndMatch);
                this.fsm.from(PockeyStates.onRepositionWhiteBall).to(PockeyStates.onEndMatch);
                this.fsm.from(PockeyStates.onShoot).to(PockeyStates.onEndMatch);
                this.fsm.from(PockeyStates.onPrepareRoundOne).to(PockeyStates.onEndMatch);
                this.fsm.from(PockeyStates.onPrepareRoundTwo).to(PockeyStates.onEndMatch);
                this.fsm.from(PockeyStates.onPrepareRoundThree).to(PockeyStates.onEndMatch);
                this.fsm.from(PockeyStates.onEndTurn).to(PockeyStates.onEndMatch);
                this.fsm.from(PockeyStates.onRoundEnd).to(PockeyStates.onEndMatch);
                this.fsm.from(PockeyStates.onSearchForPartner).to(PockeyStates.onEndMatch);
                this.fsm.from(PockeyStates.onEndMatch).to(PockeyStates.onMainMenu);
                this.fsm.from(PockeyStates.onEndMatch).to(PockeyStates.onPrepareRoundOne);
                this.fsm.from(PockeyStates.onEndMatch).to(PockeyStates.onSearchForPartner);
                this.fsm.from(PockeyStates.onRearrangeStick).to(PockeyStates.onShoot);
                this.fsm.from(PockeyStates.onRearrangeStick).to(PockeyStates.onWatch);
                this.fsm.from(PockeyStates.onRearrangeStick).to(PockeyStates.onEndTurn);
                this.fsm.from(PockeyStates.onShoot).to(PockeyStates.onEndTurn);
                this.fsm.from(PockeyStates.onShoot).to(PockeyStates.onRoundEnd);
                this.fsm.from(PockeyStates.onEndTurn).to(PockeyStates.onRepositionWhiteBall);
                this.fsm.from(PockeyStates.onEndTurn).to(PockeyStates.onWatch);
                this.fsm.from(PockeyStates.onEndTurn).to(PockeyStates.onRoundEnd);
                this.fsm.from(PockeyStates.onWatch).to(PockeyStates.onRoundEnd);
                this.fsm.from(PockeyStates.onWatch).to(PockeyStates.onRepositionWhiteBall);
                this.fsm.from(PockeyStates.onRoundEnd).to(PockeyStates.onRearrangeStick);
                this.fsm.from(PockeyStates.onRoundEnd).to(PockeyStates.onWatch);
            }
            delayStateChanging(delayedState) {
                this.nextState = delayedState;
            }
            updateDelayedState() {
                PockeyStateMachine.Instance().changeState(this.nextState);
                this.nextState = null;
            }
            hasStateInQueue() {
                if (!_.isUndefined(this.nextState) && _.isNull(this.nextState))
                    return true;
                return false;
            }
            changeState(state) {
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
            }
            getCurrentStateName() {
                let s = "";
                if (this.fsm) {
                    _.forEach(this.fsm, (state) => {
                        if (state == this.fsm.currentState) {
                            s = PockeyStates[state];
                            return;
                        }
                    });
                }
                return s;
            }
            printFsmCurrentState() {
                console.log("%c GameManager -> FSM currentState: " + PockeyStateMachine.Instance().getCurrentStateName(), "background: yellow; color: #f6546a; font-weight:bold; ");
            }
        }
        StateMachineModule.PockeyStateMachine = PockeyStateMachine;
    })(StateMachineModule = Pockey.StateMachineModule || (Pockey.StateMachineModule = {}));
})(Pockey || (Pockey = {}));
var Framework;
(function (Framework) {
    let Utils;
    (function (Utils) {
        class Vector2 {
            constructor(x = 0, y = 0) {
                this.x = x;
                this.y = y;
            }
            add(vector) {
                return new Vector2(this.x + vector.x, this.y + vector.y);
            }
            addTo(vector) {
                this.x += vector.x;
                this.y += vector.y;
            }
            substract(vector) {
                return new Vector2(this.x - vector.x, this.y - vector.y);
            }
            distanceTo(vector) {
                var dx = this.x - vector.x;
                var dy = this.y - vector.y;
                return Math.sqrt(dx * dx + dy * dy);
            }
            multiply(multiplicationFactor) {
                let cx = this.x;
                let cy = this.y;
                cx *= multiplicationFactor;
                cy *= multiplicationFactor;
                return new Vector2(cx, cy);
            }
            dot(vector) {
                return this.x * vector.x + this.y * vector.y;
            }
            length() {
                return (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
            }
            projectionOn(axis) {
                return this.dotProduct(axis.normalise());
            }
            dotProduct(vector2) {
                var componentX = this.x * vector2.x;
                var componentY = this.y * vector2.y;
                return componentX + componentY;
            }
            normalise() {
                if (this.x == 0 && this.y == 0) {
                    return new Vector2(0, 0);
                }
                return new Vector2(this.x / (Math.sqrt(this.x * this.x + this.y * this.y)), this.y / (Math.sqrt(this.x * this.x + this.y * this.y)));
            }
            getMagnitude() {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            }
            setMagnitude(magnitude) {
                var ang_current = this.getAngle();
                this.polar(magnitude, ang_current);
            }
            getAngle() {
                return Math.atan2(this.y, this.x);
            }
            polar(mag, ang_rad) {
                this.x = mag * Math.cos(ang_rad);
                this.y = mag * Math.sin(ang_rad);
            }
            rotate(angle_rad) {
                let newX = this.x * Math.cos(angle_rad) - this.y * Math.sin(angle_rad);
                let newY = this.x * Math.sin(angle_rad) + this.y * Math.cos(angle_rad);
                return new Vector2(newX, newY);
            }
            clone() {
                let clone1 = new Vector2(this.x, this.y);
                return clone1;
            }
        }
        Utils.Vector2 = Vector2;
    })(Utils = Framework.Utils || (Framework.Utils = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    let Utils;
    (function (Utils) {
        class PixiDashedLine {
            static drawDashedLine(graphics, startX = 0, startY = 0, endX = 0, endY = 0, strokeLength = 0, gap = 0, color = 0xffffff, stroke = 1, alpha = 1) {
                let arrowPoint = new Utils.Vector2();
                graphics.lineStyle(stroke, color, alpha);
                let segmentLength = strokeLength + gap;
                let deltaX = endX - startX;
                let deltaY = endY - startY;
                let _delta = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
                let segmentsCount = Math.floor(Math.abs(_delta / segmentLength));
                let radians = Math.atan2(deltaY, deltaX);
                let aX = startX;
                let aY = startY;
                deltaX = Math.cos(radians) * segmentLength;
                deltaY = Math.sin(radians) * segmentLength;
                for (let i = 0; i < segmentsCount; i++) {
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
            }
            static drawDottedLine(graphics, startX = 0, startY = 0, endX = 0, endY = 0, radius = 0, gap = 0, color = 0xffffff, alpha = 1) {
                let arrowPoint = new Utils.Vector2();
                let segmentLength = radius * 2 + gap;
                let deltaX = endX - startX;
                let deltaY = endY - startY;
                let _delta = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
                let segmentsCount = Math.floor(Math.abs(_delta / segmentLength));
                let radians = Math.atan2(deltaY, deltaX);
                let aX = startX;
                let aY = startY;
                deltaX = Math.cos(radians) * segmentLength;
                deltaY = Math.sin(radians) * segmentLength;
                graphics.beginFill(color, alpha);
                for (let i = 0; i < segmentsCount; i++) {
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
                arrowPoint.x = aX + Math.cos(radians) * gap * 1.6;
                arrowPoint.y = aY + Math.sin(radians) * gap * 1.6;
                return arrowPoint;
            }
        }
        Utils.PixiDashedLine = PixiDashedLine;
    })(Utils = Framework.Utils || (Framework.Utils = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    let Utils;
    (function (Utils) {
        class ButtonState {
            constructor() {
                this.down = false;
                this.pressed = false;
            }
        }
        Utils.ButtonState = ButtonState;
    })(Utils = Framework.Utils || (Framework.Utils = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    let Utils;
    (function (Utils) {
        var Point = PIXI.Point;
        class MouseHandler {
            constructor() {
                this.initialized = false;
            }
            static Instance() {
                if (!MouseHandler.instance) {
                    MouseHandler.instance = new MouseHandler();
                    if (!MouseHandler.Instance().initialized) {
                        MouseHandler.Instance().initialized = true;
                        MouseHandler.Instance().position = new Point();
                        MouseHandler.Instance().left = new Utils.ButtonState();
                        MouseHandler.Instance().middle = new Utils.ButtonState();
                        MouseHandler.Instance().right = new Utils.ButtonState();
                        Framework.AbstractEntryPoint.stage.interactive = true;
                        Framework.AbstractEntryPoint.stage.interactiveChildren = true;
                        Framework.AbstractEntryPoint.stage.on("mousemove", MouseHandler.Instance().handleMouseMove.bind(this));
                        Framework.AbstractEntryPoint.stage.on("mousedown", (e) => {
                            MouseHandler.Instance().handleMouseDown(e);
                        });
                        Framework.AbstractEntryPoint.stage.on("mouseup", (e) => {
                            MouseHandler.Instance().handleMouseUp(e);
                        });
                        Framework.AbstractEntryPoint.stage.on("mouseupoutside", (e) => {
                            MouseHandler.Instance().handleMouseUp(e);
                        });
                        MouseHandler.Instance().reset();
                    }
                }
                return MouseHandler.instance;
            }
            handleMouseMove() {
                let x = Framework.AbstractEntryPoint.renderer.plugins.interaction.mouse.global.x;
                let y = Framework.AbstractEntryPoint.renderer.plugins.interaction.mouse.global.y;
                MouseHandler.Instance().position = new Point(x, y);
            }
            handleMouseDown(e) {
                if (e.data && e.data.button == 0) {
                    if (!MouseHandler.Instance().left.down) {
                        MouseHandler.Instance().left.pressed = true;
                    }
                    MouseHandler.Instance().left.down = true;
                }
                else if (e.data && e.data.button == 1) {
                    if (!MouseHandler.Instance().middle.down) {
                        MouseHandler.Instance().middle.pressed = true;
                    }
                    MouseHandler.Instance().middle.down = true;
                }
                else if (e.data && e.data.button == 2) {
                    if (!MouseHandler.Instance().right.down) {
                        MouseHandler.Instance().right.pressed = true;
                    }
                    MouseHandler.Instance().right.down = true;
                }
            }
            handleMouseUp(e) {
                if (e.data && e.data.button == 0) {
                    MouseHandler.Instance().left.down = false;
                }
                else if (e.data && e.data.button == 1) {
                    MouseHandler.Instance().middle.down = false;
                }
                else if (e.data && e.date.button == 2) {
                    MouseHandler.Instance().right.down = false;
                }
            }
            reset() {
                this.left.pressed = false;
                this.middle.pressed = false;
                this.right.pressed = false;
                requestAnimationFrame(this.reset.bind(this));
            }
            GetAngle(vector) {
                return Math.atan2(this.position.x - vector.x, -(this.position.y - vector.y)) * (180 / Math.PI);
            }
        }
        Utils.MouseHandler = MouseHandler;
    })(Utils = Framework.Utils || (Framework.Utils = {}));
})(Framework || (Framework = {}));
var Pockey;
(function (Pockey) {
    var Settings = Framework.Settings;
    class PockeySettings {
    }
    PockeySettings.PLAYER_SOCKET_ID = "";
    PockeySettings.PLAYER_NICKNAME = "";
    PockeySettings.PLAYER_ID = "guest";
    PockeySettings.PLAYER_LEVEL = 1;
    PockeySettings.OPPONENT_SOCKET_ID = "";
    PockeySettings.OPPONENT_NICKNAME = "SandruOpponent";
    PockeySettings.DELTA = 0.98;
    PockeySettings.FRAMES_TO_SEND_ON_WATCH = 6;
    PockeySettings.BALL_RADIUS = 17;
    PockeySettings.P2_WORLD_STEP = 1 / 60;
    PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME = "pockey_custom_background_name";
    PockeySettings.PUCK_COLOR = 0xe4b31c;
    PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER = 2;
    PockeySettings.STICK_MAX_POWER = 108;
    PockeySettings.LARGE_GOALIES_ARRAY = [];
    PockeySettings.BABYLON_Y_OFFSET = 27;
    PockeySettings.GOALIE_SPEED = 1;
    PockeySettings.SMALL_GOALIES_ARRAY = [];
    PockeySettings.CURRENT_ROUND = 0;
    PockeySettings.CURRENT_SHOOTOUT_ROUND = 0;
    PockeySettings.LARGE_COLORS_ARRAY = [
        {
            category: "COLORS",
            id: "0xf15369",
            color: 0xf15369,
            complementaryColor: 0x8fc7ee
        },
        {
            category: "COLORS",
            id: "0x8fc7ee",
            color: 0x8fc7ee,
            complementaryColor: 0x8fc7ee
        },
        {
            category: "COLORS",
            id: "0xff7fc1",
            color: 0xff7fc1,
            complementaryColor: 0x8ce1b2
        },
        {
            category: "COLORS",
            id: "0xdc94e5",
            color: 0xdc94e5,
            complementaryColor: 0xffba57
        },
        {
            category: "COLORS",
            id: "0xb09de0",
            color: 0xb09de0,
            complementaryColor: 0xf15369
        },
        {
            category: "COLORS",
            id: "0x85a6ea",
            color: 0x85a6ea,
            complementaryColor: 0xf15369
        },
        {
            category: "COLORS",
            id: "0x7bd3de",
            color: 0x7bd3de,
            complementaryColor: 0xf15369
        },
        {
            category: "COLORS",
            id: "0x74d0c4",
            color: 0x74d0c4,
            complementaryColor: 0x74d0c4
        },
        {
            category: "COLORS",
            id: "0x8ce1b2",
            color: 0x8ce1b2,
            complementaryColor: 0xf15369
        },
        {
            category: "COLORS",
            id: "0xbae3b6",
            color: 0xbae3b6,
            complementaryColor: 0xf15369
        },
        {
            category: "COLORS",
            id: "0xe4eebf",
            color: 0xe4eebf,
            complementaryColor: 0xf15369
        },
        {
            category: "COLORS",
            id: "0xf3ce87",
            color: 0xf3ce87,
            complementaryColor: 0x74d0c4
        },
        {
            category: "COLORS",
            id: "0xffba57",
            color: 0xffba57,
            complementaryColor: 0x74d0c4
        },
        {
            category: "COLORS",
            id: "0xef927d",
            color: 0xef927d,
            complementaryColor: 0x07b3de
        }
    ];
    PockeySettings.SMALL_COLORS_ARRAY = [
        {
            category: "COLORS",
            id: "0xf15369",
            color: 0xf15369
        }
    ];
    PockeySettings.PLAYER_COLOR_ID = PockeySettings.SMALL_COLORS_ARRAY[0].id;
    PockeySettings.SMALL_DECALS_ARRAY = [
        {
            category: "DECALS",
            id: "decal_default",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_default.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_default.png",
            level: 1
        }
    ];
    PockeySettings.LARGE_DECALS_ARRAY = [
        {
            category: "DECALS",
            id: "decal_default",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_default.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_default.png",
            level: 1
        },
        {
            category: "DECALS",
            id: "decal_welcome",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/dccal_welcome.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/dccal_welcome.png",
            level: 1
        },
        {
            category: "DECALS",
            id: "decal_astrojunkie",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_astrojunkie.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_astrojunkie.png",
            level: 2
        }, {
            category: "DECALS",
            id: "decal_blastoff",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_blastoff.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_blastoff.png",
            level: 2
        },
        {
            category: "DECALS",
            id: "decal_cthulu",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_cthulu.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_cthulu.png",
            level: 3
        },
        {
            category: "DECALS",
            id: "decal_dice",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_dice.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_dice.png",
            level: 3
        },
        {
            category: "DECALS",
            id: "decal_insertcoin",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_insertcoin.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_insertcoin.png",
            level: 4
        },
        {
            category: "DECALS",
            id: "decal_knucklesandwhich",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_knucklesandwhich.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_knucklesandwhich.png",
            level: 4
        }, {
            category: "DECALS",
            id: "decal_looselips",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_looselips.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_looselips.png",
            level: 5
        },
        {
            category: "DECALS",
            id: "decal_oneup",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_oneup.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_oneup.png",
            level: 6
        },
        {
            category: "DECALS",
            id: "decal_playerone",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_playerone.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_playerone.png",
            level: 7
        }, {
            category: "DECALS",
            id: "decal_pockey",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_pockey.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_pockey.png",
            level: 7
        },
        {
            category: "DECALS",
            id: "decal_ragequit",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_ragequit.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_ragequit.png",
            level: 8
        },
        {
            category: "DECALS",
            id: "decal_statTrickshot",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_statTrickshot.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_statTrickshot.png",
            level: 9
        },
        {
            category: "DECALS",
            id: "decal_towerking",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_towerking.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_towerking.png",
            level: 10
        },
        {
            category: "DECALS",
            id: "decal_wingedsword",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_wingedsword.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/decalSkins/decal_wingedsword.png",
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
            id: "feltcolor-teal",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/feltColorSkins/icon_feltcolor-teal.png",
            color: 0x4ae1d8,
            borderColor: 0x7e243f,
            level: 1
        },
        {
            category: "MISC",
            id: "feltcolor-blue",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/feltColorSkins/icon_feltcolor-blue.png",
            color: 0x7ab9ff,
            borderColor: 0x7e243f,
            level: 1
        },
        {
            category: "MISC",
            id: "feltcolor-orange",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/feltColorSkins/icon_feltcolor-orange.png",
            color: 0xf26b6c,
            borderColor: 0x1f979b,
            level: 1
        },
        {
            category: "MISC",
            id: "feltcolor-pink",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/feltColorSkins/icon_feltcolor-pink.png",
            color: 0xff7ecc,
            borderColor: 0x4e3b9c,
            level: 1
        },
        {
            category: "MISC",
            id: "feltcolor-purple",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/feltColorSkins/icon_feltcolor-purple.png",
            color: 0xfc7af8,
            borderColor: 0x2d9c9d,
            level: 1
        },
        {
            category: "MISC",
            id: "feltcolor-red",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/feltColorSkins/icon_feltcolor-red.png",
            color: 0xdc4e4e,
            borderColor: 0x704b8c,
            level: 1
        },
        {
            category: "MISC",
            id: "feltcolor-silver",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/feltColorSkins/icon_feltcolor-silver.png",
            color: 0x99b3be,
            borderColor: 0x284263,
            level: 1
        },
        {
            category: "MISC",
            id: "feltcolor-tope",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/feltColorSkins/icon_feltcolor-tope.png",
            color: 0xc5aa85,
            borderColor: 0x305d72,
            level: 1
        },
        {
            category: "MISC",
            id: "feltcolor-yellow",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/feltColorSkins/icon_feltcolor-yellow.png",
            color: 0xdad249,
            borderColor: 0x257f6d,
            level: 1
        }
    ];
    PockeySettings.SMALL_MISC_ARRAY = [
        {
            category: "MISC",
            id: "feltcolor-teal",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/feltColorSkins/icon_feltcolor-teal.png",
            color: 0x4ae1d8,
            borderColor: 0x7e243f,
            level: 1
        },
    ];
    PockeySettings.POOLTABLE_FELT_ID = PockeySettings.LARGE_MISC_ARRAY[0].id;
    PockeySettings.SMALL_CUES_ARRAY = [
        {
            category: "CUES",
            id: "icon_stick_default",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-default.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_default.png",
            level: 1
        }
    ];
    PockeySettings.LARGE_CUES_ARRAY = [
        {
            category: "CUES",
            id: "icon_stick-default",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-default.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_default.png",
            level: 1
        },
        {
            category: "CUES",
            id: "stick_basic",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-basic.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_basic.png",
            level: 1
        },
        {
            category: "CUES",
            id: "stick_asiimowned",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-asiimowned.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_asiimowned.png",
            level: 1
        },
        {
            category: "CUES",
            id: "stick_bluesteel",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-bluesteel.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_bluesteel.png",
            level: 2
        },
        {
            category: "CUES",
            id: "stick_candycane",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-candycane.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_candycane.png",
            level: 2
        },
        {
            category: "CUES",
            id: "stick_dotty",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-dotty.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_dotty.png",
            level: 2
        },
        {
            category: "CUES",
            id: "stick_faceybook",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-faceybook.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_faceybook.png",
            level: 3
        },
        {
            category: "CUES",
            id: "stick_faceyou",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-faceyou.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_faceyou.png",
            level: 3
        },
        {
            category: "CUES",
            id: "stick_ivory",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-ivory.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_ivory.png",
            level: 4
        },
        {
            category: "CUES",
            id: "stick_ninja",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-ninja.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_ninja.png",
            level: 4
        },
        {
            category: "CUES",
            id: "stick_pinky",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-pinky.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_pinky.png",
            level: 4
        },
        {
            category: "CUES",
            id: "stick_purplestripe",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-purplestripe.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_purplestripe.png",
            level: 5
        },
        {
            category: "CUES",
            id: "stick_ragequit",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-ragequit.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_ragequit.png",
            level: 6
        },
        {
            category: "CUES",
            id: "stick_rawkstar",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-rawkstar.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_rawkstar.png",
            level: 7
        },
        {
            category: "CUES",
            id: "stick_rocket",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-rocket.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_rocket.png",
            level: 7
        },
        {
            category: "CUES",
            id: "stick_snakeeyes",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-snakeeyes.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_snakeeyes.png",
            level: 8
        },
        {
            category: "CUES",
            id: "stick_tiger",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-tiger.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_tiger.png",
            level: 8
        },
        {
            category: "CUES",
            id: "stick_tweetybird",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-tweetybird.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_tweetybird.png",
            level: 9
        },
        {
            category: "CUES",
            id: "stick_whiteknight",
            icon: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/icon_stick-whiteknight.png",
            model: Settings.desktopAssetsPath + "Images/InventoryScreen/poolstickSkins/stick_whiteknight.png",
            level: 10
        },
    ];
    PockeySettings.PLAYER_CUE_ID = PockeySettings.SMALL_CUES_ARRAY[0].id;
    PockeySettings.ROUND_DURATION_IN_SECONDS = 20;
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
    Pockey.PockeySettings = PockeySettings;
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let Sound;
    (function (Sound) {
        var Settings = Framework.Settings;
        class PockeySoundURLS {
        }
        PockeySoundURLS.MAIN_MENU_AMBIANCE = Settings.desktopAssetsPath + "Audio/" + "pockey_main_menu.ogg";
        PockeySoundURLS.IN_GAME_AMBIANCE = Settings.desktopAssetsPath + "Audio/" + "ambient.ogg";
        PockeySoundURLS.SHOOT_BALL = Settings.desktopAssetsPath + "Audio/" + "shoot_ball.mp3";
        PockeySoundURLS.LAST_FIVE_SECONDS = Settings.desktopAssetsPath + "Audio/" + "5sec.ogg";
        PockeySoundURLS.OPPONENT_FOUND = Settings.desktopAssetsPath + "Audio/" + "opponent_found.ogg";
        PockeySoundURLS.BALL_TO_BALL_HIT = Settings.desktopAssetsPath + "Audio/" + "ball2ball_hit2.mp3";
        PockeySoundURLS.GOALKEEPER_HIT = Settings.desktopAssetsPath + "Audio/" + "goalkeeperHit.mp3";
        PockeySoundURLS.BALL_IN_POCKET = Settings.desktopAssetsPath + "Audio/" + "ballinpocket.mp3";
        Sound.PockeySoundURLS = PockeySoundURLS;
    })(Sound = Pockey.Sound || (Pockey.Sound = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let GameModule;
    (function (GameModule) {
        var SignalsManager = Framework.Signals.SignalsManager;
        var SignalsType = Framework.Signals.SignalsType;
        var Vector2 = Framework.Utils.Vector2;
        var PockeySoundURLS = Pockey.Sound.PockeySoundURLS;
        let MaterialType;
        (function (MaterialType) {
            MaterialType[MaterialType["BALL_MATERIAL"] = 1] = "BALL_MATERIAL";
            MaterialType[MaterialType["SHADOW_MATERIAL"] = 2] = "SHADOW_MATERIAL";
            MaterialType[MaterialType["LINE_MATERIAL"] = 3] = "LINE_MATERIAL";
            MaterialType[MaterialType["BALL_ONLY_MATERIAL"] = 4] = "BALL_ONLY_MATERIAL";
            MaterialType[MaterialType["PUCK_ONLY_MATERIAL"] = 5] = "PUCK_ONLY_MATERIAL";
            MaterialType[MaterialType["PUCK_MATERIAL"] = 6] = "PUCK_MATERIAL";
            MaterialType[MaterialType["GOALIE_MATERIAL"] = 7] = "GOALIE_MATERIAL";
        })(MaterialType = GameModule.MaterialType || (GameModule.MaterialType = {}));
        class P2WorldManager {
            constructor() {
                this.initialized = false;
                this.frameStep = 1 / 60;
                this.name = "P2WorldManager";
                this.materials = {};
            }
            static Instance() {
                if (!P2WorldManager.instance) {
                    P2WorldManager.instance = new P2WorldManager();
                    if (!P2WorldManager.Instance().initialized) {
                        P2WorldManager.Instance().world = new p2.World({
                            gravity: [0, 0],
                        });
                        P2WorldManager.Instance().world.stepping = true;
                        TweenMax.delayedCall(Pockey.PockeySettings.P2_WORLD_STEP, P2WorldManager.Instance().createElements.bind(this));
                        P2WorldManager.Instance().initialized = true;
                        console.log("%c" + "P2WorldManager initialized", "color: blue");
                    }
                }
                return P2WorldManager.instance;
            }
            getMaterialByID(materialID) {
                if (!_.isNull(P2WorldManager.Instance().materials[materialID]) && !_.isUndefined(P2WorldManager.Instance().materials[materialID]))
                    return P2WorldManager.Instance().materials[materialID];
                else {
                    console.log("c%" + " " + P2WorldManager.Instance().name + " -> ERROR: material not registered");
                    return null;
                }
            }
            createElements() {
                P2WorldManager.Instance().world.sleepMode = p2.World.BODY_SLEEPING;
                P2WorldManager.Instance().materials = {};
                P2WorldManager.createMaterials();
                P2WorldManager.defineContactMaterials();
            }
            static createMaterials() {
                P2WorldManager.createNewMaterial(MaterialType.SHADOW_MATERIAL);
                P2WorldManager.createNewMaterial(MaterialType.BALL_MATERIAL);
                P2WorldManager.createNewMaterial(MaterialType.PUCK_MATERIAL);
                P2WorldManager.createNewMaterial(MaterialType.BALL_ONLY_MATERIAL);
                P2WorldManager.createNewMaterial(MaterialType.PUCK_ONLY_MATERIAL);
                P2WorldManager.createNewMaterial(MaterialType.LINE_MATERIAL);
                P2WorldManager.createNewMaterial(MaterialType.GOALIE_MATERIAL);
            }
            static defineContactMaterials() {
                let ballToNormalLineContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.LINE_MATERIAL), {
                    restitution: 0.6821,
                });
                let ballToBallContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), {
                    restitution: 0.9
                });
                P2WorldManager.Instance().world.addContactMaterial(ballToBallContactMaterial);
                let ballToPuckContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_MATERIAL), {
                    restitution: 1,
                });
                P2WorldManager.Instance().world.addContactMaterial(ballToPuckContactMaterial);
                P2WorldManager.Instance().world.addContactMaterial(ballToNormalLineContactMaterial);
                let ballToPuckOnlyLineContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_ONLY_MATERIAL), {
                    restitution: 0.6
                });
                P2WorldManager.Instance().world.addContactMaterial(ballToPuckOnlyLineContactMaterial);
                let puckToNormalLineContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.LINE_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_MATERIAL), {
                    restitution: 0.6,
                });
                P2WorldManager.Instance().world.addContactMaterial(puckToNormalLineContactMaterial);
                let puckToBallOnlyLineContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_ONLY_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_MATERIAL), {
                    restitution: 0.6
                });
                P2WorldManager.Instance().world.addContactMaterial(puckToBallOnlyLineContactMaterial);
                let goalieToBallContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.GOALIE_MATERIAL), {
                    restitution: 1
                });
                P2WorldManager.Instance().world.addContactMaterial(goalieToBallContactMaterial);
                let goalieToPuckContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.GOALIE_MATERIAL), {
                    restitution: 0.8
                });
                P2WorldManager.Instance().world.addContactMaterial(goalieToPuckContactMaterial);
                P2WorldManager.Instance().world.on("preSolve", (evt) => {
                    _.forEach(evt.contactEquations, (ce) => {
                        if ((ce.shapeA.material.id == MaterialType.BALL_MATERIAL && ce.shapeB.material.id == MaterialType.SHADOW_MATERIAL)) {
                            ce.enabled = false;
                        }
                        else if ((ce.shapeA.material.id == MaterialType.PUCK_MATERIAL && ce.shapeB.material.id == MaterialType.PUCK_ONLY_MATERIAL)) {
                            ce.enabled = false;
                        }
                        else if ((ce.shapeA.material.id == MaterialType.BALL_MATERIAL && ce.shapeB.material.id == MaterialType.BALL_ONLY_MATERIAL)) {
                            ce.enabled = false;
                        }
                        else if ((ce.shapeA.material.id == MaterialType.SHADOW_MATERIAL && ce.shapeB.material.id == MaterialType.BALL_MATERIAL)) {
                            ce.enabled = false;
                        }
                        else if ((ce.shapeA.material.id == MaterialType.PUCK_MATERIAL && ce.shapeB.material.id == MaterialType.SHADOW_MATERIAL)) {
                            ce.enabled = false;
                        }
                        else if ((ce.shapeA.material.id == MaterialType.SHADOW_MATERIAL && ce.shapeB.material.id == MaterialType.PUCK_MATERIAL)) {
                            ce.enabled = false;
                        }
                        else if ((ce.shapeA.material.id == MaterialType.SHADOW_MATERIAL && ce.shapeB.material.id == MaterialType.GOALIE_MATERIAL)) {
                            ce.enabled = false;
                        }
                        else if ((ce.shapeA.material.id == MaterialType.GOALIE_MATERIAL && ce.shapeB.material.id == MaterialType.PUCK_ONLY_MATERIAL)) {
                            ce.enabled = false;
                        }
                        else if ((ce.shapeA.material.id == MaterialType.GOALIE_MATERIAL && ce.shapeB.material.id == MaterialType.LINE_MATERIAL)) {
                            ce.enabled = false;
                        }
                        else if ((ce.shapeA.material.id == MaterialType.BALL_MATERIAL && ce.shapeB.material.id == MaterialType.BALL_MATERIAL)) {
                            let maxPower = 460;
                            let velocityVectorA = new Vector2(ce.bodyA.velocity[0], ce.bodyA.velocity[1]);
                            let speedA = velocityVectorA.getMagnitude();
                            let velocityVectorB = new Vector2(ce.bodyB.velocity[0], ce.bodyB.velocity[1]);
                            let speedB = velocityVectorB.getMagnitude();
                            let higherVelocity = (speedB > speedA) ? speedB : speedA;
                            let hitVolume = Math.round((higherVelocity / maxPower) * 100) / 100;
                            if (hitVolume > 1)
                                hitVolume = 1;
                            else if (hitVolume < 0.3)
                                hitVolume = 0.3;
                            SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{
                                    volume: hitVolume,
                                    soundName: PockeySoundURLS.BALL_TO_BALL_HIT,
                                    enableMulti: false
                                }]);
                        }
                        else if ((ce.shapeA.material.id == MaterialType.BALL_MATERIAL && ce.shapeB.material.id == MaterialType.GOALIE_MATERIAL)) {
                            let ballVelocity = new Vector2(ce.bodyA.velocity[0], ce.bodyA.velocity[1]);
                            let ballSpeed = ballVelocity.getMagnitude();
                            if (ballSpeed < 108) {
                                let normalizedVector = ballVelocity.normalise().multiply(108);
                                ce.bodyA.velocity[0] = normalizedVector.x;
                                ce.bodyA.velocity[1] = normalizedVector.y;
                            }
                            SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{
                                    soundName: PockeySoundURLS.GOALKEEPER_HIT
                                }]);
                        }
                        else if ((ce.shapeA.material.id == MaterialType.PUCK_MATERIAL && ce.shapeB.material.id == MaterialType.GOALIE_MATERIAL)) {
                            let ballVelocity = new Vector2(ce.bodyA.velocity[0], ce.bodyA.velocity[1]);
                            let ballSpeed = ballVelocity.getMagnitude();
                            if (ballSpeed < 108) {
                                let normalizedVector = ballVelocity.normalise().multiply(108);
                                ce.bodyA.velocity[0] = normalizedVector.x;
                                ce.bodyA.velocity[1] = normalizedVector.y;
                            }
                            SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{
                                    soundName: PockeySoundURLS.GOALKEEPER_HIT
                                }]);
                        }
                    });
                }, this);
            }
            checkCollisions() {
            }
            static createNewMaterial(ballMaterialType) {
                P2WorldManager.Instance().materials[ballMaterialType] = new p2.Material(ballMaterialType);
            }
        }
        GameModule.P2WorldManager = P2WorldManager;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Framework;
(function (Framework) {
    let Utils;
    (function (Utils) {
        var P2WorldManager = Pockey.GameModule.P2WorldManager;
        let LineType;
        (function (LineType) {
            LineType["BallsOnly"] = "BallOnly";
            LineType["PuckOnly"] = "PuckOnly";
            LineType["Normal"] = "Normal";
        })(LineType = Utils.LineType || (Utils.LineType = {}));
        class Line {
            constructor(firstPoint, secondPoint, materialType) {
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
            getAngle() {
                let x1 = this.firstPoint.x;
                let y1 = this.firstPoint.y;
                let x2 = this.secondPoint.x;
                let y2 = this.secondPoint.y;
                let dy = y2 - y1;
                let dx = x2 - x1;
                let theta = Math.atan2(dy, dx);
                return theta;
            }
        }
        Utils.Line = Line;
    })(Utils = Framework.Utils || (Framework.Utils = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    let Loaders;
    (function (Loaders) {
        var SignalsManager = Framework.Signals.SignalsManager;
        var SignalsType = Framework.Signals.SignalsType;
        class AssetsLoader {
            constructor() {
                this.loader = PIXI.loader;
                this.assetsNames = [];
                this.loader.onComplete.add(() => {
                    _.forEach(this.assetsNames, (assetName) => {
                        if (_.includes(assetName, ".mp3") ||
                            _.includes(assetName, ".ogg") ||
                            _.includes(assetName, ".wav")) {
                            SignalsManager.DispatchSignal(SignalsType.CREATE_SOUND_CACHE, [assetName]);
                        }
                    });
                    SignalsManager.DispatchSignal(SignalsType.ASSETS_LOADED);
                });
                this.loader.onProgress.add(() => {
                    let event = new CustomEvent('progress', { detail: this.loader.progress });
                    document.dispatchEvent(event);
                });
            }
            addAssetToLoad(assetName) {
                if (!_.includes(this.assetsNames, assetName)) {
                    this.assetsNames.push(assetName);
                    this.loader.add(assetName);
                }
            }
            StartLoading() {
                this.loadFonts();
                this.loader.load();
            }
            addFontToLoad(fontName) {
                if (!this.fontsToLoad)
                    this.fontsToLoad = [];
                this.fontsToLoad.push(fontName);
            }
            loadFonts() {
                WebFont.load({
                    active: () => {
                        TweenMax.delayedCall(0.4, this.onFontLoadComplete.bind(this));
                    },
                    fontloading: this.preRenderFont.bind(this),
                    custom: {
                        families: this.fontsToLoad,
                        urls: ['/css/fonts.css']
                    }
                });
            }
            onFontLoadComplete() {
                console.log("Font Loading Complete");
            }
            preRenderFont() {
            }
        }
        Loaders.AssetsLoader = AssetsLoader;
    })(Loaders = Framework.Loaders || (Framework.Loaders = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    let Background;
    (function (Background) {
        var AbstractModule = Framework.Abstracts.AbstractModule;
        var SignalsManager = Framework.Signals.SignalsManager;
        var SignalsType = Framework.Signals.SignalsType;
        class AbstractBackgroundModule extends AbstractModule {
            constructor() {
                super();
                this.addAssetToLoad(Framework.Settings.desktopAssetsPath + Framework.Settings.backgroundsPath + "main_bg.png");
                this.registerBackground(Framework.Settings.mainBackgroundName, Framework.Settings.desktopAssetsPath + Framework.Settings.backgroundsPath + "main_bg.png", document.getElementById("MainBackground"));
            }
            registerSignalsHandlers() {
                super.registerSignalsHandlers();
                SignalsManager.AddSignalCallback(SignalsType.CHANGE_BACKGROUND, this.onChangeBackground.bind(this));
            }
            onChangeBackground(param) {
                this.changeBackground(param[0].toString(), +param[1]);
            }
            registerBackground(name, texturePath, htmlDiv) {
                if (!this.backgrounds)
                    this.backgrounds = {};
                let bg = { path: texturePath, div: htmlDiv };
                bg.initialWidth = bg.div.offsetWidth;
                bg.initialHeight = bg.div.offsetHeight;
                this.backgrounds[name] = bg;
            }
            createElements() {
                super.createElements();
                _.forEach(this.backgrounds, (bg) => {
                    bg.div.style.background = "center / contain no-repeat #1A4157 url(" + bg.path + ")";
                    bg.div.style.opacity = "0";
                    if (bg.initialHeight == 0 || bg.initialWidth == 0) {
                        bg.initialWidth = bg.div.offsetWidth;
                        bg.initialHeight = bg.div.offsetHeight;
                    }
                    bg.div.style.display = "none";
                });
            }
            changeBackground(id, fadeTime) {
                if (this.backgrounds[id]) {
                    let newBackground = this.backgrounds[id];
                    if (this.currentBackground == newBackground) {
                        return;
                    }
                    newBackground.div.style.opacity = "0";
                    newBackground.div.style.display = "block";
                    if (!_.isUndefined(this.currentBackground) && !_.isNull(this.currentBackground)) {
                        let oldBackground = this.currentBackground;
                        TweenMax.to(newBackground.div, fadeTime, { css: { opacity: 1 }, onComplete: this.removeBackgroundFromParent.bind(this), onCompleteParams: [oldBackground.div] });
                    }
                    else {
                        TweenMax.to(newBackground.div, fadeTime, { css: { opacity: 1 } });
                    }
                    this.currentBackground = newBackground;
                }
                else {
                    console.warn("background id not registered: " + id);
                }
            }
            removeBackgroundFromParent(background) {
                background.style.display = "none";
            }
            onResize(params) {
                super.onResize(params);
            }
        }
        Background.AbstractBackgroundModule = AbstractBackgroundModule;
    })(Background = Framework.Background || (Framework.Background = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    let UserInterface;
    (function (UserInterface) {
        var AbstractModule = Framework.Abstracts.AbstractModule;
        class AbstractUserInterfaceModule extends AbstractModule {
        }
        UserInterface.AbstractUserInterfaceModule = AbstractUserInterfaceModule;
    })(UserInterface = Framework.UserInterface || (Framework.UserInterface = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    let Utils;
    (function (Utils) {
        var Point = PIXI.Point;
        class TouchHandler {
            constructor() {
                this.initialized = false;
                this.isTouchMoving = false;
            }
            static Instance() {
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
            }
            handleTouchMove(e) {
                let x = e.touches[0].clientX;
                let y = e.touches[0].clientY;
                TouchHandler.Instance().position = new Point(x, y);
                TouchHandler.Instance().isTouchMoving = true;
            }
            handleTouchEnd(e) {
                TouchHandler.Instance().isTouchMoving = false;
            }
        }
        Utils.TouchHandler = TouchHandler;
    })(Utils = Framework.Utils || (Framework.Utils = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    let Connection;
    (function (Connection) {
        class FrameworkSocketNamespaces {
        }
        FrameworkSocketNamespaces.SEARCH = "/searching";
        FrameworkSocketNamespaces.PLAY = "/play";
        Connection.FrameworkSocketNamespaces = FrameworkSocketNamespaces;
        class FrameworkSocketEvents {
        }
        FrameworkSocketEvents.newConnection = "FrameworkSocketEvents" + "newConnection";
        FrameworkSocketEvents.letsConnect = "FrameworkSocketEvents" + "letsConnect";
        FrameworkSocketEvents.joinRoom = "FrameworkSocketEvents" + "joinRoom";
        FrameworkSocketEvents.joinedRoom = "FrameworkSocketEvents" + "joinedRoom";
        FrameworkSocketEvents.leftRoom = "FrameworkSocketEvents" + "leftRoom";
        FrameworkSocketEvents.privateMessage = "FrameworkSocketEvents" + "privateMessage";
        FrameworkSocketEvents.getUserFromDatabase = "FrameworkSocketEvents" + "getUserFromDatabase";
        FrameworkSocketEvents.updateUserData = "FrameworkSocketEvents" + "updateUserData";
        FrameworkSocketEvents.disconnectMySocket = "FrameworkSocketEvents" + "disconnectMySocket";
        Connection.FrameworkSocketEvents = FrameworkSocketEvents;
        class FrameworkSocketMessages {
        }
        FrameworkSocketMessages.WHO_WANTS_TO_PLAY = "FrameworkSocketMessages." + "WHO_WANTS_TO_PLAY";
        FrameworkSocketMessages.I_WANT_TO_PLAY = "FrameworkSocketMessages." + "I_WANTS_TO_PLAY";
        FrameworkSocketMessages.HELLO = "FrameworkSocketMessages." + "HELLO";
        Connection.FrameworkSocketMessages = FrameworkSocketMessages;
    })(Connection = Framework.Connection || (Framework.Connection = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    let Connection;
    (function (Connection) {
        var SignalsManager = Framework.Signals.SignalsManager;
        var ConnectionSignalsType = Framework.Signals.ConnectionSignalsType;
        class SocketClient {
            constructor() {
                this.lookingForPartner = false;
                this.myID = "";
                this.socketConnectionCreated = false;
            }
            initializeClientSocket(onSocketInitialiazed) {
                this.socket = io();
                this.socket.binaryType = "blob";
                this.socket.on('connect', () => {
                    onSocketInitialiazed();
                });
            }
            getUserFromDataBase(username, callback) {
                this.socket.on(Connection.FrameworkSocketEvents.getUserFromDatabase, (usernameData) => {
                    callback(usernameData);
                });
                this.socket.emit(Connection.FrameworkSocketEvents.getUserFromDatabase, username);
            }
            updateUserData(dbObject, callback) {
                this.socket.on(Connection.FrameworkSocketEvents.updateUserData, (data) => {
                    callback(data);
                    console.log("intra la socket client updateUserData");
                });
                this.socket.emit(Connection.FrameworkSocketEvents.updateUserData, dbObject);
                console.log("intra la socket client updateUserData");
            }
            disconnect() {
                this.socketConnectionCreated = false;
                if (this.playingSocket)
                    this.playingSocket.disconnect();
            }
            initializeSearchingSocket() {
                this.searchingSocket = io(Connection.FrameworkSocketNamespaces.SEARCH);
                this.searchingSocket.on('connect', () => {
                    this.myID = this.searchingSocket.id.replace(Connection.FrameworkSocketNamespaces.SEARCH, '');
                    SignalsManager.DispatchSignal(ConnectionSignalsType.UPDATE_SOCKET_ID, [this.myID]);
                    console.log("sunt conectat pe search: " + this.myID);
                    this.searchingSocket.emit(Connection.FrameworkSocketEvents.letsConnect, Connection.FrameworkSocketMessages.WHO_WANTS_TO_PLAY, this.myID, "");
                    this.lookingForPartner = true;
                });
                this.searchingSocket.on(Connection.FrameworkSocketEvents.letsConnect, (msg, id, partnerID) => {
                    console.log("cineva vrea sa ma conectez, socket: " + id + ". verific...");
                    if (this.lookingForPartner && msg == Connection.FrameworkSocketMessages.WHO_WANTS_TO_PLAY) {
                        if (id != this.myID && (partnerID == "")) {
                            console.log("ma conectez cu: " + id);
                            this.searchingSocket.emit(Connection.FrameworkSocketEvents.letsConnect, Connection.FrameworkSocketMessages.I_WANT_TO_PLAY, id, this.myID);
                            this.partnerID = id;
                            this.connectionID = id + this.myID;
                            this.initializePlayingSocket();
                            this.lookingForPartner = false;
                        }
                    }
                    else if (this.lookingForPartner && msg == Connection.FrameworkSocketMessages.I_WANT_TO_PLAY) {
                        if (id == this.myID && (partnerID != "" && partnerID != null && partnerID != undefined)) {
                            console.log("ma conectez cu: " + partnerID);
                            this.partnerID = partnerID;
                            this.connectionID = this.myID + partnerID;
                            this.initializePlayingSocket();
                            this.lookingForPartner = false;
                        }
                    }
                });
            }
            initializePlayingSocket() {
                this.playingSocket = io(Connection.FrameworkSocketNamespaces.PLAY);
                this.playingSocket.on('connect', () => {
                    this.searchingSocket.disconnect();
                    this.searchingSocket = null;
                    this.playingSocket.emit(Connection.FrameworkSocketEvents.joinRoom, this.connectionID, this.myID);
                    this.playingSocket.on(Connection.FrameworkSocketEvents.joinedRoom, (room) => {
                        console.log("sunt conectat pe playing room: " + room + " as " + this.myID);
                        this.playingSocket.emit(Connection.FrameworkSocketEvents.privateMessage, this.connectionID, Connection.FrameworkSocketMessages.HELLO, this.myID, this.partnerID);
                    });
                    this.playingSocket.on(Connection.FrameworkSocketEvents.leftRoom, (socketID) => {
                        SignalsManager.DispatchSignal(ConnectionSignalsType.OPPONENT_DISCONNECTED);
                        this.socketConnectionCreated = false;
                        this.playingSocket.disconnect();
                        console.log("s-a deconectat oponentul bagamiaspula: " + socketID);
                    });
                    this.playingSocket.on(Connection.FrameworkSocketEvents.privateMessage, (messageType, messageData) => {
                        this.handlePrivateMessage(messageType, messageData);
                    });
                });
            }
            handlePrivateMessage(messageType, messageData) {
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
            }
            sendPrivateMessage(params) {
                if (this.playingSocket && this.connectionID && this.myID) {
                    let messageType = params[0];
                    let messageData = params[1];
                    this.playingSocket.emit(Connection.FrameworkSocketEvents.privateMessage, this.connectionID, messageType, messageData);
                }
            }
        }
        Connection.SocketClient = SocketClient;
    })(Connection = Framework.Connection || (Framework.Connection = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    let Connection;
    (function (Connection) {
        var SignalsManager = Framework.Signals.SignalsManager;
        var SignalsType = Framework.Signals.SignalsType;
        class LoginHandler {
            constructor() {
                SignalsManager.AddSignalCallback(SignalsType.CHECK_USER_DATA, this.onCheckUserData.bind(this));
            }
            onCheckUserData() {
                console.log("on LOGIN HANDLER: onCheckUserData");
                SignalsManager.DispatchSignal(SignalsType.USER_DATA_CHECKED);
            }
        }
        Connection.LoginHandler = LoginHandler;
    })(Connection = Framework.Connection || (Framework.Connection = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    let Connection;
    (function (Connection) {
        var AbstractModule = Framework.Abstracts.AbstractModule;
        var SocketClient = Framework.Connection.SocketClient;
        var ConnectionSignalsType = Framework.Signals.ConnectionSignalsType;
        var SignalsManager = Framework.Signals.SignalsManager;
        var SignalsType = Framework.Signals.SignalsType;
        class AbstractConnectionModule extends AbstractModule {
            constructor() {
                super();
                this.Name = "AbstractConnectionModule";
                this.createLoginHandler();
            }
            createLoginHandler() {
                let loginHandler = new Connection.LoginHandler();
                console.log("%c AbstractConnectionModule -> login handler", "color: white; background:green");
            }
            createElements() {
                this.startSocketConnection();
            }
            startSocketConnection() {
                this.onCreateSocketIoConnection();
                console.log("%c AbstractConnectionModule -> startSocketConnection", "color: white; background:green");
            }
            registerSignalsHandlers() {
                super.registerSignalsHandlers();
                if (!Framework.Settings.singlePlayer) {
                    SignalsManager.AddSignalCallback(ConnectionSignalsType.CREATE_SEARCH_FOR_PARTNER_CONNECTION, this.onCreateSearchForPartnerConnection.bind(this));
                    SignalsManager.AddSignalCallback(ConnectionSignalsType.PRIVATE_MESSAGE, this.onPrivateMessage.bind(this));
                    SignalsManager.AddSignalCallback(ConnectionSignalsType.UPDATE_SOCKET_ID, this.onUpdateSocketID.bind(this));
                    SignalsManager.AddSignalCallback(ConnectionSignalsType.DISCONNECT_MY_SOCKET, this.onDisconnectMySocket.bind(this));
                }
            }
            onCreateSearchForPartnerConnection() {
                this.socketClient.initializeSearchingSocket();
            }
            onUpdateSocketID(params) {
                Framework.Settings.socketID = params[0];
            }
            onDisconnectMySocket() {
                this.socketClient.disconnect();
            }
            onPrivateMessage(params) {
                this.socketClient.sendPrivateMessage(params);
            }
            onCreateSocketIoConnection() {
                if (_.isNull(this.socketClient) || _.isUndefined(this.socketClient)) {
                    this.socketClient = this.getSocketIoClient();
                    Connection.DatabaseConnector.socketClient = this.socketClient;
                    this.socketClient.initializeClientSocket(this.onSocketInitiliazed.bind(this));
                }
            }
            onSocketInitiliazed() {
                console.log("%c AbstractConnectionModule -> Socket Initiliazed", "color: white; background:green");
                console.log("%c" + this.Name + " Elements Created!", "color: green");
                this.ElementsCreated = true;
                SignalsManager.DispatchSignal(SignalsType.MODULE_ELEMENTS_CREATED);
            }
            getSocketIoClient() {
                return new SocketClient();
            }
        }
        Connection.AbstractConnectionModule = AbstractConnectionModule;
    })(Connection = Framework.Connection || (Framework.Connection = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    class Layers {
    }
    Layers.DefaultLayer = "DefaultLayer";
    Layers.BackgroundLayer = "BackgroundLayer";
    Layers.GameLayer = "GameLayer";
    Layers.UILayer = "UILayer";
    Layers.LayerOrder = [Layers.BackgroundLayer, Layers.GameLayer, Layers.UILayer];
    Framework.Layers = Layers;
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    let Connection;
    (function (Connection) {
        class DatabaseConnector {
            constructor() {
            }
            static set socketClient(value) {
                this._socketClient = value;
            }
            static checkDatabaseUser(userID, callback) {
                this._socketClient.getUserFromDataBase(userID, callback);
            }
            static updateUserData(dbObject, callback) {
                console.log("intra la database connector updateUserData");
                let cb = (callback != null) ? callback : this.userDataUpdated.bind(this);
                this._socketClient.updateUserData(dbObject, cb);
            }
            static userDataUpdated(data) {
                console.log("DatabaseConnector userDataUpdated");
            }
            static checkUserIDRequestListener(e) {
            }
        }
        Connection.DatabaseConnector = DatabaseConnector;
    })(Connection = Framework.Connection || (Framework.Connection = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    let Sound;
    (function (Sound) {
        var AbstractModule = Framework.Abstracts.AbstractModule;
        var SignalsManager = Framework.Signals.SignalsManager;
        var SignalsType = Framework.Signals.SignalsType;
        class AbstractSoundModule extends AbstractModule {
            constructor() {
                super();
                this.Name = "AbstractSoundModule";
                this.sounds = {};
            }
            registerSignalsHandlers() {
                super.registerSignalsHandlers();
                SignalsManager.AddSignalCallback(SignalsType.CREATE_SOUND_CACHE, this.onCreateSoundCache.bind(this));
                SignalsManager.AddSignalCallback(SignalsType.PLAY_SOUND, this.onPlaySound.bind(this));
                SignalsManager.AddSignalCallback(SignalsType.STOP_SOUND, this.onStopSound.bind(this));
            }
            onCreateSoundCache(params) {
                let soundName = params[0];
                if (!this.sounds[soundName]) {
                    this.sounds[soundName] = new Howl({ src: soundName });
                }
            }
            onStopSound(params) {
                let soundVO = params[0];
                if (!this.sounds[soundVO.soundName]) {
                    console.warn("SOUND - " + soundVO.soundName + " - WAS NOT ADDED TO THE PRELOADER!");
                    return;
                }
                this.sounds[soundVO.soundName].stop();
            }
            onPlaySound(params) {
                let soundVO = params[0];
                {
                    if (!this.sounds[soundVO.soundName]) {
                        console.warn("SOUND - " + soundVO.soundName + " - WAS NOT ADDED TO THE PRELOADER!");
                        return;
                    }
                }
                if (_.isNull(soundVO.volume) || _.isUndefined(soundVO.volume)) {
                    soundVO.volume = 1;
                }
                if (!soundVO.enableMulti && this.sounds[soundVO.soundName].playing()) {
                    this.sounds[soundVO.soundName].stop();
                }
                this.sounds[soundVO.soundName].volume(soundVO.volume);
                this.sounds[soundVO.soundName].play();
            }
        }
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
    var PockeySettings = Pockey.PockeySettings;
    class AbstractEntryPoint {
        constructor() {
            this.name = "";
            this.allElementsCreated = false;
            this.name = "AbstractEntryPoint";
            this.checkDevice();
            this.setWindowSize();
            this.initializeBabylon();
            this.initializePixi();
            this.registerSignals();
            this.subscribeToSignals();
            this.createLayers();
            this.addModules();
            this.initializeSingletons();
            this.startLoadingAssets();
        }
        getCookieData() {
            SignalsManager.DispatchSignal(SignalsType.CHECK_USER_DATA);
        }
        userDataChecked() {
            if (!this.allElementsCreated) {
                this.allElementsCreated = true;
                SignalsManager.DispatchSignal(SignalsType.ALL_MODULES_ELEMENTS_CREATED);
                SignalsManager.DispatchSignal(SignalsType.WINDOW_RESIZE);
            }
        }
        setWindowSize() {
            Settings.stageWidth = window.innerWidth;
            Settings.stageHeight = window.innerHeight;
        }
        checkDevice() {
            if (this.isMobile()) {
                Settings.isMobile = true;
                console.log("%c AbstractEntryPoint -> running on MOBILE!", "background: green; color: white; font-weight:bold; ");
                return;
            }
            console.log("%c AbstractEntryPoint -> running on DESKTOP!", "background: green; color: white; font-weight:bold; ");
        }
        initializeBabylon() {
            let canvas = document.getElementById("renderCanvas");
            this.engine = new BABYLON.Engine(canvas, true);
            AbstractEntryPoint.scene = new BABYLON.Scene(this.engine);
            AbstractEntryPoint.camera = new BABYLON.UniversalCamera("camera1", new BABYLON.Vector3(0, 0, -1000 - PockeySettings.BALL_RADIUS * 3 - 7), AbstractEntryPoint.scene);
            AbstractEntryPoint.camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
            AbstractEntryPoint.camera.setTarget(BABYLON.Vector3.Zero());
            let light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(-80, 60, -110), AbstractEntryPoint.scene);
            this.isWebGL1 = this.engine.webGLVersion === 1;
        }
        initializePixi() {
            PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;
            AbstractEntryPoint.renderer = PIXI.autoDetectRenderer(Settings.stageWidth, Settings.stageHeight, {
                context: this.engine._gl,
                view: this.engine.getRenderingCanvas(),
                width: this.engine.getRenderWidth(),
                height: this.engine.getRenderHeight(),
                clearBeforeRender: true,
                roundPixels: true,
                autoResize: true,
                antialias: true,
                resolution: window.devicePixelRatio || 1,
                transparent: true
            });
            AbstractEntryPoint.stage = new Container();
            PIXI.ticker.shared.add(this.renderEngine.bind(this));
        }
        renderEngine() {
            AbstractEntryPoint.renderer.reset();
            AbstractEntryPoint.renderer.render(AbstractEntryPoint.stage);
            AbstractEntryPoint.scene.autoClear = false;
            AbstractEntryPoint.scene.render();
            this.engine.wipeCaches(true);
            this.frameAnimate();
        }
        addModules() {
            this.addConnectionModule();
            this.addBackgroundModule();
            this.addUIModule();
            this.addSoundModule();
        }
        addSoundModule() {
            this.soundModule = this.getSoundModule();
            this.registerModule(this.soundModule);
        }
        addBackgroundModule() {
            this.backgroundModule = this.getBackgroundModule();
            this.registerModule(this.backgroundModule);
        }
        addConnectionModule() {
            this.connectionModule = this.getConnectionModule();
            this.registerModule(this.connectionModule);
        }
        addUIModule() {
            this.uiModule = this.getUIModule();
            this.registerModule(this.uiModule);
        }
        startLoadingAssets() {
            if (_.isNull(this.assetsLoader) || _.isUndefined(this.assetsLoader)) {
                this.assetsLoader = new AssetsLoader();
            }
            this.addFontsToLoad();
            console.log(this.gameModules);
            _.forEach(this.gameModules, (module) => {
                _.forEach(module.AssetsToLoad, (asset) => {
                    this.assetsLoader.addAssetToLoad(asset);
                });
            });
            this.assetsLoader.StartLoading();
        }
        addFontsToLoad() {
        }
        onAssetsLoadComplete() {
            _.forEach(this.gameModules, (module) => {
                module.createElements();
            });
        }
        registerModule(module) {
            if (_.isNull(this.gameModules) || _.isUndefined(this.gameModules)) {
                this.gameModules = [];
            }
            this.gameModules.push(module);
        }
        frameAnimate() {
        }
        getBackgroundModule() {
            let backgroundModule = new AbstractBackgroundModule();
            backgroundModule.Layer = this.getLayer(Framework.Layers.BackgroundLayer);
            return backgroundModule;
        }
        getSoundModule() {
            let soundModule = new AbstractSoundModule();
            soundModule.Layer = this.getLayer(Framework.Layers.DefaultLayer);
            return soundModule;
        }
        getUIModule() {
            let uiModule = new AbstractUserInterfaceModule();
            uiModule.Layer = this.getLayer(Framework.Layers.UILayer);
            return uiModule;
        }
        getConnectionModule() {
            console.log("intra la get connection module in: " + this.name);
            let connectionModule = new AbstractConnectionModule();
            return connectionModule;
        }
        windowResize(stageWidth, stageHeight) {
            if (Settings.stageWidth == stageWidth && Settings.stageHeight == stageHeight) {
                return;
            }
            Settings.stageWidth = stageWidth;
            Settings.stageHeight = stageHeight;
            AbstractEntryPoint.renderer.resize(Settings.stageWidth, Settings.stageHeight);
            SignalsManager.DispatchSignal(SignalsType.WINDOW_RESIZE);
        }
        createLayers() {
            for (let i = 0; i < Framework.Layers.LayerOrder.length; i++) {
                let layerName = Framework.Layers.LayerOrder[i];
                let layer = new Container();
                layer.name = layerName;
                AbstractEntryPoint.stage.addChild(layer);
            }
        }
        getLayer(layerName) {
            return AbstractEntryPoint.stage.getChildByName(layerName);
        }
        initializeSingletons() {
            SignalsManager.Instance();
            TouchHandler.Instance();
        }
        subscribeToSignals() {
            SignalsManager.GetSignal(SignalsType.ASSETS_LOADED).add(this.onAssetsLoadComplete.bind(this));
            SignalsManager.GetSignal(SignalsType.MODULE_ELEMENTS_CREATED).add(this.onModuleElementsCreated.bind(this));
        }
        registerSignals() {
            SignalsManager.CreateNewSignal(SignalsType.CHECK_USER_DATA);
            SignalsManager.CreateNewSignal(SignalsType.USER_DATA_CHECKED);
            SignalsManager.CreateNewSignal(SignalsType.ASSETS_LOADED);
            SignalsManager.CreateNewSignal(SignalsType.MODULE_ELEMENTS_CREATED);
            SignalsManager.CreateNewSignal(SignalsType.ALL_MODULES_ELEMENTS_CREATED);
            SignalsManager.CreateNewSignal(SignalsType.WINDOW_RESIZE);
            SignalsManager.CreateNewSignal(SignalsType.CREATE_SOUND_CACHE);
            SignalsManager.CreateNewSignal(SignalsType.PLAY_SOUND);
            SignalsManager.CreateNewSignal(SignalsType.STOP_SOUND);
            SignalsManager.CreateNewSignal(SignalsType.CHANGE_BACKGROUND);
            SignalsManager.CreateNewSignal(ConnectionSignalsType.CREATE_SEARCH_FOR_PARTNER_CONNECTION);
            SignalsManager.CreateNewSignal(ConnectionSignalsType.SOCKET_IO_CONNECTION_CREATED);
            SignalsManager.CreateNewSignal(ConnectionSignalsType.SOCKET_IO_DISCONNECTED);
            SignalsManager.CreateNewSignal(ConnectionSignalsType.PRIVATE_MESSAGE);
            SignalsManager.CreateNewSignal(ConnectionSignalsType.UPDATE_SOCKET_ID);
            SignalsManager.CreateNewSignal(ConnectionSignalsType.OPPONENT_DISCONNECTED);
            SignalsManager.CreateNewSignal(ConnectionSignalsType.DISCONNECT_MY_SOCKET);
            SignalsManager.AddSignalCallback(SignalsType.USER_DATA_CHECKED, this.userDataChecked.bind(this));
        }
        onModuleElementsCreated() {
            let modulesCounter = 0;
            _.forEach(this.gameModules, (module) => {
                if (module.ElementsCreated) {
                    modulesCounter++;
                }
            });
            if (modulesCounter == this.gameModules.length) {
                this.getCookieData();
            }
        }
        isMobile() {
            if (navigator.userAgent.match(/Mobi/)) {
                return true;
            }
            if ('screen' in window && window.screen.width < 1366) {
                return true;
            }
            let connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (connection && connection.type === 'cellular') {
                return true;
            }
            return false;
        }
    }
    Framework.AbstractEntryPoint = AbstractEntryPoint;
})(Framework || (Framework = {}));
var Pockey;
(function (Pockey) {
    let GameModule;
    (function (GameModule) {
        var Vector2 = Framework.Utils.Vector2;
        var Graphics = PIXI.Graphics;
        var Vector3 = BABYLON.Vector3;
        var AbstractEntryPoint = Framework.AbstractEntryPoint;
        var Settings = Framework.Settings;
        var Point = PIXI.Point;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySoundURLS = Pockey.Sound.PockeySoundURLS;
        var SignalsType = Framework.Signals.SignalsType;
        let BallType;
        (function (BallType) {
            BallType["Player"] = "PlayerBall";
            BallType["Opponent"] = "OpponentBall";
            BallType["White"] = "WhiteBall";
            BallType["Puck"] = "Puck";
        })(BallType = GameModule.BallType || (GameModule.BallType = {}));
        class AbstractBall extends PIXI.Container {
            constructor(ballSide = "", id = 'ball') {
                super();
                this.mass = 1.4;
                this.moving = false;
                this.canBeRemoved = false;
                this.removed = false;
                this.zIndexSwitched = false;
                this.animationInProgress = false;
                this.ballValue = 1;
                this.removedFromArray = false;
                this.minStopLimit = 0.1;
                this.moving = false;
                this.velocity = new Vector2();
                this.oldPos = new Vector2();
                this.delta = Pockey.PockeySettings.DELTA;
                this.radius = Pockey.PockeySettings.BALL_RADIUS;
                this.side = ballSide;
                this.name = this.side + id;
                this.addTexture();
                this.addP2Body();
                this.p2Body.world.frictionGravity = 0;
                this.onWatchTimeline = new TimelineMax({
                    smoothChildTiming: true,
                    ease: Linear.easeNone,
                    onUpdate: this.onWatchUpdate.bind(this)
                });
            }
            addP2Body() {
                this.p2Body = new p2.Body({
                    mass: this.mass,
                    position: [this.x, this.y],
                    fixedRotation: false
                });
                this.p2BodyShadow = new p2.Body({
                    mass: 0,
                    position: [this.x, this.y]
                });
                this.p2Body.angularDamping = 0;
                this.p2Body.angularForce = 0;
                this.p2Body.angularVelocity = 0;
                this.p2Body.damping = 0.18;
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
                let circleShape2 = new p2.Circle({ radius: this.radius + Pockey.PockeySettings.BALL_RADIUS });
                circleShape2.material = new p2.Material(GameModule.MaterialType.SHADOW_MATERIAL);
                this.p2BodyShadow.addShape(circleShape2);
                GameModule.P2WorldManager.Instance().world.addBody(this.p2Body);
                GameModule.P2WorldManager.Instance().world.on("preSolve", (evt) => {
                    this.worldPreSolveHandler();
                }, this);
            }
            hide() {
                GameModule.P2WorldManager.Instance().world.removeBody(this.p2Body);
                GameModule.P2WorldManager.Instance().world.removeBody(this.p2BodyShadow);
                this.ballShadow.scale.x = 0;
                this.ballShadow.scale.y = 0;
                if (this.ballType != BallType.Puck) {
                    this.sphere.setEnabled(false);
                }
            }
            worldPreSolveHandler() {
            }
            getCircleMaterial() {
                return GameModule.P2WorldManager.Instance().getMaterialByID(GameModule.MaterialType.BALL_MATERIAL);
            }
            addTexture() {
                this.sphere = BABYLON.Mesh.CreateSphere(this.name, 16, this.radius * 2, AbstractEntryPoint.scene);
                let myMaterial = new BABYLON.StandardMaterial("myMaterial", AbstractEntryPoint.scene);
                myMaterial.diffuseTexture = new BABYLON.Texture(Settings.desktopAssetsPath + "Images/ballTexture.jpg", AbstractEntryPoint.scene);
                this.sphere.material = myMaterial;
                this.sphere.setEnabled(false);
                TweenMax.to(this.sphere.rotation, 0.1, { x: -2 * Math.PI, y: -2 * Math.PI, z: -2 * Math.PI });
                this.lastPosition = new Vector3(0, 0, 0);
            }
            setLineLimits(lineLimits) {
                this.lineLimits = lineLimits;
            }
            setPockets(pockets) {
                this.pockets = pockets;
            }
            setWallLimits(left, right, up, down) {
                this.leftLimit = left;
                this.rightLimit = right;
                this.upLimit = up;
                this.downLimit = down;
            }
            tintBall(color) {
                let colorToHex = ('00000' + (color | 0).toString(16)).substr(-6);
                let rgbColor = this.HexToRGB(colorToHex);
                if (this.sphere) {
                    this.sphere.material.diffuseColor = rgbColor;
                }
            }
            HexToRGB(hex) {
                let r = parseInt(hex.substring(0, 2), 16) / 255;
                let g = parseInt(hex.substring(2, 4), 16) / 255;
                let b = parseInt(hex.substring(4, 6), 16) / 255;
                return new BABYLON.Color4(r, g, b, 1);
            }
            getState() {
                let ballState = {
                    name: this.name,
                    x: Math.round(this.x * 10000),
                    y: Math.round(this.y * 10000),
                    rotation: this.rotation,
                    canBeRemoved: this.canBeRemoved,
                    shadowScaleX: this.ballShadow.scale.x,
                    shadowScaleY: this.ballShadow.scale.y,
                };
                if (this.sphere)
                    ballState.alpha = this.sphere.visibility;
                return ballState;
            }
            lerp(min, max, fraction) {
                return (max - min) * fraction + min;
            }
            setState(ballState, animTime) {
                let time = (animTime + 1 / 60) / 2;
                this.ballShadow.scale.x = ballState.shadowScaleX;
                this.ballShadow.scale.y = ballState.shadowScaleY;
                if (this.sphere) {
                    this.sphere.visibility = ballState.alpha;
                    if (this.sphere.visibility == 0) {
                        this.sphere.setEnabled(false);
                    }
                }
                else {
                }
                this.x = this.lerp(this.x, ballState.x / 10000, 0.9);
                this.y = this.lerp(this.y, ballState.y / 10000, 0.9);
                this.ballPosition = new Vector2(this.x, this.y);
                if (ballState.canBeRemoved) {
                    this.canBeRemoved = ballState.canBeRemoved;
                    GameModule.P2WorldManager.Instance().world.removeBody(this.p2Body);
                    GameModule.P2WorldManager.Instance().world.removeBody(this.p2BodyShadow);
                }
                else {
                    if (this.ballType == BallType.White) {
                        this.sphere.visibilily = 1;
                        this.sphere.setEnabled(true);
                    }
                }
            }
            onWatchUpdate() {
                this.ballPosition = new Vector2(this.x, this.y);
            }
            update() {
                this.moving = this.p2Body.sleepState != p2.Body.SLEEPING;
                if (this.canBeRemoved) {
                    this.moving = false;
                    return;
                }
                if (!this.moving)
                    return;
                if (this.moving && !this.canBeRemoved) {
                    let isCloserToPocket = false;
                    let pocketPosition = new Vector2();
                    let p2BodyPos = new Vector2(this.p2Body.position[0], this.p2Body.position[1]);
                    let lastDirection = 0;
                    this.oldPos.x = this.p2Body.velocity[0];
                    this.oldPos.y = this.p2Body.velocity[1];
                    this.oldPos = this.oldPos.normalise();
                    _.forEach(this.pockets, (pocket) => {
                        pocketPosition = new Vector2(pocket.x, pocket.y);
                        if (pocketPosition.distanceTo(p2BodyPos) <= (this.radius + pocket.radius + 8)) {
                            isCloserToPocket = true;
                            if (pocketPosition.distanceTo(p2BodyPos) <= (pocket.radius + 1)) {
                                SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{
                                        soundName: PockeySoundURLS.BALL_IN_POCKET
                                    }]);
                                this.canBeRemoved = true;
                                this.p2Body.velocity = [0, 0];
                                GameModule.P2WorldManager.Instance().world.removeBody(this.p2Body);
                                GameModule.P2WorldManager.Instance().world.removeBody(this.p2BodyShadow);
                                SignalsManager.DispatchSignal(PockeySignalTypes.BALL_IN_POCKET, [this.ballType]);
                                this.x = p2BodyPos.x;
                                this.y = p2BodyPos.y;
                                this.ballShadow.x = p2BodyPos.x;
                                this.ballShadow.y = p2BodyPos.y;
                                let closestDistance = 3000;
                                let distanceToNextClosestPoint = 3000;
                                let pointId = 0;
                                let nextPointId = 0;
                                let direction = 0;
                                let closestPoint = new Vector2();
                                let nextClosestPoint2 = new Vector2();
                                closestPoint.x = pocket.x + this.oldPos.x;
                                closestPoint.y = pocket.y + this.oldPos.y;
                                closestPoint.x = closestPoint.x / 2 + p2BodyPos.x / 2;
                                closestPoint.y = closestPoint.y / 2 + p2BodyPos.y / 2;
                                nextClosestPoint2.x = p2BodyPos.x + this.oldPos.x * Pockey.PockeySettings.BALL_RADIUS * 2;
                                nextClosestPoint2.y = p2BodyPos.y + this.oldPos.y * Pockey.PockeySettings.BALL_RADIUS * 2;
                                let finalTouchPoint = new Vector2(closestPoint.x, closestPoint.y);
                                _.forEach(pocket.touchPoints, (touchPoint, id) => {
                                    let newDist = closestPoint.distanceTo(touchPoint);
                                    let dirDist = nextClosestPoint2.distanceTo(touchPoint);
                                    if (newDist < closestDistance) {
                                        closestDistance = newDist;
                                        finalTouchPoint = new Vector2(touchPoint.x, touchPoint.y);
                                        pointId = id;
                                    }
                                    if (dirDist < distanceToNextClosestPoint) {
                                        distanceToNextClosestPoint = dirDist;
                                        nextPointId = id;
                                    }
                                });
                                closestPoint.x = finalTouchPoint.x;
                                closestPoint.y = finalTouchPoint.y;
                                let touchPointsArrayLength = pocket.touchPoints.length;
                                let clockwiseDistance = 0;
                                let counterclockDistance = 0;
                                let idCounter = pointId;
                                if (nextPointId > pointId) {
                                    clockwiseDistance = nextPointId - pointId;
                                    let tempDist = 0;
                                    for (let i = 0; i < touchPointsArrayLength; i++) {
                                        tempDist++;
                                        idCounter--;
                                        if (idCounter < 0)
                                            idCounter = touchPointsArrayLength - 1;
                                        if (idCounter == nextPointId)
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
                                    clockwiseDistance = pointId - nextPointId;
                                    let tempDist = 0;
                                    idCounter = nextPointId;
                                    for (let i = 0; i < touchPointsArrayLength; i++) {
                                        tempDist++;
                                        idCounter--;
                                        if (idCounter < 0)
                                            idCounter = touchPointsArrayLength - 1;
                                        if (idCounter == pointId)
                                            counterclockDistance = tempDist;
                                    }
                                    if (clockwiseDistance < counterclockDistance)
                                        direction = -1;
                                    else if (clockwiseDistance > counterclockDistance)
                                        direction = 1;
                                    else
                                        direction = 0;
                                }
                                lastDirection = direction;
                                let bezierPositions = [];
                                idCounter = pointId;
                                if (direction == -1) {
                                    for (let i = 0; i < touchPointsArrayLength - 1; i++) {
                                        bezierPositions[i] = new Point(pocket.touchPoints[idCounter].x, pocket.touchPoints[idCounter].y);
                                        idCounter--;
                                        if (idCounter < 0)
                                            idCounter = touchPointsArrayLength - 1;
                                    }
                                    bezierPositions.shift();
                                }
                                else if (direction == 1) {
                                    for (let i = 0; i < touchPointsArrayLength; i++) {
                                        bezierPositions[i] = new Point(pocket.touchPoints[idCounter].x, pocket.touchPoints[idCounter].y);
                                        idCounter++;
                                        if (idCounter > touchPointsArrayLength - 1)
                                            idCounter = 0;
                                    }
                                    bezierPositions.shift();
                                }
                                else if (direction == 0) {
                                    direction = Math.round(Math.random()) - 1;
                                    lastDirection = direction;
                                    if (direction == 0)
                                        direction = 1;
                                    idCounter = nextPointId;
                                    bezierPositions.push(new Point(pocket.touchPoints[pointId].x, pocket.touchPoints[pointId].y));
                                    bezierPositions.push(new Point(pocket.touchPoints[nextPointId].x, pocket.touchPoints[nextPointId].y));
                                    for (let i = 0; i < touchPointsArrayLength - counterclockDistance; i++) {
                                        if (i == 1) {
                                            let tempPoint = new Point(pocket.touchPoints[nextPointId].x / 2 + pocket.touchPoints[idCounter].x / 2, pocket.touchPoints[nextPointId].y / 2 + pocket.touchPoints[idCounter].y / 2);
                                            tempPoint = new Point(tempPoint.x / 2 + pocket.touchPoints[nextPointId].x / 2, tempPoint.y / 2 + pocket.touchPoints[nextPointId].y / 2);
                                            tempPoint = new Point(tempPoint.x / 2 + pocket.touchPoints[nextPointId].x / 2, tempPoint.y / 2 + pocket.touchPoints[nextPointId].y / 2);
                                            tempPoint = new Point(tempPoint.x / 2 + pocket.touchPoints[nextPointId].x / 2, tempPoint.y / 2 + pocket.touchPoints[nextPointId].y / 2);
                                            bezierPositions.push(tempPoint);
                                        }
                                        idCounter -= direction;
                                        if (idCounter > touchPointsArrayLength - 1)
                                            idCounter = 0;
                                        if (idCounter < 0)
                                            idCounter = touchPointsArrayLength - 1;
                                    }
                                }
                                bezierPositions.push(new Point(pocket.finalPoint.x, pocket.finalPoint.y));
                                let duration = 1 / (this.speed() / 60);
                                if (lastDirection == 0)
                                    duration *= 2.4;
                                else
                                    duration *= 2;
                                if (duration > 1.8)
                                    duration = 1.8;
                                else if (duration < 1)
                                    duration = 1;
                                this.animationInProgress = true;
                                this.ballInPocketAnimationTimeline = new TimelineMax();
                                this.ballInPocketAnimationTimeline.add(TweenMax.to(this, duration, {
                                    bezier: bezierPositions,
                                    ease: Linear.easeNone,
                                    onUpdate: this.handleRotation.bind(this)
                                }), 0);
                                this.ballInPocketAnimationTimeline.add(TweenMax.to(this.scale, duration - duration / 3, {
                                    x: 0.8,
                                    y: 0.8,
                                    ease: Linear.easeNone
                                }), 0);
                                this.ballInPocketAnimationTimeline.add(TweenMax.to(this.ballShadow.scale, (0.1), {
                                    x: 0,
                                    y: 0,
                                    ease: Linear.easeNone
                                }), 0);
                                this.ballInPocketAnimationTimeline.add(TweenMax.to(this.sphere, (duration / 3), {
                                    visibility: 0,
                                    ease: Linear.easeNone, onComplete: this.declareAnimationFinished.bind(this)
                                }), duration / 8);
                                return;
                            }
                        }
                    });
                    if (this.canBeRemoved)
                        return;
                    this.x = p2BodyPos.x;
                    this.y = p2BodyPos.y;
                    this.ballShadow.x = p2BodyPos.x;
                    this.ballShadow.y = p2BodyPos.y;
                    this.oldPos.x = this.x;
                    this.oldPos.y = this.y;
                    this.handleRotation();
                }
            }
            handleRotation() {
                if (this.ballType == BallType.Puck) {
                    return;
                }
                if (this.radius == 0) {
                    return;
                }
                this.moving = true;
                this.sphere.position.x = this.x;
                this.sphere.position.y = -this.y - Pockey.PockeySettings.BABYLON_Y_OFFSET;
                let position = new BABYLON.Vector3(this.sphere.position.x, this.sphere.position.y, 0);
                let currentToLast = position.subtract(this.lastPosition);
                let segment = currentToLast.length();
                if (segment == 0) {
                    return;
                }
                let ballDown = new BABYLON.Vector3(0, 0, -1);
                let axis = BABYLON.Vector3.Cross(ballDown, currentToLast);
                if (axis == BABYLON.Vector3.Zero()) {
                    return;
                }
                let theta = (segment / (this.radius * 3.5)) / this.radius;
                let thetaDegrees = theta * 180 / Math.PI;
                let q = BABYLON.Quaternion.RotationAxis(axis, thetaDegrees);
                let sphereRotToQuaternion = this.sphere.rotation.toQuaternion();
                let sphereRotation = q.multiply(sphereRotToQuaternion).toEulerAngles();
                this.sphere.rotation.x = sphereRotation.x;
                this.sphere.rotation.y = sphereRotation.y;
                this.sphere.rotation.z = sphereRotation.z;
                this.lastPosition = position;
            }
            declareAnimationFinished() {
                this.animationInProgress = false;
                if (this.sphere) {
                    this.sphere.setEnabled(false);
                }
            }
            addShadowBody() {
                this.p2BodyShadow.position[0] = this.x;
                this.p2BodyShadow.position[1] = this.y;
                GameModule.P2WorldManager.Instance().world.addBody(this.p2BodyShadow);
            }
            enableSphere() {
                this.sphere.setEnabled(true);
            }
            set ballPosition(positionVector) {
                if (!this.initialPosition) {
                    this.initialPosition = positionVector.clone();
                }
                this._ballPosition = positionVector;
                this.x = positionVector.x;
                this.y = positionVector.y;
                this.ballShadow.x = this.x;
                this.ballShadow.y = this.y;
                this.p2Body.position = [positionVector.x, positionVector.y];
                this.p2BodyShadow.position = [positionVector.x, positionVector.y];
                if (this.sphere) {
                    this.handleRotation();
                }
            }
            get ballPosition() {
                return new Vector2(this.x, this.y);
            }
            speed() {
                return Math.sqrt(this.p2Body.velocity[0] * this.p2Body.velocity[0] + this.p2Body.velocity[1] * this.p2Body.velocity[1]);
            }
            angle() {
                return Math.atan2(this.velocity.y, this.velocity.x);
            }
            onShoot(rotation, power) {
                this.power = power;
                this.velocity = new Vector2(this.power * Math.cos(rotation), this.power * Math.sin(rotation));
                this.moving = true;
            }
            reset() {
                if (this.ballInPocketAnimationTimeline && this.ballInPocketAnimationTimeline.isActive()) {
                    this.ballInPocketAnimationTimeline.pause();
                    this.ballInPocketAnimationTimeline.kill();
                }
                if (this.sphere) {
                    this.sphere.visibility = 1;
                    this.sphere.setEnabled(true);
                }
                this.ballShadow.scale.x = 0.9;
                this.ballShadow.scale.y = 0.9;
                this.canBeRemoved = false;
                this.animationInProgress = false;
                this.p2Body.velocity[0] = 0;
                this.p2Body.velocity[1] = 0;
                GameModule.P2WorldManager.Instance().world.addBody(this.p2Body);
                GameModule.P2WorldManager.Instance().world.addBody(this.p2BodyShadow);
                this.removedFromArray = false;
                this.visible = true;
                this.removed = false;
            }
            createBallShadow() {
                this.ballShadow = new Graphics();
                this.ballShadow.name = this.name + "_ballShadow";
                this.ballShadow.beginFill(0x000000, 0.68);
                this.ballShadow.drawCircle(this.radius / 3, this.radius / 3, this.radius);
                this.ballShadow.scale.x = 0.9;
                this.ballShadow.scale.y = 0.9;
            }
        }
        GameModule.AbstractBall = AbstractBall;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Framework;
(function (Framework) {
    let Utils;
    (function (Utils) {
        var P2WorldManager = Pockey.GameModule.P2WorldManager;
        class Rect {
            constructor(rectangle, rotationAngle, materialType) {
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
        }
        Utils.Rect = Rect;
    })(Utils = Framework.Utils || (Framework.Utils = {}));
})(Framework || (Framework = {}));
var Pockey;
(function (Pockey) {
    let GameModule;
    (function (GameModule) {
        var Sprite = PIXI.Sprite;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var SignalsManager = Framework.Signals.SignalsManager;
        let DecalType;
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
        class Decal extends Sprite {
            constructor() {
                super();
                this.currentDecalIDCounter = 0;
                this.alpha = 0.2;
                this.anchor.set(0.5, 0.5);
                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_POOLTABLE_DECAL, this.onChangePooltableDecal.bind(this));
                this.onChangePooltableDecal(Pockey.PockeySettings.PLAYER_DECAL_ID);
            }
            onChangePooltableDecal(decalID) {
                let idCounter = 0;
                _.forEach(Pockey.PockeySettings.LARGE_DECALS_ARRAY, (item, counter) => {
                    if (item.id == decalID) {
                        idCounter = counter;
                        return true;
                    }
                });
                this.texture = PIXI.Texture.fromImage(Pockey.PockeySettings.LARGE_DECALS_ARRAY[idCounter].model);
            }
        }
        GameModule.Decal = Decal;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let Connection;
    (function (Connection) {
        class PockeySocketMessages {
        }
        PockeySocketMessages.WATCH = "PockeySocketMessages." + "WATCH";
        PockeySocketMessages.SCORE_UPDATE = "PockeySocketMessages." + "SCORE_UPDATE";
        PockeySocketMessages.OPPONENT = "PockeySocketMessages." + "OPPONENT";
        PockeySocketMessages.YOUR_TURN = "PockeySocketMessages." + "YOUR_TURN";
        PockeySocketMessages.OPPONENT_SETTINGS = "PockeySocketMessages." + "OPPONENT_SETTINGS";
        PockeySocketMessages.OPPONENT_REMATCH = "PockeySocketMessages." + "OPPONENT_REMATCH";
        PockeySocketMessages.DISCONNECT_MY_SOCKET = "ConnectionSignalsType." + 'DISCONNECT_MY_SOCKET';
        Connection.PockeySocketMessages = PockeySocketMessages;
    })(Connection = Pockey.Connection || (Pockey.Connection = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let GameModule;
    (function (GameModule) {
        var Sprite = PIXI.Sprite;
        var Point = PIXI.Point;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var Vector2 = Framework.Utils.Vector2;
        var MouseHandler = Framework.Utils.MouseHandler;
        var SignalsType = Framework.Signals.SignalsType;
        var PockeySoundURLS = Pockey.Sound.PockeySoundURLS;
        var PockeyStateMachine = Pockey.StateMachineModule.PockeyStateMachine;
        var PockeyStates = Pockey.StateMachineModule.PockeyStates;
        let StickType;
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
        class Stick extends Sprite {
            constructor() {
                super();
                this.power = 0;
                this.rotationEnabled = false;
                this.isActive = false;
                this.clickPointRegistered = false;
                this.stickPowerFactor = 3.8;
                this.mouseReleased = false;
                this.textureWidth = 0;
                this.textureHeight = 0;
                this.graphicsHolder = new Sprite();
                this.addChild(this.graphicsHolder);
                this.graphicsHolder.scale.x = 0.5;
                this.graphicsHolder.scale.y = 0.5;
                this.graphicsHolder.anchor.y = 0.5;
                this.onUpdatePlayerStickSkin(Pockey.PockeySettings.PLAYER_CUE_ID);
                this.initialPivotPoint = new Point();
                this.pivot = this.initialPivotPoint;
                this.defineShootTimeline();
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_STICK_SKIN, this.onUpdatePlayerStickSkin.bind(this));
                this.onUpdatePlayerStickSkin(Pockey.PockeySettings.PLAYER_CUE_ID);
            }
            onUpdatePlayerStickSkin(skinID) {
                let idCounter = 0;
                _.forEach(Pockey.PockeySettings.LARGE_CUES_ARRAY, (item, counter) => {
                    if (item.id == skinID) {
                        idCounter = counter;
                        return true;
                    }
                });
                this.graphicsHolder.texture = PIXI.Texture.fromImage(Pockey.PockeySettings.LARGE_CUES_ARRAY[idCounter].model);
                this.textureWidth = this.graphicsHolder.width;
                this.textureHeight = this.graphicsHolder.height;
                this.initialPivotPoint = new Point();
                this.initialPivotPoint.x = this.textureWidth + 8;
                this.pivot = this.initialPivotPoint;
            }
            getStickState() {
                let stickState = {
                    x: this.x,
                    y: this.y,
                    rotation: this.rotation,
                    pivotX: this.pivot.x,
                    visible: this.visible
                };
                return stickState;
            }
            lerp(min, max, fraction) {
                return (max - min) * fraction + min;
            }
            setState(stickState, duration) {
                this.x = stickState.x;
                this.y = stickState.y;
                this.visible = stickState.visible;
                this.pivot.x = stickState.pivotX;
                let time = (duration + 1 / 60) / 2;
                this.rotation = this.lerp(this.rotation, stickState.rotation, 0.8);
            }
            hide() {
                TweenMax.to(this, 0.1, { alpha: 0 });
            }
            update() {
                if (this.isActive) {
                    if (MouseHandler.Instance().left.down) {
                        console.log("stick intra la left button down!!!");
                        this.rotationEnabled = false;
                        if (!this.clickPointRegistered) {
                            let localPoint = this.parent.toLocal(new Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));
                            this.clickPointRegistered = true;
                            this.clickPoint = new Vector2(localPoint.x, localPoint.y);
                            let oppRot = new Vector2(Math.cos(90 * Math.PI / 180 + this.rotation), Math.sin(90 * Math.PI / 180 + this.rotation)).normalise();
                            this.firstPointOfTangent = new Vector2(localPoint.x - oppRot.x * 1500, localPoint.y - oppRot.y * 1500);
                            this.secondPointOfTangent = new Vector2(localPoint.x + oppRot.x * 1500, localPoint.y + oppRot.y * 1500);
                        }
                        else {
                            let stickPower = 0;
                            let localPoint = this.parent.toLocal(new Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));
                            let mouseDirection = (localPoint.x - this.firstPointOfTangent.x) * (this.secondPointOfTangent.y - this.firstPointOfTangent.y) - (localPoint.y - this.firstPointOfTangent.y) * (this.secondPointOfTangent.x - this.firstPointOfTangent.x);
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
                    if (this.rotationEnabled && (!MouseHandler.Instance().left.down)) {
                        let localPoint = this.parent.toLocal(new Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));
                        this.opposite = localPoint.y - this.position.y;
                        this.adjacent = localPoint.x - this.position.x;
                        this.rotation = Math.atan2(this.opposite, this.adjacent);
                        this.clickPointRegistered = false;
                        this.pivot.x = this.initialPivotPoint.x;
                    }
                }
            }
            increasePower(stickPower) {
                this.pivot.x = this.initialPivotPoint.x + stickPower;
                this.power = stickPower * this.stickPowerFactor;
            }
            release() {
                this.isActive = false;
                this.clickPointRegistered = false;
                this.shootTimeline.play(0);
            }
            reset() {
                this.isActive = false;
                this.rotationEnabled = false;
                this.clickPointRegistered = false;
            }
            GoToStartPosition() {
                this.x = this.startPosition.x;
                this.y = this.startPosition.y;
            }
            activate(position) {
                this.position.x = position.x;
                this.position.y = position.y;
                this.isActive = true;
                this.rotationEnabled = true;
                this.visible = true;
            }
            defineShootTimeline() {
                this.shootTimeline = new TimelineLite();
                this.shootTimeline.pause();
                this.shootTimeline.add(TweenMax.to(this.pivot, 0.05, {
                    x: this.initialPivotPoint.x - 8,
                    onComplete: this.shoot.bind(this)
                }));
                this.shootTimeline.add(TweenMax.to(this.pivot, 0.1, {
                    x: this.initialPivotPoint.x
                }));
            }
            shoot() {
                if (PockeyStateMachine.Instance().fsm.currentState != PockeyStates.onRearrangeStick) {
                    return;
                }
                SignalsManager.DispatchSignal(PockeySignalTypes.SHOOT_BALL);
                SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{ soundName: PockeySoundURLS.SHOOT_BALL }]);
                this.visible = false;
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_BALL_RAY_GRAPHICS);
            }
            dist2(v, w) {
                return (v.x - w.x) * (v.x - w.x) + (v.y - w.y) * (v.y - w.y);
            }
            distToSegmentSquared(point, firstLinePoint, secondLinePoint) {
                let l2 = this.dist2(firstLinePoint, secondLinePoint);
                if (l2 == 0)
                    return this.dist2(point, firstLinePoint);
                var t = ((point.x - firstLinePoint.x) * (secondLinePoint.x - firstLinePoint.x) + (point.y - firstLinePoint.y) * (secondLinePoint.y - firstLinePoint.y)) / l2;
                t = Math.max(0, Math.min(1, t));
                return this.dist2(point, new Vector2(firstLinePoint.x + t * (secondLinePoint.x - firstLinePoint.x), firstLinePoint.y + t * (secondLinePoint.y - firstLinePoint.y)));
            }
            distToSegment(p, v, w) {
                return Math.sqrt(this.distToSegmentSquared(p, v, w));
            }
        }
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
    class StickMobile extends Stick {
        constructor() {
            super();
            SignalsManager.AddSignalCallback(PockeySignalTypes.STICK_PIVOT_MOBILE_UPDATE, this.onStickPowerMobile.bind(this));
            SignalsManager.AddSignalCallback(PockeySignalTypes.STICK_MOBILE_RELEASE, this.stickMobileRelease.bind(this));
        }
        activate(position) {
            super.activate(position);
            SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_STICK_POWER_MOBILE);
        }
        stickMobileRelease(params) {
            if (this.power > 6) {
                this.release();
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_STICK_POWER_MOBILE);
            }
            else if (this.power == 0) {
                this.rotationEnabled = true;
            }
        }
        onStickPowerMobile(params) {
            let stickPower = params[0];
            this.rotationEnabled = false;
            this.increasePower(stickPower);
        }
        increasePower(stickPower) {
            this.pivot.x = this.initialPivotPoint.x + stickPower;
            console.log("pivotu pizdii: " + this.initialPivotPoint.x, stickPower, this.pivot.x);
            this.power = stickPower * this.stickPowerFactor;
        }
        update() {
            if (this.isActive) {
                if (this.rotationEnabled && TouchHandler.Instance().isTouchMoving) {
                    console.log("intra la rotation enabled");
                    let localPoint = this.parent.toLocal(new Point(TouchHandler.Instance().position.x, TouchHandler.Instance().position.y));
                    this.opposite = localPoint.y - this.position.y;
                    this.adjacent = localPoint.x - this.position.x;
                    this.rotation = Math.atan2(this.opposite, this.adjacent);
                    this.clickPointRegistered = false;
                    this.pivot.x = this.initialPivotPoint.x;
                }
            }
        }
    }
    Pockey.StickMobile = StickMobile;
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let GameModule;
    (function (GameModule) {
        var Vector2 = Framework.Utils.Vector2;
        var Settings = Framework.Settings;
        var Sprite = PIXI.Sprite;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        class Puck extends GameModule.AbstractBall {
            constructor() {
                super();
                this.ballType = GameModule.BallType.Puck;
                this.name = "Puck";
                this.ballValue = 2;
                this.delta += 0.994;
                this.mass = 0.8;
            }
            worldPreSolveHandler() {
            }
            addP2Body() {
                super.addP2Body();
                this.p2Body.damping = 0.12;
                this.p2Body.boundingRadius = this.radius;
                this.p2Body.allowSleep = true;
                this.p2Body.sleepSpeedLimit = 1;
                this.p2Body.sleepTimeLimit = 0.08;
            }
            getCircleMaterial() {
                return GameModule.P2WorldManager.Instance().getMaterialByID(GameModule.MaterialType.PUCK_MATERIAL);
            }
            addTexture() {
                this.radius = 25;
                this.ballTexture = new Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/ballGraphics/puck2.png"));
                this.ballTexture.pluginName = "picture";
                this.ballTexture.scale.set(0.5);
                this.ballTexture.anchor.set(0.5);
                this.addChild(this.ballTexture);
            }
            animatePocketCollision(pocketPosition, newX = null) {
                let animationSpeed = 1 / this.speed();
                this.x = pocketPosition.x;
                TweenMax.to(this, animationSpeed, {
                    x: newX
                });
            }
            update() {
                this.moving = this.p2Body.sleepState != p2.Body.SLEEPING;
                if (this.canBeRemoved) {
                    this.moving = false;
                    return;
                }
                if (!this.moving)
                    return;
                if (this.moving && !this.canBeRemoved) {
                    let isCloserToGoal = false;
                    let p2BodyPos = new Vector2(this.p2Body.position[0], this.p2Body.position[1]);
                    let goalScored = false;
                    let goalType;
                    if (p2BodyPos.y > this.goalYPosition && p2BodyPos.y < this.goalYPosition + this.goalHeight) {
                        this.x = p2BodyPos.x;
                        this.y = p2BodyPos.y;
                        isCloserToGoal = true;
                        let distanceToFinalX;
                        let finalPoint = new Vector2();
                        let p2BodyVelocityNormalized;
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
                            let duration = 1 / (this.speed() / 60);
                            duration *= 2;
                            if (duration > 1.8)
                                duration = 1.8;
                            this.animationInProgress = true;
                            let tl = new TimelineMax();
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
                    if (!isCloserToGoal) {
                    }
                    this.ballShadow.x = this.x;
                    this.ballShadow.y = this.y;
                    this.oldPos.x = this.x;
                    this.oldPos.y = this.y;
                    this.rotation += this.p2Body.angle - this.p2Body.previousAngle;
                }
            }
            declareAnimationFinished() {
                this.animationInProgress = false;
                console.log("se termina la puck");
            }
        }
        GameModule.Puck = Puck;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let GameModule;
    (function (GameModule) {
        class WhiteBall extends GameModule.AbstractBall {
            constructor() {
                super();
                this.ballWasShot = false;
                this._isOnReposition = false;
                this._isOnRearrange = false;
                this.ballType = GameModule.BallType.White;
                this.name = "WhiteBall";
            }
            worldPreSolveHandler() {
                if (this.ballWasShot) {
                    this.ballWasShot = false;
                    this.p2Body.velocity = [this.velocity.x, this.velocity.y];
                }
                super.worldPreSolveHandler();
            }
            onShoot(rotation, power) {
                super.onShoot(rotation, power);
                this.ballWasShot = true;
            }
            set isOnReposition(value) {
                this._isOnReposition = value;
                if (value == true) {
                    this.sphere.setEnabled(false);
                    this.ballShadow.scale.x = 0;
                    this.ballShadow.scale.y = 0;
                }
            }
            get isOnReposition() {
                return this._isOnReposition;
            }
            set isOnRearrange(value) {
                this._isOnRearrange = value;
                if (value == true) {
                    this.reset();
                }
            }
            get isOnRearrange() {
                return this._isOnRearrange;
            }
            update() {
                super.update();
            }
        }
        GameModule.WhiteBall = WhiteBall;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let GameModule;
    (function (GameModule) {
        var Sprite = PIXI.Sprite;
        var Container = PIXI.Container;
        class PuckGoal extends Container {
            constructor(side) {
                super();
                this.goalRightPath = "goalTop_right.png";
                this.goalTopRightPath = "goalTop_righttTopper.png";
                this.goalLeftPath = "goalTop_left.png";
                this.goalTopLefttPath = "goalTop_leftTopper.png";
                this.animationStarted = false;
                if (side == "left") {
                    this.goalGraphics = new Sprite(PIXI.Texture.fromFrame(this.goalLeftPath));
                    this.goalGraphicsAnimator = new Sprite(PIXI.Texture.fromFrame(this.goalLeftPath));
                    this.goalTopGraphics = new Sprite(PIXI.Texture.fromFrame(this.goalTopLefttPath));
                }
                else {
                    this.goalGraphics = new Sprite(PIXI.Texture.fromFrame(this.goalRightPath));
                    this.goalGraphicsAnimator = new Sprite(PIXI.Texture.fromFrame(this.goalRightPath));
                    this.goalTopGraphics = new Sprite(PIXI.Texture.fromFrame(this.goalTopRightPath));
                }
                this.addChild(this.goalGraphics);
                this.goalGraphicsAnimator.visible = false;
                this.addChild(this.goalGraphicsAnimator);
                this.addChild(this.goalTopGraphics);
            }
            set tint(color) {
                this.goalGraphics.tint = color;
            }
            animate() {
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
            }
            stopAnimation() {
                if (this.animationStarted) {
                    this.animationStarted = false;
                    this.goalGraphicsAnimator.visible = false;
                    if (this.goalAnimationTween && this.goalAnimationTween.isActive())
                        this.goalAnimationTween.kill();
                }
            }
        }
        GameModule.PuckGoal = PuckGoal;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let StateMachineModule;
    (function (StateMachineModule) {
        class PockeyStateTexts {
        }
        PockeyStateTexts.beginGame = "AIM WITH CURSOR, PRESS & HOLD LEFT MOUSE BUTTON AND DRAG TO SET POWER";
        PockeyStateTexts.beginGameMobile = "TO AIM, TAP OR MOVE OVER THE POOLTABLE. SHOOT BY SELECTING THE POWER ON THE LEFT SIDE";
        PockeyStateTexts.yourTurnToShoot = "YOUR TURN! SHOOT #opponent#{opponent}'S#opponent# BALLS INTO POCKETS";
        PockeyStateTexts.ownBallAiming = "#warning#WARNING!#warning# HITTING YOUR OWN BALL FIRST IS A FOUL";
        PockeyStateTexts.ownBallHit = "#opponent#{opponent}#opponent# FOULED!";
        PockeyStateTexts.puckAiming = "SHOOT THE PUCK INTO #opponent#{opponent}'S#opponent# GOAL!";
        PockeyStateTexts.opponentFault = "#opponent#{opponent}#opponent# FOULED! PLACE THE BALL ANYWHERE ON TABLE";
        PockeyStateTexts.whiteBallFault = "YOU FOULED! #opponent#{opponent}#opponent# GETS BALL-IN-HAND";
        PockeyStateTexts.onOwnBallInPocket = "YOU SCORED AN OWN BALL! #opponent#{opponent}’s#opponent# TURN!";
        PockeyStateTexts.puckOwnGoal = "PUCK WENT INTO YOUR OWN GOAL! #opponent#{opponent}#opponent# GETS BALL-IN-HAND";
        PockeyStateTexts.onTimeUp = "YOUR TIME IS UP! #opponent#{opponent}#opponent# GETS BALL-IN-HAND";
        PockeyStateTexts.onOpponentsTimeUp = "#opponent#{opponent}#opponent# TIME IS UP! PLACE THE BALL ANYWHERE ON TABLE";
        PockeyStateTexts.onPuckGoal = "YOU SCORED THE PUCK! -2 HEALTH TO #opponent#{opponent}#opponent#";
        PockeyStateTexts.noBallScored = "YOU DIDN’T SCORED! #opponent#{opponent}'S#opponent# TURN";
        PockeyStateTexts.multipleBallsIn = "YOU MADE A TRICKSHOT! CONGRATS!";
        PockeyStateTexts.ballInPocketViaOtherBall = "YOU MADE A TRICKSHOT! CONGRATS!";
        PockeyStateTexts.opponentBallInPocket = "#opponent#{opponent}#opponent# POCKETED A BALL AND CAN SHOOT AGAIN!";
        PockeyStateTexts.opponentsTurn = "#opponent#{opponent}'s#opponent# turn";
        StateMachineModule.PockeyStateTexts = PockeyStateTexts;
    })(StateMachineModule = Pockey.StateMachineModule || (Pockey.StateMachineModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let GameModule;
    (function (GameModule) {
        var Sprite = PIXI.Sprite;
        var Settings = Framework.Settings;
        class Goalie extends PIXI.Container {
            constructor(side) {
                super();
                this.blocked = false;
                this.isGoing = "down";
                this.moving = false;
                this.goaliePolygonCoord = [
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
                this.goalieShadowPolygonCoord = [
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
                this.side = side;
                this.name = side + "Goalie";
                this.goalieBody = new p2.Body({ mass: 0 });
                GameModule.P2WorldManager.Instance().world.addBody(this.goalieBody);
                this.goalieBody.fromPolygon(this.goaliePolygonCoord);
                _.forEach(this.goalieBody.shapes, (shape) => {
                    shape.material = new p2.Material(GameModule.MaterialType.GOALIE_MATERIAL);
                });
                this.goalieBodyShadow = new p2.Body({ mass: 0 });
                GameModule.P2WorldManager.Instance().world.addBody(this.goalieBodyShadow);
                this.goalieBodyShadow.fromPolygon(this.goalieShadowPolygonCoord);
                _.forEach(this.goalieBodyShadow.shapes, (shape) => {
                    shape.material = new p2.Material(GameModule.MaterialType.SHADOW_MATERIAL);
                });
                this.goalieBottomLayer = new Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/goalie_bottom.png"));
                this.goalieMiddleLayer = new Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/goalie_color.png"));
                this.goalieTopLayer = new Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/goalie_top.png"));
                this.addChild(this.goalieBottomLayer);
                this.addChild(this.goalieMiddleLayer);
                this.addChild(this.goalieTopLayer);
                this.pivot.set(this.width / 2, this.height / 2);
            }
            setBodyPosition() {
                this.goalieBody.position[0] = this.x;
                this.goalieBody.position[1] = this.y;
                this.goalieBodyShadow.position[0] = this.x;
                this.goalieBodyShadow.position[1] = this.y;
            }
            setPosition(position) {
                this.x = position.x;
                this.y = position.y;
                this.setBodyPosition();
            }
        }
        GameModule.Goalie = Goalie;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    var Vector2 = Framework.Utils.Vector2;
    var Circle = PIXI.Circle;
    var Graphics = PIXI.Graphics;
    class Pocket extends Circle {
        constructor(x, y, radius, finalPoint) {
            super(x, y, radius);
            this.position = new Vector2(x, y);
            this.finalPoint = finalPoint;
            this.graphics = [];
            this.touchPoints = [];
            let point = new Vector2();
            let g = new Graphics();
            let angle;
            angle = 90 * Math.PI / 180;
            point = new Vector2();
            point.x = this.position.x + Math.cos(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 3);
            point.y = this.position.y + Math.sin(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 3);
            this.touchPoints.push(point);
            angle = 45 * Math.PI / 180;
            point = new Vector2();
            point.x = this.position.x + Math.cos(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 3);
            point.y = this.position.y + Math.sin(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 3);
            this.touchPoints.push(point);
            angle = 0 * Math.PI / 180;
            point = new Vector2();
            point.x = this.position.x + Math.cos(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 3);
            point.y = this.position.y + Math.sin(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 3);
            this.touchPoints.push(point);
            angle = -45 * Math.PI / 180;
            point = new Vector2();
            point.x = this.position.x + Math.cos(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 3);
            point.y = this.position.y + Math.sin(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 3);
            this.touchPoints.push(point);
            angle = -90 * Math.PI / 180;
            point = new Vector2();
            point.x = this.position.x + Math.cos(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 3);
            point.y = this.position.y + Math.sin(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 3);
            this.touchPoints.push(point);
            angle = -135 * Math.PI / 180;
            point = new Vector2();
            point.x = this.position.x + Math.cos(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 3);
            point.y = this.position.y + Math.sin(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 3);
            this.touchPoints.push(point);
            angle = 180 * Math.PI / 180;
            point = new Vector2();
            point.x = this.position.x + Math.cos(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 3);
            point.y = this.position.y + Math.sin(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 3);
            this.touchPoints.push(point);
            angle = 135 * Math.PI / 180;
            point = new Vector2();
            point.x = this.position.x + Math.cos(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 3);
            point.y = this.position.y + Math.sin(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 3);
            this.touchPoints.push(point);
        }
        addPoints(parent) {
            _.forEach(this.graphics, (g) => {
                parent.addChild(g);
            });
        }
    }
    Pockey.Pocket = Pocket;
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let GameModule;
    (function (GameModule) {
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        class TableFelt {
            constructor(felt, border) {
                this.currentFeltColorIDCounter = 0;
                this.felt = felt;
                this.border = border;
                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_POOLTABLE_FELT, this.setTint.bind(this));
                this.setTint(Pockey.PockeySettings.POOLTABLE_FELT_ID);
            }
            setTint(tintID) {
                _.forEach(Pockey.PockeySettings.LARGE_MISC_ARRAY, (item, counter) => {
                    if (item.id == tintID) {
                        this.currentFeltColorIDCounter = counter;
                        return true;
                    }
                });
                this.felt.tint = Pockey.PockeySettings.LARGE_MISC_ARRAY[this.currentFeltColorIDCounter].color;
            }
        }
        GameModule.TableFelt = TableFelt;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Container = PIXI.Container;
var Pockey;
(function (Pockey) {
    let GameModule;
    (function (GameModule) {
        var Sprite = PIXI.Sprite;
        var Graphics = PIXI.Graphics;
        var Point = PIXI.Point;
        var Vector2 = Framework.Utils.Vector2;
        var Rect = Framework.Utils.Rect;
        var Rectangle = PIXI.Rectangle;
        var Settings = Framework.Settings;
        var Circle = PIXI.Circle;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        class PoolTable extends Container {
            constructor() {
                super();
                this.ballsDistance = 108;
                this.name = "poolTable";
                this.createElements();
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_GAME_UI, this.onShowGameUi.bind(this));
            }
            onShowGameUi() {
                this.shadowsHolder.visible = true;
                this.puck.visible = true;
                _.forEach(this.balls, (ball) => {
                    if (ball.ballType != GameModule.BallType.Puck) {
                        ball.enableSphere();
                    }
                });
            }
            createElements() {
                this.balls = [];
                this.poolTableBackground = new Sprite(PIXI.Texture.fromFrame(Settings.desktopAssetsPath + "Images/table_felt.png"));
                this.poolTableBackground.name = "poolTableBackground";
                this.poolTableBackground.scale.x = 0.5;
                this.poolTableBackground.scale.y = 0.5;
                this.poolTableBackground.anchor.x = 0.5;
                this.poolTableBackground.anchor.y = 0.5;
                this.addChild(this.poolTableBackground);
                this.shadowsHolder = new Container();
                this.shadowsHolder.visible = false;
                this.addChild(this.shadowsHolder);
                Pockey.PockeySettings.MIDDLE_TABLE_POS = new Vector2(0, 0);
                Pockey.PockeySettings.MIDDLE_TABLE_LEFT_POS = new Vector2(Pockey.PockeySettings.MIDDLE_TABLE_POS.x - 244, Pockey.PockeySettings.MIDDLE_TABLE_POS.y);
                Pockey.PockeySettings.MIDDLE_TABLE_RIGHT_POS = new Vector2(Pockey.PockeySettings.MIDDLE_TABLE_POS.x + 244, Pockey.PockeySettings.MIDDLE_TABLE_POS.y);
                this.poolTableOverFrame = new Sprite(PIXI.Texture.fromFrame(Settings.desktopAssetsPath + "Images/table_border_01.png"));
                this.poolTableOverFrame.name = "poolTableOverFrame";
                this.poolTableOverFrame.x = Pockey.PockeySettings.MIDDLE_TABLE_POS.x - this.poolTableOverFrame.width / 2;
                this.poolTableOverFrame.y = Pockey.PockeySettings.MIDDLE_TABLE_POS.y - this.poolTableOverFrame.height / 2;
                this.addChild(this.poolTableOverFrame);
                this.ballAnimationHolder = new Container();
                this.addChild(this.ballAnimationHolder);
                this.poolTableBumper = new Sprite(PIXI.Texture.fromFrame(Settings.desktopAssetsPath + "Images/table_bumper.png"));
                this.poolTableBumper.name = "poolTableBumper";
                this.poolTableBumper.x = -this.poolTableBumper.width / 2;
                this.poolTableBumper.y = -this.poolTableBumper.height / 2;
                this.addChild(this.poolTableBumper);
                let tableFeltManager = new GameModule.TableFelt(this.poolTableBackground, this.poolTableBumper);
                this.playGround = new Rectangle(-970 / 2, -484 / 2, 970, 484);
                this.setTableLimits();
                this.addPocketsAndBlockers();
                this.decalIcon = new GameModule.Decal();
                this.decalIcon.name = "decalIcon";
                this.decalIcon.x = Pockey.PockeySettings.MIDDLE_TABLE_POS.x;
                this.decalIcon.y = Pockey.PockeySettings.MIDDLE_TABLE_POS.y;
                this.addChild(this.decalIcon);
                this.ballsHolder = new Container();
                this.ballsHolder.name = "ballsHolder";
                this.addChild(this.ballsHolder);
                this.puck = new GameModule.Puck();
                this.puck.visible = false;
                this.puck.ballAnimationHolder = this.ballAnimationHolder;
                this.puck.createBallShadow();
                this.puck.tintBall(Pockey.PockeySettings.PUCK_COLOR);
                this.puck.x = Pockey.PockeySettings.MIDDLE_TABLE_POS.x;
                this.puck.y = Pockey.PockeySettings.MIDDLE_TABLE_POS.y;
                this.puck.ballPosition = new Vector2(Pockey.PockeySettings.MIDDLE_TABLE_POS.x, Pockey.PockeySettings.MIDDLE_TABLE_POS.y);
                this.puck.setWallLimits(this.leftLimit, this.rightLimit, this.upLimit, this.downLimit);
                this.shadowsHolder.addChild(this.puck.ballShadow);
                this.ballsHolder.addChild(this.puck);
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
                this.leftGoalkeeperCircle = new Circle(-510, 0, 100);
                this.goalkeepersCircles = [];
                this.goalkeepersCircles.push(this.leftGoalkeeperCircle);
                this.rightGoalie = new GameModule.Goalie("right");
                this.rightGoalie.setPosition(new Vector2(468, 0));
                this.addChild(this.rightGoalie);
                this.rightGoalkeeperCircle = new Circle(510, 0, 100);
                this.goalkeepersCircles.push(this.rightGoalkeeperCircle);
                let graphics = new Graphics();
                graphics.name = "graphics";
                this.whiteBall = new GameModule.WhiteBall();
                this.whiteBall.ballAnimationHolder = this.ballAnimationHolder;
                this.whiteBall.createBallShadow();
                this.whiteBall.ballPosition = new Vector2(Pockey.PockeySettings.MIDDLE_TABLE_LEFT_POS.x, Pockey.PockeySettings.MIDDLE_TABLE_POS.y);
                this.whiteBall.setWallLimits(this.leftLimit, this.rightLimit, this.upLimit, this.downLimit);
                this.whiteBall.setPockets(this.pockets);
                this.balls.push(this.whiteBall);
                this.shadowsHolder.addChild(this.whiteBall.ballShadow);
                let ball;
                this.rightBallsArray = [];
                this.leftBallsArray = [];
                let angle;
                _.forEach(_.range(Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER), (id) => {
                    ball = new GameModule.AbstractBall("right", id.toString());
                    ball.ballAnimationHolder = this.ballAnimationHolder;
                    ball.createBallShadow();
                    ball.setWallLimits(this.leftLimit, this.rightLimit, this.upLimit, this.downLimit);
                    ball.setPockets(this.pockets);
                    this.balls.push(ball);
                    this.rightBallsArray.push(ball);
                    angle = (id / (Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER / 2)) * Math.PI;
                    ball.ballPosition = new Vector2(Pockey.PockeySettings.MIDDLE_TABLE_POS.x + (this.ballsDistance * Math.cos(angle)), Pockey.PockeySettings.MIDDLE_TABLE_POS.y + (this.ballsDistance * Math.sin(angle)));
                    this.shadowsHolder.addChild(ball.ballShadow);
                });
                _.forEach(_.range(Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER), (id) => {
                    ball = new GameModule.AbstractBall("left", id.toString());
                    ball.ballAnimationHolder = this.ballAnimationHolder;
                    ball.createBallShadow();
                    ball.setWallLimits(this.leftLimit, this.rightLimit, this.upLimit, this.downLimit);
                    ball.setPockets(this.pockets);
                    this.balls.push(ball);
                    this.leftBallsArray.push(ball);
                    angle = (id / (Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER / 2)) * Math.PI + Math.PI / Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER;
                    ball.ballPosition = new Vector2(Pockey.PockeySettings.MIDDLE_TABLE_POS.x + (this.ballsDistance * Math.cos(angle)), Pockey.PockeySettings.MIDDLE_TABLE_POS.y + (this.ballsDistance * Math.sin(angle)));
                    this.shadowsHolder.addChild(ball.ballShadow);
                });
                if (Settings.isMobile) {
                    this.poolStick = new Pockey.StickMobile();
                    this.poolStick.x = -145;
                    this.poolStick.y = 110;
                }
                else {
                    this.poolStick = new GameModule.Stick();
                    this.poolStick.x = -145;
                    this.poolStick.y = 110;
                }
                this.poolStick.initialPosition = new Point(this.poolStick.x, this.poolStick.y);
                this.poolStick.startPosition = new Point(this.whiteBall.position.x, this.whiteBall.position.y);
                this.addChild(this.poolStick);
                this.createUpperCollisionPolygon();
                this.createUpperCollisionShadowPolygon();
                this.createBottomCollisionPolygon();
                this.createBottomCollisionShadowPolygon();
            }
            setTableLimits() {
                this.leftLimit = this.playGround.x;
                this.rightLimit = this.playGround.x + this.playGround.width;
                this.upLimit = this.playGround.y;
                this.downLimit = this.playGround.y + this.playGround.height;
            }
            addPocketsAndBlockers() {
                let blocker1 = this.createBlocker(new Rectangle(-494, 0, 20, 380), 0, GameModule.MaterialType.PUCK_ONLY_MATERIAL, 0xff9900, "rect2a");
                let blocker2 = this.createBlocker(new Rectangle(497, 0, 20, 380), 0, GameModule.MaterialType.PUCK_ONLY_MATERIAL, 0xff9900, "rect2b");
                let blocker3 = this.createBlocker(new Rectangle(-492, -250, 20, 58), 0.7853981634, GameModule.MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect4a");
                let blocker4 = this.createBlocker(new Rectangle(492, 250, 20, 58), 0.7853981634, GameModule.MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect4b");
                let blocker5 = this.createBlocker(new Rectangle(492, -250, 20, 58), -0.7853981634, GameModule.MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect5a");
                let blocker6 = this.createBlocker(new Rectangle(-492, 250, 20, 58), -0.7853981634, GameModule.MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect5b");
                let blocker7 = this.createBlocker(new Rectangle(0, -270, 100, 20), 0, GameModule.MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect7a");
                let blocker8 = this.createBlocker(new Rectangle(0, 270, 100, 20), 0, GameModule.MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect7b");
                this.pockets = [];
                let pocket1 = new Pockey.Pocket(-497, -254, 26, new Vector2(-438, -200));
                this.pockets.push(pocket1);
                pocket1.addPoints(this);
                let pocket2 = new Pockey.Pocket(0, -264, 26, new Vector2(0, -200));
                this.pockets.push(pocket2);
                pocket2.addPoints(this);
                let pocket3 = new Pockey.Pocket(496, -255, 26, new Vector2(438, -200));
                this.pockets.push(pocket3);
                pocket3.addPoints(this);
                let pocket4 = new Pockey.Pocket(497, 254, 26, new Vector2(438, 200));
                this.pockets.push(pocket4);
                pocket4.addPoints(this);
                let pocket5 = new Pockey.Pocket(0, 263, 26, new Vector2(0, 200));
                this.pockets.push(pocket5);
                pocket5.addPoints(this);
                let pocket6 = new Pockey.Pocket(-497, 253, 26, new Vector2(-438, 200));
                this.pockets.push(pocket6);
                pocket6.addPoints(this);
            }
            createUpperCollisionPolygon() {
                let vertices = Pockey.PockeySettings.MAIN_COLLISION_POLYGON.slice(0);
                let upperCollisionPolygon = new p2.Body({ mass: 0, angularForce: 0, angularVelocity: 0 });
                GameModule.P2WorldManager.Instance().world.addBody(upperCollisionPolygon);
                upperCollisionPolygon.fromPolygon(vertices);
                _.forEach(upperCollisionPolygon.shapes, (shape) => {
                    shape.material = new p2.Material(GameModule.MaterialType.LINE_MATERIAL);
                });
            }
            createUpperCollisionShadowPolygon() {
                let vertices = Pockey.PockeySettings.MAIN_COLLISION_SHADOW.slice(0);
                let upperCollisionShadowPolygon = new p2.Body({ mass: 0 });
                GameModule.P2WorldManager.Instance().world.addBody(upperCollisionShadowPolygon);
                upperCollisionShadowPolygon.fromPolygon(vertices);
                _.forEach(upperCollisionShadowPolygon.shapes, (shape) => {
                    shape.material = new p2.Material(GameModule.MaterialType.SHADOW_MATERIAL);
                });
                upperCollisionShadowPolygon.position[0] -= 1.5;
                upperCollisionShadowPolygon.position[1] += 1.5;
            }
            createBottomCollisionPolygon() {
                let vertices = Pockey.PockeySettings.MAIN_COLLISION_POLYGON.slice(0);
                let bottomCollisionPolygon = new p2.Body({ mass: 0 });
                GameModule.P2WorldManager.Instance().world.addBody(bottomCollisionPolygon);
                bottomCollisionPolygon.fromPolygon(vertices);
                _.forEach(bottomCollisionPolygon.shapes, (shape) => {
                    shape.material = new p2.Material(GameModule.MaterialType.LINE_MATERIAL);
                });
                bottomCollisionPolygon.angle = Math.PI;
                bottomCollisionPolygon.position[1] += 513;
                bottomCollisionPolygon.position[0] -= 11;
            }
            createBottomCollisionShadowPolygon() {
                let vertices = Pockey.PockeySettings.MAIN_COLLISION_SHADOW.slice(0);
                let bottomCollisionShadowPolygon = new p2.Body({ mass: 0 });
                GameModule.P2WorldManager.Instance().world.addBody(bottomCollisionShadowPolygon);
                bottomCollisionShadowPolygon.fromPolygon(vertices);
                _.forEach(bottomCollisionShadowPolygon.shapes, (shape) => {
                    shape.material = new p2.Material(GameModule.MaterialType.SHADOW_MATERIAL);
                });
                bottomCollisionShadowPolygon.angle = Math.PI;
                bottomCollisionShadowPolygon.position[1] += 399;
                bottomCollisionShadowPolygon.position[0] -= 2;
            }
            createLine(v1, v2, materialType, body = null) {
                let graphics = new Graphics();
                graphics.name = "line";
                graphics.lineStyle(2, 0xffff00);
                graphics.moveTo(v1.x, v1.y);
                graphics.lineTo(v2.x, v2.y);
                this.addChild(graphics);
            }
            reset() {
                console.log("%c salam intra la reset in pooltable", "color: #ff0000");
                _.forEach(this.balls, (ball) => {
                    ball.hide();
                });
                this.balls = [];
                this.whiteBall.reset();
                this.whiteBall.ballPosition = this.whiteBall.initialPosition;
                this.balls.push(this.whiteBall);
                this.puck.reset();
                this.puck.ballPosition = this.puck.initialPosition;
                this.balls.push(this.puck);
                if (Pockey.PockeySettings.CURRENT_ROUND == 3) {
                    return;
                }
                _.forEach(this.leftBallsArray, (ball) => {
                    ball.reset();
                    ball.ballPosition = ball.initialPosition;
                    this.balls.push(ball);
                });
                _.forEach(this.rightBallsArray, (ball) => {
                    ball.reset();
                    ball.ballPosition = ball.initialPosition;
                    this.balls.push(ball);
                });
            }
            createBlocker(rectangle, rotationAngle, materialType, color = 0xffff00, id) {
                let rect = new Rect(rectangle, rotationAngle, materialType);
                return rect;
            }
        }
        GameModule.PoolTable = PoolTable;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let GameModule;
    (function (GameModule) {
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        class GoalkeepersHolder {
            constructor(leftGoalie, rightGoalie) {
                this.yLimit = 50;
                this.movingDirection = 1;
                this.movingSpeed = 2;
                this.moving = false;
                this.y = 0;
                this.goalies = [];
                this.goalies.push(leftGoalie);
                this.goalies.push(rightGoalie);
                leftGoalie.visible = false;
                rightGoalie.visible = false;
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_GAME_UI, this.onShowGameUI.bind(this));
            }
            onShowGameUI() {
                _.forEach(this.goalies, (goalie) => {
                    goalie.visible = true;
                });
            }
            update() {
                if (this.moving) {
                    this.y += this.movingDirection * this.movingSpeed;
                    this.updatePosition();
                    if (this.y >= this.yLimit || this.y <= -this.yLimit) {
                        this.movingDirection *= -1;
                    }
                }
            }
            lerp(min, max, fraction) {
                return (max - min) * fraction + min;
            }
            updatePosition() {
                _.forEach(this.goalies, (goalie) => {
                    goalie.y = this.y;
                    if (goalie.blocked) {
                        goalie.y = 0;
                    }
                    goalie.goalieBody.position[1] = this.y;
                    goalie.goalieBodyShadow.position[1] = this.y;
                });
            }
            startMoving() {
                this.moving = true;
            }
            getState() {
                let goalieState = {};
                goalieState.direction = this.movingDirection;
                goalieState.speed = this.movingSpeed;
                goalieState.position = Math.round(this.y * 10000);
                return goalieState;
            }
            setState(state, duration) {
                this.moving = false;
                this.movingDirection = state.direction;
                this.y = this.lerp(this.y, state.position / 10000, 1 - 0.25 * PIXI.ticker.shared.deltaTime);
                this.updatePosition();
            }
        }
        GameModule.GoalkeepersHolder = GoalkeepersHolder;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let GameModule;
    (function (GameModule) {
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var Vector2 = Framework.Utils.Vector2;
        var Point = PIXI.Point;
        var PockeyStateMachine = Pockey.StateMachineModule.PockeyStateMachine;
        var PockeyStates = Pockey.StateMachineModule.PockeyStates;
        var MouseHandler = Framework.Utils.MouseHandler;
        var PockeyStateTexts = Pockey.StateMachineModule.PockeyStateTexts;
        var AbstractEntryPoint = Framework.AbstractEntryPoint;
        var Vector3 = BABYLON.Vector3;
        var Color4 = BABYLON.Color4;
        class PoolTableManager {
            constructor() {
                this.startRayCastPoint = [0, 0];
                this.endRayCastPoint = [0, 0];
                this.raycastResult = new p2.RaycastResult();
                this.rayClosest = new p2.Ray({
                    mode: p2.Ray.CLOSEST,
                    skipBackfaces: true
                });
                this.repositionWhiteBallEnabled = false;
                this.contactEnabled = false;
                this.hitPoint = p2.vec2.create();
                this.arrowsDeviationLength = 0;
                this.framesCounter = 0;
                this.sendPoolDataFrameStep = 6;
                this.totalSizeOfJson = 0;
                this.totalSizeOfJsonStringified = 0;
                this.opponentTimeUp = false;
                this.repositionStarted = false;
                this.isFirstShoot = true;
                this.uiTextOnWatch = "";
                this.firstMessageReceivedOnWatch = false;
                this.lastTime = 0;
                this.sendTimes = 0;
                this.enableUpdateOnWatch = false;
                this._fpsThresholdInMs = 1000 / 60;
                this._accumulator = 0;
                this.t = 0.0;
                this.dt = 0.01;
                this.accumulator = 0.0;
                this.statesCreated = 0;
                this.statesReceived = 0;
                this.graphicsHidden = false;
                this.opponentTimeStates = [];
                this.registerSignalsHandlers();
                this.createMeshes();
                this.poolTable = new GameModule.PoolTable();
                this.poolTable.visible = false;
                this.ticker = PIXI.ticker.shared;
                if (this.poolTable.poolStick)
                    this.ticker.add(this.poolTable.poolStick.update, this.poolTable.poolStick);
                this.goaliesHolder = new GameModule.GoalkeepersHolder(this.poolTable.leftGoalie, this.poolTable.rightGoalie);
                this.ticker.add(this.goaliesHolder.update, this.goaliesHolder);
                _.forEach(this.poolTable.balls, (ball) => {
                    this.ticker.add(ball.update, ball);
                    ball.addShadowBody();
                });
                this.ticker.add(this.update, this);
                GameModule.P2WorldManager.Instance().world.on("beginContact", (evt) => {
                    if (this.contactEnabled) {
                        if (!_.isNull(evt.shapeA.radius) && !_.isUndefined(evt.shapeA.radius) &&
                            !_.isNull(evt.shapeB.radius) && !_.isUndefined(evt.shapeB.radius)) {
                            this.contactEnabled = false;
                            let isOwnBall = false;
                            if (evt.bodyA == this.poolTable.whiteBall.p2Body) {
                                isOwnBall = this.checkIfOwnBall(evt.bodyB);
                            }
                            else if (evt.bodyB == this.poolTable.whiteBall.p2Body) {
                                isOwnBall = this.checkIfOwnBall(evt.bodyA);
                            }
                            if (isOwnBall) {
                                SignalsManager.DispatchSignal(PockeySignalTypes.FIRST_BALL_FAULT);
                                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.whiteBallFault]);
                            }
                        }
                    }
                }, this);
                this.lineBetweenCirclesPoints = [];
                this.otherBallDirectionPoints = [];
                this.whiteBallDirectionPoints = [];
                this.whiteBallDashedPoints = [];
                this.graphColor = new Color4(1, 1, 1, 1);
                this.hideBallRayGraphics();
            }
            createMeshes() {
                this.ballPositionCircleMesh = this.create2Dpoly({ radius: Pockey.PockeySettings.BALL_RADIUS - 2 }, AbstractEntryPoint.scene);
                this.ballPositionCircleMesh.enableEdgesRendering();
                this.ballPositionCircleMesh.edgesWidth = 10;
                this.ballPositionCircleMesh.edgesColor = new BABYLON.Color4(1, 1, 1, 1);
                this.ballPositionCircleMesh.position.z = -Pockey.PockeySettings.BALL_RADIUS * 2;
                this.ballPositionCircleOnRaycastMesh = this.create2Dpoly({ radius: Pockey.PockeySettings.BALL_RADIUS + 6 }, AbstractEntryPoint.scene);
                this.ballPositionCircleOnRaycastMesh.enableEdgesRendering();
                this.ballPositionCircleOnRaycastMesh.edgesWidth = 10;
                this.ballPositionCircleOnRaycastMesh.position.z = -Pockey.PockeySettings.BALL_RADIUS * 2;
                this.raycastFollowerMesh = this.create2Dpoly({ radius: Pockey.PockeySettings.BALL_RADIUS }, AbstractEntryPoint.scene);
                this.raycastFollowerMesh.enableEdgesRendering();
                this.raycastFollowerMesh.edgesWidth = 10;
                this.raycastFollowerMesh.position.z = -Pockey.PockeySettings.BALL_RADIUS * 2;
                let arrowsPoints = [
                    new BABYLON.Vector3(0, -10, 0),
                    new BABYLON.Vector3(0, 0, 0),
                    new BABYLON.Vector3(-1.7, 0, 0),
                    new BABYLON.Vector3(10.5, 0, 0)
                ];
                this.whiteBallReflectionArrowMesh = BABYLON.Mesh.CreateLines("whiteBallReflectionArrowMesh", arrowsPoints, AbstractEntryPoint.scene);
                this.whiteBallReflectionArrowMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
                this.whiteBallReflectionArrowMesh.enableEdgesRendering();
                this.whiteBallReflectionArrowMesh.edgesWidth = 9;
                this.whiteBallReflectionArrowMesh.edgesColor = new BABYLON.Color4(1, 1, 1, 1);
                this.whiteBallReflectionArrowMesh.position.z = -Pockey.PockeySettings.BALL_RADIUS * 2;
                this.otherBallReflectionArrowMesh = BABYLON.Mesh.CreateLines("otherBallReflectionArrowMesh", arrowsPoints, AbstractEntryPoint.scene);
                this.otherBallReflectionArrowMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
                this.otherBallReflectionArrowMesh.enableEdgesRendering();
                this.otherBallReflectionArrowMesh.edgesWidth = 9;
                this.otherBallReflectionArrowMesh.edgesColor = new BABYLON.Color4(1, 1, 1, 1);
                this.otherBallReflectionArrowMesh.position.z = -Pockey.PockeySettings.BALL_RADIUS * 2;
                this.whiteBallDirectionMesh = BABYLON.MeshBuilder.CreateLines("whiteBallDirectionMesh", {
                    points: [Vector3.Zero(), Vector3.Zero()],
                    updatable: true
                }, AbstractEntryPoint.scene);
                this.whiteBallDirectionMesh.z = -Pockey.PockeySettings.BALL_RADIUS * 2;
                this.otherBallPostCollisionDirectionMesh = BABYLON.MeshBuilder.CreateLines("otherBallPostCollisionDirectionMesh", {
                    points: [Vector3.Zero(), Vector3.Zero()],
                    updatable: true
                }, AbstractEntryPoint.scene);
                this.otherBallPostCollisionDirectionMesh.z = -Pockey.PockeySettings.BALL_RADIUS * 2;
                this.whiteBallPostCollisionDirectionMesh = BABYLON.MeshBuilder.CreateLines("whiteBallPostCollisionDirectionMesh", {
                    points: [Vector3.Zero(), Vector3.Zero()],
                    updatable: true
                }, AbstractEntryPoint.scene);
                this.whiteBallPostCollisionDirectionMesh.z = -Pockey.PockeySettings.BALL_RADIUS * 2;
                let myPoints = [
                    new BABYLON.Vector3(0, 100, 10),
                    new BABYLON.Vector3(100, 0, 10)
                ];
                this.whiteBallDashedMesh = BABYLON.MeshBuilder.CreateDashedLines("whiteBallDashedMesh", {
                    points: myPoints,
                    dashSize: 3,
                    gapSize: 3,
                    dashNb: 4,
                    updatable: true
                }, AbstractEntryPoint.scene);
                this.whiteBallDashedMesh.position.z = -Pockey.PockeySettings.BALL_RADIUS * 2;
            }
            onDefinePlayerInterface(params) {
                console.log("aicisha e playerul");
                if (params[0].type == GameModule.BallType.Player) {
                    this.player = params[0];
                }
                else {
                    this.opponent = params[0];
                }
            }
            registerSignalsHandlers() {
                SignalsManager.AddSignalCallback(PockeySignalTypes.ASSIGN_PLAYER, this.onDefinePlayerInterface.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_POOLTABLE, this.onShowPoolTable.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_POOLTABLE, this.onHidePoolTable.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.RESET_POOLTABLE, this.onResetPoolTable.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.RESET_STICK_POWER, this.onResetStickPower.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_BALL_RAY_GRAPHICS, this.hideBallRayGraphics.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.REACTIVATE_STICK, this.reactivateStick.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOOT_BALL, this.onShoot.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.APPLY_POOLTABLE_STATE, this.applyTimeState.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SET_SIDES_TYPE, this.onSetSides.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, this.onUpdateUITextOnWatch.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.CREATE_POOLTABLE_STATE, this.onCreatePoolTableTimeState.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_WHITE_BALL_STATUS, this.changeWhiteBallStatus.bind(this));
            }
            onCreatePoolTableTimeState(params) {
                let timeState = {};
                timeState.stickState = this.poolTable.poolStick.getStickState();
                timeState.whiteBallState = this.poolTable.whiteBall.getState();
                timeState.ballsStates = [];
                _.forEach(this.poolTable.balls, (ball) => {
                    timeState.ballsStates.push(ball.getState());
                });
                timeState.goalieState = this.goaliesHolder.getState();
                timeState.graphicsState = this.createGraphicsState();
                params[0](timeState);
            }
            createGraphicsState() {
                let state = {};
                state.onReposition = false;
                state.visible = !this.graphicsHidden;
                if (!state.visible) {
                    return state;
                }
                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onRepositionWhiteBall) {
                    state.onReposition = true;
                    state.whiteBallPositionOnReposition = [this.ballPositionCircleMesh.position.x, this.ballPositionCircleMesh.position.y];
                    return state;
                }
                state.graphicsColor = this.graphColor;
                state.whiteBallPositionOnRayCast = [this.ballPositionCircleOnRaycastMesh.position.x, this.ballPositionCircleOnRaycastMesh.position.y];
                state.circleFollowerPosition = [this.raycastFollowerMesh.position.x, this.raycastFollowerMesh.position.y];
                state.lineBetweenCirclesCoordinates = this.lineBetweenCirclesPoints;
                if (this.otherBallDirectionPoints.length == 0) {
                    state.otherBallDirectionPoints = [];
                }
                else {
                    state.otherBallDirectionPoints = this.otherBallDirectionPoints;
                    state.otherBallArrowPositionAndRotation = [this.otherBallReflectionArrowMesh.position.x, this.otherBallReflectionArrowMesh.position.y, this.otherBallReflectionArrowMesh.rotation.z];
                    state.whiteBallArrowPositionAndRotation = [this.whiteBallReflectionArrowMesh.position.x, this.whiteBallReflectionArrowMesh.position.y, this.whiteBallReflectionArrowMesh.rotation.z];
                }
                if (this.whiteBallDirectionPoints.length == 0) {
                    state.whiteBallDirectionPoints = [];
                }
                else {
                    state.whiteBallDirectionPoints = this.whiteBallDirectionPoints;
                    state.whiteBallDashedPoints = this.whiteBallDashedPoints;
                    state.whiteBallArrowPositionAndRotation = [this.whiteBallReflectionArrowMesh.position.x, this.whiteBallReflectionArrowMesh.position.y, this.whiteBallReflectionArrowMesh.rotation.z];
                }
                return state;
            }
            onAnimatePuckGoal() {
                if (this.poolTable.leftGoal.type == GameModule.GameManager.Instance().currentPlayer.type) {
                    this.poolTable.rightGoal.animate();
                }
                else {
                    this.poolTable.leftGoal.animate();
                }
            }
            onResetStickPower() {
                this.poolTable.poolStick.power = 0;
                this.poolTable.poolStick.reset();
            }
            onStopAnimatePuckGoal() {
                this.poolTable.leftGoal.stopAnimation();
                this.poolTable.rightGoal.stopAnimation();
            }
            onUpdateUITextOnWatch(params) {
                this.uiTextOnWatch = params["0"];
            }
            onSetSides() {
                let leftSideType = (this.player.side == "left") ? this.player.type : this.opponent.type;
                let rightSideType = (leftSideType == GameModule.BallType.Player) ? this.opponent.type : this.player.type;
                this.poolTable.leftGoal.type = leftSideType;
                this.poolTable.leftGoalie.type = leftSideType;
                this.poolTable.rightGoal.type = rightSideType;
                this.poolTable.rightGoalie.type = rightSideType;
                _.forEach(this.poolTable.leftBallsArray, (ball) => {
                    console.log("%c salam se seteaza onSetSides in pool manager", "color: #ff9900");
                    ball.ballType = leftSideType;
                });
                _.forEach(this.poolTable.rightBallsArray, (ball) => {
                    ball.ballType = rightSideType;
                });
                this.onChangePlayerColor(this.player.color);
                this.onChangeOpponentColor(this.opponent.color);
            }
            onChangeOpponentColor(color) {
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
                _.forEach(this.poolTable.balls, (ball) => {
                    if (ball.ballType == GameModule.BallType.Opponent) {
                        ball.tintBall(color);
                    }
                });
            }
            onChangePlayerColor(color) {
                if (this.poolTable.leftGoal.type == GameModule.BallType.Player) {
                    this.poolTable.leftGoal.tint = color;
                }
                else {
                    this.poolTable.rightGoal.tint = color;
                }
                if (this.poolTable.leftGoalie.type == GameModule.BallType.Player) {
                    this.poolTable.leftGoalie.goalieMiddleLayer.tint = color;
                }
                else {
                    this.poolTable.rightGoalie.goalieMiddleLayer.tint = color;
                }
                _.forEach(this.poolTable.balls, (ball) => {
                    if (ball.ballType == GameModule.BallType.Player) {
                        ball.tintBall(color);
                    }
                });
            }
            onShowPoolTable() {
                this.poolTable.visible = true;
            }
            onHidePoolTable() {
                this.poolTable.visible = false;
            }
            onResetPoolTable(params) {
                this.isFirstShoot = true;
                this.poolTable.reset();
            }
            onShoot() {
                this.onStopAnimatePuckGoal();
                this.contactEnabled = true;
                let rotation = this.poolTable.poolStick.rotation;
                _.forEach(this.poolTable.balls, (ball) => {
                    if (!ball.canBeRemoved || ball.ballType == GameModule.BallType.White) {
                        GameModule.P2WorldManager.Instance().world.removeBody(ball.p2BodyShadow);
                        ball.p2Body.wakeUp();
                    }
                });
                this.poolTable.whiteBall.onShoot(rotation, this.poolTable.poolStick.power);
                this.poolTable.whiteBall.isOnRearrange = false;
                this.poolTable.poolStick.power = 0;
                this.isFirstShoot = false;
            }
            onRearrangeStick() {
                this.graphicsHidden = false;
                if (!this.goaliesHolder.moving)
                    this.goaliesHolder.moving = true;
                if (!this.poolTable.whiteBall.isOnRearrange) {
                    this.poolTable.whiteBall.isOnRearrange = true;
                }
                this.poolTable.whiteBall.ballPosition = new Vector2(this.poolTable.whiteBall.x, this.poolTable.whiteBall.y);
                if (this.poolTable.poolStick.rotationEnabled) {
                    if (this.whiteBallDirectionMesh) {
                        this.whiteBallDirectionMesh.setEnabled(false);
                    }
                    if (this.whiteBallPostCollisionDirectionMesh) {
                        this.whiteBallPostCollisionDirectionMesh.setEnabled(false);
                    }
                    if (this.otherBallPostCollisionDirectionMesh) {
                        this.otherBallPostCollisionDirectionMesh.setEnabled(false);
                    }
                    if (this.whiteBallDashedMesh) {
                        this.whiteBallDashedMesh.setEnabled(false);
                    }
                    if (this.ballPositionCircleMesh) {
                        this.ballPositionCircleMesh.setEnabled(false);
                    }
                    if (this.raycastFollowerMesh) {
                        this.raycastFollowerMesh.setEnabled(true);
                    }
                    if (this.ballPositionCircleOnRaycastMesh) {
                        this.ballPositionCircleOnRaycastMesh.setEnabled(true);
                    }
                    this.whiteBallReflectionArrowMesh.setEnabled(false);
                    this.otherBallReflectionArrowMesh.setEnabled(false);
                    let localPoint = this.poolTable.toLocal(new Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));
                    let opposite = localPoint.y - this.poolTable.whiteBall.y;
                    let adjacent = localPoint.x - this.poolTable.whiteBall.x;
                    let rot = Math.atan2(opposite, adjacent);
                    let dir = new Vector2(Math.cos(rot), Math.sin(rot)).multiply(1100);
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
            }
            onRepositionWhiteBall() {
                if (!this.poolTable.whiteBall.isOnReposition) {
                    this.poolTable.whiteBall.isOnReposition = true;
                }
                this.graphicsHidden = false;
                if (!this.goaliesHolder.moving) {
                    if (Pockey.PockeySettings.CURRENT_ROUND == 3) {
                        if (this.player.side == 'left') {
                            this.goaliesHolder.goalies[0].blocked = true;
                            this.goaliesHolder.goalies[1].blocked = false;
                        }
                        else {
                            this.goaliesHolder.goalies[0].blocked = false;
                            this.goaliesHolder.goalies[1].blocked = true;
                        }
                    }
                    else {
                        this.goaliesHolder.goalies[0].blocked = false;
                        this.goaliesHolder.goalies[1].blocked = false;
                    }
                    this.goaliesHolder.moving = true;
                }
                if (this.ballPositionCircleMesh) {
                    this.ballPositionCircleMesh.setEnabled(true);
                }
                if (this.opponentTimeUp) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.onOpponentsTimeUp]);
                }
                else
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.opponentFault]);
                let localPoint = this.poolTable.toLocal(new Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));
                if (_.isNull(this.lastGoodRepositionPoint) || _.isUndefined(this.lastGoodRepositionPoint)) {
                    this.lastGoodRepositionPoint = new Vector2();
                }
                let ballPositionCirclePosition = new Vector2(localPoint.x, localPoint.y);
                let isInteresectingWithOthers = false;
                if (Pockey.PockeySettings.CURRENT_ROUND == 3) {
                    this.poolTable.rightLimit = this.poolTable.playGround.x + this.poolTable.playGround.width;
                    this.poolTable.downLimit = this.poolTable.playGround.y + this.poolTable.playGround.height;
                    if (this.player.side == 'left') {
                        this.poolTable.rightLimit = Pockey.PockeySettings.MIDDLE_TABLE_LEFT_POS.x + Pockey.PockeySettings.BALL_RADIUS;
                        this.poolTable.leftLimit = Pockey.PockeySettings.MIDDLE_TABLE_LEFT_POS.x - Pockey.PockeySettings.BALL_RADIUS;
                        ballPositionCirclePosition.x = Pockey.PockeySettings.MIDDLE_TABLE_LEFT_POS.x;
                    }
                    else {
                        this.poolTable.leftLimit = Pockey.PockeySettings.MIDDLE_TABLE_RIGHT_POS.x - Pockey.PockeySettings.BALL_RADIUS;
                        this.poolTable.rightLimit = Pockey.PockeySettings.MIDDLE_TABLE_RIGHT_POS.x + Pockey.PockeySettings.BALL_RADIUS;
                        ballPositionCirclePosition.x = Pockey.PockeySettings.MIDDLE_TABLE_RIGHT_POS.x;
                    }
                }
                else {
                    this.poolTable.leftLimit = this.poolTable.playGround.x;
                    this.poolTable.upLimit = this.poolTable.playGround.y;
                    this.poolTable.rightLimit = this.poolTable.playGround.x + this.poolTable.playGround.width;
                    this.poolTable.downLimit = this.poolTable.playGround.y + this.poolTable.playGround.height;
                }
                if (ballPositionCirclePosition.x + Pockey.PockeySettings.BALL_RADIUS > this.poolTable.rightLimit)
                    ballPositionCirclePosition.x = this.poolTable.rightLimit - Pockey.PockeySettings.BALL_RADIUS;
                if (ballPositionCirclePosition.x - Pockey.PockeySettings.BALL_RADIUS < this.poolTable.leftLimit)
                    ballPositionCirclePosition.x = this.poolTable.leftLimit + Pockey.PockeySettings.BALL_RADIUS;
                if (ballPositionCirclePosition.y + Pockey.PockeySettings.BALL_RADIUS > this.poolTable.downLimit)
                    ballPositionCirclePosition.y = this.poolTable.downLimit - Pockey.PockeySettings.BALL_RADIUS;
                if (ballPositionCirclePosition.y - Pockey.PockeySettings.BALL_RADIUS < this.poolTable.upLimit)
                    ballPositionCirclePosition.y = this.poolTable.upLimit + Pockey.PockeySettings.BALL_RADIUS;
                let ballPosition;
                _.forEach(this.poolTable.goalkeepersCircles, (ball) => {
                    ballPosition = new Vector2(ball.x, ball.y);
                    if (ballPositionCirclePosition.distanceTo(ballPosition) < ball.radius + Pockey.PockeySettings.BALL_RADIUS) {
                        let opposite = ballPositionCirclePosition.y - ballPosition.y;
                        let adjacent = ballPositionCirclePosition.x - ballPosition.x;
                        let rotAngle = Math.atan2(opposite, adjacent);
                        ballPositionCirclePosition.x = ballPosition.x + (Pockey.PockeySettings.BALL_RADIUS + ball.radius) * Math.cos(rotAngle);
                        ballPositionCirclePosition.y = ballPosition.y + (Pockey.PockeySettings.BALL_RADIUS + ball.radius) * Math.sin(rotAngle);
                    }
                });
                _.forEach(this.poolTable.balls, (ball) => {
                    ballPosition = new Vector2(ball.x, ball.y);
                    if (ballPositionCirclePosition.distanceTo(ballPosition) < ball.radius + Pockey.PockeySettings.BALL_RADIUS && !ball.canBeRemoved && ball != this.poolTable.whiteBall) {
                        let opposite = ballPositionCirclePosition.y - ballPosition.y;
                        let adjacent = ballPositionCirclePosition.x - ballPosition.x;
                        let rotAngle = Math.atan2(opposite, adjacent);
                        ballPositionCirclePosition.x = ballPosition.x + (Pockey.PockeySettings.BALL_RADIUS + ball.radius) * Math.cos(rotAngle);
                        ballPositionCirclePosition.y = ballPosition.y + (Pockey.PockeySettings.BALL_RADIUS + ball.radius) * Math.sin(rotAngle);
                        _.forEach(this.poolTable.balls, (ball2) => {
                            if (ball2 != ball) {
                                let ball2Position = new Vector2(ball2.x, ball2.y);
                                if (ball2Position.distanceTo(ballPositionCirclePosition) < Pockey.PockeySettings.BALL_RADIUS + ball2.radius) {
                                    isInteresectingWithOthers = true;
                                    return;
                                }
                            }
                        });
                    }
                });
                _.forEach(this.poolTable.goalkeepersCircles, (ball) => {
                    ballPosition = new Vector2(ball.x, ball.y);
                    if (ballPositionCirclePosition.distanceTo(ballPosition) < ball.radius + Pockey.PockeySettings.BALL_RADIUS) {
                        isInteresectingWithOthers = true;
                        return;
                    }
                });
                if (ballPositionCirclePosition.x + Pockey.PockeySettings.BALL_RADIUS > this.poolTable.rightLimit)
                    isInteresectingWithOthers = true;
                if (ballPositionCirclePosition.x - Pockey.PockeySettings.BALL_RADIUS < this.poolTable.leftLimit)
                    isInteresectingWithOthers = true;
                if (ballPositionCirclePosition.y + Pockey.PockeySettings.BALL_RADIUS > this.poolTable.downLimit)
                    isInteresectingWithOthers = true;
                if (ballPositionCirclePosition.y - Pockey.PockeySettings.BALL_RADIUS < this.poolTable.upLimit)
                    isInteresectingWithOthers = true;
                if (isInteresectingWithOthers) {
                    ballPositionCirclePosition.x = this.lastGoodRepositionPoint.x;
                    ballPositionCirclePosition.y = this.lastGoodRepositionPoint.y;
                }
                else {
                    this.lastGoodRepositionPoint.x = ballPositionCirclePosition.x;
                    this.lastGoodRepositionPoint.y = ballPositionCirclePosition.y;
                }
                this.ballPositionCircleMesh.position.x = ballPositionCirclePosition.x;
                this.ballPositionCircleMesh.position.y = -ballPositionCirclePosition.y - Pockey.PockeySettings.BABYLON_Y_OFFSET;
                TweenMax.to(this.ballPositionCircleMesh.position, 0.1, {
                    x: ballPositionCirclePosition.x,
                    y: -ballPositionCirclePosition.y - Pockey.PockeySettings.BABYLON_Y_OFFSET
                });
                if (MouseHandler.Instance().left.down) {
                    this.repositionStarted = true;
                }
                if (this.repositionStarted && !MouseHandler.Instance().left.down) {
                    this.repositionStarted = false;
                    this.repositionWhiteBallEnabled = false;
                    this.poolTable.whiteBall.isOnReposition = false;
                    this.poolTable.whiteBall.reset();
                    this.poolTable.whiteBall.ballPosition = ballPositionCirclePosition;
                    this.poolTable.balls.push(this.poolTable.whiteBall);
                    SignalsManager.DispatchSignal(PockeySignalTypes.WHITE_BALL_REPOSITIONED);
                    if (!this.poolTable.poolStick.isActive) {
                        _.forEach(this.poolTable.balls, (ball) => {
                            ball.addShadowBody();
                        });
                        this.poolTable.poolStick.activate(new Point(this.poolTable.whiteBall.x, this.poolTable.whiteBall.y));
                    }
                }
            }
            handleCollisions() {
            }
            hideBallRayGraphics() {
                this.ballPositionCircleMesh.setEnabled(false);
                this.ballPositionCircleOnRaycastMesh.setEnabled(false);
                this.raycastFollowerMesh.setEnabled(false);
                this.whiteBallReflectionArrowMesh.setEnabled(false);
                this.otherBallReflectionArrowMesh.setEnabled(false);
                if (this.whiteBallDirectionMesh)
                    this.whiteBallDirectionMesh.setEnabled(false);
                if (this.otherBallPostCollisionDirectionMesh)
                    this.otherBallPostCollisionDirectionMesh.setEnabled(false);
                if (this.whiteBallPostCollisionDirectionMesh)
                    this.whiteBallPostCollisionDirectionMesh.setEnabled(false);
                if (this.whiteBallDashedMesh)
                    this.whiteBallDashedMesh.setEnabled(false);
                this.graphicsHidden = true;
            }
            update() {
                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onRepositionWhiteBall) {
                    this.onRepositionWhiteBall();
                    return;
                }
                else if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onShoot) {
                    if (!this.ballsAreMoving()) {
                        SignalsManager.DispatchSignal(PockeySignalTypes.PREPARE_NEXT_TURN);
                    }
                    else {
                        this.handleCollisions();
                    }
                }
                else if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onRearrangeStick) {
                    this.onRearrangeStick();
                }
                else {
                    this.onResetStickPower();
                }
            }
            applyTimeState(params) {
                let timeState = params[0];
                let duration = params[1];
                this.poolTable.poolStick.setState(timeState.stickState, duration);
                _.forEach(this.poolTable.balls, (ball) => {
                    _.forEach(timeState.ballsStates, (ballState) => {
                        if (ball.name == ballState.name) {
                            ball.setState(ballState, duration);
                        }
                    });
                });
                this.goaliesHolder.setState(timeState.goalieState, duration);
                this.applyGraphicsState(timeState.graphicsState);
            }
            changeWhiteBallStatus() {
                if (this.poolTable.whiteBall.isOnRearrange)
                    this.poolTable.whiteBall.isOnRearrange = false;
                if (this.poolTable.whiteBall.isOnReposition)
                    this.poolTable.whiteBall.isOnReposition = false;
            }
            applyGraphicsState(state) {
                if (!state.visible) {
                    this.hideBallRayGraphics();
                    return;
                }
                else {
                    if (state.onReposition) {
                        this.ballPositionCircleMesh.position.x = state.whiteBallPositionOnReposition[0];
                        this.ballPositionCircleMesh.position.y = state.whiteBallPositionOnReposition[1];
                        this.ballPositionCircleMesh.setEnabled(true);
                    }
                    else {
                        if (this.ballPositionCircleMesh) {
                            this.ballPositionCircleMesh.setEnabled(false);
                        }
                        this.ballPositionCircleOnRaycastMesh.position.x = state.whiteBallPositionOnRayCast[0];
                        this.ballPositionCircleOnRaycastMesh.position.y = state.whiteBallPositionOnRayCast[1];
                        this.ballPositionCircleOnRaycastMesh.edgesColor = state.graphicsColor;
                        this.ballPositionCircleOnRaycastMesh.setEnabled(true);
                        this.raycastFollowerMesh.position.x = state.circleFollowerPosition[0];
                        this.raycastFollowerMesh.position.y = state.circleFollowerPosition[1];
                        this.raycastFollowerMesh.edgesColor = state.graphicsColor;
                        if (this.raycastFollowerMesh)
                            this.raycastFollowerMesh.setEnabled(true);
                        if (state.lineBetweenCirclesCoordinates.length > 1) {
                            this.whiteBallDirectionMesh = BABYLON.MeshBuilder.CreateLines("whiteBallDirectionMesh", {
                                points: [new Vector3(state.lineBetweenCirclesCoordinates[0][0], state.lineBetweenCirclesCoordinates[0][1], 0), new Vector3(state.lineBetweenCirclesCoordinates[1][0], state.lineBetweenCirclesCoordinates[1][1], 0)],
                                instance: this.whiteBallDirectionMesh
                            });
                            this.whiteBallDirectionMesh.enableEdgesRendering();
                            this.whiteBallDirectionMesh.edgesWidth = 10;
                            this.whiteBallDirectionMesh.edgesColor = state.graphicsColor;
                            this.whiteBallDirectionMesh.setEnabled(true);
                        }
                        if (this.otherBallPostCollisionDirectionMesh)
                            this.otherBallPostCollisionDirectionMesh.setEnabled(false);
                        if (state.otherBallDirectionPoints.length > 1) {
                            this.otherBallPostCollisionDirectionMesh = BABYLON.MeshBuilder.CreateLines("otherBallPostCollisionDirectionMesh", {
                                points: [new Vector3(state.otherBallDirectionPoints[0][0], state.otherBallDirectionPoints[0][1], 0), new Vector3(state.otherBallDirectionPoints[1][0], state.otherBallDirectionPoints[1][1], 0)],
                                instance: this.otherBallPostCollisionDirectionMesh
                            });
                            this.otherBallPostCollisionDirectionMesh.position.z = -Pockey.PockeySettings.BALL_RADIUS * 2;
                            this.otherBallPostCollisionDirectionMesh.enableEdgesRendering();
                            this.otherBallPostCollisionDirectionMesh.edgesWidth = 10;
                            this.otherBallPostCollisionDirectionMesh.edgesColor = state.graphicsColor;
                            this.otherBallPostCollisionDirectionMesh.setEnabled(true);
                            this.otherBallReflectionArrowMesh.position.x = state.otherBallArrowPositionAndRotation[0];
                            this.otherBallReflectionArrowMesh.position.y = state.otherBallArrowPositionAndRotation[1];
                            this.otherBallReflectionArrowMesh.rotation.z = state.otherBallArrowPositionAndRotation[2];
                            this.otherBallReflectionArrowMesh.setEnabled(true);
                        }
                        else {
                            this.otherBallReflectionArrowMesh.setEnabled(false);
                        }
                        if (this.whiteBallPostCollisionDirectionMesh)
                            this.whiteBallPostCollisionDirectionMesh.setEnabled(false);
                        if (this.whiteBallDashedMesh)
                            this.whiteBallDashedMesh.setEnabled(false);
                        if (state.whiteBallDirectionPoints.length > 1) {
                            this.whiteBallPostCollisionDirectionMesh = BABYLON.MeshBuilder.CreateLines("whiteBallPostCollisionDirectionMesh", {
                                points: [new Vector3(state.whiteBallDirectionPoints[0][0], state.whiteBallDirectionPoints[0][1], 0), new Vector3(state.whiteBallDirectionPoints[1][0], state.whiteBallDirectionPoints[1][1], 0)],
                                instance: this.whiteBallPostCollisionDirectionMesh
                            });
                            this.whiteBallPostCollisionDirectionMesh.position.z = -Pockey.PockeySettings.BALL_RADIUS * 2;
                            this.whiteBallPostCollisionDirectionMesh.enableEdgesRendering();
                            this.whiteBallPostCollisionDirectionMesh.edgesWidth = 10;
                            this.whiteBallPostCollisionDirectionMesh.edgesColor = state.graphicsColor;
                            this.whiteBallPostCollisionDirectionMesh.setEnabled(true);
                            this.whiteBallDashedMesh = BABYLON.MeshBuilder.CreateDashedLines("whiteBallDashedMesh", {
                                points: [new Vector3(state.whiteBallDashedPoints[0][0], state.whiteBallDashedPoints[0][1], 0), new Vector3(state.whiteBallDashedPoints[1][0], state.whiteBallDashedPoints[1][1], 0)],
                                instance: this.whiteBallDashedMesh
                            });
                            this.whiteBallDashedMesh.enableEdgesRendering();
                            this.whiteBallDashedMesh.edgesWidth = 10;
                            this.whiteBallDashedMesh.position.z = -Pockey.PockeySettings.BALL_RADIUS * 2;
                            this.whiteBallDashedMesh.edgesColor = state.graphicsColor;
                            this.whiteBallDashedMesh.setEnabled(true);
                            this.whiteBallDashedMesh.setEnabled(true);
                            this.whiteBallReflectionArrowMesh.position.x = state.whiteBallArrowPositionAndRotation[0];
                            this.whiteBallReflectionArrowMesh.position.y = state.whiteBallArrowPositionAndRotation[1];
                            this.whiteBallReflectionArrowMesh.rotation.z = state.whiteBallArrowPositionAndRotation[2];
                            this.whiteBallReflectionArrowMesh.setEnabled(true);
                        }
                        else {
                            this.whiteBallReflectionArrowMesh.setEnabled(false);
                        }
                    }
                }
            }
            ballsArrayContainsBall(ballName) {
                let contains = false;
                _.forEach(this.poolTable.balls, (ball) => {
                    if (ballName == ball.name) {
                        contains = true;
                        return;
                    }
                });
                return contains;
            }
            removeBallFromArray(ballName) {
                _.remove(this.poolTable.balls, (ball) => {
                    if (ballName == ball.name) {
                        GameModule.P2WorldManager.Instance().world.removeBody(ball.p2Body);
                        GameModule.P2WorldManager.Instance().world.removeBody(ball.p2BodyShadow);
                    }
                    return ballName == ball.name;
                });
            }
            drawRayResult(result, ray) {
                result.getHitPoint(this.hitPoint, ray);
                if (result.hasHit()) {
                    let defaultColor = 0xffffff;
                    let hexDefaultColor = new Color4(1, 1, 1, 1);
                    this.graphColor = hexDefaultColor;
                    this.otherBallDirectionPoints = [];
                    this.whiteBallDirectionPoints = [];
                    this.whiteBallDashedPoints = [];
                    let hitPoint = new Vector2(this.hitPoint[0], this.hitPoint[1]);
                    let rayFrom = new Vector2(ray.from[0], ray.from[1]);
                    let opposite = ray.from[1] - this.hitPoint[1];
                    let adjacent = ray.from[0] - this.hitPoint[0];
                    let raycastAngle = Math.atan2(opposite, adjacent);
                    let rayCastLineStart = new Vector2();
                    let rayCastLineEnd = new Vector2(Math.cos(raycastAngle), Math.sin(raycastAngle)).multiply(Pockey.PockeySettings.BALL_RADIUS);
                    rayCastLineEnd.x += hitPoint.x;
                    rayCastLineEnd.y += hitPoint.y;
                    rayCastLineStart.x = ray.from[0] - (Pockey.PockeySettings.BALL_RADIUS + 4) * Math.cos(raycastAngle);
                    rayCastLineStart.y = ray.from[1] - (Pockey.PockeySettings.BALL_RADIUS + 4) * Math.sin(raycastAngle);
                    this.lineBetweenCirclesPoints = [[rayCastLineEnd.x, -rayCastLineEnd.y - Pockey.PockeySettings.BABYLON_Y_OFFSET], [rayCastLineStart.x, -rayCastLineStart.y - Pockey.PockeySettings.BABYLON_Y_OFFSET]];
                    let lineLength = this.poolTable.whiteBall.ballPosition.distanceTo(hitPoint);
                    if (lineLength > Pockey.PockeySettings.BALL_RADIUS * 2) {
                        this.whiteBallDirectionMesh = BABYLON.MeshBuilder.CreateLines("lines", {
                            points: [new Vector3(this.lineBetweenCirclesPoints[0][0], this.lineBetweenCirclesPoints[0][1], 0),
                                new Vector3(this.lineBetweenCirclesPoints[1][0], this.lineBetweenCirclesPoints[1][1], 0)],
                            instance: this.whiteBallDirectionMesh
                        });
                        this.whiteBallDirectionMesh.enableEdgesRendering();
                        this.whiteBallDirectionMesh.edgesWidth = 10;
                        this.whiteBallDirectionMesh.setEnabled(true);
                    }
                    if (this.whiteBallDirectionMesh)
                        this.whiteBallDirectionMesh.edgesColor = hexDefaultColor;
                    this.raycastFollowerMesh.edgesColor = hexDefaultColor;
                    this.ballPositionCircleOnRaycastMesh.edgesColor = hexDefaultColor;
                    this.raycastFollowerMesh.position.x = hitPoint.x;
                    this.raycastFollowerMesh.position.y = -hitPoint.y - Pockey.PockeySettings.BABYLON_Y_OFFSET;
                    this.ballPositionCircleOnRaycastMesh.position.x = rayFrom.x;
                    this.ballPositionCircleOnRaycastMesh.position.y = -rayFrom.y - Pockey.PockeySettings.BABYLON_Y_OFFSET;
                    if (!_.isNull(result.shape.radius) && !_.isUndefined(result.shape.radius)) {
                        let isOwnBall = this.checkIfOwnShadow(result.body);
                        if (isOwnBall) {
                            hexDefaultColor = this.HexToRGB("ca384d");
                            this.graphColor = hexDefaultColor;
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.ownBallAiming]);
                        }
                        else {
                            if (this.isFirstShoot) {
                                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.beginGame]);
                            }
                            else {
                                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.yourTurnToShoot]);
                            }
                        }
                        if (this.whiteBallDirectionMesh)
                            this.whiteBallDirectionMesh.edgesColor = hexDefaultColor;
                        this.raycastFollowerMesh.edgesColor = hexDefaultColor;
                        this.ballPositionCircleOnRaycastMesh.edgesColor = hexDefaultColor;
                        let isPuck = this.checkIfPuck(result.body);
                        if (isPuck) {
                            this.onAnimatePuckGoal();
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.puckAiming]);
                        }
                        else {
                            this.onStopAnimatePuckGoal();
                        }
                        let startPoint;
                        let endPoint;
                        let dottedLineArrowPoint;
                        let tangentVector = new Vector2();
                        tangentVector.y = -(result.body.position[0] - this.hitPoint[0]);
                        tangentVector.x = result.body.position[1] - this.hitPoint[1];
                        tangentVector = tangentVector.normalise();
                        let relativeVelocity = new Vector2(this.hitPoint[0] - result.body.position[0], this.hitPoint[1] - result.body.position[1]);
                        let length = tangentVector.dot(relativeVelocity);
                        let cotangentVector = relativeVelocity.substract(tangentVector.multiply(length)).normalise();
                        let directionLength = 18;
                        let distanceToTheOtherBall = new Vector2(this.hitPoint[0] - Math.cos(raycastAngle) * Pockey.PockeySettings.BALL_RADIUS, this.hitPoint[1] - Math.sin(raycastAngle) * Pockey.PockeySettings.BALL_RADIUS)
                            .distanceTo(new Vector2(result.body.position[0], result.body.position[1]));
                        if (distanceToTheOtherBall > Pockey.PockeySettings.BALL_RADIUS + result.shape.radius / 2) {
                            distanceToTheOtherBall = Pockey.PockeySettings.BALL_RADIUS + result.shape.radius / 2;
                        }
                        let arrowScaleFactor = (1 - ((result.shape.radius / 2) / distanceToTheOtherBall)) / 0.5;
                        arrowScaleFactor = Math.round(arrowScaleFactor * 1000) / 1000;
                        this.arrowsDeviationLength = Pockey.PockeySettings.BALL_RADIUS * 2 - this.calculateDeviation(new Vector2(hitPoint.x, hitPoint.y), new Vector2(this.poolTable.whiteBall.position.x, this.poolTable.whiteBall.y), new Vector2(result.body.position[0], result.body.position[1]));
                        let whiteBallArrowAngleCorrection = 1;
                        if (arrowScaleFactor > 0.03 && !isOwnBall) {
                            startPoint = new Vector2(this.hitPoint[0] - (Pockey.PockeySettings.BALL_RADIUS * tangentVector.x), this.hitPoint[1] - (Pockey.PockeySettings.BALL_RADIUS * tangentVector.y));
                            let opposedStartPoint = new Vector2(this.hitPoint[0] + (Pockey.PockeySettings.BALL_RADIUS * tangentVector.x), this.hitPoint[1] + (Pockey.PockeySettings.BALL_RADIUS * tangentVector.y));
                            if (startPoint.distanceTo(rayCastLineEnd) <= opposedStartPoint.distanceTo(rayCastLineEnd)) {
                                startPoint = opposedStartPoint;
                                whiteBallArrowAngleCorrection = -1;
                            }
                            opposite = startPoint.x - hitPoint.x;
                            adjacent = startPoint.y - hitPoint.y;
                            raycastAngle = Math.atan2(opposite, adjacent) + whiteBallArrowAngleCorrection * (this.arrowsDeviationLength / 3.38) * Math.PI / 180;
                            startPoint = new Vector2(hitPoint.x + Math.sin(raycastAngle) * Pockey.PockeySettings.BALL_RADIUS, hitPoint.y + Math.cos(raycastAngle) * Pockey.PockeySettings.BALL_RADIUS);
                            endPoint = new Vector2(startPoint.x + Math.sin(raycastAngle) * (Pockey.PockeySettings.BALL_RADIUS * arrowScaleFactor), startPoint.y + Math.cos(raycastAngle) * (Pockey.PockeySettings.BALL_RADIUS * arrowScaleFactor));
                            this.whiteBallDirectionPoints = [[startPoint.x, -startPoint.y - Pockey.PockeySettings.BABYLON_Y_OFFSET], [endPoint.x, -endPoint.y - Pockey.PockeySettings.BABYLON_Y_OFFSET]];
                            this.whiteBallPostCollisionDirectionMesh = BABYLON.MeshBuilder.CreateLines("whiteBallPostCollisionDirectionMesh", {
                                points: [new Vector3(this.whiteBallDirectionPoints[0][0], this.whiteBallDirectionPoints[0][1], 0), new Vector3(this.whiteBallDirectionPoints[1][0], this.whiteBallDirectionPoints[1][1], 0)],
                                instance: this.whiteBallPostCollisionDirectionMesh
                            });
                            this.whiteBallPostCollisionDirectionMesh.enableEdgesRendering();
                            this.whiteBallPostCollisionDirectionMesh.edgesWidth = 10;
                            this.whiteBallPostCollisionDirectionMesh.position.z = -Pockey.PockeySettings.BALL_RADIUS * 2;
                            this.whiteBallPostCollisionDirectionMesh.edgesColor = hexDefaultColor;
                            this.whiteBallPostCollisionDirectionMesh.setEnabled(true);
                            startPoint.x = endPoint.x;
                            startPoint.y = endPoint.y;
                            endPoint.x += Math.sin(raycastAngle) * (directionLength + 10);
                            endPoint.y += Math.cos(raycastAngle) * (directionLength + 10);
                            this.whiteBallDashedPoints = [[startPoint.x, -startPoint.y - Pockey.PockeySettings.BABYLON_Y_OFFSET], [endPoint.x, -endPoint.y - Pockey.PockeySettings.BABYLON_Y_OFFSET]];
                            this.whiteBallDashedMesh = BABYLON.MeshBuilder.CreateDashedLines("whiteBallDashedMesh", {
                                points: [new Vector3(this.whiteBallDashedPoints[0][0], this.whiteBallDashedPoints[0][1], 0), new Vector3(this.whiteBallDashedPoints[1][0], this.whiteBallDashedPoints[1][1], 0)],
                                instance: this.whiteBallDashedMesh
                            });
                            this.whiteBallDashedMesh.enableEdgesRendering();
                            this.whiteBallDashedMesh.edgesWidth = 10;
                            this.whiteBallDashedMesh.position.z = -Pockey.PockeySettings.BALL_RADIUS * 2;
                            this.whiteBallDashedMesh.edgesColor = hexDefaultColor;
                            this.whiteBallDashedMesh.setEnabled(true);
                            endPoint.x += Math.sin(raycastAngle) * 5;
                            endPoint.y += Math.cos(raycastAngle) * 5;
                            this.whiteBallReflectionArrowMesh.position.x = endPoint.x;
                            this.whiteBallReflectionArrowMesh.position.y = -endPoint.y - Pockey.PockeySettings.BABYLON_Y_OFFSET;
                            this.whiteBallReflectionArrowMesh.rotation.z = -Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x) - 135 * Math.PI / 180;
                            this.whiteBallReflectionArrowMesh.setEnabled(true);
                        }
                        if ((1 - arrowScaleFactor) > 0.01 && !isOwnBall) {
                            startPoint = new Vector2(this.hitPoint[0] - (Pockey.PockeySettings.BALL_RADIUS * cotangentVector.x), this.hitPoint[1] - (Pockey.PockeySettings.BALL_RADIUS * cotangentVector.y));
                            endPoint = new Vector2(startPoint.x - cotangentVector.x * (Pockey.PockeySettings.BALL_RADIUS * 2 + 6 + directionLength * (1 - arrowScaleFactor)), startPoint.y - cotangentVector.y * (Pockey.PockeySettings.BALL_RADIUS * 2 + 6 + directionLength * (1 - arrowScaleFactor)));
                            this.otherBallDirectionPoints = [[startPoint.x, -startPoint.y - Pockey.PockeySettings.BABYLON_Y_OFFSET], [endPoint.x, -endPoint.y - Pockey.PockeySettings.BABYLON_Y_OFFSET, 0]];
                            this.otherBallPostCollisionDirectionMesh = BABYLON.MeshBuilder.CreateLines("otherBallPostCollisionDirectionMesh", {
                                points: [new Vector3(this.otherBallDirectionPoints[0][0], this.otherBallDirectionPoints[0][1], 0), new Vector3(this.otherBallDirectionPoints[1][0], this.otherBallDirectionPoints[1][1], 0)],
                                instance: this.otherBallPostCollisionDirectionMesh
                            });
                            this.otherBallPostCollisionDirectionMesh.enableEdgesRendering();
                            this.otherBallPostCollisionDirectionMesh.edgesWidth = 10;
                            this.otherBallPostCollisionDirectionMesh.position.z = -Pockey.PockeySettings.BALL_RADIUS * 2;
                            this.otherBallPostCollisionDirectionMesh.edgesColor = hexDefaultColor;
                            this.otherBallPostCollisionDirectionMesh.setEnabled(true);
                            this.otherBallReflectionArrowMesh.position.x = endPoint.x;
                            this.otherBallReflectionArrowMesh.position.y = -endPoint.y - Pockey.PockeySettings.BABYLON_Y_OFFSET;
                            this.otherBallReflectionArrowMesh.rotation.z = -Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x) - 135 * Math.PI / 180;
                            this.otherBallReflectionArrowMesh.setEnabled(true);
                        }
                    }
                    else {
                        this.onStopAnimatePuckGoal();
                    }
                }
            }
            ;
            ballsAreMoving() {
                let areMoving = false;
                _.forEach(this.poolTable.balls, (ball, id) => {
                    if (ball.moving || ball.animationInProgress) {
                        areMoving = true;
                        return;
                    }
                });
                return areMoving;
            }
            onStartVersusGame() {
            }
            reactivateStick() {
                _.forEach(this.poolTable.balls, (ball) => {
                    if (!ball.canBeRemoved) {
                        ball.addShadowBody();
                    }
                });
                this.poolTable.poolStick.activate(this.poolTable.whiteBall.position);
            }
            checkIfOwnShadow(body) {
                let isOwnBall = false;
                _.forEach(this.poolTable.balls, (ball) => {
                    if (ball.ballType == GameModule.GameManager.Instance().currentPlayer.type && ball.p2BodyShadow.id == body.id) {
                        isOwnBall = true;
                    }
                });
                return isOwnBall;
            }
            checkIfPuck(body) {
                let isPuck = false;
                _.forEach(this.poolTable.balls, (ball) => {
                    if (ball.ballType == GameModule.BallType.Puck && ball.p2BodyShadow.id == body.id) {
                        isPuck = true;
                    }
                });
                return isPuck;
            }
            checkIfOwnBall(body) {
                let isOwnBall = false;
                _.forEach(this.poolTable.balls, (ball) => {
                    if (ball.ballType == GameModule.GameManager.Instance().currentPlayer.type && ball.p2Body.id == body.id) {
                        isOwnBall = true;
                    }
                });
                return isOwnBall;
            }
            calculateDeviation(point, firstSegmentPoint, secondSegmentPoint) {
                let x = point.x;
                let y = point.y;
                let x1 = firstSegmentPoint.x;
                let y1 = firstSegmentPoint.y;
                let x2 = secondSegmentPoint.x;
                let y2 = secondSegmentPoint.y;
                let A = x - x1;
                let B = y - y1;
                let C = x2 - x1;
                let D = y2 - y1;
                let dot = A * C + B * D;
                let len_sq = C * C + D * D;
                let param = -1;
                if (len_sq != 0)
                    param = dot / len_sq;
                let xx, yy;
                if (param < 0) {
                    xx = x1;
                    yy = y1;
                }
                else if (param > 1) {
                    xx = x2;
                    yy = y2;
                }
                else {
                    xx = x1 + param * C;
                    yy = y1 + param * D;
                }
                let dx = x - xx;
                let dy = y - yy;
                return Math.sqrt(dx * dx + dy * dy);
            }
            distToSegmentSquared(point, firstSegmentPoint, secondSegmentPoint) {
                let l2 = firstSegmentPoint.distanceTo(secondSegmentPoint);
                if (l2 == 0)
                    return point.distanceTo(firstSegmentPoint);
                let t = ((point.x - firstSegmentPoint.x) * (secondSegmentPoint.x - firstSegmentPoint.x) + (point.y - firstSegmentPoint.y) * (secondSegmentPoint.y - firstSegmentPoint.y)) / l2;
                t = Math.max(0, Math.min(1, t));
                return point.distanceTo(new Vector2(firstSegmentPoint.x + t * (secondSegmentPoint.x - firstSegmentPoint.x), firstSegmentPoint.y + t * (secondSegmentPoint.y - firstSegmentPoint.y)));
            }
            HexToRGB(hex) {
                var r = parseInt(hex.substring(0, 2), 16) / 255;
                var g = parseInt(hex.substring(2, 4), 16) / 255;
                var b = parseInt(hex.substring(4, 6), 16) / 255;
                return new BABYLON.Color4(r, g, b, 1);
            }
            create2Dpoly(options, scene) {
                let pos;
                let points = [];
                let disc = BABYLON.VertexData.CreateDisc(options);
                pos = disc.positions;
                for (let i = 1; i < disc.positions.length / 3; i++) {
                    points.push(new BABYLON.Vector3(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]));
                }
                return BABYLON.MeshBuilder.CreateLines("circle", { points: points }, scene);
            }
        }
        GameModule.PoolTableManager = PoolTableManager;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let GameModule;
    (function (GameModule) {
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var PockeyStates = Pockey.StateMachineModule.PockeyStates;
        var PockeyStateMachine = Pockey.StateMachineModule.PockeyStateMachine;
        var Point = PIXI.Point;
        var Vector2 = Framework.Utils.Vector2;
        var TouchHandler = Framework.Utils.TouchHandler;
        var PockeyStateTexts = Pockey.StateMachineModule.PockeyStateTexts;
        class PoolTableManagerMobile extends GameModule.PoolTableManager {
            constructor() {
                super();
                this.whiteBallPositionConfirmed = false;
                this.rearrangeStickStarted = false;
                SignalsManager.AddSignalCallback(PockeySignalTypes.MOBILE_WHITE_BALL_REPOSITION_CONFIRMED, this.onWhiteBallPositionConfirmed.bind(this));
            }
            onWhiteBallPositionConfirmed() {
                this.whiteBallPositionConfirmed = true;
            }
            onShoot() {
                super.onShoot();
                this.rearrangeStickStarted = false;
            }
            update() {
                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onRepositionWhiteBall) {
                    this.onRepositionWhiteBall();
                    return;
                }
                else if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onShoot) {
                    if (!this.ballsAreMoving()) {
                        SignalsManager.DispatchSignal(PockeySignalTypes.PREPARE_NEXT_TURN);
                    }
                    else {
                        this.handleCollisions();
                    }
                }
                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onRearrangeStick) {
                    if (this.poolTable.poolStick.rotationEnabled) {
                        if (this.isFirstShoot) {
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.beginGame]);
                        }
                        else {
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.yourTurnToShoot]);
                        }
                        this.poolTable.poolStick.x = this.poolTable.whiteBall.x;
                        this.poolTable.poolStick.y = this.poolTable.whiteBall.y;
                        let localPoint = this.poolTable.toLocal(new Point(TouchHandler.Instance().position.x, TouchHandler.Instance().position.y));
                        if (!this.rearrangeStickStarted) {
                            localPoint.x = this.poolTable.poolStick.x + 10 * Math.cos(this.poolTable.poolStick.rotation);
                            localPoint.y = this.poolTable.poolStick.y + 10 * Math.sin(this.poolTable.poolStick.rotation);
                        }
                        if (TouchHandler.Instance().isTouchMoving) {
                            this.rearrangeStickStarted = true;
                        }
                        let opposite = localPoint.y - this.poolTable.whiteBall.y;
                        let adjacent = localPoint.x - this.poolTable.whiteBall.x;
                        let rot = Math.atan2(opposite, adjacent);
                        let dir = new Vector2(Math.cos(rot), Math.sin(rot)).multiply(1100);
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
                }
            }
            onStartVersusGame() {
                if (this.poolTable.poolStick && !this.poolTable.poolStick.isActive) {
                    this.poolTable.poolStick.activate(new Point(this.poolTable.poolStick.initialPosition.x, this.poolTable.poolStick.initialPosition.y));
                    SignalsManager.DispatchSignal(PockeySignalTypes.POOLSTICK_ACTIVATED);
                }
            }
            onRepositionWhiteBall() {
                if (this.opponentTimeUp) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.onOpponentsTimeUp]);
                }
                else
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.opponentFault]);
                let localPoint = this.poolTable.toLocal(new Point(TouchHandler.Instance().position.x, TouchHandler.Instance().position.y));
                if (_.isNull(this.lastGoodRepositionPoint) || _.isUndefined(this.lastGoodRepositionPoint)) {
                    this.lastGoodRepositionPoint = new Vector2();
                }
                let ballPositionCirclePosition = new Vector2(localPoint.x, localPoint.y);
                if (ballPositionCirclePosition.x + Pockey.PockeySettings.BALL_RADIUS > this.poolTable.rightLimit)
                    ballPositionCirclePosition.x = this.poolTable.rightLimit - Pockey.PockeySettings.BALL_RADIUS;
                if (ballPositionCirclePosition.x - Pockey.PockeySettings.BALL_RADIUS < this.poolTable.leftLimit)
                    ballPositionCirclePosition.x = this.poolTable.leftLimit + Pockey.PockeySettings.BALL_RADIUS;
                if (ballPositionCirclePosition.y + Pockey.PockeySettings.BALL_RADIUS > this.poolTable.downLimit)
                    ballPositionCirclePosition.y = this.poolTable.downLimit - Pockey.PockeySettings.BALL_RADIUS;
                if (ballPositionCirclePosition.y - Pockey.PockeySettings.BALL_RADIUS < this.poolTable.upLimit)
                    ballPositionCirclePosition.y = this.poolTable.upLimit + Pockey.PockeySettings.BALL_RADIUS;
                let ballPosition;
                _.forEach(this.poolTable.balls, (ball) => {
                    ballPosition = new Vector2(ball.x, ball.y);
                    if (ballPositionCirclePosition.distanceTo(ballPosition) < ball.radius + Pockey.PockeySettings.BALL_RADIUS) {
                        let opposite = ballPositionCirclePosition.y - ballPosition.y;
                        let adjacent = ballPositionCirclePosition.x - ballPosition.x;
                        let rotAngle = Math.atan2(opposite, adjacent);
                        ballPositionCirclePosition.x = ballPosition.x + (Pockey.PockeySettings.BALL_RADIUS + ball.radius) * Math.cos(rotAngle);
                        ballPositionCirclePosition.y = ballPosition.y + (Pockey.PockeySettings.BALL_RADIUS + ball.radius) * Math.sin(rotAngle);
                        let isInteresectingWithOthers = false;
                        _.forEach(this.poolTable.balls, (ball2) => {
                            if (ball2 != ball) {
                                let ball2Position = new Vector2(ball2.x, ball2.y);
                                if (ball2Position.distanceTo(ballPositionCirclePosition) < Pockey.PockeySettings.BALL_RADIUS + ball2.radius) {
                                    isInteresectingWithOthers = true;
                                    return;
                                }
                            }
                        });
                    }
                    this.ballPositionCircleMesh.position.x = ballPositionCirclePosition.x;
                    this.ballPositionCircleMesh.position.y = ballPositionCirclePosition.y;
                });
                if (TouchHandler.Instance().isTouchMoving) {
                    this.repositionStarted = true;
                }
                if (this.repositionStarted && this.whiteBallPositionConfirmed) {
                    this.repositionStarted = false;
                    this.repositionWhiteBallEnabled = false;
                    this.poolTable.whiteBall.reset();
                    this.poolTable.whiteBall.ballPosition = ballPositionCirclePosition;
                    this.poolTable.balls.push(this.poolTable.whiteBall);
                    this.whiteBallPositionConfirmed = false;
                    SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_WHITE_BALL_POSITION_CONFIRMER);
                    SignalsManager.DispatchSignal(PockeySignalTypes.WHITE_BALL_REPOSITIONED);
                    if (!this.poolTable.poolStick.isActive) {
                        _.forEach(this.poolTable.balls, (ball) => {
                            ball.addShadowBody();
                        });
                        this.poolTable.poolStick.activate(new Point(this.poolTable.whiteBall.x, this.poolTable.whiteBall.y));
                    }
                }
            }
            onResetStickPower() {
                this.poolTable.poolStick.power = 0;
                this.poolTable.poolStick.reset();
            }
        }
        GameModule.PoolTableManagerMobile = PoolTableManagerMobile;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let GameModule;
    (function (GameModule) {
        var Sprite = PIXI.Sprite;
        var Graphics = PIXI.Graphics;
        var Point = PIXI.Point;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        class MobileStickPower extends Container {
            constructor() {
                super();
                this.initialStickY = 60;
                this.stickMaxY = 528;
                this.isDown = false;
                this.stickPowerFactor = Pockey.PockeySettings.DELTA * 10;
                this.visible = false;
                this.backgroundGraphics = new Sprite(PIXI.Texture.fromFrame("power-bg.png"));
                this.backgroundGraphics.anchor.x = 0.5;
                this.addChild(this.backgroundGraphics);
                this.stickTexture = new Sprite(PIXI.Texture.fromFrame(GameModule.StickType.Default));
                this.stickTexture.anchor.y = 0.5;
                this.stickTexture.anchor.x = 1;
                this.stickTexture.rotation = -90 * Math.PI / 180;
                this.stickTexture.y = this.initialStickY;
                this.addChild(this.stickTexture);
                this.touchGraphics = new Container();
                this.touchGraphics.interactive = true;
                let newGr = new Graphics();
                newGr.beginFill(0xff9900, 0);
                newGr.drawRect(0, 0, this.backgroundGraphics.width, this.backgroundGraphics.height);
                newGr.x = this.backgroundGraphics.x;
                newGr.y = this.backgroundGraphics.y;
                this.touchGraphics.addChild(newGr);
                this.touchGraphics.pivot.x = this.backgroundGraphics.anchor.x * this.touchGraphics.width;
                this.touchGraphics.on("touchstart", (event) => {
                    this.isDown = true;
                    let localPosition = new Point();
                    event.data.getLocalPosition(this.touchGraphics, localPosition, event.data.global);
                    this.stickTexture.y = localPosition.y;
                    if (this.stickTexture.y < this.initialStickY)
                        this.stickTexture.y = this.initialStickY;
                    else if (this.stickTexture.y > this.stickMaxY)
                        this.stickTexture.y = this.stickMaxY;
                    console.log("mobile stick start ");
                    this.power = (this.stickTexture.y - this.initialStickY) * (Pockey.PockeySettings.STICK_MAX_POWER / (this.stickMaxY - this.initialStickY));
                    SignalsManager.DispatchSignal(PockeySignalTypes.STICK_PIVOT_MOBILE_UPDATE, [this.power]);
                });
                this.touchGraphics.on("touchmove", (event) => {
                    if (this.isDown) {
                        let localPosition = new Point();
                        event.data.getLocalPosition(this.touchGraphics, localPosition, event.data.global);
                        this.stickTexture.y = localPosition.y;
                        if (this.stickTexture.y < this.initialStickY)
                            this.stickTexture.y = this.initialStickY;
                        else if (this.stickTexture.y > this.stickMaxY)
                            this.stickTexture.y = this.stickMaxY;
                        this.power = (this.stickTexture.y - this.initialStickY) * (Pockey.PockeySettings.STICK_MAX_POWER / (this.stickMaxY - this.initialStickY));
                        SignalsManager.DispatchSignal(PockeySignalTypes.STICK_PIVOT_MOBILE_UPDATE, [this.power]);
                    }
                });
                this.touchGraphics.on("touchend", () => {
                    this.isDown = false;
                    TweenMax.to(this.stickTexture, 0.05, { y: this.initialStickY });
                    SignalsManager.DispatchSignal(PockeySignalTypes.STICK_MOBILE_RELEASE, [this.power]);
                });
                this.touchGraphics.on("touchendoutside", () => {
                    this.isDown = false;
                    TweenMax.to(this.stickTexture, 0.05, { y: this.initialStickY });
                    SignalsManager.DispatchSignal(PockeySignalTypes.STICK_MOBILE_RELEASE, [this.power]);
                });
                this.addChild(this.touchGraphics);
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_STICK_POWER_MOBILE, this.onHide.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_STICK_POWER_MOBILE, this.onShow.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.RESET_STICK_POWER, this.onResetStickPower.bind(this));
            }
            onResetStickPower() {
                this.power = 0;
                SignalsManager.DispatchSignal(PockeySignalTypes.STICK_PIVOT_MOBILE_UPDATE, [this.power]);
                this.isDown = false;
                this.stickTexture.y = this.initialStickY;
                this.onHide();
            }
            onHide() {
                TweenMax.to(this, 0.2, {
                    alpha: 0, onComplete: () => {
                        this.visible = false;
                    }
                });
            }
            onShow() {
                this.visible = true;
                TweenMax.to(this, 0.2, {
                    alpha: 1
                });
            }
        }
        GameModule.MobileStickPower = MobileStickPower;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let GameModule;
    (function (GameModule) {
        var AbstractModule = Framework.Abstracts.AbstractModule;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var Point = PIXI.Point;
        var Sprite = PIXI.Sprite;
        var AbstractEntryPoint = Framework.AbstractEntryPoint;
        var Settings = Framework.Settings;
        class PockeyGameModule extends AbstractModule {
            createElements() {
                if (Settings.isMobile) {
                    this.levelManager = new GameModule.PoolTableManagerMobile();
                }
                else {
                    this.levelManager = new GameModule.PoolTableManager();
                }
                this.addChild(this.levelManager.poolTable);
                if (Settings.isMobile) {
                    this.confirmWhiteBallPlacementTexture = new Container();
                    let blurFilter = new PIXI.filters.BlurFilter(1, 2);
                    this.glowTexture = new Sprite(PIXI.Texture.fromFrame("penalty-droppuck.png"));
                    this.glowTexture.tint = 0xffffff;
                    this.glowTexture.filters = [blurFilter];
                    this.glowTexture.anchor.x = 0.5;
                    this.glowTexture.anchor.y = 0.5;
                    this.confirmWhiteBallPlacementTexture.addChild(this.glowTexture);
                    let frontTexture = new Sprite(PIXI.Texture.fromFrame("penalty-droppuck.png"));
                    frontTexture.anchor.x = 0.5;
                    frontTexture.anchor.y = 0.5;
                    this.confirmWhiteBallPlacementTexture.addChild(frontTexture);
                    this.confirmWhiteBallPlacementTexture.visible = false;
                    this.addChild(this.confirmWhiteBallPlacementTexture);
                    this.confirmWhiteBallPlacementTexture.interactive = true;
                    this.confirmWhiteBallPlacementTexture.on("tap", () => {
                        SignalsManager.DispatchSignal(PockeySignalTypes.MOBILE_WHITE_BALL_REPOSITION_CONFIRMED);
                    });
                    this.mobileStickPower = new GameModule.MobileStickPower();
                    this.addChild(this.mobileStickPower);
                    SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_WHITE_BALL_POSITION_CONFIRMER, this.onShowWhiteBallPositionConfirmer.bind(this));
                    SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_WHITE_BALL_POSITION_CONFIRMER, this.onHideWhiteBallPositionConfirmer.bind(this));
                }
                super.createElements();
            }
            onShowWhiteBallPositionConfirmer() {
                this.confirmWhiteBallPlacementTexture.visible = true;
                if (this.glowTween && this.glowTween.isActive()) {
                    this.glowTween.kill();
                    this.glowTween = null;
                }
                this.glowTween = TweenMax.to(this.glowTexture.scale, 0.3, {
                    x: 1.2,
                    y: 1.2,
                    yoyo: true, repeat: -1
                });
            }
            onHideWhiteBallPositionConfirmer() {
                this.confirmWhiteBallPlacementTexture.visible = false;
                if (this.glowTween && this.glowTween.isActive()) {
                    this.glowTween.kill();
                    this.glowTween = null;
                }
                this.glowTexture.scale.x = 1;
                this.glowTexture.scale.y = 1;
            }
            handleDesktopLandscape() {
                super.handleDesktopLandscape();
                if (this.levelManager && this.levelManager.poolTable) {
                    this.levelManager.poolTable.poolStick.visible = false;
                    this.levelManager.poolTable.height = 0.7 * Settings.stageHeight;
                    let backgroundScaleFactor = this.levelManager.poolTable.scale.y;
                    this.levelManager.poolTable.scale.x = backgroundScaleFactor;
                    this.levelManager.poolTable.x = Settings.stageWidth / 2;
                    let difference = this.levelManager.poolTable.y;
                    this.levelManager.poolTable.y = 0.18 * Settings.stageHeight + this.levelManager.poolTable.height / 2;
                    difference -= this.levelManager.poolTable.y;
                    SignalsManager.DispatchSignal(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, [backgroundScaleFactor, this.levelManager.poolTable.position, this.levelManager.poolTable.rotation, this.levelManager.poolTable.width, this.levelManager.poolTable.height, difference]);
                    let cameraScaleFactor = 3.2;
                    let ratio = window.innerWidth / window.innerHeight;
                    let zoom = AbstractEntryPoint.camera.orthoTop;
                    let newWidth = zoom * ratio;
                    backgroundScaleFactor = 0.5 / backgroundScaleFactor;
                    AbstractEntryPoint.camera.orthoTop = Settings.stageHeight * backgroundScaleFactor;
                    AbstractEntryPoint.camera.orthoBottom = -Settings.stageHeight * backgroundScaleFactor;
                    AbstractEntryPoint.camera.orthoLeft = -Settings.stageWidth * backgroundScaleFactor;
                    AbstractEntryPoint.camera.orthoRight = Settings.stageWidth * backgroundScaleFactor;
                    this.levelManager.poolTable.poolStick.visible = true;
                }
            }
            handleMobileLandscape() {
                if (this.levelManager && this.levelManager.poolTable) {
                    this.levelManager.poolTable.poolStick.visible = false;
                    this.levelManager.poolTable.height = 0.9 * Settings.stageHeight;
                    let backgroundScaleFactor = this.levelManager.poolTable.scale.y;
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
                    let newPos = new Point();
                    newPos.x = this.levelManager.poolTable.position.x;
                    newPos.y = this.levelManager.poolTable.position.y + this.levelManager.poolTable.height * 0.019;
                    this.levelManager.poolTable.poolStick.visible = true;
                    SignalsManager.DispatchSignal(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, [backgroundScaleFactor, newPos, this.levelManager.poolTable.rotation]);
                }
            }
            handleMobilePortrait() {
                if (this.levelManager && this.levelManager.poolTable) {
                    this.levelManager.poolTable.poolStick.visible = false;
                    this.levelManager.poolTable.height = 0.9 * Settings.stageWidth;
                    let backgroundScaleFactor = this.levelManager.poolTable.scale.y;
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
                    let newPos = new Point();
                    newPos.x = this.levelManager.poolTable.position.x - this.levelManager.poolTable.height * 0.019;
                    newPos.y = this.levelManager.poolTable.position.y;
                    this.levelManager.poolTable.poolStick.visible = true;
                    SignalsManager.DispatchSignal(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, [backgroundScaleFactor, newPos, this.levelManager.poolTable.rotation]);
                }
            }
        }
        GameModule.PockeyGameModule = PockeyGameModule;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let GameModule;
    (function (GameModule) {
        class Player {
            constructor(id, type) {
                this.roundsWon = 0;
                this.startedFirst = false;
                this.avatarID = '';
                this.feltID = '';
                this.shootouts = 3;
                this.id = id;
                this.type = type;
                this.score = Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER;
            }
            reset() {
            }
        }
        GameModule.Player = Player;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Framework;
(function (Framework) {
    let Utils;
    (function (Utils) {
        class CountdownTimer {
            constructor(name, seconds, callback) {
                this.complete = false;
                this.timerStopped = true;
                this.name = name;
                this.currentTime = seconds;
                this.initialTime = seconds;
                this.callback = callback;
                this.complete = false;
            }
            setCounterInSeconds(seconds, callback) {
                stop();
                this.currentTime = seconds;
                this.initialTime = seconds;
                this.callback = callback;
                this.complete = false;
            }
            start() {
                this.timerTween = TweenMax.delayedCall(1, this.onUpdate.bind(this));
                this.timerStopped = false;
            }
            stop() {
                if (this.timerTween)
                    this.timerTween.kill();
                this.timerStopped = true;
            }
            reset() {
                this.currentTime = this.initialTime;
                this.complete = false;
            }
            restart() {
                this.stop();
                this.reset();
                this.start();
            }
            onUpdate() {
                if (this.timerStopped) {
                    return;
                }
                this.currentTime--;
                if (this.currentTime == 0) {
                    this.complete = true;
                }
                else {
                    this.start();
                }
                this.callback();
            }
        }
        Utils.CountdownTimer = CountdownTimer;
    })(Utils = Framework.Utils || (Framework.Utils = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    let UserInterface;
    (function (UserInterface) {
        class AbstractScreen {
            constructor() {
                this.assignDivs();
            }
            ;
            assignDivs() { }
            ;
            show(params = null) {
                this.div.style.display = "flex";
            }
            ;
            hide() {
                this.div.style.display = "none";
            }
            ;
            updateText(text) {
            }
        }
        UserInterface.AbstractScreen = AbstractScreen;
    })(UserInterface = Framework.UserInterface || (Framework.UserInterface = {}));
})(Framework || (Framework = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        var AbstractScreen = Framework.UserInterface.AbstractScreen;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var BallType = Pockey.GameModule.BallType;
        var PockeyConnectionSignals = Pockey.SignalsModule.PockeyConnectionSignals;
        let RoundCompleteType;
        (function (RoundCompleteType) {
            RoundCompleteType[RoundCompleteType["matchComplete"] = 0] = "matchComplete";
            RoundCompleteType[RoundCompleteType["roundComplete"] = 1] = "roundComplete";
            RoundCompleteType[RoundCompleteType["playerDisconnected"] = 2] = "playerDisconnected";
            RoundCompleteType[RoundCompleteType["rematch"] = 3] = "rematch";
        })(RoundCompleteType = UserInterface.RoundCompleteType || (UserInterface.RoundCompleteType = {}));
        class RoundCompleteScreen extends AbstractScreen {
            constructor() {
                super();
                this.currentRound = 1;
                SignalsManager.AddSignalCallback(PockeySignalTypes.ASSIGN_PLAYER, this.onDefinePlayerInterface.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SET_SIDES_TYPE, this.onSetSides.bind(this));
                SignalsManager.AddSignalCallback(PockeyConnectionSignals.OPPONENT_NEXT_ROUND, this.onRematch.bind(this));
            }
            onRematch() {
                this.rematchDiv.style.display = "flex";
                this.rematchButton.style.display = "none";
            }
            assignDivs() {
                this.div = document.getElementById("RoundCompleteScreen");
                this.textDiv = document.getElementById("RoundCompleteText");
                this.roundNumberDiv = document.getElementById("RoundCompleteRoundNumber");
                this.titleDiv = document.getElementById("RoundCompleteTitle");
                this.rematchDiv = document.getElementById("RematchAsked");
                this.mainMenuButton = document.getElementById("ScreenMainMenuButton");
                this.mainMenuButton.onclick = () => {
                    SignalsManager.DispatchSignal(PockeySignalTypes.MAIN_MENU_BUTTON_CLICKED);
                    console.log("mainMenuButton clicked");
                };
                this.rematchButton = document.getElementById("ScreenRematchButton");
                this.rematchButton.onclick = () => {
                    this.rematchButton.style.display = "none";
                    SignalsManager.DispatchSignal(PockeySignalTypes.RESTART_GAME_BUTTON_CLICKED);
                    console.log("rematchButton clicked");
                };
                this.newOpponentButton = document.getElementById("ScreenNewOpponentButton");
                this.newOpponentButton.onclick = () => {
                    SignalsManager.DispatchSignal(PockeySignalTypes.START_GAME);
                };
                this.confirmRematchButton = document.getElementById("RematchYes");
                this.confirmRematchButton.onclick = () => {
                    SignalsManager.DispatchSignal(PockeySignalTypes.REMATCH_CONFIRM_BUTTON_CLICKED, ['accept']);
                };
                this.rejectRematchButton = document.getElementById("RematchNo");
                this.rejectRematchButton.onclick = () => {
                    SignalsManager.DispatchSignal(PockeySignalTypes.REMATCH_CONFIRM_BUTTON_CLICKED, ['reject']);
                    this.rematchDiv.style.display = "none";
                };
            }
            onSetSides(params) {
                if (this.player.side == 'left') {
                }
                else {
                }
            }
            onDefinePlayerInterface(params) {
                if (params[0].type == BallType.Player) {
                    this.player = params[0];
                }
                else {
                    this.opponent = params[0];
                }
            }
            updateText(text) {
                this.textDiv.innerText = "get ready for round two in " + text;
            }
            show(params) {
                if (params && params.roundNumber) {
                    this.currentRound = params.roundNumber;
                }
                if (params && params.type == RoundCompleteType.roundComplete) {
                    this.handleRoundComplete();
                }
                else if (params && params.type == RoundCompleteType.matchComplete) {
                    this.handleMatchComplete();
                }
                else if (params && params.type == RoundCompleteType.playerDisconnected) {
                    this.handlePlayerDisconnected();
                }
                else if (params && params.type == RoundCompleteType.rematch) {
                    this.handleRematch();
                }
                super.show();
            }
            handleRoundComplete() {
                this.textDiv.innerText = "";
                this.titleDiv.innerText = "ROUND COMPLETE";
                this.roundNumberDiv.style.background = "url(../Assets/Desktop/Images/hud_matchbanner-round" + this.currentRound.toString() + ".svg) bottom center / 100% no-repeat";
                this.rematchButton.style.display = "none";
                this.mainMenuButton.style.display = "none";
                this.newOpponentButton.style.display = "none";
                this.rematchDiv.style.display = "none";
            }
            handleMatchComplete() {
                if (this.player.roundsWon >= 2) {
                    this.textDiv.innerText = "MATCH complete! you WiN!";
                }
                else if (this.opponent.roundsWon >= 2) {
                    this.textDiv.innerText = "MATCH complete! you lost!";
                }
                this.roundNumberDiv.style.background = "url(../Assets/Desktop/Images/hud_matchbanner-round" + this.currentRound.toString() + ".svg) bottom center / 100% no-repeat";
                this.titleDiv.innerText = "MATCH COMPLETE";
                this.mainMenuButton.style.display = "block";
                this.newOpponentButton.style.display = "block";
                this.rematchButton.style.display = "block";
            }
            handleRematch() {
            }
            handlePlayerDisconnected() {
                this.titleDiv.innerText = "MATCH COMPLETE";
                this.textDiv.innerText = "opponent DISCONNECTED";
                this.roundNumberDiv.style.background = "url(../Assets/Desktop/Images/hud_matchbanner-round" + this.currentRound.toString() + ".svg) bottom center / 100% no-repeat";
                this.mainMenuButton.style.display = "block";
                this.newOpponentButton.style.display = "block";
                this.rematchButton.style.display = "none";
                this.rematchDiv.style.display = "none";
            }
            updateLeftPlayerData() {
            }
            updateRighttPlayerData() {
            }
        }
        UserInterface.RoundCompleteScreen = RoundCompleteScreen;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let GameModule;
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
        var PockeySoundURLS = Pockey.Sound.PockeySoundURLS;
        var CountdownTimer = Framework.Utils.CountdownTimer;
        var AbstractEntryPoint = Framework.AbstractEntryPoint;
        var RoundCompleteType = Pockey.UserInterface.RoundCompleteType;
        var DatabaseConnector = Framework.Connection.DatabaseConnector;
        let WinStatus;
        (function (WinStatus) {
            WinStatus[WinStatus["WIN"] = 0] = "WIN";
            WinStatus[WinStatus["LOST"] = 1] = "LOST";
        })(WinStatus = GameModule.WinStatus || (GameModule.WinStatus = {}));
        class GameManager {
            constructor() {
                this.initialized = false;
                this.player = new GameModule.Player("player", GameModule.BallType.Player);
                this.opponent = new GameModule.Player("opponent", GameModule.BallType.Opponent);
                this.rematchAsked = true;
                this.playerStartedFirst = false;
                this.whiteBallPenalty = false;
                this.ballsHit = 0;
                this.ownBallInPocketFault = false;
                this.roundFinished = false;
                this.matchFinished = false;
                this.availableForRestart = false;
                this.timerText = "";
                this.animateOpponentTimer = false;
                this.countdownEnded = false;
                this.gameTimeStatesIdentifier = 0;
                this.readyForNextTurn = false;
                this.timeStatesTimerActive = false;
                this.currentTableFeltID = '';
                this.screenPopupTime = 0;
                this.popupRemoved = false;
                this.popupRemovedSent = false;
                this.roundNumber = 0;
                this.isRematch = false;
            }
            static Instance() {
                if (!GameManager.instance) {
                    GameManager.instance = new GameManager();
                    if (!GameManager.Instance().initialized) {
                        GameManager.Instance().registerSignalsHandlers();
                        GameManager.Instance().initialized = true;
                    }
                }
                return GameManager.instance;
            }
            gotoNextRound() {
                Pockey.PockeySettings.CURRENT_ROUND++;
                this.availableForRestart = false;
                switch (Pockey.PockeySettings.CURRENT_ROUND) {
                    case (1): {
                        this.prepareFirstRound();
                        break;
                    }
                    case (2): {
                        this.prepareSecondRound();
                        break;
                    }
                    case (3): {
                        this.prepareThirdRound();
                        break;
                    }
                }
            }
            prepareFirstRound() {
                Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER = 2;
                PockeyStateMachine.Instance().changeState(PockeyStates.onPrepareRoundOne);
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_SEARCHING_SCREEN);
                let matchType = RoundCompleteType.matchComplete;
                if (this.isRematch) {
                    matchType = RoundCompleteType.rematch;
                }
                SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_OPPONENT_FOUND_SCREEN, [matchType]);
                this.resetPlayersData(true);
                TweenMax.delayedCall(1, this.resetPooltable.bind(this));
                if (this.playerStartedFirst) {
                    this.setCurrentPlayer(this.player);
                    this.player.side = "left";
                    this.opponent.side = "right";
                    this.currentTableFeltID = this.player.feltID;
                    PIXI.ticker.shared.add(this.createState, this);
                    this.roundTimer.restart();
                    this.onRoundScreenTimerUpdate();
                }
                else {
                    this.setCurrentPlayer(this.opponent);
                    this.player.side = "right";
                    this.opponent.side = "left";
                    this.currentTableFeltID = this.opponent.feltID;
                    TweenMax.delayedCall(1, this.resetPooltable.bind(this));
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_STICK_SKIN, [Pockey.PockeySettings.OPPONENT_CUE_ID]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_DECAL, [Pockey.PockeySettings.OPPONENT_DECAL_ID]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.opponentsTurn]);
                    PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                    if (!this.isRematch) {
                        SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.OPPONENT_SETTINGS, this.getMySettings()]);
                        console.log("NU e rematch");
                    }
                    else
                        console.log("e rematch");
                }
                this.updateRoundGraphics();
                SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{ soundName: PockeySoundURLS.OPPONENT_FOUND }]);
            }
            getMySettings() {
                let sameColorsUsed = false;
                if (Pockey.PockeySettings.OPPONENT_COLOR == +Pockey.PockeySettings.PLAYER_COLOR_ID) {
                    sameColorsUsed = true;
                    let itemId = 0;
                    _.forEach(Pockey.PockeySettings.LARGE_COLORS_ARRAY, (item, counter) => {
                        if (item.id == Pockey.PockeySettings.PLAYER_COLOR_ID) {
                            itemId = counter;
                            return true;
                        }
                    });
                    Pockey.PockeySettings.OPPONENT_COLOR = Pockey.PockeySettings.LARGE_COLORS_ARRAY[itemId].complementaryColor;
                    this.opponent.color = Pockey.PockeySettings.OPPONENT_COLOR;
                }
                let playerSettings;
                playerSettings = {
                    opponentAvatarId: Pockey.PockeySettings.PLAYER_AVATAR_ID,
                    opponentNickname: Pockey.PockeySettings.PLAYER_NICKNAME,
                    opponentSocketId: Pockey.PockeySettings.PLAYER_SOCKET_ID,
                    opponentColor: (sameColorsUsed) ? Pockey.PockeySettings.OPPONENT_COLOR : +Pockey.PockeySettings.PLAYER_COLOR_ID,
                    opponentCueId: Pockey.PockeySettings.PLAYER_CUE_ID,
                    opponentDecalId: Pockey.PockeySettings.PLAYER_DECAL_ID,
                    opponentTableFeltId: Pockey.PockeySettings.POOLTABLE_FELT_ID,
                    firstToStart: this.opponent.id
                };
                return playerSettings;
            }
            resetPooltable() {
                SignalsManager.DispatchSignal(PockeySignalTypes.RESET_POOLTABLE, []);
            }
            prepareSecondRound() {
                Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER = 2;
                PockeyStateMachine.Instance().changeState(PockeyStates.onPrepareRoundTwo);
                let roundVO = {
                    roundNumber: Pockey.PockeySettings.CURRENT_ROUND - 1,
                    type: RoundCompleteType.roundComplete
                };
                SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_ROUND_COMPLETE_SCREEN, [roundVO]);
                this.resetPlayersData();
                TweenMax.delayedCall(1, this.resetPooltable.bind(this));
                if (this.playerStartedFirst) {
                    if (!Settings.singlePlayer) {
                        PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.opponentsTurn]);
                    }
                    this.opponent.side = "left";
                    this.player.side = "right";
                    this.setCurrentPlayer(this.opponent);
                    this.currentTableFeltID = this.opponent.feltID;
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_STICK_SKIN, [Pockey.PockeySettings.OPPONENT_CUE_ID]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_DECAL, [Pockey.PockeySettings.OPPONENT_DECAL_ID]);
                }
                else {
                    this.opponent.side = "right";
                    this.player.side = "left";
                    this.setCurrentPlayer(this.player);
                    this.currentTableFeltID = this.player.feltID;
                    if (!Settings.singlePlayer) {
                        PIXI.ticker.shared.add(this.createState, this);
                        this.roundTimer = new CountdownTimer("roundTimer", 5, this.onRoundScreenTimerUpdate.bind(this));
                        this.roundTimer.restart();
                        this.onRoundScreenTimerUpdate();
                    }
                }
                if (Settings.singlePlayer) {
                    this.beginPlay();
                }
            }
            prepareThirdRound() {
                Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER = 3;
                PockeyStateMachine.Instance().changeState(PockeyStates.onPrepareRoundThree);
                let roundVO = {
                    roundNumber: Pockey.PockeySettings.CURRENT_ROUND - 1,
                    type: RoundCompleteType.roundComplete
                };
                SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_ROUND_COMPLETE_SCREEN, [roundVO]);
                this.resetPlayersData();
                this.resetPooltable();
                TweenMax.delayedCall(1, this.resetPooltable.bind(this));
                if (this.playerStartedFirst) {
                    this.setCurrentPlayer(this.player);
                    this.currentTableFeltID = this.opponent.feltID;
                    if (!Settings.singlePlayer) {
                        this.roundTimer = new CountdownTimer("roundTimer", 5, this.onRoundScreenTimerUpdate.bind(this));
                        this.roundTimer.restart();
                        this.onRoundScreenTimerUpdate();
                        PIXI.ticker.shared.add(this.createState, this);
                    }
                }
                else {
                    if (!Settings.singlePlayer) {
                        PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.opponentsTurn]);
                    }
                    this.setCurrentPlayer(this.opponent);
                    this.currentTableFeltID = this.player.feltID;
                }
                if (Settings.singlePlayer) {
                    this.beginPlay();
                }
            }
            updateRoundGraphics() {
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_ROUND_COMPLETE_SCREEN);
                SignalsManager.DispatchSignal(PockeySignalTypes.SET_SIDES_TYPE);
                console.log("table felt ce plm: " + this.currentTableFeltID);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_FELT, [this.currentTableFeltID]);
                SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_GAME_UI);
            }
            InitializeOthers() {
                this.player = new GameModule.Player("player", GameModule.BallType.Player);
                let playerColor = 0;
                _.forEach(Pockey.PockeySettings.LARGE_COLORS_ARRAY, (vo) => {
                    if (vo.id == Pockey.PockeySettings.PLAYER_COLOR_ID) {
                        playerColor = vo.color;
                        return true;
                    }
                });
                this.player.color = playerColor;
                this.player.nickname = Pockey.PockeySettings.PLAYER_NICKNAME;
                this.player.avatarID = Pockey.PockeySettings.PLAYER_AVATAR_ID;
                this.player.feltID = Pockey.PockeySettings.POOLTABLE_FELT_ID;
                this.currentTableFeltID = Pockey.PockeySettings.POOLTABLE_FELT_ID;
                this.opponent = new GameModule.Player("opponent", GameModule.BallType.Opponent);
                this.timer = new CountdownTimer("gameTime", Pockey.PockeySettings.ROUND_DURATION_IN_SECONDS, this.onCounterUpdate.bind(this));
                this.roundTimer = new CountdownTimer("roundTimer", 3, this.onRoundScreenTimerUpdate.bind(this));
                this.myTimeStates = [];
                this.opponentGameStates = [];
            }
            onRoundScreenTimerUpdate() {
                if (this.roundTimer.currentTime > 0) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_ROUND_SCREEN_TEXT, [this.roundTimer.currentTime.toString()]);
                }
                if (this.roundTimer.complete) {
                    this.timer.restart();
                    this.onCounterUpdate();
                    SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_OPPONENT_FOUND_SCREEN);
                    this.updateRoundGraphics();
                    this.beginPlay();
                }
                this.popupRemovedSent = false;
            }
            registerSignalsHandlers() {
                SignalsManager.AddSignalCallback(SignalsType.ALL_MODULES_ELEMENTS_CREATED, GameManager.Instance().onAllModuleElementsCreated.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.WHITE_BALL_REPOSITIONED, GameManager.Instance().onWhiteBallRepositioned.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.FIRST_BALL_FAULT, this.onFirstBallFault.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.PREPARE_NEXT_TURN, this.prepareForNextTurn.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOOT_BALL, this.onShoot.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.BALL_IN_POCKET, this.onBallInPocket.bind(this));
                SignalsManager.AddSignalCallback(ConnectionSignalsType.SOCKET_IO_CONNECTION_CREATED, this.onSocketIOConnectionCreated.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.START_GAME, this.onStartGame.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.RESTART_GAME_BUTTON_CLICKED, this.onRestartGame.bind(this));
                SignalsManager.AddSignalCallback(PockeyConnectionSignals.WATCH, this.onWatch.bind(this));
                SignalsManager.AddSignalCallback(PockeyConnectionSignals.YOUR_TURN, this.onMyTurn.bind(this));
                SignalsManager.AddSignalCallback(PockeyConnectionSignals.OPPONENT_SETTINGS, this.onOpponentSettings.bind(this));
                SignalsManager.AddSignalCallback(ConnectionSignalsType.OPPONENT_DISCONNECTED, this.onOpponentDisconnected.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.MAIN_MENU_BUTTON_CLICKED, this.onMainMenuButtonClicked.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.REMATCH_CONFIRM_BUTTON_CLICKED, this.onRematchConfirmButtonClicked.bind(this));
                SignalsManager.AddSignalCallback(PockeyConnectionSignals.OPPONENT_NEXT_ROUND, this.onRematchAsked.bind(this));
            }
            onRematchAsked(params) {
                console.log("onRematchAsked params: " + params[0]);
                if (!this.availableForRestart) {
                    return;
                }
                if (params[0] == 'accept') {
                    SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_ROUND_COMPLETE_SCREEN);
                    console.log("la rematch goes to next round");
                    this.isRematch = true;
                    this.gotoNextRound();
                }
            }
            onRematchConfirmButtonClicked(params) {
                console.log("rematchAsked confirm button clicked");
                if (!this.availableForRestart) {
                    return;
                }
                if (params[0] == 'accept') {
                    this.isRematch = true;
                    this.gotoNextRound();
                    console.log("la rematch goes to next round");
                    SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.OPPONENT_REMATCH, 'accept']);
                }
                else {
                    SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.OPPONENT_REMATCH, 'reject']);
                    SignalsManager.DispatchSignal(ConnectionSignalsType.DISCONNECT_MY_SOCKET);
                }
            }
            onMainMenuButtonClicked() {
                SignalsManager.DispatchSignal(ConnectionSignalsType.DISCONNECT_MY_SOCKET);
                PockeyStateMachine.Instance().changeState(PockeyStates.onMainMenu);
                SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_MAIN_MENU);
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_ROUND_COMPLETE_SCREEN);
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_GAME_UI);
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_POOLTABLE);
                SignalsManager.DispatchSignal(SignalsType.CHANGE_BACKGROUND, [Settings.mainBackgroundName, 0]);
                _.forEach(AbstractEntryPoint.scene.meshes, (mesh) => {
                    mesh.setEnabled(false);
                });
                this.reset();
            }
            onCounterUpdate() {
                let counterText = "0:";
                let counter = this.timer.currentTime;
                counterText += (counter >= 10) ? counter.toString() : "0" + counter.toString();
                this.timerText = counterText;
                this.animateOpponentTimer = false;
                if (counter <= 5) {
                    if (counter == 5) {
                        SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{ soundName: PockeySoundURLS.LAST_FIVE_SECONDS }]);
                    }
                    this.animateOpponentTimer = true;
                }
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, [counterText, this.currentPlayer.type, this.animateOpponentTimer]);
                if (this.timer.complete) {
                    this.stopCountdown();
                    this.countdownEnded = true;
                    this.prepareForNextTurn();
                    SignalsManager.DispatchSignal(PockeySignalTypes.RESET_STICK_POWER);
                }
            }
            stopCountdown() {
                this.timerText = "";
                this.animateOpponentTimer = false;
                this.timer.stop();
                this.timer.reset();
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, ["", this.currentPlayer.type, false]);
            }
            onMyTurn(params) {
                if (this.matchFinished) {
                    console.log("intra la apply game state");
                    this.handleMatchFinished();
                    return;
                }
                this.changePlayer();
                let state = params[0];
                if (state == PockeyStates.onRearrangeStick) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
                    PIXI.ticker.shared.add(this.createState, this);
                    this.timer.restart();
                    this.onCounterUpdate();
                }
                else if (state == PockeyStates.onRepositionWhiteBall) {
                    if (Pockey.PockeySettings.CURRENT_ROUND == 3) {
                        this.player.shootouts--;
                        if (this.player.shootouts == this.opponent.shootouts && this.player.shootouts >= 0) {
                            Pockey.PockeySettings.CURRENT_SHOOTOUT_ROUND++;
                            console.log("CURRENT SHOOT OUT ROUND: " + Pockey.PockeySettings.CURRENT_SHOOTOUT_ROUND);
                        }
                        else {
                            if (this.player.shootouts < 0) {
                                Pockey.PockeySettings.CURRENT_SHOOTOUT_ROUND++;
                                if (Pockey.PockeySettings.CURRENT_SHOOTOUT_ROUND > 3) {
                                    Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER = 1;
                                    this.player.score = 1;
                                    this.opponent.score = 1;
                                    SignalsManager.DispatchSignal(PockeySignalTypes.SET_SIDES_TYPE);
                                }
                            }
                        }
                        this.resetPooltable();
                    }
                    PIXI.ticker.shared.add(this.createState, this);
                    this.timer.restart();
                    this.onCounterUpdate();
                    if (Settings.isMobile) {
                        SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_WHITE_BALL_POSITION_CONFIRMER);
                    }
                }
                else if (state == PockeyStates.onRoundEnd) {
                    PockeyStateMachine.Instance().changeState(state);
                    this.gotoNextRound();
                    return;
                }
                PockeyStateMachine.Instance().changeState(state);
            }
            memorySizeOf(obj) {
                let bytes = 0;
                function sizeOf(obj) {
                    if (obj !== null && obj !== undefined) {
                        switch (typeof obj) {
                            case 'number':
                                bytes += 8;
                                break;
                            case 'string':
                                bytes += obj.length * 2;
                                break;
                            case 'boolean':
                                bytes += 4;
                                break;
                            case 'object':
                                let objClass = Object.prototype.toString.call(obj).slice(8, -1);
                                if (objClass === 'Object' || objClass === 'Array') {
                                    for (let key in obj) {
                                        if (!obj.hasOwnProperty(key))
                                            continue;
                                        sizeOf(obj[key]);
                                    }
                                }
                                else
                                    bytes += obj.toString().length * 2;
                                break;
                        }
                    }
                    return bytes;
                }
                function formatByteSize(bytes) {
                    if (bytes < 1024)
                        return bytes + " bytes";
                    else if (bytes < 1048576)
                        return (bytes / 1024).toFixed(3) + " KiB";
                    else if (bytes < 1073741824)
                        return (bytes / 1048576).toFixed(3) + " MiB";
                    else
                        return (bytes / 1073741824).toFixed(3) + " GiB";
                }
                return formatByteSize(sizeOf(obj));
            }
            ;
            switchSides() {
            }
            onRestartGame() {
                SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.OPPONENT_REMATCH, "invite"]);
            }
            onStartGame() {
                SignalsManager.DispatchSignal(SignalsType.CHANGE_BACKGROUND, [Pockey.PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME, 1]);
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_ROUND_COMPLETE_SCREEN);
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_MAIN_MENU);
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_BALL_RAY_GRAPHICS);
                SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_POOLTABLE);
                if (!Settings.singlePlayer) {
                    PockeyStateMachine.Instance().changeState(PockeyStates.onSearchForPartner);
                    SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_SEARCHING_SCREEN);
                    SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_GAME_UI);
                    SignalsManager.DispatchSignal(ConnectionSignalsType.CREATE_SEARCH_FOR_PARTNER_CONNECTION);
                }
                else {
                    this.setCurrentPlayer(this.player);
                    this.beginPlay();
                    this.player.side = "left";
                    this.opponent.side = "right";
                    this.updateRoundGraphics();
                }
            }
            createState() {
                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onPrepareRoundOne) {
                    this.onPooltableStateCreated(null);
                }
                else if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onPrepareRoundTwo) {
                    this.onPooltableStateCreated(null);
                }
                else if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onPrepareRoundThree) {
                    this.onPooltableStateCreated(null);
                }
                else {
                    SignalsManager.DispatchSignal(PockeySignalTypes.CREATE_POOLTABLE_STATE, [this.onPooltableStateCreated.bind(this)]);
                }
            }
            onPooltableStateCreated(timeState) {
                this.gameTimeStatesIdentifier++;
                let gameState = {};
                gameState.stateID = this.gameTimeStatesIdentifier;
                gameState.stateTime = Math.round(PIXI.ticker.shared.elapsedMS / 1000);
                if (!_.isNull(timeState)) {
                    gameState.pooltableState = timeState;
                }
                gameState.timerText = this.timerText;
                gameState.timerTextAnimate = this.animateOpponentTimer;
                gameState.playerScore = this.player.score;
                gameState.opponentScore = this.opponent.score;
                gameState.whiteBallPenalty = this.whiteBallPenalty;
                gameState.ballsHit = this.ballsHit;
                if (!this.roundTimer.complete && this.screenPopupTime != this.roundTimer.currentTime) {
                    this.screenPopupTime = this.roundTimer.currentTime;
                    gameState.opponentScreenTimer = this.roundTimer.currentTime;
                }
                if (this.popupRemoved && !this.popupRemovedSent) {
                    gameState.popupRemoved = true;
                    this.popupRemovedSent = true;
                }
                gameState.playerShootouts = this.player.shootouts;
                gameState.opponentShootouts = this.opponent.shootouts;
                gameState.currentShootoutRound = Pockey.PockeySettings.CURRENT_SHOOTOUT_ROUND;
                this.myTimeStates.push(gameState);
                if (this.myTimeStates.length == Pockey.PockeySettings.FRAMES_TO_SEND_ON_WATCH) {
                    let safeToRemove = false;
                    if (this.readyForNextTurn) {
                        console.log("se cere on next turn on pooltable state created");
                        this.onNextTurn(gameState);
                        this.readyForNextTurn = false;
                        if (this.matchFinished) {
                            safeToRemove = true;
                        }
                    }
                    let msg = JSON.stringify({ gameStates: this.myTimeStates });
                    SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.WATCH, msg]);
                    this.myTimeStates = [];
                    if (safeToRemove) {
                        this.handleMatchFinished();
                    }
                }
            }
            prepareForNextTurn() {
                this.readyForNextTurn = true;
                this.stopCountdown();
                if (Settings.singlePlayer) {
                    this.onNextTurn(null);
                }
            }
            checkRoundStatus() {
                console.log("score -> player: " + this.player.score, " - Opponent: " + this.opponent.score);
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_SCORE);
                if (Pockey.PockeySettings.CURRENT_SHOOTOUT_ROUND >= 3) {
                    if (this.player.shootouts == this.opponent.shootouts) {
                        if (this.player.score < this.opponent.score) {
                            this.player.score = 0;
                        }
                        if (this.opponent.score < this.player.score) {
                            this.opponent.score = 0;
                        }
                    }
                }
                if (this.player.score <= 0) {
                    this.winStatus = WinStatus.LOST;
                    this.roundFinished = true;
                    this.opponent.roundsWon++;
                    if (this.opponent.roundsWon >= 2) {
                        this.matchFinished = true;
                    }
                    console.log("opponent won");
                }
                else if (this.opponent.score <= 0) {
                    this.winStatus = WinStatus.WIN;
                    this.roundFinished = true;
                    this.player.roundsWon++;
                    if (this.player.roundsWon >= 2) {
                        this.matchFinished = true;
                    }
                    console.log("player won");
                }
                console.log("rounds -> player: " + this.player.roundsWon, " - Opponent: " + this.opponent.roundsWon);
                if (this.player.side == "left") {
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_MATCH_CIRCLES, [this.player.roundsWon, this.opponent.roundsWon]);
                }
                else {
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_MATCH_CIRCLES, [this.opponent.roundsWon, this.player.roundsWon]);
                }
            }
            applyGameState() {
                if (this.opponentGameStates.length == 0) {
                    return;
                }
                let gameState = this.opponentGameStates[0];
                if (this.timerText != gameState.timerText || this.animateOpponentTimer != gameState.timerTextAnimate) {
                    this.timerText = gameState.timerText;
                    this.animateOpponentTimer = gameState.timerTextAnimate;
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, [gameState.timerText, this.currentPlayer.type, gameState.timerTextAnimate]);
                }
                this.whiteBallPenalty = gameState.whiteBallPenalty;
                this.ballsHit = gameState.ballsHit;
                if (this.opponent.shootouts != gameState.playerShootouts) {
                    this.opponent.shootouts = gameState.playerShootouts;
                }
                if (this.player.shootouts != gameState.opponentShootouts) {
                    this.player.shootouts = gameState.opponentShootouts;
                }
                if (Pockey.PockeySettings.CURRENT_SHOOTOUT_ROUND != gameState.currentShootoutRound) {
                    Pockey.PockeySettings.CURRENT_SHOOTOUT_ROUND = gameState.currentShootoutRound;
                    console.log("CURRENT SHOOT OUT ROUND: " + Pockey.PockeySettings.CURRENT_SHOOTOUT_ROUND);
                }
                if (this.player.score != gameState.opponentScore) {
                    this.player.score = gameState.opponentScore;
                    this.checkRoundStatus();
                }
                if (this.opponent.score != gameState.playerScore) {
                    this.opponent.score = gameState.playerScore;
                    this.checkRoundStatus();
                }
                if (gameState.opponentScreenTimer) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_ROUND_SCREEN_TEXT, [gameState.opponentScreenTimer]);
                }
                if (gameState.popupRemoved) {
                    this.updateRoundGraphics();
                    SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_OPPONENT_FOUND_SCREEN);
                    SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_ROUND_COMPLETE_SCREEN);
                    this.popupRemoved = true;
                }
                if (gameState.pooltableState) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.APPLY_POOLTABLE_STATE, [gameState.pooltableState, (gameState.stateTime)]);
                }
                if (gameState.changeMyState) {
                    PIXI.ticker.shared.remove(this.applyGameState, this);
                    this.timeStatesTimerActive = false;
                    SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_WHITE_BALL_STATUS);
                    this.onMyTurn(gameState.changeMyState);
                }
                this.opponentGameStates.shift();
            }
            onWatch(params) {
                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onWatch) {
                    let msg = params[0];
                    let gameStates = JSON.parse(msg).gameStates;
                    _.forEach(gameStates, (gameState) => {
                        this.opponentGameStates.push(gameState);
                    });
                    if (!this.timeStatesTimerActive && this.opponentGameStates.length >= Pockey.PockeySettings.FRAMES_TO_SEND_ON_WATCH * 2) {
                        this.timeStatesTimerActive = true;
                        PIXI.ticker.shared.add(this.applyGameState, this);
                    }
                }
            }
            onBallInPocket(params) {
                if (!this.roundFinished) {
                    let ballType = params[0];
                    console.log("ballType in pocket: " + ballType);
                    if (ballType == GameModule.BallType.White) {
                        this.whiteBallPenalty = true;
                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.whiteBallFault]);
                        console.log("%c GameManager -> White ball PENALTY for " + this.currentPlayer.id.toUpperCase(), "color: #00bcd4");
                    }
                    else if (ballType == GameModule.BallType.Puck) {
                        this.ballsHit++;
                        let goalType = params[1];
                        if (goalType == this.player.type) {
                            if (Pockey.PockeySettings.CURRENT_ROUND < 3)
                                this.player.score -= 2;
                            else
                                this.player.score -= 1;
                        }
                        else if (goalType == this.opponent.type) {
                            if (Pockey.PockeySettings.CURRENT_ROUND < 3)
                                this.opponent.score -= 2;
                            else
                                this.opponent.score -= 1;
                        }
                        console.log("intra la puck gol: " + goalType);
                        if (goalType != this.currentPlayer.type) {
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
                    this.checkRoundStatus();
                }
            }
            onAllModuleElementsCreated() {
                GameManager.Instance().InitializeOthers();
                let dbObject = {
                    userID: Pockey.PockeySettings.PLAYER_ID,
                    column: "points",
                    value: WinStatus.WIN,
                    type: "winStatus"
                };
                DatabaseConnector.updateUserData(dbObject, null);
                PockeyStateMachine.Instance().changeState(PockeyStates.onMainMenu);
                SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_MAIN_MENU);
                SignalsManager.DispatchSignal(SignalsType.CHANGE_BACKGROUND, [Settings.mainBackgroundName, 4]);
                _.forEach(AbstractEntryPoint.scene.meshes, (mesh) => {
                    mesh.setEnabled(false);
                });
                SignalsManager.DispatchSignal(PockeySignalTypes.ASSIGN_PLAYER, [this.opponent]);
                SignalsManager.DispatchSignal(PockeySignalTypes.ASSIGN_PLAYER, [this.player]);
            }
            onOpponentDisconnected(params) {
                this.handleMatchFinished(true);
            }
            onSocketIOConnectionCreated(params) {
                console.log("%c GameManager -> socket io connection created", "color: #00bcd4");
                this.player.id = params[0];
                Pockey.PockeySettings.PLAYER_SOCKET_ID = this.player.id;
                this.opponent.id = params[1];
                Pockey.PockeySettings.OPPONENT_SOCKET_ID = this.opponent.id;
                let connectionID = params[2];
                if (_.startsWith(connectionID, this.player.id)) {
                    this.currentPlayer = this.player;
                    let playerSettings = {
                        opponentAvatarId: Pockey.PockeySettings.PLAYER_AVATAR_ID,
                        opponentNickname: Pockey.PockeySettings.PLAYER_NICKNAME,
                        opponentSocketId: Pockey.PockeySettings.PLAYER_SOCKET_ID,
                        opponentColor: +Pockey.PockeySettings.PLAYER_COLOR_ID,
                        opponentCueId: Pockey.PockeySettings.PLAYER_CUE_ID,
                        opponentDecalId: Pockey.PockeySettings.PLAYER_DECAL_ID,
                        opponentTableFeltId: Pockey.PockeySettings.POOLTABLE_FELT_ID
                    };
                    playerSettings.firstToStart = this.player.id;
                    SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.OPPONENT_SETTINGS, playerSettings]);
                }
            }
            onOpponentSettings(params) {
                let opponentSettings = params[0];
                Pockey.PockeySettings.OPPONENT_COLOR = opponentSettings.opponentColor;
                Pockey.PockeySettings.OPPONENT_SOCKET_ID = opponentSettings.opponentSocketId;
                Pockey.PockeySettings.OPPONENT_NICKNAME = opponentSettings.opponentNickname;
                Pockey.PockeySettings.OPPONENT_AVATAR_ID = opponentSettings.opponentAvatarId;
                Pockey.PockeySettings.OPPONENT_CUE_ID = opponentSettings.opponentCueId;
                Pockey.PockeySettings.OPPONENT_POOLTABLE_FELT_ID = opponentSettings.opponentTableFeltId;
                Pockey.PockeySettings.OPPONENT_DECAL_ID = opponentSettings.opponentDecalId;
                this.opponent.color = Pockey.PockeySettings.OPPONENT_COLOR;
                this.opponent.id = Pockey.PockeySettings.OPPONENT_SOCKET_ID;
                this.opponent.nickname = Pockey.PockeySettings.OPPONENT_NICKNAME;
                this.opponent.avatarID = Pockey.PockeySettings.OPPONENT_AVATAR_ID;
                this.opponent.feltID = Pockey.PockeySettings.OPPONENT_POOLTABLE_FELT_ID;
                if (opponentSettings.firstToStart == this.player.id) {
                    this.player.startedFirst = true;
                    this.playerStartedFirst = true;
                }
                console.log("opponent avatar la opponent settings: " + Pockey.PockeySettings.OPPONENT_AVATAR_ID);
                this.gotoNextRound();
            }
            onShoot() {
                this.whiteBallPenalty = false;
                this.stopCountdown();
                PockeyStateMachine.Instance().changeState(PockeyStates.onShoot);
            }
            onWhiteBallRepositioned() {
                console.log("%c GameManager -> White Ball Repositioned", "color: #00bcd4");
                PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
                SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
            }
            onNextTurn(gameState) {
                console.log("onNextTurn: intra");
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_WHITE_BALL_STATUS);
                if (this.countdownEnded) {
                    this.countdownEnded = false;
                    this.changePlayer();
                    console.log("onNextTurn: intra la countdown");
                    if (gameState) {
                        PIXI.ticker.shared.remove(this.createState, this);
                        gameState.changeMyState = [PockeyStateMachine.Instance().fsm.currentState];
                        if (Pockey.PockeySettings.CURRENT_ROUND == 3) {
                            gameState.changeMyState = [PockeyStates.onRepositionWhiteBall];
                        }
                    }
                    PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.onTimeUp]);
                    return;
                }
                if (this.matchFinished) {
                    console.log("intra la match finished la on next turn");
                    gameState.changeMyState = [PockeyStates.onEndMatch];
                    return;
                }
                else if (this.roundFinished) {
                    console.log("onNextTurn: intra la gamefinished");
                    PockeyStateMachine.Instance().changeState(PockeyStates.onRoundEnd);
                    console.log("la next turn: " + this.winStatus);
                    if (gameState) {
                        PIXI.ticker.shared.remove(this.createState, this);
                        gameState.changeMyState = [PockeyStates.onRoundEnd, this.winStatus];
                    }
                    this.gotoNextRound();
                    return;
                }
                else {
                    console.log("onNextTurn: intra la onEndTurn");
                    PockeyStateMachine.Instance().changeState(PockeyStates.onEndTurn);
                }
                console.log("%c GameManager -> Checking for next turn...", "color: #00bcd4");
                if (this.whiteBallPenalty) {
                    console.log("onNextTurn: intra la whiteBallPenalty");
                    console.log("%c GameManager -> PENALTY! Round ended for " + this.currentPlayer.id.toUpperCase(), "color: #00bcd4");
                    this.changePlayer();
                    if (!Settings.singlePlayer) {
                        gameState.changeMyState = [PockeyStates.onRepositionWhiteBall];
                        PIXI.ticker.shared.remove(this.createState, this);
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
                    console.log("onNextTurn: ownBallInPocketFault");
                    console.log("%c GameManager -> Fault! Own ball in pocket! " + this.currentPlayer.id.toUpperCase(), "color: #00bcd4");
                    this.changePlayer();
                    this.ownBallInPocketFault = false;
                    if (!Settings.singlePlayer) {
                        PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                        gameState.changeMyState = [PockeyStates.onRearrangeStick];
                        if (Pockey.PockeySettings.CURRENT_ROUND == 3) {
                            gameState.changeMyState = [PockeyStates.onRepositionWhiteBall];
                        }
                        PIXI.ticker.shared.remove(this.createState, this);
                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.onOwnBallInPocket]);
                    }
                    else {
                        if (Pockey.PockeySettings.CURRENT_ROUND == 3) {
                            PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                            gameState.changeMyState = [PockeyStates.onRepositionWhiteBall];
                            PIXI.ticker.shared.remove(this.createState, this);
                        }
                        else {
                            this.timer.restart();
                            this.onCounterUpdate();
                            SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
                            PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
                        }
                    }
                }
                else {
                    if (this.ballsHit == 0) {
                        console.log("onNextTurn: balls hit 0");
                        console.log("%c GameManager -> No balls hit for " + this.currentPlayer.id.toUpperCase(), "color: #00bcd4");
                        this.changePlayer();
                        if (!Settings.singlePlayer) {
                            PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                            gameState.changeMyState = [PockeyStates.onRearrangeStick];
                            if (Pockey.PockeySettings.CURRENT_ROUND == 3) {
                                gameState.changeMyState = [PockeyStates.onRepositionWhiteBall];
                            }
                            PIXI.ticker.shared.remove(this.createState, this);
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.noBallScored]);
                        }
                        else {
                            if (Pockey.PockeySettings.CURRENT_ROUND == 3) {
                                PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                                gameState.changeMyState = [PockeyStates.onRepositionWhiteBall];
                                PIXI.ticker.shared.remove(this.createState, this);
                            }
                            else {
                                this.timer.restart();
                                this.onCounterUpdate();
                                SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
                                PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
                            }
                        }
                        return;
                    }
                    else {
                        this.ballsHit = 0;
                    }
                    if (Pockey.PockeySettings.CURRENT_ROUND == 3) {
                        PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                        gameState.changeMyState = [PockeyStates.onRepositionWhiteBall];
                        PIXI.ticker.shared.remove(this.createState, this);
                    }
                    else {
                        this.timer.restart();
                        this.onCounterUpdate();
                        SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
                        PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
                    }
                }
                console.log("score -> player: " + this.player.score, " - Opponent: " + this.opponent.score);
            }
            resetPlayersData(clearRounds) {
                console.log("se reseteaza players data");
                this.screenPopupTime = 0;
                this.popupRemoved = false;
                this.whiteBallPenalty = false;
                this.ownBallInPocketFault = false;
                this.ballsHit = 0;
                this.roundFinished = false;
                this.player.score = Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER;
                this.opponent.score = Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER;
                this.player.shootouts = 3;
                this.opponent.shootouts = 3;
                if (clearRounds) {
                    this.player.roundsWon = 0;
                    this.opponent.roundsWon = 0;
                }
            }
            dataReset() {
                console.log("%c salam la data reset gamemanager", "color: #ff3344");
                PIXI.ticker.shared.remove(this.createState, this);
                PIXI.ticker.shared.remove(this.applyGameState, this);
                this.timer.stop();
                this.roundTimer.stop();
                this.matchFinished = false;
                this.myTimeStates = [];
                this.opponentGameStates = [];
                this.isRematch = false;
                this.gameTimeStatesIdentifier = 0;
                this.currentTableFeltID = Pockey.PockeySettings.POOLTABLE_FELT_ID;
                Pockey.PockeySettings.CURRENT_ROUND = 0;
                Pockey.PockeySettings.CURRENT_SHOOTOUT_ROUND = 0;
                this.timeStatesTimerActive = false;
            }
            reset() {
                console.log("se reseteaza game manager");
                this.resetPlayersData(true);
                this.dataReset();
                this.player.startedFirst = false;
                this.playerStartedFirst = false;
                this.availableForRestart = false;
                this.resetPooltable();
            }
            handleMatchFinished(onDisconnect = false) {
                console.log("handleMatchFinished");
                this.availableForRestart = true;
                let roundVO = {
                    roundNumber: Pockey.PockeySettings.CURRENT_ROUND,
                    type: RoundCompleteType.matchComplete
                };
                if (onDisconnect) {
                    roundVO.type = RoundCompleteType.playerDisconnected;
                    this.reset();
                }
                if (PockeyStateMachine.Instance().fsm.currentState != PockeyStates.onEndMatch) {
                    PockeyStateMachine.Instance().changeState(PockeyStates.onEndMatch);
                }
                this.dataReset();
                SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_ROUND_COMPLETE_SCREEN, [roundVO]);
            }
            setCurrentPlayer(player) {
                this.currentPlayer = player;
                console.log("%c GameManager -> Current player is: " + this.currentPlayer.id.toUpperCase(), "background: red; color: white; font-weight:bold; ");
            }
            changePlayer() {
                if (this.currentPlayer == this.opponent) {
                    this.currentPlayer = this.player;
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_STICK_SKIN, [Pockey.PockeySettings.PLAYER_CUE_ID]);
                }
                else {
                    this.currentPlayer = this.opponent;
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_STICK_SKIN, [Pockey.PockeySettings.OPPONENT_CUE_ID]);
                }
                console.log("%c GameManager -> Player changed: " + this.currentPlayer.id.toUpperCase(), "background: red; color: white; font-weight:bold; ");
            }
            onFirstBallFault() {
                this.whiteBallPenalty = true;
                console.log("%c GameManager -> First ball fault!", "color: #00bcd4");
            }
            beginPlay() {
                this.popupRemoved = true;
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.beginGame]);
                if (Pockey.PockeySettings.CURRENT_ROUND == 3) {
                    this.player.shootouts--;
                    PockeyStateMachine.Instance().changeState(PockeyStates.onRepositionWhiteBall);
                }
                else {
                    SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
                    PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
                }
            }
        }
        GameModule.GameManager = GameManager;
    })(GameModule = Pockey.GameModule || (Pockey.GameModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let Background;
    (function (Background) {
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var AbstractBackgroundModule = Framework.Background.AbstractBackgroundModule;
        var Settings = Framework.Settings;
        class PockeyBackgroundModule extends AbstractBackgroundModule {
            constructor() {
                super();
            }
            registerSignalsHandlers() {
                super.registerSignalsHandlers();
                SignalsManager.AddSignalCallback(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, this.onResizeBackground.bind(this));
            }
            onResizeBackground(params) {
                let bg;
                if (this.backgrounds[Settings.mainBackgroundName]) {
                    bg = this.backgrounds[Settings.mainBackgroundName];
                    let newHeight = Settings.stageHeight;
                    let scale = newHeight / bg.initialHeight;
                    let newWidth = bg.initialWidth * scale;
                    if (newWidth < Settings.stageWidth) {
                        newWidth = Settings.stageWidth;
                        scale = newWidth / bg.initialWidth;
                    }
                    bg.div.style.width = (bg.initialWidth * scale).toString() + "px";
                    bg.div.style.height = (bg.initialHeight * scale).toString() + "px";
                }
                if (this.backgrounds[Pockey.PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME]) {
                    bg = this.backgrounds[Pockey.PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME];
                    let scale = params[0];
                    let position = params[1];
                    bg.div.style.width = (bg.initialWidth * scale).toString() + "px";
                    bg.div.style.width = (bg.initialWidth * scale).toString() + "px";
                    bg.div.style.left = position.x.toString() + "px";
                    bg.div.style.top = position.y.toString() + "px";
                }
            }
        }
        Background.PockeyBackgroundModule = PockeyBackgroundModule;
    })(Background = Pockey.Background || (Pockey.Background = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let Connection;
    (function (Connection) {
        var SocketClient = Framework.Connection.SocketClient;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeyConnectionSignals = Pockey.SignalsModule.PockeyConnectionSignals;
        class PockeySocketClient extends SocketClient {
            handlePrivateMessage(messageType, messageData) {
                super.handlePrivateMessage(messageType, messageData);
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
                    case Connection.PockeySocketMessages.OPPONENT_REMATCH: {
                        SignalsManager.DispatchSignal(PockeyConnectionSignals.OPPONENT_NEXT_ROUND, [messageData]);
                        break;
                    }
                }
            }
        }
        Connection.PockeySocketClient = PockeySocketClient;
    })(Connection = Pockey.Connection || (Pockey.Connection = {}));
})(Pockey || (Pockey = {}));
var Framework;
(function (Framework) {
    let Utils;
    (function (Utils) {
        function readCookie(c_name) {
            if (document.cookie.length > 0) {
                let c_start = document.cookie.indexOf(c_name + "=");
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1;
                    let c_end = document.cookie.indexOf(";", c_start);
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
            let expires;
            if (days) {
                let date = new Date();
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
    let Connection;
    (function (Connection) {
        var LoginHandler = Framework.Connection.LoginHandler;
        var readCookie = Framework.Utils.readCookie;
        var DatabaseConnector = Framework.Connection.DatabaseConnector;
        var writeCookie = Framework.Utils.writeCookie;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var Settings = Framework.Settings;
        class PockeyLoginHandler extends LoginHandler {
            constructor() {
                super();
                SignalsManager.AddSignalCallback(PockeySignalTypes.FACEBOOK_SIGN_IN, this.onFbLogin.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.GOOGLE_SIGN_IN, this.onGoogleLogin.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_OUT, this.onLogout.bind(this));
            }
            onLogout() {
                console.log("pockey login handler onFbLogin");
                Settings.playerSignedIn = false;
                this.resetUserData();
                this.onCheckUserData();
            }
            resetUserData() {
                let dataChanged = false;
                if (Pockey.PockeySettings.PLAYER_ID != "guest") {
                    Pockey.PockeySettings.PLAYER_ID = "guest";
                }
                if (Pockey.PockeySettings.PLAYER_COLOR_ID != Pockey.PockeySettings.SMALL_COLORS_ARRAY[0].id) {
                    Pockey.PockeySettings.PLAYER_COLOR_ID = Pockey.PockeySettings.SMALL_COLORS_ARRAY[0].id;
                    dataChanged = true;
                }
                if (Pockey.PockeySettings.PLAYER_DECAL_ID != Pockey.PockeySettings.SMALL_DECALS_ARRAY[0].id) {
                    Pockey.PockeySettings.PLAYER_DECAL_ID = Pockey.PockeySettings.SMALL_DECALS_ARRAY[0].id;
                    SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_DECAL, [Pockey.PockeySettings.PLAYER_DECAL_ID]);
                    console.log("de aici se trimite salam decal");
                    dataChanged = true;
                }
                if (Pockey.PockeySettings.PLAYER_CUE_ID != Pockey.PockeySettings.SMALL_CUES_ARRAY[0].id) {
                    Pockey.PockeySettings.PLAYER_CUE_ID = Pockey.PockeySettings.SMALL_CUES_ARRAY[0].id;
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_STICK_SKIN, [Pockey.PockeySettings.PLAYER_CUE_ID]);
                    dataChanged = true;
                }
                if (Pockey.PockeySettings.POOLTABLE_FELT_ID != Pockey.PockeySettings.SMALL_MISC_ARRAY[0].id) {
                    Pockey.PockeySettings.POOLTABLE_FELT_ID = Pockey.PockeySettings.SMALL_MISC_ARRAY[0].id;
                    SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_FELT, [Pockey.PockeySettings.POOLTABLE_FELT_ID]);
                    dataChanged = true;
                }
                if (Pockey.PockeySettings.PLAYER_LEVEL != 1) {
                    Pockey.PockeySettings.PLAYER_LEVEL = 1;
                }
                if (dataChanged) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
                }
            }
            onFbLogin() {
                console.log("pockey login handler onFbLogin");
                this.onCheckUserData();
            }
            onGoogleLogin() {
                console.log("pockey login handler onGoogleLogin");
                this.onCheckUserData();
            }
            onCheckUserData() {
                console.log("on POCKEY LOGIN HANDLER: onCheckUserData");
                let pockeyID = readCookie('PockeyID');
                console.log("intra la get cookie");
                if (pockeyID != "") {
                    if (_.includes(pockeyID, "@") && _.includes(pockeyID, ".")) {
                        DatabaseConnector.checkDatabaseUser(pockeyID, this.playerInfoReceived.bind(this));
                        console.log("database query for user");
                    }
                    else if (pockeyID == "guest") {
                        let playerData = {};
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
                    let playerData = {};
                    writeCookie("PockeyID", Pockey.PockeySettings.PLAYER_ID, 30);
                    writeCookie("PockeyUserColorId", Pockey.PockeySettings.PLAYER_COLOR_ID, 30);
                    writeCookie("PockeyNickname", Pockey.PockeySettings.PLAYER_NICKNAME, 30);
                    this.playerInfoReceived(playerData);
                }
            }
            playerInfoReceived(usernameData) {
                console.log("%c usernameData: ", "background: #ff9900; color: black; font-weight:bold; ");
                console.log(usernameData);
                let inventoryItemUpdated = false;
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
                    SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_DECAL, [Pockey.PockeySettings.PLAYER_DECAL_ID]);
                    console.log("de aici se trimite salam decal");
                    console.log("%c PLAYER_DECAL_ID updated from db", "background: #ff9900; color: black; font-weight:bold;");
                    inventoryItemUpdated = true;
                }
                if (!_.isUndefined(usernameData["felt"]) && !_.isNull(usernameData["felt"])) {
                    Pockey.PockeySettings.POOLTABLE_FELT_ID = usernameData["felt"];
                    SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_FELT, [Pockey.PockeySettings.POOLTABLE_FELT_ID]);
                    console.log("%c PLAYER_FELT_ID updated from db", "background: #ff9900; color: black; font-weight:bold;");
                    inventoryItemUpdated = true;
                }
                if (!_.isUndefined(usernameData["player_level"]) && !_.isNull(usernameData["player_level"])) {
                    Pockey.PockeySettings.PLAYER_LEVEL = usernameData["player_level"];
                    console.log("%c PLAYER_LEVEL updated from db", "background: #ff9900; color: black; font-weight:bold;");
                }
                if (!_.isUndefined(usernameData["stick"]) && !_.isNull(usernameData["stick"])) {
                    Pockey.PockeySettings.PLAYER_CUE_ID = usernameData["stick"];
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_STICK_SKIN, [Pockey.PockeySettings.PLAYER_CUE_ID]);
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
                super.onCheckUserData();
            }
        }
        Connection.PockeyLoginHandler = PockeyLoginHandler;
    })(Connection = Pockey.Connection || (Pockey.Connection = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let Connection;
    (function (Connection) {
        var AbstractConnectionModule = Framework.Connection.AbstractConnectionModule;
        class PockeyConnectionModule extends AbstractConnectionModule {
            registerSignalsHandlers() {
                super.registerSignalsHandlers();
            }
            getSocketIoClient() {
                return new Connection.PockeySocketClient();
            }
            createLoginHandler() {
                let loginHandler = new Connection.PockeyLoginHandler();
            }
        }
        Connection.PockeyConnectionModule = PockeyConnectionModule;
    })(Connection = Pockey.Connection || (Pockey.Connection = {}));
})(Pockey || (Pockey = {}));
var Framework;
(function (Framework) {
    let utils;
    (function (utils) {
        var Graphics = PIXI.Graphics;
        var TextStyle = PIXI.TextStyle;
        class TextField extends PIXI.Text {
            constructor(text, style, debug) {
                super(text, style);
                if (style)
                    this.setStyle(style);
                this.updateText();
                if (debug)
                    this.debug();
            }
            setText(text) {
                this.text = text;
            }
            setStyle(fontStyle) {
                this.scale.x = 1;
                this.scale.y = 1;
                let style = new TextStyle({});
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
                    let fontSize = +style.fontSize;
                    fontSize *= 2;
                    style.fontSize = fontSize;
                }
                if (style && !_.isUndefined(style.wordWrapWidth) && !_.isNull(style.wordWrapWidth)) {
                    let wordWrapWidth = +style.wordWrapWidth;
                    wordWrapWidth *= 2;
                    style.wordWrapWidth = wordWrapWidth;
                }
                this.style = style;
                this.scale.y /= 2;
                this.scale.x /= 2;
                this.initialScale = +this.style.fontSize;
            }
            rescale(scaleFactor) {
                let newFontSize = scaleFactor * this.initialScale;
                console.log("initial font size: " + this.initialScale);
                console.log("new font size: " + newFontSize);
                this.style.fontSize = newFontSize;
            }
            debug() {
                let gr = new Graphics();
                gr.beginFill(0xff9900, 0.5);
                gr.drawRect(0, 0, this.width * 2, this.height * 2);
                gr.endFill();
                gr.x = this.x;
                gr.y = this.y;
                this.addChild(gr);
            }
        }
        utils.TextField = TextField;
    })(utils = Framework.utils || (Framework.utils = {}));
})(Framework || (Framework = {}));
var Framework;
(function (Framework) {
    let UserInterface;
    (function (UserInterface) {
        var TextField = Framework.utils.TextField;
        var Vector2 = Framework.Utils.Vector2;
        class PixiButton extends PIXI.Sprite {
            constructor(texture) {
                super(texture);
                this.alignment = "center";
                this.texture = this.texture;
                this.textOffset = new Vector2();
                this._text = new TextField('Basic text in pixi');
                this.addChild(this._text);
                this.interactive = true;
                this.on("mousedown", () => {
                    this.onDown();
                }, this);
                this.on("mouseup", () => {
                    this.onUp();
                }, this);
                this.on("mouseover", () => {
                    this.onHover();
                }, this);
                this.on("mouseout", () => {
                    this.onOut();
                }, this);
                this.on("tap", () => {
                    this.onUp();
                }, this);
            }
            setOffset(offset) {
                this.textOffset = offset;
            }
            setAlign(align) {
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
            }
            setText(val, style) {
                this._text.text = val;
                this._text.setStyle(style);
                this._text.x = this.width / 2 - this._text.width / 2;
                this._text.y = this.height / 2 - this._text.height / 2;
                this.setAlign(this.alignment);
            }
            getText() {
                return this._text;
            }
            onDown() {
                this.y += 5;
            }
            onUp() {
                if (typeof (this._cb) === 'function') {
                    this._cb();
                }
                this.y -= 5;
            }
            onHover() {
                if (this.onMouseOverAnimation) {
                    this.onMouseOverAnimation();
                }
            }
            onOut() {
                if (this.onMouseOutAnimation) {
                    this.onMouseOutAnimation();
                }
            }
            get clicked() {
                return this._cb;
            }
            set clicked(cb) {
                this._cb = cb;
            }
        }
        UserInterface.PixiButton = PixiButton;
    })(UserInterface = Framework.UserInterface || (Framework.UserInterface = {}));
})(Framework || (Framework = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        var Settings = Framework.Settings;
        var writeCookie = Framework.Utils.writeCookie;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var DatabaseConnector = Framework.Connection.DatabaseConnector;
        class PlayerColorCustomizer {
            constructor() {
                this.currentColorCounter = 0;
                console.log("color customizer");
                this.colorCircle = document.getElementById("PlayerColorCircle");
                this.colorsArray = Pockey.PockeySettings.SMALL_COLORS_ARRAY;
                this.colorCircle.style.backgroundColor = this.parseColor(this.colorsArray[this.currentColorCounter].color);
                this.previousColorButton = document.getElementById("PreviousColorButton");
                this.nextColorButton = document.getElementById("NextColorButton");
                this.previousColorButton.onclick = () => {
                    console.log("on prev color");
                    this.currentColorCounter--;
                    if (this.currentColorCounter < 0) {
                        this.currentColorCounter = this.colorsArray.length - 1;
                    }
                    Pockey.PockeySettings.PLAYER_COLOR_ID = this.colorsArray[this.currentColorCounter].id;
                    this.colorCircle.style.backgroundColor = this.parseColor(this.colorsArray[this.currentColorCounter].color);
                    this.updateCookieOrDatabase();
                };
                this.nextColorButton.onclick = () => {
                    console.log("on next color");
                    this.currentColorCounter++;
                    if (this.currentColorCounter > this.colorsArray.length - 1) {
                        this.currentColorCounter = 0;
                    }
                    Pockey.PockeySettings.PLAYER_COLOR_ID = this.colorsArray[this.currentColorCounter].id;
                    this.colorCircle.style.backgroundColor = this.parseColor(this.colorsArray[this.currentColorCounter].color);
                    this.updateCookieOrDatabase();
                };
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_PLAYER_COLOR, this.updateCurrentColor.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_IN, this.onPlayerSignedIn.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_OUT, this.onPlayerSignedOut.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.INVENTORY_ITEM_UPDATED, this.onInventoryItemUpdated.bind(this));
            }
            onInventoryItemUpdated() {
                if (this.colorsArray[this.currentColorCounter].id != Pockey.PockeySettings.PLAYER_COLOR_ID) {
                    this.updateCurrentColor();
                }
            }
            updateCurrentColor() {
                _.forEach(this.colorsArray, (item, counter) => {
                    if (item.id == Pockey.PockeySettings.PLAYER_COLOR_ID) {
                        this.currentColorCounter = counter;
                        return true;
                    }
                });
                this.colorCircle.style.backgroundColor = this.parseColor(this.colorsArray[this.currentColorCounter].color);
            }
            updateCookieOrDatabase() {
                if (Settings.playerSignedIn) {
                    let colorDbObject = {
                        userID: Pockey.PockeySettings.PLAYER_ID,
                        column: "color",
                        value: Pockey.PockeySettings.PLAYER_COLOR_ID
                    };
                    DatabaseConnector.updateUserData(colorDbObject, null);
                }
                else {
                    writeCookie("PockeyUserColorId", Pockey.PockeySettings.PLAYER_COLOR_ID, 30);
                }
            }
            onPlayerSignedIn() {
                this.colorsArray = Pockey.PockeySettings.LARGE_COLORS_ARRAY;
                console.log("colors customizer player signed in");
                this.updateCurrentColor();
            }
            onPlayerSignedOut() {
                this.colorsArray = Pockey.PockeySettings.SMALL_COLORS_ARRAY;
                if (this.currentColorCounter > this.colorsArray.length - 1) {
                    this.currentColorCounter = 0;
                    Pockey.PockeySettings.PLAYER_COLOR_ID = this.colorsArray[this.currentColorCounter].id;
                }
                this.colorCircle.style.backgroundColor = this.parseColor(this.colorsArray[this.currentColorCounter].color);
                this.updateCookieOrDatabase();
            }
            parseColor(color) {
                if (typeof color === 'number') {
                    color = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
                }
                return color;
            }
            ;
        }
        UserInterface.PlayerColorCustomizer = PlayerColorCustomizer;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        var Settings = Framework.Settings;
        var writeCookie = Framework.Utils.writeCookie;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var DatabaseConnector = Framework.Connection.DatabaseConnector;
        class PlayerAvatarCustomizer {
            constructor() {
                this.currentAvatarCounter = 0;
                if (Settings.playerSignedIn) {
                    this.avatarsArray = Pockey.PockeySettings.LARGE_AVATARS_ARRAY;
                }
                else {
                    this.avatarsArray = Pockey.PockeySettings.SMALL_AVATARS_ARRAY;
                }
                if (Pockey.PockeySettings.PLAYER_AVATAR_ID) {
                    _.forEach(this.avatarsArray, (avatar, counter) => {
                        if (avatar.id == Pockey.PockeySettings.PLAYER_AVATAR_ID) {
                            this.currentAvatarCounter = counter;
                        }
                    });
                }
                this.avatarHolder = document.getElementById("AvatarImage");
                Pockey.PockeySettings.PLAYER_AVATAR_ID = this.avatarsArray[this.currentAvatarCounter].id;
                this.avatarHolder.style.background = "center / 97% no-repeat #1A4157 url(" + this.avatarsArray[this.currentAvatarCounter].icon + ")";
                this.previousAvatarButton = document.getElementById("PreviousAvatarButton");
                this.nextAvatarButton = document.getElementById("NextAvatarButton");
                this.previousAvatarButton.onclick = () => {
                    this.onPreviousButtonClicked();
                };
                this.nextAvatarButton.onclick = () => {
                    this.onNextButtonClicked();
                };
                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_IN, this.onPlayerSignedIn.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_OUT, this.onPlayerSignedOut.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.INVENTORY_ITEM_UPDATED, this.onInventoryItemUpdated.bind(this));
            }
            onInventoryItemUpdated() {
                if (this.avatarsArray[this.currentAvatarCounter].id != Pockey.PockeySettings.PLAYER_AVATAR_ID) {
                    _.forEach(this.avatarsArray, (item, counter) => {
                        if (item.id == Pockey.PockeySettings.PLAYER_AVATAR_ID) {
                            this.currentAvatarCounter = counter;
                            return true;
                        }
                    });
                    this.avatarHolder.style.background = "center / 97% no-repeat #1A4157 url(" + this.avatarsArray[this.currentAvatarCounter].icon + ")";
                }
            }
            onPreviousButtonClicked() {
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
            }
            onNextButtonClicked() {
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
            }
            onPlayerSignedOut() {
                this.avatarsArray = Pockey.PockeySettings.SMALL_AVATARS_ARRAY;
                this.currentAvatarCounter = 0;
                Pockey.PockeySettings.PLAYER_AVATAR_ID = this.avatarsArray[this.currentAvatarCounter].id;
                this.avatarHolder.style.background = "center / 97% no-repeat #1A4157 url(" + this.avatarsArray[this.currentAvatarCounter].icon + ")";
                this.updateCookieOrDatabase();
            }
            onPlayerSignedIn() {
                this.avatarsArray = Pockey.PockeySettings.LARGE_AVATARS_ARRAY;
                _.forEach(this.avatarsArray, (item, counter) => {
                    if (item.id == Pockey.PockeySettings.PLAYER_AVATAR_ID) {
                        this.currentAvatarCounter = counter;
                        return true;
                    }
                });
                this.avatarHolder.style.background = "center / 97% no-repeat #1A4157 url(" + this.avatarsArray[this.currentAvatarCounter].icon + ")";
            }
            updateCookieOrDatabase() {
                if (Settings.playerSignedIn) {
                    let colorDbObject = {
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
            }
        }
        UserInterface.PlayerAvatarCustomizer = PlayerAvatarCustomizer;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        var writeCookie = Framework.Utils.writeCookie;
        var removeCookie = Framework.Utils.removeCookie;
        var Settings = Framework.Settings;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var DatabaseConnector = Framework.Connection.DatabaseConnector;
        class LoginElements {
            constructor() {
                this.correctText = document.getElementById("CorrectText");
                this.mainMenuBackButtonHolder = document.getElementById("MainMenuBackButtonHolder");
                this.handleInputText();
                this.handleSignOutButton();
                this.handleStartButton();
                this.handleFacebookButton();
                this.handleGoogleButton();
                this.checkForPlayerSignIn();
                SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_IN, this.onPlayerSignedIn.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.INVENTORY_ITEM_UPDATED, this.onInventoryItemUpdated.bind(this));
            }
            onInventoryItemUpdated() {
                if (Pockey.PockeySettings.PLAYER_NICKNAME != "" && this.inputText.value != Pockey.PockeySettings.PLAYER_NICKNAME) {
                    this.inputText.value = Pockey.PockeySettings.PLAYER_NICKNAME;
                }
            }
            onPlayerSignedIn() {
                this.hideSignInButtons();
                if (this.inputText.value != Pockey.PockeySettings.PLAYER_NICKNAME && Pockey.PockeySettings.PLAYER_NICKNAME != "") {
                    this.inputText.value = Pockey.PockeySettings.PLAYER_NICKNAME;
                }
            }
            handleInputText() {
                this.inputText = document.getElementById("InputText");
                if (Pockey.PockeySettings.PLAYER_NICKNAME != "") {
                    this.inputText.value = Pockey.PockeySettings.PLAYER_NICKNAME;
                }
                this.inputText.addEventListener('input', this.typeHandler.bind(this));
                this.inputText.addEventListener('propertychange', this.typeHandler.bind(this));
                this.inputText.addEventListener('change', this.typeHandler.bind(this));
            }
            typeHandler() {
                if (this.inputText.value != "") {
                    this.correctText.style.visibility = "hidden";
                }
            }
            handleSignOutButton() {
                this.signOutBtn = document.getElementById("LogoutButton");
                this.signOutBtn.onclick = () => {
                    console.log("intra la click");
                    let pockeyEvent = new Event('PockeyGoogleSignOutEvent');
                    this.signOutBtn.dispatchEvent(pockeyEvent);
                    Pockey.PockeySettings.PLAYER_ID = "guest";
                    removeCookie("PockeyID");
                    removeCookie("PockeyUserColorId");
                    removeCookie("PockeyUserAvatarId");
                    this.showSignInButtons();
                    SignalsManager.DispatchSignal(PockeySignalTypes.PLAYER_SIGNED_OUT);
                };
            }
            showSignInButtons() {
                this.googleSignIn.style.display = "block";
                this.facebookSignIn.style.display = "block";
                this.signOutBtn.style.display = "none";
                document.getElementById("MainMenuPlayerRankingsHolder").style.display = "none";
            }
            hideSignInButtons() {
                this.googleSignIn.style.display = "none";
                this.facebookSignIn.style.display = "none";
                this.signOutBtn.style.display = "block";
                document.getElementById("MainMenuPlayerRankingsHolder").style.display = "flex";
            }
            handleStartButton() {
                this.startBtn = document.getElementById("StartGameButtonHolder");
                this.startBtn.onclick = () => {
                    if (this.inputText.value == "") {
                        this.correctText.style.visibility = "visible";
                        TweenMax.killTweensOf(this.inputText);
                        this.inputText.style.borderColor = "";
                        TweenMax.to(this.inputText, .2, { css: { borderColor: "#e92c5a" }, yoyo: true, repeat: 3 });
                    }
                    else {
                        if (Settings.playerSignedIn) {
                            Pockey.PockeySettings.PLAYER_NICKNAME = this.inputText.value;
                            let nicknameDb = {
                                userID: Pockey.PockeySettings.PLAYER_ID,
                                column: "nickname",
                                value: Pockey.PockeySettings.PLAYER_NICKNAME
                            };
                            DatabaseConnector.updateUserData(nicknameDb, null);
                        }
                        else {
                            Pockey.PockeySettings.PLAYER_NICKNAME = this.inputText.value;
                            writeCookie('PockeyNickname', this.inputText.value, 30);
                        }
                        SignalsManager.DispatchSignal(PockeySignalTypes.START_GAME);
                        this.mainMenuBackButtonHolder.style.display = "none";
                    }
                };
            }
            handleGoogleButton() {
                this.googleSignIn = document.getElementById("GoogleSignInButtonHolder");
                this.googleSignIn.addEventListener('PockeyGoogleSignInEvent', (e) => {
                    console.log("%c login handler: google logged in", "background:pink");
                    writeCookie('PockeyID', e.detail.toString(), 30);
                    SignalsManager.DispatchSignal(PockeySignalTypes.GOOGLE_SIGN_IN);
                }, false);
            }
            handleFacebookButton() {
                this.facebookSignIn = document.getElementById("FacebookSignInButtonHolder");
                this.facebookSignIn.addEventListener("PockeyFacebookSignedIn", (e) => {
                    if (!_.isNull(e.detail["email"]) && !_.isUndefined(e.detail["email"])) {
                        writeCookie('PockeyID', e.detail["email"].toString(), 30);
                    }
                    console.log("%c login handler: google logged in", "background:pink");
                    SignalsManager.DispatchSignal(PockeySignalTypes.FACEBOOK_SIGN_IN);
                });
            }
            checkForPlayerSignIn() {
                if (Settings.playerSignedIn) {
                    this.hideSignInButtons();
                }
            }
        }
        UserInterface.LoginElements = LoginElements;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        class TutorialMenu {
            constructor() {
                this.howToButtonClicked = false;
                this.howToPlayButton = document.getElementById("HowToPlayButtonHolder");
                this.howToPlayImage = document.getElementById("HowToPlayImage");
                let buttonBg = this.howToPlayButton.querySelector('.normalButtonBackground');
                this.howToPlayButton.onclick = () => {
                    this.howToButtonClicked = (!this.howToButtonClicked);
                    console.log("how to clicked la click: " + this.howToButtonClicked);
                    if (this.howToButtonClicked) {
                        this.howToPlayButton.style.borderColor = "#ffffff";
                        buttonBg.style.backgroundColor = "#ffffff";
                        buttonBg.style.color = "#2D899D";
                        this.howToPlayImage.style.background = "none";
                        let random = Math.random() * 50;
                        this.howToPlayImage.style.background = "url(Assets/Desktop/Images/howtoplay.gif?v=" + random.toString() + ")  center center / 97% no-repeat";
                        document.getElementById("HowToPlayImage").style.display = "block";
                        document.getElementById("FbTwitterPromoHolder").style.display = "none";
                        document.getElementById("ShareButtonsHolder").style.display = "none";
                    }
                    else {
                        this.howToPlayButton.style.borderColor = "";
                        buttonBg.style.backgroundColor = "";
                        buttonBg.style.color = "";
                        this.howToPlayImage.style.background = "none";
                        document.getElementById("HowToPlayImage").style.display = "none";
                        document.getElementById("FbTwitterPromoHolder").style.display = "flex";
                        document.getElementById("ShareButtonsHolder").style.display = "block";
                    }
                };
            }
        }
        UserInterface.TutorialMenu = TutorialMenu;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        class PlayGameMenu {
            constructor() {
                this.loginElements = new UserInterface.LoginElements();
                this.playerColorCustomizer = new UserInterface.PlayerColorCustomizer();
                this.playerAvatarCustomizer = new UserInterface.PlayerAvatarCustomizer();
                this.tutorialMenu = new UserInterface.TutorialMenu();
            }
        }
        UserInterface.PlayGameMenu = PlayGameMenu;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        var Settings = Framework.Settings;
        class InventoryButton {
            constructor(btnDiv, showCategoryCallback, hideCategoryCallback) {
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
                this.button.onclick = () => {
                    this.clickHandler();
                };
                this.button.onmouseover = () => {
                    if (this.clicked) {
                        this.inventoryButtonLogo.style.background = "center / contain no-repeat url(Assets/Desktop/Images/minus-sign-white.png)";
                        this.button.style.borderColor = "";
                        this.button.style.backgroundColor = "";
                        this.button.style.color = "white";
                    }
                };
                this.button.onmouseout = () => {
                    if (this.clicked) {
                        this.inventoryButtonLogo.style.background = "center / contain no-repeat url(Assets/Desktop/Images/minus-sign-color.png)";
                        this.button.style.borderColor = "white";
                        this.button.style.backgroundColor = "white";
                        this.button.style.color = "#2d889c";
                    }
                    else {
                        this.inventoryButtonLogo.style.background = "";
                    }
                };
            }
            clickHandler() {
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
            }
            ;
            onSignedIn() {
                if (this.clicked) {
                    this.onHideCategoryCallback(this.categoryElements);
                    this.categoryElements = Pockey.PockeySettings["LARGE_" + this.category.toUpperCase() + "_ARRAY"];
                    this.onShowCategoryCallback(this.categoryElements);
                }
                else {
                    this.categoryElements = Pockey.PockeySettings["LARGE_" + this.category.toUpperCase() + "_ARRAY"];
                }
            }
            onSignedOut() {
                if (this.clicked) {
                    this.onHideCategoryCallback(this.categoryElements);
                    this.categoryElements = Pockey.PockeySettings["SMALL_" + this.category.toUpperCase() + "_ARRAY"];
                    this.onShowCategoryCallback(this.categoryElements);
                }
                else {
                    this.categoryElements = Pockey.PockeySettings["SMALL_" + this.category.toUpperCase() + "_ARRAY"];
                }
            }
            activate() {
                if (this.categoryElements.length > 0) {
                    this.clickHandler();
                    this.inventoryButtonLogo.style.background = "center / contain no-repeat url(Assets/Desktop/Images/minus-sign-color.png)";
                    this.button.style.borderColor = "white";
                    this.button.style.backgroundColor = "white";
                    this.button.style.color = "#2d889c";
                }
            }
        }
        UserInterface.InventoryButton = InventoryButton;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        class InventoryBox {
            constructor(imgDiv, clickFunction) {
                this.occupied = false;
                this.clicked = false;
                this.imageDiv = imgDiv;
                this.iconDiv = this.imageDiv.querySelector(".inventoryItemBoxBackground");
                this.imageDiv.onmouseover = () => {
                    if (this.occupied) {
                        this.imageDiv.style.cursor = "pointer";
                        this.imageDiv.style.borderColor = "white";
                    }
                    else {
                        this.imageDiv.style.cursor = "";
                        this.imageDiv.style.borderColor = "";
                    }
                };
                this.imageDiv.onmouseout = () => {
                    if (!this.clicked)
                        this.imageDiv.style.borderColor = "";
                };
                this.imageDiv.onclick = () => {
                    this.clicked = !this.clicked;
                    if (this.clicked) {
                        this.imageDiv.style.borderColor = "white";
                        this.imageDiv.style.borderWidth = "3px";
                    }
                    if (this.occupied)
                        clickFunction(this.inventoryVO);
                };
            }
            click() {
                this.clicked = true;
                this.imageDiv.style.borderColor = "white";
                this.imageDiv.style.borderWidth = "3px";
            }
            unClick() {
                this.stopAnimation();
                this.imageDiv.style.borderColor = "";
                this.imageDiv.style.borderWidth = "";
                this.clicked = false;
            }
            addVO(inventoryVO) {
                this.clearVO();
                this.occupied = true;
                this.inventoryVO = inventoryVO;
                this.iconDiv.style.background = "center / contain no-repeat #062f38 url(" + this.inventoryVO.icon + ")";
            }
            clearVO() {
                this.stopAnimation();
                this.unClick();
                this.occupied = false;
                this.iconDiv.style.background = "center / contain no-repeat #062f38 url('')";
                this.inventoryVO = null;
                this.iconDiv.querySelector(".inventoryItemBoxSelected").style.display = "";
                this.iconDiv.querySelector(".inventoryItemBoxLocked").style.display = "";
            }
            stopAnimation() {
                if (this.borderAnimation && this.borderAnimation.isActive()) {
                    this.borderAnimation.kill();
                    this.borderAnimation = null;
                }
                this.imageDiv.style.borderColor = "";
                this.imageDiv.style.borderWidth = "";
            }
            animate() {
                this.stopAnimation();
                this.borderAnimation = TweenMax.to(this.imageDiv, 0.3, {
                    css: { borderColor: "white", borderWidth: "5px" },
                    yoyo: true,
                    repeat: 1
                });
            }
        }
        UserInterface.InventoryBox = InventoryBox;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        class InventoryItemsHolderButton {
            constructor(btn) {
                this.button = btn;
                let iconBgID = this.button.getElementsByClassName("buttonArrow")[0].id;
                this.iconBg = document.getElementById(iconBgID);
                let iconStyle = this.iconBg.currentStyle || window.getComputedStyle(this.iconBg);
                let mouseOverBackground = iconStyle.background.toString().replace(".svg", "-reg.svg");
                this.bg = this.button.getElementsByClassName("normalButtonBackground")[0];
                this.button.setAttribute("isActive", "true");
                this.button.onmouseover = () => {
                    if (this.button.getAttribute("isActive") == "true") {
                        this.bg.style.background = "white";
                        this.iconBg.style.background = mouseOverBackground;
                    }
                    else {
                        this.bg.style.background = "";
                        this.iconBg.style.background = "";
                    }
                };
                this.button.onmouseout = () => {
                    this.bg.style.background = "";
                    this.iconBg.style.background = "";
                };
                this.disable();
            }
            disable() {
                this.button.style.opacity = "0.5";
                this.button.style.cursor = "default";
                this.button.setAttribute("isActive", "false");
                this.bg.style.background = "";
                this.iconBg.style.background = "";
            }
            enable() {
                this.button.style.opacity = "";
                this.button.style.cursor = "";
                this.button.setAttribute("isActive", "true");
            }
        }
        UserInterface.InventoryItemsHolderButton = InventoryItemsHolderButton;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        var Settings = Framework.Settings;
        class InventoryButtonMobile extends UserInterface.InventoryButton {
            constructor(btnDiv, showCategoryCallback, hideCategoryCallback) {
                super(btnDiv, showCategoryCallback, hideCategoryCallback);
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
                this.button.onclick = () => {
                    this.clickHandler();
                };
                this.button.onmouseover = () => {
                };
                this.button.onmouseout = () => {
                };
            }
            clickHandler() {
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
            }
            ;
            onSignedIn() {
                if (this.clicked) {
                    this.onHideCategoryCallback(this.categoryElements);
                    this.categoryElements = Pockey.PockeySettings["LARGE_" + this.category.toUpperCase() + "_ARRAY"];
                    this.onShowCategoryCallback(this.categoryElements);
                }
                else {
                    this.categoryElements = Pockey.PockeySettings["LARGE_" + this.category.toUpperCase() + "_ARRAY"];
                }
            }
            onSignedOut() {
                if (this.clicked) {
                    this.onHideCategoryCallback(this.categoryElements);
                    this.categoryElements = Pockey.PockeySettings["SMALL_" + this.category.toUpperCase() + "_ARRAY"];
                    this.onShowCategoryCallback(this.categoryElements);
                }
                else {
                    this.categoryElements = Pockey.PockeySettings["SMALL_" + this.category.toUpperCase() + "_ARRAY"];
                }
            }
            activate() {
                if (this.categoryElements.length > 0) {
                    this.clickHandler();
                    this.inventoryButtonLogo.style.background = "center / contain no-repeat url(Assets/Desktop/Images/minus-sign-color.png)";
                    this.button.style.borderColor = "white";
                    this.button.style.backgroundColor = "white";
                    this.button.style.color = "#2d889c";
                }
            }
        }
        UserInterface.InventoryButtonMobile = InventoryButtonMobile;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var DatabaseConnector = Framework.Connection.DatabaseConnector;
        var SignalsType = Framework.Signals.SignalsType;
        var Settings = Framework.Settings;
        class PockeyInventoryMenu {
            constructor() {
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
            onAllModulesElementsCreated() {
                for (let i = this.inventoryButtons.length; i--; i >= 0) {
                    this.inventoryButtons[i].activate();
                }
            }
            onInventoryItemUpdated(params) {
                this.updateBoxes(this.itemsArray);
            }
            onPlayerSignedIn() {
                _.forEach(this.inventoryButtons, (button) => {
                    button.onSignedIn();
                });
            }
            onPlayerSignedOut() {
                _.forEach(this.inventoryButtons, (button) => {
                    button.onSignedOut();
                });
                this.updateBoxes(this.itemsArray);
                this.moveHolderToOffset(0, true);
            }
            handleItemDescriptionPanel() {
                this.bigAvatar = document.getElementById("InventoryBigAvatar");
                this.itemNameDiv = document.getElementById("ItemNameText");
            }
            handleInventoryBoxes() {
                this.boxesHolder = document.getElementById("ItemsHolder");
                this.boxesHolderWrapper = document.getElementById("ItemsHolderWrapper");
                this.boxesHolderWrapper.classList.add("inventoryRightSideMask");
                this.boxes = [];
                let counter = 0;
                _.forEach(this.boxesHolder.children, (column) => {
                    this.columnsNumber++;
                    this.columnPadding = +((column.style.marginRight).replace("px", ""));
                    _.forEach(column.children, (item) => {
                        let box = new UserInterface.InventoryBox(item, this.showItemDescription.bind(this));
                        this.boxes.push(box);
                        counter++;
                    });
                });
                TweenMax.delayedCall(0.5, () => {
                    if (this.columnWidth == 0) {
                        this.columnWidth = this.boxesHolder.scrollWidth / this.boxesHolder.children.length;
                    }
                });
            }
            showCategory(category) {
                if (this.columnWidth == 0) {
                    this.columnWidth = this.boxesHolder.scrollWidth / this.boxesHolder.children.length;
                }
                _.forEach(category, (inventoryVO, counter) => {
                    _.remove(this.itemsArray, (item) => {
                        return item.id == inventoryVO.id;
                    });
                    this.itemsArray.push(inventoryVO);
                });
                this.reorderItemsArray();
                let neededColumns = Math.round(this.itemsArray.length / 3);
                let columnsNo = this.boxesHolder.children.length;
                if (neededColumns > columnsNo) {
                    let itm = this.boxesHolder.children[0];
                    _.forEach(_.range(neededColumns - columnsNo), () => {
                        let newColumn = itm.cloneNode(true);
                        this.boxesHolder.appendChild(newColumn);
                    });
                    this.boxes = [];
                    _.forEach(this.boxesHolder.children, (column) => {
                        _.forEach(column.children, (item) => {
                            let box = new UserInterface.InventoryBox(item, this.showItemDescription.bind(this));
                            this.boxes.push(box);
                        });
                    });
                }
                this.updateBoxes(this.itemsArray, category[0].category);
                let columnIndex = this.getNewColumnIndexOnShow(category[0].category);
                let newOffset = columnIndex * this.columnWidth;
                this.moveHolderToOffset(newOffset);
            }
            getNewColumnIndexOnShow(categoryName) {
                let firstItemIndex = -1;
                let lastItemIndex = 0;
                _.forEach(this.itemsArray, (item, counter) => {
                    if (item.category == categoryName) {
                        if (firstItemIndex == -1) {
                            firstItemIndex = counter;
                            lastItemIndex = firstItemIndex - 1;
                        }
                        lastItemIndex++;
                    }
                });
                let columnIndex = Math.floor(firstItemIndex / 3);
                let maxColumns = this.boxesHolder.children.length;
                if (columnIndex > maxColumns) {
                    columnIndex = maxColumns;
                }
                return columnIndex;
            }
            reorderItemsArray() {
                let newArr = [];
                _.forEach(this.inventoryButtons, (button) => {
                    _.forEach(this.itemsArray, (item) => {
                        if (item.category.toUpperCase() == button.category.toUpperCase()) {
                            newArr.push(item);
                        }
                    });
                });
                this.itemsArray = newArr;
            }
            hideCategory(category) {
                _.forEach(category, (inventoryVO, counter) => {
                    _.remove(this.itemsArray, (item) => {
                        if (item.id == inventoryVO.id) {
                        }
                        return item.id == inventoryVO.id;
                    });
                });
                this.reorderItemsArray();
                let neededColumns = Math.round(this.itemsArray.length / 3);
                if (neededColumns < this.columnsNumber) {
                    neededColumns = this.columnsNumber;
                }
                let columnsNo = this.boxesHolder.children.length;
                if (columnsNo > neededColumns) {
                    let boxes = this.boxesHolder.children;
                    for (let i = boxes.length - 1; i >= neededColumns; i--) {
                        this.boxesHolder.removeChild(boxes[i]);
                    }
                }
                this.updateBoxes(this.itemsArray);
                let currentRight = this.boxesHolder.style.right;
                currentRight = currentRight.replace("px", "");
                let newOffset = +currentRight;
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
            }
            handleInventoryButtons() {
                this.nextColumnBtn = new UserInterface.InventoryItemsHolderButton(document.getElementById("ItemsNextButton"));
                this.nextColumnBtn.button.onclick = () => {
                    if (this.nextColumnBtn.button.getAttribute("isActive") == "true") {
                        if (this.columnWidth == 0) {
                            this.columnWidth = this.boxesHolder.scrollWidth / this.boxesHolder.children.length;
                        }
                        let currentRightPos = this.boxesHolder.style.right;
                        currentRightPos = currentRightPos.replace("px", "");
                        let newOffset = +currentRightPos + this.columnWidth * 2;
                        this.moveHolderToOffset(newOffset);
                    }
                };
                this.prevColumnBtn = new UserInterface.InventoryItemsHolderButton(document.getElementById("ItemsPrevButton"));
                this.prevColumnBtn.button.onclick = () => {
                    if (this.prevColumnBtn.button.getAttribute("isActive") == "true") {
                        if (this.columnWidth == 0) {
                            this.columnWidth = this.boxesHolder.scrollWidth / this.boxesHolder.children.length;
                        }
                        let currentRightPos = this.boxesHolder.style.right;
                        currentRightPos = currentRightPos.replace("px", "");
                        let newOffset = +currentRightPos - this.columnWidth * 2;
                        this.moveHolderToOffset(newOffset);
                    }
                };
                this.inventoryButtonsHolder = document.getElementById("InventoryButtonsHolder");
                this.inventoryButtons = [];
                let inventoryButton;
                _.forEach(this.inventoryButtonsHolder.children, (button) => {
                    if (button.className == "inventoryButton") {
                        if (Settings.isMobile)
                            inventoryButton = new UserInterface.InventoryButtonMobile(button, this.showCategory.bind(this), this.hideCategory.bind(this));
                        else
                            inventoryButton = new UserInterface.InventoryButton(button, this.showCategory.bind(this), this.hideCategory.bind(this));
                        this.inventoryButtons.push(inventoryButton);
                    }
                });
                this.equipBtn = document.getElementById("EquipButtonHolder");
                this.equipBtn.style.opacity = "0.5";
                this.equipBtn.setAttribute('clicked', 'false');
                this.equipBtn.onclick = () => {
                    if (this.equipBtn.getAttribute("enabled") == "true") {
                        switch (this.currentActiveItem.category) {
                            case "AVATARS": {
                                Pockey.PockeySettings.PLAYER_AVATAR_ID = this.currentActiveItem.id;
                                SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
                                this.checkIfCurrentItemCanBeUsed();
                                let dbObject = {
                                    userID: Pockey.PockeySettings.PLAYER_ID,
                                    column: "avatar",
                                    value: Pockey.PockeySettings.PLAYER_AVATAR_ID
                                };
                                DatabaseConnector.updateUserData(dbObject, null);
                                return;
                            }
                            case "CUES": {
                                Pockey.PockeySettings.PLAYER_CUE_ID = this.currentActiveItem.id;
                                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_STICK_SKIN, [Pockey.PockeySettings.PLAYER_CUE_ID]);
                                SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
                                this.checkIfCurrentItemCanBeUsed();
                                let dbObject = {
                                    userID: Pockey.PockeySettings.PLAYER_ID,
                                    column: "stick",
                                    value: Pockey.PockeySettings.PLAYER_CUE_ID
                                };
                                DatabaseConnector.updateUserData(dbObject, null);
                                return;
                            }
                            case "DECALS": {
                                Pockey.PockeySettings.PLAYER_DECAL_ID = this.currentActiveItem.id;
                                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_DECAL, [Pockey.PockeySettings.PLAYER_DECAL_ID]);
                                console.log("de aici se trimite salam decal");
                                SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
                                this.checkIfCurrentItemCanBeUsed();
                                let dbObject = {
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
                                Pockey.PockeySettings.POOLTABLE_FELT_ID = this.currentActiveItem.id;
                                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_FELT, [Pockey.PockeySettings.POOLTABLE_FELT_ID]);
                                SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
                                this.checkIfCurrentItemCanBeUsed();
                                let dbObject = {
                                    userID: Pockey.PockeySettings.PLAYER_ID,
                                    column: "felt",
                                    value: Pockey.PockeySettings.POOLTABLE_FELT_ID
                                };
                                DatabaseConnector.updateUserData(dbObject, null);
                                return;
                            }
                        }
                    }
                };
            }
            moveHolderToOffset(offset, fast) {
                this.offsetLimit = this.boxesHolder.offsetWidth;
                if (offset > this.boxesHolder.scrollWidth - this.boxesHolder.offsetWidth) {
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
                }
                else {
                    this.boxesHolderWrapper.classList.remove("inventoryLeftSideMask");
                    this.boxesHolderWrapper.classList.remove("inventoryRightSideMask");
                    this.boxesHolderWrapper.classList.add("inventoryMask");
                    this.nextColumnBtn.enable();
                    this.prevColumnBtn.enable();
                }
                if (this.itemsArray.length == 0) {
                    this.nextColumnBtn.disable();
                    this.prevColumnBtn.disable();
                }
                if (this.holderTween && this.holderTween.isActive()) {
                    this.holderTween.kill();
                }
                let tweenTime = 0.2;
                if (fast)
                    tweenTime = 0;
                this.holderTween = TweenMax.to(this.boxesHolder, tweenTime, { css: { "right": offset.toString() + "px" } });
            }
            updateBoxes(itemsToBeDisplayed, categoryToAnimate) {
                let maxLength = (this.boxes.length <= itemsToBeDisplayed.length) ? this.boxes.length : itemsToBeDisplayed.length;
                _.forEach(this.boxes, (box) => {
                    box.clearVO();
                });
                _.forEach(_.range(maxLength), (counter) => {
                    this.boxes[counter].addVO(itemsToBeDisplayed[counter]);
                    if (this.currentActiveItem && this.boxes[counter].inventoryVO.id == this.currentActiveItem.id) {
                        this.boxes[counter].click();
                    }
                    else {
                        this.boxes[counter].unClick();
                    }
                    if (this.boxes[counter].inventoryVO.level > Pockey.PockeySettings.PLAYER_LEVEL) {
                        this.boxes[counter].iconDiv.querySelector(".inventoryItemBoxLocked").style.display = "block";
                    }
                    else {
                        this.boxes[counter].iconDiv.querySelector(".inventoryItemBoxLocked").style.display = "";
                    }
                    if (categoryToAnimate && this.boxes[counter].inventoryVO.category.toUpperCase() == categoryToAnimate.toUpperCase()) {
                        this.boxes[counter].animate();
                    }
                    if (this.boxes[counter].inventoryVO.id == Pockey.PockeySettings.PLAYER_AVATAR_ID
                        || this.boxes[counter].inventoryVO.id == Pockey.PockeySettings.PLAYER_DECAL_ID
                        || this.boxes[counter].inventoryVO.id == Pockey.PockeySettings.PLAYER_CUE_ID
                        || this.boxes[counter].inventoryVO.id == Pockey.PockeySettings.POOLTABLE_FELT_ID) {
                        this.boxes[counter].iconDiv.querySelector(".inventoryItemBoxSelected").style.display = "block";
                    }
                    else {
                        this.boxes[counter].iconDiv.querySelector(".inventoryItemBoxSelected").style.display = "";
                    }
                });
            }
            showItemDescription(inventoryVO) {
                this.bigAvatar.style.background = "center / contain no-repeat #062f38 url(" + inventoryVO.icon + ")";
                this.itemNameDiv.innerHTML = inventoryVO.id;
                _.forEach(this.boxes, (box) => {
                    if (box.occupied) {
                        if (box.inventoryVO.id != inventoryVO.id) {
                            box.unClick();
                        }
                    }
                });
                this.currentActiveItem = inventoryVO;
                this.checkIfCurrentItemCanBeUsed();
            }
            checkIfCurrentItemCanBeUsed() {
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
                        if (Pockey.PockeySettings.POOLTABLE_FELT_ID != this.currentActiveItem.id) {
                            this.enableEquipBtn();
                        }
                        else {
                            this.disableEquipBtn();
                        }
                        return;
                    }
                }
            }
            enableEquipBtn() {
                this.equipBtn.setAttribute("enabled", "true");
                this.equipBtn.style.opacity = "1";
                this.equipBtn.querySelector(".normalButtonBackground").innerHTML = "EQUIP";
                this.equipBtn.style.cursor = "pointer";
            }
            disableEquipBtn(changeText = true) {
                this.equipBtn.setAttribute("enabled", "false");
                this.equipBtn.style.opacity = "0.5";
                if (changeText)
                    this.equipBtn.querySelector(".normalButtonBackground").innerHTML = "EQUIPPED";
                else {
                    this.equipBtn.querySelector(".normalButtonBackground").innerHTML = "EQUIP";
                }
                this.equipBtn.style.cursor = "";
            }
            resetItemDescription() {
                this.bigAvatar.style.background = "center / contain no-repeat #062f38 url('')";
                this.itemNameDiv.innerHTML = "Item Name";
            }
        }
        UserInterface.PockeyInventoryMenu = PockeyInventoryMenu;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        class PockeyUiMainScreen {
            constructor() {
                this.defineElements();
            }
            defineElements() {
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
                _.forEach(this.mainMenuButtons, (element) => {
                    element.setAttribute('clicked', 'false');
                    element.onclick = () => {
                        element.setAttribute("clicked", "true");
                        this.setMainButtonStyleOnClick(element);
                        switch (element.id) {
                            case this.playGameButton.id: {
                                this.showPlayGameMenu();
                                break;
                            }
                            case this.inventoryButton.id: {
                                this.showInventoryMenu();
                                break;
                            }
                            case this.inviteFriendButton.id: {
                                this.showInviteMenu();
                                break;
                            }
                            case this.leaderboardButton.id: {
                                this.showLeaderboardMenu();
                                break;
                            }
                        }
                        _.forEach(this.mainMenuButtons, (otherElement) => {
                            if (otherElement != element) {
                                otherElement.setAttribute("clicked", "false");
                                this.resetMainButtonStyleOnClick(otherElement);
                            }
                        });
                    };
                });
                this.pockeyHelmetAndStick = document.getElementById("PockeyHatAndStick");
            }
            showElement(element) {
                element.style.display = "flex";
            }
            hideElement(element) {
                element.style.display = "none";
            }
            showPlayGameMenu() {
                console.log("intra la show play");
                this.showElement(this.loginMenu);
                this.showElement(this.tutorialAndShareButtonsMenu);
                this.hideElement(this.inventoryScreen);
                this.hideElement(this.leaderboardMenu);
                this.hideElement(this.inviteMenu);
            }
            showInventoryMenu() {
                console.log("intra la show inventory");
                this.hideElement(this.loginMenu);
                this.hideElement(this.leaderboardMenu);
                this.showElement(this.inventoryScreen);
            }
            showLeaderboardMenu() {
                console.log("intra la show leaderboard");
                this.hideElement(this.loginMenu);
                this.hideElement(this.inventoryScreen);
                this.showElement(this.leaderboardMenu);
            }
            showInviteMenu() {
                console.log("intra la show invite");
                this.showElement(this.loginMenu);
                this.showElement(this.inviteMenu);
                this.hideElement(this.tutorialAndShareButtonsMenu);
                this.hideElement(this.leaderboardMenu);
                this.hideElement(this.inventoryScreen);
            }
            setMainButtonStyleOnClick(element) {
                element.classList.add('simpleBtnOnClick');
                let arrowDiv = element.querySelector('.simpleBtnArrow');
                arrowDiv.classList.add('simpleBtnArrowOnClick');
                let btnHighlight = element.querySelector('.simpleBtnHighlight');
                btnHighlight.classList.add('simpleBtnHighlightOnClick');
            }
            resetMainButtonStyleOnClick(element) {
                element.classList.remove('simpleBtnOnClick');
                let arrowDiv = element.querySelector('.simpleBtnArrow');
                arrowDiv.classList.remove('simpleBtnArrowOnClick');
                let btnHighlight = element.querySelector('.simpleBtnHighlight');
                btnHighlight.classList.remove('simpleBtnHighlightOnClick');
            }
            setVisibleTrue() {
                this.mainMenuElementsHolder.style.display = "block";
                this.pockeyHelmetAndStick.style.display = "flex";
            }
            setVisibleFalse() {
                this.mainMenuElementsHolder.style.display = "none";
                this.pockeyHelmetAndStick.style.display = "none";
            }
        }
        UserInterface.PockeyUiMainScreen = PockeyUiMainScreen;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        class PockeyUiSearchingScreen {
            constructor() {
                this.searchScreen = document.getElementById("SearchingScreen");
                this.searchScreenAnimationHolder = this.searchScreen.getElementsByClassName("searchingAnimation")[0];
                this.searchScreenCircles = [];
            }
            setVisibleTrue() {
                this.killTweens();
                this.searchScreenCircles = [];
                _.forEach(_.range(5), () => {
                    let div = document.createElement('div');
                    div.classList.add("search");
                    div.classList.add("searchDiv");
                    this.searchScreenAnimationHolder.appendChild(div);
                    this.searchScreenCircles.push(div);
                });
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
            }
            setVisibleFalse() {
                this.killTweens();
                if (this.searchScreenCircles.length > 0) {
                    _.forEach(this.searchScreenCircles, (circle) => {
                        circle.parentElement.removeChild(circle);
                        circle = null;
                    });
                }
                this.searchScreenCircles = [];
                this.searchScreen.style.display = "none";
            }
            killTweens() {
                TweenMax.killTweensOf(".search");
            }
        }
        UserInterface.PockeyUiSearchingScreen = PockeyUiSearchingScreen;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        class PockeyUserGameGraphics {
            constructor(side, gameGraphic) {
                this.isThirdRound = false;
                this.side = side;
                this.gameGraphic = gameGraphic;
                this.userAvatar = this.gameGraphic.getElementsByClassName("scoreBoardAvatar")[0];
                this.lifeUnits = [];
                _.forEach(this.gameGraphic.getElementsByClassName("scoreBoardLives")[0].children, (life) => {
                    this.lifeUnits.push(life);
                });
                this.timerText = this.gameGraphic.getElementsByClassName("scoreBoardTimer")[0];
                this.timerText.innerText = "0:" + Pockey.PockeySettings.ROUND_DURATION_IN_SECONDS.toString();
                this.userNameTextField = this.gameGraphic.getElementsByClassName("playerName")[0];
                this.getMatchCircles();
            }
            getMatchCircles() {
                let versus = new UserInterface.PockeyUiVersusGraphics();
                if (this.side == "left")
                    this.matchCircles = versus.leftSideMatchCircles;
                else
                    this.matchCircles = versus.rightSideMatchCircles;
            }
            updateMatchCircles(roundsWon) {
                _.forEach(_.range(roundsWon), (i) => {
                    this.matchCircles[i].activate(this.defaultColor);
                });
            }
            resetTimer() {
                this.userAvatar.style.border = "3px solid #fff";
                this.timerText.style.display = "none";
                this.timerText.style.color = "white";
                this.timerText.innerText = "0:" + Pockey.PockeySettings.ROUND_DURATION_IN_SECONDS.toString();
            }
            updateTimer(timeText) {
                if (timeText == "") {
                    this.resetTimer();
                }
                else {
                    this.timerText.innerText = timeText;
                    this.timerText.style.display = "flex";
                    this.userAvatar.style.border = "3px solid red";
                }
            }
            updateUsername(text) {
                this.userNameTextField.innerText = text;
            }
            reset() {
            }
            updateScore(score, isThirdRound) {
                _.forEach(this.lifeUnits, (lifeUnit, id) => {
                    if (id > score - 1) {
                        lifeUnit.style.opacity = "0.5";
                    }
                    else {
                    }
                    if (Pockey.PockeySettings.CURRENT_ROUND == 3) {
                        if (Pockey.PockeySettings.CURRENT_SHOOTOUT_ROUND > 3) {
                            if (id > 0) {
                                lifeUnit.style.display = "none";
                            }
                            lifeUnit.style.width = "98%";
                        }
                        else {
                            if (id > 2) {
                                lifeUnit.style.display = "none";
                            }
                            lifeUnit.style.width = "calc(100%/3.2)";
                        }
                    }
                    else {
                        lifeUnit.style.display = "flex";
                        lifeUnit.style.width = "calc(100%/7.8)";
                    }
                });
            }
            tint(color) {
                let hexColor = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
                this.defaultColor = color;
                _.forEach(this.lifeUnits, (lifeUnit, id) => {
                    lifeUnit.style.background = hexColor;
                    if (id > Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER - 1) {
                        lifeUnit.style.opacity = "0.5";
                    }
                    else {
                        lifeUnit.style.opacity = "1";
                    }
                });
                _.forEach(this.matchCircles, (matchCircle) => {
                    matchCircle.reset();
                });
                this.userNameTextField.style.color = hexColor;
            }
            updateAvatar(avatarID) {
                let avatarPath = "";
                _.forEach(Pockey.PockeySettings.LARGE_AVATARS_ARRAY, (avatarVO, counter) => {
                    if (avatarVO.id == avatarID) {
                        avatarPath = avatarVO.icon;
                        return true;
                    }
                });
                this.userAvatar.style.background = "center / 97% no-repeat #1a4157 url(" + avatarPath + ")";
            }
            animateTimer() {
                if (this.timerText.style.color == '#' + ('00000' + (0xFF0000 | 0).toString(16)).substr(-6)) {
                    return;
                }
                else {
                    this.timerText.style.color = '#' + ('00000' + (0xFF0000 | 0).toString(16)).substr(-6);
                }
            }
        }
        UserInterface.PockeyUserGameGraphics = PockeyUserGameGraphics;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        class PockeyUiMatchCircle {
            constructor(circle) {
                this.circleBorder = circle;
                this.circleDot = this.circleBorder.getElementsByClassName("dorScoreBoard")[0];
            }
            activate(color) {
                console.log("intra la match circle");
                this.circleBorder.style.borderColor = "#ffffff";
                this.circleDot.style.background = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
            }
            reset() {
                this.circleBorder.style.borderColor = "#639db5";
                this.circleDot.style.background = "#426d7e";
            }
        }
        UserInterface.PockeyUiMatchCircle = PockeyUiMatchCircle;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        var Settings = Framework.Settings;
        class PockeyUiVersusGraphics {
            constructor() {
                if (Settings.isMobile) {
                }
                this.leftSideMatchCircles = [];
                _.forEach(document.getElementById("ScoreBoardPlayerRoundsLeft").children, (circle) => {
                    let matchCircle = new UserInterface.PockeyUiMatchCircle(circle);
                    this.leftSideMatchCircles.push(matchCircle);
                });
                this.rightSideMatchCircles = [];
                _.forEach(document.getElementById("ScoreBoardPlayerRoundsRight").children, (circle) => {
                    let matchCircle = new UserInterface.PockeyUiMatchCircle(circle);
                    this.rightSideMatchCircles.push(matchCircle);
                });
            }
        }
        UserInterface.PockeyUiVersusGraphics = PockeyUiVersusGraphics;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        var BallType = Pockey.GameModule.BallType;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var Settings = Framework.Settings;
        class PockeyUiGameScreen {
            constructor() {
                this.poolTableScaleFactor = 1;
                this.currentText = "";
                this.isThirdRound = false;
                this.scoreBoard = document.getElementById("ScoreBoard");
                this.scoreBoard.style.visibility = "hidden";
                this.scoreBoard.style.display = "flex";
                this.initialBoardWidth = this.scoreBoard.offsetWidth;
                this.initialBoardHeight = this.scoreBoard.offsetHeight;
                console.log("la score board: " + this.initialBoardWidth, this.initialBoardHeight);
                console.log("la score board2: " + this.scoreBoard.clientWidth, this.scoreBoard.clientHeight);
                TweenMax.delayedCall(0.1, this.hideScoreBoard.bind(this));
                this.subscribeToSignals();
                this.defineTextStyles();
                this.addElements();
                this.playerGraphicsInterface = {};
                this.opponentGraphicsInterface = {};
            }
            onDefinePlayerInterface(params) {
                console.log("aicisha e playerul");
                if (params[0].type == BallType.Player) {
                    this.playerGraphicsInterface.player = params[0];
                    console.log("playerGraphicsInterface: " + this.playerGraphicsInterface);
                }
                else {
                    this.opponentGraphicsInterface.player = params[0];
                    console.log("opponentGraphicsInterface: " + this.opponentGraphicsInterface);
                }
            }
            hideScoreBoard() {
                this.scoreBoard.style.display = "none";
                this.scoreBoard.style.visibility = "visible";
                console.log("la score board3: " + this.initialBoardWidth, this.initialBoardHeight);
                console.log("la score board4: " + this.scoreBoard.clientWidth, this.scoreBoard.clientHeight);
            }
            show() {
                console.log("player: " + this.playerGraphicsInterface.player);
                console.log("opponent: " + this.opponentGraphicsInterface.player);
                this.scoreBoard.style.display = "flex";
            }
            hide() {
                this.tipText.innerText = "";
                this.scoreBoard.style.display = "none";
            }
            subscribeToSignals() {
                SignalsManager.AddSignalCallback(PockeySignalTypes.ASSIGN_PLAYER, this.onDefinePlayerInterface.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SET_SIDES_TYPE, this.onSetSides.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.RESET_GAME_SCREEN, this.onReset.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_UI_SCORE, this.onUpdateScore.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, this.onUpdateCurrentPlayerTimer.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_UI_TEXT, this.onUpdateUIText.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_MATCH_CIRCLES, this.onUpdateMatchCircles.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, this.onResizeBackground.bind(this));
            }
            onUpdateMatchCircles() {
                this.playerGraphicsInterface.graphics.updateMatchCircles(this.playerGraphicsInterface.player.roundsWon);
                this.opponentGraphicsInterface.graphics.updateMatchCircles(this.opponentGraphicsInterface.player.roundsWon);
            }
            onUpdateUIText(params) {
                let text = params[0];
                if (this.currentText == text) {
                    return;
                }
                this.currentText = text;
                text = text.replace("{opponent}", Pockey.PockeySettings.OPPONENT_NICKNAME);
                if (_.includes(text, "#warning#")) {
                    while (this.tipText.firstChild) {
                        this.tipText.removeChild(this.tipText.firstChild);
                    }
                    let tagArray = text.split("#warning#");
                    _.forEach(tagArray, (divText, counter) => {
                        if (divText.length > 0) {
                            let paragraph = document.createElement("span");
                            paragraph.innerText = divText;
                            if (counter == 1) {
                                paragraph.innerText = " " + divText + " ";
                                paragraph.classList.add('warning');
                            }
                            else {
                                paragraph.classList.add('normalSpan');
                            }
                            this.tipText.append(paragraph);
                        }
                    });
                    return;
                }
                if (_.includes(text, "#opponent#")) {
                    while (this.tipText.firstChild) {
                        this.tipText.removeChild(this.tipText.firstChild);
                    }
                    let tagArray = text.split("#opponent#");
                    _.forEach(tagArray, (divText, counter) => {
                        if (divText.length > 0) {
                            let paragraph = document.createElement("span");
                            paragraph.innerText = divText;
                            if (counter == 1) {
                                paragraph.innerText = " " + divText + " ";
                                paragraph.classList.add('opponent');
                                paragraph.style.color = '#' + ('00000' + (Pockey.PockeySettings.OPPONENT_COLOR | 0).toString(16)).substr(-6);
                            }
                            else {
                                paragraph.classList.add('normalSpan');
                            }
                            this.tipText.append(paragraph);
                        }
                    });
                    return;
                }
                this.tipText.innerText = text;
            }
            onUpdateCurrentPlayerTimer(params) {
                let time = params[0];
                let playerType = params[1];
                let animateText = params[2];
                if (this.playerGraphicsInterface.player.type == playerType) {
                    this.playerGraphicsInterface.graphics.updateTimer(time);
                    this.opponentGraphicsInterface.graphics.resetTimer();
                    if (animateText)
                        this.playerGraphicsInterface.graphics.animateTimer();
                }
                else {
                    this.opponentGraphicsInterface.graphics.updateTimer(time);
                    this.playerGraphicsInterface.graphics.resetTimer();
                    if (animateText)
                        this.opponentGraphicsInterface.graphics.animateTimer();
                }
            }
            onResizeBackground(params) {
                this.poolTableScaleFactor = params[0];
            }
            onReset(param) {
                this.leftGameGraphics.reset();
                this.rightGameGraphics.reset();
            }
            onSetSides(params) {
                if (this.playerGraphicsInterface.player.side == 'left') {
                    this.playerGraphicsInterface.graphics = this.leftGameGraphics;
                    this.opponentGraphicsInterface.graphics = this.rightGameGraphics;
                }
                else {
                    this.playerGraphicsInterface.graphics = this.rightGameGraphics;
                    this.opponentGraphicsInterface.graphics = this.leftGameGraphics;
                }
                this.playerGraphicsInterface.graphics.updateUsername(this.playerGraphicsInterface.player.nickname);
                this.playerGraphicsInterface.graphics.tint(this.playerGraphicsInterface.player.color);
                this.playerGraphicsInterface.graphics.updateScore(this.playerGraphicsInterface.player.score);
                this.playerGraphicsInterface.graphics.updateAvatar(this.playerGraphicsInterface.player.avatarID);
                console.log("intra la set sides");
                this.opponentGraphicsInterface.graphics.updateUsername(this.opponentGraphicsInterface.player.nickname);
                this.opponentGraphicsInterface.graphics.tint(this.opponentGraphicsInterface.player.color);
                this.opponentGraphicsInterface.graphics.updateScore(this.opponentGraphicsInterface.player.score);
                this.opponentGraphicsInterface.graphics.updateAvatar(this.opponentGraphicsInterface.player.avatarID);
                this.onUpdateMatchCircles();
            }
            onUpdateScore() {
                this.playerGraphicsInterface.graphics.updateScore(this.playerGraphicsInterface.player.score);
                this.opponentGraphicsInterface.graphics.updateScore(this.opponentGraphicsInterface.player.score);
            }
            onUpdateOpponentScore(score) {
                this.opponentGraphicsInterface.graphics.updateScore(score);
            }
            handleDesktopLandscape() {
                let newHeight = (0.11 * Settings.stageHeight);
                let scaleFactor = newHeight / this.initialBoardHeight;
                let scaleString = "translate(-50%, -50%) scale(" + scaleFactor.toString() + ")";
                this.scoreBoard.style.transform = scaleString;
            }
            onResizeMobileLandscape() {
            }
            onResizeMobilePortrait() {
            }
            defineTextStyles() {
            }
            addElements() {
                this.addLeftGameGraphics();
                this.addRightGameGraphics();
                this.addTipText();
            }
            addTipText() {
                this.tipText = document.getElementById("SpansHolder");
            }
            addTipTextMobile() {
            }
            addLeftGameGraphics() {
                this.leftGameGraphics = new UserInterface.PockeyUserGameGraphics("left", document.getElementById("PlayerScoreBoardLeft"));
            }
            addRightGameGraphics() {
                this.rightGameGraphics = new UserInterface.PockeyUserGameGraphics("right", document.getElementById("PlayerScoreBoardRight"));
            }
        }
        UserInterface.PockeyUiGameScreen = PockeyUiGameScreen;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        var AbstractScreen = Framework.UserInterface.AbstractScreen;
        class PockeyUiOpponentFoundScreen extends AbstractScreen {
            constructor() {
                super();
            }
            assignDivs() {
                super.assignDivs();
                this.div = document.getElementById("PlayerFoundScreen");
                this.avatarDiv = document.getElementById("OpponentAvatarImage");
                this.nameDiv = document.getElementById("PlayerFoundName");
                this.roundBeginsText = document.getElementById("RoundOneStartsText");
                this.titleDiv = document.getElementById("PlayerFoundTitle");
            }
            show(params) {
                super.show(params);
                if (params == UserInterface.RoundCompleteType.rematch) {
                    this.titleDiv.innerText = "rematch";
                }
                else {
                    this.titleDiv.innerText = "opponent found";
                }
            }
            hide() {
                super.hide();
            }
            updateText(text) {
                this.roundBeginsText.innerText = "first round starts in " + text;
            }
            updateAvatar(avatarID) {
                let avatarPath = "";
                _.forEach(Pockey.PockeySettings.LARGE_AVATARS_ARRAY, (avatarVO) => {
                    if (avatarVO.id == avatarID) {
                        avatarPath = avatarVO.icon;
                        return true;
                    }
                });
                this.avatarDiv.style.background = "center / contain no-repeat #1a4157 url(" + avatarPath + ")";
            }
            updateOpponentName() {
                this.nameDiv.innerText = Pockey.PockeySettings.OPPONENT_NICKNAME;
            }
        }
        UserInterface.PockeyUiOpponentFoundScreen = PockeyUiOpponentFoundScreen;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        var Settings = Framework.Settings;
        class PockeyUiMainScreenMobile extends UserInterface.PockeyUiMainScreen {
            defineElements() {
                this.rightSide = document.getElementById("RightSideBackground");
                this.mainButtonsHolder = document.getElementById("MainButtonsHolder");
                this.backButton = document.getElementById("BackToMainMenuButton");
                this.backBg = document.getElementById("MainMenuBg");
                this.menuTitle = document.getElementById("MenuTitleSpan");
                this.menuLogo = document.getElementById("MenuLogo");
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
                _.forEach(this.mainMenuButtons, (element) => {
                    element.setAttribute('clicked', 'false');
                    element.onclick = () => {
                        element.setAttribute("clicked", "true");
                        switch (element.id) {
                            case this.playGameButton.id: {
                                this.menuTitle.innerText = "PLAY GAME";
                                this.menuLogo.style.background = "center / contain no-repeat url(" + Settings.desktopAssetsPath + "/Images/start_game_icon.svg" + ")";
                                this.showPlayGameMenu();
                                break;
                            }
                            case this.inventoryButton.id: {
                                this.menuTitle.innerText = "INVENTORY";
                                this.menuLogo.style.background = "center / contain no-repeat url(" + Settings.desktopAssetsPath + "/Images/overlay_inventory.svg" + ")";
                                this.showInventoryMenu();
                                break;
                            }
                            case this.inviteFriendButton.id: {
                                this.menuTitle.innerText = "INVITE FRIENDS";
                                this.menuLogo.style.background = "center / contain no-repeat url(" + Settings.desktopAssetsPath + "/Images/overlay_invitefriend.svg" + ")";
                                this.showInviteMenu();
                                break;
                            }
                            case this.leaderboardButton.id: {
                                this.menuTitle.innerText = "LEADERBOARD";
                                this.menuLogo.style.background = "center / contain no-repeat url(" + Settings.desktopAssetsPath + "/Images/title_crown.svg" + ")";
                                this.showLeaderboardMenu();
                                break;
                            }
                        }
                        _.forEach(this.mainMenuButtons, (otherElement) => {
                            if (otherElement != element) {
                                otherElement.setAttribute("clicked", "false");
                            }
                        });
                    };
                });
                this.backButton.onclick = () => {
                    this.hideElement(this.rightSide);
                    this.hideElement(this.backBg);
                    this.showElement(this.mainButtonsHolder, "block");
                };
            }
            showElement(element, displayType) {
                element.style.display = (!displayType) ? "flex" : displayType;
            }
            showPlayGameMenu() {
                console.log("intra la show play");
                this.showElement(this.backBg);
                this.showElement(this.rightSide);
                this.hideElement(this.mainButtonsHolder);
                super.showPlayGameMenu();
            }
            showInventoryMenu() {
                this.showElement(this.backBg);
                console.log("intra la show inventory");
                this.showElement(this.rightSide);
                this.hideElement(this.mainButtonsHolder);
                super.showInventoryMenu();
            }
            showLeaderboardMenu() {
                this.showElement(this.backBg);
                console.log("intra la show leaderboard");
                this.showElement(this.rightSide);
                this.hideElement(this.mainButtonsHolder);
                super.showLeaderboardMenu();
            }
            showInviteMenu() {
                this.showElement(this.backBg);
                console.log("intra la show invite");
                this.showElement(this.rightSide);
                this.hideElement(this.mainButtonsHolder);
                super.showInviteMenu();
            }
            setVisibleFalse() {
                this.mainMenuElementsHolder.style.display = "none";
                this.backBg.style.display = "none";
            }
            setVisibleTrue() {
                this.mainMenuElementsHolder.style.display = "block";
                this.backBg.style.display = "flex";
            }
        }
        UserInterface.PockeyUiMainScreenMobile = PockeyUiMainScreenMobile;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        var AbstractUserInterfaceModule = Framework.UserInterface.AbstractUserInterfaceModule;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var SignalsType = Framework.Signals.SignalsType;
        var Settings = Framework.Settings;
        var PockeySoundURLS = Pockey.Sound.PockeySoundURLS;
        class PockeyUserInterfaceModule extends AbstractUserInterfaceModule {
            constructor() {
                super();
            }
            createElements() {
                if (Settings.isMobile) {
                    this.mainScreen = new UserInterface.PockeyUiMainScreenMobile();
                }
                else {
                    this.mainScreen = new UserInterface.PockeyUiMainScreen();
                }
                this.searchingScreen = new UserInterface.PockeyUiSearchingScreen();
                this.gameScreen = new UserInterface.PockeyUiGameScreen();
                this.roundCompleteScreen = new UserInterface.RoundCompleteScreen();
                this.opponentFoundScreen = new UserInterface.PockeyUiOpponentFoundScreen();
                this.activeRoundScreen = this.opponentFoundScreen;
                super.createElements();
            }
            registerSignalsHandlers() {
                super.registerSignalsHandlers();
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_MAIN_MENU, this.onShowMainMenu.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_MAIN_MENU, this.onHideMainMenu.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_GAME_UI, this.onShowGameMenu.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_GAME_UI, this.onHideGameMenu.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_SEARCHING_SCREEN, this.onShowSearchingScreen.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_SEARCHING_SCREEN, this.onHideSearchingScreen.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_ROUND_COMPLETE_SCREEN, this.onShowRoundScreen.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_ROUND_COMPLETE_SCREEN, this.onHideRoundCompleteScreen.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_OPPONENT_FOUND_SCREEN, this.onShowOpponentFoundScreen.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_OPPONENT_FOUND_SCREEN, this.onHideOpponentFoundScreen.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_CURRENT_ROUND_SCREEN_TEXT, this.onUpdateCurrentScreenText.bind(this));
            }
            onHideOpponentFoundScreen() {
                this.opponentFoundScreen.hide();
            }
            onHideRoundCompleteScreen() {
                this.roundCompleteScreen.hide();
            }
            onUpdateCurrentScreenText(params) {
                this.activeRoundScreen.updateText(params[0]);
            }
            onShowRoundScreen(params) {
                console.log("se arata on show winning!");
                this.onHideOpponentFoundScreen();
                this.onHideSearchingScreen();
                this.activeRoundScreen = this.roundCompleteScreen;
                this.roundCompleteScreen.show(params[0]);
            }
            onShowOpponentFoundScreen(params) {
                this.activeRoundScreen = this.opponentFoundScreen;
                this.opponentFoundScreen.show(params[0]);
            }
            onShowSearchingScreen() {
                this.searchingScreen.setVisibleTrue();
            }
            onHideSearchingScreen() {
                this.searchingScreen.setVisibleFalse();
            }
            onShowMainMenu() {
                this.mainScreen.setVisibleTrue();
                SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{ soundName: PockeySoundURLS.MAIN_MENU_AMBIANCE }]);
                SignalsManager.DispatchSignal(SignalsType.STOP_SOUND, [{ soundName: PockeySoundURLS.IN_GAME_AMBIANCE }]);
            }
            onHideMainMenu() {
                this.mainScreen.setVisibleFalse();
            }
            onShowGameMenu() {
                this.gameScreen.show();
                SignalsManager.DispatchSignal(SignalsType.STOP_SOUND, [{ soundName: PockeySoundURLS.MAIN_MENU_AMBIANCE }]);
                SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{
                        soundName: PockeySoundURLS.IN_GAME_AMBIANCE,
                        loop: true
                    }]);
            }
            onHideGameMenu() {
                this.gameScreen.hide();
                SignalsManager.DispatchSignal(SignalsType.STOP_SOUND, [{ soundName: PockeySoundURLS.IN_GAME_AMBIANCE }]);
                SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{
                        soundName: PockeySoundURLS.MAIN_MENU_AMBIANCE,
                        loop: false
                    }]);
            }
            onResize(params) {
                super.onResize(params);
            }
            handleDesktopLandscape() {
                super.handleDesktopLandscape();
                if (this.gameScreen)
                    this.gameScreen.handleDesktopLandscape();
            }
            handleMobilePortrait() {
                super.handleMobilePortrait();
                if (this.gameScreen)
                    this.gameScreen.onResizeMobilePortrait();
            }
            handleMobileLandscape() {
                super.handleMobileLandscape();
                if (this.gameScreen)
                    this.gameScreen.onResizeMobileLandscape();
            }
        }
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
    var PockeySoundURLS = Pockey.Sound.PockeySoundURLS;
    class PockeyEntryPoint extends AbstractEntryPoint {
        constructor() {
            super();
            this.fixedTimeStep = 1 / 60;
            this.maxSubSteps = 6;
            this.name = "PockeyEntryPoint";
        }
        checkDevice() {
            super.checkDevice();
            if (Settings.isMobile) {
                this.loadjscssfile("css/mainMenuScreenMobile.css", "css");
                this.loadjscssfile("css/inventoryScreenMobile.css", "css");
                this.loadjscssfile("css/leaderboardMobile.css", "css");
            }
        }
        loadjscssfile(filename, filetype) {
            let myCSS = document.createElement("link");
            myCSS.rel = "stylesheet";
            myCSS.href = filename;
            document.head.insertBefore(myCSS, document.head.childNodes[document.head.childNodes.length - 1].nextSibling);
        }
        addFontsToLoad() {
            super.addFontsToLoad();
            this.assetsLoader.addFontToLoad("troika");
            this.assetsLoader.addFontToLoad("opensansextrabold");
        }
        addModules() {
            this.gameModule = this.getGameModule();
            this.registerModule(this.gameModule);
            super.addModules();
        }
        getGameModule() {
            let gameModule = new PockeyGameModule();
            gameModule.Name = "GameModule";
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey_main.json");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey_main.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey-decals.json");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey-decals.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey-sticks.json");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey-sticks.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/table_bottom.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/goalie_bottom.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/goalie_color.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/goalie_top.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/ballTexture.jpg");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/table_felt.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/table_bumper.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/table_border_01.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/ballGraphics/puck2.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/ui_versus-main.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/menu_pockeyball-comet.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/menu_sprite-cue.png");
            _.forEach(Pockey.PockeySettings.LARGE_CUES_ARRAY, (vo) => {
                gameModule.addAssetToLoad(vo.icon);
                gameModule.addAssetToLoad(vo.model);
            });
            gameModule.addAssetToLoad(PockeySoundURLS.MAIN_MENU_AMBIANCE);
            gameModule.addAssetToLoad(PockeySoundURLS.IN_GAME_AMBIANCE);
            gameModule.addAssetToLoad(PockeySoundURLS.SHOOT_BALL);
            gameModule.addAssetToLoad(PockeySoundURLS.LAST_FIVE_SECONDS);
            gameModule.addAssetToLoad(PockeySoundURLS.OPPONENT_FOUND);
            gameModule.addAssetToLoad(PockeySoundURLS.BALL_TO_BALL_HIT);
            gameModule.addAssetToLoad(PockeySoundURLS.GOALKEEPER_HIT);
            gameModule.addAssetToLoad(PockeySoundURLS.BALL_IN_POCKET);
            gameModule.Layer = this.getLayer(Layers.GameLayer);
            return gameModule;
        }
        getUIModule() {
            let uiModule = new PockeyUserInterfaceModule();
            uiModule.Name = "PockeyUIModule";
            uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/menu_background.svg");
            uiModule.Layer = this.getLayer(Layers.UILayer);
            return uiModule;
        }
        getBackgroundModule() {
            let backgroundModule = new PockeyBackgroundModule();
            backgroundModule.registerBackground(Pockey.PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME, Settings.desktopAssetsPath + "/Images/Backgrounds/game_bg.png", document.getElementById("SecondBackground"));
            backgroundModule.Name = "PockeyBackgroundModule";
            backgroundModule.addAssetToLoad(Settings.desktopAssetsPath + "/Images/Backgrounds/game_bg.png");
            backgroundModule.Layer = this.getLayer(Layers.BackgroundLayer);
            return backgroundModule;
        }
        getConnectionModule() {
            let connectionModule = new PockeyConnectionModule();
            connectionModule.Name = 'PockeyConnectionModule';
            return connectionModule;
        }
        initializeSingletons() {
            super.initializeSingletons();
            PockeyStateMachine.Instance();
            GameManager.Instance();
            MouseHandler.Instance();
            P2WorldManager.Instance();
        }
        initializePixi() {
            P2WorldManager.Instance().world = new p2.World({
                gravity: [0, 0]
            });
            super.initializePixi();
        }
        frameAnimate() {
            super.frameAnimate();
            this.animate(Date.now());
        }
        animate(time) {
            let timeSeconds = time / 1000;
            this.lastTimeMilliseconds = this.lastTimeMilliseconds || timeSeconds;
            let timeSinceLastCall = timeSeconds - this.lastTimeMilliseconds;
            P2WorldManager.Instance().world.step(this.fixedTimeStep, timeSinceLastCall, this.maxSubSteps);
        }
        registerSignals() {
            super.registerSignals();
            SignalsManager.CreateNewSignal(PockeySignalTypes.CHECK_USER_DATA);
            SignalsManager.CreateNewSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
            SignalsManager.CreateNewSignal(PockeySignalTypes.PLAYER_SIGNED_IN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.PLAYER_SIGNED_OUT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.GOOGLE_SIGN_IN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.GOOGLE_SIGN_OUT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.FACEBOOK_SIGN_IN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.FACEBOOK_SIGN_OUT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOOT_BALL);
            SignalsManager.CreateNewSignal(PockeySignalTypes.PREPARE_NEXT_TURN);
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
            SignalsManager.CreateNewSignal(PockeyConnectionSignals.OPPONENT_NEXT_ROUND);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOW_MAIN_MENU);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_MAIN_MENU);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOW_POOLTABLE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_POOLTABLE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOW_SEARCHING_SCREEN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_SEARCHING_SCREEN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOW_GAME_UI);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_GAME_UI);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_WINNING_MESSAGE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOW_ROUND_COMPLETE_SCREEN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_ROUND_COMPLETE_SCREEN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SHOW_OPPONENT_FOUND_SCREEN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.HIDE_OPPONENT_FOUND_SCREEN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.START_GAME);
            SignalsManager.CreateNewSignal(PockeySignalTypes.RESET_POOLTABLE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.RESET_STICK_POWER);
            SignalsManager.CreateNewSignal(PockeySignalTypes.RESET_GAME_SCREEN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.RESTART_GAME_BUTTON_CLICKED);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SET_SIDES_TYPE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_UI_SCORE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SEND_ELEMENTS_DATA_TO_MANAGER);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_STATE_TEXT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_UI_TEXT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_MATCH_CIRCLES);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_PLAYER_COLOR);
            SignalsManager.CreateNewSignal(PockeySignalTypes.ON_WATCH_FINISHED);
            SignalsManager.CreateNewSignal(PockeySignalTypes.CREATE_POOLTABLE_STATE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.APPLY_POOLTABLE_STATE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_CURRENT_ROUND_SCREEN_TEXT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.CHANGE_WHITE_BALL_STATUS);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_STICK_SKIN);
            SignalsManager.CreateNewSignal(PockeySignalTypes.CHANGE_POOLTABLE_DECAL);
            SignalsManager.CreateNewSignal(PockeySignalTypes.CHANGE_POOLTABLE_FELT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.ASSIGN_PLAYER);
            SignalsManager.CreateNewSignal(PockeySignalTypes.MAIN_MENU_BUTTON_CLICKED);
            SignalsManager.CreateNewSignal(PockeySignalTypes.REMATCH_CONFIRM_BUTTON_CLICKED);
        }
    }
    Pockey.PockeyEntryPoint = PockeyEntryPoint;
})(Pockey || (Pockey = {}));
let mainModule;
document.addEventListener("windowLoaded", function () {
    mainModule = new Pockey.PockeyEntryPoint();
    window.onresize = (event) => {
        mainModule.windowResize(window.innerWidth, window.innerHeight);
    };
});

//# sourceMappingURL=main.js.map
