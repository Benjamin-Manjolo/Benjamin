export default function _Pricing() {
  const _prices = [
    "Web design and development Mk150,000",
    "Graphic designing Mk12,000",
    "Mobile app development Mk200,000",
    "",
  ];

  return (
    <>
      <h1>Here we are going to have a list of products developed by us</h1>
      <ul>
        {_prices.map((price, index) => (
          <li key={index}>{price}</li>
        ))}
      </ul>
    </>
  );
}
