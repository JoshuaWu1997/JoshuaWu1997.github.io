# About Me

I am a Ph.D. student in Computer Science at [University of California San Diego](https://ucsd.edu/), advised by Prof. [Julian McAuley](https://cseweb.ucsd.edu/~jmcauley/). I received my M.S. in Computer Engineering from New York University and B.S. in Statistics and Computer Science/Engineering from Chongqing University.

My research focuses on **large language models**, **reinforcement learning**, **multimodal learning**, and **recommender systems**, with an emphasis on reasoning, personalization, and agentic workflows. I enjoy working at the intersection of language, vision, music, and sequential decision-making. Specifically, my core research interests span:

* 🧠 **Reasoning in (M)LLMs:** I explore methods to enhance the reasoning capabilities of language and multimodal models, including chain-of-thought reasoning via latent state-transitions ([*Ctrls*](https://arxiv.org/abs/2507.08182)), information-theoretic soft prompt tuning ([*InfoPrompt*](https://proceedings.neurips.cc/paper_files/paper/2023/hash/c01c0da4fe2ef2df9863f55261e2e924-Abstract-Conference.html)), coordinated multimodal instruction tuning ([*CoMMIT*](https://aclanthology.org/2025.emnlp-main.582/)), and information-theoretic diagnostics for traceable multimodal reasoning ([*T&E MLLMs*](https://openreview.net/forum?id=pQm66IPmeE)).
* ⚖️ **Alignment in (M)LLMs:** My work tackles aligning models with human preferences while preserving learned capabilities. I develop preference optimization strategies such as in-context ranking preference optimization ([*IRPO*](https://arxiv.org/abs/2504.15477)), adversarial preference optimization for image difference captioning ([*IDC-APO*](https://aclanthology.org/2025.emnlp-main.1713/)), and weakly-supervised group-relative policy optimization (*WS-GRPO*), alongside offline chain-of-thought evaluation and alignment ([*OCEAN*](https://openreview.net/forum?id=rlgplAuN2p)) and mitigating visual knowledge forgetting during MLLM instruction tuning via [modality-decoupled gradient descent](https://aclanthology.org/2025.findings-emnlp.123/).
* 🔗 **Causal Learning & Inference:** I leverage causal interventions to structurally debias chain-of-thought processes for knowledge-intensive tasks ([*DeCoT*](https://aclanthology.org/2024.acl-long.758/)), apply information-theoretic causal de-biasing for [interactive sequence labeling](https://aclanthology.org/2022.findings-emnlp.251/), and develop deconfounded approaches for [explainable vision-language retrieval](https://dl.acm.org/doi/10.1145/3474085.3475366) and [interactive recommendation](https://dl.acm.org/doi/10.1145/3616855.3635855).
* 🎵 **AI for Music:** I investigate computational music understanding through temporally-enhanced generative augmentation ([*FUTGA*](https://aclanthology.org/2024.nlp4musa-1.17/)), contrastive long-form language-audio pretraining ([*CoLLAP*](https://arxiv.org/abs/2410.02271)), benchmarking symbolic music reasoning in the wild ([*WildScore*](https://aclanthology.org/2025.emnlp-main.853/), [*CSyMR*](https://arxiv.org/abs/2601.11556)), and audio-centric conversational recommendation ([*MusicRS*](https://arxiv.org/abs/2509.19469)).
* 🤖 **Agentic Workflows:** I design autonomous agents powered by foundation models for multi-page heterogeneous document question-answering ([*Doc-React*](https://aclanthology.org/2025.acl-short.6/)), dynamic in-context example selection via efficient knowledge transfer ([*Dice*](https://arxiv.org/abs/2507.23554)), self-taught action deliberation ([*SAND*](https://aclanthology.org/2025.emnlp-main.152/)), and [agentic paradigms for recommender systems](https://arxiv.org/abs/2503.16734).
* 🔍 **Recommendation & Information Retrieval:** I work on personalized and conversational recommendation, including collaborative retrieval-augmented long-tail recommendation ([*CoRAL*](https://dl.acm.org/doi/10.1145/3637528.3671901)), [neighborhood-based collaborative filtering for conversational recommendation](https://openreview.net/forum?id=9dwzIzjKVI), RL-based [cross-domain interactive recommendation](https://dl.acm.org/doi/10.1145/3477495.3531969), [knowledge-aware query expansion](https://aclanthology.org/2025.naacl-long.216/), and [conversational bandits for user preference elicitation](https://dl.acm.org/doi/10.1145/3459637.3482328).

You can find my papers on [Google Scholar](https://scholar.google.com/citations?user=_iKeQFwAAAAJ&hl=en&oi=ao), [DBLP](https://dblp.org/pid/295/8249), and [ACL Anthology](https://aclanthology.org/people/j/junda-wu/).

### 🌟 Beyond the ML Research

Outside of research, I have a diverse set of passions that keep me balanced:

* 🎻 **Classical Music & Opera:** I am a passionate classical music fan and a regular concert and opera goer. My absolute favourite symphony is Mahler's Symphony No. 6 (particularly the recording by Michael Gielen and SWR), and I have a deep appreciation for operas like Richard Strauss's *Der Rosenkavalier* and Richard Wagner's *Tristan und Isolde*. 💿 **Recommended Recent Recordings (keep updating):**

<div class="album-row-wrapper">
<div class="album-row">
{% for rec in site.data.albums.classical_recordings %}
  <div class="album-item">
    <img src="{{ '/albums/' | append: rec.image | relative_url }}" alt="{{ rec.artist }}" class="album-cover">
    <div class="album-info">
      <strong>{{ rec.artist }}</strong>
      {% if rec.work %}<br>{{ rec.work }}{% endif %}
      {% if rec.album %}<br>{{ rec.album }}{% endif %}
      {% if rec.ensemble %}<br><span class="album-detail">{{ rec.ensemble }}{% if rec.conductor %}, {{ rec.conductor }}{% endif %}</span>{% endif %}
    </div>
  </div>
{% endfor %}
</div>
</div>

* 🪩 **Rave & Clubbing:** I am drawn to the immersive energy, vibrant communities, and dynamic soundscapes of the electronic music and clubbing scene. **Some Techno/Post-rave Recordings:**

<div class="album-row-wrapper">
<div class="album-row">
{% for rec in site.data.albums.techno_recordings %}
  <div class="album-item">
    <img src="{{ '/albums/' | append: rec.image | relative_url }}" alt="{{ rec.artist }}" class="album-cover">
    <div class="album-info">
      <strong>{{ rec.artist }}</strong>
      {% if rec.work %}<br>{{ rec.work }}{% endif %}
      {% if rec.album %}<br>{{ rec.album }}{% endif %}
      {% if rec.ensemble %}<br><span class="album-detail">{{ rec.ensemble }}{% if rec.conductor %}, {{ rec.conductor }}{% endif %}</span>{% endif %}
    </div>
  </div>
{% endfor %}
</div>
</div>

* 🥾 **Hiking:** I am an avid outdoorsman always looking for a rewarding ascent. My trail adventures range from group excursions with the *NY Ramblers* to tackling challenging, scenic routes like the *Ohlone Wilderness Trail*, the *John Muir Trail*, and *Mount Diablo*. Follow me on [Alltrails](https://www.alltrails.com/en-gb/members/junda-wu?utm_campaign=mobile-iphone&sh=zuaxap)