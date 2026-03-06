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
  * 🅰️ **Adobe Research**, San Jose — Jun 2024 – Nov 2024 <br>
  Multimodal Retrieval in AI Assistant for AEP; Developed Doc-React algorithm for document question-answering
  * 🅰️ **Adobe Research**, San Jose — May 2023 – Aug 2023 <br>
  Knowledge Graph Enhanced Chain-of-Thought Reasoning for Next Prompt Recommendation
  * 🅰️ **Adobe Research**, San Jose — May 2022 – Dec 2022 <br>
  Progressive Image Compression and Syncing for real-time collaborative image editing
* Conference Reviewer
  * ACL Rolling Review: ACL, EMNLP, NAACL, COLING
  * Machine Learning: NeurIPS, ICLR, AISTAT, ICML
  * Data Mining and Recommendation: KDD, CIKM, SIGIR, WWW, TKDE

## US Patents

{% if site.data.publications.patents and site.data.publications.patents.size > 0 %}
{% for item in site.data.publications.patents %}
* **{{ item.title }}** <br>
  {{ item.authors }}. <br>
  <span style="background-color: #e6f6ff; padding: 2px; border-radius: 5px;">{{ item.venue }}, {{ item.year }}</span>

{% endfor %}
{% endif %}

<!-- ## Awards
 -->

## Visitors
<script type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=343739&w=300&t=tt&d=KYawSvUri0xviH0XUuFXADAU5jT8Jz6CcEo2-YUIe20&co=ffffff&cmo=009fff&cmn=18e0ff&ct=cdd4d9'></script>

## Full Publication List

<details markdown="1">
<summary>Click to expand</summary>

{% for item in site.data.publications.index %}
* **{{ item.title }}** <br>
  {{ item.authors }}. <br>
  <span style="background-color: #e6f6ff; padding: 2px; border-radius: 5px;">{{ item.venue }}</span>
  {% if item.url %}[[Paper]({{ item.url }})]{% endif %}

{% endfor %}

{% if site.data.publications.patents and site.data.publications.patents.size > 0 %}
### US Patents

{% for item in site.data.publications.patents %}
* **{{ item.title }}** <br>
  {{ item.authors }}. <br>
  <span style="background-color: #e6f6ff; padding: 2px; border-radius: 5px;">{{ item.venue }}, {{ item.year }}</span>

{% endfor %}
{% endif %}

</details>

<br>
