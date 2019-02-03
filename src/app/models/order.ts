import { Client } from "./client";
import { Address } from "./address";

export class Order {
    constructor(
        public id?: string,
        public from?: Date,
        public to?: Date,
        public humanID?: number,
        public client?: Client,
        public address?: Address
    ) { }
}