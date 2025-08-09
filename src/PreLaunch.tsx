import { Button, Drawer, Flex, Form } from "antd";
import BgImage from "./assets/images/beyond.webp";
import BgMobileImage from "./assets/images/beyond-mobile.png";
import Logo from "./assets/logo.svg";
import LogoBlack from "./assets/logo-black.svg";
import { ActionArrow } from "./components/ActionArrow";
import { ActionClose } from "./components/ActionClose";
import { CustomInput } from "./components/CustomInput";
import { InstagramIcon } from "./components/InstagramIcon";
import { useState } from "react";
import { usePhone } from "./helpers/usePhone";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { ActionLang } from "./components/ActionLang";

function PreLaunch() {
    const { t } = useTranslation();
    const [form] = Form.useForm();
    const [isActive, setIsActive] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { formatPhoneNumber, validatePhoneNumber } = usePhone();

    function toggleDrawer() {
        setIsActive(!isActive);
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        form.setFieldsValue({ phone: formatPhoneNumber(value) });
    };

    function onFinish(values: { name: string; phone: string }) {
        setIsLoading(true);

        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("phone_number", values.phone);

        fetch("https://testing.ramsqz.kz/api/v1/form-feedback", {
            method: "POST",
            body: formData,
        })
            .then((res) => {
                if (res.ok) {
                    toggleDrawer();
                    setTimeout(() => {
                        setIsSuccess(true);
                    }, 300);
                    form.resetFields();
                }

                if (!res.ok) {
                    form.setFields([
                        {
                            name: "phone_number",
                            errors: ["Что-то пошло не так"],
                        },
                    ]);
                }

                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                console.error(error);
            });
    }

    return (
        <div className="bg-[#091A21] h-dvh overflow-hidden flex max-lg:flex max-lg:flex-col max-lg:h-full relative">
            <div className="flex gap-2 items-start absolute top-[60px] right-[60px] z-10 max-lg:top-9 max-lg:right-5">
                <a
                    href="tel:222"
                    className="text-white text-[32px] font-semibold h-[50px] px-5 !bg-[#091A21] rounded-full  max-lg:text-[24px]  max-lg:py-3  max-lg:px-[15px] cursor-pointer leading-none flex items-center"
                >
                    222
                </a>
                <ActionLang />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center px-10 max-lg:py-6">
                <div className="flex flex-col gap-[6.146vw] items-center max-lg:items-start max-lg:gap-[76px]">
                    <img src={Logo} alt="logo" className="h-[10.885vw] max-lg:h-[74px] max-lg:-ml-5" />
                    <div className="flex flex-col gap-10 items-center max-lg:gap-4">
                        <div className="flex flex-col gap-6 items-center max-w-[704px]">
                            <h2 className="text-center text-[#AF9475] text-[2.24vw] uppercase max-w-[468px] leading-[150%] max-lg:text-[30px]">
                                <div className="overflow-hidden">
                                    <motion.div initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
                                        {t("1")}
                                    </motion.div>
                                </div>
                                <div className="overflow-hidden">
                                    <motion.div initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
                                        {t("1-1")}
                                    </motion.div>
                                </div>
                            </h2>
                            <motion.p
                                className="text-center text-[#F4F5F9] text-[1.354vw] font-light max-lg:text-base"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.8 }}
                            >
                                {t("2")}
                            </motion.p>
                        </div>
                        <motion.button
                            className="h-[60px] px-[30px] rounded-[50px] text-[#AF9475] border border-[#AF9475] text-[20px] cursor-pointer flex justify-center items-center gap-2.5 hover:bg-[#162A73] hover:border-[#162A73] hover:text-white transition duration-400 ease-in-out max-lg:w-full max-lg:mt-4"
                            onClick={toggleDrawer}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.8 }}
                        >
                            {t("3")}
                            <ActionArrow />
                        </motion.button>
                    </div>
                </div>
            </div>
            <div className="h-full w-[54%] relative overflow-hidden max-lg:w-full max-lg:h-auto">
                <div className="w-60 bg-[#091A21] h-[calc(100%_+_1200px)] absolute -left-[150px] top-2/4 -translate-y-2/4 rotate-[10deg] block max-lg:hidden max-lg:rotate-[86deg]  max-lg:-top-[80px]  max-lg:-transalte-y-0  max-lg:left-2/4  max-lg:-translate-x-2/4" />
                <img src={BgImage} alt="background-image" className="h-full w-full object-cover max-lg:hidden" />
                <img src={BgMobileImage} alt="background-image" className="h-full w-full object-cover max-lg:block" />
            </div>
            <Drawer
                open={isActive}
                closeIcon={false}
                styles={{ body: { padding: 20, backgroundColor: "#FFFFFFBF", backdropFilter: "blur(30px)" } }}
                width={525}
                onClose={toggleDrawer}
            >
                <Flex vertical justify="space-between" className="h-full">
                    <Flex vertical gap={60}>
                        <div className="flex items-center justify-between">
                            <ActionLang isBlack />
                            <ActionClose className="cursor-pointer ml-auto" onClick={toggleDrawer} />
                        </div>
                        <div className="!px-10 flex flex-col gap-15 max-lg:!px-5">
                            <div className="flex flex-col gap-3">
                                <h3 className="text-4xl leading-none font-medium max-w-[340px] text-[#091A21] max-lg:text-[32px]">{t("15")}</h3>
                                <p>{t("16")}</p>
                            </div>
                            <Form className="flex flex-col gap-4" form={form} onFinish={onFinish}>
                                <Form.Item name={"name"} rules={[{ required: true, message: t("12") }]}>
                                    <CustomInput placeholder={t("5")} />
                                </Form.Item>
                                <Form.Item
                                    name={"phone"}
                                    rules={[
                                        {
                                            required: true,
                                            validator: validatePhoneNumber,
                                        },
                                    ]}
                                >
                                    <CustomInput placeholder={t("6")} onChange={handlePhoneChange} />
                                </Form.Item>
                                <span className="text-sm text-[#727273]">
                                    {t("7")}{" "}
                                    <a href="https://ramsqz.com/ru/privacy-policy" target="_blank" className="!text-[#000000] !underline">
                                        {t("8")}
                                    </a>
                                </span>
                                <span className="text-sm text-[#727273]">{t("14")}</span>
                                <Form.Item>
                                    <Button
                                        loading={isLoading}
                                        htmlType="submit"
                                        className="mt-6 !h-[60px] !px-[30px] !rounded-[50px] !text-[#091A21] !border !border-[#091A21] !text-[20px] !flex items-center !gap-2.5 hover:!bg-[#162A73] hover:!border-[#162A73] hover:!text-white transition duration-400 ease-in-out disabled:opacity-30 disabled:cursor-not-allowed"
                                    >
                                        {t("9")}
                                        <ActionArrow />
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Flex>
                    <a
                        href="https://www.instagram.com/rams_qazaqstan/"
                        target="_blank"
                        className="flex items-center gap-2.5 px-[40px] pb-10 text-[20px] !text-[#585A5E]  max-lg:px-5"
                    >
                        <InstagramIcon /> instagram
                    </a>
                </Flex>
            </Drawer>
            {isSuccess && (
                <div className="success fixed h-dvh w-dvw bg-[#F4F5F9] z-50" id="callback-success">
                    <Flex vertical justify="center" align="center" className="gap-6 h-full  max-lg:!p-5">
                        <img src={LogoBlack} alt="logo" />
                        <p className="max-w-100 text-center text-base text-[#585A5E]">{t("10")}</p>
                        <button
                            onClick={() => setIsSuccess(false)}
                            type="submit"
                            className="h-[60px] px-[30px] rounded-[50px] text-[#091A21] border border-[#091A21] text-[20px] cursor-pointer flex justify-center items-center gap-2.5 hover:bg-[#162A73] hover:border-[#162A73] hover:text-white transition duration-400 ease-in-out disabled:opacity-30 disabled:cursor-not-allowed max-lg:w-[calc(100%_-_40px)] max-lg:fixed max-lg:bottom-[30px]"
                        >
                            {t("11")}
                            <ActionArrow />
                        </button>
                    </Flex>
                </div>
            )}
        </div>
    );
}

export default PreLaunch;
