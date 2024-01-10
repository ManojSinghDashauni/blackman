import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client= createClient({
    apiVersion:'2022-03-07',
    dataset: 'production',
    projectId:'dvy7hr88',
    useCdn:false
});

const builder = ImageUrlBuilder(client)

export function urlFor(source:any){
    return builder.image(source);
}
