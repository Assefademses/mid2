# Generated by Django 4.1.4 on 2022-12-30 12:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('teach', '0002_rename_fname_teach_fullname_remove_teach_lname'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='teach',
            name='dept',
        ),
        migrations.RemoveField(
            model_name='teach',
            name='salary',
        ),
    ]
