# Presentations


# CV
[Download CV](/docs/CV-General-PhD.pdf)

## Educations

* :trident: **University of California San Diego**, Sep 2023 – Now <br>
Ph.D. in Computer Science

* :part_alternation_mark: **New York University**, Sep 2021 – May 2023 <br>
M.S. in Computer Engineering

* 🦶 **Chongqing University**, Sep 2016 – Jul 2020 <br>
B.S. in Statistics, Minor in Computer Science and Engineering

## Experiences

* Research Scientist Intern
  * 🅰️ **Adobe Research**, San Jose — Jun 2025 – Nov 2025 <br>
  Deep Research in digital marketing for AEP; Developed hypothesis generation and experimental simulation
  * 🅰️ **Adobe Research**, San Jose — Jun 2024 – Nov 2024 <br>
  Multimodal Retrieval in AI Assistant for AEP; Developed Doc-React algorithm for document question-answering
  * 🅰️ **Adobe Research**, San Jose — May 2023 – Aug 2023 <br>
  Knowledge Graph Enhanced Chain-of-Thought Reasoning for Next Prompt Recommendation
  * 🅰️ **Adobe Research**, San Jose — May 2022 – Dec 2022 <br>
  Progressive Image Compression and Syncing for real-time collaborative image editing
* Conference and Journal Reviewer
  * LLM and NLP: ACL, EMNLP, NAACL, EACL, COLING, COLM
  * Machine Learning: NeurIPS, ICLR, AISTATS, ICML
  * Data Mining and Recommendation: KDD, CIKM, SIGIR, WWW, TKDE

<!-- ## Awards
 -->

## Visitors
<script type="text/javascript" id="mapmyvisitors" src="//mapmyvisitors.com/map.js?d=8-WHBrayP-2dmMb1hUEosPHOk__04NXeYa8qEFbfIdw&cl=ffffff&w=a"></script>

## Full Publication List

<details markdown="1">
<summary>Click to expand</summary>

<div class="pub-section" data-pub-scope="full">
<div class="pub-filters pub-filters--full">
  <input type="text" class="pub-filters__search" placeholder="Search publications..." aria-label="Search full publication list">
  <div class="pub-filters__chips">
    <button type="button" class="pub-filter-chip active" data-filter="all">All</button>
    {% assign all_years = site.data.publications.index | map: "year" | uniq | sort | reverse %}
    {% for y in all_years %}
    <button type="button" class="pub-filter-chip" data-filter="{{ y }}">{{ y }}</button>
    {% endfor %}
  </div>
</div>

{% assign grouped = site.data.publications.index | group_by: "year" | sort: "name" | reverse %}
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
    <button type="button" class="pub-abstract-toggle" data-target="abstract-full-{{ year_group.name }}-{{ forloop.index }}">Abstract</button>
    <div id="abstract-full-{{ year_group.name }}-{{ forloop.index }}" class="pub-abstract">{{ item.abstract }}</div>
  </div>
  {% endif %}
</li>
{% endfor %}
</ul>

{% endfor %}

{% if site.data.publications.patents and site.data.publications.patents.size > 0 %}
### US Patents

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

</details>

<br>
