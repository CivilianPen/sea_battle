from django.db import models
from .models import  *

# Create your models here.
class Rules(models.Model):
    Rule = models.TextField('Правила')

    def __str__(self):
        return self.Rule