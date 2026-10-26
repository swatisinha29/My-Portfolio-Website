---
title: Work
description: Products I have taken from zero to one, AI prototypes I have built, and AI product strategy case studies.
permalink: /work/
---
{%- assign groups = "shipped,prototype,concept" | split: "," -%}
{%- for g in groups %}
{%- assign items = site.projects | where: "kind", g | sort: "order" -%}
{%- if items.size > 0 %}
<section class="pub-group" aria-labelledby="g-{{ g }}">
  <h2 class="group-label" id="g-{{ g }}">
    {%- case g -%}
      {%- when "shipped" -%}0→1 products I owned
      {%- when "prototype" -%}AI products I built
      {%- when "concept" -%}AI product strategy case studies
    {%- endcase -%}
  </h2>
  <ol class="project-list">
  {%- for proj in items %}
    {% include project-item.html project=proj %}
  {%- endfor %}
  </ol>
</section>
{%- endif %}
{%- endfor %}
