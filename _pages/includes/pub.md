# Selected Publications 

{% for item in site.data.publications.featured %}
* **{{ item.title }}** <br>
  {{ item.authors }}. <br>
  <span style="background-color: #e6f6ff; padding: 2px; border-radius: 5px;">{{ item.venue }}</span>
  {% if item.url %}[[Paper]({{ item.url }})]{% endif %}

{% endfor %}

