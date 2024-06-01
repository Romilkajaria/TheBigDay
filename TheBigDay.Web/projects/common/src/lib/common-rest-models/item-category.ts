export interface ItemCategory {
    id?: string;
    name: string;

    // nav
    subCategories?: ItemCategory[];
}
