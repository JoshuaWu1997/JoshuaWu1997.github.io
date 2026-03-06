# Presentations


# CV
## Educations


## Experiences


## Interesting Projects


## Awards


## Visitors


## Full Publication List

<details markdown="1">
<summary>Click to expand</summary>

{% for item in site.data.publications.index %}
* **{{ item.title }}** <br>
  {{ item.authors }}. <br>
  <span style="background-color: #e6f6ff; padding: 2px; border-radius: 5px;">{{ item.venue }}</span>
  {% if item.url %}[[Paper]({{ item.url }})]{% endif %}

{% endfor %}

### US Patents

{% for item in site.data.publications.patents %}
* **{{ item.title }}** <br>
  {{ item.authors }}. <br>
  <span style="background-color: #e6f6ff; padding: 2px; border-radius: 5px;">{{ item.venue }}, {{ item.year }}</span>

{% endfor %}

</details>

<br>

