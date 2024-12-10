function Get_Type(parameter){
    let type = typeof parameter;
    console.log("Type:", type);
    return type;
}
Get_Type({});
Get_Type(true);
Get_Type(2);
Get_Type("abcd");
Get_Type(undefined);
