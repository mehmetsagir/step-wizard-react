"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var StepWizard = function (_a) {
    var values = _a.values, nextButtonRef = _a.nextButtonRef, backButtonRef = _a.backButtonRef, stepTitleRef = _a.stepTitleRef, onChangeStep = _a.onChangeStep;
    var _b = (0, react_1.useState)(0), currentStep = _b[0], setCurrentStep = _b[1];
    (0, react_1.useEffect)(function () {
        if (stepTitleRef === null || stepTitleRef === void 0 ? void 0 : stepTitleRef.current) {
            stepTitleRef.current.innerText = Object.keys(values)[currentStep];
        }
        onChangeStep === null || onChangeStep === void 0 ? void 0 : onChangeStep(Object.entries(values)[currentStep][0]);
    }, [stepTitleRef, currentStep, values]);
    (0, react_1.useEffect)(function () {
        if (nextButtonRef.current) {
            nextButtonRef.current.onclick = function () {
                if (currentStep < Object.keys(values).length - 1) {
                    setCurrentStep(currentStep + 1);
                }
            };
        }
        if (backButtonRef.current) {
            backButtonRef.current.onclick = function () {
                if (currentStep > 0) {
                    setCurrentStep(currentStep - 1);
                }
            };
        }
    }, [nextButtonRef, backButtonRef, currentStep, values]);
    return Object.entries(values).map(function (values, index) {
        return index === currentStep && values[1];
    });
};
exports.default = StepWizard;
//# sourceMappingURL=index.js.map