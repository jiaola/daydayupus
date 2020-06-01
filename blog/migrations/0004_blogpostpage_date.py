# Generated by Django 3.0.6 on 2020-06-01 11:22

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20200601_1118'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpostpage',
            name='date',
            field=models.DateField(default=django.utils.timezone.now, verbose_name='Post date'),
            preserve_default=False,
        ),
    ]
