import { DescriptionData } from "./DescrtiptionData";

export interface BlockVertData {
    title:          string;
    image:          string;
    previous_price: number;
    price:          number;
    name:           string;
    description:    DescriptionData;
}