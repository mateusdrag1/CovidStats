import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'reactstrap';
import { api } from '../../services/api';
import { NavBar } from '../Navbar';

type CovidBrazilData = {
  provinceState: string;
  countryRegion: string;
  lastUpdate: number;
  lat: number;
  long: number;
  confirmed: number;
  recovered: number;
  deaths: number;
  active: number;
  admin2: null;
  fips: null;
  combinedKey: string;
  incidentRate: number;
  peopleTested: null;
  peopleHospitalized: null;
  uid: number;
  iso3: string;
};

const defaultData: CovidBrazilData[] = [];

export function Main(): JSX.Element {
  const [covidBrazil, setCovidBrazil]: [
    CovidBrazilData[],
    (setCovidBrazil: CovidBrazilData[]) => void,
  ] = useState(defaultData);

  useEffect(() => {
    api.get<CovidBrazilData[]>('countries/br/confirmed').then((response) => {
      setCovidBrazil(response.data);
    });
  }, []);

  return (
    <div id="page-content-wrapper">
      <NavBar />
      <Container className="px-4" fluid>
        <h3 className="py-3 mb-1">Informações sobre o Rio Grande Do Norte</h3>
        <Row className="my-2">
          {covidBrazil
            .filter((x) => x.provinceState === 'Rio Grande do Norte')
            .map((dados) => {
              return (
                <>
                  <Col md="3" className="py-2">
                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                      <div>
                        <h3>{dados.confirmed}</h3>
                        <p className="fs-5">Casos Confirmados</p>
                      </div>
                      <FontAwesomeIcon icon={['fas', 'user-check']} size="3x" />
                    </div>
                  </Col>
                  <Col md="3" className="py-2">
                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                      <div>
                        <h3>{dados.active}</h3>
                        <p>Casos Ativos</p>
                      </div>
                      <FontAwesomeIcon icon={['fas', 'frown']} size="3x" />
                    </div>
                  </Col>
                  <Col md="3" className="py-2">
                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                      <div>
                        <h3>{dados.deaths}9</h3>
                        <p>Óbitos</p>
                      </div>
                      <FontAwesomeIcon
                        icon={['fas', 'skull-crossbones']}
                        size="3x"
                      />
                    </div>
                  </Col>
                  <Col md="3" className="py-2">
                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                      <div>
                        <h3>{dados.recovered}</h3>
                        <p>Recuperados</p>
                      </div>
                      <FontAwesomeIcon icon={['fas', 'smile']} size="3x" />
                    </div>
                  </Col>
                </>
              );
            })}
        </Row>
        <h3 className="py-3 mb-1">Informações sobre todos os estados</h3>
        <Row className="mt-2">
          <Col>
            <Table
              bordered
              hover
              responsive
              className="bg-white rounded shadow-sm"
            >
              <thead>
                <tr>
                  <th>Nome da região</th>
                  <th>Casos Confirmados</th>
                  <th>Casos Recuperados</th>
                  <th>Casos de Óbito</th>
                  <th>Casos Ativos</th>
                </tr>
              </thead>
              <tbody>
                {covidBrazil.map((regiao) => {
                  return (
                    <tr key={regiao.uid}>
                      <td>{regiao.provinceState}</td>
                      <td>{regiao.confirmed}</td>
                      <td>{regiao.recovered}</td>
                      <td>{regiao.deaths}</td>
                      <td>{regiao.active}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
