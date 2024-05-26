import {Message} from "primeng/api";

const errorMessage: Message = {
  severity: "error",
  summary: "Error",
}

const warnMessage: Message = {
  severity: "warn",
  summary: "Warning",
}

const infoMessage: Message = {
  severity: "info",
  summary: "Info",
}

const successMessage: Message = {
  severity: "success",
  summary: "Success",
}

export function getToastMessage(type: ToastMessageType, text: string, closeable = true): Message {
  switch (type) {
    case ToastMessageType.ERROR:
      return {...errorMessage, detail: text, closable: closeable};
    case ToastMessageType.INFO:
      return {...infoMessage, detail: text, closable: closeable};
    case ToastMessageType.SUCCESS:
      return {...successMessage, detail: text, closable: closeable};
    case ToastMessageType.WARN:
      return {...warnMessage, detail: text, closable: closeable};
  }
}

export enum ToastMessageType {
  ERROR,
  WARN,
  INFO,
  SUCCESS
}
