interface IProduct {
  name: string;
  price: number;
  discount?: number;
}

const ProductDetails = ({ name, price, discount }: IProduct) => {
  return (
    <div className="border">
      <div className=" text-left px-2 my-2">
        <p>Produto: {name}</p>
        <p>
          {discount ? (
            <p>
              <del>Valor: R$ {price.toFixed(2)}</del>
            </p>
          ) : (
            <p>Valor: R$ {price.toFixed(2)}</p>
          )}
        </p>
        {discount && (
          <>
            <p>Desconto: R$ {discount.toFixed(2)}</p>
            <p>Valor final: R$ {(price - discount).toFixed(2)}</p>
          </>
        )}
      </div>
      <button className="w-[calc(100%-1rem)] p-1 m-1 bg-green-700 border-2 rounded-sm">
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductDetails;
