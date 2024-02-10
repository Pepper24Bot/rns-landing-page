export interface Navigation {
    title: string
    id: string
}

export interface Step {
    heading: string
    subheading: string
    linkText: string
    url?: string
}

export interface Modal {
    props?: React.ReactNode;
    title?: string;
    confirmLoading?: boolean;
    confirmBtnLabel?: string;
    ButtonProps?: React.ReactNode;
    disableCancel?: boolean;
    cancelBtnLabel?: string;
    downloadFile?: string;
    // This is in preparation for reusability
    // Intentionally make this a promise, so we can perform waiting
    confirmAction?: () => void;
    saveCallback?: () => void;
    cancelCallback?: () => void;
    clearCallback?: () => void;
}
