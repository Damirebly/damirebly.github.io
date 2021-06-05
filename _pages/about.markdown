---

title: About
permalink: /about
---

## Skills

<ul>
    {% for skill in site.data.skills %}
    <li class="skill">{{ skill.name }} - {{ skill.rating }}</li>
    {% endfor %}
</ul>

## skills list 2

{% for item in site.data.skills %}
<h4>{{ item.category }}</h4>
<ul>
    {% for skill in item.skills %}
    <li class="skill">{{ skill.name }} - {{ skill.rating }}</li>
    {% endfor %}
</ul>
{% endfor %}