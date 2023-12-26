import {Message} from "primeng/api";

const errorMessage: Message = {
  severity: "error",
  summary: "Error",
  closable: true
}

const warnMessage: Message = {
  severity: "warn",
  summary: "Warning",
  closable: true
}

const infoMessage: Message = {
  severity: "info",
  summary: "Info",
  closable: true
}

const successMessage: Message = {
  severity: "success",
  summary: "Success",
  closable: true,
}

export function getToastMessage(type: ToastMessageType, text: string): Message {
  switch (type) {
    case ToastMessageType.ERROR:
      return {...errorMessage, detail: text};
    case ToastMessageType.INFO:
      return {...infoMessage, detail: text};
    case ToastMessageType.SUCCESS:
      return {...successMessage, detail: text};
    case ToastMessageType.WARN:
      return {...warnMessage, detail: text};
  }
}

export enum ToastMessageType {
  ERROR,
  WARN,
  INFO,
  SUCCESS
}
