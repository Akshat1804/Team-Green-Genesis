import express from 'express';
import cors from 'cors';

const app = express();

// ✅ CORS Configuration - Change to match your frontend port
const corsOptions = {
  origin: "http://localhost:5173",  // Ensure this matches your frontend port
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());  // ✅ Allows parsing JSON requests

// 🔹 Carbon Emission Calculation Endpoint
app.post('/calculate', (req, res) => {
  try {
    console.log("Received Data:", req.body);  // ✅ Debugging log

    const { 
      electricityUsageKWh, 
      transportationUsageGallonsPerMonth,
      flightsShortHaul,
      flightsMediumHaul,
      flightsLongHaul,
      dietaryChoice, 
    } = req.body;

    if (!electricityUsageKWh || !transportationUsageGallonsPerMonth || !dietaryChoice) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // 🔹 Emission Factors
    const electricityFactor = 0.3978; 
    const transportationFactor = 9.087; 
    const airTravelFactor = { short: 100, medium: 200, long: 300 };
    const dietaryFactors = { Vegan: 200, Vegetarian: 400, Pescatarian: 600, MeatEater: 800 };

    // 🔹 Carbon Emission Calculations
    const electricityEmissions = electricityUsageKWh * electricityFactor * 12;
    const transportationEmissions = transportationUsageGallonsPerMonth * transportationFactor * 12;
    const airTravelEmissions = 
      (flightsShortHaul * airTravelFactor.short) + 
      (flightsMediumHaul * airTravelFactor.medium) + 
      (flightsLongHaul * airTravelFactor.long);
    const dietaryEmissions = dietaryFactors[dietaryChoice] || 0;

    const totalEmissions = electricityEmissions + transportationEmissions + airTravelEmissions + dietaryEmissions;

    const result = {
      electricityEmissions: { value: electricityEmissions, unit: 'kgCO2e/year' },
      transportationEmissions: { value: transportationEmissions, unit: 'kgCO2e/year' },
      airTravelEmissions: { value: airTravelEmissions, unit: 'kgCO2e/year' },
      dietaryChoiceEmissions: { value: dietaryEmissions, unit: 'kgCO2e/year' },
      totalYearlyEmissions: { value: totalEmissions, unit: 'kgCO2e/year' },
    };

    res.json(result);
  } catch (err) {
    console.error('Error calculating CO2 emissions:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 🔹 Endpoint for Pie Chart Data
app.post('/piechart-data', (req, res) => {
  try {
    console.log("Received Data for Pie Chart:", req.body);

    const { 
      electricityUsageKWh, 
      transportationUsageGallonsPerMonth,
      flightsShortHaul,
      flightsMediumHaul,
      flightsLongHaul,
      dietaryChoice, 
    } = req.body;

    if (!electricityUsageKWh || !transportationUsageGallonsPerMonth || !dietaryChoice) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // 🔹 Same emission calculations as above
    const electricityEmissions = electricityUsageKWh * 0.3978 * 12;
    const transportationEmissions = transportationUsageGallonsPerMonth * 9.087 * 12;
    const airTravelEmissions = (flightsShortHaul * 100) + (flightsMediumHaul * 200) + (flightsLongHaul * 300);
    const dietaryChoiceEmissions = { Vegan: 200, Vegetarian: 400, Pescatarian: 600, MeatEater: 800 }[dietaryChoice] || 0;

    const totalEmissions = electricityEmissions + transportationEmissions + airTravelEmissions + dietaryChoiceEmissions;

    // 🔹 Pie Chart Data Calculation
    const pieChartData = [
      { category: "Electricity", value: (electricityEmissions / totalEmissions) * 100 },
      { category: "Transportation", value: (transportationEmissions / totalEmissions) * 100 },
      { category: "Air Travel", value: (airTravelEmissions / totalEmissions) * 100 },
      { category: "Dietary Choice", value: (dietaryChoiceEmissions / totalEmissions) * 100 }
    ];

    res.json({ pieChartData, totalYearlyEmissions: totalEmissions });
  } catch (err) {
    console.error('Error generating pie chart data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
