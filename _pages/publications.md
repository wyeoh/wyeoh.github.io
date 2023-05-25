---
layout: page
permalink: /publications/
title: publications
description: 
article_years: [2023,2022,2019,2018,2017,2016,2012,2010]
inproceedings_years: [2022, 2021]
sort_by: type, year
type_order: [article, inproceedings]
order: descending_
nav: true
nav_order: 2
---
 
<!-- _pages/publications.md -->
<div class="publications">

<h3>journal and magazine articles</h3>
{%- for y in page.article_years %}
	<h2 class="year">{{y}}</h2>
	{% bibliography -f {{ site.scholar.primary_bibliography }} -q @article[year={{y}}]* %}
{% endfor %}

<br/>

<h3>conference publications (full papers)</h3>
{%- for y in page.inproceedings_years %}
	<h2 class="year">{{y}}</h2>
	{% bibliography -f {{ site.scholar.primary_bibliography }} -q @inproceedings[year={{y}}]* %}
{% endfor %}

<br/>

<h3>symposium and workshop papers</h3>
{%- for y in page.inproceedings_years %}
	<h2 class="year">{{y}}</h2>
	{% bibliography -f {{ site.scholar.secondary_bibliography }} -q @inproceedings[year={{y}}]* %}
{% endfor %}

</div>
