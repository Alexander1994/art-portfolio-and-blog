# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2017-01-29 15:57
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('annies_portfolio_site', '0015_picturepost_thumbnail_size'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpost',
            name='thumbnail_size',
            field=models.CharField(choices=[('xs', 'extra-small'), ('sm', 'small'), ('md', 'medium'), ('lg', 'large'), ('xl', 'extra-large')], default='md', max_length=2),
        ),
    ]
