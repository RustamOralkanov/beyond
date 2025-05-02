export const transformData = ({ name, phone, leadComment }: { name: string; phone: string; leadComment?: string }) => {
    const extractUtmValue = (param: string | null) => {
        if (!param || param === "/") return "/";
        if (param.startsWith("_c_")) return param;
        return param.split("_")[0];
    };

    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = extractUtmValue(urlParams.get("utm_source"));
    const utmMedium = extractUtmValue(urlParams.get("utm_medium"));
    const utmCampaign = extractUtmValue(urlParams.get("utm_campaign"));
    const utmAgId = extractUtmValue(urlParams.get("utm_agid"));
    const utmContent = extractUtmValue(urlParams.get("utm_content"));
    const utmPlacement = extractUtmValue(urlParams.get("utm_placement"));
    const utmTerm = extractUtmValue(urlParams.get("utm_term"));
    const gclid = urlParams.get("gclid") ?? "/";
    const fbclid = urlParams.get("fbclid") ?? "/";
    const yclid = urlParams.get("yclid") ?? "/";
    const platform = urlParams.get("referrer") ?? "/";
    const url = "rams-beyondalmaty.kz";
    const lead_comment = leadComment ?? "/";

    const datas = new FormData();

    if (name) datas.append("name", name);
    if (phone) datas.append("phone", phone);
    datas.append("utm_campaign", utmCampaign);
    datas.append("utm_content", utmContent);
    datas.append("utm_medium", utmMedium);
    datas.append("utm_source", utmSource);
    datas.append("utm_term", utmTerm);
    datas.append("url", url);
    datas.append("utm_agid", utmAgId);
    datas.append("utm_placement", utmPlacement);
    datas.append("gclid", gclid);
    datas.append("fbclid", fbclid);
    datas.append("yclid", yclid);
    datas.append("platform", platform);
    datas.append("lead_comment", lead_comment);

    return datas;
};
