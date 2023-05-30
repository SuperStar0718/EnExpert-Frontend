import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Radar } from "@ant-design/plots";

const RadarPolarChart = ({ Data, colors, height, tooltip }) => {
  let Data2 = [
    {
      value: 28172.13621172307,
      time: "00am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28162.999788171895,
      time: "00am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28160.440820114804,
      time: "00am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28169.364490697644,
      time: "00am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28147.453708555313,
      time: "00am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28164.63092574203,
      time: "00am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28151.352747145265,
      time: "00am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "00am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "19pm",
      value: 12340,
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 28172.13621172307,
      time: "00am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28162.999788171895,
      time: "00am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28160.440820114804,
      time: "00am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28169.364490697644,
      time: "00am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28147.453708555313,
      time: "00am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28164.63092574203,
      time: "00am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28151.352747145265,
      time: "00am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "00am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "00am",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      time: "00am",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "00am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "01am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "01am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "01am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "01am",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      time: "01am",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "01am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "02am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "02am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "02am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "02am",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      time: "02am",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "02am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 24540.45526804291,
      time: "03am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24544.64616301261,
      time: "03am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24526.391198196485,
      time: "03am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24540.611945993078,
      time: "03am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24535.350531056,
      time: "03am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24540.941475788106,
      time: "03am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24540.65032468387,
      time: "03am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "03am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "03am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 24540.45526804291,
      time: "03am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24544.64616301261,
      time: "03am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24526.391198196485,
      time: "03am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24540.611945993078,
      time: "03am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24535.350531056,
      time: "03am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24540.941475788106,
      time: "03am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24540.65032468387,
      time: "03am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "03am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "03am",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      time: "03am",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "03am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 26077.973357686125,
      time: "04am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26062.894300566324,
      time: "04am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26062.794364694277,
      time: "04am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26045.8924268044,
      time: "04am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26082.446382631217,
      time: "04am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26074.46081417153,
      time: "04am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26055.259313800783,
      time: "04am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "04am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "04am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 26077.973357686125,
      time: "04am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26062.894300566324,
      time: "04am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26062.794364694277,
      time: "04am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26045.8924268044,
      time: "04am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26082.446382631217,
      time: "04am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26074.46081417153,
      time: "04am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26055.259313800783,
      time: "04am",
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "04am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "04am",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      time: "04am",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "04am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "05am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 37609.88116233195,
      time: "05am",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37625.21044979435,
      time: "05am",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37618.59090621237,
      time: "05am",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37600.212250856,
      time: "05am",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37616.926696259325,
      time: "05am",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37645.643203288855,
      time: "05am",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37627.8818542496,
      time: "05am",
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "05am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "05am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "05am",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      time: "05am",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      value: 37609.88116233195,
      time: "05am",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37625.21044979435,
      time: "05am",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37618.59090621237,
      time: "05am",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37600.212250856,
      time: "05am",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37616.926696259325,
      time: "05am",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37645.643203288855,
      time: "05am",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37627.8818542496,
      time: "05am",
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "05am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "06am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "06am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "06am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "06am",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      time: "06am",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "06am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "07am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "07am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "07am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 71897.04197003886,
      time: "07am",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 71910.15207284891,
      time: "07am",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 71891.67260651015,
      time: "07am",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 71889.2998576695,
      time: "07am",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 71889.07809198103,
      time: "07am",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 71888.7311787578,
      time: "07am",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 71888.88247262647,
      time: "07am",
      series: "71,1 kW - 79 kW",
    },
    {
      time: "07am",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      time: "07am",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "07am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "08am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "08am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "08am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 73433.78771354652,
      time: "08am",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 73437.83104108508,
      time: "08am",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 73435.16951166777,
      time: "08am",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 73444.62106429902,
      time: "08am",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 73421.4642377424,
      time: "08am",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 73439.43247211158,
      time: "08am",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 73431.80725965793,
      time: "08am",
      series: "71,1 kW - 79 kW",
    },
    {
      time: "08am",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      time: "08am",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "08am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "09am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "09am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "09am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "09am",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      value: 79019.77064990137,
      time: "09am",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79006.09390652168,
      time: "09am",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79001.8381380324,
      time: "09am",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79003.9795109869,
      time: "09am",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79017.71619431268,
      time: "09am",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79010.67380655887,
      time: "09am",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79017.810382478,
      time: "09am",
      series: "79 kW - 86,9 kW",
    },
    {
      time: "09am",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "09am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "10am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "10am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "10am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "10am",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      value: 79381.15767081248,
      time: "10am",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79396.88103456011,
      time: "10am",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79378.42408964434,
      time: "10am",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79400.34494116445,
      time: "10am",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79403.23332683733,
      time: "10am",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79416.87810912535,
      time: "10am",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79387.66578897375,
      time: "10am",
      series: "79 kW - 86,9 kW",
    },
    {
      time: "10am",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "10am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "11am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "11am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "11am",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "11am",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      time: "11am",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "11am",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "12pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "12pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "12pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "12pm",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      time: "12pm",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "12pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "13pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "13pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "13pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "13pm",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      value: 79319.62659645817,
      time: "13pm",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79328.34853074767,
      time: "13pm",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79338.035090268,
      time: "13pm",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79325.46538548893,
      time: "13pm",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79339.13394891894,
      time: "13pm",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79310.16668169045,
      time: "13pm",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79331.70274069729,
      time: "13pm",
      series: "79 kW - 86,9 kW",
    },
    {
      time: "13pm",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "13pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "14pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "14pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "14pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "14pm",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      value: 79080.11295800863,
      time: "14pm",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79091.50369668215,
      time: "14pm",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79098.6943560474,
      time: "14pm",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79071.35131881938,
      time: "14pm",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79094.6881550519,
      time: "14pm",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79089.16464542589,
      time: "14pm",
      series: "79 kW - 86,9 kW",
    },
    {
      value: 79079.05609678068,
      time: "14pm",
      series: "79 kW - 86,9 kW",
    },
    {
      time: "14pm",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "14pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "15pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "15pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "15pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 73475.7732826996,
      time: "15pm",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 73488.05971595469,
      time: "15pm",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 73465.14336728991,
      time: "15pm",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 73469.35151831874,
      time: "15pm",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 73463.54478845476,
      time: "15pm",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 73465.2125862935,
      time: "15pm",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 73447.83816049426,
      time: "15pm",
      series: "71,1 kW - 79 kW",
    },
    {
      time: "15pm",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      time: "15pm",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "15pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "16pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "16pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "16pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 71913.7236512957,
      time: "16pm",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 71916.72717771833,
      time: "16pm",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 71945.59162022137,
      time: "16pm",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 71940.26425273585,
      time: "16pm",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 71936.09263237577,
      time: "16pm",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 71930.11317657266,
      time: "16pm",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 71916.10816245334,
      time: "16pm",
      series: "71,1 kW - 79 kW",
    },
    {
      value: 73573.12586523507,
      time: "16pm",
      series: "71,1 kW - 79 kW",
    },
    {
      time: "16pm",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      time: "16pm",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "16pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "17pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "17pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "17pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "17pm",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      time: "17pm",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "17pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "18pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 37843.19477270933,
      time: "18pm",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37853.011281280975,
      time: "18pm",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37834.94247738033,
      time: "18pm",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37832.56909870639,
      time: "18pm",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37832.82212717292,
      time: "18pm",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37835.507218191604,
      time: "18pm",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37833.85215737392,
      time: "18pm",
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "18pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "18pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "18pm",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      time: "18pm",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      value: 37843.19477270933,
      time: "18pm",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37853.011281280975,
      time: "18pm",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37834.94247738033,
      time: "18pm",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37832.56909870639,
      time: "18pm",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37832.82212717292,
      time: "18pm",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37835.507218191604,
      time: "18pm",
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 37833.85215737392,
      time: "18pm",
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "18pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 26114.577032064735,
      time: "19pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26108.71403853764,
      time: "19pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26105.941493264843,
      time: "19pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26110.34022773876,
      time: "19pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26111.531750988237,
      time: "19pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26114.013240656703,
      time: "19pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26111.894970019985,
      time: "19pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "19pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "19pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 26114.577032064735,
      time: "19pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26108.71403853764,
      time: "19pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26105.941493264843,
      time: "19pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26110.34022773876,
      time: "19pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26111.531750988237,
      time: "19pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26114.013240656703,
      time: "19pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 26111.894970019985,
      time: "19pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "19pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "19pm",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      time: "19pm",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "19pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 24561.67587065255,
      time: "20pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24557.56849649735,
      time: "20pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24562.523777626357,
      time: "20pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24566.915091944178,
      time: "20pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24554.464352977,
      time: "20pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24578.734205254543,
      time: "20pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24550.400841298266,
      time: "20pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "20pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "20pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 24561.67587065255,
      time: "20pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24557.56849649735,
      time: "20pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24562.523777626357,
      time: "20pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24566.915091944178,
      time: "20pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24554.464352977,
      time: "20pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24578.734205254543,
      time: "20pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 24550.400841298266,
      time: "20pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "20pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "20pm",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      time: "20pm",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "20pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "21pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "21pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "21pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "21pm",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      time: "21pm",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "21pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "22pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "22pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      time: "22pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "22pm",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      time: "22pm",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "22pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 28065.71740807674,
      time: "23pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28069.891492087463,
      time: "23pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28069.031255604317,
      time: "23pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28072.573149055283,
      time: "23pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28060.468233634034,
      time: "23pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28077.046627870204,
      time: "23pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28069.642206838616,
      time: "23pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "23pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "23pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
    {
      value: 28065.71740807674,
      time: "23pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28069.891492087463,
      time: "23pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28069.031255604317,
      time: "23pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28072.573149055283,
      time: "23pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28060.468233634034,
      time: "23pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28077.046627870204,
      time: "23pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      value: 28069.642206838616,
      time: "23pm",
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "23pm",
      value: 0,
      series: "23,7 kW - 31,6 kW",
    },
    {
      time: "23pm",
      value: 0,
      series: "71,1 kW - 79 kW",
    },
    {
      time: "23pm",
      value: 0,
      series: "79 kW - 86,9 kW",
    },
    {
      time: "23pm",
      value: 0,
      series: "31,6 kW - 39,5 kW",
    },
  ];

  var maximum = Math.max.apply(
    Math,
    Data2.map((o) => o.value)
  );

  //   console.log({ Data, colors, height, tooltip });
  const config = {
    data: Data,
    xField: "time",
    yField: "value",
    seriesField: "series",
    color: colors,
    tooltip: tooltip ? false : true,
    meta: {
      value: {
        min: 0,
        max: maximum,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          style: {
            lineDash: null,
          },
        },
      },
    },
    yAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          type: "line",
          style: {
            lineDash: null,
          },
        },
      },
    },
    area: {},
    point: {
      size: 2,
    },
  };

  return <Radar {...config} height={height ? height : 400} />;
};

export default RadarPolarChart;
