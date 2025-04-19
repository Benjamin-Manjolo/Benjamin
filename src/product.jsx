export default function Product() {
  const _products = [
    "ulikut app",
    "uniportal app",
    "scores app",
    "radius",
    "scores app",
    "mood app",
    "bookstore app",
  ];

  return (
    <>
      <section className="text-white">
        <h1>Here we are going to have a list of products developed by us</h1>
        <ul>
          {_products.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
