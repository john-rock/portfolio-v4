---
slug: "/projects/benfords-law"
date: "2020-09-22"
title: "Benford's Law Calulator"
description: This app was built to test custom data sets against Benford's Law.
url: 'https://benfords-law.netlify.app/'
source: 'https://github.com/john-rock/benfords-law'
tags: ["React", "ChartJS", "data science"]
---
Benford's Law is a little known law that observes first digits in a naturally occurring data set. I just recently found out about it after watching episode four ("Digits") of the Netflix original series Connected. The law states that given a set of data, the first digits do not display a uniform distribution, but instead are arranged in a way that the digit "1" occurs most often, followed by "2", "3", etc.

Per Wikipedia

> "It has been shown that this result applies to a wide variety of data sets, including electricity bills, street addresses, stock prices, house prices, population numbers, death rates, lengths of rivers..."

I found this fascinating and wanted to build a calculator to test it on my own.

Using React and a little bit of Recharts I created an app that lets you input data, grab the first digits, calculate the percent of occurrence, and outputs the data to a chart.