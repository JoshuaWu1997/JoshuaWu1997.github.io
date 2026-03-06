---
layout: home
title: "Home"
---

### About Me

I am a Ph.D. student advised by Prof. [Julian McAuley](https://cseweb.ucsd.edu/~jmcauley/) at [CSE, UCSD](https://cse.ucsd.edu/). My research focuses on **large language models**, **multimodal learning**, and **recommender systems**, with an emphasis on **reasoning, personalization, and agentic workflows**. I enjoy working at the intersection of language, vision, and sequential decision-making.

You can find my papers on [Google Scholar](https://scholar.google.com/citations?user=_iKeQFwAAAAJ&hl=en&oi=ao), [DBLP](https://dblp.org/pid/295/8249), and [ACL Anthology](https://aclanthology.org/people/j/junda-wu/).

### News


### Selected Publications

{% for item in site.data.publications.featured %}
- {{ item.name }} [\[Paper\]]({{ item.url }})
{% endfor %}

### Full Publication List

{% for item in site.data.publications.index %}
- {{ item.name }} [\[Paper\]]({{ item.url }})
{% endfor %}