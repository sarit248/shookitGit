import { Geometry } from "src/app/models/geometry";

export class Address {
    constructor(
        public street?: string,
        public number?: number,
        public city?: string,
        public geometry?: Geometry
    ) { }
}