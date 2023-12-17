import {Message} from "primeng/api";

const errorMessage: Message = {
  severity: "Error",
  summary: "",
  closable: true
}

const warnMessage: Message = {
  severity: "Warn",
  summary: "",
  closable: true
}

const infoMessage: Message = {
  severity: "Info",
  summary: "",
  closable: true
}

const successMessage: Message = {
  severity: "Error",
  summary: "",
  closable: true
}

export function getToastMessage(type: ToastMessageType, text: string): Message {
  switch (type) {
    case ToastMessageType.ERROR:
      return {...errorMessage, summary: text};
    case ToastMessageType.INFO:
      return {...infoMessage, summary: text};
    case ToastMessageType.SUCCESS:
      return {...successMessage, summary: text};
    case ToastMessageType.WARN:
      return {...warnMessage, summary: text};
  }
}

export enum ToastMessageType {
  ERROR,
  WARN,
  INFO,
  SUCCESS
}
