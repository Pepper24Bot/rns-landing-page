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
    ButtonProps?: React.ReactNode;
    disableCancel?: boolean;
    // This is in preparation for reusability
    // Intentionally make this a promise, so we can perform waiting
    confirmAction?: () => Promise<void>;
    saveCallback?: () => void;
    cancelCallback?: () => void;
    clearCallback?: () => void;
}
