---
title: Resume
description: AI Product Manager · B2B SaaS · 0→1 product builder.
permalink: /resume/
body_class: cv-page
---
{%- assign cv = site.data.cv -%}
{%- assign profile = site.data.profile -%}

<nav class="cv-toc" aria-label="Resume sections">
  <a href="#cv-exp">Experience</a>
  <a href="#cv-ai">AI projects</a>
  <a href="#cv-skills">Skills</a>
  <a href="#cv-edu">Education</a>
</nav>

<div class="cv-intro">
  {%- if cv.summary %}<p class="cv-summary">{{ cv.summary }}</p>{% endif %}
  <p class="cv-contact"><a href="mailto:{{ profile.email }}">{{ profile.email }}</a>{% for l in profile.links %}{% unless l.url == cv.pdf %} · <a href="{{ l.url }}">{{ l.label }}</a>{% endunless %}{% endfor %}</p>
  {%- if cv.pdf != "" %}<p><a class="button" href="{{ cv.pdf }}" rel="noopener">Download PDF</a></p>{% endif %}
</div>

<section class="cv-section" aria-labelledby="cv-exp">
  <h2 class="group-label" id="cv-exp">Experience</h2>
  {%- for e in cv.experience %}
  <div class="cv-entry">
    <p class="cv-when">{{ e.start }}{% if e.end != e.start %}–{{ e.end }}{% endif %}</p>
    <div class="cv-what">
      <h3>{{ e.org }}</h3>
      <p class="cv-where">{{ e.role }}{% if e.case_study %} · <a href="{{ e.case_study | relative_url }}">Case study</a>{% endif %}</p>
      {%- if e.details %}<ul>{% for d in e.details %}<li>{{ d }}</li>{% endfor %}</ul>{% endif %}
    </div>
  </div>
  {%- endfor %}
</section>

<section class="cv-section" aria-labelledby="cv-ai">
  <h2 class="group-label" id="cv-ai">AI product projects</h2>
  {%- assign builds = site.projects | where: "kind", "prototype" | sort: "order" -%}
  {%- for p in builds %}
  <div class="cv-entry">
    <p class="cv-when">{{ p.years }}</p>
    <div class="cv-what">
      <h3><a href="{{ p.url | relative_url }}">{{ p.title }}</a></h3>
      <p class="cv-where">{{ p.tagline }}{% if p.demo %} · <a href="{{ p.demo }}" rel="noopener">Live demo</a>{% endif %}</p>
      {%- if p.resume_points %}<ul>{% for d in p.resume_points %}<li>{{ d }}</li>{% endfor %}</ul>{% endif %}
    </div>
  </div>
  {%- endfor %}
</section>

<section class="cv-section" aria-labelledby="cv-skills">
  <h2 class="group-label" id="cv-skills">Skills &amp; tools</h2>
  <dl class="skills">
  {%- for s in cv.skills %}
    <dt>{{ s.area }}</dt>
    <dd>{{ s.items }}</dd>
  {%- endfor %}
  </dl>
</section>

<section class="cv-section" aria-labelledby="cv-edu">
  <h2 class="group-label" id="cv-edu">Education</h2>
  {%- for e in cv.education %}
  <div class="cv-entry">
    <p class="cv-when">{{ e.start }}{% if e.end != e.start %}–{{ e.end }}{% endif %}</p>
    <div class="cv-what">
      <h3>{{ e.degree }}</h3>
      <p class="cv-where">{{ e.institution }}, {{ e.location }}</p>
    </div>
  </div>
  {%- endfor %}
</section>
