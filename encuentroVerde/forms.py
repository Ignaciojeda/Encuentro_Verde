from django import forms
from .models import Formulario, Genero
from django.forms import ModelForm

class FormularioForm(ModelForm):
    class Meta:
        model = Formulario
        fields = '__all__'  
        labels = {
            'nombre_cliente': 'Nombre',
            'apellido_cliente': 'Apellido',
            'numero_cliente': 'Número',
            'correo_cliente': 'Correo',
            'id_genero': 'Género',
            'ciudad_cliente': 'Ciudad'
        }

class FormularioForms(forms.ModelForm):
    class Meta:
        model = Formulario
        fields = '__all__'