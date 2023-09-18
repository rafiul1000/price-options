import PriceOption from "./PriceOption/PriceOption";

const PriceOptions = () => {

  const priceOptions = [
    {
      "id": 1,
      "name": "Basic Membership",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Limited group classes",
        "Discounts on gym merchandise"
      ],
	"price": 29.99
    },
    {
      "id": 2,
      "name": "Standard Membership",
      "features": [
        "Unlimited gym access",
        "Locker room access",
        "Full access to group classes",
        "Fitness assessment",
        "Discounted personal trainer sessions"
      ],
	"price": 49.99
    },
    {
      "id": 3,
      "name": "Premium Membership",
      "features": [
        "Unlimited gym access",
        "Locker room access",
        "Full access to group classes",
        "Unlimited personal trainer sessions",
        "Nutrition consultation",
        "Access to sauna and spa facilities"
      ],
	"price": 79.99
    }
  ];


  return (
    <div>
      <h2 className="text-5xl">Best Prices in the Town</h2>
      {
        priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
      }
    </div>
  );
};

export default PriceOptions;
