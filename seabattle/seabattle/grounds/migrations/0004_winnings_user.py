# Generated by Django 5.0 on 2024-01-28 20:21

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grounds', '0003_winnings'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='winnings',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='scoress', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
