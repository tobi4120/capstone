# Generated by Django 3.2.11 on 2023-01-30 04:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='JobsAppliedTo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('posting_id', models.CharField(max_length=500, unique=True)),
                ('employer_logo', models.CharField(max_length=500)),
                ('employer_name', models.CharField(max_length=500)),
                ('job_apply_link', models.CharField(max_length=500)),
                ('job_title', models.CharField(max_length=500)),
                ('applied_on', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
