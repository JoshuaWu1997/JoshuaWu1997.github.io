# Presentations


# CV
## Educations

{% if site.data.cv.education and site.data.cv.education.size > 0 %}
{% for item in site.data.cv.education %}
* **{{ item.title }}** <br>
{{ item.description }}

{% endfor %}
{% endif %}

## Experiences

{% if site.data.cv.academic-experience and site.data.cv.academic-experience.size > 0 %}
{% for item in site.data.cv.academic-experience %}
* **{{ item.title }}** <br>
{{ item.description }}

{% endfor %}
{% endif %}

## Interesting Projects


## Awards


## Visitors


## Full Publication List

<details markdown="1">
<summary>Click to expand</summary>

{% for item in site.data.publications.index %}
* {{ item.name | replace: 'Junda Wu', '**Junda Wu**' }}{% if item.url %} [[Paper]({{ item.url }})]{% endif %}

{% endfor %}

</details>

<br>

