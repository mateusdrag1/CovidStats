import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Col, Row } from 'reactstrap';
import { api } from '../../services/api';

type CovidBrazilData = {
  provinceState: string;
  confirmed: number;
  deaths: number;
  uid: number;
};

const defaultData: CovidBrazilData[] = [];

const options = {
  scales: {
    x: [
      {
        display: false,
      },
    ],
  },
};

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
        },
      ],
    });
  };

  return (
    <>
      <Row>
        <Col md="6">
          <div className="p-3 bg-white shadow my-2 rounded d-flex justify-content-around align-items-center">
            <Bar type="bar" data={chartDataConfirmed} options={options} />
          </div>
        </Col>
        <Col md="6">
          <div className="p-3 bg-white shadow my-2 rounded d-flex justify-content-around align-items-center">
            <Line type="line" data={chartDataDeaths} options={options} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Charts;
