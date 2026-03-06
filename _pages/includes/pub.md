# Selected Publications 

<small>*† Corresponding author*</small>

{% for item in site.data.publications.featured %}
* **{{ item.title }}** <br>
  {{ item.authors }}. <br>
  <span style="background-color: #e6f6ff; padding: 2px; border-radius: 5px;">{{ item.venue }}</span>
  {% if item.url %}[[Paper]({{ item.url }})]{% endif %}

{% endfor %}

## US Patents

{% if site.data.publications.patents and site.data.publications.patents.size > 0 %}
{% for item in site.data.publications.patents %}
* **{{ item.title }}** <br>
  {{ item.authors }}. <br>
  <span style="background-color: #e6f6ff; padding: 2px; border-radius: 5px;">{{ item.venue }}, {{ item.year }}</span>

{% endfor %}
{% endif %}

