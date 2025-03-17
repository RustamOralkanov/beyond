import { Flex, Popover } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const ActionLang = () => {
    const languages = ["ru", "kk"];
    const [lang, setLang] = useState("ru");
    const { i18n } = useTranslation();

    function changelang(value: string) {
        setLang(value);
        i18n.changeLanguage(value);
    }

    return (
        <Popover
            placement="bottom"
            content={
                <Flex vertical gap={10}>
                    {languages.map((l) => (
                        <span key={l} className={["text-[20px] capitalize cursor-pointer", l === lang ? "text-[#AF9475]" : "text-white"].join(" ")} onClick={() => changelang(l)}>
                            {l}
                        </span>
                    ))}
                </Flex>
            }
            arrow={false}
            styles={{
                body: {
                    background: "none",
                    width: 50,
                    border: "1px solid white",
                    borderRadius: 999,
                },
            }}
        >
            <button className="capitalize w-[50px] h-[50px] rounded-full border border-white text-white text-[20px] cursor-pointer">{lang}</button>
        </Popover>
    );
};
