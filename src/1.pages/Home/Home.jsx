import React, { Component } from 'react';
import { urlAPI } from '../../3.helper/url-api';
import Axios from 'axios';
import ProductAtas from '../../2.component/Product/ProductAtas';
import ProductAtas2 from '../../2.component/Product/ProductAtas2';


export default class Home extends Component {

    state = {
        listID : [],
        productList : []
    }

    componentDidMount(){
        this.getProductList()
    }

    // getIdArtikel = () => {
    //     const data1 = {"test" : "percobaan"};
    //     const headers1= {'Authorization': 'JWT fefege...'};

    //     Axios({
    //         method: 'post',
    //         url: 'http://localhost:8080/BelajarJavaService/testing',
    //         headers : headers1,
    //         data: data1
    //     })
    // };

    getProductList = () => {
       Axios.get(urlAPI + '/product/get-product-depan-list')
       .then(res => {
           this.setState({ productList : res.data.value });
       }).catch(err => {
           console.log(err);
       })
    }

    renderProductList = () => {
        return this.state.productList.map((val,idx) =>{
            return (
                <ProductAtas key = {idx}
                             productID = {val.productID}
                             productName = {val.productName}
                             productDesc = {val.productDesc}
                             productPrice = {val.productPrice}
                />
            )
        })
    }


    render() {
        
        return (
            <div>
                <div className="row justify-content-center mt-5">
                    {this.renderProductList()}
                </div>
                <div className="row justify-content-center mt-5">
                    <ProductAtas2/>
                </div>
            </div>
        )
    }
}
