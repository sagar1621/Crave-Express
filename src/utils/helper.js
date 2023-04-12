import { RestrauntList } from "../config";

export function filterData(searchText,restraunt){
    return restraunt.filter((restraunt)=>restraunt?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
};