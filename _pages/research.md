---
layout: page
title: research
permalink: /research/
description: 
nav: true
nav_order: 1
display_categories: [active]
horizontal: false
---

<img src="/assets/img/wordart.jpg" width="100%">

My research interest is in artificial intelligence, where I develop methods based on decision theory, constraint programming, and heuristic search and apply them on agent-based systems. More recently, my research has focused on enabling human-AI collaboration through human-aware decision-making algorithms. The word cloud above has been obtained using [Word Art](https://wordart.com/) on the abstracts of my [papers](/publications).

Below are current active projects that we are pursuing. Please visit our [projects page](/projects/) for a complete list of projects, including our older archived projects. 

<!-- pages/projects.md -->
<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  {%- assign categorized_projects = site.projects | where: "category", category -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display projects without categories -->
  {%- assign sorted_projects = site.projects | sort: "importance" -%}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>

<br/>

<h2>research grants</h2>

<p></p>

<img style="float: left; margin: 0px 10px 0px 0px;" src="/assets/img/nsf.png" width="50px">
[Collaborative Research: RI: Small: End-to-end Learning of Fair and Explainable Schedules for Court Systems](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2232055).
National Science Foundation (2023 – 2026).

<img style="float: left; margin: 0px 10px 0px 0px;" src="/assets/img/jpmc.jpg" width="50px">
[Improving Client Experience Through Goal Recognition and Explainable Assistance in Adaptive Systems](https://www.jpmorgan.com/technology/artificial-intelligence/research-awards/faculty-research-awards-2022).
J.P. Morgan Chase Bank (2022 – 2023).

<img style="float: left; margin: 0px 10px 0px 0px;" src="/assets/img/bsf.png" width="50px">
[Communication-Aware Distributed Constraint Optimization Problems: Foundations, Models, and Algorithms](https://www.bsf.org.il/search-grant/?SearchPI=yeoh).
Binational Science Foundation (2019 – 2022).

<img style="float: left; margin: 0px 10px 0px 0px;" src="/assets/img/darpa.jpg" width="50px">
[Anytime Reasoning and Analysis for Kill-Web Negotiation and Instantiation Across Domains (ARAKNID)](https://beta.sam.gov/awards/88568401%2BAWARD).
Defense Advanced Research Projects Agency (2019 – 2022).

<img style="float: left; margin: 0px 10px 0px 0px;" src="/assets/img/boeing.png" width="50px">
[Integrated Computational and Cognitive Workflows for Improved Security and Usability](#). <br/>
Boeing (2019).

<img style="float: left; margin: 0px 10px 0px 0px;" src="/assets/img/nsf.png" width="50px">
[RI: Small: Collaborative Research: Preference Elicitation and Device Scheduling for Smart Homes](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1812619).
National Science Foundation (2018 – 2021).

<img style="float: left; margin: 0px 10px 0px 0px;" src="/assets/img/darpa.jpg" width="50px">
[Mission-oriented Adaptive Placement of Task and Data (MAP)](https://beta.sam.gov/awards/70580675%2BAWARD).<br/>
Defense Advanced Research Projects Agency (2017 – 2021).

<img style="float: left; margin: 0px 10px 0px 0px;" src="/assets/img/nsf.png" width="50px">
[CAREER: Decentralized Constraint-based Optimization for Multi-Agent Planning and Coordination](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1550662).
National Science Foundation (2016 – 2021).

<img style="float: left; margin: 0px 10px 0px 0px;" src="/assets/img/nsf.png" width="50px">
[BSF: 2014012: Robust Solutions for Distributed Constraint Optimization Problems](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1540168).<br/>
National Science Foundation (2015 – 2019).

<img style="float: left; margin: 0px 10px 0px 0px;" src="/assets/img/nsf.png" width="50px">
[iCREDITS: Interdisciplinary Center of Research Excellence in Design of Intelligent Technologies for Smartgrids](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1345232).
National Science Foundation (2014 – 2019).<br/>
<font size = "1"><br/></font>

<h2>research awards</h2>
- Best Paper Award, International Conference on Distributed Artificial Intelligence (DAI) (2021)
- Early Career Spotlight Talk, International Joint Conference on Artificial Intelligence (IJCAI) (2018)
- CAREER Award, National Science Foundation (2016)
- AI’s 10 to Watch, IEEE Intelligent Systems (2015)
- Outstanding Research Assistant Award, Computer Science Department, University of Southern California (2009)
- Best Student Paper Award Nomination for Caching Schemes for DCOP Search Algorithms, International Conference on Autonomous Agents and Multiagent Systems (AAMAS) (2009)