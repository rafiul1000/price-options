import PriceOption from "./PriceOption/PriceOption";

const PriceOptions = () => {
  {
    const priceOptions = [
      {
        id: 1,
        name: "Basic Membership",
        price: "$30/month",
        features: [
          "Access to gym equipment",
          "Locker room access",
          "Limited group classes",
        ],
      },
      {
        id: 2,
        name: "Premium Membership",
        price: "$60/month",
        features: [
          "Unlimited gym access",
          "Locker room access",
          "Full access to group classes",
          "1 personal trainer session/month",
        ],
      },
      {
        id: 3,
        name: "Family Membership",
        price: "$100/month",
        features: [
          "Access for 2 adults and 2 children",
          "Locker room access",
          "Full access to group classes for all family members",
          "2 personal trainer sessions/month",
        ],
      },
    ];
  }

  return (
    <div>
      <h2 className="text-5xl">Best Prices in the Town</h2>
      {
        priceOptions.map((option => <PriceOption key={option.id} option={option}></PriceOption>
      ))}
    </div>
  );
};

export default PriceOptions;
