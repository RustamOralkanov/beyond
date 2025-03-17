export const transformData = ({ name, phone, leadComment }: { name: string; phone: string; leadComment?: string }) => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmCampaign = urlParams.get("utm_campaign") ?? "/";
    const utmContent = urlParams.get("utm_content") ?? "/";
    const utmMedium = urlParams.get("utm_medium") ?? "/";
    const utmSource = urlParams.get("utm_source") ?? "/";
    const utmAgId = urlParams.get("utm_agid") ?? "/";
    const utmTerm = urlParams.get("utm_term") ?? "/";
    const gadSource = urlParams.get("gad_source") ?? "/";
    const gclid = urlParams.get("gclid") ?? "/";
    const fbclid = urlParams.get("fbclid") ?? "/";
    const yclid = urlParams.get("yclid") ?? "/";
    const referer = urlParams.get("referer") ?? "/";
    const url = "rams-beyondalmaty.kz";
    const lead_comment = leadComment ?? "/";

    const datas = new FormData();

    if (name) datas.append("name", name);
    if (phone) datas.append("phone", phone);
    datas.append("type_of_premises", "apartment");
    datas.append("utm_campaign", utmCampaign);
    datas.append("utm_content", utmContent);
    datas.append("utm_medium", utmMedium);
    datas.append("utm_source", utmSource);
    datas.append("utm_term", utmTerm);
    datas.append("utm_agid", utmAgId);
    datas.append("gad_source", gadSource);
    datas.append("url", referer);
    datas.append("from_site", url);
    datas.append("gclid", gclid);
    datas.append("fbclid", fbclid);
    datas.append("yclid", yclid);
    datas.append("lead_comment", lead_comment);

    return datas;
};
