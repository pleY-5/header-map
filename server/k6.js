import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 100,
  duration: "30s"
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export default function() {
  const percentage = Math.random();
  // if(percentage > 0.3) {
  //   http.get(`http://localhost:7763/api/header/${getRandomArbitrary(9998000,10000000)}/res/`)
  //   sleep(0.05);
  // } else if (percentage > 0.1) {
  //   http.get(`http://localhost:7763/api/header/${getRandomArbitrary(1,10000000)}/res/`);
  //   sleep(0.05);
  // } else {
    http.post(`http://localhost:7763/api/header/${getRandomArbitrary(10000000,90000000)}/res/`);
    sleep(0.05);
  // }
};