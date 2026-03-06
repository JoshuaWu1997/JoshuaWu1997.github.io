---
layout: default
title: "Publications"
---

### Full Publication List

{% for item in site.data.publications.index %}
- {{ item.name }} [\[Paper\]]({{ item.url }})
{% endfor %}