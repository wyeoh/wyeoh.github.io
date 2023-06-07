---
layout: page
title: distributed constraint optimization
img: assets/img/project-dcop.jpg
importance: 3
category: active
---
<img style="float: left; margin: 5px 10px 5px 0px; width: 240px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" src="/assets/img/project-dcop.jpg">
A distributed constraint optimization problem (DCOP) is a problem where multiple agents coordinate with each other to take on values such that the sum of the resulting constraint costs, that are dependent on the values of the agents, is minimal. DCOPs are a popular way of formulating and solving multi-agent coordination problems such as the distributed scheduling of meetings, distributed coordination of unmanned air vehicles and the distributed allocation of targets in sensor networks. Privacy concerns in the scheduling of meetings and the limitation of communication and computation resources of each sensor in a sensor network makes centralized constraint optimization difficult. Therefore, the nature of these applications call for a distributed approach.

Our current research focus is three fold:
- We seek to speed and scale up DCOP algorithms so that they can be amenable for real-world deployment. We have proposed methods that (1) exploit domain properties of the problems; (2) are parallelizable and, thus, sped up using graphical processing units (GPUs); (3) prune the search space through consistency propagation techniques; etc.
- We are investigating ways to enrich the DCOP model and extend DCOP algorithms to better account for imperfect communication (e.g., message delays and message losses).
- We plan to enrich DCOPs so that they can be used to model dynamic and uncertain problems through integration with concepts from decentralized Markov decision processes (Dec-MDPs). The proposed models and algorithms will serve as a bridge between DCOPs and Dec-MDPs, balancing the tradeoffs between expressivity and scalability.

<h2>sponsors</h2>

<p></p>

<img style="float: left; margin: 0px 10px 0px 0px;" src="/assets/img/bsf.png" width="50px">
[Communication-Aware Distributed Constraint Optimization Problems: Foundations, Models, and Algorithms](https://www.bsf.org.il/search-grant/?SearchPI=yeoh).
Binational Science Foundation (2019 – 2022).

<img style="float: left; margin: 0px 10px 0px 0px;" src="/assets/img/nsf.png" width="50px">
[CAREER: Decentralized Constraint-based Optimization for Multi-Agent Planning and Coordination](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1550662).
National Science Foundation (2016 – 2021).

<img style="float: left; margin: 0px 10px 0px 0px;" src="/assets/img/nsf.png" width="50px">
[BSF: 2014012: Robust Solutions for Distributed Constraint Optimization Problems](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1540168).<br/>
National Science Foundation (2015 – 2019).
