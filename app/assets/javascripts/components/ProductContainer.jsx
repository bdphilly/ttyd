var ProductContainer = React.createClass({
  render: function () {
    var productNodes = this.props.products.map(function (product, index) {
      return (
        <Product name={product.name} details={product.details} key={index} />
        );
    });

    return (
      <div className="productContainer">
        {productNodes}
      </div>
    );
  }
});

module.exports = ProductContainer;