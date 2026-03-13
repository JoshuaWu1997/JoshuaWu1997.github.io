# Selected Publications 

<small>*† Corresponding author*</small>
<small>*\* Equal Contribution*</small>

<div class="pub-section" data-pub-scope="featured">
<div class="pub-filters">
  <input type="text" class="pub-filters__search" placeholder="Search by title, authors, venue..." aria-label="Search publications">
  <div class="pub-filters__chips">
    <button type="button" class="pub-filter-chip active" data-filter="all">All</button>
    {% assign years = site.data.publications.featured | map: "year" | uniq | sort | reverse %}
    {% for y in years %}
    <button type="button" class="pub-filter-chip" data-filter="{{ y }}">{{ y }}</button>
    {% endfor %}
  </div>
</div>

{% assign grouped = site.data.publications.featured | group_by: "year" | sort: "name" | reverse %}
{% for year_group in grouped %}
### {{ year_group.name }}

<ul class="pub-list">
{% for item in year_group.items %}
<li class="pub-item" data-year="{{ item.year }}" data-venue="{{ item.venue | downcase }}">
  <strong>{{ item.title }}</strong> <br>
  {{ item.authors }}. <br>
  <span class="pub-venue-badge">{{ item.venue }}</span>
  {% if item.url %}[[Paper]({{ item.url }})]{% endif %}
  {% if item.abstract %}
  <div>
    <button type="button" class="pub-abstract-toggle" data-target="abstract-featured-{{ year_group.name }}-{{ forloop.index }}">Abstract</button>
    <div id="abstract-featured-{{ year_group.name }}-{{ forloop.index }}" class="pub-abstract">{{ item.abstract }}</div>
  </div>
  {% endif %}
</li>
{% endfor %}
</ul>

{% endfor %}

## US Patents

{% if site.data.publications.patents and site.data.publications.patents.size > 0 %}
<ul class="pub-list">
{% for item in site.data.publications.patents %}
<li class="pub-item" data-year="{{ item.year }}" data-venue="patent">
  <strong>{{ item.title }}</strong> <br>
  {{ item.authors }}. <br>
  <span class="pub-venue-badge">{{ item.venue }}, {{ item.year }}</span>
</li>
{% endfor %}
</ul>
{% endif %}
</div>
