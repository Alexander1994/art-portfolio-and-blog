# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-12-26 21:25
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('annies_portfolio_site', '0009_auto_20161226_2123'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blogpost',
            old_name='description',
            new_name='body',
        ),
    ]
