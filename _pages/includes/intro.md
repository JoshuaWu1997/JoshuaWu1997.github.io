# About Me

I am a Ph.D. student in Computer Science at [University of California San Diego](https://ucsd.edu/), advised by Prof. [Julian McAuley](https://cseweb.ucsd.edu/~jmcauley/). I received my M.S. in Computer Engineering from New York University and B.S. in Statistics and Computer Science/Engineering from Chongqing University.

My research focuses on **large language models**, **reinforcement learning**, **multimodal learning**, and **recommender systems**, with an emphasis on reasoning, personalization, and agentic workflows. I enjoy working at the intersection of language, vision, music, and sequential decision-making. Specifically, my core research interests span:

* 🧠 **Reasoning in (M)LLMs:** I explore methods to enhance the cognitive capabilities of models, such as enabling chain-of-thought reasoning via latent state-transitions (*Ctrls*), information-theoretic soft prompt tuning (*InfoPrompt*), and coordinated multimodal instruction tuning (*CoMMIT*).
* ⚖️ **Alignment in (M)LLMs:** My work tackles the challenge of aligning models with human intents while preventing visual knowledge forgetting during instruction tuning. I develop novel preference optimization strategies, leveraging approaches like Direct Preference Optimization (e.g., *IRPO*, *MASS-DPO*), group-relative policy optimization, offline evaluation frameworks (*Ocean*).
* 🔗 **Causal Learning & Inference:** I leverage causal interventions to structurally debias chain-of-thought processes for knowledge-intensive tasks (*DeCoT*) and apply information-theoretic causal de-biasing for interactive frameworks.
* 🎵 **AI for Music:** I investigate fine-grained computational music understanding through temporally-enhanced generative augmentation (*FUTGA*) and contrastive long-form language-audio pretraining with musical temporal structures (*Collap*).
* 🤖 **Agentic Workflows:** I design and evaluate autonomous agents powered by foundation models. My work spans developing practical agentic frameworks for multi-page document question-answering (*Doc-React*), dynamic in-context example selection (*Dice*), and pioneering agentic paradigms within recommender systems.
* 🔍 **Recommendation & Information Retrieval:** I work on conversational and personalized recommendation systems, including neighborhood-based collaborative filtering, retrieval-augmented learning for long-tail recommendation (*CoRAL*), and knowledge-aware query expansion for textual and relational retrieval.

You can find my papers on [Google Scholar](https://scholar.google.com/citations?user=_iKeQFwAAAAJ&hl=en&oi=ao), [DBLP](https://dblp.org/pid/295/8249), and [ACL Anthology](https://aclanthology.org/people/j/junda-wu/).

### 🌟 Beyond the ML Research

Outside of research, I have a diverse set of passions that keep me balanced:

* 🎻 **Classical Music & Opera:** I am a passionate classical music fan and a regular concert and opera goer. My absolute favourite symphony is Mahler's Symphony No. 6 (particularly the recording by Michael Gielen and SWR), and I have a deep appreciation for operas like Richard Strauss's *Der Rosenkavalier* and Richard Wagner's *Tristan und Isolde*. the *Ohlone Wilderness Trail*, the *John Muir Trail*, and *Mount Diablo*.

💿 **Recommended Recent Recordings (keep updating)**

<div class="album-row-wrapper">
<div class="album-row">
{% for rec in site.data.albums.recordings %}
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

* 🪩 **Rave & Clubbing:** I am drawn to the immersive energy, vibrant communities, and dynamic soundscapes of the electronic music and clubbing scene. 
* 🥾 **Hiking:** I am an avid outdoorsman always looking for a rewarding ascent. My trail adventures range from group excursions with the *NY Ramblers* to tackling challenging, scenic routes like