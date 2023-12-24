import React from "react";
import DataItem from "../MyPosts/DataItem";


const DataList = (props) => {

    return (

        <>

            {props.data.map(item => <DataItem id={item.id} name={item.name} age={item.age} />)}
        </>
    )
    }

export default DataList