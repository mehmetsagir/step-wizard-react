import { ReactNode, RefObject } from "react";
declare type Props = {
    values: {
        [key: string]: ReactNode;
    };
    nextButtonRef: RefObject<HTMLButtonElement>;
    backButtonRef: RefObject<HTMLButtonElement>;
    stepTitleRef?: RefObject<HTMLElement>;
};
declare const StepWizard: ({ values, nextButtonRef, backButtonRef, stepTitleRef, }: Props) => ReactNode[];
export default StepWizard;
//# sourceMappingURL=index.d.ts.map