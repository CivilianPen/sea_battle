# Generated by Django 5.0 on 2024-01-28 20:14

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grounds', '0002_alter_flat_ammo'),
    ]

    operations = [
        migrations.CreateModel(
            name='Winnings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='grounds.gifts')),
            ],
        ),
    ]
