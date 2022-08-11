const Bootstrap = () => {
  return (
    <div>
      <div className="row">
        <div className="col">First in DOM, no order applied</div>
        <div className="col order-5">
          Second in DOM, with a larger order
          <button type="button" className="btn btn-primary">
            Primary
          </button>
          <button type="button" className="btn btn-success">
            Success
          </button>
          <button type="button">BTN 1</button>
        </div>
        <div className="col order-1">Third in DOM, with an order of 1</div>
      </div>
    </div>
  );
};

export default Bootstrap;
