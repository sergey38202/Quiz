import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface IRouteItem {
    icon: string | StaticImport;
    title: string;
    link: string;
}