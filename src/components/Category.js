import React, {useEffect} from "react";
import {FETCH_CATEGORY} from "../actions/types";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

/*
    View => dispatch =>
            dispatch({
                type,
                payload,

            })
 */

const Categroy=(props)=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        axios.get('http://localhost:3355/category')
            .then((result)=>{
                dispatch({
                    type: FETCH_CATEGORY,
                    payload: result.data
                })
            },[]);
        // useEffect ==> componentDidMount, componentDidUpdte
        // state 가 갱신

        const category_data= useSelector((state)=> state.foods.category);

        const html=category_data.map((m)=>
            <div className="col-md-4">
                <div className="thumbnail">
                    <img src={m.poster} alt="Lights" style={{"width": "100%"}}/>
                    <div className="caption">
                        <p>{m.title}</p>
                    </div>
                </div>
            </div>
        )

        return (
            <div className={"row"}>
                {html}
            </div>
        )
    })
}

export default Categroy