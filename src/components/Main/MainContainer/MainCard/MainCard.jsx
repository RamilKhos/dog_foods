export function MainCard({
  name, price, pictures, stock,
}) {
  return (
    <div className="col text-start">
      <div className="card shadow p-3 bg-light rounded-3 ">

        <img src={pictures} className="card-img-top rounded mb-4" alt="{name}" />

        <h3 className="card-title fs-5 fw-bold">
          {price}
          {' '}
          ₽
        </h3>

        <h5 className="card-title fs-6 text-black-50">
          {stock}
          {' '}
          шт.
        </h5>

        <div>
          <h6 className="mb-4 fs-5">{name}</h6>
        </div>
        <div className="stars d-flex justify-content-center gap-3" />

        <button type="button" className="btn btn-warning rounded-pill fw-bold fs-6">В корзину</button>

      </div>
    </div>
  )
}
