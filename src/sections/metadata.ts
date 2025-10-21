import type {Metadata} from "next";

const defaultImage = "/og-image.png"

type MetadataArgs = {
    title: string;
    description: string;
    imagePath?: string;
    path?: string
}

export default function createMetadata({title, description, imagePath, path}: MetadataArgs): Metadata {

    const image = imagePath ?? defaultImage
    const urlPath = path ?? "/"

    return {
        metadataBase: new URL('https://shaghighi.com'),
        title: title,
        description: description,
        openGraph: {
            type: "website",
            url: urlPath,
            title: title,
            description: description,
            siteName: title,
            images: {url: image} /// height and width?
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            images: [image],
        },
    }
}