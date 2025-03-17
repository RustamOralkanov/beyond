import { Input, InputProps } from "antd";

const labelClassName =
    "!text-[#727273] font-semibold uppercase absolute duration-300 transform -translate-y-4 top-[16px] z-10 origin-[0] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[16px] peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-0";

export const CustomInput: React.FC<InputProps> = (props) => {
    return (
        <div className="relative duration-300">
            <Input
                {...props}
                id={props.id}
                className={
                    "peer h-[60px] !pt-[20px] !font-semibold z-10 !rounded-none !border-[#727273] border-0 !border-b-1 !border-r-0 !border-l-0 !border-t-0 !px-0 focus:!shadow-none"
                }
                placeholder=" "
            />
            <label htmlFor={props.id} className={[labelClassName].join(" ")}>
                {props.placeholder}
            </label>
        </div>
    );
};
