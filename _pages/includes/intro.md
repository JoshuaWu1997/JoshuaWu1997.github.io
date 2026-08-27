# About Me

I am a Research Scientist at Adobe Research. I recently graduated with a Ph.D. in Computer Science from [University of California San Diego](https://ucsd.edu/), where I was advised by Prof. [Julian McAuley](https://cseweb.ucsd.edu/~jmcauley/). I received my M.S. in Computer Engineering from New York University and B.S. in Statistics and Computer Science/Engineering from Chongqing University.

My research focuses on **large language models**, **reinforcement learning**, **multimodal learning**, and **LLM agents**, with an emphasis on reasoning, post-training, personalization, and agentic workflows. I enjoy working at the intersection of language, vision, music, and sequential decision-making. Specifically, my core research interests span:

* 🧠 **Reasoning in (M)LLMs:** I explore the dynamics and control of language-model reasoning, including chain-of-thought reasoning via latent state-transitions ([*Ctrls*](https://arxiv.org/abs/2507.08182)), fine-grained reasoning control with activation steering ([*Self-Loops*](https://arxiv.org/abs/2607.18100)), step-aware reasoning energy analysis ([*How Hard Does It Think?*](https://arxiv.org/abs/2607.28674)), and online learning via inference-time action adaptation ([*OLIVIA*](https://arxiv.org/abs/2605.11169)).
* 🚀 **RL & Post-Training for LLMs:** I develop rollout-efficient policy optimization methods for LLM post-training, including weakly-supervised group-relative policy optimization ([*WS-GRPO*](https://arxiv.org/abs/2602.17025)), reference-relative policy optimization with stratified conditional rollouts ([*RRPO*](https://arxiv.org/abs/2607.18470)), multi-negative active sample selection ([*MASS-DPO*](https://openreview.net/pdf?id=gFtdK7pwHg)), and a comprehensive survey of rollout strategies for LLM reinforcement learning ([*survey*](https://arxiv.org/abs/2605.02913)).
* ⚖️ **Alignment in (M)LLMs:** My work tackles aligning models with human preferences while preserving learned capabilities, spanning in-context ranking preference optimization ([*IRPO*](https://arxiv.org/abs/2504.15477)), importance sampling for multi-negative multimodal DPO ([*IS-DPO*](https://arxiv.org/abs/2509.25717)), adversarial preference optimization for image difference captioning ([*IDC-APO*](https://aclanthology.org/2025.emnlp-main.1713/)), and adaptive modality preference steering ([*AMPS*](https://arxiv.org/abs/2602.12533)).
* 🔗 **Causal Learning & Inference:** I leverage causal interventions to structurally debias chain-of-thought processes for knowledge-intensive tasks ([*DeCoT*](https://aclanthology.org/2024.acl-long.758/)), apply information-theoretic causal de-biasing for [interactive sequence labeling](https://aclanthology.org/2022.findings-emnlp.251/), and develop deconfounded approaches for explainable vision-language retrieval ([*DeExpRetrieval*](https://dl.acm.org/doi/10.1145/3474085.3475366)) and [interactive recommendation](https://dl.acm.org/doi/10.1145/3616855.3635855).
* 🤖 **LLM Agents:** I design agents with evolving skills, memory, and deliberate decision-making, including agent skill evolution via reinforcement learning ([*Skill-R1*](https://arxiv.org/abs/2605.09359)), multimodal agent skills via conditional information bottleneck ([*Skill-CMIB*](https://arxiv.org/abs/2605.08526)), and belief-revising memory for conversational agents (*BELIEFMEM*).
* 🎵 **AI for Music:** I investigate computational music understanding and generation through skill-graph symbolic music reasoning (*SymSkill*), stem-aware automatic DJ transition generation (*MixWeaver*), compositional music information retrieval ([*CSyMR*](https://arxiv.org/abs/2601.11556)), in-the-wild symbolic music reasoning ([*WildScore*](https://aclanthology.org/2025.emnlp-main.853/)), and audio-centric conversational recommendation ([*MusicRS*](https://arxiv.org/abs/2509.19469)).
* 🔍 **Recommendation & Information Retrieval:** I work on personalized and conversational recommendation, including zero-data bootstrapping for conversational recommenders (*Zero-Data CRS*), collaborative retrieval-augmented long-tail recommendation ([*CoRAL*](https://dl.acm.org/doi/10.1145/3637528.3671901)), neighborhood-based collaborative filtering for conversational recommendation ([*NBCRS*](https://openreview.net/forum?id=9dwzIzjKVI)), and agentic paradigms for recommender systems ([*survey*](https://arxiv.org/abs/2503.16734)).

You can find my papers on [Google Scholar](https://scholar.google.com/citations?user=_iKeQFwAAAAJ&hl=en&oi=ao), [DBLP](https://dblp.org/pid/295/8249), and [ACL Anthology](https://aclanthology.org/people/j/junda-wu/).

### 🌟 Beyond the ML Research

Outside of research, I have a diverse set of passions that keep me balanced:

* 🎻 **Classical Music & Opera:** I am a passionate classical music fan and a regular concert and opera goer. My absolute favourite symphony is Mahler's Symphony No. 6 (particularly the recording by Michael Gielen and SWR), and I have a deep appreciation for operas like Richard Strauss's *Der Rosenkavalier* and Richard Wagner's *Tristan und Isolde*. 💿 **Recommended Recent Recordings (keep updating):**

<div class="album-row-wrapper">
<div class="album-row">
{% for rec in site.data.albums.classical_recordings %}
  <div class="album-item">
    {% if rec.url %}<a href="{{ rec.url }}" target="_blank" rel="noopener"><img src="{{ '/albums/' | append: rec.image | relative_url }}" alt="{{ rec.artist }}" class="album-cover"></a>{% else %}<img src="{{ '/albums/' | append: rec.image | relative_url }}" alt="{{ rec.artist }}" class="album-cover">{% endif %}
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
    {% if rec.url %}<a href="{{ rec.url }}" target="_blank" rel="noopener"><img src="{{ '/albums/' | append: rec.image | relative_url }}" alt="{{ rec.artist }}" class="album-cover"></a>{% else %}<img src="{{ '/albums/' | append: rec.image | relative_url }}" alt="{{ rec.artist }}" class="album-cover">{% endif %}
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
