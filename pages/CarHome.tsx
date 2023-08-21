import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import React, { useRef, useState, useEffect, MouseEvent, useCallback } from 'react';
import { Flex, Icon } from 'vcc-ui';
import { SliderSettings } from '../settings/SliderSettings';

import { NextPage } from 'next';
import { CarFilter } from '../components/CarFilter';
import { CarCard } from '../components/CarCard';
import styles from './styles.module.css'
//Interface
export interface CarObj {
  readonly id: string;
  readonly modelName: string;
  readonly bodyType: string;
  readonly modelType: string;
  readonly imageUrl: string;
}

const CarHome: NextPage = () => {
  const [filterData, setFilterData] = useState<Array<CarObj>>([]);
  const [carData, setCarData] = useState<Array<CarObj>>([]);


  //To-do : Handle it when there's no data
  //Loading state (loading...)
  //Fetching the JSON data from the api
  useEffect(() => {
    fetch('./api/cars.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCarData(data);
        setFilterData(data);
      })
      .catch((e) => console.log('Error:', e));
  }, []);


  //Called by 'onClick'
  const handleFilterClicked = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const carsFiltered = carData
      .map((t) => (e.currentTarget.value === t.bodyType ? t : null))
      .filter((t): t is CarObj => t != null);

    if (carsFiltered.length > 0) {
      //Filtered data
      setFilterData(carsFiltered);
    } else {
      //Default data
      setFilterData(carData);
    }
  }, [carData]);

  //Slider
  const slider = useRef<Slider>(null);

  return (
    <>
      <Flex extend={{ padding: 16 }} className={styles.home}>
        <CarFilter data={carData} onFilterClicked={handleFilterClicked} />
        <Slider ref={slider} {...SliderSettings}>
          {filterData.map((car: CarObj) => (
            <CarCard key={car.id} id={car.id} modelName={car.modelName} bodyType={car.bodyType} modelType={car.modelType} imageUrl={car.imageUrl} />
          ))}
        </Slider>
        <Flex className="button-nav">
          <button
            aria-label="previous"
            onClick={() => slider?.current?.slickPrev()}
          >
            <Icon type="mediacircled-previous-40"></Icon>
          </button>
          <button
            aria-label="previous"
            onClick={() => slider?.current?.slickNext()}
          >
            <Icon type="mediacircled-next-40"></Icon>
          </button>
        </Flex>
      </Flex>
    </>
  );
};

export default CarHome;
