from django.contrib import admin
from .models import  *

# Register your models here.
@admin.register(Rules)
class RulesAdmin(admin.ModelAdmin):
    list_display = ['Rule']
    list_editable = ['Rule']
    list_display_links = None