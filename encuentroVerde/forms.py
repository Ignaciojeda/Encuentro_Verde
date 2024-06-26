from django import forms
from .models import Formulario,Genero

from django.forms import ModelForm

class FormularioForm(ModelForm):
    class Meta:
        model = Formulario
        fields = ["formulario"]
        labels = {"formulario": 'Formulario'}