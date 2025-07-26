import type { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    activeOperand?: string;
}

function Output({children = undefined, activeOperand}: Props) {
    return (
        <div className="calc-out-parent">
            <text className="operand calc-out">{activeOperand}</text>
            <div className="calc-box calc-out border-style" style={{width: "100%", height: "64px"}}>{children}</div>
        </div>
    )
}

export default Output;