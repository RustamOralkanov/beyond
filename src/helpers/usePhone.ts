import { useTranslation } from "react-i18next";

export const usePhone = () => {
    const { t } = useTranslation();
    const formatPhoneNumber = (value: string) => {
        const cleanValue = value.replace(/\D/g, "");

        if (cleanValue.length <= 1) return "+7";
        if (cleanValue.length <= 4) return `+7 (${cleanValue.slice(1)}`;
        if (cleanValue.length <= 7) return `+7 (${cleanValue.slice(1, 4)}) ${cleanValue.slice(4)}`;
        if (cleanValue.length <= 9) return `+7 (${cleanValue.slice(1, 4)}) ${cleanValue.slice(4, 7)}-${cleanValue.slice(7)}`;
        return `+7 (${cleanValue.slice(1, 4)}) ${cleanValue.slice(4, 7)}-${cleanValue.slice(7, 9)}-${cleanValue.slice(9, 11)}`;
    };

    const validatePhoneNumber = (_: unknown, value: string) => {
        const pattern = /^\+7 \((700|701|702|703|704|705|706|707|708|709|747|750|751|760|761|762|763|764|771|775|776|777|778)\) \d{3}-\d{2}-\d{2}$/;
        if (pattern.test(value)) {
            return Promise.resolve();
        } else if (value && value.length < 18) {
            return Promise.reject(t("12"));
        } else {
            return Promise.reject(t("13"));
        }
    };

    return {
        formatPhoneNumber,
        validatePhoneNumber,
    };
};
