var Pockey;
(function (Pockey) {
    let SignalsModule;
    (function (SignalsModule) {
        class PockeySignalTypes {
        }
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
        SignalsModule.PockeySignalTypes = PockeySignalTypes;
        class PockeyConnectionSignals {
        }
        PockeyConnectionSignals.WATCH = "PockeyConnectionSignals." + "WATCH";
        PockeyConnectionSignals.SCORE_UPDATE = "PockeyConnectionSignals." + "SCORE_UPDATE";
        PockeyConnectionSignals.YOUR_TURN = "PockeyConnectionSignals." + "YOUR_TURN";
        PockeyConnectionSignals.OPPONENT_SETTINGS = "PockeyConnectionSignals." + "OPPONENT_SETTINGS";
        PockeyConnectionSignals.OPPONENT_RESTART_GAME = "PockeyConnectionSignals." + "OPPONENT_RESTART_GAME";
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
        Signals.SignalsType = SignalsType;
        class ConnectionSignalsType {
        }
        ConnectionSignalsType.CREATE_SOCKET_IO_CONNECTION = "ConnectionSignalsType." + 'CREATE_SOCKET_IO_CONNECTION';
        ConnectionSignalsType.SOCKET_IO_CONNECTION_CREATED = "ConnectionSignalsType." + 'SOCKET_IO_CONNECTION_CREATED';
        ConnectionSignalsType.SOCKET_IO_DISCONNECTED = "ConnectionSignalsType." + "SOCKET_IO_DISCONNECTED";
        ConnectionSignalsType.PRIVATE_MESSAGE = "ConnectionSignalsType." + "PRIVATE_MESSAGE";
        ConnectionSignalsType.UPDATE_SOCKET_ID = "ConnectionSignalsType." + "UPDATE_SOCKET_ID";
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
    Settings.singlePlayer = true;
    Settings.showSignalsDispatchSignalLog = false;
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
            PockeyStates[PockeyStates["onGameEnd"] = 3] = "onGameEnd";
            PockeyStates[PockeyStates["onDefineClient"] = 4] = "onDefineClient";
            PockeyStates[PockeyStates["onSearchForPartner"] = 5] = "onSearchForPartner";
            PockeyStates[PockeyStates["onWatch"] = 6] = "onWatch";
            PockeyStates[PockeyStates["onRearrangeStick"] = 7] = "onRearrangeStick";
            PockeyStates[PockeyStates["onRepositionWhiteBall"] = 8] = "onRepositionWhiteBall";
            PockeyStates[PockeyStates["onShoot"] = 9] = "onShoot";
            PockeyStates[PockeyStates["onEndTurn"] = 10] = "onEndTurn";
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
            }
            changeState(state) {
                if (!PockeyStates[state]) {
                    console.log("%c StateMachine -> state does not exist: " + state, "color: #000000; bacground:#ff9900");
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
                arrowPoint.x = aX + Math.cos(radians) * (gap);
                arrowPoint.y = aY + Math.sin(radians) * (gap);
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
                        document.onmousemove = MouseHandler.Instance().handleMouseMove.bind(this);
                        document.onmousedown = MouseHandler.Instance().handleMouseDown.bind(this);
                        document.onmouseup = MouseHandler.Instance().handleMouseUp.bind(this);
                        MouseHandler.Instance().reset();
                    }
                }
                return MouseHandler.instance;
            }
            handleMouseMove(e) {
                let x = e.pageX;
                let y = e.pageY;
                MouseHandler.Instance().position = new Point(x, y);
            }
            handleMouseDown(e) {
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
            }
            handleMouseUp(e) {
                if (e.button == 0) {
                    MouseHandler.Instance().left.down = false;
                }
                else if (e.button == 1) {
                    MouseHandler.Instance().middle.down = false;
                }
                else if (e.button == 2) {
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
                var angle = Math.atan2(this.position.x - vector.x, -(this.position.y - vector.y)) * (180 / Math.PI);
                return angle;
            }
        }
        Utils.MouseHandler = MouseHandler;
    })(Utils = Framework.Utils || (Framework.Utils = {}));
})(Framework || (Framework = {}));
var Pockey;
(function (Pockey) {
    class PockeySettings {
    }
    PockeySettings.PLAYER_COLOR = 0xC5384C;
    PockeySettings.PLAYER_SOCKET_ID = "";
    PockeySettings.PLAYER_NAME = "SandruPlayer";
    PockeySettings.OPPONENT_COLOR = 0x15D3E9;
    PockeySettings.OPPONENT_SOCKET_ID = "";
    PockeySettings.OPPONENT_NAME = "SandruOpponent";
    PockeySettings.DELTA = 0.98;
    PockeySettings.BALL_RADIUS = 17;
    PockeySettings.P2_WORLD_STEP = 1 / 60;
    PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME = "pockey_custom_background_name";
    PockeySettings.PUCK_COLOR = 0xe4b31c;
    PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER = 7;
    PockeySettings.STICK_MAX_POWER = 108;
    PockeySettings.COLORS = [0x1BE7FF, 0xBAFF29, 0xFEE505, 0xFFA5AB];
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
    Pockey.PockeySettings = PockeySettings;
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let GameModule;
    (function (GameModule) {
        let MaterialType;
        (function (MaterialType) {
            MaterialType[MaterialType["BALL_MATERIAL"] = 1] = "BALL_MATERIAL";
            MaterialType[MaterialType["SHADOW_MATERIAL"] = 2] = "SHADOW_MATERIAL";
            MaterialType[MaterialType["LINE_MATERIAL"] = 3] = "LINE_MATERIAL";
            MaterialType[MaterialType["BALL_ONLY_MATERIAL"] = 4] = "BALL_ONLY_MATERIAL";
            MaterialType[MaterialType["PUCK_ONLY_MATERIAL"] = 5] = "PUCK_ONLY_MATERIAL";
            MaterialType[MaterialType["PUCK_MATERIAL"] = 6] = "PUCK_MATERIAL";
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
                    console.log("c%" + " " + P2WorldManager.name + " -> ERROR: material not registered");
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
            }
            static defineContactMaterials() {
                let ballToNormalLineContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.LINE_MATERIAL), {
                    friction: 0.68,
                    restitution: 0.6821,
                    relaxation: 10
                });
                let ballToBallContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), {
                    friction: 0.2,
                    restitution: 0.9
                });
                P2WorldManager.Instance().world.addContactMaterial(ballToBallContactMaterial);
                let ballToPuckContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_MATERIAL), {
                    friction: 0.2,
                    restitution: 0.9
                });
                P2WorldManager.Instance().world.addContactMaterial(ballToPuckContactMaterial);
                P2WorldManager.Instance().world.addContactMaterial(ballToNormalLineContactMaterial);
                let ballToPuckOnlyLineContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_ONLY_MATERIAL), {
                    friction: 0.4,
                    restitution: 0.6
                });
                P2WorldManager.Instance().world.addContactMaterial(ballToPuckOnlyLineContactMaterial);
                let puckToNormalLineContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.LINE_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_MATERIAL), {
                    surfaceVelocity: 88,
                    friction: 0.6,
                    restitution: 0.6,
                    relaxation: 10
                });
                P2WorldManager.Instance().world.addContactMaterial(puckToNormalLineContactMaterial);
                let puckToBallOnlyLineContactMaterial = new p2.ContactMaterial(P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_ONLY_MATERIAL), P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_MATERIAL), {
                    stiffness: 888,
                    friction: 20,
                    restitution: 0.4
                });
                P2WorldManager.Instance().world.addContactMaterial(puckToBallOnlyLineContactMaterial);
                P2WorldManager.Instance().world.on("preSolve", (evt) => {
                    _.forEach(evt.contactEquations, (ce) => {
                        if ((ce.shapeA.material.id == MaterialType.PUCK_MATERIAL && ce.shapeB.material.id == MaterialType.PUCK_ONLY_MATERIAL)
                            || (ce.shapeA.material.id == MaterialType.BALL_MATERIAL && ce.shapeB.material.id == MaterialType.BALL_ONLY_MATERIAL)
                            || (ce.shapeA.material.id == MaterialType.BALL_MATERIAL && ce.shapeB.material.id == MaterialType.SHADOW_MATERIAL)
                            || (ce.shapeA.material.id == MaterialType.SHADOW_MATERIAL && ce.shapeB.material.id == MaterialType.BALL_MATERIAL)
                            || (ce.shapeA.material.id == MaterialType.PUCK_MATERIAL && ce.shapeB.material.id == MaterialType.SHADOW_MATERIAL)
                            || (ce.shapeA.material.id == MaterialType.SHADOW_MATERIAL && ce.shapeB.material.id == MaterialType.PUCK_MATERIAL)) {
                            ce.enabled = false;
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
            constructor(onLoadCompleteCallback) {
                this.loader = PIXI.loader;
                this.assetsNames = [];
                this.loader.onComplete.add(() => {
                    SignalsManager.DispatchSignal(SignalsType.ASSETS_LOADED);
                });
                this.loader.onProgress.add(() => {
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
                        urls: ['/fonts.css']
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
        var Sprite = PIXI.Sprite;
        var AbstractModule = Framework.Abstracts.AbstractModule;
        var SignalsManager = Framework.Signals.SignalsManager;
        var SignalsType = Framework.Signals.SignalsType;
        class AbstractBackgroundModule extends AbstractModule {
            constructor() {
                super();
                this.addAssetToLoad(Framework.Settings.desktopAssetsPath + Framework.Settings.backgroundsPath + "main_bg.png");
                this.registerBackground(Framework.Settings.mainBackgroundName, Framework.Settings.desktopAssetsPath + Framework.Settings.backgroundsPath + "main_bg.png");
            }
            registerSignalsHandlers() {
                super.registerSignalsHandlers();
                SignalsManager.AddSignalCallback(SignalsType.CHANGE_BACKGROUND, this.onChangeBackground.bind(this));
            }
            onChangeBackground(param) {
                this.changeBackground(param[0].toString(), +param[1]);
            }
            registerBackground(name, texturePath) {
                if (!this.backgroundsPaths)
                    this.backgroundsPaths = {};
                this.backgroundsPaths[name] = texturePath;
            }
            createElements() {
                super.createElements();
                this.backgrounds = {};
                _.forEach(this.backgroundsPaths, (path, id) => {
                    this.backgrounds[id] = new Sprite(PIXI.Texture.fromFrame(path));
                    this.backgrounds[id].anchor.x = 0.5;
                    this.backgrounds[id].anchor.y = 0.5;
                });
            }
            changeBackground(id, fadeTime) {
                if (this.backgrounds[id]) {
                    let newBackground = this.backgrounds[id];
                    newBackground.alpha = 0;
                    this.addChild(newBackground);
                    if (!_.isUndefined(this.currentBackground) && !_.isNull(this.currentBackground)) {
                        let oldBackground = this.currentBackground;
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
            }
            removeBackgroundFromParent(background) {
                if (background && background.parent)
                    background.parent.removeChild(background);
            }
            onResize(params) {
                super.onResize(params);
                if (this.currentBackground && this.currentBackground == this.backgrounds[Framework.Settings.mainBackgroundName]) {
                    this.currentBackground.height = Framework.Settings.stageHeight;
                    let scale = this.currentBackground.scale.y;
                    this.currentBackground.scale.x = scale;
                    if (this.currentBackground.width < Framework.Settings.stageWidth) {
                        this.currentBackground.width = Framework.Settings.stageWidth;
                        scale = this.currentBackground.scale.x;
                        this.currentBackground.scale.y = scale;
                    }
                    this.currentBackground.x = Framework.Settings.stageWidth / 2;
                    this.currentBackground.y = Framework.Settings.stageHeight / 2;
                }
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
        FrameworkSocketEvents.privateMessage = "FrameworkSocketEvents" + "privateMessage";
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
            initializeClientSockets() {
                this.initializeSearchingSocket();
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
        var AbstractModule = Framework.Abstracts.AbstractModule;
        var SocketClient = Framework.Connection.SocketClient;
        var ConnectionSignalsType = Framework.Signals.ConnectionSignalsType;
        var SignalsManager = Framework.Signals.SignalsManager;
        class AbstractConnectionModule extends AbstractModule {
            constructor() {
                super();
                this.Name = "AbstractConnectionModule";
            }
            registerSignalsHandlers() {
                super.registerSignalsHandlers();
                if (!Framework.Settings.singlePlayer) {
                    SignalsManager.AddSignalCallback(ConnectionSignalsType.CREATE_SOCKET_IO_CONNECTION, this.onCreateSocketIoConnection.bind(this));
                    SignalsManager.AddSignalCallback(ConnectionSignalsType.SOCKET_IO_DISCONNECTED, this.onSocketIoDisconnected.bind(this));
                    SignalsManager.AddSignalCallback(ConnectionSignalsType.PRIVATE_MESSAGE, this.onPrivateMessage.bind(this));
                    SignalsManager.AddSignalCallback(ConnectionSignalsType.UPDATE_SOCKET_ID, this.onUpdateSocketID.bind(this));
                }
            }
            onUpdateSocketID(params) {
                Framework.Settings.socketID = params[0];
            }
            onSocketIoDisconnected() {
            }
            onPrivateMessage(params) {
                this.socketClient.sendPrivateMessage(params);
            }
            onCreateSocketIoConnection() {
                if (_.isNull(this.socketClient) || _.isUndefined(this.socketClient)) {
                    this.socketClient = this.getSocketIoClient();
                }
                this.socketClient.initializeClientSockets();
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
    class AbstractEntryPoint {
        constructor() {
            this.name = "";
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
        initializePixi() {
            PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;
            AbstractEntryPoint.renderer = PIXI.autoDetectRenderer(Settings.stageWidth, Settings.stageHeight, {
                backgroundColor: 0x0f404b,
                antialias: true,
            });
            AbstractEntryPoint.renderer.view.style.position = "absolute";
            AbstractEntryPoint.renderer.view.style.top = "0px";
            AbstractEntryPoint.renderer.view.style.left = "0px";
            document.body.appendChild(AbstractEntryPoint.renderer.view);
            this.stage = new Container();
            this.frameAnimate();
        }
        addModules() {
            this.addConnectionModule();
            this.addBackgroundModule();
            this.addUIModule();
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
                this.assetsLoader = new AssetsLoader(this.onAssetsLoadComplete.bind(this));
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
            requestAnimationFrame(this.frameAnimate.bind(this));
            AbstractEntryPoint.renderer.render(this.stage);
        }
        getBackgroundModule() {
            let backgroundModule = new AbstractBackgroundModule();
            backgroundModule.Layer = this.getLayer(Framework.Layers.BackgroundLayer);
            return backgroundModule;
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
            console.log("la window resize: w - h : " + Settings.stageWidth, Settings.stageHeight);
            AbstractEntryPoint.renderer.resize(Settings.stageWidth, Settings.stageHeight);
            SignalsManager.DispatchSignal(SignalsType.WINDOW_RESIZE);
        }
        createLayers() {
            for (let i = 0; i < Framework.Layers.LayerOrder.length; i++) {
                let layerName = Framework.Layers.LayerOrder[i];
                let layer = new Container();
                layer.name = layerName;
                this.stage.addChild(layer);
            }
        }
        getLayer(layerName) {
            return this.stage.getChildByName(layerName);
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
            SignalsManager.CreateNewSignal(SignalsType.ASSETS_LOADED);
            SignalsManager.CreateNewSignal(SignalsType.MODULE_ELEMENTS_CREATED);
            SignalsManager.CreateNewSignal(SignalsType.ALL_MODULES_ELEMENTS_CREATED);
            SignalsManager.CreateNewSignal(SignalsType.WINDOW_RESIZE);
            SignalsManager.CreateNewSignal(SignalsType.CHANGE_BACKGROUND);
            SignalsManager.CreateNewSignal(ConnectionSignalsType.CREATE_SOCKET_IO_CONNECTION);
            SignalsManager.CreateNewSignal(ConnectionSignalsType.SOCKET_IO_CONNECTION_CREATED);
            SignalsManager.CreateNewSignal(ConnectionSignalsType.SOCKET_IO_DISCONNECTED);
            SignalsManager.CreateNewSignal(ConnectionSignalsType.PRIVATE_MESSAGE);
            SignalsManager.CreateNewSignal(ConnectionSignalsType.UPDATE_SOCKET_ID);
        }
        onModuleElementsCreated() {
            let modulesCounter = 0;
            _.forEach(this.gameModules, (module) => {
                if (module.ElementsCreated) {
                    modulesCounter++;
                }
            });
            if (modulesCounter == this.gameModules.length) {
                SignalsManager.DispatchSignal(SignalsType.ALL_MODULES_ELEMENTS_CREATED);
                SignalsManager.DispatchSignal(SignalsType.WINDOW_RESIZE);
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
            point.x = this.position.x + Math.cos(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            point.y = this.position.y + Math.sin(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            this.touchPoints.push(point);
            angle = 45 * Math.PI / 180;
            point = new Vector2();
            point.x = this.position.x + Math.cos(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            point.y = this.position.y + Math.sin(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            this.touchPoints.push(point);
            angle = 0 * Math.PI / 180;
            point = new Vector2();
            point.x = this.position.x + Math.cos(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            point.y = this.position.y + Math.sin(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            this.touchPoints.push(point);
            angle = -45 * Math.PI / 180;
            point = new Vector2();
            point.x = this.position.x + Math.cos(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            point.y = this.position.y + Math.sin(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            this.touchPoints.push(point);
            angle = -90 * Math.PI / 180;
            point = new Vector2();
            point.x = this.position.x + Math.cos(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            point.y = this.position.y + Math.sin(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            this.touchPoints.push(point);
            angle = -135 * Math.PI / 180;
            point = new Vector2();
            point.x = this.position.x + Math.cos(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            point.y = this.position.y + Math.sin(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            this.touchPoints.push(point);
            angle = 180 * Math.PI / 180;
            point = new Vector2();
            point.x = this.position.x + Math.cos(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            point.y = this.position.y + Math.sin(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            this.touchPoints.push(point);
            angle = 135 * Math.PI / 180;
            point = new Vector2();
            point.x = this.position.x + Math.cos(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
            point.y = this.position.y + Math.sin(angle) * (this.radius - Pockey.PockeySettings.BALL_RADIUS - 2);
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
        var Sprite = PIXI.Sprite;
        var Graphics = PIXI.Graphics;
        var Vector2 = Framework.Utils.Vector2;
        var AbstractEntryPoint = Framework.AbstractEntryPoint;
        var Settings = Framework.Settings;
        var Point = PIXI.Point;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        let BallType;
        (function (BallType) {
            BallType["Player"] = "PlayerBall";
            BallType["Opponent"] = "OpponentBall";
            BallType["White"] = "WhiteBall";
            BallType["Puck"] = "Puck";
        })(BallType = GameModule.BallType || (GameModule.BallType = {}));
        class AbstractBall extends Sprite {
            constructor(ballSide = "", id = 'ball') {
                super();
                this.defaultTextureName = Settings.desktopAssetsPath + "Images/color_big.png";
                this.defaultOverTextureName = Settings.desktopAssetsPath + "Images/color_big_over.png";
                this.defaultShadowTextureName = Settings.desktopAssetsPath + "Images/color_big_shadow.png";
                this.mass = 1.4;
                this.moving = false;
                this.minStopLimit = 0.1;
                this.defaultColor = 0xffffff;
                this.isInPocket = false;
                this.zRotationActive = false;
                this.numberTest = [];
                this.lastAngle = 0;
                this.prevX = 0;
                this.prevY = 0;
                this.newX = 0;
                this.newY = 0;
                this.ballIsInThePocket = false;
                this.canBeRemoved = false;
                this.finalPocketAnimationRightPoint = new Vector2();
                this.finalPocketAnimationLeftPoint = new Vector2();
                this.finalPocketAnimationCenterPoint = new Vector2();
                this.pocketsZIndex = 0;
                this.firstPocketAnimationDone = false;
                this.removed = false;
                this.zIndexSwitched = false;
                this.animationInProgress = false;
                this.ballValue = 1;
                this.removedFromArray = false;
                this.rot = [1, 0, 0, 1];
                this.moving = false;
                this.velocity = new Vector2();
                this.oldPos = new Vector2();
                this.delta = Pockey.PockeySettings.DELTA;
                this.radius = Pockey.PockeySettings.BALL_RADIUS;
                this.side = ballSide;
                this.name = this.side + id;
                this.changeDefaultTextureName();
                this.updateTexture();
                this.addP2Body();
            }
            addP2Body() {
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
                let circleShape2 = new p2.Circle({ radius: Pockey.PockeySettings.BALL_RADIUS + this.radius - 0 });
                circleShape2.material = new p2.Material(GameModule.MaterialType.SHADOW_MATERIAL);
                this.p2BodyShadow.addShape(circleShape2);
                GameModule.P2WorldManager.Instance().world.addBody(this.p2Body);
                GameModule.P2WorldManager.Instance().world.on("preSolve", (evt) => {
                    this.worldPreSolveHandler();
                }, this);
            }
            worldPreSolveHandler() {
                if (this.speed() < 50)
                    this.p2Body.velocity = [this.p2Body.velocity[0] * Pockey.PockeySettings.DELTA, this.p2Body.velocity[1] * Pockey.PockeySettings.DELTA];
            }
            getCircleMaterial() {
                return GameModule.P2WorldManager.Instance().getMaterialByID(GameModule.MaterialType.BALL_MATERIAL);
            }
            changeDefaultTextureName() {
            }
            updateTexture() {
                this.anchor.set(0.5, 0.5);
                this.ballTexture = new Sprite();
                let g = new Graphics();
                g.beginFill(0xffffff, 1);
                g.drawCircle(0, 0, this.radius);
                g.endFill();
                this.ballTexture.addChild(g);
                this.addChild(this.ballTexture);
                this.addGraphic();
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
                this.ballTexture.getChildAt(0).tint = color;
            }
            addGraphic() {
                this.g = new Graphics();
                if (this.ballType == BallType.Opponent) {
                    this.defaultColor = Pockey.PockeySettings.OPPONENT_COLOR;
                }
                else if (this.ballType == BallType.Player) {
                    this.defaultColor = Pockey.PockeySettings.PLAYER_COLOR;
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
            }
            update() {
                this.moving = this.p2Body.sleepState != p2.Body.SLEEPING;
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
                                this.canBeRemoved = true;
                                console.log("intra la can be removed fmm: " + this.name);
                                GameModule.P2WorldManager.Instance().world.removeBody(this.p2Body);
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
                                let testids = [];
                                idCounter = pointId;
                                if (direction == -1) {
                                    for (let i = 0; i < touchPointsArrayLength - 1; i++) {
                                        testids.push(idCounter);
                                        bezierPositions[i] = new Point(pocket.touchPoints[idCounter].x, pocket.touchPoints[idCounter].y);
                                        idCounter--;
                                        if (idCounter < 0)
                                            idCounter = touchPointsArrayLength - 1;
                                    }
                                    bezierPositions.shift();
                                }
                                else if (direction == 1) {
                                    for (let i = 0; i < touchPointsArrayLength; i++) {
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
                                let duration = 1 / (this.speed() / 60);
                                if (lastDirection == 0)
                                    duration *= 2.4;
                                else
                                    duration *= 2;
                                if (duration > 1.8)
                                    duration = 1.8;
                                this.animationInProgress = true;
                                this.ballInPocketAnimationTimeline = new TimelineMax();
                                this.ballInPocketAnimationTimeline.add(TweenMax.to(this, duration, {
                                    bezier: bezierPositions,
                                    ease: Linear.easeNone,
                                    onUpdate: this.onAnimationUpdate.bind(this),
                                    onUpdateParams: [pocket.x, pocket.y, pocket.radius],
                                    onComplete: this.declareAnimationFinished.bind(this)
                                }), 0);
                                this.ballInPocketAnimationTimeline.add(TweenMax.to(this.scale, duration - duration / 3, {
                                    x: 0.8,
                                    y: 0.8,
                                    ease: Linear.easeNone
                                }), 0);
                                this.ballInPocketAnimationTimeline.add(TweenMax.to(this.ballShadow.scale, (duration - duration / 3) / 2, {
                                    x: 0,
                                    y: 0,
                                    ease: Linear.easeNone
                                }), 0);
                                this.ballInPocketAnimationTimeline.add(TweenMax.to(this, (duration - duration / 3), {
                                    alpha: 0,
                                    ease: Linear.easeNone
                                }), duration / 3);
                                return;
                            }
                        }
                    });
                    if (this.canBeRemoved)
                        return;
                    if (!isCloserToPocket) {
                        if (p2BodyPos.x + this.radius > this.rightLimit) {
                            p2BodyPos.x = this.rightLimit - this.radius;
                        }
                        else if (p2BodyPos.x - this.radius < this.leftLimit) {
                            p2BodyPos.x = this.leftLimit + this.radius;
                        }
                        if (p2BodyPos.y + this.radius > this.downLimit) {
                            p2BodyPos.y = this.downLimit - this.radius;
                        }
                        else if (p2BodyPos.y - this.radius < this.upLimit) {
                            p2BodyPos.y = this.upLimit + this.radius;
                        }
                    }
                    this.x = p2BodyPos.x;
                    this.y = p2BodyPos.y;
                    this.ballShadow.x = p2BodyPos.x;
                    this.ballShadow.y = p2BodyPos.y;
                    this.oldPos.x = this.x;
                    this.oldPos.y = this.y;
                }
            }
            declareAnimationFinished() {
                this.animationInProgress = false;
                this.visible = false;
                if (this.parent)
                    this.parent.removeChild(this);
            }
            addShadowBody() {
                this.p2BodyShadow.position[0] = this.x;
                this.p2BodyShadow.position[1] = this.y;
                GameModule.P2WorldManager.Instance().world.addBody(this.p2BodyShadow);
            }
            onAnimationUpdate(x, y, radius) {
                this.moving = true;
                let ballPos = new Vector2(this.x, this.y);
                let pocketPos = new Vector2(x, y);
                let minDistance = radius - this.radius;
                let distance = pocketPos.distanceTo(ballPos);
                if (distance <= minDistance && !this.zIndexSwitched) {
                    this.ballAnimationHolder.addChildAt(this.ballShadow, 0);
                    this.ballAnimationHolder.addChild(this);
                    this.zIndexSwitched = true;
                }
            }
            set ballPosition(positionVector) {
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
            }
            get ballPosition() {
                return this._ballPosition;
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
            }
            createBallShadow() {
                this.ballShadow = new Graphics();
                this.ballShadow.beginFill(0x000000, 0.4);
                this.ballShadow.drawCircle(this.radius / 4, this.radius / 4, this.radius);
            }
            getBallData() {
                let ballData = {};
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
            }
            setBallData(ballData) {
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
                this.anchor.set(0.5, 0.5);
                this.SetDecalIcon(DecalType.Pockey);
            }
            SetDecalIcon(decalType) {
                let texture = PIXI.Texture.fromFrame(decalType.toString());
                this.texture = texture;
                this.alpha = 0.4;
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
        PockeySocketMessages.OPPONENT_RESTART_GAME = "PockeySocketMessages." + "OPPONENT_RESTART_GAME";
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
                this.stickPowerFactor = 9.81;
                this.mouseReleased = false;
                this.SetStickSkin(StickType.Default);
                this.initialPivotPoint = new Point(this.texture.width + 8, this.texture.height / 2);
                this.pivot = this.initialPivotPoint;
                this.defineShootTimeline();
            }
            SetStickSkin(stickType) {
                this.texture = PIXI.Texture.fromFrame(stickType.toString());
            }
            update() {
                if (!MouseHandler.Instance().left.down)
                    this.mouseReleased = true;
                if (this.isActive) {
                    if (MouseHandler.Instance().left.down && this.mouseReleased) {
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
                    if (this.rotationEnabled && (!MouseHandler.Instance().left.down || !this.mouseReleased)) {
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
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_BALL_RAY_GRAPHICS);
                this.shootTimeline.play(0);
            }
            reset() {
                this.isActive = false;
                this.rotationEnabled = false;
                this.clickPointRegistered = false;
                if (MouseHandler.Instance().left.down)
                    this.mouseReleased = false;
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
                SignalsManager.DispatchSignal(PockeySignalTypes.SHOOT_BALL);
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
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        class Puck extends GameModule.AbstractBall {
            constructor() {
                super();
                this.ballType = GameModule.BallType.Puck;
                this.name = "Puck";
                this.ballValue = 2;
                this.delta += 0.994;
                this.mass = 0.3;
                console.log("puck body id: " + this.p2Body.id);
            }
            worldPreSolveHandler() {
                if (this.speed() < 18)
                    this.p2Body.velocity = [this.p2Body.velocity[0] * Pockey.PockeySettings.DELTA, this.p2Body.velocity[1] * Pockey.PockeySettings.DELTA];
            }
            getCircleMaterial() {
                return GameModule.P2WorldManager.Instance().getMaterialByID(GameModule.MaterialType.PUCK_MATERIAL);
            }
            changeDefaultTextureName() {
                this.defaultTextureName = "ball-puck.png";
            }
            updateTexture() {
                this.radius = 25;
                super.updateTexture();
            }
            animatePocketCollision(pocketPosition, newX = null, newY = null) {
                let animationSpeed = 1 / this.speed();
                this.x = pocketPosition.x;
                TweenMax.to(this, animationSpeed, {
                    x: newX
                });
            }
            update() {
                this.moving = this.p2Body.sleepState != p2.Body.SLEEPING;
                if (this.moving && !this.canBeRemoved) {
                    let isCloserToGoal = false;
                    let goalPosition = new Vector2();
                    let p2BodyPos = new Vector2(this.p2Body.position[0], this.p2Body.position[1]);
                    let lastDirection = 0;
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
                    this.ballShadow.x = p2BodyPos.x;
                    this.ballShadow.y = p2BodyPos.y;
                    this.oldPos.x = this.x;
                    this.oldPos.y = this.y;
                }
            }
            declareAnimationFinished() {
                this.animationInProgress = false;
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
        class PoolTable extends Container {
            constructor() {
                super();
                this.ballsDistance = 108;
                this.playerStartXPos = 736;
                this.opponentStartXPos = 1223;
                this.mouseXOffset = 0;
                this.mouseYOffset = 0;
                this.ballCanMove = false;
                this.name = "poolTable";
                this.createElements();
            }
            createElements() {
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
                this.ballPositionCircleOnRaycast = new Container();
                this.ballPositionCircleOnRaycast.name = "ballPositionCircleOnRaycast";
                let graphics = new Graphics();
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
                    this.addBallToBallsHolder(ball);
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
                    this.addBallToBallsHolder(ball);
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
                _.forEach([this.whiteBallReflectionArrow, this.otherBallReflectionArrow], (arrow) => {
                    let g = new Graphics();
                    g.lineStyle(4, 0xffffff);
                    let sideLength = 6;
                    g.moveTo(-sideLength / 2, -sideLength * Math.sqrt(2));
                    g.lineTo(sideLength, 0.2);
                    g.moveTo(-sideLength / 2, sideLength * Math.sqrt(2));
                    g.lineTo(sideLength, -0.2);
                    arrow.addChild(g);
                    arrow.x = 200;
                    arrow.y = 200;
                    arrow.visible = false;
                    this.addChild(arrow);
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
            }
            setTableLimits() {
                this.leftLimit = this.playGround.x;
                this.rightLimit = this.playGround.x + this.playGround.width;
                this.upLimit = this.playGround.y;
                this.downLimit = this.playGround.y + this.playGround.height;
            }
            addBallToBallsHolder(ball) {
                this.ballsHolder.addChild(ball);
                this.shadowsHolder.addChild(ball.ballShadow);
            }
            addPockets() {
                let rect2A = this.createRectangle(new Rectangle(-494, 0, 20, 380), 0, GameModule.MaterialType.PUCK_ONLY_MATERIAL, 0xff9900, "rect2a");
                let rect2B = this.createRectangle(new Rectangle(497, 0, 20, 380), 0, GameModule.MaterialType.PUCK_ONLY_MATERIAL, 0xff9900, "rect2b");
                let rect4A = this.createRectangle(new Rectangle(-492, -250, 20, 58), 0.7853981634, GameModule.MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect4a");
                let rect4B = this.createRectangle(new Rectangle(492, 250, 20, 58), 0.7853981634, GameModule.MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect4b");
                let rect5A = this.createRectangle(new Rectangle(492, -250, 20, 58), -0.7853981634, GameModule.MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect5a");
                let rect5B = this.createRectangle(new Rectangle(-492, 250, 20, 58), -0.7853981634, GameModule.MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect5b");
                let rect7A = this.createRectangle(new Rectangle(0, -270, 100, 20), 0, GameModule.MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect7a");
                let rect7B = this.createRectangle(new Rectangle(0, 270, 100, 20), 0, GameModule.MaterialType.BALL_ONLY_MATERIAL, 0xffff00, "rect7b");
                this.pockets = [];
                let pocket1 = new Pockey.Pocket(-497, -254, 28, new Vector2(-438, -200));
                this.pockets.push(pocket1);
                pocket1.addPoints(this);
                let pocket2 = new Pockey.Pocket(0, -264, 26, new Vector2(0, -200));
                this.pockets.push(pocket2);
                pocket2.addPoints(this);
                let pocket3 = new Pockey.Pocket(496, -255, 28, new Vector2(438, -200));
                this.pockets.push(pocket3);
                pocket3.addPoints(this);
                let pocket4 = new Pockey.Pocket(497, 254, 28, new Vector2(438, 200));
                this.pockets.push(pocket4);
                pocket4.addPoints(this);
                let pocket5 = new Pockey.Pocket(0, 263, 26, new Vector2(0, 200));
                this.pockets.push(pocket5);
                pocket5.addPoints(this);
                let pocket6 = new Pockey.Pocket(-497, 253, 28, new Vector2(-438, 200));
                this.pockets.push(pocket6);
                pocket6.addPoints(this);
            }
            createUpperCollisionPolygon() {
                let vertices = Pockey.PockeySettings.MAIN_COLLISION_POLYGON.slice(0);
                let upperCollisionPolygon = new p2.Body({ mass: 0 });
                GameModule.P2WorldManager.Instance().world.addBody(upperCollisionPolygon);
                upperCollisionPolygon.fromPolygon(vertices);
                _.forEach(upperCollisionPolygon.shapes, (shape) => {
                    shape.material = new p2.Material(GameModule.MaterialType.LINE_MATERIAL);
                });
                _.forEach(Pockey.PockeySettings.MAIN_COLLISION_POLYGON, (lineCoord, id) => {
                    if (id > 0) {
                        let prevPointCounter = id - 1;
                        let v1 = new Vector2(lineCoord[0], lineCoord[1]);
                        let v2 = new Vector2(Pockey.PockeySettings.MAIN_COLLISION_POLYGON[prevPointCounter][0], Pockey.PockeySettings.MAIN_COLLISION_POLYGON[prevPointCounter][1]);
                        this.createLine(v1, v2, GameModule.MaterialType.LINE_MATERIAL);
                    }
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
                this.balls = [];
                this.whiteBall.reset();
                this.whiteBall.ballPosition = this.whiteBall.initialPosition;
                this.addBallToBallsHolder(this.whiteBall);
                this.balls.push(this.whiteBall);
                this.puck.reset();
                this.puck.ballPosition = this.puck.initialPosition;
                this.balls.push(this.puck);
                this.addBallToBallsHolder(this.puck);
                _.forEach(this.leftBallsArray, (ball) => {
                    ball.reset();
                    ball.ballPosition = ball.initialPosition;
                    this.balls.push(ball);
                    this.addBallToBallsHolder(ball);
                });
                _.forEach(this.rightBallsArray, (ball) => {
                    ball.reset();
                    console.log(ball.name);
                    ball.ballPosition = ball.initialPosition;
                    this.balls.push(ball);
                    this.addBallToBallsHolder(ball);
                });
            }
            createRectangle(rectangle, rotationAngle, materialType, color = 0xffff00, id) {
                let rect = new Rect(rectangle, rotationAngle, materialType);
                return rect;
            }
        }
        GameModule.PoolTable = PoolTable;
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
        StateMachineModule.PockeyStateTexts = PockeyStateTexts;
    })(StateMachineModule = Pockey.StateMachineModule || (Pockey.StateMachineModule = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let GameModule;
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
        class PoolTableManager {
            constructor() {
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
            }
            registerSignalsHandlers() {
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
            onSetPuckGoalsSides(params) {
                this.poolTable.leftGoal.type = params[0];
                this.poolTable.rightGoal.type = params[1];
                _.forEach(this.poolTable.leftBallsArray, (ball) => {
                    ball.ballType = params[0];
                });
                _.forEach(this.poolTable.rightBallsArray, (ball) => {
                    ball.ballType = params[1];
                });
            }
            onChangeOpponentColor(color) {
                if (this.poolTable.leftGoal.type == GameModule.BallType.Opponent) {
                    this.poolTable.leftGoal.tint = color;
                }
                else {
                    this.poolTable.rightGoal.tint = color;
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
                _.forEach(this.poolTable.balls, (ball) => {
                    if (ball.ballType == GameModule.BallType.Player) {
                        ball.tintBall(color);
                    }
                });
            }
            onShowPoolTable() {
                this.poolTable.visible = true;
            }
            onResetPoolTable() {
                this.isFirstShoot = true;
                this.poolTable.reset();
            }
            onShoot() {
                this.onStopAnimatePuckGoal();
                this.contactEnabled = true;
                let rotation = this.poolTable.poolStick.rotation;
                _.forEach(this.poolTable.balls, (ball) => {
                    GameModule.P2WorldManager.Instance().world.removeBody(ball.p2BodyShadow);
                    ball.p2Body.wakeUp();
                });
                this.poolTable.whiteBall.onShoot(rotation, this.poolTable.poolStick.power);
                this.poolTable.poolStick.power = 0;
                this.isFirstShoot = false;
            }
            onRepositionWhiteBall() {
                if (this.opponentTimeUp) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.onOpponentsTimeUp]);
                }
                else
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.opponentFault]);
                let localPoint = this.poolTable.toLocal(new Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));
                if (_.isNull(this.lastGoodRepositionPoint) || _.isUndefined(this.lastGoodRepositionPoint)) {
                    this.lastGoodRepositionPoint = new Vector2();
                }
                if (this.graph) {
                    if (this.graph.parent)
                        this.graph.parent.removeChild(this.graph);
                    this.graph.clear();
                    this.graph = null;
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
                        if (isInteresectingWithOthers) {
                            ballPositionCirclePosition.x = this.lastGoodRepositionPoint.x;
                            ballPositionCirclePosition.y = this.lastGoodRepositionPoint.y;
                        }
                        else {
                            this.lastGoodRepositionPoint.x = ballPositionCirclePosition.x;
                            this.lastGoodRepositionPoint.y = ballPositionCirclePosition.y;
                        }
                    }
                    this.poolTable.ballPositionCircle.x = ballPositionCirclePosition.x;
                    this.poolTable.ballPositionCircle.y = ballPositionCirclePosition.y;
                    this.poolTable.ballPositionCircle.visible = true;
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
                        _.forEach(this.poolTable.balls, (ball) => {
                            ball.addShadowBody();
                        });
                        this.poolTable.raycastFollower.visible = true;
                        this.poolTable.ballPositionCircleOnRaycast.visible = true;
                        this.poolTable.poolStick.activate(new Point(this.poolTable.whiteBall.x, this.poolTable.whiteBall.y));
                    }
                }
                this.sendElementsDataToManager();
            }
            handleCollisions() {
                _.remove(this.poolTable.balls, (ball) => {
                    if (ball.canBeRemoved && !ball.animationInProgress) {
                        this.ticker.remove(ball.update);
                        ball.removedFromArray = true;
                    }
                    return ball.canBeRemoved && !ball.animationInProgress;
                });
            }
            ballInPocketHandler(params) {
                console.log("ball in Pocket: " + params);
                console.log("la pocket 1: " + this.poolTable.balls.length);
                console.log("la pocket 2: " + this.poolTable.balls.length);
            }
            hideBallRayGraphics() {
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
            }
            update() {
                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onRepositionWhiteBall) {
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
                    this.sendElementsDataToManager();
                }
            }
            sendElementsDataToManager() {
                let ballsData = [];
                _.forEach(this.poolTable.balls, (ball) => {
                    ballsData.push(ball.getBallData());
                });
                if (!Settings.singlePlayer) {
                    let poolTableData = {
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
                        graphColor: this.graphColor
                    };
                    SignalsManager.DispatchSignal(PockeySignalTypes.SEND_ELEMENTS_DATA_TO_MANAGER, [poolTableData]);
                }
            }
            onWatch(params) {
                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onWatch) {
                    this.onStopAnimatePuckGoal();
                    let poolTableData = params[0];
                    if (poolTableData.opponentState == PockeyStates.onShoot) {
                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.opponentsTurn]);
                    }
                    else {
                        console.log("poolTableData.opponentTimeFinished: " + poolTableData.opponentTimeFinished);
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
                    let ballsData = poolTableData.balls;
                    let includesWhiteBall = false;
                    let whiteBallData;
                    _.remove(this.poolTable.balls, (ball) => {
                        let canBeKept = false;
                        _.forEach(ballsData, (ballData) => {
                            if (ballData.name == ball.name) {
                                canBeKept = true;
                                ball.setBallData(ballData);
                            }
                            if (ballData.name == this.poolTable.whiteBall.name) {
                                whiteBallData = ballData;
                                includesWhiteBall = true;
                            }
                        });
                        if (!canBeKept) {
                            GameModule.P2WorldManager.Instance().world.removeBody(ball.p2Body);
                            GameModule.P2WorldManager.Instance().world.removeBody(ball.p2BodyShadow);
                            ball.removed = true;
                        }
                        return ball.removed;
                    });
                    if (includesWhiteBall && !_.includes(this.poolTable.balls, this.poolTable.whiteBall)) {
                        this.poolTable.whiteBall.setBallData(whiteBallData);
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
                    this.graphColor = defaultColor;
                    this.poolTable.raycastFollower.visible = true;
                    if (this.poolTable.raycastFollower.getChildByName("graphics")) {
                        this.poolTable.raycastFollower.getChildByName("graphics").tint = defaultColor;
                    }
                    if (this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics")) {
                        this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics").tint = defaultColor;
                    }
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
                        let isOwnBall = this.checkIfOwnShadow(result.body);
                        if (isOwnBall) {
                            defaultColor = 0xca384d;
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.ownBallAiming]);
                        }
                        this.graphColor = defaultColor;
                        let isPuck = this.checkIfPuck(result.body);
                        if (isPuck) {
                            this.onAnimatePuckGoal();
                            console.log("e puck!!!!");
                            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.puckAiming]);
                        }
                        else {
                            this.onStopAnimatePuckGoal();
                            console.log("nu e puck!!!!");
                        }
                        this.graph.tint = defaultColor;
                        if (this.poolTable.raycastFollower.getChildByName("graphics")) {
                            this.poolTable.raycastFollower.getChildByName("graphics").tint = defaultColor;
                        }
                        if (this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics")) {
                            this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics").tint = defaultColor;
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
                        let directionLength = 85;
                        let distanceToTheOtherBall = new Vector2(this.hitPoint[0] - Math.cos(raycastAngle) * Pockey.PockeySettings.BALL_RADIUS, this.hitPoint[1] - Math.sin(raycastAngle) * Pockey.PockeySettings.BALL_RADIUS)
                            .distanceTo(new Vector2(result.body.position[0], result.body.position[1]));
                        if (distanceToTheOtherBall > Pockey.PockeySettings.BALL_RADIUS + result.shape.radius / 2) {
                            distanceToTheOtherBall = Pockey.PockeySettings.BALL_RADIUS + result.shape.radius / 2;
                        }
                        let arrowScaleFactor = (1 - ((result.shape.radius / 2) / distanceToTheOtherBall)) / 0.5;
                        arrowScaleFactor = Math.round(arrowScaleFactor * 1000) / 1000;
                        if (arrowScaleFactor > 0.03 && !isOwnBall) {
                            let whiteBallArrowAngleCorrection = 1;
                            startPoint = new Vector2(this.hitPoint[0] - (Pockey.PockeySettings.BALL_RADIUS * whiteBallArrowAngleCorrection * tangentVector.x), this.hitPoint[1] - (Pockey.PockeySettings.BALL_RADIUS * whiteBallArrowAngleCorrection * tangentVector.y));
                            let opposedStartPoint = new Vector2(this.hitPoint[0] + (Pockey.PockeySettings.BALL_RADIUS * whiteBallArrowAngleCorrection * tangentVector.x), this.hitPoint[1] + (Pockey.PockeySettings.BALL_RADIUS * whiteBallArrowAngleCorrection * tangentVector.y));
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
                            let dottedLineArrowPoint = PixiDashedLine.drawDashedLine(this.graph, startPoint.x, startPoint.y, endPoint.x, endPoint.y, 1, 0, 0xffffff, 4, 1);
                            directionLength = 85;
                            this.poolTable.whiteBallReflectionArrow.x = dottedLineArrowPoint.x;
                            this.poolTable.whiteBallReflectionArrow.y = dottedLineArrowPoint.y;
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
                    ball.addShadowBody();
                });
                this.poolTable.raycastFollower.visible = true;
                this.poolTable.ballPositionCircleOnRaycast.visible = true;
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
        var Graphics = PIXI.Graphics;
        var Vector2 = Framework.Utils.Vector2;
        var TouchHandler = Framework.Utils.TouchHandler;
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
                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onShoot) {
                    if (!this.ballsAreMoving()) {
                        SignalsManager.DispatchSignal(PockeySignalTypes.NEXT_TURN);
                    }
                    else {
                        this.handleCollisions();
                    }
                }
                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onRearrangeStick && this.poolTable.poolStick.rotationEnabled) {
                    this.poolTable.poolStick.x = this.poolTable.whiteBall.x;
                    this.poolTable.poolStick.y = this.poolTable.whiteBall.y;
                    if (this.graph) {
                        if (this.graph.parent)
                            this.graph.parent.removeChild(this.graph);
                        this.graph.clear();
                        this.graph = null;
                    }
                    this.graph = new Graphics();
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
            onStartVersusGame() {
                if (this.poolTable.poolStick && !this.poolTable.poolStick.isActive) {
                    this.poolTable.poolStick.activate(new Point(this.poolTable.poolStick.initialPosition.x, this.poolTable.poolStick.initialPosition.y));
                    SignalsManager.DispatchSignal(PockeySignalTypes.POOLSTICK_ACTIVATED);
                }
            }
            onRepositionWhiteBall() {
                let localPoint = this.poolTable.toLocal(new Point(TouchHandler.Instance().position.x, TouchHandler.Instance().position.y));
                if (_.isNull(this.lastGoodRepositionPoint) || _.isUndefined(this.lastGoodRepositionPoint)) {
                    this.lastGoodRepositionPoint = new Vector2();
                }
                if (this.graph) {
                    if (this.graph.parent)
                        this.graph.parent.removeChild(this.graph);
                    this.graph.clear();
                    this.graph = null;
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
                        if (isInteresectingWithOthers) {
                            ballPositionCirclePosition.x = this.lastGoodRepositionPoint.x;
                            ballPositionCirclePosition.y = this.lastGoodRepositionPoint.y;
                        }
                        else {
                            this.lastGoodRepositionPoint.x = ballPositionCirclePosition.x;
                            this.lastGoodRepositionPoint.y = ballPositionCirclePosition.y;
                        }
                    }
                    TweenMax.to(this.poolTable.ballPositionCircle, 0, {
                        x: ballPositionCirclePosition.x,
                        y: ballPositionCirclePosition.y
                    });
                    this.poolTable.ballPositionCircle.visible = true;
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
                        _.forEach(this.poolTable.balls, (ball) => {
                            ball.addShadowBody();
                        });
                        this.poolTable.raycastFollower.visible = true;
                        this.poolTable.ballPositionCircleOnRaycast.visible = true;
                        this.poolTable.poolStick.activate(new Point(this.poolTable.whiteBall.x, this.poolTable.whiteBall.y));
                    }
                }
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
        var Settings = Framework.Settings;
        var Sprite = PIXI.Sprite;
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
                    this.confirmWhiteBallPlacementTexture = new Sprite(PIXI.Texture.fromFrame("penalty-droppuck.png"));
                    this.confirmWhiteBallPlacementTexture.anchor.x = 0.5;
                    this.confirmWhiteBallPlacementTexture.anchor.y = 0.5;
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
            }
            onHideWhiteBallPositionConfirmer() {
                this.confirmWhiteBallPlacementTexture.visible = false;
            }
            handleDesktopLandscape() {
                super.handleDesktopLandscape();
                if (this.levelManager && this.levelManager.poolTable) {
                    this.levelManager.poolTable.poolStick.visible = false;
                    this.levelManager.poolTable.height = 0.7 * Settings.stageHeight;
                    let backgroundScaleFactor = this.levelManager.poolTable.scale.y;
                    this.levelManager.poolTable.scale.x = backgroundScaleFactor;
                    this.levelManager.poolTable.x = Settings.stageWidth / 2;
                    this.levelManager.poolTable.y = 0.18 * Settings.stageHeight + this.levelManager.poolTable.height / 2;
                    SignalsManager.DispatchSignal(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, [backgroundScaleFactor, this.levelManager.poolTable.position, this.levelManager.poolTable.rotation, this.levelManager.poolTable.width, this.levelManager.poolTable.height]);
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
                this.matchesWon = 0;
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
                this.whiteBallPenalty = false;
                this.ballsHit = 0;
                this.ownBallInPocketFault = false;
                this.gameFinished = false;
                this.availableForRestart = false;
                this.timerText = "";
                this.animateOpponentTimer = false;
                this.countdownEnded = false;
            }
            static Instance() {
                if (!GameManager.instance) {
                    GameManager.instance = new GameManager();
                    if (!GameManager.Instance().initialized) {
                        GameManager.Instance().InitializeOthers();
                        GameManager.Instance().registerSignalsHandlers();
                        GameManager.Instance().initialized = true;
                    }
                }
                return GameManager.instance;
            }
            InitializeOthers() {
                this.player = new GameModule.Player("player", GameModule.BallType.Player);
                this.opponent = new GameModule.Player("opponent", GameModule.BallType.Opponent);
            }
            registerSignalsHandlers() {
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
            }
            startCountdown(seconds) {
                let counter = seconds;
                let counterText = "0:";
                counterText += (counter >= 10) ? counter.toString() : "0" + counter.toString();
                this.timerText = counterText;
                this.animateOpponentTimer = false;
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, [counterText, this.currentPlayer.type, false]);
                this.roundTimer = setInterval(() => {
                    counterText = "0:";
                    counter--;
                    counterText += (counter >= 10) ? counter.toString() : "0" + counter.toString();
                    this.timerText = counterText;
                    if (counter <= 5) {
                        this.animateOpponentTimer = true;
                    }
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, [counterText, this.currentPlayer.type, this.animateOpponentTimer]);
                    if (counter < 0) {
                        this.stopCountdown();
                        this.countdownEnded = true;
                        SignalsManager.DispatchSignal(PockeySignalTypes.RESET_STICK_POWER);
                    }
                }, 1000);
            }
            ;
            stopCountdown() {
                clearInterval(this.roundTimer);
                this.timerText = "";
                this.animateOpponentTimer = false;
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, ["", this.currentPlayer.type, false]);
                console.log('Ding!');
            }
            onMyTurn(params) {
                this.changePlayer();
                let state = params[0];
                console.log("currentSTate: " + PockeyStateMachine.Instance().getCurrentStateName());
                console.log("new state: " + state);
                if (state == PockeyStates.onRearrangeStick) {
                    if (params[1]) {
                        let balls;
                    }
                    SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
                    this.startCountdown(Pockey.PockeySettings.ROUND_DURATION_IN_SECONDS);
                }
                else if (state == PockeyStates.onRepositionWhiteBall) {
                    this.startCountdown(Pockey.PockeySettings.ROUND_DURATION_IN_SECONDS);
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
            }
            onSendElementsDataToManager(params) {
                let poolTableData = params[0];
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
            }
            onRestartGame() {
                if (Settings.singlePlayer)
                    this.switchSides();
                else {
                    this.availableForRestart = true;
                    this.switchSides();
                    SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.OPPONENT_RESTART_GAME]);
                }
            }
            onOpponentRestart() {
                if (this.availableForRestart) {
                    this.switchSides();
                }
            }
            switchSides() {
                this.whiteBallPenalty = false;
                this.ballsHit = 0;
                this.gameFinished = false;
                this.availableForRestart = false;
                this.player.score = Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER;
                this.opponent.score = Pockey.PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER;
                SignalsManager.DispatchSignal(PockeySignalTypes.RESET_POOLTABLE);
                SignalsManager.DispatchSignal(PockeySignalTypes.RESET_GAME_SCREEN);
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_WINNING_SCREEN);
                let orderArray = [];
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
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_PLAYER_COLOR, [Pockey.PockeySettings.PLAYER_COLOR]);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_OPPONENT_COLOR, [Pockey.PockeySettings.OPPONENT_COLOR]);
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_PLAYER_NAME, [this.player.id]);
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_OPPONENT_NAME, [this.opponent.id]);
            }
            onStartGame() {
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
                    SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_PLAYER_COLOR, [Pockey.PockeySettings.PLAYER_COLOR]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_OPPONENT_COLOR, [Pockey.PockeySettings.OPPONENT_COLOR]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_PLAYER_NAME, [this.player.id]);
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_OPPONENT_NAME, [this.opponent.id]);
                }
                else {
                    PockeyStateMachine.Instance().changeState(PockeyStates.onSearchForPartner);
                    SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_SEARCHING_SCREEN);
                    SignalsManager.DispatchSignal(ConnectionSignalsType.CREATE_SOCKET_IO_CONNECTION);
                }
            }
            onWatch(params) {
                if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onWatch) {
                    let poolTableData = params[0];
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
            }
            onScoreUpdate(params) {
                console.log("on score update");
            }
            onBallInPocket(params) {
                if (!this.gameFinished) {
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
            }
            onAllModuleElementsCreated() {
                PockeyStateMachine.Instance().changeState(PockeyStates.onMainMenu);
                SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_MAIN_MENU);
                SignalsManager.DispatchSignal(SignalsType.CHANGE_BACKGROUND, [Settings.mainBackgroundName, 4]);
            }
            onSocketIOConnectionCreated(params) {
                console.log("%c GameManager -> socket io connection created", "color: #00bcd4");
                this.player.id = params[0];
                Pockey.PockeySettings.PLAYER_SOCKET_ID = this.player.id;
                this.opponent.id = params[1];
                Pockey.PockeySettings.OPPONENT_SOCKET_ID = this.opponent.id;
                let connectionID = params[2];
                if (connectionID.startsWith(this.player.id)) {
                    this.currentPlayer = this.player;
                    let playerSettings = {
                        opponentName: this.player.name,
                        opponentColor: Pockey.PockeySettings.PLAYER_COLOR
                    };
                    playerSettings.firstToStart = this.player.id;
                    SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.OPPONENT_SETTINGS, playerSettings]);
                }
            }
            onOpponentSettings(params) {
                console.log("on opponent settings");
                let opponentSettings = params[0];
                Pockey.PockeySettings.OPPONENT_COLOR = opponentSettings.opponentColor;
                if (opponentSettings.firstToStart == this.player.id) {
                    this.setCurrentPlayer(this.player);
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
                    if (Pockey.PockeySettings.OPPONENT_COLOR == Pockey.PockeySettings.PLAYER_COLOR) {
                        let randNumber = Math.round(Math.random() * (Pockey.PockeySettings.COLORS.length - 1));
                        Pockey.PockeySettings.OPPONENT_COLOR = Pockey.PockeySettings.COLORS[randNumber];
                    }
                    let playerSettings = {
                        opponentName: this.player.name,
                        opponentColor: Pockey.PockeySettings.OPPONENT_COLOR,
                        firstToStart: this.opponent.id
                    };
                    SignalsManager.DispatchSignal(ConnectionSignalsType.PRIVATE_MESSAGE, [PockeySocketMessages.OPPONENT_SETTINGS, playerSettings]);
                    PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, [PockeyStateTexts.opponentsTurn]);
                }
                SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_SEARCHING_SCREEN);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_PLAYER_COLOR, [Pockey.PockeySettings.PLAYER_COLOR]);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_OPPONENT_COLOR, [Pockey.PockeySettings.OPPONENT_COLOR]);
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_PLAYER_NAME, [this.player.id]);
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_OPPONENT_NAME, [this.opponent.id]);
            }
            onShoot() {
                this.whiteBallPenalty = false;
                clearInterval(this.roundTimer);
                this.stopCountdown();
                PockeyStateMachine.Instance().changeState(PockeyStates.onShoot);
            }
            onWhiteBallRepositioned() {
                console.log("%c GameManager -> White Ball Repositioned", "color: #00bcd4");
                PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
                SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
            }
            onGameFinished() {
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
            }
            onNextTurn() {
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
            }
            setCurrentPlayer(player) {
                this.currentPlayer = player;
                console.log("%c GameManager -> Current player is: " + this.currentPlayer.id.toUpperCase(), "background: red; color: white; font-weight:bold; ");
            }
            changePlayer() {
                if (this.currentPlayer == this.opponent)
                    this.currentPlayer = this.player;
                else
                    this.currentPlayer = this.opponent;
                console.log("%c GameManager -> Player changed: " + this.currentPlayer.id.toUpperCase(), "background: red; color: white; font-weight:bold; ");
            }
            onFirstBallFault() {
                this.whiteBallPenalty = true;
                console.log("%c GameManager -> First ball fault!", "color: #00bcd4");
            }
            beginPlay() {
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.beginGame]);
                SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
                PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
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
        class PockeyBackgroundModule extends AbstractBackgroundModule {
            constructor() {
                super();
            }
            registerSignalsHandlers() {
                super.registerSignalsHandlers();
                SignalsManager.AddSignalCallback(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, this.onResizeBackground.bind(this));
            }
            onResizeBackground(params) {
                if (this.backgrounds[Pockey.PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME]) {
                    let scaleFactor = params[0];
                    let position = params[1];
                    let rotation = params[2];
                    this.backgrounds[Pockey.PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME].x = position.x;
                    this.backgrounds[Pockey.PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME].y = position.y;
                    this.backgrounds[Pockey.PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME].rotation = rotation;
                    this.backgrounds[Pockey.PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME].scale.x = scaleFactor;
                    this.backgrounds[Pockey.PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME].scale.y = scaleFactor;
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
                    case Connection.PockeySocketMessages.OPPONENT_RESTART_GAME: {
                        SignalsManager.DispatchSignal(PockeyConnectionSignals.OPPONENT_RESTART_GAME, [messageData]);
                        break;
                    }
                }
            }
        }
        Connection.PockeySocketClient = PockeySocketClient;
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
        }
        Connection.PockeyConnectionModule = PockeyConnectionModule;
    })(Connection = Pockey.Connection || (Pockey.Connection = {}));
})(Pockey || (Pockey = {}));
var Framework;
(function (Framework) {
    let utils;
    (function (utils) {
        var Graphics = PIXI.Graphics;
        class TextField extends PIXI.Text {
            constructor(text, style, debug) {
                super(text, style);
                this.setStyle(style);
                this.updateText();
                if (debug)
                    this.debug();
            }
            setText(text) {
                this.text = text;
            }
            setStyle(style) {
                this.scale.x = 1;
                this.scale.y = 1;
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
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        var Graphics = PIXI.Graphics;
        var TextField = Framework.utils.TextField;
        var Settings = Framework.Settings;
        class PockeyUiSearchingScreen extends Container {
            constructor() {
                super();
                this.addElements();
            }
            addElements() {
                this.addBackground();
                this.addText();
            }
            addBackground() {
                let bgGraphics = new Graphics();
                bgGraphics.beginFill(0x000000, 0.8);
                bgGraphics.drawRect(0, 0, 400, 200);
                bgGraphics.endFill();
                this.background = new Container();
                this.background.addChild(bgGraphics);
                this.addChild(this.background);
            }
            onResize() {
                this.background.x = Settings.stageWidth / 2 - this.background.width / 2;
                this.background.y = Settings.stageHeight / 2 - this.background.height / 2;
            }
            addText() {
                let style = new PIXI.TextStyle({
                    fontFamily: 'troika',
                    fontSize: 32,
                    fill: 0xffffff,
                });
                this.searchingTextField = new TextField("SEARCHING", style);
                this.searchingTextField.x = this.background.width / 2 - this.searchingTextField.width / 2;
                this.searchingTextField.y = this.background.height / 2 - this.searchingTextField.height / 2;
                this.background.addChild(this.searchingTextField);
            }
        }
        UserInterface.PockeyUiSearchingScreen = PockeyUiSearchingScreen;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Framework;
(function (Framework) {
    let UserInterface;
    (function (UserInterface) {
        var TextField = Framework.utils.TextField;
        class PixiButton extends PIXI.Sprite {
            constructor(width, height, backgroundColor, backgroundAlpha) {
                super();
                let gfx = new PIXI.Graphics();
                gfx.beginFill(backgroundColor, backgroundAlpha);
                gfx.drawRoundedRect(0, 0, width, height, height / 5);
                gfx.endFill();
                this.texture = gfx.generateCanvasTexture();
                this.anchor.x = 0.5;
                this.anchor.y = 0.5;
                this._text = new TextField('Basic text in pixi');
                this._text.anchor.x = 0.5;
                this._text.anchor.y = 0.5;
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
            setText(val, style) {
                this._text.text = val;
                this._text.setStyle(style);
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
                this.scale.x = 1.2;
                this.scale.y = 1.2;
            }
            onOut() {
                this.scale.x = 1;
                this.scale.y = 1;
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
        var Sprite = PIXI.Sprite;
        var Settings = Framework.Settings;
        var PixiButton = Framework.UserInterface.PixiButton;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        class PockeyUiMainScreen extends Container {
            constructor() {
                super();
                this.addElements();
            }
            addElements() {
                this.addMenuBackground();
                this.addStartButton();
            }
            addMenuBackground() {
                this.menuBackground = new Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/menu_background.svg"));
                this.menuBackground.x = Settings.stageWidth / 2 - this.menuBackground.width / 2;
                this.menuBackground.y = Settings.stageHeight / 2 - this.menuBackground.height / 2;
                this.addChild(this.menuBackground);
            }
            onResize() {
                this.menuBackground.x = Settings.stageWidth / 2 - this.menuBackground.width / 2;
                this.menuBackground.y = Settings.stageHeight / 2 - this.menuBackground.height / 2;
            }
            addStartButton() {
                let pixiBtn = new PixiButton(100, 50, 0xffffff, 1);
                let style = new PIXI.TextStyle({
                    fontFamily: 'troika',
                    fontSize: 32,
                    fill: 0x000000,
                });
                pixiBtn.setText("START", style);
                pixiBtn.clicked = () => {
                    SignalsManager.DispatchSignal(PockeySignalTypes.START_GAME);
                };
                pixiBtn.x = this.menuBackground.width / 2;
                pixiBtn.y = this.menuBackground.height / 2;
                this.menuBackground.addChild(pixiBtn);
            }
        }
        UserInterface.PockeyUiMainScreen = PockeyUiMainScreen;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        var Graphics = PIXI.Graphics;
        class PockeyUiInGameAvatar extends Container {
            constructor() {
                super();
                this.rectangleSize = 92;
                this.borderSpacing = 3;
                let firstRect = new Graphics();
                firstRect.beginFill(0x000000, 0.7);
                firstRect.drawRoundedRect(0, 0, this.rectangleSize, this.rectangleSize, this.borderSpacing * 2);
                this.addChild(firstRect);
                let secondRect = new Graphics();
                secondRect.beginFill(0xffffff);
                secondRect.drawRoundedRect(0, 0, this.rectangleSize - this.borderSpacing, this.rectangleSize - 2, 4);
                secondRect.x = firstRect.x + firstRect.width / 2 - secondRect.width / 2;
                this.addChild(secondRect);
                let thirdRect = new Graphics();
                thirdRect.beginFill(0x000000);
                thirdRect.drawRoundedRect(0, 0, secondRect.width - this.borderSpacing * 2, secondRect.height - this.borderSpacing * 2, 4);
                thirdRect.x = secondRect.x + secondRect.width / 2 - thirdRect.width / 2;
                thirdRect.y = secondRect.y + secondRect.height / 2 - thirdRect.height / 2;
                this.addChild(thirdRect);
            }
        }
        UserInterface.PockeyUiInGameAvatar = PockeyUiInGameAvatar;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        var Graphics = PIXI.Graphics;
        class PockeyLifeBar extends Container {
            constructor() {
                super();
                this.playerLifeGraphicsWidth = 256;
                this.playerLifeGraphicsHeight = 28;
                this.createLifeBar();
            }
            createLifeBar() {
                let spacing = 3;
                let firstRect = new Graphics();
                firstRect.beginFill(0x000000, 0.7);
                firstRect.drawRoundedRect(0, 0, this.playerLifeGraphicsWidth, this.playerLifeGraphicsHeight, spacing * 2);
                this.addChild(firstRect);
                let secondRect = new Graphics();
                secondRect.beginFill(0xffffff);
                secondRect.drawRoundedRect(0, 0, this.playerLifeGraphicsWidth - spacing, this.playerLifeGraphicsHeight - 2, 4);
                secondRect.x = firstRect.x + firstRect.width / 2 - secondRect.width / 2;
                this.addChild(secondRect);
                let thirdRect = new Graphics();
                thirdRect.beginFill(0x000000);
                thirdRect.drawRoundedRect(0, 0, secondRect.width - spacing * 2, secondRect.height - spacing * 2, 4);
                thirdRect.x = secondRect.x + secondRect.width / 2 - thirdRect.width / 2;
                thirdRect.y = secondRect.y + secondRect.height / 2 - thirdRect.height / 2;
                this.addChild(thirdRect);
                let remainingWidth = thirdRect.width - 8 * (spacing + 1);
                let unitWidth = remainingWidth / 7;
                let unitHeight = thirdRect.height - 2 * (spacing + 1);
                let unitY = thirdRect.y + thirdRect.height / 2 - unitHeight / 2;
                let unitStartX = thirdRect.x + spacing + 1;
                this.lifeUnits = [];
                _.forEach(_.range(0, 7), (counter) => {
                    let lifeUnit = new Graphics();
                    lifeUnit.beginFill(0xffffff);
                    lifeUnit.drawRoundedRect(0, 0, unitWidth, unitHeight, 2);
                    lifeUnit.x = unitStartX + counter * (unitWidth + spacing + 1);
                    lifeUnit.y = unitY;
                    this.addChild(lifeUnit);
                    this.lifeUnits.push(lifeUnit);
                });
            }
        }
        UserInterface.PockeyLifeBar = PockeyLifeBar;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        var TextField = Framework.utils.TextField;
        class PockeyUserGameGraphics extends Container {
            constructor(side) {
                super();
                this.side = side;
                let style = new PIXI.TextStyle({
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
                let timerTextStyle = style.clone();
                timerTextStyle.fontSize = 28;
                this.userAvatar = new UserInterface.PockeyUiInGameAvatar();
                this.userLifeBar = new UserInterface.PockeyLifeBar();
                this.timerText = new TextField("0:" + Pockey.PockeySettings.ROUND_DURATION_IN_SECONDS.toString(), timerTextStyle);
                this.timerText.visible = false;
                if (this.side == "left") {
                    this.userNameTextField = new TextField("Player", style);
                    this.userLifeBar.x = this.userAvatar.width + 76;
                    this.userNameTextField.x = this.userLifeBar.x;
                    this.timerText.x = this.userLifeBar.x;
                }
                else {
                    this.userNameTextField = new TextField("Opponent", style);
                    this.userAvatar.x = this.userLifeBar.width + 76;
                    this.userNameTextField.x = this.userLifeBar.width - this.userNameTextField.width;
                    this.timerText.x = this.userLifeBar.width - this.timerText.width;
                }
                this.userLifeBar.y = this.userAvatar.height - this.userLifeBar.height;
                this.userNameTextField.y = this.userLifeBar.y - this.userNameTextField.height + 4;
                this.timerText.y = this.userNameTextField.y - this.timerText.height + 4;
                this.addChild(this.userAvatar);
                this.addChild(this.userLifeBar);
                this.addChild(this.userNameTextField);
                this.addChild(this.timerText);
            }
            resetTimer() {
                this.timerText.visible = false;
                this.timerText.style.fill = 0xffffff;
                this.timerText.setText("0:" + Pockey.PockeySettings.ROUND_DURATION_IN_SECONDS.toString());
            }
            updateTimer(timeText) {
                if (timeText == "") {
                    this.resetTimer();
                }
                else {
                    this.timerText.visible = true;
                    this.timerText.style.fill = 0xffffff;
                    this.timerText.setText(timeText);
                    if (this.side == "right")
                        this.timerText.x = this.userLifeBar.width - this.timerText.width;
                }
            }
            updateUsername(text) {
                this.userNameTextField.setText(text);
                if (this.side == "right") {
                    this.userNameTextField.x = this.userLifeBar.width - this.userNameTextField.width;
                }
            }
            reset() {
                _.forEach(this.userLifeBar.lifeUnits, (lifeUnit, id) => {
                    lifeUnit.alpha = 1;
                });
            }
            updateScore(score) {
                _.forEach(this.userLifeBar.lifeUnits, (lifeUnit, id) => {
                    if (this.side == "left") {
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
            }
            tint(color) {
                _.forEach(this.userLifeBar.lifeUnits, (lifeUnit, id) => {
                    lifeUnit.tint = color;
                });
                this.userNameTextField.tint = color;
            }
            setTimerColor(tintColor) {
                if (this.timerText.style.fill = tintColor) {
                    return;
                }
                else {
                    this.timerText.style.fill = tintColor;
                }
            }
            animateTimer() {
                this.setTimerColor(0xFF0000);
            }
        }
        UserInterface.PockeyUserGameGraphics = PockeyUserGameGraphics;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        var Graphics = PIXI.Graphics;
        class PockeyUiMatchCircle extends Container {
            constructor() {
                super();
                this.createMatchCircle();
            }
            createMatchCircle() {
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
            }
            activate(color) {
                this.firstCircleGraphics.tint = 0xffffff;
                this.secondCircleGraphics.tint = color;
            }
            reset(color) {
                this.secondCircleGraphics.tint = 0x426d7e;
                this.firstCircleGraphics.tint = 0x639db5;
            }
        }
        UserInterface.PockeyUiMatchCircle = PockeyUiMatchCircle;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        var Sprite = PIXI.Sprite;
        class PockeyUiVersusGraphics extends Container {
            constructor() {
                super();
                this.versusGraphics = new Sprite(PIXI.Texture.fromFrame("vs.png"));
                this.addChild(this.versusGraphics);
                this.leftSideMatchCirclesContainer = new Container();
                this.addChild(this.leftSideMatchCirclesContainer);
                this.leftSideMatchCircles = [];
                this.rightSideMatchCirclesContainer = new Container();
                this.addChild(this.rightSideMatchCirclesContainer);
                this.rightSideMatchCircles = [];
                let circle1 = new UserInterface.PockeyUiMatchCircle();
                let circle2 = new UserInterface.PockeyUiMatchCircle();
                circle1.x = circle2.width + 10;
                this.leftSideMatchCirclesContainer.addChild(circle1);
                this.leftSideMatchCirclesContainer.addChild(circle2);
                this.leftSideMatchCirclesContainer.y = this.versusGraphics.height / 2 + 6;
                this.leftSideMatchCirclesContainer.x = circle1.width;
                this.leftSideMatchCircles.push(circle1);
                this.leftSideMatchCircles.push(circle2);
                let circle3 = new UserInterface.PockeyUiMatchCircle();
                let circle4 = new UserInterface.PockeyUiMatchCircle();
                circle4.x = circle3.width + 10;
                this.rightSideMatchCirclesContainer.addChild(circle3);
                this.rightSideMatchCirclesContainer.addChild(circle4);
                this.rightSideMatchCirclesContainer.y = this.leftSideMatchCirclesContainer.y;
                this.rightSideMatchCirclesContainer.x = this.versusGraphics.width - this.rightSideMatchCirclesContainer.width + 2;
                this.rightSideMatchCircles.push(circle3);
                this.rightSideMatchCircles.push(circle4);
            }
        }
        UserInterface.PockeyUiVersusGraphics = PockeyUiVersusGraphics;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Framework;
(function (Framework) {
    let Utils;
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
        class MultiStyleText extends PIXI.Text {
            constructor(text, styles) {
                super(text);
                this.styles = styles;
                Utils.INTERACTION_EVENTS.forEach((event) => {
                    this.on(event, (e) => this.handleInteraction(e));
                });
            }
            handleInteraction(e) {
                let ev = e;
                let localPoint = e.data.getLocalPosition(this);
                let targetTag = this.hitboxes.reduce((prev, hitbox) => prev !== undefined ? prev : (hitbox.hitbox.contains(localPoint.x, localPoint.y) ? hitbox : undefined), undefined);
                ev.targetTag = targetTag === undefined ? undefined : targetTag.tag;
            }
            set styles(styles) {
                this.textStyles = {};
                this.textStyles["default"] = this.assign({}, MultiStyleText.DEFAULT_TAG_STYLE);
                for (let style in styles) {
                    if (style === "default") {
                        this.assign(this.textStyles["default"], styles[style]);
                    }
                    else {
                        this.textStyles[style] = this.assign({}, styles[style]);
                    }
                }
                this._style = new PIXI.TextStyle(this.textStyles["default"]);
                this.dirty = true;
            }
            setStyle(style) {
                this.scale.x = 1;
                this.scale.y = 1;
                if (style && !_.isUndefined(style.fontSize) && !_.isNull(style.fontSize)) {
                    let fontSize = +style.fontSize;
                    fontSize *= 2;
                    style.fontSize = fontSize;
                }
            }
            setTagStyle(tag, style) {
                if (tag in this.textStyles) {
                    this.assign(this.textStyles[tag], style);
                }
                else {
                    this.textStyles[tag] = this.assign({}, style);
                }
                this._style = new PIXI.TextStyle(this.textStyles["default"]);
                this.dirty = true;
            }
            deleteTagStyle(tag) {
                if (tag === "default") {
                    this.textStyles["default"] = this.assign({}, MultiStyleText.DEFAULT_TAG_STYLE);
                }
                else {
                    delete this.textStyles[tag];
                }
                this._style = new PIXI.TextStyle(this.textStyles["default"]);
                this.dirty = true;
            }
            getTagRegex(captureName, captureMatch) {
                let tagAlternation = Object.keys(this.textStyles).join("|");
                if (captureName) {
                    tagAlternation = `(${tagAlternation})`;
                }
                else {
                    tagAlternation = `(?:${tagAlternation})`;
                }
                let reStr = `<${tagAlternation}(?:\\s+[A-Za-z0-9_\\-]+=(?:"(?:[^"]+|\\\\")*"|'(?:[^']+|\\\\')*'))*\\s*>|</${tagAlternation}\\s*>`;
                if (captureMatch) {
                    reStr = `(${reStr})`;
                }
                return new RegExp(reStr, "g");
            }
            getPropertyRegex() {
                return new RegExp(`([A-Za-z0-9_\\-]+)=(?:"((?:[^"]+|\\\\")*)"|'((?:[^']+|\\\\')*)')`, "g");
            }
            _getTextDataPerLine(lines) {
                let outputTextData = [];
                let re = this.getTagRegex(true, false);
                let styleStack = [this.assign({}, this.textStyles["default"])];
                let tagStack = [{ name: "default", properties: {} }];
                for (let i = 0; i < lines.length; i++) {
                    let lineTextData = [];
                    let matches = [];
                    let matchArray;
                    while (matchArray = re.exec(lines[i])) {
                        matches.push(matchArray);
                    }
                    if (matches.length === 0) {
                        lineTextData.push(this.createTextData(lines[i], styleStack[styleStack.length - 1], tagStack[tagStack.length - 1]));
                    }
                    else {
                        let currentSearchIdx = 0;
                        for (let j = 0; j < matches.length; j++) {
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
                                let properties = {};
                                let propertyRegex = this.getPropertyRegex();
                                let propertyMatch;
                                while (propertyMatch = propertyRegex.exec(matches[j][0])) {
                                    properties[propertyMatch[1]] = propertyMatch[2] || propertyMatch[3];
                                }
                                tagStack.push({ name: matches[j][1], properties });
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
            }
            getFontString(style) {
                return new PIXI.TextStyle(style).toFontString();
            }
            createTextData(text, style, tag) {
                return {
                    text,
                    style,
                    width: 0,
                    height: 0,
                    fontProperties: undefined,
                    tag
                };
            }
            getDropShadowPadding() {
                let maxDistance = 0;
                let maxBlur = 0;
                Object.keys(this.textStyles).forEach((styleKey) => {
                    let { dropShadowDistance, dropShadowBlur } = this.textStyles[styleKey];
                    maxDistance = Math.max(maxDistance, dropShadowDistance || 0);
                    maxBlur = Math.max(maxBlur, dropShadowBlur || 0);
                });
                return maxDistance + maxBlur;
            }
            updateText() {
                if (!this.dirty) {
                    return;
                }
                this.hitboxes = [];
                this.texture.baseTexture.resolution = this.resolution;
                let textStyles = this.textStyles;
                let outputText = this.text;
                if (this._style.wordWrap) {
                    outputText = this.wordWrap(this.text);
                }
                let lines = outputText.split(/(?:\r\n|\r|\n)/);
                let outputTextData = this._getTextDataPerLine(lines);
                let lineWidths = [];
                let lineYMins = [];
                let lineYMaxs = [];
                let baselines = [];
                let maxLineWidth = 0;
                for (let i = 0; i < lines.length; i++) {
                    let lineWidth = 0;
                    let lineYMin = 0;
                    let lineYMax = 0;
                    let baseline = 0;
                    for (let j = 0; j < outputTextData[i].length; j++) {
                        let sty = outputTextData[i][j].style;
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
                let stylesArray = Object.keys(textStyles).map((key) => textStyles[key]);
                let maxStrokeThickness = stylesArray.reduce((prev, cur) => Math.max(prev, cur.strokeThickness || 0), 0);
                let dropShadowPadding = this.getDropShadowPadding();
                let totalHeight = lineYMaxs.reduce((prev, cur) => prev + cur, 0) - lineYMins.reduce((prev, cur) => prev + cur, 0);
                let width = maxLineWidth + maxStrokeThickness + 2 * dropShadowPadding;
                let height = totalHeight + 2 * dropShadowPadding;
                this.canvas.width = (width + this.context.lineWidth) * this.resolution;
                this.canvas.height = height * this.resolution;
                this.context.scale(this.resolution, this.resolution);
                this.context.textBaseline = "alphabetic";
                this.context.lineJoin = "round";
                let basePositionY = dropShadowPadding;
                let drawingData = [];
                for (let i = 0; i < outputTextData.length; i++) {
                    let line = outputTextData[i];
                    let linePositionX;
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
                    for (let j = 0; j < line.length; j++) {
                        let { style, text, fontProperties, width, height, tag } = line[j];
                        linePositionX += maxStrokeThickness / 2;
                        let linePositionY = maxStrokeThickness / 2 + basePositionY + fontProperties.ascent;
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
                                text,
                                style,
                                x: linePositionX,
                                y: linePositionY,
                                width,
                                ascent: fontProperties.ascent,
                                descent: fontProperties.descent,
                                tag
                            });
                            linePositionX += line[j].width;
                        }
                        else {
                            this.context.font = this.getFontString(line[j].style);
                            for (let k = 0; k < text.length; k++) {
                                if (k > 0 || j > 0) {
                                    linePositionX += style.letterSpacing / 2;
                                }
                                drawingData.push({
                                    text: text.charAt(k),
                                    style,
                                    x: linePositionX,
                                    y: linePositionY,
                                    width,
                                    ascent: fontProperties.ascent,
                                    descent: fontProperties.descent,
                                    tag
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
                drawingData.forEach(({ style, text, x, y }) => {
                    if (!style.dropShadow) {
                        return;
                    }
                    this.context.font = this.getFontString(style);
                    let dropFillStyle = style.dropShadowColor;
                    if (typeof dropFillStyle === "number") {
                        dropFillStyle = PIXI.utils.hex2string(dropFillStyle);
                    }
                    this.context.shadowColor = dropFillStyle;
                    this.context.shadowBlur = style.dropShadowBlur;
                    this.context.shadowOffsetX = Math.cos(style.dropShadowAngle) * style.dropShadowDistance * this.resolution;
                    this.context.shadowOffsetY = Math.sin(style.dropShadowAngle) * style.dropShadowDistance * this.resolution;
                    this.context.fillText(text, x, y);
                });
                this.context.restore();
                drawingData.forEach(({ style, text, x, y, width, ascent, descent, tag }) => {
                    this.context.font = this.getFontString(style);
                    let strokeStyle = style.stroke;
                    if (typeof strokeStyle === "number") {
                        strokeStyle = PIXI.utils.hex2string(strokeStyle);
                    }
                    this.context.strokeStyle = strokeStyle;
                    this.context.lineWidth = style.strokeThickness;
                    let fillStyle = style.fill;
                    if (typeof fillStyle === "number") {
                        fillStyle = PIXI.utils.hex2string(fillStyle);
                    }
                    else if (Array.isArray(fillStyle)) {
                        for (let i = 0; i < fillStyle.length; i++) {
                            let fill = fillStyle[i];
                            if (typeof fill === "number") {
                                fillStyle[i] = PIXI.utils.hex2string(fill);
                            }
                        }
                    }
                    this.context.fillStyle = this._generateFillStyle(new PIXI.TextStyle(style), [text]);
                    if (style.stroke && style.strokeThickness) {
                        this.context.strokeText(text, x, y);
                    }
                    if (style.fill) {
                        this.context.fillText(text, x, y);
                    }
                    let offset = -this._style.padding - this.getDropShadowPadding();
                    this.hitboxes.push({
                        tag,
                        hitbox: new PIXI.Rectangle(x + offset, y - ascent + offset, width, ascent + descent)
                    });
                    let debugSpan = style.debug === undefined
                        ? MultiStyleText.debugOptions.spans.enabled
                        : style.debug;
                    if (debugSpan) {
                        this.context.lineWidth = 1;
                        if (MultiStyleText.debugOptions.spans.bounding) {
                            this.context.fillStyle = MultiStyleText.debugOptions.spans.bounding;
                            this.context.strokeStyle = MultiStyleText.debugOptions.spans.bounding;
                            this.context.beginPath();
                            this.context.rect(x, y - ascent, width, ascent + descent);
                            this.context.fill();
                            this.context.stroke();
                            this.context.stroke();
                        }
                        if (MultiStyleText.debugOptions.spans.baseline) {
                            this.context.strokeStyle = MultiStyleText.debugOptions.spans.baseline;
                            this.context.beginPath();
                            this.context.moveTo(x, y);
                            this.context.lineTo(x + width, y);
                            this.context.closePath();
                            this.context.stroke();
                        }
                        if (MultiStyleText.debugOptions.spans.top) {
                            this.context.strokeStyle = MultiStyleText.debugOptions.spans.top;
                            this.context.beginPath();
                            this.context.moveTo(x, y - ascent);
                            this.context.lineTo(x + width, y - ascent);
                            this.context.closePath();
                            this.context.stroke();
                        }
                        if (MultiStyleText.debugOptions.spans.bottom) {
                            this.context.strokeStyle = MultiStyleText.debugOptions.spans.bottom;
                            this.context.beginPath();
                            this.context.moveTo(x, y + descent);
                            this.context.lineTo(x + width, y + descent);
                            this.context.closePath();
                            this.context.stroke();
                        }
                        if (MultiStyleText.debugOptions.spans.text) {
                            this.context.fillStyle = "#ffffff";
                            this.context.strokeStyle = "#000000";
                            this.context.lineWidth = 2;
                            this.context.font = "8px monospace";
                            this.context.strokeText(tag.name, x, y - ascent + 8);
                            this.context.fillText(tag.name, x, y - ascent + 8);
                            this.context.strokeText(`${width.toFixed(2)}x${(ascent + descent).toFixed(2)}`, x, y - ascent + 16);
                            this.context.fillText(`${width.toFixed(2)}x${(ascent + descent).toFixed(2)}`, x, y - ascent + 16);
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
                        this.context.strokeText(`${width.toFixed(2)}x${height.toFixed(2)}`, 0, 8, width);
                        this.context.fillText(`${width.toFixed(2)}x${height.toFixed(2)}`, 0, 8, width);
                    }
                }
                this.updateTexture();
            }
            wordWrap(text) {
                let result = "";
                let re = this.getTagRegex(true, true);
                const lines = text.split("\n");
                const wordWrapWidth = this._style.wordWrapWidth;
                let styleStack = [this.assign({}, this.textStyles["default"])];
                this.context.font = this.getFontString(this.textStyles["default"]);
                for (let i = 0; i < lines.length; i++) {
                    let spaceLeft = wordWrapWidth;
                    const tagSplit = lines[i].split(re);
                    let firstWordOfLine = true;
                    for (let j = 0; j < tagSplit.length; j++) {
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
                            const words = tagSplit[j].split(" ");
                            for (let k = 0; k < words.length; k++) {
                                const wordWidth = this.context.measureText(words[k]).width;
                                if (this._style.breakWords && wordWidth > spaceLeft) {
                                    const characters = words[k].split('');
                                    if (k > 0) {
                                        result += " ";
                                        spaceLeft -= this.context.measureText(" ").width;
                                    }
                                    for (let c = 0; c < characters.length; c++) {
                                        const characterWidth = this.context.measureText(characters[c]).width;
                                        if (characterWidth > spaceLeft) {
                                            result += `\n${characters[c]}`;
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
                                    const paddedWordWidth = wordWidth + (k > 0 ? this.context.measureText(" ").width : 0);
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
            }
            updateTexture() {
                const texture = this._texture;
                let dropShadowPadding = this.getDropShadowPadding();
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
            }
            assign(destination, ...sources) {
                for (let source of sources) {
                    for (let key in source) {
                        destination[key] = source[key];
                    }
                }
                return destination;
            }
        }
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
        Utils.MultiStyleText = MultiStyleText;
    })(Utils = Framework.Utils || (Framework.Utils = {}));
})(Framework || (Framework = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        var BallType = Pockey.GameModule.BallType;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var TextField = Framework.utils.TextField;
        var Settings = Framework.Settings;
        var MultiStyleText = Framework.Utils.MultiStyleText;
        var TextStyle = PIXI.TextStyle;
        class PockeyUiGameScreen extends Container {
            constructor() {
                super();
                this.tipTextWidth = 934;
                this.poolTableScaleFactor = 1;
                this.subscribeToSignals();
                this.defineTextStyles();
                this.addElements();
            }
            subscribeToSignals() {
                SignalsManager.AddSignalCallback(PockeySignalTypes.SET_SIDES_TYPE, this.onSetSides.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_PLAYER_NAME, this.onUpdatePlayerName.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_PLAYER_SCORE, this.onUpdatePlayerScore.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_PLAYER_COLOR, this.onChangePlayerColor.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_OPPONENT_NAME, this.onUpdateOpponentName.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_OPPONENT_SCORE, this.onUpdateOpponentScore.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_OPPONENT_COLOR, this.onChangeOpponentColor.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.RESET_GAME_SCREEN, this.onReset.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, this.onUpdateCurrentPlayerTimer.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_MATCH_CIRCLES, this.onUpdateMatchCircles.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, this.onResizeBackground.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_UI_TEXT, this.onUpdateUIText.bind(this));
            }
            onUpdateMatchCircles(params) {
                let leftSideColor;
                let rightSideColor;
                if (this.leftGameGraphics.type == BallType.Player) {
                    leftSideColor = Pockey.PockeySettings.PLAYER_COLOR;
                    rightSideColor = Pockey.PockeySettings.OPPONENT_COLOR;
                }
                else {
                    leftSideColor = Pockey.PockeySettings.OPPONENT_COLOR;
                    rightSideColor = Pockey.PockeySettings.PLAYER_COLOR;
                }
                let leftSideMatchesWon = params[0];
                let rightSideMatchesWon = params[1];
                _.forEach(_.range(leftSideMatchesWon), (i) => {
                    this.versus.leftSideMatchCircles[i].activate(leftSideColor);
                });
                _.forEach(_.range(rightSideMatchesWon), (i) => {
                    this.versus.rightSideMatchCircles[i].activate(rightSideColor);
                });
            }
            onUpdateUIText(params) {
                let text = params[0];
                if (text.includes("{opponent"))
                    text = text.replace("{opponent}", Pockey.PockeySettings.OPPONENT_SOCKET_ID);
                if (text != this.multilineText.text) {
                    this.multilineText.text = text;
                    this.multilineText.x = -this.multilineText.width;
                }
            }
            onUpdateCurrentPlayerTimer(params) {
                let time = params[0];
                let playerType = params[1];
                let animateText = params[2];
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
            }
            onResizeBackground(params) {
                this.poolTableScaleFactor = params[0];
            }
            onReset(param) {
                this.leftGameGraphics.reset();
                this.rightGameGraphics.reset();
            }
            onSetSides(params) {
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
            }
            onUpdatePlayerScore(score) {
                if (this.playerGameGraphics)
                    this.playerGameGraphics.updateScore(score);
            }
            onUpdatePlayerName(name) {
                if (this.playerGameGraphics)
                    this.playerGameGraphics.updateUsername(name);
            }
            onChangePlayerColor(color) {
                if (this.playerGameGraphics)
                    this.playerGameGraphics.tint(color);
            }
            onUpdateOpponentScore(score) {
                if (this.opponentGameGraphics)
                    this.opponentGameGraphics.updateScore(score);
            }
            onUpdateOpponentName(name) {
                if (this.opponentGameGraphics)
                    this.opponentGameGraphics.updateUsername(name);
            }
            onChangeOpponentColor(color) {
                if (this.opponentGameGraphics) {
                    this.opponentGameGraphics.tint(color);
                }
                this.opponentTextStyle = new TextStyle({
                    fontFamily: 'troika',
                    fontSize: 56.4,
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
            }
            handleDesktopLandscape() {
                this.graphicsContainer.height = 0.11 * Settings.stageHeight;
                this.graphicsContainer.scale.x = this.graphicsContainer.scale.y;
                this.graphicsContainer.x = Settings.stageWidth / 2;
                this.graphicsContainer.y = 0.05 * Settings.stageHeight;
                this.tipTextContainer.scale.x = this.tipTextContainer.scale.y = this.poolTableScaleFactor;
                this.tipTextContainer.y = Settings.stageHeight - Settings.stageHeight * 0.1;
                this.tipTextContainer.x = Settings.stageWidth / 2 + (this.tipTextWidth / 2) * this.poolTableScaleFactor;
                this.multilineText.x = -this.multilineText.width;
            }
            onResizeMobileLandscape() {
                this.rotation = 0;
                this.tipText.height = 0.046 * Settings.stageHeight;
                this.tipText.scale.x = this.tipText.scale.y;
                this.tipText.y = Settings.stageHeight - this.tipText.height + 0.002 * Settings.stageHeight;
                this.tipText.x = Settings.stageWidth / 2 - this.tipText.width / 2 + Settings.stageWidth * 0.0024;
                this.graphicsContainer.height = 0.13 * Settings.stageHeight;
                this.graphicsContainer.scale.x = this.graphicsContainer.scale.y;
                this.graphicsContainer.x = Settings.stageWidth / 2;
                this.graphicsContainer.y = Settings.stageHeight * 0.008;
            }
            onResizeMobilePortrait() {
                this.rotation = 90 * Math.PI / 180;
                this.tipText.height = 0.046 * Settings.stageWidth;
                this.tipText.scale.x = this.tipText.scale.y;
                this.tipText.y =
                    -this.tipText.height + 0.002 * Settings.stageWidth;
                this.tipText.x = Settings.stageHeight / 2 - this.tipText.width / 2 + Settings.stageHeight * 0.0024;
                this.graphicsContainer.height = 0.13 * Settings.stageWidth;
                this.graphicsContainer.scale.x = this.graphicsContainer.scale.y;
                this.graphicsContainer.x = Settings.stageHeight / 2;
                this.graphicsContainer.y = -Settings.stageWidth + 0.008 * Settings.stageWidth;
            }
            defineTextStyles() {
                this.defaultTextStyle = new TextStyle({
                    fontFamily: 'troika',
                    fontSize: 56.4,
                    fill: 0xffffff,
                    dropShadow: true,
                    dropShadowColor: '#000000',
                    dropShadowBlur: 1,
                    dropShadowAngle: Math.PI / 3,
                    dropShadowDistance: 8
                });
                this.warningTextStyle = new TextStyle({
                    fontFamily: 'troika',
                    fontSize: 56.4,
                    fill: 0xff0000,
                    dropShadow: true,
                    dropShadowColor: '#000000',
                    dropShadowBlur: 1,
                    dropShadowAngle: Math.PI / 3,
                    dropShadowDistance: 8
                });
                this.opponentTextStyle = new TextStyle({});
            }
            addElements() {
                this.graphicsContainer = new Container();
                this.addChild(this.graphicsContainer);
                this.addVersusGraphics();
                this.addLeftGameGraphics();
                this.addRightGameGraphics();
                if (Settings.isMobile) {
                    this.addTipTextMobile();
                }
                else {
                    this.addTipText();
                }
            }
            addTipText() {
                this.multilineText = new MultiStyleText("", {
                    "default": this.defaultTextStyle,
                    "warning": this.warningTextStyle,
                    "opponent": this.opponentTextStyle
                });
                this.tipTextContainer = new Container();
                this.addChild(this.tipTextContainer);
                this.multilineText.scale.x = this.multilineText.scale.y = 0.5;
                this.addChild(this.multilineText);
                this.tipTextContainer.addChild(this.multilineText);
            }
            addTipTextMobile() {
                let style = new PIXI.TextStyle({
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
            }
            addVersusGraphics() {
                this.versus = new UserInterface.PockeyUiVersusGraphics();
                this.versus.x -= this.versus.width / 2;
                this.graphicsContainer.addChild(this.versus);
            }
            addLeftGameGraphics() {
                this.leftGameGraphics = new UserInterface.PockeyUserGameGraphics("left");
                this.leftGameGraphics.x = this.versus.x - this.leftGameGraphics.width - 36;
                this.versus.y = this.leftGameGraphics.height - this.versus.height + 8;
                this.graphicsContainer.addChild(this.leftGameGraphics);
            }
            addRightGameGraphics() {
                this.rightGameGraphics = new UserInterface.PockeyUserGameGraphics("right");
                this.rightGameGraphics.x = this.versus.x + this.versus.width + 36;
                this.graphicsContainer.addChild(this.rightGameGraphics);
            }
        }
        UserInterface.PockeyUiGameScreen = PockeyUiGameScreen;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        var Sprite = PIXI.Sprite;
        var Settings = Framework.Settings;
        var PixiButton = Framework.UserInterface.PixiButton;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        var TextField = Framework.utils.TextField;
        class PockeyUiWinningScreen extends Container {
            constructor() {
                super();
                this.registerSignalHandlers();
                this.addElements();
            }
            addElements() {
                this.addWinningBackground();
                this.addRestartButton();
            }
            addWinningBackground() {
                this.background = new Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/menu_background.svg"));
                this.background.x = Settings.stageWidth / 2 - this.background.width / 2;
                this.background.y = Settings.stageHeight / 2 - this.background.height / 2;
                this.addChild(this.background);
            }
            onResize() {
                this.background.x = Settings.stageWidth / 2 - this.background.width / 2;
                this.background.y = Settings.stageHeight / 2 - this.background.height / 2;
            }
            addRestartButton() {
                let pixiBtn = new PixiButton(200, 68, 0x000000, 1);
                let style = new PIXI.TextStyle({
                    fontFamily: 'troika',
                    fontSize: 24,
                    fill: 0xffffff,
                });
                pixiBtn.setText("RESTART", style);
                pixiBtn.clicked = () => {
                    SignalsManager.DispatchSignal(PockeySignalTypes.RESTART_GAME);
                };
                pixiBtn.x = this.background.width / 2;
                pixiBtn.y = this.background.height / 2;
                this.background.addChild(pixiBtn);
                this.winningTextField = new TextField("You won", style);
                this.winningTextField.x = this.background.width / 2 - this.winningTextField.width / 2;
                this.winningTextField.y = 40;
                this.background.addChild(this.winningTextField);
            }
            registerSignalHandlers() {
                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_WINNING_MESSAGE, this.onUpdateWinningMessage.bind(this));
            }
            onUpdateWinningMessage(message) {
                this.winningTextField.setText(message);
            }
        }
        UserInterface.PockeyUiWinningScreen = PockeyUiWinningScreen;
    })(UserInterface = Pockey.UserInterface || (Pockey.UserInterface = {}));
})(Pockey || (Pockey = {}));
var Pockey;
(function (Pockey) {
    let UserInterface;
    (function (UserInterface) {
        var AbstractUserInterfaceModule = Framework.UserInterface.AbstractUserInterfaceModule;
        var SignalsManager = Framework.Signals.SignalsManager;
        var PockeySignalTypes = Pockey.SignalsModule.PockeySignalTypes;
        class PockeyUserInterfaceModule extends AbstractUserInterfaceModule {
            constructor() {
                super();
            }
            createElements() {
                this.mainScreen = new UserInterface.PockeyUiMainScreen();
                this.searchingScreen = new UserInterface.PockeyUiSearchingScreen();
                this.gameScreen = new UserInterface.PockeyUiGameScreen();
                this.winningScreen = new UserInterface.PockeyUiWinningScreen();
                this.addChild(this.mainScreen);
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
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_WINNING_SCREEN, this.onShowWinningScreen.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_WINNING_SCREEN, this.onHideWinningScreen.bind(this));
            }
            onShowWinningScreen() {
                this.addChild(this.winningScreen);
            }
            onHideWinningScreen() {
                this.removeChild(this.winningScreen);
            }
            onShowSearchingScreen() {
                this.addChild(this.searchingScreen);
            }
            onHideSearchingScreen() {
                this.removeChild(this.searchingScreen);
            }
            onShowMainMenu() {
                this.addChild(this.mainScreen);
            }
            onHideMainMenu() {
                this.removeChild(this.mainScreen);
            }
            onShowGameMenu() {
                this.addChild(this.gameScreen);
            }
            onHideGameMenu() {
                this.removeChild(this.gameScreen);
            }
            onResize(params) {
                super.onResize(params);
                if (this.mainScreen)
                    this.mainScreen.onResize();
                if (this.searchingScreen)
                    this.searchingScreen.onResize();
                if (this.winningScreen)
                    this.winningScreen.onResize();
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
    class PockeyEntryPoint extends AbstractEntryPoint {
        constructor() {
            super();
            this.maxSubSteps = 7;
            this.name = "PockeyEntryPoint";
        }
        addFontsToLoad() {
            super.addFontsToLoad();
            this.assetsLoader.addFontToLoad("troika");
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
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/ballTexture.jpg");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/balls.json");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/balls.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/color_big.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/table_bottom.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/color_big_over.png");
            gameModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/color_big_shadow.png");
            gameModule.Layer = this.getLayer(Layers.GameLayer);
            return gameModule;
        }
        getUIModule() {
            let uiModule = new PockeyUserInterfaceModule();
            uiModule.Name = "PockeyUIModule";
            uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey_main.json");
            uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/pockey_main.png");
            uiModule.addAssetToLoad(Settings.desktopAssetsPath + "Images/menu_background.svg");
            uiModule.Layer = this.getLayer(Layers.UILayer);
            return uiModule;
        }
        getBackgroundModule() {
            let backgroundModule = new PockeyBackgroundModule();
            backgroundModule.registerBackground(Pockey.PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME, Settings.desktopAssetsPath + "/Images/Backgrounds/game_bg.png");
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
            super.initializePixi();
            P2WorldManager.Instance().world = new p2.World({
                gravity: [0, 0]
            });
            requestAnimationFrame(this.animate.bind(this));
        }
        frameAnimate() {
            super.frameAnimate();
            var d = new Date();
        }
        animate(time) {
            requestAnimationFrame(this.animate.bind(this));
            var deltaTime = this.lastTime ? (time - this.lastTime) / 1000 : 0;
            if (P2WorldManager.Instance().world)
                P2WorldManager.Instance().world.step(Pockey.PockeySettings.P2_WORLD_STEP, deltaTime, this.maxSubSteps);
            this.lastTime = time;
        }
        registerSignals() {
            super.registerSignals();
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
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_OPPONENT_NAME);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_OPPONENT_SCORE);
            SignalsManager.CreateNewSignal(PockeySignalTypes.CHANGE_OPPONENT_COLOR);
            SignalsManager.CreateNewSignal(PockeySignalTypes.SEND_ELEMENTS_DATA_TO_MANAGER);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_STATE_TEXT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_UI_TEXT);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH);
            SignalsManager.CreateNewSignal(PockeySignalTypes.UPDATE_MATCH_CIRCLES);
        }
    }
    Pockey.PockeyEntryPoint = PockeyEntryPoint;
})(Pockey || (Pockey = {}));
let mainModule;
window.onload = function () {
    mainModule = new Pockey.PockeyEntryPoint();
    this.onresize = (event) => {
        mainModule.windowResize(window.innerWidth, window.innerHeight);
    };
};

//# sourceMappingURL=main.js.map