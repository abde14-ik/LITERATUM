export function cn(
    ...classes: Array<string | number | false | null | undefined>
): string {
    return classes.filter(Boolean).join(" ");
}

export function prefix(path: string): string {
    const basePath = process.env.NODE_ENV === "production" ? "/gdi" : "";
    return `${basePath}${path}`;
}
