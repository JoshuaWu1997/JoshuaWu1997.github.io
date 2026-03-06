
# Selected Publications 

{% for item in site.data.publications.featured %}
* **{{ item.title }}** <br>
  {{ item.authors }}. <br>
  <span style="background-color: #e6f6ff; padding: 2px; border-radius: 5px;">{{ item.venue }}</span>
  [[Paper]({{ item.url }})]

{% endfor %}

