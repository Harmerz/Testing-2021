export function GenericPage({ customComponent, className, children }) {
    const Component = customComponent || 'div';
    return (
        <Component className={`py-8 px-4 sm:px-8 ${className}`}>
            {children}
        </Component>
    );
}

export function PageTitle({ className, noMB, children }) {
    return (
        <h1
            className={`text-center font-display text-4xl font-bold ${
                !noMB ? 'mb-4 ' : ''
            }${className}`}
        >
            {children}
        </h1>
    );
}
