import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product.name);
    const {image, name , id, phone, email,YearlyIncome} = props.product
    return (
        <div className="product">
        {/* <div>
          <img src={image} alt=""/>
        </div>
        <div className="">
          
            <p>Id :{id}</p>
            <p>Name : {name}</p>
            <p>Phone: {phone}</p>
            <p>E-mail: {email}</p>
            <p><b>Yearly income : {YearlyIncome}</b></p>
            <button className="main-button"
            onClick= {() => props.handleAddProduct(props.product)}>
                Add Me</button>
        </div> */}

<div className="card" style={{width: "20rem"}}>
  <img className="card-img-top rounded-circle" src={image} alt="Card image cap"></img>
  <div className="card-body">
      <h5 className="card-text">ID No: {id}</h5>
      <h5 className="card-text">{name}</h5>
      <p className="card-text">E-mail: {email}</p>
      <h6 className="card-text"><b>Yearly income : {YearlyIncome}</b></h6>
    <button className="main-button"
            onClick= {() => props.handleAddProduct(props.product)}>
                ADD ME</button>
  </div>
</div>
    </div>
    );
};

export default Product;
{/* <div class="card" style={{width: 18rem;}}>
  <img class="card-img-top" src="..." alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>  */}