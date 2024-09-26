import { toast } from "react-toastify";

export const handleCopyToClipboard = (text, index, t) => {
  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(text);
      if (typeof t === "function") {
        toast.success(t("linkCopied"));
      } else {
        toast.success("Link copied");
      }
    } catch {
      fallbackCopy(text, t);
    }
  };

  const fallbackCopy = (text, t) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    if (typeof t === "function") {
      toast.success(t("linkCopied"));
    } else {
      toast.success("Link copied");
    }
  };

  copyText();
};

export const extractNameFromConfigURL = (url) => {
  const namePattern = /#([^#]*)/;
  const match = url.match(namePattern);

  if (match) return decodeURIComponent(match[1]);

  if (url.startsWith("vmess://")) {
    const encodedString = url.replace("vmess://", "");
    const decodedString = atob(encodedString);
    try {
      return JSON.parse(decodedString).ps;
    } catch (error) {
      console.error("Invalid vmess URL format:", error);
      return null;
    }
  }
  return null;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const tehranOffset = 3.5 * 60 * 1000;
  const tehranTime = new Date(date.getTime() + tehranOffset);

  return tehranTime.toLocaleString("en-US", {
    timeZone: "Asia/Tehran",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatExpireDate = (timestamp) =>
  formatDate(new Date(timestamp * 1000).toISOString());

export const calculateRemainingTime = (expireTimestamp, t) => {
  const remainingSeconds = expireTimestamp - Math.floor(Date.now() / 1000);

  if (remainingSeconds <= 0) return t("expired");

  const minutes = Math.floor(remainingSeconds / 60);
  const hours = Math.floor(remainingSeconds / (60 * 60));
  const days = Math.floor(remainingSeconds / (60 * 60 * 24));
  const years = Math.floor(days / 365);

  if (years > 0) return `${years} ${t("years")}`;
  if (days > 0) return `${days} ${t("days")}`;
  if (hours > 0) return `${hours} ${t("hours")}`;
  return `${minutes} ${t("minutes")}`;
};

export const calculateUsedTimePercentage = (expireTimestamp) => {
  const remainingSeconds = expireTimestamp - Math.floor(Date.now() / 1000);

  if (remainingSeconds <= 0) return 100;

  const daysRemaining = Math.floor(remainingSeconds / (60 * 60 * 24));

  if (daysRemaining <= 30) {
    return ((30 - daysRemaining) / 30) * 100;
  }

  if (daysRemaining <= 90) {
    return ((90 - daysRemaining) / 90) * 100;
  }

  if (daysRemaining <= 180) {
    return ((180 - daysRemaining) / 180) * 100;
  }

  return 0;
};

export const formatTraffic = (bytes, t) => {
  if (bytes === null) {
    return t("infinity");
  }

  if (bytes < 0) {
    return t("negative");
  }

  const units = [t("B"), t("KB"), t("MB"), t("GB"), t("TB")];
  const thresholds = [1, 1024, 1024 ** 2, 1024 ** 3];

  for (let i = 0; i < thresholds.length; i++) {
    if (bytes < thresholds[i] * 1024) {
      return `${(bytes / thresholds[i]).toFixed()} ${units[i]}`;
    }
  }
  return `${(bytes / 1024 ** 4).toFixed(2)} ${t("TB")}`;
};
