import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { getStoredDonatedCard } from "../../utilities/localStorage";
import {
  getDonatedCardsPrice,
  getPercentage,
} from "../../utilities/percentage";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const cards = useLoaderData();

  const cardsPrice = getDonatedCardsPrice(cards);
  // console.log(cardsPrice);

  const donatedCardIds = getStoredDonatedCard();
  const donatedCards = cards.filter((card) => donatedCardIds.includes(card.id));
  const donatedCardsPrice = getDonatedCardsPrice(donatedCards);
  // console.log(donatedCardsPrice);

  const { totalDonation, remainingDonation } = getPercentage(
    cardsPrice,
    donatedCardsPrice
  );
  // ==========================================================
  const total = parseFloat(totalDonation);
  const remaining = parseFloat(remainingDonation);

  const pieChartData = [
    { name: "Total", value: total },
    { name: "Remaining", value: remaining },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, percent }) => {
    const x = cx + 50 * Math.cos(-midAngle * RADIAN);
    const y = cy + 90 * Math.sin(-midAngle * RADIAN);

    return (
      <text
        className="text-2xl font-bold"
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div>
      <Navbar></Navbar>
     
      <div className="w-full">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              dataKey="value"
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              fill="#8884d8"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.name === "Total" ? "#00C49F" : "#FF444A"}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center items-center gap-12 mt-16">
        <p className="flex items-center justify-center gap-2 text-lg">Your Donation <hr className="w-[100px] bg-[#00C49F] h-3 rounded-sm" /></p>
        <p className="flex items-center justify-center gap-2 text-lg">Total Donation <hr className="w-[100px] bg-[#FF444A] h-3 rounded-sm" /></p>
      </div>
    </div>
  );
};

Statistics.propTypes = {};

export default Statistics;
