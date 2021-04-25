import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { api } from '../../services/api';

type CovidBrazilData = {
  provinceState: string;
  confirmed: number;
  deaths: number;
  uid: number;
};

const defaultData: CovidBrazilData[] = [];

const Charts = (): JSX.Element => {
  const [chartDataConfirmed, setChartDataConfirmed] = useState({});
  const [chartDataDeaths, setChartDataDeaths] = useState({});

  const [covidBrazil, setCovidBrazil]: [
    CovidBrazilData[],
    (setCovidBrazil: CovidBrazilData[]) => void,
  ] = useState(defaultData);

  useEffect(() => {
    api.get<CovidBrazilData[]>('countries/br/confirmed').then((response) => {
      setCovidBrazil(response.data);
    });
  }, []);

  useEffect(() => {
    chart();
  }, [covidBrazil]);

  const chart = () => {
    setChartDataConfirmed({
      labels: covidBrazil.map((states) => states.provinceState),
      datasets: [
        {
          label: 'Confirmados',
          data: covidBrazil.map((states) => states.confirmed),
          backgroundColor: [`#09ff00`],
          borderWidth: 4,
        },
      ],
    });
    setChartDataDeaths({
      labels: covidBrazil.map((states) => states.provinceState),
      datasets: [
        {
          label: 'Óbitos',
          data: covidBrazil.map((states) => states.deaths),
          backgroundColor: [`#ff0000`],
          borderWidth: 4,
        },
      ],
    });
  };

  return (
    <>
      <Bar type="bar" data={chartDataConfirmed} />
      <Line type="line" data={chartDataDeaths} />
    </>
  );
};

export default Charts;
