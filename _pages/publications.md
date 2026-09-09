---
layout: page
permalink: /publications/
title: publications
description: 
years: [2026,2025,2024,2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008]
article_years: [2023,2022,2019,2018,2017,2016,2012,2010]
conference_years: [2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008]
ext_abstract_years: [2021,2020,2018,2015,2014,2012,2011,2008]
workshop_years: [2022,2021]
sort_by: type, year
type_order: [article, inproceedings]
order: descending_
nav: true
nav_order: 2
---
 
<!-- _pages/publications.md -->
<div class="publications">

<div class="publication-search" hidden>
  <label for="publication-search" class="sr-only">Search publications</label>
  <input type="search" id="publication-search" placeholder="Type to filter" aria-describedby="publication-search-status" aria-controls="publication-results" autocomplete="off">
  <p id="publication-search-status" class="sr-only" role="status" aria-live="polite" aria-atomic="true"></p>
</div>

<div id="publication-results">
{%- for y in page.years %}
	<section class="publication-year" aria-label="{{y}} publications">
	<h2 class="year">{{y}}</h2>
	{% bibliography -f {{ site.scholar.primary_bibliography }} -q @article[year={{y}}]|@inproceedings[year={{y}}]* %}
	</section>
{% endfor %}
</div>
<p id="publication-search-empty" hidden>No publications found. Try a different title, author, venue, or year.</p>

<script src="{{ '/assets/js/publication-search.js' | relative_url }}" defer></script>