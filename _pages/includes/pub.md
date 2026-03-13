# Selected Publications 

<small>*† Corresponding author*</small>
<small>*\* Equal Contribution*</small>

{% assign grouped = site.data.publications.featured | group_by: "year" | sort: "name" | reverse %}
{% for year_group in grouped %}
### {{ year_group.name }}

{% for item in year_group.items %}
* **{{ item.title }}** <br>
  {{ item.authors }}. <br>
  <span style="background-color: #e6f6ff; padding: 2px; border-radius: 5px;">{{ item.venue }}</span>
  {% if item.url %}[[Paper]({{ item.url }})]{% endif %}
  {% if item.code %}[[Code]({{ item.code }})]{% endif %}

{% endfor %}
{% endfor %}

## US Patents

{% if site.data.publications.patents and site.data.publications.patents.size > 0 %}
{% for item in site.data.publications.patents %}
* **{{ item.title }}** <br>
  {{ item.authors }}. <br>
  <span style="background-color: #e6f6ff; padding: 2px; border-radius: 5px;">{{ item.venue }}, {{ item.year }}</span>

{% endfor %}
{% endif %}

