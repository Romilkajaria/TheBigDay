export class FormField {
    fieldId?: string;
    type!: FieldType;
    label!: string;
    placeholder?: string;
    required!: boolean;
}


export enum FieldType
{
    STRING,
    INT32,
    INT64,
    CHECKBOX,
    DROPDOWN,
    DROPDOWN_MULTISELECT,
    RICH_TEXT,
    RADIO,
    FILE_UPLOAD,
    DATE_PICKER,
    COLOR_PICKER,
    EMAIL,
}

export const FieldTypeLabelRecord: Record<FieldType, string> = {
    [FieldType.STRING]: 'STRING',
    [FieldType.INT32]: 'INT32',
    [FieldType.INT64]: 'INT64',
    [FieldType.CHECKBOX]: 'CHECKBOX',
    [FieldType.DROPDOWN]: 'DROPDOWN',
    [FieldType.DROPDOWN_MULTISELECT]: 'DROPDOWN_MULTISELECT',
    [FieldType.RICH_TEXT]: 'RICH_TEXT',
    [FieldType.RADIO]: 'RADIO',
    [FieldType.FILE_UPLOAD]: 'FILE_UPLOAD',
    [FieldType.DATE_PICKER]: 'DATE_PICKER',
    [FieldType.COLOR_PICKER]: 'COLOR_PICKER',
    [FieldType.EMAIL]: 'EMAIL',
}
