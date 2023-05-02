module.exports = [
  [POOL.gauge,ZERO_ADDRESS,ZERO_ADDRESS,ZERO_ADDRESS,ZERO_ADDRESS],
  [ZERO_ADDRESS,ZERO_ADDRESS, POOL.token, ZERO_ADDRESS,ZERO_ADDRESS,ZERO_ADDRESS,ZERO_ADDRESS],
  true,
  0,
  [],
  [],
  [],
  [],
  [],
  [],
  10000
];
// npx hardhat verify --network bsc 0x2AdC3185169D53ef4E447FC219A9f24CDD6FeA90 --constructor-args ./scripts/gauges/gauge-args-verify.js