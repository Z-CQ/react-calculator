interface Props {
    num: number;
    onClick: (num: number) => void;
}

function Button({num, onClick}: Props) {

    const getVal = (val: number) => {
        switch(val) {
            default:
            case -1:
                return '+';
            case -2:
                return '-';
            case -3:
                return '*';
            case -4:
                return '.';
            case -5:
                return '=';
            case -6:
                return '/';
            case -7:
                return 'C';
        }
    }

    return (
        <>
            <button className="button border-style" onClick={() => {onClick(num)}}>
                {num >= 0 ? num : getVal(num)}
            </button>
        </>
    )
}

export default Button;